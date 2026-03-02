# 🚀 Wrkks

> **Turn your resume into a stunning personal website in seconds.**
> Import from LinkedIn or PDF — no coding required.

[![Live Demo](https://img.shields.io/badge/Live-wrkks.site-blue?style=flat-square)](https://www.wrkks.site)
[![Docs](https://img.shields.io/badge/Docs-Mintlify-green?style=flat-square)](https://dev-o-los-wrkks.mintlify.app/introduction)
[![TypeScript](https://img.shields.io/badge/TypeScript-97.9%25-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![License](https://img.shields.io/github/license/dev-o-los/wrkks?style=flat-square)](./LICENSE)

---

## 📖 Table of Contents

- [What is Wrkks?](#what-is-wrkks)
- [Features](#features)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Setup](#local-setup)
  - [Environment Variables](#environment-variables)
- [Contributing](#contributing)
  - [Workflow](#workflow)
  - [Branch Naming](#branch-naming)
  - [Commit Messages](#commit-messages)
  - [Pull Request Process](#pull-request-process)
  - [Code Style](#code-style)
- [Architecture](#architecture)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [License](#license)

---

## What is Wrkks?

Wrkks is an AI-powered platform that transforms your resume or LinkedIn PDF into a professional personal website — hosted instantly at `wrkks.site/username`. Stop sending PDF attachments. Start sending links.

Every generated site is optimized for professional presentation, supports dark mode, and requires zero design or coding knowledge from the user.

---

## Features

| Feature | Description |
|---|---|
| 📄 **Resume PDF Parsing** | Intelligent AI extraction of your professional info from any PDF |
| 🔗 **LinkedIn Import** | Direct import from a LinkedIn profile PDF export |
| ✏️ **Live Editing** | Visual editor with real-time preview before publishing |
| 🎨 **Website Styles** | Choose between *Simple* and *Bento* layouts — switch instantly |
| 🌙 **Dark Mode** | Built-in dark mode support across all themes |
| 🔤 **Custom Usernames** | Claim your own `wrkks.site/username` URL |
| 🚀 **One-Click Publish** | Deploy your site with a single button click |
| 🌐 **Custom Domains** | Connect your own domain to your Wrkks site |

---

## How It Works

```
1. Prepare   →   Use your existing resume PDF or export your LinkedIn profile as a PDF
2. Upload    →   Drop your PDF into the secure uploader (max 5MB)
3. Parse     →   AI analyzes your professional history and extracts structured data
4. Generate  →   A personal website is built mirroring a professional resume
5. Launch    →   Review, choose your theme, and publish to the world
```

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **UI Components:** shadcn/ui (`components.json`)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Linting:** ESLint
- **Docs:** [Mintlify](https://mintlify.com/)

---

## Project Structure

```
wrkks/
├── app/                  # Next.js App Router — pages, layouts, and API routes
├── components/           # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions, helpers, and shared logic
├── providers/            # React context providers (theme, auth, etc.)
├── public/               # Static assets (images, fonts, icons)
├── components.json       # shadcn/ui component configuration
├── next.config.ts        # Next.js configuration
├── output.ts             # Output/generation utilities
├── proxy.ts              # Proxy configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint configuration
├── postcss.config.mjs    # PostCSS configuration
├── pnpm-workspace.yaml   # pnpm workspace settings
└── package.json          # Project dependencies and scripts
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed before proceeding:

- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **pnpm** v8 or higher — Install via `npm install -g pnpm`
- **Git** — [Download](https://git-scm.com/)

### Local Setup

```bash
# 1. Fork the repository on GitHub, then clone your fork
git clone https://github.com/<your-username>/wrkks.git
cd wrkks

# 2. Install dependencies using pnpm
pnpm install

# 3. Copy the example environment file
cp .env.example .env.local

# 4. Fill in the required environment variables (see below)

# 5. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

> The app hot-reloads automatically when you edit files under `app/`, `components/`, `lib/`, etc.

### Environment Variables

Create a `.env.local` file in the root directory. Below are the variables you'll need to configure. Refer to the [Environment Variables docs](https://dev-o-los-wrkks.mintlify.app/deployment/environment-variables) for the full and up-to-date list.

```env
# AI / PDF Parsing
AI_API_KEY=your_ai_provider_api_key

# Database
DATABASE_URL=your_database_connection_string

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Storage (for PDF uploads)
STORAGE_BUCKET=your_storage_bucket_name
STORAGE_KEY=your_storage_access_key
STORAGE_SECRET=your_storage_secret_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> ⚠️ Never commit your `.env.local` file. It is already listed in `.gitignore`.

---

## Contributing

We welcome contributions of all kinds — bug fixes, new features, documentation improvements, and more. Please read through this section carefully before submitting a PR.

### Workflow

```
1. Fork the repository
2. Create a new branch from `master`
3. Make your changes
4. Write or update tests if applicable
5. Ensure linting passes: pnpm lint
6. Commit your changes following the commit convention
7. Push to your fork and open a Pull Request
```

### Branch Naming

Use descriptive, hyphen-separated branch names following this convention:

| Type | Pattern | Example |
|---|---|---|
| Feature | `feat/short-description` | `feat/bento-style-editor` |
| Bug Fix | `fix/short-description` | `fix/pdf-upload-crash` |
| Documentation | `docs/short-description` | `docs/update-env-vars` |
| Refactor | `refactor/short-description` | `refactor/resume-parser` |
| Chore | `chore/short-description` | `chore/upgrade-next` |

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```
<type>(<scope>): <short summary>

[optional body]

[optional footer]
```

**Examples:**

```bash
feat(editor): add real-time preview for bento style
fix(parser): handle multi-page LinkedIn PDF exports
docs(readme): update environment variables section
refactor(components): extract ResumeCard into shared component
chore(deps): upgrade next.js to 15.x
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`

### Pull Request Process

1. **Title:** Use the same format as commit messages (e.g., `feat(styles): add minimal theme option`)
2. **Description:** Clearly describe what your PR does and why. Include screenshots for UI changes.
3. **Link issues:** Reference any related issues using `Closes #<issue-number>`.
4. **Keep PRs focused:** One feature or fix per PR. Avoid bundling unrelated changes.
5. **Pass all checks:** Ensure CI passes before requesting a review.
6. **Request a review:** Tag a maintainer for review once your PR is ready.

### Code Style

- **TypeScript first:** All new code should be written in TypeScript with proper types. Avoid using `any`.
- **Component structure:** Place new UI components in `components/`. Keep them small and single-responsibility.
- **Hooks:** Custom React hooks go in `hooks/`.
- **Utilities:** Pure helper functions go in `lib/`.
- **Naming conventions:**
  - Components: `PascalCase` (e.g., `ResumeUploader.tsx`)
  - Hooks: `camelCase` prefixed with `use` (e.g., `useResumeParser.ts`)
  - Files (non-component): `kebab-case` (e.g., `parse-resume.ts`)
- **Linting:** Run `pnpm lint` before committing. The project uses ESLint with the config in `eslint.config.mjs`.
- **Formatting:** Use [Prettier](https://prettier.io/) if configured, or follow the existing code style.
- **No unused imports:** Remove any unused imports before submitting.

---

## Architecture

For a deep dive into the system design, see the [Architecture docs](https://dev-o-los-wrkks.mintlify.app/development/architecture).

At a high level:

```
User uploads PDF
      │
      ▼
/api/parse-resume  ──► AI Provider (PDF extraction & structuring)
      │
      ▼
Structured Resume Data (JSON)
      │
      ▼
Website Generator  ──► Applies chosen style (Simple / Bento)
      │
      ▼
Published at wrkks.site/username
```

- **`app/`** contains all route segments (Next.js App Router). API routes live under `app/api/`.
- **`components/`** houses both feature-specific and shared UI components.
- **`lib/`** contains the core parsing logic, AI integration utilities, and data transformation helpers.
- **`providers/`** wraps the app with global context (e.g., theme provider, session provider).

---

## API Routes

The primary API endpoint is documented at the [API Reference](https://dev-o-los-wrkks.mintlify.app/api/parse-resume):

| Method | Route | Description |
|---|---|---|
| `POST` | `/api/parse-resume` | Upload and parse a resume PDF |

More routes are documented in the [API Routes dev docs](https://dev-o-los-wrkks.mintlify.app/development/api-routes).

---

## Deployment

Wrkks is designed to be deployed on [Vercel](https://vercel.com/). For full deployment instructions, see the [Deployment Overview](https://dev-o-los-wrkks.mintlify.app/deployment/overview).

Quick deploy:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Make sure all required [Environment Variables](#environment-variables) are configured in your Vercel project settings.

For database setup, refer to the [Database Setup docs](https://dev-o-los-wrkks.mintlify.app/deployment/database-setup).

---

## Documentation

Full documentation is available at **[dev-o-los-wrkks.mintlify.app](https://dev-o-los-wrkks.mintlify.app/introduction)**.

| Section | Link |
|---|---|
| Introduction | [/introduction](https://dev-o-los-wrkks.mintlify.app/introduction) |
| Quickstart | [/quickstart](https://dev-o-los-wrkks.mintlify.app/quickstart) |
| Upload Resume | [/features/upload-resume](https://dev-o-los-wrkks.mintlify.app/features/upload-resume) |
| Edit Website | [/features/edit-website](https://dev-o-los-wrkks.mintlify.app/features/edit-website) |
| Website Styles | [/features/website-styles](https://dev-o-los-wrkks.mintlify.app/features/website-styles) |
| Publish Website | [/features/publish-website](https://dev-o-los-wrkks.mintlify.app/features/publish-website) |
| Custom Domain | [/features/custom-domain](https://dev-o-los-wrkks.mintlify.app/features/custom-domain) |
| Local Setup | [/development/local-setup](https://dev-o-los-wrkks.mintlify.app/development/local-setup) |
| Architecture | [/development/architecture](https://dev-o-los-wrkks.mintlify.app/development/architecture) |
| Components | [/development/components](https://dev-o-los-wrkks.mintlify.app/development/components) |
| API Routes | [/development/api-routes](https://dev-o-los-wrkks.mintlify.app/development/api-routes) |
| Environment Variables | [/deployment/environment-variables](https://dev-o-los-wrkks.mintlify.app/deployment/environment-variables) |
| Database Setup | [/deployment/database-setup](https://dev-o-los-wrkks.mintlify.app/deployment/database-setup) |

---

## License

This project is licensed under the terms found in the [LICENSE](./LICENSE) file.

---

<p align="center">Built with ❤️ by <a href="https://github.com/dev-o-los">dev-o-los</a> · <a href="https://www.wrkks.site">wrkks.site</a></p>
