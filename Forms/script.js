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

         return modelValue > 13;
      }
    }
  }
});

myApp.controller("FormController", function($scope){
  var reset = function(){
    $scope.formulario = '';
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
