# Fig
Fig - library for gallery of Riot tag

## Demo
- https://fig-sample.appspot.com/

## Capture
![fig-sample appspot com_](https://user-images.githubusercontent.com/9010553/33953624-edb31020-e078-11e7-95fe-a34d8edb93b6.png)

## Description
Mount the custom tag specified in tags in the iframe.  
It is not for preview and development.  
It is for displaying and confirming the custom tag created.  
Use it like a style guide.

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
  includes: {
    css: [
      'http://cdn.jsdelivr.net/blazecss/1.1.3/blaze.min.css'
    ],
    js: [
      'dist/bundle.js'
    ],
  },
  colors: [
    '#fff',
    '#f00',
  ],
  tags: [
    'src/my-app.tag',
    'src/my-header.tag',
  ]
};
```
- `includes` - files required to display custom tags
  - A bundled js file containing custom tags is required
  - `css` is not mandatory
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
