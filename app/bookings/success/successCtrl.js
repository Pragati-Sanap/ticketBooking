app.controller('successCtrl', function( $scope, $http,$stateParams){
      
    console.log("successCtrl excuted");
    $scope.getUser=function(){
        $http({
            
            method:"GET",
            url:"http://localhost:8085/myapi/user/"+$stateParams.userId
            
        }).then(function mySuccess(response){
           
            $scope.user=response.data.doc;
            console.log(response);
            console.log($stateParams.userId);
            $scope.seats=$scope.user.seats;
            $scope.ticketId=$scope.user._id;
                          
        },function myError(response){

            console.log(response);
        });
    }

    
});