# Fig
Fig - library for gallery of Riot tag  
https://www.npmjs.com/package/@t4y3/fig

## Demo
- https://fig-example.netlify.com/

## Capture
![fig-sample](https://user-images.githubusercontent.com/9010553/36936503-bef2f4b6-1f49-11e8-8380-39ba51568fad.png)



## Description
Mount the custom tag specified in tags in the iframe.  
It is for displaying and confirming the custom tag created.  
Use it like a style guide.

## Install
```bash
npm i @t4y3/fig
```

## Usage
```bash
# Server start
fig-start
```

Access `localhost: 8080`

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
  'bundle': 'dist/bundle.js',
  'figures': [
    'path/to/components1/fig.js',
    'path/to/components2/fig.js',
    'path/to/components3/fig.js'
  ]
};


```
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

## Shortcut
- `command + shift + ←` - Toggle Tree View
- `commnad + shift + →` - Toggle Info View
- `↑ or ↓` - Change View Custom Tag
