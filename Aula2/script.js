var MinhaLista = angular.module('MinhaLista', []);

MinhaLista.controller('TarefasController', function ($scope) {
   $scope.tarefas = [
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
