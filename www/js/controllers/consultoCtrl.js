/**
 * Created by admin on 2/7/2017.
 */
ionicModule.controller('consultoCtrl', function ($scope, services, popups,$stateParams, EmpDataFactory,$location,
                                                 $ionicSideMenuDelegate) {
    //$ionicSideMenuDelegate.canDragContent(false)
    console.log(EmpDataFactory)
   // $scope.empDetail = undefined
    $scope.appointmentDates = undefined
    $scope.appointmentTimes = undefined

    $scope.consulto = {
        id:'',
        date:undefined,
        nome:'',
        servizio:'Carta di credito prepagata',
        telefono:'',
        time:undefined,
        employee_nomearte:''
    }

    $scope.$on('$ionicView.loaded', function () {
        $scope.profile = JSON.parse(window.localStorage.getItem("profile"))

        $scope.consulto.id = $scope.profile.id;
        $scope.consulto.nome = $scope.profile.cognome;
        $scope.consulto.telefono = $scope.profile.tel1;
        $scope.consulto.employee_nomearte = EmpDataFactory.employeeDetail.nomearte;
        services.getdatetime({
            id:$scope.profile.id,
            employee_nomearte:EmpDataFactory.employeeDetail.nomearte
        }, function (response) {
            if (response.response_status == '1') {
                $scope.appointmentDates = response.response_data.appointment_date;
                $scope.appointmentTimes = response.response_data.appointment_time;
            }
        })
    });

    $scope.getTimeByDate = function (seleectedDate) {
        $scope.appointmentTimes = undefined
        services.gettimebydate({
            id:$scope.profile.id,
            employee_nomearte:EmpDataFactory.employeeDetail.nomearte,
            date:seleectedDate
        },function (response) {

        })
    }
    $scope.checkValue = {
        value:false
    }
    $scope.bookAppointment = function () {
        if ($scope.consulto.date == undefined){
//            popups.showAlert('No date available!')
            popups.showAlert('Nessuna data disponibile!')
            return
        } else if ($scope.consulto.time == undefined){
//            popups.showAlert('No time available!')
            popups.showAlert("Non c'è tempo disponibile!")
            return
        }else if(!$scope.checkValue.value) {
//            popups.showAlert('Please accept terms and condition!')
            popups.showAlert('Si prega di accettare i termini e le condizioni!')
            return
        }
        else {
            services.bookAppointment($scope.consulto,function (response) {

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
