/**
 * Created by admin on 2/15/2017.
 */
ionicModule.controller('ImpostazioniCtrl', function ($scope,popups,services) {
    //$ionicSideMenuDelegate.canDragContent(false)

    $scope.cleinte = undefined
    $scope.$on('$ionicView.loaded', function () {
        $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id
        $scope.pushData = {
            oroscopo:'0',
            stream:'0',
            tv:'0',
            inlinea:'0',
            informazioni:'0',
            problemi:'0',
            nuoviservizi:'0',
            taroccoGiorno:'0',
            id:$scope.custoerId,
        }
        services.getpush($scope.custoerId, function (response) {
            if (response.response_status == '1') {
                    $scope.pushData = response.response_data.push;
                    $scope.pushData.id = $scope.custoerId
            }else {
                popups.showAlert(response.response_msg)
            }
        })
        
    });
    
    $scope.setPush = function () {
        services.setpush($scope.pushData,function (response) {

        })
    }

})