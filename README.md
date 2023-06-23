# Turborepo + NextJS + Shadcn + Storybook starter

This is a starter template for [Turborepo](https://turbo.build/repo) with [Next.js](https://nextjs.org/), [Shadcn/ui](https://ui.shadcn.com/) and [Storybook](https://storybook.js.org/) already setup.

> **Note**
> This example uses `pnpm` as package manager.

It is very minimal and includes only the essentials needed to get started. I've created this template to help me get started with my projects faster.

If you wish for a version without Storybook, please check out [turborepo-shadcn-ui](https://github.com/dan5py/turborepo-shadcn-ui) by dan5py.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a ui library using shadcn-ui
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Install

To get started, go to the root and run the following command:

```
pnpm install
```

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

I've also included various scripts to help you develop your apps and packages:

- `dev:docs`: develop the `docs` app
- `dev:web`: develop the `web` app
- `dev:both`: develop both the `docs` and `web` apps
- `dev:ui`: develop the `ui` package with Storybook
- `ui:add`: add a new component to the `ui` package using the shadcn-ui CLI.

There's probably a better way to do this, but I haven't figured it out yet. If you know how to do this, please let me know.

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Special Thanks

Special thanks to [shacn/ui](https://ui.shadcn.com/) for creating this amazing UI library.

## Contribute

If you have any suggestions or improvements, please feel free to open an issue or a pull request.
