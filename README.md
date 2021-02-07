# Vercel - Express - Typescript - Deno - Rust

Template for deploy expressjs server on Vercel with Typescript, Deno aand Rust

:balloon: **Demo Express Server**: [go!](https://expressjs-typescript.vercel.app/v1) + `/users`

:balloon: **Demo Deno Handler**: [go!](https://expressjs-typescript.vercel.app/v2)

:balloon: **Demo Rust Handler**: [go!](https://expressjs-typescript.vercel.app/v3)

#### Stack

- :dizzy: ESLint
- :hibiscus: Prettier
- :zap: Express.js
- :wolf: Husky
- :ocean: Typescript
- :ocean: Deno
- :ocean: Rust

#### 0. Previous

You need Deno installed in your machine. Go to [Denoland](https://deno.land/#installation) page.

You need Rust installed in your machine. Go to [Rustlang](https://www.rust-lang.org/tools/install) page.

#### 1. Install dependencies

```bash
npm i
```

#### 3. Login on Vercel from CLI

```bash
npm run vercel login
```

#### 4. Create project on Vercel with **defaults**

```bash
npm run vercel dev --listen=8080
```

#### 5. Allow **git** integration on Vercel project settings

#### 6. Add ignore build step on Vercel project git settings

This commmand prevents deploy dev and preview mode when push to repo.

- **Command**: `bash script.sh`

#### 7. Push to your repository!
