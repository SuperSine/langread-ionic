// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pageSize:'10',
  // avatarUrl:'http://localhost:81/api/v1/user/avatar',
  // // authEndpoint:'https://localhost/api/graphql',
  // // coreEndpoint:'http://localhost:5003/api/graphql',
  // authEndpoint:'http://localhost:81/api/graphql/auth',
  // coreEndpoint:'http://localhost:5003/api/graphql/core',
  // wordSoundUrl:'http://localhost:5003/api/v1/dictionary/sound',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
