# Sa11y - check and score the accessibility of any HTML document

Sa11y is a comprehensive accessibility testing platform that helps you check and score the accessibility of HTML documents. The platform consists of two main components: a backend API (sa11y-api) and a frontend client (sa11y-client).

![System Architecture](./assets/sa11y-upload.png)
![System Architecture](./assets/sa11y-report.png)

## The System design architecture for file uploads

Here's an image that summarises the process:

![System Architecture](./assets/system-architecture.png)

1. We receive a file upload on the backend API at the route `POST /api/v1/a11y-checks`
2. We perform basic file type and file size Validation
3. We upload the file to a private unlisted S3 private bucket
4. We insert a new row into the database for this newly created check
5. We dispatch a queue job called `ProcessA11yCheckJob` to process this job in the background.
6. The queue job processes the file, and after it is completed, it sends a server sent event to the client to notify that the job is completed.

## The Backend (sa11y-api)

### Technology Stack

- **[AdonisJS](https://adonisjs.com/)** - A fully-featured Node.js web framework
  - Chosen for its robust TypeScript support, built-in features, and excellent developer experience
- **PostgreSQL** - Primary database
- **Redis** - Used for queues and real-time updates
- **Bull Queue** - Background job processing
- **Puppeteer** - Headless browser automation for accessibility testing
- **Vine** - Validation library
- **Japa** - Testing framework
- **Transmit** - A library to make Server Sent Events seamless
- **pnpm** - Fast, easy to use alternative to the default NodeJS
- **AWS S3** - Secure file storage in the cloud

### Setup

1. Install dependencies:

```bash
cd sa11y-api
pnpm install
```

2. Configure environment:

```bash
cp .env.example .env
```

Modify the environment variables to match your environment. Most importantly, you'll be needing credentials to a Postgres and Redis database.

### Running the API

The scripts section of `package.json` file will provide you with all the commands you need for running the server in development, production, building, testing, linting, formatting and typechecking the backend codebase.

```json
"start": "node bin/server.js",
"build": "node ace build",
"dev": "node ace serve --hmr",
"test": "node ace test",
"lint": "eslint .",
"format": "prettier --write .",
"typecheck": "tsc --noEmit"
```

## The Frontend (sa11y-client)

### Technology Stack

- React - UI library
- Vite - Build tool and development server
- React Query - Seamless data fetching and state management
- React Router - Client-side routing
- Radix UI & ShadCN UI - Accessible component primitives (Radix UI) with a nice starter UI (ShadCN)
- Tailwind CSS - Utility-first CSS framework
- Playwright - E2E testing
- Vitest - Unit & component integration testing
- Testing Library - Component testing utilities for accessible component testing practices

### Running the client

The scripts section of `package.json` file will provide you with all the commands you need for running the server in development, production, building, testing, linting, formatting and typechecking the backend codebase.

```json
"dev": "vite",
"build": "tsc -b && vite build --mode=prod",
"lint": "eslint .",
"test": "vitest --run",
"test:e2e": "playwright test",
"preview": "vite preview"
```
