/**
 * Created by admin on 2/15/2017.
 */
ionicModule.controller('ImpostazioniCtrl', function ($scope, popups, services) {
    //$ionicSideMenuDelegate.canDragContent(false)
    $scope.cleinte = undefined
    $scope.$on('$ionicView.loaded', function () {
        $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id
        console.log($scope.custoerId)
        $scope.pushData = {
            oroscopo: false,
            stream: false,
            tv: false,
            inlinea: false,
            informazioni: false,
            problemi: false,
            nuoviservizi: false,
            taroccoGiorno: false,
        }
        services.getpush($scope.custoerId, function (response) {
            if (response.response_status == '1') {
                if (response.response_data.push != undefined) {
                    for (var key in response.response_data.push) {
                        if (response.response_data.push[key] == '1') {
                            response.response_data.push[key] = true
                        } else response.response_data.push[key] = false
                    }
                    $scope.pushData = response.response_data.push
                }
            } else {
                popups.showAlert(response.response_msg)
            }
        })
    });
    $scope.setPush = function () {
        var pushObj = {}
        for (var key in $scope.pushData) {
            if ($scope.pushData[key] == false) pushObj[key] = '0'
            else if ($scope.pushData[key] == true) pushObj[key] = '1'
        }
        pushObj.id = $scope.custoerId
        //console.log(pushObj)
        //return
        services.setpush(pushObj, function (response) {
        })
    }
})