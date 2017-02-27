/**
 * Created by admin on 2/14/2017.
 */
ionicModule
    .controller('OroscopoCtrl', function ($scope, popups, services, $location, OroscopeFactory) {
        $scope.$on('$ionicView.loaded', function () {
            $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id
        });
        $scope.oroscopes = OroscopeFactory.oroscope
        $scope.selectedDate = {date: undefined};
        $scope.getOroscope = function (oroscopeId) {

            if (!localStorage.getItem('login')) {
                popups.login();
                return
            }
            //            var currentDate
            if ($scope.selectedDate.date == undefined || $scope.selectedDate.date == '') {
                popups.showAlert('Seleziona la data!')
                return
            }
            console.log({
                id: $scope.custoerId,
                date: $scope.selectedDate.date.toString('yyyy-MM-dd'),
                horoscope_sign: oroscopeId
            })
            /*else if($scope.date.getTime() <  )*/
            services.getfortunedatewise({
                id: $scope.custoerId,
                date: $scope.selectedDate.date.toString('yyyy-MM-dd'),
                horoscope_sign: oroscopeId
            }, function (response) {
                if (response.response_status == '1') {
                    OroscopeFactory.data = response.response_data
                    $location.url('/app/oroscope_detail');
                }
            })
        }
    })
    .controller('OroscopeDetailCtrl', function ($scope, OroscopeFactory, $cordovaSocialSharing) {
        $scope.oroscopeDetail = OroscopeFactory.data;
        OroscopeFactory.oroscope.forEach(function (oroscope) {
            console.log(JSON.stringify(oroscope))
            if (oroscope.id == OroscopeFactory.data.horoscope_sign) {
                $scope.image = oroscope.image
            }
        });
        $scope.socialSharing = function () {
            var message = OroscopeFactory.data.msg
            var subject = OroscopeFactory.data.date + " " + OroscopeFactory.data.horoscope_sign
            $cordovaSocialSharing
                .share(message, subject, null, null) // Share via native share sheet
                .then(function (result) {
                    // Success!
                }, function (err) {
                    // An error occured. Show a message to the user
                });
        }
    })
    .factory('OroscopeFactory', function () {
        return {
            oroscope: [
                {
                    id: 'ariete',
                    name: 'Ariete',
                    image: 'img/ariete.png'
                },
                {
                    id: 'toro',
                    name: 'Toro',
                    image: 'img/toro.png'
                },
                {
                    id: 'gemelli',
                    name: 'Gemelli',
                    image: 'img/gemelli.png'
                },
                {
                    id: 'cancro',
                    name: 'Cancro',
                    image: 'img/cancro.png'
                },
                {
                    id: 'vergine',
                    name: 'Virgine',
                    image: 'img/virgine.png'
                },
                {
                    id: 'leone',
                    name: 'Leone',
                    image: 'img/leone.png'
                },
                {
                    id: 'bilancia',
                    name: 'Bilancia',
                    image: 'img/bilancia.png'
                },
                {
                    id: 'scorpione',
                    name: 'Scorpione',
                    image: 'img/scorpione.png'
                },
                {
                    id: 'sagittario',
                    name: 'Sagittario',
                    image: 'img/sagittario.png'
                },
                {
                    id: 'capricorno',
                    name: 'Capricorno',
                    image: 'img/capricorno.png'
                },
                {
                    id: 'acquario',
                    name: 'Acquario',
                    image: 'img/acquario.png'
                },
                {
                    id: 'pesci',
                    name: 'Pesci',
                    image: 'img/Pesci.png'
                }
            ],
            data: undefined
        }
    })
