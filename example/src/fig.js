const InFig = require('../../infig/main');

// Button
InFig.set('Button')
  .add('Basic', () => (`<ui-button primary>Primary</ui-button>
<ui-button success>Success</ui-button>
<ui-button warning>Warning</ui-button>
<ui-button danger>Danger</ui-button>
<ui-button>Normal</ui-button>`))
  .add('Outline', () => (`<ui-button primary outline>Primary</ui-button>
<ui-button success outline>Success</ui-button>
<ui-button warning outline>Warning</ui-button>
<ui-button danger outline>Danger</ui-button>`))
  .add('Link', () => (`<ui-button primary link>Primary</ui-button>
<ui-button success link>Success</ui-button>
<ui-button warning link>Warning</ui-button>
<ui-button danger link>Danger</ui-button>`))
  .add('Size', () => (
    `<ui-button primary sm>Small</ui-button>
<ui-button primary>Medium</ui-button>
<ui-button primary lg>Large</ui-button>`))
  .add('Block', () => ('<ui-button primary lg block>Block Button</ui-button>'))
  .add('With Icon', () => (
    `<ui-button primary>
  <ui-icon type="arrow-left"></ui-icon>
  Prev
</ui-button>

<ui-button primary>
  Next
  <ui-icon type="arrow-right"></ui-icon>
</ui-button>`))
  .add('Loading', () => ('<ui-button primary loading="{ true }">Loading</ui-button>'))
  .add('Disabled', () => ('<ui-button primary __disabled="{ true }">Disabled</ui-button>'));

// Input
InFig.set('Input')
  .add('Basic', () => (`<ui-input placeholder="placeholder" value="content" sm></ui-input>
<ui-input placeholder="placeholder" value="content"></ui-input>
<ui-input placeholder="placeholder" value="content" lg></ui-input>`));

// Badge
InFig.set('Badge')
  .add('Basic', () => (`<ui-badge count="50" dot="{ true }">
  <div class="example-badge-block" style="width: 40px;height: 40px;background-color: #DDD;border-radius: 5px;"></div>
</ui-badge>
<ui-badge count="1000" max="999">
  <div class="example-badge-block" style="width: 40px;height: 40px;background-color: #DDD;border-radius: 5px;"></div>
</ui-badge>`));

// ProgressBar
InFig.set('ProgressBar')
  .add('Basic', () => (`<ui-progress-bar value="50"></ui-progress-bar>
<br />
<ui-progress-bar value="60" success></ui-progress-bar>
<br />
<ui-progress-bar value="70" warning></ui-progress-bar>
<br />
<ui-progress-bar value="80" danger></ui-progress-bar>`))
  .add('With Label', () => (`<ui-progress-bar value="50" label></ui-progress-bar>
<br />
<ui-progress-bar value="60" label success></ui-progress-bar>
<br />
<ui-progress-bar value="70" label warning></ui-progress-bar>
<br />
<ui-progress-bar value="80" label danger></ui-progress-bar>`));

// Link
InFig.set('Link')
  .add('Basic', () => (`<ui-link href="javascript:;">normal</ui-link>
<ui-link success href="javascript:;">success</ui-link>
<ui-link warning href="javascript:;">warning</ui-link>
<ui-link danger href="javascript:;">danger</ui-link>`));

// Switch
InFig.set('Switch')
  .add('Basic', () => (`<ui-switch __checked="true" sm></ui-switch>
<ui-switch __checked="true"></ui-switch>
<ui-switch __checked="true" lg></ui-switch>`))
  .add('Disabled', () => ('<ui-switch __checked="{ checked }" __disabled="{ disabled }" lg></ui-switch>'),
    {
      checked: true,
      disabled: true,
    });

// Checkbox
InFig.set('Checkbox')
  .add('Basic', () => (`<ui-checkbox-group value="{ value }">
  <ui-checkbox value="option1">Option 1</ui-checkbox>
  <ui-checkbox value="option2">Option 2</ui-checkbox>
  <ui-checkbox value="option3">Option 3</ui-checkbox>
</ui-checkbox-group>`), {
    value: ['option1', 'option2'],
  });

// Radio
InFig.set('Radio')
  .add('Basic', () => (`<ui-radio-group value="option1">
  <ui-radio value="option1">Option 1</ui-radio>
  <ui-radio value="option2">Option 2</ui-radio>
</ui-radio-group>`))
  .add('Button', () => (`<ui-radio-group value="option2">
  <ui-radio-button value="option1">Option 1</ui-radio-button>
  <ui-radio-button value="option2">Option 2</ui-radio-button>
  <ui-radio-button value="option3">Option 3</ui-radio-button>
  <ui-radio-button value="option4">Option 4</ui-radio-button>
</ui-radio-group>`));

// Breadcrumb
InFig.set('Breadcrumb')
  .add('Basic', () => (`<ui-breadcrumb>
  <ui-breadcrumb-item>
    <ui-icon icon="&#xe60a;"></ui-icon>
    Home
  </ui-breadcrumb-item>

  <ui-breadcrumb-item>
    <ui-icon icon="&#xe60b;"></ui-icon>
    <a href="javascript:;">First</a>
  </ui-breadcrumb-item>

  <ui-breadcrumb-item>
    <ui-icon icon="&#xe609;"></ui-icon>
    <a href="javascript:;">Second</a>
  </ui-breadcrumb-item>

  <ui-breadcrumb-item>
    <a href="javascript:;">Current</a>
  </ui-breadcrumb-item>
</ui-breadcrumb>`));

// Tooltip
InFig.set('Tooltip')
  .add('Basic', () => (`<ui-tooltip title="Tooltip on left" placement="left">
  <ui-button>Tooltip on left</ui-button>
</ui-tooltip>

<ui-tooltip title="Tooltip on top" placement="top">
  <ui-button>Tooltip on top</ui-button>
</ui-tooltip>

<ui-tooltip title="Tooltip on bottom" placement="bottom">
  <ui-button>Tooltip on bottom</ui-button>
</ui-tooltip>

<ui-tooltip title="Tooltip on right" placement="right">
  <ui-button>Tooltip on right</ui-button>
</ui-tooltip>`));

// Rate
InFig.set('Rate')
  .add('Basic', () => ('<ui-rate total="10" value="5"></ui-rate>'));

// Tag
InFig.set('Tag')
  .add('Basic', () => (`<ui-tag>normal</ui-tag>
<ui-tag primary>primary</ui-tag>
<ui-tag success>success</ui-tag>
<ui-tag warning>warning</ui-tag>
<ui-tag danger>danger</ui-tag>`))
  .add('Round', () => (`<ui-tag round>normal</ui-tag>
<ui-tag primary round>primary</ui-tag>
<ui-tag success round>success</ui-tag>
<ui-tag warning round>warning</ui-tag>
<ui-tag danger round>danger</ui-tag>`))
  .add('Invert', () => (`<ui-tag invert>normal</ui-tag>
<ui-tag primary invert>primary</ui-tag>
<ui-tag success invert>success</ui-tag>
<ui-tag warning invert>warning</ui-tag>
<ui-tag danger invert>danger</ui-tag>`));

// Slider
InFig.set('Slider')
  .add('Basic', () => (`<ui-slider
  value="{ 50 }"
  min="{ 0 }"
  max="{ 100 }"
  step="{ 5 }"
></ui-slider>

<ui-slider
  value="{ 50 }"
  min="{ 0 }"
  max="{ 100 }"
  step="{ 5 }"
  tip-placement="bottom"
></ui-slider>`));

// Pagination
InFig.set('Pagination')
  .add('Basic', () => (`<ui-pagination
  min="{ min }"
  max="{ max }"
  current="{ current }"
  prev-text="<"
  next-text=">"
  on-change="{ onPaginationChange }"
></ui-pagination>`),
  {
    min: 50,
    max: 100,
    current: 55,
  });

// Spinner
InFig.set('Spinner')
  .add('Basic', () => (`<ui-spinner sm></ui-spinner>
<ui-spinner></ui-spinner>
<ui-spinner lg></ui-spinner>`))
  .add('Block', () => ('<ui-spinner block></ui-spinner>'));

// Tree
InFig.set('Tree')
  .add('Basic', () => (`<ui-tree on-change="{ onTreeChange }">
  <ui-tree-node title="root" key="0">
    <ui-tree-node title="first0" key="1">
      <ui-tree-node title="second0" key="3">
        <ui-tree-node title="third0" key="6"></ui-tree-node>
        <ui-tree-node title="third1" key="7"></ui-tree-node>
      </ui-tree-node>
      <ui-tree-node title="second1" key="4"></ui-tree-node>
      <ui-tree-node title="second2" key="5"></ui-tree-node>
    </ui-tree-node>
    <ui-tree-node title="first1" key="2"></ui-tree-node>
  </ui-tree-node>
</ui-tree>`));
