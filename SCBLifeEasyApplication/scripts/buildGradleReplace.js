/**
 * this js file is used to replace build.gradle after a platform is added;
 * reason to use this is because while making android build there comes an error which won't make the build.
 * this error comes because jcenter() comes before maven{ } but it should the other way around
 */
module.exports = function (context) {

        const fse = require('fs-extra');
        const fileName = 'build.gradle';
        console.log("Copying Started for replacing build.gradle");
        const source = "./scripts/" + fileName;
        const dest = "./platforms/android/" + fileName;
        fse.copy(source, dest)
            .then(() => console.log('=:successfully replaced build.gradle:='))
            .catch(err => console.error("Error :: ", err));
}

