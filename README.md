# fractalysium-web

Site vitrine Next.js (export statique) déployé sur Vercel.

## Démarrage
```bash
npm ci
cp .env.example .env.local
npm run dev
```

## Déploiement Vercel
Importez ce dépôt dans Vercel : **Root Directory vide**, framework Next.js.
Variable requise en production : `NEXT_PUBLIC_API_URL` (URL de `fractalysium-api`).
Les en-têtes de sécurité (CSP, HSTS…) sont dans `vercel.json`.


> Fractalysium — propriétaire et confidentiel. Voir `SECURITY.md` pour signaler une vulnérabilité.
