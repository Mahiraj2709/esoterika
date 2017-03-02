// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var ionicApplicationName = 'starter';
var ionicModule = angular.module(ionicApplicationName, [
    'ionic',
    'ngCordova'
])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            // Hide splash screen
            setTimeout(function () {
                navigator.splashscreen.hide();
            }, 1500);
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
            $ionicConfigProvider.backButton.previousTitleText(false).text('')
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })
            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html',
                        controller: 'LoginCtrl'
                    }
                }
            })
            .state('app.clienti', {
                url: '/clienti',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/clienti.html',
                        controller: 'ClenteCtrl'
                    }
                }
            })
            .state('app.contattaci', {
                url: '/contattaci',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/contattaci.html',
                        controller: 'ContattaciCtrl'
                    }
                }
            })
            .state('app.storico', {
                url: '/storico',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/storico.html',
                        controller: 'StoricoCtrl'
                    }
                }
            })
            .state('app.browse', {
                url: '/browse',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/browse.html'
                    }
                }
            })
            .state('app.playlists', {
                url: '/playlists',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/playlists.html',
                        controller: 'PlaylistsCtrl'
                    }
                }
            })
            .state('app.screen2', {
                url: '/screen2',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/screen-2.html',
                        controller: 'AppCtrl'
                    }
                }
            })
            .state('app.screen5', {
                url: '/screen5',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/screen-5.html',
                        controller: 'MainCtrl'
                    }
                }
            })
            .state('app.registration', {
                url: '/registration',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/registration.html',
                        controller: 'RegisterCtrl'
                    }
                }
            })
            .state('app.cartomanti', {
                url: '/cartomanti',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/cartomanti.html',
                        controller: 'cartomantiCtrl'
                    }
                }
            })
            .state('app.cartomanti_detail', {
                url: '/cartomanti_detail',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/cartomanti_detail.html',
                        controller: 'cartomantiDetailCtrl'
                    }
                }
            })
            .state('app.consulto', {
                url: '/consulto',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/consulto.html',
                        controller: 'consultoCtrl'
                    }
                }
            })
            .state('app.prenato', {
                url: '/prenato',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/prenato_consulto.html',
                        controller: 'PrenatoCtrl'
                    }
                }
            })
            .state('app.oroscope', {
                url: '/oroscope',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/oroscopo.html',
                        controller: 'OroscopoCtrl'
                    }
                }
            })
            .state('app.oroscope_detail', {
                url: '/oroscope_detail',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/oroscopo_detail.html',
                        controller: 'OroscopeDetailCtrl'
                    }
                }
            })
            .state('app.social', {
                url: '/social',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/social.html',
                        controller: 'SocialCtrl'
                    }
                }
            })
            .state('app.impostazioni', {
                url: '/impostazioni',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/impostazioni.html',
                        controller: 'ImpostazioniCtrl'
                    }
                }
            })
            .state('app.single', {
                url: '/playlists/:playlistId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/playlist.html',
                        controller: 'PlaylistCtrl'
                    }
                }
            })
        // if none of the above states are matched, use this as the fallback
    //    console.log(localStorage.getItem('login'))
//        $urlRouterProvider.otherwise('/app/screen2');
        $urlRouterProvider.otherwise('/app/screen5');
    });
