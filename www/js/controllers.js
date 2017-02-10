ionicModule.controller('AppCtrl', function ($scope, $ionicModal,$location, $timeout,popups) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    // Form data for the login modal
    $scope.comingSoon = function () {
        popups.showAlert('Prossimamente!')
    }

    $scope.cartomani = function () {
        $location.url('/app/cartomanti');
    }

    $scope.clienti = function () {
        $location.url('/app/clienti');
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