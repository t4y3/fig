# Fig
Fig - library for gallery of Riot tag

## Description
- Mount the custom tag specified in tags in the iframe.

## Install
```bash
npm i @t4y3/fig
```

## Usage
```bash
# Server start
fig
```

Access `localhost: 8080`

## Configuration
Set the following rule in `fig.config.js`.

```js
module.exports = {
  'bundle': 'dist/bundle.js',
  'colors': [
    '#fff',
    '#f00',
  ],
  tags: [
    'src/my-app.tag',
    'src/my-header.tag',
  ]
};
```
- `bundle` - Path of bundled file
  - Specify bundle.js containing the custom tag you want to display
- `colors` - Background color
  - Specified in Hex or rgb format
- `tags` - Path of tag file
  - Specify the path of the custom tag you want to display

## Shortcut
- `command + shift + ←` - Toggle Tree View
- `commnad + shift + ↓` - Toggle Code View
- `commnad + shift + →` - Change BgColor


## Licence

[MIT](https://github.com/t4y3/fig/blob/develop/LICENSE)
