# Deployment guide — ricargo.co.id

This project is a Next.js app (App Router). Use Vercel for the easiest deployment; Netlify or your own server also work.

1) Prepare environment
  - Create a Vercel project from this repository (Import Project → Git Provider → select repo).
  - Add the required Environment Variables in Vercel (Project Settings → Environment Variables):
    - `NEXT_PUBLIC_SUPABASE_URL` = `https://your-project.supabase.co`
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `your-anon-key`

2) Build settings
  - Framework: `Next.js` (detected automatically). The default build command `npm run build` and output `.` are fine.

3) Custom domain (`ricargo.co.id`)
  - In Vercel, open the Project → Settings → Domains → Add `ricargo.co.id`.
  - Vercel will provide DNS records (usually CNAME or A records) — add those records at your domain registrar (where `ricargo.co.id` DNS is managed).
  - Wait for DNS propagation and verify the domain is issued an SSL certificate (Vercel will provision automatically).

4) Notes and troubleshooting
  - Client-side Supabase keys must be prefixed `NEXT_PUBLIC_` (the code reads them from `src/lib/supabaseClient.ts`). These are public anon keys — do not store server-only secrets with the `NEXT_PUBLIC_` prefix.
  - If track functionality fails in production, confirm that the `shipments` and `shipment_events` tables exist and the row/field names match those referenced in `src/app/track/page.tsx`.
  - If you need server-only secrets later (service_role key), store them in Vercel as Environment Variables without the `NEXT_PUBLIC_` prefix and only access them in server components or API routes.

5) Alternative (manual host)
  - Build: `npm run build`
  - Serve: `npm run start` (requires Node 18+ and the same env vars set in the host environment)

### Example: serve behind nginx (production)

On a Linux host you can run the app and proxy with `nginx`. Example `systemd` service for the Node app:

```ini
[Unit]
Description=Ricargo Next.js app
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/ricargoweb
Environment=NODE_ENV=production
Environment=NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
Environment=NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
ExecStart=/usr/bin/npm run start
Restart=always

[Install]
WantedBy=multi-user.target
```

Example `nginx` site config (replace `ricargo.co.id`):

```nginx
server {
  listen 80;
  server_name ricargo.co.id www.ricargo.co.id;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

After enabling the site and reloading nginx, the app will be reachable at `http://ricargo.co.id` and you can add TLS with Certbot:

```bash
sudo certbot --nginx -d ricargo.co.id -d www.ricargo.co.id
```


See `.env.local.example` for local development variable names.
