# Inflexion App

A react and next app

📦 Tech Stack

- Frontend: React / Next.js / TypeScript / Tailwind CSS
- Deployment: Netlify

🚀 Getting Started

1. Clone the Repository
git clone [https://github.com/Falodent/inflexion.git](https://github.com/Falodent/inflexion.git)
cd your-repo

1. Install Dependencies

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

1. Configure Environment Variables
Create a .env file and add the necessary variables:

NEXT_PUBLIC_SERVER_URL=server_url

1. Run the App Locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

🏗️ Architectural Decisions

📁 Folder Structure
.
├── components/         # Reusable UI components
├── config/             # Server configuration
├── helpers/            # Reusable functions
├── layout/             # Higher order reusable components
├── pages/              # Next.js routes
├── services/           # Network calls hooks
├── styles/             # Tailwind and global styles
├── public/             # Static assets
└── types/              # TypeScript type definitions

💡 Key Patterns

- Component Composition: Small, reusable, stateless components
- API Fetching: React Query / Axios with interceptors
- Accessibility & SEO: Semantic HTML, head tags, and ARIA labels

🔒 Security Considerations

- All sensitive data is stored in .env and never committed
- Input validation is performed at both frontend and backend
- Rate limiting and CORS applied to APIs

📦 Deployment

- Frontend: Deployed to Netlify automatically builds on push to main.
