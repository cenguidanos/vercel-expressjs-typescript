# Vercel - Express - Typescript - Deno

Template for deploy expressjs server on Vercel with Typescript and Deno

:balloon: **Demo Express Typescript**: [go!](https://expressjs-typescript.vercel.app/v1) + `/users`

:balloon: **Demo Deno Server**: [go!](https://expressjs-typescript.vercel.app/v2)

#### Stack

- :dizzy: ESLint
- :hibiscus: Prettier
- :ocean: Typescript
- :ocean: Deno
- :zap: Express.js
- :wolf: Husky

#### 0. Previous

You need Deno installed in your machine. Go to [Denoland](https://deno.land/#installation) page.

#### 1. Install dependencies

```bash
yarn
```

#### 2. Install **@vercel/cli**

```bash
npm i -g @vercel/cli
```

#### 3. Login on Vercel from CLI

```bash
vercel login
```

#### 4. Create project on Vercel with **defaults**

```bash
vercel dev --listen 8080
```

#### 5. Allow **git** integration on Vercel project settings

#### 6. Add ignore build step on Vercel project git settings

This commmand prevents deploy dev and preview mode when push to repo.

- **Command**: `bash script.sh`

#### 7. Push to your repository!
