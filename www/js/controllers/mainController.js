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

        $scope.profile = JSON.parse(window.localStorage.getItem("profile"))
        if (!localStorage.getItem('login')) {
            $scope.profile = {}
            $scope.profile.msg = 'Potrai usare l’applicazione anche senza registrarti, anche se con qualche limitazione. Scorri il menù a sinistra per aprire tutte le sezioni dell’App'
            return
        }

        // Anything you can think of
        console.log($ionicHistory.viewHistory());
        //load the modal again we come from customer profile view
        if($ionicHistory.viewHistory().backView == undefined) return

        if($ionicHistory.viewHistory().backView.stateName == 'app.login' || $ionicHistory.viewHistory().backView.stateName == 'app.registration') {
            //show the modal agian
            $state.go($state.current, {}, {reload: true});
            $ionicHistory.clearHistory();
            $ionicHistory.clearCache();
            console.log('recreated')
        }

    });

    /*$scope.$on('$ionicView.loaded', function () {

    });*/
})

