
app.controller('homeCtrl', function ($scope, $http, $state) {

    console.log("homeCtrl excuted");

    $scope.onProceed = function (seats, price) {
        console.log("Saving tickets");
        $scope.price = price;
        $scope.seats = seats;
        $http({
            method: "post",
            url: "http://localhost:8085/myapi/ticket/",
            data: { 'seats': $scope.seats, 'price': $scope.price }
        }).then(function mySuccess(response) {
            console.log(response);
            console.log("seats : " + seats);
            $state.go('seats');
        }, function myError(response) {
            console.log(response);
        });
    }
});