var log = function(data) {
   console.log(data);
};

var myApp = angular.module('Formulario', []);

myApp.directive('minIdade', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function($scope, elm, attr, ctrl){
      ctrl.$validators.idade = function(modelValue){
         if(ctrl.$isEmpty(modelValue))
           return false;

         return modelValue >= attr.minIdade;
      }
    }
  }
});

myApp.controller("FormController", function($scope, $http){
  var reset = function(){
    $scope.formulario = '';
  };

  $scope.get = function(){
    $http.get('http://localhost/angularjs/Curso-AngularJS/Forms/server-http/usuarios/')
          .then(function(data){
              $scope.formulario = data;
          },
          function(data, status, headers, config){
            log(data);
          });
  };

  $scope.salvar = function(form_data){
      $scope.salvo = form_data;
      log(form_data);
      reset();
   };

   $scope.reset = function(){
      reset();
   };
});
