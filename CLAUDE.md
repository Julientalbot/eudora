# Ti Bébé Péi - Guide de développement

## Commandes importantes

```bash
# Développement
npm run dev

# Build de production
npm run build

# Linting
npm run lint

# Démarrer en production
npm run start
```

## Structure du projet

- `/app` - Pages et routes (App Router)
- `/components` - Composants React réutilisables
- `/lib` - Utilitaires et données
- `/types` - Types TypeScript
- `/public` - Assets statiques

## Palette de couleurs

- Corail : `#FF6B6B`
- Turquoise : `#4ECDC4`
- Vert tropical : `#95E1D3`
- Sable : `#F5F3F0`
- Blanc cassé : `#FEFEFE`

## Déploiement Vercel

1. Pusher sur GitHub
2. Connecter le repo sur Vercel
3. Variables d'environnement : aucune requise pour l'instant
4. Build automatique sur chaque push

## Notes importantes

- Site e-commerce artisanal pour produits bébé/maman
- Thème tropical inspiré de La Réunion
- Utilise Next.js 15 avec App Router
- TypeScript + Tailwind CSS
- Turbopack activé pour le développement