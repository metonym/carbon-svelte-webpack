# carbon-svelte-webpack

[![Build][build]][build-badge]

> Svelte + Webpack template for building apps with the [Carbon Design System](https://www.carbondesignsystem.com/)

This template demonstrates a viable set-up for consuming [Carbon Components Svelte](https://github.com/IBM/carbon-components-svelte) in Svelte by including [Carbon Components Svelte](https://github.com/IBM/carbon-components-svelte), [Carbon Icons Svelte](https://github.com/IBM/carbon-icons-svelte) and [Carbon Components](https://github.com/carbon-design-system/carbon/tree/master/packages/components).

## Getting Started

Clone the repository and install its dependencies.

```bash
git clone git@github.com:metonym/carbon-svelte-webpack.git
cd carbon-svelte-webpack
yarn install
```

## Available Scripts

### `yarn develop`

Runs the app in development mode. Visit [http://localhost:8080](http://localhost:8080) to view the app.

Customize the port number using the `port` flag:

```bash
yarn start --port 3000
```

The following code only runs in development mode.

```js
// src/App.svelte
if (process.env.NODE_ENV === "development") {
  console.group("carbon-svelte-webpack");
  console.info("This message only appears in development.");
  console.groupEnd();
}
```

### `yarn build`

Builds the app for production. Compiled assets are outputted to `build/`.

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/carbon-svelte-webpack.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/carbon-svelte-webpack
