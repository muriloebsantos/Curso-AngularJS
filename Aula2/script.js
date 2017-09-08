var MinhaLista = angular.module('MinhaLista', []);

MinhaLista.controller('TarefasController', function ($scope) {
   $scope.tarefas = [
     {
        'nome': "Ir trabalhar",
        'prioridade': 1
     },
     {
       'nome': "Ir a faculdade",
       'prioridade': 2
     }
   ];

   $scope.add = function () {
      $scope.tarefas.push($scope.tarefa);
      $scope.tarefa = {};
   };

   $scope.delete = function(i) {
      $scope.tarefas.splice(i, 1);
   };

});
