// JavaScript Document
app.controller("MapCtrl", ["$scope","getData","NgMap", function($scope,getData,NgMap) {
	
	getData.success(function(data){
	var arrAvailable = [];
	var arrNot = [];
      for (var i = 0; i< data.features.length; i++) {
		  if(data.features[i].properties.layers['parking.garage'].data.FreeSpaceShort<1){
          	arrNot.push(data.features[i]);
		  }else												//split the array to two different depending on the availability
		  {
			 arrAvailable.push(data.features[i]); 
		  }
      }
	  
	  for (var i = 0; i< arrAvailable.length; i++){
	  	arrAvailable[i].iconUrl="././images/green-traffic-light.png";
	  }																		//add the related trafic-light icon as property
	  
	  for (var i = 0; i< arrNot.length; i++){
	  	arrNot[i].iconUrl="././images/red-traffic-light.png";
	  }
	  
	  
	  $scope.arrNew = arrAvailable;
	  
	 for (var i = 0; i< arrNot.length; i++){			//merge the arrays
	  	$scope.arrNew.push(arrNot[i]); 
	  }
	});
	
	
	$scope.action = function(a,available,total){
		$scope.total = total;
		$scope.available = available; 				//display function
		}
		
	$scope.vm.shape = {
      coords: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
    };
}]);

