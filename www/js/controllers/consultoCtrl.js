/**
 * Created by admin on 2/7/2017.
 */
ionicModule
    .controller('consultoCtrl', function ($scope, services, popups, $stateParams, EmpDataFactory, $location, AppointmentFactory,
                                          $ionicSideMenuDelegate) {
        //$ionicSideMenuDelegate.canDragContent(false)
        console.log(EmpDataFactory)
        // $scope.empDetail = undefined
        $scope.appointmentDates = undefined
        $scope.appointmentTimes = undefined
        var emptyDate = [
            'Nessuna data disponibile'
        ]
        var emptyTime = [
            'nessun tempo a disposizione'
        ]
        $scope.appointmentDates = emptyDate
        $scope.appointmentTimes = emptyTime
        $scope.servizo = [
            'Carta di credito prepagata',
            'Servizio 899',
            'Servizio Cortesia',
            'Cartomazia per l’Estero',
            'Servizio Notturno'
        ]
        $scope.consulto = {
            id: '',
            date: 'Nessuna data disponibile',
            nome: '',
            servizio: $scope.servizo[0],
            telefono: '',
            time: 'nessun tempo a disposizione',
            employee_nomearte: ''
        }
        $scope.$on('$ionicView.loaded', function () {
            $scope.profile = JSON.parse(window.localStorage.getItem("profile"))
            $scope.consulto.id = $scope.profile.id;
            $scope.consulto.nome = $scope.profile.cognome;
            $scope.consulto.telefono = $scope.profile.tel1;
            $scope.consulto.employee_nomearte = EmpDataFactory.employeeDetail.nomearte;
            services.getdatetime({
                id: $scope.profile.id,
                employee_nomearte: EmpDataFactory.employeeDetail.nomearte
            }, function (response) {
                if (response.response_status == '1') {
                    $scope.appointmentDates = response.response_data.appointment_date;
                    if ($scope.appointmentDates != undefined && $scope.appointmentDates.length > 0) {
                        $scope.consulto.date = $scope.appointmentDates[0]
                    }else {
                        $scope.appointmentDates = emptyDate
                        $scope.consulto.date = emptyDate[0]
                    }

                    $scope.appointmentTimes = response.response_data.appointment_time;
                    if ($scope.appointmentTimes != undefined && $scope.appointmentTimes.length > 0) {
                        $scope.consulto.time = $scope.appointmentTimes[0]
                    }else {
                        $scope.appointmentTimes = emptyTime
                        $scope.consulto.time = emptyTime[0]
                    }

                }
            })
        });
        $scope.getTimeByDate = function (seleectedDate) {
            $scope.appointmentTimes = emptyTime
            $scope.consulto.time = emptyTime[0]
            console.log(seleectedDate)
            services.gettimebydate({
                id: $scope.profile.id,
                employee_nomearte: EmpDataFactory.employeeDetail.nomearte,
                date: seleectedDate
            }, function (response) {
                if (response.response_status == '1') {
                    $scope.appointmentTimes = response.response_data.appointment_time;
                    if ($scope.appointmentTimes != undefined && $scope.appointmentTimes.length > 0) {
                        $scope.consulto.time = $scope.appointmentTimes[0]
                    }else {
                        $scope.appointmentTimes = emptyTime
                        $scope.consulto.time = emptyTime[0]
                    }

                }
            })
        }
        $scope.checkValue = {
            value: false
        }
        $scope.bookAppointment = function () {
            if ($scope.consulto.date == undefined  || $scope.consulto.date == emptyDate[0]) {
//            popups.showAlert('No date available!')
                popups.showAlert('Nessuna data disponibile!')
                return
            } else if ($scope.consulto.time == undefined || $scope.consulto.time == emptyTime[0]) {
//            popups.showAlert('No time available!')
                popups.showAlert("Non c'è tempo disponibile!")
                return
            } else if (!$scope.checkValue.value) {
//            popups.showAlert('Please accept terms and condition!')
                popups.showAlert('Si prega di accettare i termini e le condizioni!')
                return
            }
            else {
                services.bookAppointment($scope.consulto, function (response) {
                    if (response.response_status == '1') {
                        AppointmentFactory.appointment = response.response_data.result;
                        $location.url('/app/prenato')
                    }
                })
            }
        }
        $scope.openPrivacyPolicy = function () {
            cordova.InAppBrowser.open('http://www.studioesoterika.net/informazioni/privacy.htm', '_blank', 'location=yes');
        }
        /*id
         date
         nome
         servizio
         telefono
         time
         employee_nomearte*/
    })
    .controller('PrenatoCtrl', function ($scope, AppointmentFactory) {
        $scope.appointment = AppointmentFactory.appointment;
    })
    .factory('AppointmentFactory', function () {
        return {
            appointment: undefined
        }
    })
