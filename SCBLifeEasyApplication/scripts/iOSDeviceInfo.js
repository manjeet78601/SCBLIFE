module.exports = function (context) {

    const fse = require('fs-extra');
    const fileNameDevicePlugin = 'CDVDevice.m';
    console.log("Copying Started for replacing CDVDevice.m"); 
    const sourceDevicePlugin ="./scripts/"+fileNameDevicePlugin;
    const destDevicePlugin="./platforms/ios/SCBLIFE/Plugins/cordova-plugin-device/" + fileNameDevicePlugin;
    fse.copy(sourceDevicePlugin, destDevicePlugin)
        .then(() => console.log('successfully replaced CDVDevice.m'))
        .catch(err => console.error("Error :: ", err));

    const fileNameTouchId = 'TouchID.m';
    console.log("Copying Started for replacing TouchID.m"); 
    const sourceTouchId ="./scripts/"+fileNameTouchId;
    const destTouchId ="./platforms/ios/SCBLIFE/Plugins/cordova-plugin-touch-id/" + fileNameTouchId;
    fse.copy(sourceTouchId, destTouchId)
        .then(() => console.log('successfully replaced TouchID.m'))
        .catch(err => console.error("Error :: ", err));


}
