
# Meet AI Platform 🚀

Next-generation video conferencing powered by AI: smarter, more productive, and effortlessly organized.

---

## 🌟 Features

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/Lostovayne/meet-ai-platform?utm_source=oss&utm_medium=github&utm_campaign=Lostovayne%2Fmeet-ai-platform&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

| Core Functionality         | AI Capabilities           |
|---------------------------|---------------------------|
| AI-Powered Video Calls    | Custom Real-time Agents   |
| Smart Meeting Summaries   | AI Q&A                    |
| Meeting Recordings        | OpenAI Integration        |
| Transcript Search         | Smart Transcripts         |

---

## 🛠️ Technical Stack

| Layer         | Technology                                    |
| ------------- | --------------------------------------------- |
| Frontend      | Next.js 15, React 19, Tailwind CSS v4         |
| UI Components | shadcn/ui                                     |
| Auth          | Better Auth                                   |
| Real-time     | Stream Video SDK, Stream Chat SDK             |
| Background    | Inngest (background jobs)                     |
| Payments      | Polar subscriptions                           |
| DB/ORM        | Drizzle ORM                                   |
| Package Mgmt  | Bun, npm, or yarn                             |
| Deploy        | AWS Amplify                                   |

---

## 📐 Architecture Overview

```mermaid
flowchart TD
    User[User] -->|Sign In/Up| NextJS[Next.js App]
    NextJS -->|API Call| AuthAPI[Better Auth API]
    NextJS -->|Video| StreamSDK[Stream Video/Chat SDK]
    NextJS -->|AI| OpenAI[OpenAI API]
    NextJS -->|Payments| Polar[Polar API]
    NextJS -->|Background| Inngest[Inngest Jobs]
    NextJS -->|DB| Drizzle[Drizzle ORM]
```

---

## 🔐 Authentication Flow

```mermaid
sequenceDiagram
    participant U as User
    participant FE as Next.js Frontend
    participant BA as Better Auth API
    participant DB as Database

    U->>FE: Submit credentials (Sign In/Up)
    FE->>BA: POST /api/auth
    BA->>DB: Validate or create user
    DB-->>BA: User data / Auth token
    BA-->>FE: Auth token (JWT/session)
    FE-->>U: Set session, redirect to dashboard
```

---

## 📦 Main Endpoints (API)

| Endpoint                        | Method | Description                        |
|---------------------------------|--------|------------------------------------|
| `/api/auth/sign-in`             | POST   | User login                   |
| `/api/auth/sign-up`             | POST   | User registration                |
| `/api/meetings`                 | GET    | List meetings                   |
| `/api/meetings`                 | POST   | Create new meeting                |
| `/api/meetings/:id`             | GET    | Get meeting details        |
| `/api/meetings/:id/summary`     | GET    | Get AI meeting summary   |
| `/api/meetings/:id/recording`   | GET    | Download recording                |
| `/api/payments/subscribe`       | POST   | Subscribe via Polar              |

---

## ⚙️ Environment Variables

Set up your variables in `.env.local`:

| Variable              | Description                                 |
|-----------------------|---------------------------------------------|
| `STREAM_API_KEY`      | Stream Video/Chat credential             |
| `STREAM_API_SECRET`   | Stream Video/Chat secret                |
| `OPENAI_API_KEY`      | OpenAI Key                            |
| `BETTER_AUTH_SECRET`  | Secret for Better Auth                    |
| `POLAR_API`           | Key for Polar payments                  |
| ...                   | See `.env.example` for more details        |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Bun (opcional, recomendado)
- npm o yarn
- Credenciales de Stream
- API Key de OpenAI

### Installation

```bash
# Clone the repository
git clone https://github.com/LostoVayne/meet-ai-platform.git
cd meet-ai-platform

# Install dependencies (choose one)
bun install
# o
npm install
# o
yarn

# Set environment variables
cp .env.example .env.local

# Start the development server
bun dev
# o
npm run dev
# o
yarn dev
```

---

## 🚀 Deploy on AWS Amplify

1. Connect your repository in AWS Amplify.
2. Set up environment variables in the Amplify panel.
3. Amplify detecta Next.js y usa `amplify.yml` para el build.
4. Deployment is automatic on each push to the main branch.

---

## 🧩 Using shadcn/ui

- Reusable components in `src/components/ui/`.
- Example:

```tsx
import { Button } from "@/components/ui/button";

<Button variant="primary">Start meeting</Button>
```

---

## 🔑 Better Auth

- Secure and modern authentication.
- Flows in `src/app/(auth)/sign-in` and `sign-up`.
- Custom views in `src/modules/auth/ui/views/`.

---

## 💳 Polar (Payments and Subscriptions)

- Integration with Polar for subscriptions and payments.
- Set your key in environment variables.
- The payment flow is handled from the dashboard.

---

## 📚 Rules and best practices

- Usa **Bun** for fast and efficient development.
- Follow Next.js folder convention (app router).
- UI components in `src/components/ui/`.
- Custom hooks in `src/hooks/`.
- Keep dependencies updated.
- Use ESLint and Prettier to keep the code clean.
- Do not upload keys or secrets to the repository.

---

## 📞 Support

Questions or suggestions? Open an issue or contact [shubhangampandey](https://github.com/shubhangampandey).
