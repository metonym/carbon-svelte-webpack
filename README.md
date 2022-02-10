# carbon-svelte-webpack

> Svelte + Webpack template for building apps with the [Carbon Design System](https://www.carbondesignsystem.com/) with SCSS.

This set-up includes [carbon-components-svelte](https://github.com/IBM/carbon-components-svelte) and [carbon-components](https://github.com/carbon-design-system/carbon/tree/master/packages/components).

## Quick Start

Use [degit](https://github.com/Rich-Harris/degit) to quickly scaffold a new project:

```bash
npx degit metonym/carbon-svelte-webpack my-app
cd my-app
yarn
```

## Overview

SASS includes from carbon-components is located in [style.scss](src/style.scss).

Place static assets (like favicons) in the [public](public) folder.

```js
│
└───src
    └──App.svelte // base svelte file
    └──index.js // app entrypoint
    └──style.scss // @includes from `carbon-components`
```

## Available Scripts

### `yarn dev`

Runs the app in development mode. Visit [http://localhost:8080](http://localhost:8080).

### `yarn build`

Builds the app for production; output folder is `build/`.

## License

[MIT](LICENSE)
