# Domain DNS — point expat.sg to Vercel

Production is already live at **https://expat-sg.vercel.app** (project **expat-sg**).  
Dashboard: https://vercel.com/abhishekcheriangeorge/expat-sg

Attach the custom domain next, then publish DNS at your registrar (wherever `expat.sg` is managed). Do **not** change registrar DNS until the domain is added in Vercel so you can confirm the exact records Vercel shows.

## 1. Connect the domain in Vercel

1. Open [expat-sg → Settings → Domains](https://vercel.com/abhishekcheriangeorge/expat-sg/settings/domains).
2. **Add** `expat.sg` and `www.expat.sg`.
3. Prefer apex `expat.sg` as the primary; redirect `www` → apex (Vercel can configure this).

Or via CLI (from this repo, authenticated as `george-6491` or equivalent):

```bash
npx vercel domains add expat.sg
npx vercel domains add www.expat.sg
```

## 2. DNS records (registrar)

Vercel will show exact values in the Domains UI after step 1. Typical setup for external DNS:

| Type  | Name | Value                         | Notes                                      |
| ----- | ---- | ----------------------------- | ------------------------------------------ |
| **A** | `@`  | `76.76.21.21`                 | Apex → Vercel                              |
| **CNAME** | `www` | `cname.vercel-dns.com`     | Or the project-specific CNAME Vercel shows |

Some registrars use `A` + `AAAA` for apex; follow the values Vercel displays for this project if they differ.

**If the registrar supports nameserver delegation:** you can point NS to Vercel DNS instead of A/CNAME — only do this if you intentionally want Vercel to manage the zone.

TTL: 300–3600 seconds is fine. Propagation is usually minutes to a few hours (up to 48h).

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
