import { test, expect } from "@playwright/test";
import { serviceCategories } from "../data/services";
import { siteConfig } from "../lib/site-config";

test.describe("Home", () => {
  test("mostra o hero e o CTA de WhatsApp com número e texto corretos", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "excelência que a sua autoestima merece"
    );

    // Escopo no <main>: o botão flutuante do WhatsApp tem o mesmo nome
    // acessível e vive fora dele, no layout.
    const cta = page.getByRole("main").getByRole("link", { name: "Agendar pelo WhatsApp" });
    await expect(cta).toBeVisible();
    const href = await cta.getAttribute("href");
    expect(href).toContain(`wa.me/${siteConfig.whatsappNumber}`);
    expect(href).toContain("text=");
    // A mensagem tem que estar de fato URI-encoded, não crua.
    expect(href).not.toContain(" ");
  });

  test("todos os cards de serviço levam para a página certa", async ({ page }) => {
    await page.goto("/");
    for (const service of serviceCategories) {
      // Escopo no <main>: o rodapé repete um link por categoria.
      const card = page
        .getByRole("main")
        .getByRole("link", { name: new RegExp(service.label) });
      await expect(card).toHaveAttribute("href", `/${service.slug}`);
    }
  });
});

test.describe("Navegação mobile", () => {
  test("o menu abre, mostra os links e fecha ao navegar", async ({ page }) => {
    // Quem decide é a largura, não o flag isMobile do device: o iPad Mini
    // reporta isMobile mas tem 768px, e o hambúrguer é md:hidden.
    const width = page.viewportSize()?.width ?? 0;
    test.skip(width >= 768, "A partir de md o hambúrguer dá lugar à navegação desktop");
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Abrir menu" });
    await toggle.click();
    await expect(page.getByRole("navigation", { name: "Navegação mobile" })).toBeVisible();

    await page.getByRole("navigation", { name: "Navegação mobile" }).getByRole("link", { name: serviceCategories[0].shortLabel }).click();
    await expect(page).toHaveURL(`/${serviceCategories[0].slug}`);
    await expect(page.getByRole("navigation", { name: "Navegação mobile" })).toHaveCount(0);
  });
});

test.describe("Páginas de serviço", () => {
  for (const service of serviceCategories) {
    test(`${service.label}: título, itens reais e CTA com o nome do serviço`, async ({ page }) => {
      await page.goto(`/${service.slug}`);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(service.label);

      for (const item of service.items) {
        // exact: sem isso, o item "Massagem" casa também com o h1
        // "Massagem & Estética", já que o padrão é busca por substring.
        await expect(
          page.getByRole("heading", { name: item.name, exact: true })
        ).toBeVisible();
      }

      // A página repete o CTA no topo e no fecho, então valida todos:
      // um deles apontando para o serviço errado passaria despercebido.
      const ctas = page.getByRole("link", { name: new RegExp(`Agendar ${service.label}`, "i") });
      const hrefs = await ctas.evaluateAll((els) =>
        els.map((el) => el.getAttribute("href"))
      );
      expect(hrefs.length).toBeGreaterThan(0);
      for (const href of hrefs) {
        expect(href).toContain(encodeURIComponent(service.label));
      }
    });
  }
});

test.describe("Responsividade: sem quebra de layout", () => {
  test("página inicial não gera overflow horizontal", async ({ page }) => {
    await page.goto("/");
    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(hasOverflow).toBe(false);
  });
});
