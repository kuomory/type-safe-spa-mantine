# Type Safe SPA Template (Mantine)

## Getting Started

### Overview

SPAフロントエンドと、tRPCやPrismaなどの型安全性の高い技術を採用したmonorepoのWeb開発テンプレートです。  
プロトタイピングなど、アイデアを素早く動く形にすることを目的としています。

### Quick Start

```
pnpm quickstart
```

## Guide

### Requirements
- docker
- node
- pnpm

### Frameworks & Main Libraries

- Vite
- React
- Mantine
- TanStack Router
- Fastify
- tRPC
- Prisma
- zod
- date-fns

### Comands

- 開発DBの起動
  ```
  pnpm db start
  ```
- 開発サーバーの起動
  ```
  pnpm dev
  ```
- DBクライアントの起動
  ```
  pnpm db studio
  ```
- DBの停止
  ```
  pnpm db stop
  ```
- DBの初期化処理
  ```
  pnpm db bootstrap
  ```
- DBのリセット
  ```
  pnpm db reset
  ```
- DBのマイグレーション
  ```
  pnpm db migrate
  ```
- ビルド
  ```
  pnpm build
  ```
- ビルド成果物の実行
  ```
  pnpm preview
  ```
- テストの実行
  ```
  pnpm test
  ```
