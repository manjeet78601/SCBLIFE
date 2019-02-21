module.exports = function (context) {

    var env = process.env.MY_ENV;
    if (process.env.MY_ENV == 'sit' || process.env.MY_ENV == 'dev') {
        const fse = require('fs-extra');
        const fileName = 'FingerprintAuth.java';
        console.log("Copying Started for replacing FingerprintAuth.java");
        const source = "./scripts/" + fileName;
        const dest = "./platforms/android/app/src/main/java/com/cordova/plugin/android/fingerprintauth/" + fileName;
        fse.copy(source, dest)
            .then(() => console.log('=:successfully replaced FingerprintAuth.java:='))
            .catch(err => console.error("Error :: ", err));
    }
}

