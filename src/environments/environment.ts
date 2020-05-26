// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pageSize:'10',
  avatarUrl:'http://localhost:81/api/v1/user/avatar',
  authEndpoint:'http://localhost:81/api/graphql',
  coreEndpoint:'http://localhost:5003/api/graphql',
  buildInLanguages:['en','zh'],
  displayLanguages:[
    {
      code:"en",
      name:"English"
    },
    {
      code:"zh",
      name:"中文"
    },
    {
      code:"es",
      name:"Español"
    }
  ],
  targetLanguages:[

    {
      code:"en",
      name:"English"
    },
    {
      code:"es",
      name:"Español"
    },
    {
      code:"it",
      name:"Italiano"
    },
    {
      code:"de",
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
