import { test, expect } from "@playwright/test";
import { serviceCategories } from "../data/services";
import { siteConfig } from "../lib/site-config";

test.describe("Home", () => {
  test("mostra o hero e o CTA de WhatsApp com número e texto corretos", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "excelência que a sua autoestima merece"
    );

    const cta = page.getByRole("link", { name: "Agendar pelo WhatsApp" });
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
      const card = page.getByRole("link", { name: new RegExp(service.label) });
      await expect(card).toHaveAttribute("href", `/${service.slug}`);
    }
  });
});

test.describe("Navegação mobile", () => {
  test("o menu abre, mostra os links e fecha ao navegar", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Menu hambúrguer só existe no layout mobile");
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
        await expect(page.getByRole("heading", { name: item.name })).toBeVisible();
      }

      const cta = page.getByRole("link", { name: new RegExp(`Agendar ${service.label}`, "i") });
      const href = await cta.getAttribute("href");
      expect(href).toContain(encodeURIComponent(service.label));
    });
  }
});

test.describe("Responsividade — sem quebra de layout", () => {
  test("página inicial não gera overflow horizontal", async ({ page }) => {
    await page.goto("/");
    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(hasOverflow).toBe(false);
  });
});
