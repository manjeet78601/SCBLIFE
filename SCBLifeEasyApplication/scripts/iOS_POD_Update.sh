#!/bin/bash
#
# To update the pods before the build for iOS Only.
#


cd platforms/ios
echo "Updating Pods......."
pod update
echo "Updated Pods......"
exit 0