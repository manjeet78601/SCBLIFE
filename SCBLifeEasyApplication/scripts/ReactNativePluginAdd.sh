#!/bin/bash
#
# To update the pods before the build for iOS Only.
#

echo "Adding React Native Plugin Started......."
ionic cordova plugin add SCBL_Ionic_RN_Plugin_New/ReactNative
echo "Adding React Native Plugin : Done !!!!......."

echo "Adding uk.co.workingedge.phonegap.plugin.launchnavigator Plugin Started......."
ionic cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator
npm install --save @ionic-native/launch-navigator
echo "Adding uk.co.workingedge.phonegap.plugin.launchnavigator Plugin : Done !!!!......."

echo "Updating Pods Path......."
ln -s $(pwd)/platforms/ios/Pods $(pwd)/platforms/ios/Pods/Pods
echo "Updating Pods Path : Done !!!! ......."

echo "Updating Entitlements-Release.plist ......."
cp -f $(pwd)/resources/ios/EntitlementsFile/Entitlements-Release.plist $(pwd)/platforms/ios/SCBLIFE/
echo "Updating Entitlements-Release.plist : Done !!!! ......."
exit 0