
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
          code:`.foo{ float:left }
            .bar{
                &-dis{
                    color:red
                }
            }
          `,
          message:messages.reject(),
          description:"错误",
      }
  ]
});
