/**
 * Created by admin on 2/6/2017.
 */
ionicModule.factory('popups',function ($ionicPopup,$ionicHistory,$location,commonFactory ) {
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

    logout = function (callback) {
        $ionicPopup.confirm({
            title: 'Logout',
//            template: 'Are you sure you want logout?'
            template: 'Sei sicuro di volere logout?'
        }).then(function (res) {
            if (res) {

                //logout from the app
                window.localStorage.removeItem("porfile");
                window.localStorage.removeItem("login");
                //popups.showMessage(response.response_msg)
                //$ionicHistory.clearHistory()
                callback()
                /*$ionicHistory.clearCache().then(function () {
                });*/
            } else {
                //console.log('You are not sure');
            }
        });
    }
    login = function () {
        $ionicPopup.confirm({
            title: 'Accedete, per favore!',
            //title: 'Please login!',
//            template: 'Are you sure you want logout?'
            template: 'Per accedere a questa sezione devi fare prima il login!'
        }).then(function (res) {
            if (res) {

                //logout from the app
                //popups.showMessage(response.response_msg)
                $ionicHistory.clearHistory()
                $ionicHistory.clearCache().then(function () {
                    $location.url('/app/screen2')
                });
            } else {
                //console.log('You are not sure');
            }
        });
    }


   return {
       showAlert:showAlert,
       showMessage:showMessage,
       logout:logout,
       login:login
   }
})