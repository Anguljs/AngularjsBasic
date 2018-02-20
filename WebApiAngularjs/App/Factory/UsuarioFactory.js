app.factory('UsuarioServ', function ($http) {
        var fac = {};
        fac.GetAllRecords = function () {
            return $http.get('api/Usuario/GetAllUser');
        }
        return fac;
    });