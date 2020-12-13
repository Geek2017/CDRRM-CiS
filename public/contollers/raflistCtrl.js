angular.module('newApp').controller('raflistCtrl', function($firebaseArray, $scope, $http, $timeout) {

    pageSetUp();

    var id;

    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.data = [];

    $scope.numberOfPages = () => {
        return Math.ceil(
            $scope.data.length / $scope.pageSize
        );
    }

    for (var i = 0; i < 10; i++) {
        $scope.data.push(`Question number ${i}`);
    }

    firebase.database().ref('/barangay/raf/').orderByChild('uid').on("value", function(snapshot) {

        console.log(snapshot.val())
        if (!localStorage.getItem('pf')) {
            if (localStorage.getItem('pf') <= 10) {
                localStorage.setItem('pf', 10)
            }
        }

        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        const datetoday = month + ":" + day + ":" + year;
        // '10:18:2020';
        // month + ":" + day + ":" + year;

        $timeout(function() {
            $scope.$apply(function() {

                var tcol = 0;
                let returnArr = [];
                snapshot.forEach(childSnapshot => {
                    let item = childSnapshot.val();
                    item.key = childSnapshot.key;
                    returnArr.push(item);
                });
                $scope.cfs = returnArr;

                console.log(returnArr)
            });
            $('#here').after(' <ul style="margin:0!important;margin-top:4px" class="pagination pagination-sm pull-right"  ><li ><a href="#cflist" rel="0" id="backward"> < </a></li> <li id="nav"></li>   <li><a href="#cflist" rel="0" id="forward"> > </a></li></ul>');
            var rowsShown = localStorage.getItem('pf')

            $("#pfilter").change(function() {

                rowsShown = localStorage.getItem('pf')


                localStorage.setItem('pf', $("#pfilter option:selected").text())

                window.location.href = "#"
                window.location.href = "#raflist"
            });



        });



    });


    $scope.selectUser = function(users) {

        for (let index = 0; index < $scope.cfs.length; index++) {
            // console.log($scope.cfs[index].key)
            // console.log(users.key)
            if (users.key == $scope.cfs[index].key) {
                // console.log($scope.cfs[index])
                $scope.usersClicked = $scope.cfs[index];
                // console.log($scope.usersClicked.needs)
            }

        }


        $scope.clickedUser = users;
        id = users;
        // document.getElementById("editDateOfDecampment").value = users.dateOfDecampment;
        // document.getElementById("editDateOfEvacuation").value = users.dateOfEvacuation;

        console.log($scope.clickedUser)

        $scope.fullname = $scope.clickedUser.fullname
        $scope.sex = $scope.clickedUser.sex
        $scope.status = $scope.clickedUser.status
        $scope.dob = new Date($scope.clickedUser.dob)
        $scope.age = $scope.clickedUser.age

        $scope.cdi = $scope.clickedUser.cdi
        $scope.dpr = $scope.clickedUser.dpr
        $scope.dnt = new Date($scope.clickedUser.dnt)
        $scope.npr = $scope.clickedUser.npr
        $scope.address = $scope.clickedUser.address

        $('#myModal').modal('show');
    };

    $scope.printit = function(users) {
        document.getElementById("sum").innerHTML = users.total;
        document.getElementById("sum2").innerHTML = users.total2;
        document.getElementById("sum3").innerHTML = users.total3;


        for (let index = 0; index < $scope.cfs.length; index++) {
            // console.log($scope.cfs[index].key)
            // console.log(users.key)
            if (users.key == $scope.cfs[index].key) {
                // console.log($scope.cfs[index])
                $scope.usersClicked = $scope.cfs[index];
                // console.log($scope.usersClicked.needs)
            }

        }


        $scope.clickedUser = users;
        id = users;
        // document.getElementById("editDateOfDecampment").value = users.dateOfDecampment;
        // document.getElementById("editDateOfEvacuation").value = users.dateOfEvacuation;

        console.log($scope.clickedUser.operationfor)


        $('#printit').modal('show');


        setTimeout(function() {
            // document.getElementById("btnPrint").onclick = function() {
            printElement(document.getElementById("printThis"));

            var modThis = document.querySelector("#printSection .modifyMe");
            modThis.appendChild(document.createTextNode(""));

            window.print();



            function printElement(elem) {


                var domClone = elem.cloneNode(true);

                var $printSection = document.getElementById("printSection");

                if (!$printSection) {
                    var $printSection = document.createElement("div");
                    $printSection.id = "printSection";
                    document.body.appendChild($printSection);
                }

                $printSection.innerHTML = "";

                $printSection.appendChild(domClone);

                $('#printit').modal('hide');

            }


        }, 100);

    };

    $scope.selectUser2 = function(users) {
        // console.log(users);
        $scope.clickedUser = users;
        id = users;

        $('#myModal2').modal('show');
    };

    $scope.selectUser3 = function(users) {
        // console.log(users);
        $scope.clickedUser = users;
        id = users;
        $('#myModal3').modal('show');
    };

    $scope.updateUser = function() {
        var ref2 = firebase.database().ref("/cho/rne/" + id.$id);
        ref2.update({
            schoolID: $('#schoolID').val(),
            school: $('#school').val(),
            region: $('#region').val(),
            division: $('#division').val(),
            district: $('#district').val(),
            municipality: $('#municipality').val(),
            enrollment: $('#enrollment').val(),
            totalSchool: $('#totalSchool').val(),
            schoolWithInfraDamage: $('#schoolWithInfraDamage').val(),
            totalDamageClassroom: $('#totalDamageClassroom').val(),
            partialDamageClassMajor: $('#partialDamageClassMajor').val(),
            partialDamageClassMinor: $('#partialDamageClassMinor').val(),
            temporaryLearning: $('#temporaryLearning').val(),
            deceasedPersonnel: $('#deceasedPersonnel').val(),
            injuredPersonnel: $('#injuredPersonnel').val(),
            missingPersonnel: $('#missingPersonnel').val(),
            displacedPersonnel: $('#displacedPersonnel').val(),
            totalEvacSchool: $('#totalEvacSchool').val(),
            ECLasted: $('#ECLasted').val(),
            totalSchoolReport: $('#totalSchoolReport').val(),
            schoolWithNonInfraDamage: $('#schoolWithNonInfraDamage').val(),
            damagedSchoolFurnitures: $('#damagedSchoolFurnitures').val(),
            damagedLearningMaterials: $('#damagedLearningMaterials').val(),
            damagedComputerEquipment: $('#damagedComputerEquipment').val()
        })

        .catch(function(error) {
            console.log("Login Failed!", error.message);
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
            setTimeout(function() {
                $("#notif").hide()
            }, 10000);

        });

        // window.location.href = "#ecdlist";

        $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Updated !</div>');
        setTimeout(function() {
            $("#notif").hide()
        }, 10000);

        $('#myModal').modal('hide');

    };

    $scope.deleteUser = function() {
        var ref = firebase.database().ref("/deped/cnsbd/" + id.key);
        ref.remove()
            .catch(function(error) {
                console.log("Login Failed!", error.message);
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
                setTimeout(function() {
                    $("#notif").hide()
                }, 1500);

            });;

        // $("#notif").show();
        // window.location.href = "#ecdlist";

        $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Deleted !</div>');
        setTimeout(function() {
            window.location.href = "#/"
            window.location.href = "#cnsbdlist"
        }, 1500);
        $('#myModal2').modal('hide');
    };



    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var datetoday = month + ":" + day + ":" + year;

    $('#newcf').on('submit', function(e) {
        $scope.tojson();

        e.preventDefault();

        var data = {
            date: datetoday,
            sector: $scope.clickedUser.operation,
            leadAgency: $scope.clickedUser.leadAgency,
            operation: $scope.clickedUser.operation,
            operationfor: $scope.clickedUser.operationfor,

            pban1: $scope.clickedUser.pban1,
            pban1d: $scope.clickedUser.pban1d,

            pban2: $scope.clickedUser.pban2,
            pban2d: $scope.clickedUser.pban2d,

            sb1: $scope.clickedUser.sb1,
            sb1d: $scope.clickedUser.sb1d,
            needs: withoutLast,
            total: $('#sum').text(),
            total2: $('#sum2').text(),
            total3: $('#sum3').text()
        }

        var updates = {};
        // console.log(id.key);
        updates['/barangay/raf/' + id.key] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {
            $('#myModal').modal('hide');

            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#raflist"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });


}).filter('startFrom', function() {
    return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    }
})