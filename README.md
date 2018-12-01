# Fig
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

## Develop
### In development
```sh
# build & watch
npm run watch
```

```sh
# example start
npm start
```

## Before commitment

```sh
# bundle
npm run build
```
