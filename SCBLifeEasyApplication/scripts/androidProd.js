module.exports = function (context) {

    var env = process.env.MY_ENV;
    if (env == 'sit' || env == 'dev' || env == 'uat') {
        const fse = require('fs-extra');
        const fileName = 'SystemWebViewClient.java';
        console.log("Copying Started for replacing SystemWebViewClient.java");
        const source = "./scripts/" + fileName;
        const dest = "./platforms/android/CordovaLib/src/org/apache/cordova/engine/" + fileName;
        fse.copy(source, dest)
            .then(() => console.log('=:successfully replaced SystemWebViewClient.java:='))
            .catch(err => console.error("Error :: ", err));
    }
}

