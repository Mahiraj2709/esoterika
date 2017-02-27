/**
 * Created by admin on 2/9/2017.
 */
ionicModule.controller('ContattaciCtrl', function ($scope,  popups,$cordovaSocialSharing) {
                       //$ionicSideMenuDelegate.canDragContent(false)
                       isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();
                       $scope.cleinte = undefined
                       $scope.$on('$ionicView.loaded', function () {
                                  $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id
                                  
                                  });
                      
                       $scope.whatsApp = function () {
                       $cordovaSocialSharing
                       .shareViaWhatsApp('', '', '')
                       .then(function(result) {
                             // Success!
                             console.log(result)
                             console.log('wahtapp')
                             }, function(err) {
                             // An error occurred. Show a message to the user
                             //                console.log(err)
                             //                if(!err)
                             //popups.showAlert('WhatsApp non trovato')
                             console.log('no wahtapp')
                             if(isIOS) {
                             cordova.InAppBrowser.open('https://itunes.apple.com/in/app/whatsapp-messenger/id310633997?mt=8', '_system', 'location=yes');
                             }else {
                             cordova.InAppBrowser.open('https://play.google.com/store/apps/details?id=com.whatsapp&hl=en', '_system', 'location=yes');
                             }
                             });
                       }
                       
                       $scope.mail = function () {
                       $cordovaSocialSharing
                       .shareViaEmail('', '', 'info@studioesoterika.net', '', '', '')
                       .then(function(result) {
                             console.log('mail')
                             // Success!
                             }, function(err) {
                             // An error occurred. Show a message to the user
                             console.log(err)
                             console.log('no mail')
                             });
                       }
                       
                       })
