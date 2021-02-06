# Vercel - Express - Typescript

Template for deploy expressjs server on Vercel with Typescript

:balloon: **Demo**: [go!](https://expressjs-typescript.vercel.app)

#### Stack

- :dizzy: ESLint
- :hibiscus: Prettier
- :ocean: Typescript
- :zap: Express.js

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
