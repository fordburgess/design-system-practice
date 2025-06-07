export const themeConfig = {
  default: {
    mode: "Default Light",
    palette: {
      text: {
        primary: "#272727",
        secondary: "#4e4e4e",
      },
      components: {
        background: "#fff",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        accent: "#cacaca",
      },
      layout: {
        background: "rgba(255, 255, 255, 0.95)"
      }
    }
  },
  defaultDark: {
    mode: "Default Dark",
    palette: {
      text: {
        primary: "#f3f3f3",
        secondary: "#ededed",
      },
      components: {
        background: "#151515",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        accent: "#b1b1b1",
      },
      layout: {
        background: "#000",
      }
    }
  },
  defaultBlue: {
    mode: "Blue",
    palette: {
      text: {
        primary: "#6497b1",
        secondary: "#b3cde0"
      },
      components: {
        background: "#03396c",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        accent: "#005b96"
      },
      layout: {
        background: "#011f4b"
      }
    }
  }
}
