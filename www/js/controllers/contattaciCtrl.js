/**
 * Created by admin on 2/9/2017.
 */
ionicModule.controller('ContattaciCtrl', function ($scope,  popups,$cordovaSocialSharing) {
    //$ionicSideMenuDelegate.canDragContent(false)
    $scope.cleinte = undefined
    $scope.$on('$ionicView.loaded', function () {
        $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id

    });


    $scope.whatsApp = function () {
        $cordovaSocialSharing
            .shareViaWhatsApp('', undefined, undefined)
            .then(function(result) {
                // Success!
            }, function(err) {
                // An error occurred. Show a message to the user
            });
    }

    $scope.mail = function () {
        $cordovaSocialSharing
            .shareViaEmail('', '', 'info@studioesoterika.net', undefined, undefined, undefined)
            .then(function(result) {
                // Success!
            }, function(err) {
                // An error occurred. Show a message to the user
                console.log(err)
                popups.showAlert('WhatsApp non trovato')
            });
    }

})
