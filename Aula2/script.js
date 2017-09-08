var MinhaLista = angular.module('MinhaLista', []);

MinhaLista.controller('TarefasController', function ($scope) {
   $scope.log = [
     {
        'nome': "Ir trabalhar",
        'prioridade': 1
     },
     {
       'nome': "Ir a faculidade",
       'prioridade': 2
     }
   ];
});
