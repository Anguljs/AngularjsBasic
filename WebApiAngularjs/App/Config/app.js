var app = angular.module('app', []);


app.controller('appCtrl', function ($scope, $http, UsuarioServ) {

    $scope.hideSave = false;
    $scope.hideEdit = true;


    /*Add New item label */

    $scope.hidelblSave = false;
    $scope.hidelblEdit = true;

    UsuarioServ.GetAllRecords().then(function (d) {
        $scope.usuariosData = d.data; // Success
    }, function () {
        alert('Error al obtener la lista de usuarios'); // Failed
    });

    /* inicializar modelo*/
    $scope.Usuario = {
        IdUsuario: '',
        Nombre: '',
        Correo: '',
        CodigoPostal: '',
        Country: ''
    };

    /* limpiar campos formulario usuario */

    $scope.clear = function () {
        $scope.Usuario.Nombre = '';
        $scope.Usuario.Correo = '';
        $scope.Usuario.CodigoPostal = '';
        $scope.Usuario.Country = '';
    }



    //Add New Item
    $scope.save = function () {
        if ($scope.Usuario.Nombre != "" &&
            $scope.Usuario.Correo != "" && $scope.Usuario.CodigoPostal != "" && $scope.Usuario.Country != "") {
  
   
            $http({
                method: 'POST',
                url: 'api/Usuario/PostUsuario/',
                data: $scope.Usuario
            }).then(function successCallback(response) {
                $scope.usuariosData.push(response.data);
                $scope.clear();
                alert("Usuario Agregado Correctamente");
            }, function errorCallback(response) {              
                alert("Error : " + response.data.ExceptionMessage);
            });
        }
        else {
            alert('Todos los campos son obligatorios !!');
        }
    };


    /* detalle usuario */
    $scope.edit = function (data) {
        $scope.Usuario = { IdUsuario: data.IdUsuario, Nombre: data.Nombre, Correo: data.Correo, CodigoPostal: data.CodigoPostal, Country: data.Country };
        // ocultar boton guardar cuando se edita
        $scope.hideSave = true;
        // mostrar boton editar
        $scope.hideEdit = false;
        $scope.hidelblSave = true;
        $scope.hidelblEdit = false;
    }


    /* editar usuario*/
    $scope.update = function () {
        if ($scope.Usuario.Nombre != "" &&
            $scope.Usuario.Correo != "" && $scope.Usuario.CodigoPostal != "" && $scope.Usuario.Country != "") {
            $http({
                method: 'PUT',
                url: 'api/Usuario/PutUsuario/' + $scope.Usuario.IdUsuario,
                data: $scope.Usuario
            }).then(function successCallback(response) {
                $scope.usuariosData = response.data;
                $scope.clear();
                alert("Usuario Actualizado");
            }, function errorCallback(response) {
                alert("Error : " + response.data.ExceptionMessage);
            });
        }
        else {
            alert('Please Enter All the Values !!');
        }
    };

    /* eliminar usuarios */
    $scope.delete = function (index) {
        $http({
            method: 'DELETE',
            url: 'api/Usuario/DeleteUsuario/' + $scope.usuariosData[index].IdUsuario,
        }).then(function successCallback(response) {
            $scope.usuariosData.splice(index, 1);
            alert("Usuario Eliminado");
        }, function errorCallback(response) {
            alert("Error : " + response.data.ExceptionMessage);
        });
    };

});
