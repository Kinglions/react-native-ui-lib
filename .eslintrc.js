const validColors = require("./src/style/colorsPalette").colorsPalette;
const extraFixColorsMap = require("./src/style/colorsPalette").extraFixColorsMap;


module.exports = {
  "parser": "babel-eslint",
  "plugins": ["react-native", "uilib"],
  "extends": ["airbnb"],
  "rules": {
    "arrow-body-style": "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "global-require": "off",
    "import/prefer-default-export": "off",
    "no-nested-ternary": "off",
    "no-plusplus": "off",
    "no-return-assign": "off",
    "no-use-before-define": "off",
    "max-len": [2, 150, 4, {"ignoreUrls": true}],
    "object-curly-spacing": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-space-before-closing": "off",
    "react/jsx-tag-spacing": "off",
    "react/prefer-stateless-function": "off",
    "react/require-default-props": "off",
    "no-else-return": "off",
    // "uilib/no-hard-coded-font": "error",
    "uilib/no-hard-coded-color": ["error", validColors, extraFixColorsMap]
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ios.js", ".android.js"]
      }
    }
  }
}
