ionicModule.controller('AppCtrl', function ($scope, $ionicHistory, $state, $ionicModal, $location, $timeout, popups,$rootScope) {

    $rootScope.login = 'Login'
    $rootScope.notLoggedIn = !localStorage.getItem('login')
    if ($scope.notLoggedIn) {

    }
    else {
        $rootScope.login = 'Log Out'
    }

    /*$ionicHistory.clearHistory()
    $ionicHistory.clearCache()*/
    $state.go($state.current, {}, {reload: true});
    $scope.comingSoon = function () {
        popups.showAlert('Prossimamente!')
    }
    $scope.home = function () {
        $location.url('/app/screen5');
    }
    $scope.cartomani = function () {
        $location.url('/app/cartomanti');
    }
    $scope.contactti = function () {
        $location.url('/app/contattaci');
    }
    $scope.clienti = function () {
        if (!localStorage.getItem('login')) {
            popups.login();
            return
        }
        $location.url('/app/clienti');
    }
    $scope.oroscope = function () {
        $location.url('/app/oroscope');
    }
    $scope.social = function () {
        $location.url('/app/social');
    }
    $scope.impostazioni = function () {
        if (!localStorage.getItem('login')) {
            popups.login();
            return
        }
        $location.url('/app/impostazioni');
    }
    $scope.logout = function () {
        if ($rootScope.notLoggedIn) {
            $location.url('/app/screen2')
            /*$ionicHistory.clearCache().then(function () {
            });*/
            return
        }
        popups.logout(function () {
            $rootScope.login = 'Login'
            $rootScope.notLoggedIn = true
            $state.reload().then(function () {
                $location.url('/app/screen2')
            });

        })
    }
    $scope.comingSoon = function () {
        popups.showAlert('Prossimamente')
    }
})
    .controller('PlaylistsCtrl', function ($scope) {
        $scope.playlists = [
            {title: 'Reggae', id: 1},
            {title: 'Chill', id: 2},
            {title: 'Dubstep', id: 3},
            {title: 'Indie', id: 4},
            {title: 'Rap', id: 5},
            {title: 'Cowbell', id: 6}
        ];
    })
    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    });
