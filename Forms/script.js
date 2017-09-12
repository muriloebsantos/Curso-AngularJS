var log = function(data) {
   console.log(data);
};

var myApp = angular.module('Formulario', []);

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
