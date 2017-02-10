/**
 * Created by admin on 2/6/2017.
 */
/**
 * Created by admin on 2/6/2017.
 */
ionicModule.controller('ClenteCtrl', function ($scope, services, popups, $location, $ionicSideMenuDelegate) {
    //$ionicSideMenuDelegate.canDragContent(false)
    $scope.cleinte = undefined
    $scope.$on('$ionicView.loaded', function () {
        $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id

        services.getcustomerinfo($scope.custoerId, function (response) {
            if (response.response_status == '1') {
                if (response.response_key == 'SUCCESS') {
                    $scope.cleinte = response.response_data.profile;
                }else {
                    popups.showAlert(response.response_msg)
                }
            }
        })
    });

    $scope.showPayment = function () {
        popups.showPayment()
    }

    $scope.comingSoon = function () {
        popups.showAlert('Prossimamente!')
    }
})


/*
"id":"00008",
    "tariffa":"Non disponible",
    "nome":"Non disponible",
    "cognome":"mahiraj",
    "datanascitaid":"1993-09-26",
    "tel1":"7065257289",
    "address":"Non disponible",
    "metodopagamento":"Non disponible",
    "amount":"0",
    "minutes":"0"*/
