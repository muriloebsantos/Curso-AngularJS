var usuarios = angular.module("Usuarios", ['ngRoute']);

usuarios.config(['$routeProvider', function($routeProvider){
  $routeProvider
      .when('/usuarios', {
         templateUrl: 'partials/home.html',
         controller: 'UsuariosController'
      })
      .when('/usuarios/novo', {
         templateUrl: 'partials/novo.html',
         controller: 'UsuariosController'
      })
      .when('/usuarios/editar/:id', {
         templateUrl: 'partials/editar.html',
         controller: 'UsuariosController'
      })
}]);

usuarios.controller('UsuariosController', ['$scope', function($scope){

}]);
