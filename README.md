# Kasa Beauty — site institucional

Site em Next.js (App Router) + TypeScript + Tailwind CSS v4 para a Kasa Beauty
(@meirealmeidaclinic), Belvedere, Belo Horizonte.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Testes

```bash
npm run lint       # ESLint (já passa limpo)
npx tsc --noEmit   # checagem de tipos (já passa limpo)
npm run build      # build de produção (já testado neste ambiente)

# E2E com Playwright — precisa baixar o navegador uma vez (precisa de internet):
npx playwright install chromium
npm run test:e2e
```

> O ambiente onde este projeto foi gerado bloqueia o download do binário do
> Chromium (rede restrita), então os testes E2E não puderam ser executados
> aqui — mas foram escritos e cobrem: link do WhatsApp com número e texto
> corretos, navegação (desktop e menu mobile), conteúdo real de cada página
> de serviço, e ausência de overflow horizontal no mobile (iPhone SE, iPhone
> 14, iPad Mini, desktop). Rode localmente ou no CI antes de publicar.

## Publicando (GitHub + Vercel)

```bash
git remote add origin <url-do-seu-repositorio>
git push -u origin main
```

Depois, em vercel.com, Add New Project, importe o repositório. O Vercel
detecta Next.js automaticamente, não precisa configurar nada.

## Antes de publicar para a cliente — checklist de conteúdo real

Este projeto está com zero achismo de conteúdo: nenhum preço, nota do
Google, horário ou depoimento foi inventado. Antes de publicar, troque:

- [ ] Fotos reais em /public/images (hoje há placeholders com o rótulo do
      que deveria estar ali) — puxe do rolo de fotos real do Instagram, em
      alta resolução, não do print de tela.
- [ ] Horário de funcionamento real em lib/site-config.ts (hours)
- [ ] Avaliação do Google (se quiser exibir) — pegue o número real no
      Google Business Profile da clínica, não invente.
- [ ] 2-3 depoimentos reais de clientes (com autorização) — não existe
      seção de depoimentos ainda por esse motivo.
- [ ] siteUrl em app/layout.tsx, app/robots.ts e app/sitemap.ts — hoje
      aponta para um domínio de exemplo, trocar pelo domínio final.
- [ ] og-image.jpg em /public para o preview de compartilhamento.

## Segurança

Headers estritos configurados em next.config.ts: CSP, HSTS, X-Frame-Options
(anti-clickjacking), X-Content-Type-Options, Referrer-Policy, Permissions-Policy.

npm audit acusa 3 vulnerabilidades altas em dependências internas do
Next.js 16.2.12 (postcss/sharp) sem correção não-destrutiva disponível ainda
(a única correção automática rebaixaria o Next para a v9, o que quebraria o
projeto). Não é uma falha do código do site — é algo a monitorar e atualizar
quando o Next.js lançar um patch. Rode npm audit de novo antes de publicar
para conferir se já saiu correção.

## Estrutura

- app/ — páginas (App Router): home, 4 páginas de serviço, contato
- components/ — UI reutilizável (layout, home, service, ui)
- data/services.ts — conteúdo das categorias de serviço (fonte única)
- lib/site-config.ts — dados reais do negócio (endereço, WhatsApp, etc.)
- lib/whatsapp.ts — geração segura de links wa.me com texto pré-formatado
