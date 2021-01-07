# docs-site

This repo is a statically generated website served at https://docs.gecotoolbox.io.
The site is automatically built and deployed using [vercel](https://vercel.com/).

## translations

These docs are only available in English right now.

## dev commands

```bash
# Serve assets locally
# -> Serves on http://localhost:8080
npm run serve

# Build assets for production
# -> Puts them into dist
npm run build

# Lint javascript code
# -> Uses eslint
npm run lint

# Run in debug mode
npm run debug

# Open the vercel dashboard
open https://vercel.com/openlab/docs-gecotoolbox-io
```

## code formatting

The code in this repo is automatically formatted using [Prettier](https://prettier.io).
It works by running all git-staged code through prettier before you commit.
This uses the [husky](https://www.npmjs.com/package/husky)
and [lint-staged](https://www.npmjs.com/package/lint-staged) packages
which are configured in the [package.json](/package.json).

## styles

The site is styled using a configured version of [bulma](https://bulma.io)
which [sass/styles.scss](/sass/styles.scss) is the entrypoint of.

---

> This project was set up by [puggle](https://npm.im/puggle)
