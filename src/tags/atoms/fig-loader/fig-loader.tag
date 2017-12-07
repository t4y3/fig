fig-loader
  .loader

  style(type="scss").
    :scope {
      display: inline-block;
    }

    .loader,
    .loader:before,
    .loader:after {
      background: #c1c1c1;
      animation: load1 1s infinite ease-in-out;
      width: 1em;
      height: 4em;
    }

    .loader {
      display: inline-block;
      margin: 0 1.5rem;
      position: relative;
      color: #c1c1c1;
      font-size: 1rem;
      transform: translateZ(0);
      animation-delay: -0.16s;
    }

    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      top: 0;
    }

    .loader:before {
      left: -1.5em;
      animation-delay: -0.32s;
    }

    .loader:after {
      left: 1.5em;
    }

    @keyframes load1 {
      0%,
      80%,
      100% {
        box-shadow: 0 0;
        transform: scaleY(1);
      }
      40% {
        box-shadow: 0 -2em;
        transform: scaleY(1.4);
      }
    }
