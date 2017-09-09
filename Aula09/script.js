var diretivas = angular.module('Diretivas', []);

diretivas.controller('DiretivasController', function($scope){
  $scope.dev = 'Murilo E B Santos';
});

diretivas.directive('efDev', function() {
   return {
     template: "<strong>Desenvolvedor:</strong> {{dev}}"
   }
});
