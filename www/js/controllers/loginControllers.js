/**
 * Created by admin on 2/6/2017.
 */
ionicModule.controller('LoginCtrl', function ($scope, services, popups, $location, $ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.canDragContent(false)
    $scope.user = {
        cognome: undefined,
        datanascitaid: undefined,
        password: undefined
    }
    $scope.loginData = {
        dob:undefined,
        rememberData:false
    }

    $scope.login = function () {
        if (validUser()) {
            if ($scope.loginData.remember) {
                saveDetails()
            }
            //chage date to given format
            var date = $scope.user.datanascitaid;
            //console.log($scope.user.datanascitaid)

            //console.log((new Date()).format('yyyy-MM-dd'))
            $scope.user.datanascitaid = ($scope.user.datanascitaid).toString('yyyy-MM-dd')

            console.log(JSON.stringify($scope.user))
            services.login($scope.user, function (response) {
                if (response.response_status == '1') {
                    if (response.response_key == 'SUCCESS') {
                        window.localStorage.setItem("profile", JSON.stringify(response.response_data.profile));
                        window.localStorage.setItem("login", true);
                        //popups.showMessage(response.response_msg)
                        $location.url('/app/screen5')
                        //$state.go($state.current, {}, {reload: true});
//                        location.reload();
//                        var initialHref = window.location.href;
//                        navigator.splashscreen.show();
// Reload original app url (ie your index.html file)
//                        window.location = initialHref;
//                        navigator.splashscreen.hide();
                    }else {
                        popups.showAlert(response.response_msg)
                    }
                }else {
                    popups.showAlert(response.response_msg)
                }
            })
            $scope.user.datanascitaid = date
        }
    }
    function validUser() {
        if ($scope.user.cognome == undefined || $scope.user.cognome == '') {
//            popups.showAlert('Username field can't be left blank!')
            popups.showAlert('Nome utente campo non può essere lasciato vuoto')
            return false
        }
        if ($scope.user.datanascitaid == undefined || $scope.user.datanascitaid == '') {
            popups.showAlert('Seleziona la data di nascita!')
//            popups.showAlert('Please select date of birth!')
            return false
        }
        if ($scope.user.password == undefined || $scope.user.password == '') {
            popups.showAlert('campo password non può essere lasciato vuoto')
//            popups.showAlert('Password field can't be left blank!')
            return false
        } else if ($scope.user.password.length < 8) {
            popups.showAlert("La password deve contenere almeno 8 caratteri");
//            popups.showAlert("Password must contain at least 6 characters");
            return false
        }
        return true
    }

    function saveDetails() {
        console.log($scope.user)
        window.localStorage.setItem('login_detial', JSON.stringify($scope.user))
    }

    if (localStorage.getItem('login_detial') != undefined) {
        //get the user and set
        $scope.user = JSON.parse(localStorage.getItem('login_detial'))
        console.log($scope.user)
    }
})