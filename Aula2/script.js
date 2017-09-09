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

   $scope.nome = 'Murilo E B Santos';
   $scope.idade = 25;
   $scope.salario = 1000;

   $scope.add = function () {
      $scope.tarefas.push($scope.tarefa);
      $scope.tarefa = {};
   };

   $scope.delete = function(i) {
      $scope.tarefas.splice(i, 1);
   };

});
