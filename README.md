# Ti Bébé Péi - Eudora

Un site e-commerce moderne pour créations artisanales avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Technologies

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **Turbopack** - Bundler ultra-rapide pour le développement
- **ESLint** - Linting du code

## 📁 Structure du projet

```
eudora/
├── app/              # Routes et pages (App Router)
├── components/       # Composants réutilisables
├── lib/             # Fonctions utilitaires
├── types/           # Types TypeScript
├── hooks/           # Custom React hooks
├── public/          # Assets statiques
│   └── images/      # Images
└── vercel.json      # Configuration Vercel
```

## 🛠️ Installation

```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd eudora

# Installer les dépendances
npm install

# Copier les variables d'environnement
cp .env.example .env.local

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) pour voir le résultat.

## 📝 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement avec Turbopack
- `npm run build` - Build l'application pour la production
- `npm run start` - Démarre le serveur de production
- `npm run lint` - Lance ESLint sur le code

## 🚀 Déploiement sur Vercel

1. Pusher le code sur GitHub
2. Connecter le repo à [Vercel](https://vercel.com)
3. Configurer les variables d'environnement
4. Déployer !

## 📚 Documentation

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)