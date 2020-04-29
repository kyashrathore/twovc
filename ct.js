const colorsRegex = /(transparent|current|black|white|gray|red|orange|yellow|green|teal|blue|indigo|purple|pink)(-\d{3})?/; // color
const bgPositionsRegex = /(bottom|center|left|leftbottom|lefttop|right|rightbottom|righttop|top|)/;
const bgRepeatRegex = /(repeat|no-repeat|repeat-x|repeat-y|repeat-y|repeat-round|repeat-space)/;
const bgSizeRegex = /(auto|cover|contain)/;

const borderRegexes = [
  /(collapse|seperate)/, // collapse
  /(solid|dashed|dotted|double|none)/, // style
  colorsRegex,
  ...[/border/, /t/, /b/, /r/, /l/].map(
    (regex) => new RegExp(regex.source + /(-\d+)?/.source)
  ),
];

const borderRadiusRegex = [
  /(rounded|rounded-(none|sm|md|lg|full))/,
  ...[/t/, /b/, /r/, /l/, /tl/, /tr/, /br/, /bl/].map(
    (reg) => new RegExp(reg.source + "-" + /(none|sm|md|lg|full)/.source)
  ),
];

const itemsRegexes = [/(start|end|center|baseline|stretch)/];
const justifyRegexes = [/(start|end|center|between|around|evenly)/];
const boxShadowRegexes = [/(xs|sm|md|lg|xl|2xl|inner|outline|none)/];
const cursorRegexes = [/(auto|pointer|wait|text|move|not-allowed)/];
const clearRegexes = [/(left|right|both|none)/];

const flexRegexes = [
  /(1|auto|initial|none)/,
  /(row|row-reverse|col|col-reverse)/,
  /(wrap|wrap-reverse|no-wrap)/,
  /grow(-0)?/,
  /shrink(-0)?/,
];

const textRegexes = [
  /(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|base)/,
  /(center|right|left|justify)/,
  colorsRegex,
];
const fontRegexes = [
  /(hairline|thin|light|normal|medium|semibold|bold|extrabold|black)/,
];

const heightRegexes = [/(auto|full|screen|\d+)/];
const widthRegexes = [/(auto|full|screen|\d+)/];
const trackingRegexes = [/(tighter|tight|normal|wide|wider|widest)/];

const displayRegexes = [
  /(block|inline-block|inline|flow-root|flex|inline-flex|grid|inline-grid|table|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|hidden)/,
];
const accessibilityRegexes = [/(not-)?sr-only/];
const visibilityRegexes = [/(in)?visible/];

const bgRegexes = [
  /(fixed|local|scroll)/, // attachment
  colorsRegex,
  bgPositionsRegex,
  bgRepeatRegex,
  bgSizeRegex,
];
const positionsRegex = [/(left|right|bottom|top)/];
const postions2Regex = [/(static|fixed|absolute|relative|sticky)/];
const textDecorationRegexes = [/(underline|line-through|no-underline)/];
const textTransformRegexes = [/(uppercase|lowercase|capitalize|noraml-case)/];
const gridRegexes = /(auto|span|start|start-auto|end|end-auto)/;

// const variants = /(responsive|grouphover|focuswithin|first|last|odd|even|hover|focus|active|visited|disabled)/;

const regexGroups = {
  border: borderRegexes,
  rounded: borderRadiusRegex,
  items: itemsRegexes,
  align: [/(baseline|top|middle|bottom|text-top|text-bottom)/],
  justify: justifyRegexes,
  self: itemsRegexes,
  bg: bgRegexes,
  shadow: boxShadowRegexes,
  cursor: cursorRegexes,
  box: [/(border|content)/],
  clear: clearRegexes,
  display: displayRegexes,
  flex: flexRegexes,
  text: textRegexes,
  font: fontRegexes,
  h: heightRegexes,
  w: widthRegexes,
  tracking: trackingRegexes,
  float: [/(right|left|none)/],
  gap: [/gap-(px|\d+)/],
  grid: [
    /cols-(none|\d+)/,
    /rows-(none|\d+)/,
    /(flow-row|flow-col|flow-row-dense|flow-col-dense)/,
  ],
  col: [/gap-(px|\d+)/, gridRegexes],
  row: [/gap-(px|\d+)/, gridRegexes],
  inset: [/(0|auto|y-0|x-0|y-auto|x-auto)/],
  resize: [/(none|y|x)/],
  leading: [/(none|tight|snug|relaxed|loose)/],
  list: [/(inside|outside)/, /(none|disc|decimal)/],
  object: [/(contain|cover|fill|none|scale-down)/, bgPositionsRegex],
  overflow: [
    /(auto|hidden|visible|scroll|x-auto|y-auto|x-hidden|y-hidden|x-visible|y-visible|x-scroll|y-scroll)/,
  ],
  scrolling: [/(auto|touch)/],
  placeholder: [colorsRegex],
  rotate: [/(0|45|90|180)/],
  scale: [/\d+/, /x-\d+/, /y-\d+/],
  skew: [/x-\d+/, /y-\d+/],
  divide: [/(x|x-\d+)/, /(y|y-\d+)/],
  space: [/x-(px|\d+)/, /y-(px|\d+)/],
  pointer: [/(events-none|events-auto)/],
  table: [/(auto|fixed)/],
  origin: [bgPositionsRegex],
  select: [/(none|text|all|auto)/],
  whitespace: [/(normal|no-wrap|pre|pre-line|pre-wrap)/],
  break: [/(normal|words|all|truncate)/],
};

// single word class names which are for same property but different names
// like flex,block,grid are for display
const differentWordsRegexGroups = [
  ...displayRegexes,
  ...positionsRegex,
  ...postions2Regex,
  ...textDecorationRegexes,
  ...textTransformRegexes,
  ...accessibilityRegexes,
  ...visibilityRegexes,
];

const completeRegex = (regex) =>
  new RegExp("^" + (regex.source ? regex.source : regex) + "$");

function testCompleteRegex(regex, string) {
  const reg = completeRegex(regex);
  return reg.test(string);
}

function getSplittedParts(className) {
  // when starts with  - make first part -part2
  const [p1, p2, p3, p4] = className.split("-");
  const part1 = p1 === "" ? "-?" + p2 : p1;
  const part2 = p1 === "" ? p3 : p2;
  const part3 = p1 === "" ? p4 : p3;
  return { part1, part2, part3 };
}
module.exports = function ct(...classNames) {
  let actualClassList = "";
  // start from the back and check if we have encountered this property group before
  // if yes current one should be ignored wrt last one in classes
  classNames
    .join(" ")
    .split(" ")
    .reverse()
    .forEach((c) => {
      const { part1, part2, part3 } = getSplittedParts(c);
      // for properties like flex => block top  => bottom which do not have first part common
      const singleWordGroupRegex = differentWordsRegexGroups.find((group) =>
        testCompleteRegex(group, c)
      );

      const thisSingleWordGroupIsAlreadyIncluded =
        singleWordGroupRegex &&
        actualClassList
          .split(" ")
          .some((className) =>
            testCompleteRegex(singleWordGroupRegex, className)
          );

      if (singleWordGroupRegex && thisSingleWordGroupIsAlreadyIncluded) {
        actualClassList.replace(singleWordGroupRegex, c);
        return;
      }

      if (!singleWordGroupRegex && actualClassList.includes(part1)) {
   
        // either we find the regex with just first part
        // like for class like rounded, rounded-sm, border, border-sm
        const part1Regex =
          regexGroups[part1] &&
          regexGroups[part1].find((regex) => testCompleteRegex(regex, part1));

        const part2Regex =
          regexGroups[part1] &&
          regexGroups[part1].find((regex) =>
            testCompleteRegex(regex, `${part2}${part3 ? "-" + part3 : ""}`)
          );

        // these classes might also have a negetive sign
        const p1 = /(rotate|skew|space)/.test(part1) ? "-?" + part1 : part1;

        const regexGroup =
          part1Regex && !part2Regex
            ? part1Regex
            : p1 + (part2Regex ? "-" + part2Regex.source : part2);

        const isThisGroupAlreayIncluded = actualClassList
          .split(" ")
          .some((className) => {
            return testCompleteRegex(regexGroup, className);
          });

        if (!isThisGroupAlreayIncluded) {
          actualClassList += `${c} `;
        } // else ignore
      } else {
        actualClassList += `${c} `;
      }
    });

  return actualClassList.trim().split(" ").reverse().join(" ");
};
