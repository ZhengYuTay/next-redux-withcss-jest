[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/ZhengYuTay/next-redux-withcss-jest)

# next-css example

## How to use

### Using `create-next-app`

Download [`create-next-app`](https://github.com/segmentio/create-next-app) to bootstrap the example:

```
npm i -g create-next-app
create-next-app --example with-next-css with-next-css-app
```

### Download manually

Download the example [or clone the repo](https://github.com/zeit/next.js):

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-next-css
cd with-next-css
```

Install it and run:

```bash
npm install
npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

This example demonstrates how to use the [next-css plugin](https://github.com/zeit/next-plugins/tree/master/packages/next-css) It includes patterns for with and without CSS Modules, with PostCSS and with additional webpack configurations on top of the next-css plugin.