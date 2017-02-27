/**
 * Created by admin on 2/6/2017.
 */
/**
 * Created by admin on 2/6/2017.
 */
ionicModule.controller('ClenteCtrl', function ($scope, services, popups,$ionicPopup , $location,$http) {
    //$ionicSideMenuDelegate.canDragContent(false)
    $scope.cleinte = undefined
    $scope.$on('$ionicView.loaded', function () {
        $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id

        services.getcustomerinfo($scope.custoerId, function (response) {
            if (response.response_status == '1') {
                if (response.response_key == 'SUCCESS') {
                    $scope.cleinte = response.response_data.profile;
                }else {
                    popups.showAlert(response.response_msg)
                }
            }
        })
    });

    showPayment = function () {
        $ionicPopup.show({
            templateUrl:'templates/payment.html',
            scope:$scope,
        })
    }

    $scope.showPayment = function () {
        showPayment()
    }


    $scope.pricesList = [
        {
            id:0,
            price:'€ 10,00 (10 minuti)'
        },
        {
            id:1,
            price:'€ 15,00 (15 minuti)'
        },
        {
            id:2,
            price:'€ 20,00 (20 minuti)'
        },
        {
            id:3,
            price:'€ 25,00 (25 minuti)'
        },
        {
            id:4,
            price:'€ 30,00 (30 minuti)'
        },
        {
            id:5,
            price:'€ 50,00 (50 minuti)'
        },
        {
            id:6,
            price:'€ 100,00 (100 minuti)'
        },
    ]
    $scope.user = {
        vcccode:undefined,
        vccamount:0,
        x:42,
        y:19
    }



    $scope.submitForm = function() {



        /*var pageContent = '<html><head></head><body><form id="loginForm" action="YourPostURL" method="post">' +
            '<input type="text" name="key1" value="' + 'fd' + '">' +
            '<input type="text" name="key" value="' + ''+ '">' +
            '</form> <script type="text/javascript">document.getElementById("loginForm").submit();</script></body></html>';*/


        var browserRef = cordova.InAppBrowser.open(
            'templates/payment.html' ,
            "_blank",
            "hidden=no,location=no,clearsessioncache=yes,clearcache=yes"
        );

        /*
        if($scope.user.vcccode == ''){
            popups.showAlert('Si prega di inserire il codice Vcc!'); return
        }

        // Posting data to php file
        $http({
            method  : 'POST',
            url     : 'http://www.virtualcallcenter.it/torecharge.php?tid=803af03200eb76344e3d6e2f3e58eeb3',
            data    : $scope.user, //forms user object
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        },{page:'akjbd',state:'true'})
            .success(function(data) {
                if (data.errors) {
                    // Showing errors.
                    $scope.errorName = data.errors.name;
                    $scope.errorUserName = data.errors.username;
                    $scope.errorEmail = data.errors.email;
                } else {
                    $scope.message = data.message;
                }
            });*/
    };

    $scope.comingSoon = function () {
        popups.showAlert('Prossimamente!')
    }
}).controller('StoricoCtrl',function ($scope, services, popups) {
    $scope.$on('$ionicView.loaded', function () {
        $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id

        services.getstorico($scope.custoerId, function (response) {
            if (response.response_status == '1') {
                if (response.response_key == 'SUCCESS') {
                    $scope.payments = response.response_data.payments;
                    $scope.appointmentHistory = response.response_data.appointment_history;
                }else {
                    popups.showAlert(response.response_msg)
                }
            }
        })

        $scope.deleteAppontment = function (appoinment) {

            services.deleteappointment({
                id:$scope.custoerId,
                employee_nomearte:appoinment.employee_nomearte,
                date:appoinment.dateonly,
                time:appoinment.timeonly
            },function (resposne) {
                popups.showAlert(resposne.response_msg)
                if(resposne.response_status == '1') {
                    var index = $scope.appointmentHistory.indexOf(appoinment);
                    $scope.appointmentHistory.splice(index, 1);
                }
            })
        }
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
