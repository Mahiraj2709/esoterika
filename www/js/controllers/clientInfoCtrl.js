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
}).controller('StoricoCtrl',function ($scope, services, popups) {
    $scope.$on('$ionicView.loaded', function () {
        $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id

        services.getstorico($scope.custoerId, function (response) {
            if (response.response_status == '1') {
                if (response.response_key == 'SUCCESS') {
                    $scope.payments = response.response_data.payments;
                    $scope.appointmentHistory = response.response_data.appointment_history;
                }else {
                    popups.showAlert(response.response_msg)
                }
            }
        })

        $scope.deleteAppontment = function (appoinment) {

            services.deleteappointment({
                id:$scope.custoerId,
                employee_nomearte:appoinment.employee_nomearte,
                date:appoinment.dateonly,
                time:appoinment.timeonly
            },function (resposne) {
                popups.showAlert(resposne.response_msg)
                if(resposne.response_status == '1') {
                    var index = $scope.appointmentHistory.indexOf(appoinment);
                    $scope.appointmentHistory.splice(index, 1);
                }
            })
        }
    });
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
