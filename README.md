# carbon-svelte-webpack

> Svelte + Webpack template for building apps with the [Carbon Design System](https://www.carbondesignsystem.com/) with SASS/autoprefixing support.

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
└───public
│   └──index.html // HTML template
└───src
    └──App.svelte // base svelte file
    └──index.js // app entrypoint
    └──style.scss // @includes from `carbon-components`
```

## Available Scripts

### `yarn start`

Runs the app in development mode. Visit [http://localhost:8080](http://localhost:8080).

### `yarn build`

Builds the app for production; output folder is `build/`.

## Customization

### Port

Specify the port number using the `port` flag:

```bash
yarn start --port 3000
```

### Paths

Edit the `paths` variable to use different source/build paths.

```js
// webpack.config.js
const paths = {
  entry: path.resolve(__dirname, "src/index.js"),
  build: path.resolve(__dirname, "build"),
  public: path.resolve(__dirname, "public"),
  template: path.resolve(__dirname, "public/index.html"),
};
```

## License

[MIT](LICENSE)
