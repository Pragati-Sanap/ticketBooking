app.controller('seatsCtrl', function ($scope, $http, $state, $stateParams, $rootScope) {

    console.log("booking seats Controller excuted");

    $tempArraySeats = [];
    $scope.temp1 = [];
    $scope.tempd = [];
    $scope.tempb = [];
    /**************Getting the current Date*********/
    $scope.eventDate = new Date();
    $scope.eventDate = new Date($scope.eventDate);
    console.log($scope.eventDate);

    $scope.changedate = function () {
        console.log("***********changing Date**********");
        for (i = 0; i < $tempArraySeats.length; i++) {
            angular.element(document.getElementById($tempArraySeats[i])).removeClass("selected");
        }
        $scope.DisplayValue = [];
        $tempArraySeats = [];
        $scope.count=$scope.noOfSeats;
        console.log("selected Seats : "+$scope.count);
        console.log("count"+$scope.count);
        // console.log($scope.eventDate);
        // $scope.temp1 = [];

        // console.log("temp1 :"+$scope.temp1);
        // console.log($scope.temp1.length);

        for (i = 0; i < $scope.temp1.length; i++) {
            // console.log(i+ " "+$scope.temp1[i]);
            angular.element(document.getElementById($scope.temp1[i])).removeClass("no-available");

        }
        // for (i = 0; i < $scope.temp1.length; i++) {
        //     angular.element(document.getElementById($scope.tempseat[i])).removeClass("seat no-available");
        // }
        $scope.temp1 = [];
        // console.log("temp1 :"+$scope.temp1);




        $scope.dd = $scope.eventDate.getDate();
        $scope.MM = $scope.eventDate.getMonth() + 1; //January is 0!
        $scope.yyyy = $scope.eventDate.getFullYear();

        if ($scope.dd < 10) {
            $scope.dd = '0' + $scope.dd;
        }
        if ($scope.MM < 10) {
            $scope.MM = '0' + $scope.MM;
        }

        // yyyy-MM-dd
        $scope.formatDate = $scope.yyyy + '-' + $scope.MM + '-' + $scope.dd;
        // console.log($scope.formatDate);
        $scope.eventDate = new Date($scope.formatDate);
        // console.log($scope.eventDate);

        //  $scope.getSeats();
        $http({

            method: "GET",
            url: "http://localhost:8085/myapi/users/"

        }).then(function mySuccess(response) {
            // console.log(response);
            // $scope.seats = response.data.docs[0];
            // console.log($scope.eventDate);
            $scope.eventDate = new Date($scope.eventDate);
            // console.log($scope.eventDate);

            $scope.tickets = response.data.docs;
            // console.log(response.data.docs);


            for (j = 0; j < response.data.docs.length; j++) {

                $scope.tdate = response.data.docs[j];
                // console.log($scope.tdate);
                $scope.tempDate = $scope.tdate.eventDate;
                // console.log($scope.tempDate);
                $scope.tempDate = new Date($scope.tempDate);
                $scope.dd = $scope.tempDate.getDate();
                $scope.MM = $scope.tempDate.getMonth() + 1; //January is 0!
                $scope.yyyy = $scope.tempDate.getFullYear();

                if ($scope.dd < 10) {
                    $scope.dd = '0' + $scope.dd;
                }
                if ($scope.MM < 10) {
                    $scope.MM = '0' + $scope.MM;
                }

                // yyyy-MM-dd
                $scope.tempDate = $scope.yyyy + '-' + $scope.MM + '-' + $scope.dd;
                // console.log($scope.tempDate);
                // console.log($scope.formatDate);

                //  console.log("dateEqual : "+ ($scope.formatDate === $scope.tempDate));
                $scope.dateEqual = ($scope.formatDate === $scope.tempDate);
                if ($scope.dateEqual === true) {
                    $scope.tempd.push($scope.tempDate);


                    $scope.temp = response.data.docs[j];
                    $scope.tempseat = $scope.temp.seats;
                    //  console.log($scope.tempseat);
                    //  $scope.temp1.push($scope.tempseat);
                    // angular.element(document.getElementById($scope.tempseat[i])).addClass("seat no-available");
                    for (i = 0; i < $scope.tempseat.length; i++) {
                        // console.log($scope.tempseat[i]);
                        $scope.temp1.push($scope.tempseat[i]);

                        angular.element(document.getElementById($scope.tempseat[i])).addClass("seat no-available");
                    }
                    // console.log("temp1 :"+$scope.temp1);

                    // console.log($scope.tempd);
                    // console.log("booked seats " + $scope.temp1);

                }
            }
            console.log("booked seats " + $scope.temp1);
           
        }, function myError(response) {

            console.log(response);
        });
    }




    /************Setting the no of Seats*****/
    $scope.options = [1, 2, 3, 5];
    $scope.setvalue = function () {

        console.log("Selected Seats: " + $scope.selectedSeats);
        if ($scope.selectedSeats == 1) {

            $scope.count = 1;
            $scope.noOfSeats=1;
            $scope.price = 300;
            $scope.selectedOption = $scope.options[0];
            // console.log("$scope.selectedOption" + $scope.selectedOption);
            console.log("count" + $scope.count);

            for (i = 0; i < $tempArraySeats.length; i++) {
                angular.element(document.getElementById($tempArraySeats[i])).removeClass("selected");
            }
            $tempArraySeats = [];
            $scope.DisplayValue = [];
            //$scope.count++;
        }
        else if ($scope.selectedSeats == 2) {
            $scope.count = 2;
            $scope.noOfSeats=2;
            $scope.price = 600;
            $scope.selectedOption = $scope.options[1];
            // console.log("$scope.selectedOption" + $scope.selectedOption);
            console.log("count" + $scope.count);

            for (i = 0; i < $tempArraySeats.length; i++) {
                angular.element(document.getElementById($tempArraySeats[i])).removeClass("selected");
            }
            $tempArraySeats = [];
            $scope.DisplayValue = [];
        }

        else if ($scope.selectedSeats == 3) {
            $scope.count = 3;
            $scope.noOfSeats=3;
            $scope.price = 900;
            $scope.selectedOption = $scope.options[2];
            // console.log("$scope.selectedOption" + $scope.selectedOption);
            console.log("count" + $scope.count);

            for (i = 0; i < $tempArraySeats.length; i++) {
                angular.element(document.getElementById($tempArraySeats[i])).removeClass("selected");
            }
            $tempArraySeats = [];
            $scope.DisplayValue = [];
        }

        else if ($scope.selectedSeats == 5) {
            $scope.count = 5;
            $scope.noOfSeats=5;
            $scope.price = 1500;
            $scope.selectedOption = $scope.options[3];
            // console.log("$scope.selectedOption" + $scope.selectedOption);;
            console.log("count" + $scope.count);

            for (i = 0; i < $tempArraySeats.length; i++) {
                angular.element(document.getElementById($tempArraySeats[i])).removeClass("selected");
            }
            $tempArraySeats = [];
            $scope.DisplayValue = [];
        }

    }

    /***************get the no of tickets from homepage**********/
    $scope.getTickets = function () {
        $http({

            method: "GET",
            url: "http://localhost:8085/myapi/tickets/"

        }).then(function mySuccess(response) {
            var length = response.data.docs.length;
            $scope.ticket = response.data.docs[length - 1];
            $scope.selectedSeats = $scope.ticket.seats;
            $scope.setvalue();
        }, function myError(response) {
            console.log(response);
        });
    }



    /*****************Changing the class and check if available or not*******/

    $scope.ids = [];
    $scope.ids = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10",
        "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10",
        "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10",
        "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10",
        "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10"]
    //   console.log($scope.ids);
      $scope.onSelect = function (id) {

        $scope.id = id;
        var pos = $scope.ids.indexOf(id);
        var pos1=pos;
        console.log(pos);
        $scope.class = angular.element(document.getElementById($scope.ids[pos])).hasClass("seat no-available")

        console.log("$scope.class " + $scope.class);
        if ($scope.class == false) {
            console.log("count before: " + $scope.count);
            var x = $scope.count;
            var flag=0;
            $scope.sclass = angular.element(document.getElementById($scope.ids[pos])).hasClass("seat selected")
              console.log("$scope.class " + $scope.class);

            for (j = 0; j <x; j++) {
                $scope.class = angular.element(document.getElementById($scope.ids[pos])).hasClass("seat no-available")
                $scope.sclass = angular.element(document.getElementById($scope.ids[pos])).hasClass("seat selected")
                 console.log("$scope.sclass inside loop " + $scope.sclass);
               
                if ($scope.count > 0 && $scope.class == false && $scope.sclass == false) {

                    angular.element(document.getElementById($scope.ids[pos])).addClass("selected");
                    $tempArraySeats.push($scope.ids[pos]);
                    $scope.DisplayValue = $tempArraySeats;
                    $scope.count--;
                    console.log("selected seats:-" + $scope.DisplayValue);
                    console.log("count before: " + $scope.count);
                    pos = pos + 1;
                
                   // flag++;
                }
                flag++;
                

                console.log(pos);
            }
            console.log(flag +" flag  " +(pos1!=pos)+ " "+$tempArraySeats.length);

            // console.log($scope.count==0 && $scope.class == false &&$scope.sclass == false );
            // if($scope.count==0 && $scope.class == false &&$scope.sclass == false && pos1!=pos)
            //     {
            //         for (i = 0; i < $tempArraySeats.length; i++) {
            //                 angular.element(document.getElementById($tempArraySeats[i])).removeClass("selected");
            //                 $scope.count++;
            //                 $tempArraySeats.splice(i, 1);
            //                 $scope.DisplayValue = $tempArraySeats;  
            //         }
            //         for (j = 0; j <x; j++) {
            //             $scope.class = angular.element(document.getElementById($scope.ids[pos1])).hasClass("seat no-available")
            //             $scope.sclass = angular.element(document.getElementById($scope.ids[pos1])).hasClass("seat selected")
            //              console.log("$scope.sclass inside loop " + $scope.sclass);
                       
            //             if ($scope.count > 0 && $scope.class == false && $scope.sclass == false) {
        
            //                 angular.element(document.getElementById($scope.ids[pos1])).addClass("selected");
            //                 $tempArraySeats.push($scope.ids[pos1]);
            //                 $scope.DisplayValue = $tempArraySeats;
            //                 $scope.count--;
            //                 console.log("selected seats:-" + $scope.DisplayValue);
            //                 console.log("count before: " + $scope.count);
            //                 pos1 = pos1 + 1;
            //             }
                        
        
            //             console.log(pos1);
            //         }
            //     }
            if ($scope.count >= 0 && $scope.sclass == true) {

                for (i = 0; i < $tempArraySeats.length; i++) {
                    console.log($scope.ids[pos]);
                    if ($scope.ids[pos] == $tempArraySeats[i]) {
                        angular.element(document.getElementById(id)).removeClass("selected");
                        $scope.count++;
                        $tempArraySeats.splice(i, 1);
                        $scope.DisplayValue = $tempArraySeats;

                    }
                }
            }
        } else {
            alert("Select another seat..!!");
        }


       

        console.log("reserved seats" + $tempArraySeats);
        console.log("remaining seats to book " + $scope.count);
        $scope.seats = $scope.DisplayValue;


    }


    /****************Save ticket seats and save user details***********/
    $scope.saveTicketDetails = function (user) {

        console.log(user);
        $scope.user = user;
        console.log("Saving ticketDetails");
        $http({
            method: "POST",
            url: "http://localhost:8085/myapi/user/",
            data: { 'name': $scope.user.name, 'email': $scope.user.email, 'seats': $scope.seats, 'eventDate': $scope.eventDate, 'status': "Processing", 'price': $scope.price }
            //  data:{'name':$scope.name,'email':$scope.email,'seats':$scope.seats,'price':$scope.price}

        }).then(function mySuccess(response) {
            console.log(response);
            console.log(user);
            console.log(response.data.docs);
            $state.go('payment', { userId: response.data.docs._id });
            console.log($scope.user.name);
        }, function myError(response) {
            console.log(response);
        });
    }
});





    /***************Get not available seats*******************/

    // $scope.getSeats = function () {
    //     $http({

    //         method: "GET",
    //         url: "http://localhost:8085/myapi/users/"

    //     }).then(function mySuccess(response) {
    //         // console.log(response);
    //         // $scope.seats = response.data.docs[0];
    //         $scope.tickets = response.data.docs;
    //         console.log($scope.tickets);
    //         for (j = 0; j < response.data.docs.length; j++) {
    //             $scope.tdate = response.data.docs[j];
    //             console.log($scope.tdate );               
    //             // eventDate
    //             $scope.tempDate = $scope.tdate.eventDate;
    //             console.log($scope.tempDate);
    //             $scope.tempd.push($scope.tempDate);
    //         // $scope.tickets.eventDates[] = $scope.tickets[];

    //         }
    //        console.log($scope.tempd);


    //         for (j = 0; j < response.data.docs.length; j++) {
    //             $scope.temp = response.data.docs[j];
    //             $scope.tempseat = $scope.temp.seats;
    //             console.log($scope.tempseat);
    //             $scope.temp1.push($scope.tempseat);
    //             // angular.element(document.getElementById($scope.tempseat[i])).addClass("seat no-available");
    //           for (i = 0; i < $scope.tempseat.length; i++) {
    //                 // console.log($scope.tempseat[i]);
    //                 angular.element(document.getElementById($scope.tempseat[i])).addClass("seat no-available");
    //             }

    //         }
    //         console.log("booked seats " + $scope.temp1);

    //     }, function myError(response) {

    //         console.log(response);
    //     });
    // }


 // // console.log($scope.id);
        // $scope.class = angular.element(document.getElementById($scope.id)).hasClass("seat no-available")
        // if ($scope.class == false) {
        //     $scope.class = angular.element(document.getElementById($scope.id)).hasClass("selected")
        //     if ($scope.count > 0 && $scope.class == false) {
        //         angular.element(document.getElementById($scope.id)).addClass("selected");
        //         $tempArraySeats.push($scope.id);
        //         $scope.DisplayValue = $tempArraySeats;
        //         $scope.count--;
        //         // console.log("selected seats:-" + $scope.DisplayValue);
        //     }
        //     else {
        //         for (i = 0; i < $tempArraySeats.length; i++) {
        //             if (id == $tempArraySeats[i]) {
        //                 angular.element(document.getElementById(id)).removeClass("selected");
        //                 $scope.count++;
        //                 $tempArraySeats.splice(i, 1);
        //             }
        //         }
        //     }
        // } else {
        //     alert("Select another seat..!!");
        // }