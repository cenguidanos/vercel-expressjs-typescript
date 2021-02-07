# Vercel - Express - Typescript - Deno - Rust

Template for deploy expressjs server on Vercel with Typescript, Deno aand Rust

:balloon: **Demo Express Server**: [go!](https://expressjs-typescript.vercel.app/v1)

:balloon: **Demo Express fectch users**: [go!](https://expressjs-typescript.vercel.app/v1/users)

:balloon: **Demo Deno Handler**: [go!](https://expressjs-typescript.vercel.app/v2)

:balloon: **Demo Rust JSON**: [go!](https://expressjs-typescript.vercel.app/v3)

:balloon: **Demo Rust random number**: [go!](https://expressjs-typescript.vercel.app/v3/random)

#### Stack

- :dizzy: ESLint
- :hibiscus: Prettier
- :zap: Express.js
- :wolf: Husky
- :ocean: Typescript
- :ocean: Deno with [vercel-deno](https://github.com/TooTallNate/vercel-deno)
- :ocean: Rust with [now-rust](https://github.com/mike-engel/now-rust)

#### 0. Previous

You need **Deno** installed in your machine. See [Denoland](https://deno.land/#installation) page.

You need **Rust** installed in your machine. See [Rustlang](https://www.rust-lang.org/tools/install) page.

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
