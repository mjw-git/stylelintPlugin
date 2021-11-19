// const stylelint = require("stylelint");
// const ruleName = "plugin/vas";
// const messages = stylelint.utils.ruleMessages(ruleName, {
//   reject: () => "attribute float is not recommended",
// });
// module.exports = stylelint.createPlugin(
//   ruleName,
//   function (primaryOption) {
//     console.log(primaryOption);
//     return function (postcssRoot, postcssResult) {
//       const validOptions = stylelint.utils.validateOptions(
//         postcssResult,
//         ruleName,
//         {
//           actual: primaryOption,
//           possible: ["false", "true"],
//         }
//       );
//       if (!validOptions) {
//         return;
//       }
//       postcssRoot.walkRules((rule) => {
//         if (/^&-.*/.test(rule.selectors)) {
//           stylelint.utils.report({
//             ruleName,
//             result: postcssResult,
//             message: messages.reject(),
//             node: rule,
//             // word:decl.prop
//           });
//         }
//       });
//       postcssRoot.walkDecls((decl) => {
//         if (decl.prop === "float") {
//           stylelint.utils.report({
//             ruleName,
//             result: postcssResult,
//             message: messages.reject(),
//             node: decl,
//             // word:decl.prop
//           });
//         }
//       });
//     };
//   }
// );
// module.exports.ruleName = ruleName;
// import { createPlugin } from 'stylelint';
const stylelint=require('stylelint')
const rules=require('./rules')
const rulesPlugins=Object.keys(rules).map(ruleName=>{
    return stylelint.createPlugin(`vas/${ruleName}`,rules[ruleName])
})
module.exports=rulesPlugins