/**
 * Created by admin on 2/6/2017.
 */
ionicModule.factory('services', function ($http,$ionicLoading,$httpParamSerializerJQLike) {
    function login(user, callback) {
        $ionicLoading.show({
            template: ' Caricamento in corso...'
        });
        var formdata = new FormData();
        for (var key in user) {
            formdata.append(key, user[key]);
        }
        $http({
            url: baseURL + 'login',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(user)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(user))
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (error) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function register(user, callback) {
        $ionicLoading.show({
            template: ' Caricamento in corso...'
        });
        $http({
            url: baseURL + 'register',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(user)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(user))
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function getcustomerinfo(customerId, callback) {
        $ionicLoading.show({
            template: ' Caricamento in corso...'
        });
        $http({
            url: baseURL + 'getcustomerinfo',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike({id:customerId})
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }
    // to get all services for unit
    function getstorico(customerId, callback) {
        $ionicLoading.show({
            template: ' Caricamento in corso...'
        });
        $http({
            url: baseURL + 'storico',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike({id:customerId})
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function deleteappointment(appointment, callback) {
        $ionicLoading.show({
            template: ' Caricamento in corso...'
        });
        $http({
            url: baseURL + 'deleteappointment',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(appointment)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function getpush(customerId, callback) {
        $ionicLoading.show({
            template: ' Caricamento in corso...'
        });
        $http({
            url: baseURL + 'getpush',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike({id:customerId})
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function setpush(pushData, callback) {
        $ionicLoading.show({
            template: ' Caricamento in corso...'
        });
        $http({
            url: baseURL + 'setpush',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(pushData)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function getfortunedatewise(oroscope, callback) {
        $ionicLoading.show({
            template: ' Caricamento in corso...'
        });
        $http({
            url: baseURL + 'getfortunedatewise',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(oroscope)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function getallemployees(customerId, callback) {
        $ionicLoading.show({
            template: ' Caricamento in corso...'
        });
        $http({
            url: baseURL + 'getallemployees',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike({id:customerId})
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function getemployeeinfo(empData, callback) {
        $ionicLoading.show({
            template: 'Caricamento in corso...'
        });
        $http({
            url: baseURL + 'getemployeeinfo',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(empData)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function getdatetime(data, callback) {
        $ionicLoading.show({
            template: ' Caricamento in corso...'
        });
        $http({
            url: baseURL + 'getdatetime',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(data)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function gettimebydate(data, callback) {
        $ionicLoading.show({
            template: ' Caricamento in corso...'
        });
        $http({
            url: baseURL + 'gettimebydate',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(data)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function bookAppointment(data, callback) {
        $ionicLoading.show({
            template: 'Caricamento in corso...'
        });
        $http({
            url: baseURL + 'submitappointment',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(data)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }


    return {
        login: login,
        register: register,
        getcustomerinfo:getcustomerinfo,
        getstorico:getstorico,
        deleteappointment:deleteappointment,
        getpush:getpush,
        setpush:setpush,
        getallemployees:getallemployees,
        getfortunedatewise:getfortunedatewise,
        getemployeeinfo:getemployeeinfo,
        getdatetime:getdatetime,
        gettimebydate:gettimebydate,
        bookAppointment:bookAppointment
    };
})
