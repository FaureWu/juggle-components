function trbl(prefix) {
  var rules = [];

  if (prefix) {
    rules.push(prefix);
    prefix = prefix + "-";
  } else {
    prefix = "";
  }

  return rules.concat([
    prefix + "top",
    prefix + "right",
    prefix + "bottom",
    prefix + "left"
  ]);
}

function minMax(suffix) {
  return [suffix, "min-" + suffix, "max-" + suffix];
}

var positioning = []
  .concat([
    "position",
    "z-index"
  ])
  .concat(trbl());

var displayAndBoxModel = []
  .concat([
    "display",
    "overflow"
  ])
  .concat(minMax("width"))
  .concat(minMax("height"))
  .concat([
    "box-sizing",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "align-content",
    "align-items",
    "align-self",
    "justify-content",
    "order"
  ])
  .concat(trbl("padding"))
  .concat(trbl("border"))
  .concat(trbl("margin"));

module.exports = {
  processors: ["stylelint-processor-styled-components"],
  plugins: "stylelint-order",
  extends: "stylelint-config-standard",
  syntax: "scss",
  rules: {
    "order/properties-order": [
      positioning.concat(displayAndBoxModel),
      { "unspecified": "bottomAlphabetical" }
    ],
    "selector-pseudo-class-no-unknown": [true, {
      ignorePseudoClasses: ["global"]
    }],
    "rule-empty-line-before": "never"
  }
};
