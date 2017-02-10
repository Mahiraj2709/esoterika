/**
 * Created by admin on 2/6/2017.
 */
ionicModule.factory('popups',function ($ionicPopup) {
    // An alert dialog
   showAlert = function (message) {
        var alertPopup = $ionicPopup.alert({
            title: 'Attenzione!',
            template: message
        });
    };

    showMessage = function (message) {
        $ionicPopup.alert({
            title: 'Esoterika',
            template: message
        });
    };

    showPayment = function () {
        $ionicPopup.show({
            templateUrl:'templates/payment.html'
        })
    }

   return {
       showAlert:showAlert,
       showMessage:showMessage,
       showPayment:showPayment
   }
})