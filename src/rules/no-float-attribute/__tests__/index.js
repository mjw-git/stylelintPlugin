
const {messages,ruleName} =require('../index')
testRule({
  ruleName,
  config: ["true"],
  accept:[{
      code:".foo{ color:red }",
      description:"正确"
  }],
  reject:[
      {
          code:".foo{ float:left }",
          message:messages.reject(),
          description:"一行",
      },
      {
          code:`.foo{ color:red }
                .bar{float:blue}
          `,
          message:messages.reject(),
          description:"两行",
      }
  ]
});
