export const environment = {
  production: true,
  pageSize:'10',
  avatarUrl:'https://auth-api.langreed.com/api/v1/user/avatar',
  authEndpoint:'https://api.langreed.com/api/graphql/auth',
  coreEndpoint:'https://api.langreed.com/api/graphql/core',
  wordSoundUrl:'http://core-api.langreed.com/api/v1/dictionary/sound',
  buildInLanguages:['en-us','zh-cn'],
  displayLanguages:[
    {
      code:"en-us",
      name:"English"
    },
    {
      code:"zh-cn",
      name:"中文"
    },
    {
      code:"es-es",
      name:"Español"
    }
  ],
  targetLanguages:[

    {
      code:"en-us",
      name:"English"
    },
    {
      code:"es-es",
      name:"Español"
    },
    {
      code:"it-it",
      name:"Italiano"
    },
    {
      code:"de-de",
      name:"Deutsch"
    }

  ]
};
