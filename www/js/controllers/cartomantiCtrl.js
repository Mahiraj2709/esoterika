/**
 * Created by admin on 2/6/2017.
 */
/**
 * Created by admin on 2/6/2017.
 */
ionicModule.controller('cartomantiCtrl', function ($scope, services, popups, $location,EmpDataFactory) {
    //$ionicSideMenuDelegate.canDragContent(false)

    $scope.cartomanti = 'Cartomanti'
    $scope.empArray = undefined
    $scope.$on('$ionicView.loaded', function () {
        $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id

        services.getallemployees($scope.custoerId, function (response) {
            if (response.response_status == '1') {
                if (response.response_key == 'SUCCESS') {
                    $scope.empArray = response.response_data;
                }else {
                    popups.showAlert(response.response_msg)
                }
            }
        })
    });

    $scope.openDetail = function (emp) {
        EmpDataFactory.employeeDetail = emp;
        $location.url('/app/cartomanti_detail');
    }

}).factory('EmpDataFactory',function () {
    var employeeDetail = {}
    return employeeDetail
})

