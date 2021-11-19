// import stylelint from 'stylelint'
const stylelint = require("stylelint");
const ruleName = "vas/no-float-attribute";
const messages = stylelint.utils.ruleMessages(ruleName, {
  reject: () => "attribute float is not recommended",
});
module.exports = function (primaryOption) {
  return function (postcssRoot, postcssResult) {
    const validOptions = stylelint.utils.validateOptions(
      //校验参数
      postcssResult,
      ruleName,
      {
        actual: primaryOption, //实际参数
        possible: ["false", "true"], //可能的参数
      }
    );
    if (!validOptions) {
      return;
    }
    postcssRoot.walkDecls((decl) => {
      if (decl.prop === "float") {
        stylelint.utils.report({
          ruleName,
          result: postcssResult,
          message: messages.reject(),
          node: decl,
        });
      }
    });
  };
};
module.exports.messages = messages;
module.exports.ruleName = ruleName;
