/**
 * Created by admin on 2/7/2017.
 */
/**
 * Created by admin on 2/6/2017.
 */
/**
 * Created by admin on 2/6/2017.
 */
ionicModule.controller('MainCtrl', function ($scope, services, $state,popups, $location,$ionicHistory, $ionicNavBarDelegate) {
    //$ionicSideMenuDelegate.canDragContent(false)


    $scope.$on('$ionicView.enter', function(){
        // Anything you can think of
        console.log($ionicHistory.viewHistory());
        //load the modal again we come from customer profile view
        if($ionicHistory.viewHistory().backView == undefined) return

        if($ionicHistory.viewHistory().backView.stateName == 'app.login' || $ionicHistory.viewHistory().backView.stateName == 'app.registration') {
            //show the modal agian
            $state.go($state.current, {}, {reload: true});
            $ionicHistory.clearHistory();
            $ionicHistory.clearCache();
        }
    });

    $scope.$on('$ionicView.loaded', function () {
        $scope.profile = JSON.parse(window.localStorage.getItem("profile"))
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
