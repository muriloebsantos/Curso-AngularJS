var usuarios = angular.module("Usuarios", ['ngRoute', 'ngResource']);

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

usuarios.factory('UsuarioModel', ['$resource', function($resource){
    return $resource('http://localhost/server-resources/usuarios/:id',
                      null,
                      {
                          'update'  : {
                             method: 'PUT'
                          }
                      }
      );
}]);
usuarios.controller('UsuariosController', ['$scope', 'UsuarioModel', '$routeParams', function($scope){
   $scope.usuarios = UsuarioModel.query();

   $scope.ver = function(id) {
     $scope.usuario = UsuarioModel.get({id:$routeParams.id});
   }

   $scope.salvar = function() {
      UsuarioModel.update({id: $routeParams.id},
                           $scope.usuario,
                           function(){
                              if(confirm("Voltar?"))
                                 $location.path('/usuarios');
                           },
                         function(data, status){
                             alert('Erro ' + status);
                         });
   }

   $scope.remover = function(id) {
		if (confirm('Tem certeza?')) {
			UsuarioModel.remove(
				{id:id},
				{},
				function() {
					alert('Removido com sucesso!');
					$scope.usuarios = UsuarioModel.query();
				},
				function(data, status) {
					alert('Error '+status);
				}
			);
		}
	}

}]);
