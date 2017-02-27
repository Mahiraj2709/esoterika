/**
 * Created by admin on 2/6/2017.
 */
ionicModule.controller('RegisterCtrl', function ($scope, $rootScope, services, popups,$location,$rootScope) {
    $scope.userRegiter = {
        cognome: undefined,
        datanascitaid: undefined,
        tel1: undefined,
        email: undefined,
        password: undefined
    }
    $scope.dob = undefined
    $scope.setDate = function (date) {
        $scope.selectedDate  = date;
        $scope.userRegiter.datanascitaid = date.toString('yyyy-MM-dd')
    }
    $scope.regsiter = function () {
        if (validUser()) {
            services.register($scope.userRegiter, function (response) {
                if(response.response_status == SUCCESS_STATUS) {
                    $rootScope.login = 'Log Out'
                    window.localStorage.setItem("profile", JSON.stringify(response.response_data));
                    //popups.showMessage(response.response_data.msg)
                    window.localStorage.setItem("login", true);
                    $rootScope.notLoggedIn = false
                    $location.url('/app/screen5')
                }else {
                    popups.showAlert(response.response_msg)
                }
            })
        }
    }
    function validUser() {
        //console.log($scope.selectedDate)
        //console.log(new Date())
        //console.log($scope.slectedDate >= new Date())

        if ($scope.userRegiter.cognome == undefined || $scope.userRegiter.cognome == '') {
//            popups.showAlert('Username field can't be left blank!')
            popups.showAlert('Nome utente campo non può essere lasciato vuoto')
            return false
        }else if ($scope.userRegiter.datanascitaid == undefined || $scope.userRegiter.datanascitaid == '') {
            popups.showAlert('Seleziona la data di nascita')
//            popups.showAlert('Please select date of birth!')
            return false
        }/* else if ($scope.slectedDate >= new Date()) {
            popups.showAlert('Please select a valid date of birth')
//            popups.showAlert('Please select date of birth!')
            return false
        }*/else if (!$scope.userRegiter.tel1) {
            popups.showAlert("campo numero di telefono non può essere lasciato vuoto");
//            popups.showAlert("Phone Number field can't be left blank");
            return false
        } else if (!validPhoneNo($scope.userRegiter.tel1)) {
//            popups.showAlert("Please enter a valid Phone Number");
            popups.showAlert("Si prega di inserire un numero di telefono valido");
            return false
        } else if (!$scope.userRegiter.email ) {
//            popups.showAlert("Email field can't be left blank");
            popups.showAlert("campo E-mail non può essere lasciato vuoto");
            return false
        } else if (!validEmail($scope.userRegiter.email)) {
            popups.showAlert("Inserisci una email valida");
            return false
//            popups.showAlert("Please enter a valid Email");
        } else if ($scope.userRegiter.password == undefined || $scope.userRegiter.password == '') {
            popups.showAlert('campo password non può essere lasciato vuoto')
//            popups.showAlert('Password field can't be left blank!')
            return false
        } else if ($scope.userRegiter.password.length < 8) {
//            popups.showAlert("Password length should be minimum 6");
            popups.showAlert("La password deve contenere almeno 8 caratteri");
            return false
        } else if ($scope.confirm_password == undefined) {
//            popups.showAlert("Password length should be minimum 6");
            popups.showAlert("Conferma Password non può essere lasciato vuoto");
            return false
        }else if ($scope.confirm_password != $scope.userRegiter.password) {
            popups.showAlert("Le password non corrispondono. Riprova!");
//            popups.showAlert("Passwords doesn't match. Please try again");
            return false
        }
        return true
    }

    function validEmail(email) {
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            return false;
        } else {
            return true;
        }
    }

    function validPhoneNo(phoneNo) {
        var phoneno = /^[0-9]{6,14}$/;
        if (String(phoneNo).match(phoneno)) {
            return true;
        } else {
            return false;
        }
    }
})