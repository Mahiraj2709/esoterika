/**
 * Created by admin on 2/9/2017.
 */
ionicModule.controller('ContattaciCtrl', function ($scope,  popups) {
    //$ionicSideMenuDelegate.canDragContent(false)
    $scope.cleinte = undefined
    $scope.$on('$ionicView.loaded', function () {
        $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id

    });


})
