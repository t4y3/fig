# Fig
Fig - library for gallery of Riot tag  
https://www.npmjs.com/package/@t4y3/fig

## Capture
![fig-sample](https://user-images.githubusercontent.com/9010553/36212907-89d063ae-11e8-11e8-8076-56582beae906.png)

![fig-sample](https://user-images.githubusercontent.com/9010553/36212906-89978034-11e8-11e8-8774-0c25e2f74ac3.png)


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
const inFig = require('@t4y3/fig');

require('./path/to/components1/fig.js');
require('./path/to/components2/fig.js');
require('./path/to/components3/fig.js');

module.exports = {
  'bundle': 'dist/bundle.js',
  'figures': inFig.getFigures()
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
const inFig = require('@t4y3/fig');

inFig.set('Button')
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
