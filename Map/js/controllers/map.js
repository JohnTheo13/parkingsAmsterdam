// JavaScript Document
app.controller("MapCtrl", ["$scope","getData","NgMap", function($scope,getData,NgMap) {
	
	getData.success(function(data){
	$scope.arrAvailable = [];
	$scope.arrNot = [];
      for (var i = 0; i< data.features.length; i++) {
		  if(data.features[i].properties.layers['parking.garage'].data.FreeSpaceShort<1){
          	$scope.arrNot.push(data.features[i]);
		  }else												//split the array to two different depending on the availability
		  {
			 $scope.arrAvailable.push(data.features[i]); 
		  }
      }
	  
	  for (var i = 0; i< $scope.arrAvailable.length; i++){
	  	$scope.arrAvailable[i].iconUrl="././images/green-traffic-light.png";
	  }																		//add the related trafic-light icon as property
	  
	  for (var i = 0; i< $scope.arrNot.length; i++){
	  	$scope.arrNot[i].iconUrl="././images/red-traffic-light.png";
	  }
	  
	  
	  $scope.arrNew = $scope.arrAvailable;
	  
	 for (var i = 0; i< $scope.arrNot.length; i++){			//merge the arrays
	  	$scope.arrNew.push($scope.arrNot[i]); 
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

