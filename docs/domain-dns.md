# Domain DNS — point expat.sg to Vercel

After the first production deploy on Vercel, attach the custom domain and publish these DNS records at your registrar (wherever `expat.sg` is managed).

## 1. Connect the domain in Vercel

1. Open the project in the [Vercel dashboard](https://vercel.com/dashboard).
2. **Settings → Domains → Add** `expat.sg` and `www.expat.sg`.
3. Prefer apex `expat.sg` as the primary; redirect `www` → apex (Vercel can configure this).

Or via CLI (once authenticated):

```bash
npx vercel domains add expat.sg
npx vercel domains add www.expat.sg
```

## 2. DNS records (registrar)

Vercel will show exact values in the Domains UI. Typical setup:

| Type  | Name | Value                         | Notes                                      |
| ----- | ---- | ----------------------------- | ------------------------------------------ |
| **A** | `@`  | `76.76.21.21`                 | Apex → Vercel                              |
| **CNAME** | `www` | `cname.vercel-dns.com`     | Or the project-specific CNAME Vercel shows |

Some registrars use `A` + `AAAA` for apex; follow the values Vercel displays for this project if they differ.

TTL: 300–3600 seconds is fine. Propagation is usually minutes to a few hours.

## 3. Env after domain is live

Set production:

```bash
NEXT_PUBLIC_SITE_URL=https://expat.sg
```

in Vercel **Settings → Environment Variables** (Production), then redeploy so sitemap, canonicals, and OG URLs use the public host.

## 4. Verify

- `https://expat.sg` loads the site (HTTPS certificate issued by Vercel).
- `https://expat.sg/sitemap.xml` and `https://expat.sg/robots.txt` resolve.
- Optional: submit the sitemap in Google Search Console.
