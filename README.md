# Sell Shop (sell-shop)

A business solution to keep track of sell and buy

## Install the dependencies
```bash
yarn
# or
npm install

# mobile
npm install -g cordova
https://quasar.dev/quasar-cli-vite/developing-cordova-apps/preparation

# desktop from the root of your Quasar project
yarn upgrade electron@latest
# or:
npm install electron@latest

```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
# mobile
quasar dev -m android --ide
quasar dev -m ios --ide
# desktop
quasar dev -m electron

```


### Lint the files
```bash
yarn lint
# or
npm run lint
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

```sh
docker system prune -a --volumes
```
```sh
docker build -t vue-nginx .
```
```sh
docker run --rm -it -p 8080:80 vue-nginx
```

### Upgrade to latest stable Quasar versions
```bash
quasar upgrade -i
```

Chart for the project: https://apexcharts.com/vue-chart-demos/
