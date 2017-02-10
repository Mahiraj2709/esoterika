/**
 * Created by admin on 2/7/2017.
 */

ionicModule.controller('cartomantiDetailCtrl', function ($scope, services, popups,$stateParams, EmpDataFactory,$location, $ionicSideMenuDelegate) {
    //$ionicSideMenuDelegate.canDragContent(false)
    console.log(EmpDataFactory)
    $scope.empDetail = undefined
    $scope.empImage = imageURL+EmpDataFactory.employeeDetail.no+ imgExtension;
    $scope.$on('$ionicView.loaded', function () {
        $scope.custoerId = JSON.parse(window.localStorage.getItem("profile")).id

        services.getemployeeinfo({
            id:$scope.custoerId,
            employee_id:EmpDataFactory.employeeDetail.no
        }, function (response) {
            if (response.response_status == '1') {
                if (response.response_key == 'SUCCESS') {
                    $scope.empDetail = response.response_data[0];
                }else {
                    popups.showAlert(response.response_msg)
                }
            }
        })
    });

    $scope.showShedule = function (empDetail) {
        //console.log(JSON.stringify(empDetail))
        if(empDetail.colore != undefined && empDetail.colore == '' ) {
            return '--OFF--'
        }else return empDetail.starttime +" "+ empDetail.endtime;
    }
    /*$scope.openConsulto = function () {
        $location.url('/app/cartomanti_detail/'+empId);
    }*/

   /* {
        "no": "15",
        "nomearte": "Alida",
        "descrizione": "Maestra di Catottromanzia<br>\r\n<b>Legge:</b><br>\r\n- Tarocchi in amore lavoro fortuna<br>\r\n- Specchi e candele<br>\r\n<b>Specializzato in:</b><br>\r\n- Futuro remoto<br>\r\n- Destino di coppia",
        "start_time": "03",
        "end_time": "23",
        "color": "#F76F6F",
        "schedules": [],
        "schedule_msg_key": "SCHEDULE_NOT_FOUND"
    }*/

})


