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
      var tarefa = {
        'nome': $scope.nome,
        'prioridade': $scope.prioridade
      };
      $scope.tarefas.push(tarefa);
      $scope.nome = '';
      $scope.prioridade = '';
   };

   $scope.delete = function(i) {
      $scope.tarefas.splice(i, 1);
   };

});
