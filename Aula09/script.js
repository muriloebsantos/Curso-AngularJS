var diretivas = angular.module('Diretivas', []);

// criando o controller 
diretivas.controller('DiretivasController', function($scope){
  $scope.dev = 'Murilo E B Santos';
});

diretivas.directive('efDev', function() {
   return {
     templateUrl: function(){
       return 'partials/dev.html'
     }
   }
});
