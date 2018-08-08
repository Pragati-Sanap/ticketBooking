app.controller('paymentCtrl', function ($scope, $http, $state, $stateParams) {

    console.log("paymentCtrl excuted");

    /************Generate Random NO's*************/
    $scope.generateRandomNum = function () {
        $scope.cond = true;

        $scope.sign = "";

        $scope.operators = [{
            sign: "+",
            method: function (a, b) { return a + b; }
        }, {
            sign: "-",
            method: function (a, b) { return a - b; }
        }];

        $scope.answer = "";

        $scope.actAnswer = "";

        while ($scope.cond !== false) {
            $scope.num1 = Math.floor(Math.random() * 100) + 1;
            console.log($scope.num1);
            $scope.num2 = Math.floor(Math.random() * 100) + 1;
            console.log($scope.num2);

            $scope.selectedOperator = Math.floor(Math.random() * $scope.operators.length);

            $scope.opr = $scope.operators[$scope.selectedOperator].sign;
            console.log($scope.opr);



            if ($scope.num1 > $scope.num2) {
                $scope.cond = false;
                $scope.actAnswer = $scope.operators[$scope.selectedOperator].method($scope.num1, $scope.num2)
                console.log($scope.actAnswer);
                return $scope.num1, $scope.num1, $scope.opr, $scope.actAnswer;
            };
        }


    }

    $scope.temp1 = [];
   


    $scope.isSuccess = function (ans) {
        // check to make sure the answer is correct of puzzle

        if ($scope.actAnswer == ans) {
            // alert('Amswer is Correct..!!!');

            // $state.go("success");
            for (i = 0; i < $scope.selected.length; i++) {
                $scope.temp1.push($scope.selected[i]);
            }
            $scope.uTime = new Date();
            var time = new Date($scope.uTime);
            // console.log("updateTime" + $scope.uTime);
            $scope.upadateTime = time.getMinutes();
            console.log("updateTime " + $scope.upadateTime);
            console.log("createdTime " + $scope.createdTime);

            console.log( "time difference : "+ ($scope.upadateTime - $scope.createdTime))
            if ($scope.upadateTime - $scope.createdTime <= 5) {
                $http({
                    method: "PUT",
                    url: "http://localhost:8085/myapi/user/" + $stateParams.userId,
                    data: { 'name': $scope.user.name, 'email': $scope.user.email, 'seats': $scope.user.seats, 'eventDate': $scope.user.eventDate, 'status': "Completed", 'price': $scope.user.price }
                }).then(function mySucces(response) {
                    console.log(response);

                    $state.go('success', { userId: $stateParams.userId });
                });
            } else {
                // alert('Your time is done register again..!!! deleting User');
                 console.log("deleting User");
                    $http({
                        method: "DELETE",
                        url: "http://localhost:8085/myapi/user/" + $stateParams.userId,
                    }).then(function mySuccess(response) {
                        console.log(response);
                        console.log("deleted user Successfully..!!!");
                        // alert("deleted user Successfully..!!!");
                        $state.go('failed');
                    }, function myError(response) {
                        console.log(response);
                    });
                   
            }
        }
        else {
            alert('Payment failed..!!! deleting User!!!');
            $http({
                method: "DELETE",
                url: "http://localhost:8085/myapi/user/" + $stateParams.userId,
            }).then(function mySuccess(response) {
                console.log(response);
                console.log("deleted user Successfully..!!!");
                // alert("deleted user Successfully..!!!");
                $state.go('failed');
            }, function myError(response) {
                console.log(response);
            });
            $state.go("failed");
            // console.log($scope.answer)
        }
    };

    $scope.getTicketData = function () {
        $http({

            method: "GET",
            url: "http://localhost:8085/myapi/user/" + $stateParams.userId

        }).then(function mySuccess(response) {

            $scope.user = response.data.doc;
            $scope.selected = $scope.user.seats;
            $scope.eventDate = $scope.user.eventDate;
            console.log($scope.user);
            console.log($scope.eventDate);
            // console.log($stateParams.userId);

            $scope.ctime = new Date(response.data.doc.createdAt);
            console.log("time : " + response.data.doc.createdAt);
            $scope.createdTime = $scope.ctime.getMinutes();
            // console.log($scope.createdTime);

        }, function myError(response) {

            console.log(response);
        });
    }
});

//5b5ff6db5d00851fb0334e4a