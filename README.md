# Fig

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/t4y3/fig/blob/master/LICENSE)
[![Version](https://img.shields.io/badge/dynamic/json.svg?label=version&colorB=5f9ea0&query=$.version&uri=https:%2F%2Fraw.githubusercontent.com%2Ft4y3%2Ffig%2Fmaster%2Fpackage.json&prefix=v)](https://www.npmjs.com/package/@t4y3/fig)

Fig - library for gallery of Riot tag  
You can check each component like a React Styleguidist by list.  
It is also possible to check only specific component information.  
https://www.npmjs.com/package/@t4y3/fig

## Demo
- https://fig-example.netlify.com/

## Capture
### Index Page
![index](https://user-images.githubusercontent.com/9010553/44952242-babc0d00-aeb5-11e8-8198-b4a7b388d970.png)

### Other pages
Component|Types of Component|Full
:--:|:--:|:--:
![components](https://user-images.githubusercontent.com/9010553/44952239-b98ae000-aeb5-11e8-99c9-fe12a5292f80.png)|![components type](https://user-images.githubusercontent.com/9010553/44952240-ba237680-aeb5-11e8-86eb-6c258e8c93aa.png)|![full](https://user-images.githubusercontent.com/9010553/44952241-ba237680-aeb5-11e8-9c59-5cefed0b17b6.png)



## Description
Mount the custom tag specified in tags in the iframe.  
It is for displaying and confirming the custom tag created.  
Use it like a style guide.

## Install
```bash
npm i @t4y3/fig
```

## Usage
### In local environment
```bash
# Server start
fig-start
```

Access `localhost: 8080`

### Hosting a style guide
- Please build and generate a static file

```bash
# Generate static file
fig-build
# or Specify the dist directory(default: dist)
fig-build docs
```



## Configuration
```sh
.fig/config.js
.fig/head.html
path/to/fig.js
```

### .fig/config.js
Set the following rule in `.fig/config.js`.

```js
module.exports = {
  'title': 'Your project name',
  'bundle': 'dist/bundle.js',
  'figures': [
    'path/to/components1/fig.js',
    'path/to/components2/fig.js',
    'path/to/components3/fig.js'
  ]
};


```
- `title` - Title of the Styleguide
  - default: `Fig`
- `bundle` - files required to display custom tags

### .fig/head.html
```html
<link rel="stylesheet" href="path/to/style.css">
<script type="text/javascript" src="path/to/script.js"></script>
```
- Add resources other than bundle files.
- It will be added in the head tag.

### `fig.js`.

```js
const InFig = require('@t4y3/fig');

InFig.set('Button')
  .add('red', () => {
      return `<my-button type="{ type }" text="click"></my-button>`
    }, {
      type: 'red'
    })
  .add('blue', () => {
      return `<my-button type="{ type }" text="click"></my-button>`
    }, {
      type: 'blue'
    });

```

## Development

#### Installing
```sh
# Install npm packages
npm i
```

### Running
```sh
# build & watch
npm run watch

# example start
npm start
```

### Before commitment

```sh
# bundle
npm run build
```

#### Library
- [Hyperapp](https://github.com/jorgebucaran/hyperapp) - View

## Deployment(git-flow)
```sh
# Checkout Release branch from `develop`
git checkout -b release/x.x.x

# Version Up
npm version major|minor|patch

# Publishes a package to the registry
npm publish

# Update master branch
git push origin release/x.x.x

# Push git tags
git push origin --tags

# Merge `release/x.x.x` into `master`

# Merge `release/x.x.x` into `develop`
```

