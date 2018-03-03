const InFig = require('../../infig/main');

// Button
InFig.set('Button')
  .add('Default', () => {
      return `<material-button class="ui"><div class="text">BUTTON</div></material-button>`
    })
  .add('Custom', () => {
      return `
<material-button class="ui" waves-color="#000" shady="true" style="background:#ed7ff4; height: 50px; line-height: 46px">
    <div class="text">ICON</div>
    <i class="material-icons">create</i>
</material-button>`
    })
  .add('Rounded', () => {
      return `
<material-button class="ui" waves-center="true" rounded="true" waves-opacity="0.6" waves-duration="600" style="background:#f43137">
    <i class="material-icons">add</i>
</material-button>
      `
    })
  .add('Disabled', () => {
      return `
<material-button class="ui" disabled="true">
    <div class="text">Disabled</div>
</material-button>
      `
    });


// Checkbox
InFig.set('Checkbox')
  .add('Default', () => {
      return `
<material-checkbox name="checker">
    Label
</material-checkbox>
      `
    })
  .add('Disabled', () => {
      return `
<material-checkbox disabled="true">
    Disabled
</material-checkbox>`
    });


// ComboBox
InFig.set('ComboBox')
  .add('Default', () => {
      return `
<material-combo  defaultText="Select one">
    <option value="1">One</option>
    <option value="2">Two</option>
</material-combo>
      `
    })/*
  .add('Items Like An Attribute', () => {
      return `
<material-combo items="{ items }"></material-combo>
  `
  }, {
    items: [{title:'One'},{title:'Two'}]
  })*/;


// Dropdown
InFig.set('Dropdown')
  .add('Default', () => {
      return `
<material-dropdown>
    <p>DropDown content</p>
</material-dropdown>
      `
    })
  .add('Changed animation', () => {
      return `
<material-dropdown animation="bottom">
    <p>DropDown content</p>
</material-dropdown>
  `
  });

// Dropdown
InFig.set('Dropdown List')
  .add('Default', () => {
      return `
<material-dropdown-list items="{ items }"></material-dropdown-list>
      `
    }, {
      items: [{title:'One'},{title:'Two'}]
    })
  .add('Changed animation', () => {
      return `
<material-dropdown-list items="{ items }"></material-dropdown-list>
  `
  }, {
    items: [{title:'One',link:'#one'},{title:'Two',link:'#two'}]
  });


// Input
InFig.set('Input')
  .add('Default', () => {
      return `
<material-input placeholder="Just input"></material-input>
      `
    })
  .add('Icon', () => {
      return `
<material-input icon="true" waves-color="#2f6975" label="Icon input">
    <i class="material-icons">search</i>
</material-input>
  `
  })
  .add('Validation by type', () => {
      return `
<material-input type="email" label="Email"></material-input>
  `
  })
  .add('Custom validation', () => {
      return `
<material-input valid="/^\d+$/" label="Numbers only"></material-input>
  `
  });


// Navbar
InFig.set('Navbar')
  .add('Default', () => {
      return `
<material-navbar>
    <div class="logo"><a href="#">Logo</a></div>
</material-navbar>
      `
    })
  .add('Custom styling', () => {
      return `
<material-navbar style="background: #ccc;" >
    <div class="logo"><a href="#">Logo</a></div>
</material-navbar>
  `
  });


// Pane
InFig.set('Pane')
  .add('Default', () => {
      return `
<material-pane>
    <div class="material-pane-left-bar">
        <material-button rounded="true">
            <i class="material-icons">arrow_back</i>
        </material-button>
    </div>
    <div class="material-pane-title">TITLE</div>
    <div class="material-pane-right-bar">
        <material-button rounded="true">
            <i class="material-icons">more_vert</i>
        </material-button>
    </div>
    <div class="material-pane-content">
        CONTENT
    </div>
</material-pane>
      `
    });

// Popup
InFig.set('Popup')
  .add('Default', () => {
      return `
<material-popup>
    <p>Content</p>
</material-popup>
      `
    })
  .add('Popup With Title', () => {
      return `
<material-popup>
    <div class="material-popup-title">Title</div>
    <p>Content</p>
</material-popup>
      `
    });

// Toast
InFig.set('Toast')
  .add('Default', () => {
      return `
<material-snackbar></material-snackbar>
      `
    })
  .add('Error Toast', () => {
      return `
<material-snackbar></material-snackbar>
      `
    });

// Tabs
InFig.set('Tabs')
  .add('Default', () => {
      return `
<material-tabs tabs="{ tabs }"></material-tabs>
      `
    }, {
      tabs: [{title:'ONE'},{title:'TWO'}]
    })
  .add('Error Toast', () => {
      return `
<material-tabs useLine="true" tabs="{ tabs }"></material-tabs>
      `
    }, {
      tabs: [{title:'ONE'},{title:'TWO'}]
    });

// Textarea
InFig.set('Textarea')
  .add('Default', () => {
      return `
<material-textarea label="Textarea" ></material-textarea>
      `
    })
  .add('Max rows count is 2', () => {
      return `
<material-textarea max-rows="2" label="Max rows count is 2"></material-textarea>
      `
    }
  );

// Spinner
InFig.set('Spinner')
  .add('Default', () => {
      return `
<material-spinner></material-spinner>
      `
    })
  .add('Spinner with changed stroke width', () => {
      return `
<material-spinner strokewidth="7"></material-spinner>
      `
    }
  );
