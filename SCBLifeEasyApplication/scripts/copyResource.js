module.exports = function (context) {

  var fs = require("fs"); // importing fs module
  var path = require("path"); // importing path module
  const fse = require('fs-extra');
  var env = process.env.MY_ENV; // conatins the environment variabe
  var isProcessing = false;
  console.log("=:Build Script Started for :=" + env);
  var platform = process.env.PLATFORM; //Reading platform flag
  //setting source path based on platform
  const temp = "./src/environments/" + env + "/" + platform + "/";
  fs.readdirSync(temp).forEach(fileName => {
    let dest = './' + fileName;
    if (platform == 'ios') {
      if (fileName == 'Podfile') {
        dest = './platforms/' + platform + '/' + fileName;
      }
    }
    const source = "./src/environments/" + env + "/" + platform + "/" + fileName;
    console.log(source);
    fse.copy(source, dest)
      .then(() => {
        console.log('=:success in replacing google file:=')
        if (!isProcessing) {
          //Start of moving environment.ts for endpoint api based on build type
          isProcessing = true;
          console.log('=:replacing environment.ts file based on build:=')
          const fileName = 'environment.ts';
          const source = "./src/environments/" + env + "/" + fileName;
          const dest = "./src/environments/" + fileName;
          fse.copy(source, dest)
            .then(() => {
              console.log('=:successfully replaced environment.ts:=')
              isProcessing = false;
            })
            .catch(err => console.error("=:Error in replacing environment.ts:= ", err));
          //End of moving environment.ts for endpoint api
        }
      })
      .catch(err => console.error("Error :: ", err));
  })

  /*
  console.log('Replacing AppDelegate ...')
  var env = process.env.MY_ENV.toLowerCase();   
  console.log('Env ==== '+env);
  var fs = context.requireCordovaModule('fs')
  var path = context.requireCordovaModule('path')
  var googleServiceplistFilePathScr = path.join(context.opts.projectRoot,'src/environments/'+env+'/ios/GoogleService-Info.plist')
  var podfileSrc = path.join(context.opts.projectRoot,'src/environments/'+env+'/ios/Podfile')
   // conatins the environment variable
//     if(env == "UAT")
//     {
//         console.log('Copying UAT Resources')
//         googleServiceplistFilePathScr = path.join(context.opts.projectRoot,'src/environments/uat/ios/GoogleService-Info.plist')
//         podfileSrc = path.join(context.opts.projectRoot,'src/environments/uat/ios/Podfile')

//     }
//     else if (env == "PROD")
//     {
//         console.log('Copying UAT Resources')
//         googleServiceplistFilePathScr = path.join(context.opts.projectRoot,'src/environments/prod/ios/GoogleService-Info.plist')
//         podfileSrc = path.join(context.opts.projectRoot,'src/environments/prod/ios/Podfile')
//     }
  console.log('App Name' + appName);  
  var oldAppDelegateHeader = path.join(context.opts.projectRoot,'platforms/ios/'+appName+'/Classes/AppDelegate.h')
  var oldAppDelegateSource = path.join(context.opts.projectRoot,'platforms/ios/'+appName+'/Classes/AppDelegate.m')
  fs.createReadStream(newAppDelegateHeader).pipe(fs.createWriteStream(oldAppDelegateHeader))
  fs.createReadStream(newAppDelegateSource).pipe(fs.createWriteStream(oldAppDelegateSource))
  console.log('Replacing AppDelegate done.')
*/
}

