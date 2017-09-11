var diretivas = angular.module('Diretivas', []);

// criando o controller
diretivas.controller('DiretivasController', function($scope){
  $scope.dev = 'Murilo E B Santos';
  $scope.idade = 25;
});

diretivas.directive('efDev', function() {
   return {
     restrict: "EA", // elemento (E), classe (C), attributo (A), ou  EAC ou EA
     templateUrl: function(elem, attr){
       if(!attr.type){
         var type = 'dev';
       } else {
         var type = attr.type;
       }
       return 'partials/' + type + '.html'
     }
   }
});
