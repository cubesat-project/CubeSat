// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiRouteBase: 'http://localhost:3000',
  cognito: {
    accessKeyId: 'AKIAITKTCDI7BY3DPTFA',
    secretAccessKey: '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',
    region: 'us-east-2',
    userPoolId: 'us-east-2_YZSlXzFlB',
    userPoolClientId: '1bn896ocv98neen3r2djed4r7i'
  },
  groundStationIP: 'http://0.0.0.0:3700'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
