// JavaScript Document
app.factory('getData', ['$http', function($http) { 
  return   $http.get('http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=40').  	//http request to retreve the json data
    success(function(data) {
      var data = angular.fromJson(data);
      return data;
    }).
    error(function(data) {
      return err; // log error
    });
}]);
