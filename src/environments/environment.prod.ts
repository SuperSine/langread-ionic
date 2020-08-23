export const environment = {
  production: true,
  appVersion: require('../../package.json').version,
  pageSize:'10',
  avatarUrl:'https://api.langreed.com/api/auth/v1/user/avatar',
  authEndpoint:'https://api.langreed.com/api/auth/v1/graphql/post',
  coreEndpoint:'https://api.langreed.com/api/core/v1/graphql/post',
  socialEndpoint:'https://api.langreed.com/api/social/v1/graphql/post',
  wordSoundUrl:'https://api.langreed.com/api/core/v1/dictionary/sound',
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
  sourceLanguages:[
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
    },
    {
      code:"zh-cn",
      name:"大陆简体"
    },
    {
      code:"zh-tw",
      name:"臺灣正體"
    },
    {
      code:"zh-hk",
      name:"香港繁體"
    },
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
    },
    {
      code:"fr-fr",
      name:"Français"
    }

  ]
};
