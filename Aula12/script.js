var diretivas = angular.module('Diretivas', []);

diretivas.controller('DiretivasController', function($scope){
   $scope.evento = function(msg){
      alert(msg);
   };
});
