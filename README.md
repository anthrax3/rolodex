# jsboilerplate
javascript starter pack

Download the zip file or git clone this repository.

To run your app on the latest stable version of node (with es2015) use [NVM](https://github.com/creationix/nvm) to manage your node version.
```
nvm install stable
```
Take note of the output with your node & npm version. We will be adding it to your package.json after the next step.


To initialize your project, run
```
npm init
```
Fill out the information for your package.json.
Add the following between license & dependencies. Replace the node & npm version numbers with the numbers from the output after your `nvm install stable`.
```
"engines": {
  "node": "5.10.1",
  "npm": "3.8.3"
},
```

Install your dependencies

> Because gulp, mocha & eslint have CLI tools, if you have not installed them on your machine in the past but want to use them globally, you should add `-g` to your npm install command in order to utilize them through your machine. You will only have to do this once and on future projects you can simply npm install. Keep in mind however that your global install might conflict with configurations unless you check to update your versions of these packages regularly.

```
npm install gulp mocha --save
npm install hapi inert chai gulp-concat gulp-sass normalize.css --save
npm install browserify babelify babel-preset-es2015 babel-preset-react --save
npm install babel-plugin-transform-class-properties babel-plugin-transform-decorators-legacy babel-plugin-transform-object-rest-spread --save
npm install babel-register redux-logger --save-dev
npm install watchify chokidar-cli npm-run-all --save-dev
npm install eslint babel-eslint eslint-plugin-babel eslint-plugin-react --save-dev
npm install react react-dom react-redux redux radium --save
```

Add the following scripts to your package.json's npm scripts.
```
"build": "npm run build:assets && npm run build:client",
"build:assets": "gulp",
"build:client": "mkdir -p './ui/' && browserify --transform babelify --entry './client/index.jsx' --outfile './ui/index.js'",
"lint": "eslint './client/'",
"test": "mocha --compilers js:babel-register './client/**/test.js'",
"start": "node server/index.js",
"watch": "npm-run-all --parallel watch:build watch:lint watch:test start",
"watch:build": "mkdir -p './ui/' && npm-run-all --parallel watch:build:client watch:build:assets",
"watch:build:client": "watchify --transform babelify --entry './client/index.jsx' --outfile './ui/index.js'",
"watch:build:assets": "gulp watch",
"watch:lint": "chokidar './client/' --initial --command 'npm run lint --silent'",
"watch:test": "chokidar './client/' --initial --command 'npm run test --silent'"
```

--------------------------------------------------------------------------------

# README

> Leave this information in your README.

## Getting Started

Run `npm install`

## Run Development

Run `npm run watch`.
Open `localhost:8000` in your browser.

## Run Production

Run `npm start`.
Open `localhost:8000` in your browser.
