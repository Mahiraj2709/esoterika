/**
 * Created by admin on 2/9/2017.
 */
ionicModule.controller('ContattaciCtrl', function ($scope,  popups,$cordovaSocialSharing,$cordovaAppAvailability) {
                       //$ionicSideMenuDelegate.canDragContent(false)
                       isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();
                       $scope.cleinte = undefined
                       $scope.$on('$ionicView.loaded', function () {
                                  if(localStorage.getItem('login')){
                                  $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id
                                  }
                                  
                                  });
                       
                       $scope.whatsApp = function () {
                       $cordovaSocialSharing
                       .shareViaWhatsApp('', '', '')
                       .then(function(result) {
                             
                             $cordovaAppAvailability.check('whatsapp://')
                             .then(function() {
                                   // is available
                                console.log('wahtapp')
                                   }, function () {
                                   // not available
                                   console.log('no wahtapp')
                                   if(isIOS) {
                                   cordova.InAppBrowser.open('https://itunes.apple.com/in/app/whatsapp-messenger/id310633997?mt=8', '_system', 'location=yes');
                                   }else {
                                   cordova.InAppBrowser.open('https://play.google.com/store/apps/details?id=com.whatsapp&hl=en', '_system', 'location=yes');
                                   }
                                   });
                             
                             // Success!
                             console.log(result)
                       
                             }, function(err) {
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
                             popups.showAlert('email is not configured!');
                             popups.showAlert('e-mail non è configurato!');
                             });
                       }
                       
                       })
