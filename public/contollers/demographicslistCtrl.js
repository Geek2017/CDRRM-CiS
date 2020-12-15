angular.module('newApp').controller('demographicslistCtrl', function($scope, $http, $timeout) {
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];

    $scope.numberOfPages = () => {
        return Math.ceil(
            $scope.data.length / $scope.pageSize
        );
    }

    for (var i = 0; i < 10; i++) {
        $scope.data.push(`Question number ${i}`);
    }

    var acc = document.getElementsByClassName("accordion");
    var i;

    var checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6,
        checkbox7, checkbox8, checkbox9, checkbox10, checkbox11, checkbox12;


    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    pageSetUp();
    var id;

    $(function() {
        $("#editcheckbox1").change(function() {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox1 = true;
            } else {
                checkbox1 = false;
            }
        });
        $("#editcheckbox2").change(function() {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox2 = true;
            } else {
                checkbox2 = false;
            }
        });
        $("#editcheckbox3").change(function() {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox3 = true;
            } else {
                checkbox3 = false;
            }
        });
        $("#editcheckbox4").change(function() {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox4 = true;
            } else {
                checkbox4 = false;
            }
        });
        $("#editcheckbox5").change(function() {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox5 = true;
            } else {
                checkbox5 = false;
            }
        });
        $("#editcheckbox6").change(function() {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox6 = true;
            } else {
                checkbox6 = false;
            }
        });
        $("#editcheckbox7").change(function() {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox7 = true;
            } else {
                checkbox7 = false;
            }
        });
        $("#editcheckbox8").change(function() {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox8 = true;
            } else {
                checkbox8 = false;
            }
        });
        $("#editcheckbox9").change(function() {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox9 = true;
            } else {
                checkbox9 = false;
            }
        });
        $("#editcheckbox10").change(function() {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox10 = true;
            } else {
                checkbox10 = false;
            }
        });
        $("#editcheckbox11").change(function() {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox11 = true;
            } else {
                checkbox11 = false;
            }
        });
        $("#editcheckbox12").change(function() {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox12 = true;
                document.getElementById("editotherCheckbox").style.display = "block";
                // $("#AddPassport").hide();
            } else {
                $("#editotherCheckbox").hide();
                checkbox12 = false;
                // $("#AddPassport").show();
            }
        });
    });




    firebase.database().ref('/cho/demographics/').orderByChild('uid').on("value", function(snapshot) {

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
                    if (datetoday === item.date) {

                        tcol += 1 * item.total;
                    }
                });
                $scope.cfs = returnArr;
                $scope.tcol = tcol;
                console.log(returnArr)
            });
            $('#here').after(' <ul style="margin:0!important;margin-top:4px" class="pagination pagination-sm pull-right"  ><li ><a href="#cflist" rel="0" id="backward"> < </a></li> <li id="nav"></li>   <li><a href="#cflist" rel="0" id="forward"> > </a></li></ul>');
            var rowsShown = localStorage.getItem('pf')

            $("#pfilter").change(function() {

                rowsShown = localStorage.getItem('pf')


                localStorage.setItem('pf', $("#pfilter option:selected").text())

                window.location.href = "#"
                window.location.href = "#roomlistinglist"
            });

            var rowsTotal = $('#data tbody tr').length;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                $('#nav').append('<a href="#roomlistinglist" rel="' + i + '">' + pageNum + '</a>');
            }

            $('#data tbody tr').hide();
            $('#data tbody tr').slice(0, rowsShown).show();
            $('#nav a:first').addClass('active');
            $('#nav a ').bind('click', function() {

                $('#nav a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                localStorage.setItem('curp', currPage)
                var startItem = currPage * rowsShown;
                var endItem = startItem + rowsShown;
                $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                css('display', 'table-row').animate({ opacity: 1 }, 300);
                console.log($(this).attr('rel'))


            });

            $("#backward").click(function() {

                var cp = localStorage.getItem('curp');
                if (cp >= 1) {
                    cp = cp - 1;
                    localStorage.setItem('curp', cp)
                    var startItem = cp * rowsShown;
                    var endItem = startItem + rowsShown;
                    $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                }
            });

            $("#forward").click(function() {

                var tp = $('#data tbody tr').length - 1;

                var cp = localStorage.getItem('curp');
                if (cp < tp) {
                    cp = cp * 1 + 1;
                    localStorage.setItem('curp', cp)
                    var startItem = cp * rowsShown;
                    var endItem = startItem + rowsShown;
                    $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                }
            });

        }, 100);


    });


    $scope.selectUser = function(users) {
        // document.getElementById("sum").innerHTML=users.total;
        // document.getElementById("sum2").innerHTML=users.total2;
        // document.getElementById("sum3").innerHTML=users.total3;
        // console.log( users );
        // console.log( $scope.cfs );

        checkbox1 = users.checkboxes.checkboxone;
        checkbox2 = users.checkboxes.checkboxtwo;
        checkbox3 = users.checkboxes.checkboxthree;
        checkbox4 = users.checkboxes.checkboxfour;
        checkbox5 = users.checkboxes.checkboxfive;
        checkbox6 = users.checkboxes.checkboxsix;
        checkbox7 = users.checkboxes.checkboxseven;
        checkbox8 = users.checkboxes.checkboxeight;
        checkbox9 = users.checkboxes.checkboxnine;
        checkbox10 = users.checkboxes.checkboxten;
        checkbox11 = users.checkboxes.checkboxeleven;
        checkbox12 = users.checkboxes.checkboxtwelve;

        $("#editcheckbox1").attr("checked", users.checkboxes.checkboxone);
        $("#editcheckbox2").attr("checked", users.checkboxes.checkboxtwo);
        $("#editcheckbox3").attr("checked", users.checkboxes.checkboxthree);
        $("#editcheckbox4").attr("checked", users.checkboxes.checkboxfour);
        $("#editcheckbox5").attr("checked", users.checkboxes.checkboxfive);
        $("#editcheckbox6").attr("checked", users.checkboxes.checkboxsix);
        $("#editcheckbox7").attr("checked", users.checkboxes.checkboxseven);
        $("#editcheckbox8").attr("checked", users.checkboxes.checkboxeight);
        $("#editcheckbox9").attr("checked", users.checkboxes.checkboxnine);
        $("#editcheckbox10").attr("checked", users.checkboxes.checkboxten);
        $("#editcheckbox11").attr("checked", users.checkboxes.checkboxeleven);
        $("#editcheckbox12").attr("checked", users.checkboxes.checkboxtwelve);

        document.getElementById("editdate").value = users.date;

        if (users.checkboxes.checkboxtwelve) {
            document.getElementById("editotherCheckbox").style.display = "block";
        }


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
        // console.log(users.rhatype);
        // console.log(users.rhadate);
        // document.getElementById("rhadate").value = users.rhadate;
        // document.getElementById("rhatime").value = users.rhatime;
        // document.getElementById("datep").value = users.datep;

        $('#myModal2').modal('show');
    };

    $scope.printit = function(users) {


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

        $('#myModal3').modal('show');
    };

    $scope.selectUser3 = function(users) {

        $("#checkbox1").attr("checked", users.checkboxes.checkboxone);
        $("#checkbox2").attr("checked", users.checkboxes.checkboxtwo);
        $("#checkbox3").attr("checked", users.checkboxes.checkboxthree);
        $("#checkbox4").attr("checked", users.checkboxes.checkboxfour);
        $("#checkbox5").attr("checked", users.checkboxes.checkboxfive);
        $("#checkbox6").attr("checked", users.checkboxes.checkboxsix);
        $("#checkbox7").attr("checked", users.checkboxes.checkboxseven);
        $("#checkbox8").attr("checked", users.checkboxes.checkboxeight);
        $("#checkbox9").attr("checked", users.checkboxes.checkboxnine);
        $("#checkbox10").attr("checked", users.checkboxes.checkboxten);
        $("#checkbox11").attr("checked", users.checkboxes.checkboxeleven);
        $("#checkbox12").attr("checked", users.checkboxes.checkboxtwelve);

        if (users.checkboxes.checkboxtwelve) {
            document.getElementById("otherCheckbox").style.display = "block";
        }
        // console.log(users);
        $scope.clickedUser = users;
        id = users;
        $('#myModal').modal('show');
    };

    $scope.deleteUser = function() {
        var ref = firebase.database().ref("/cho/demographics/" + id.key);
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
            window.location.href = "#demographicslist"
        }, 1500);
        $('#myModal3').modal('hide');
    };

    $scope.close = function() {
        $('#myModal').modal('hide');
        $('#myModal2').modal('hide');
        $('#myModal3').modal('hide');
    };


    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var datetoday = month + ":" + day + ":" + year;

    $('#savedemo').on('submit', function(e) {
        e.preventDefault();



        // var uid = firebase.database().ref().child('cho/demographics').push().key;

        var data = {
            families: $('#families').val(),
            individuals: $('#individuals').val(),
            lessthan1: $('#lessthanone').val(),
            oneTofive: $('#oneTofive').val(),
            greaterthansixty: $('#greaterthansixty').val(),
            pwd: $('#pwd').val(),
            women: $('#women').val(),
            pregnant: $('#pregnant').val(),
            lactating: $('#lactating').val(),
            waterSource: $('#waterSource').val(),
            toiletFacility: $('#toiletFacility').val(),
            bathingFacility: $('#bathingFacility').val(),
            hwFacility: $('#hwFacility').val(),
            odPractice: $('#odPractice').val(),
            spaceOD: $('#spaceOD').val(),
            sam: $('#sam').val(),
            mam: $("#mam").val(),
            consulations: $("#consulations").val(),
            prenatal: $("#prenatal").val(),
            referrals: $("#referrals").val(),
            measles: $("#measles").val(),
            ttORtd: $("#ttORtd").val(),
            opv: $("#opv").val(),
            deworming: $("#deworming").val(),
            dignityKits: $("#dignityKits").val(),
            vitaminA: $("#vitaminA").val(),
            zinc: $("#zinc").val(),
            ferrousSulfate: $("#ferrousSulfate").val(),
            vitSupplementation: $("#vitSupplementation").val(),
            mnp: $("#mnp").val(),
            sf: $("#sf").val(),
            nutritionCounselling: $("#nutritionCounselling").val(),
            others: $("#others").val(),
            waterTesting: $("#waterTesting").val(),
            waterTreatment: $("#waterTreatment").val(),
            waterContainers: $("#waterContainers").val(),
            hygieneKits: $("#hygieneKits").val(),
            washFacilities: $("#washFacilities").val(),
            dislodging: $("#dislodging").val(),
            mosquitoNets: $("#mosquitoNets").val(),
            disinfectantSpraying: $("#disinfectantSpraying").val(),
            pfa: $("#pfa").val(),
            psychosocialProcessing: $("#psychosocialProcessing").val(),
            stressManagement: $("#stressManagement").val(),
            referrals2: $("#referrals2").val(),
            others2: $("#others2").val(),
            checkboxes: {
                checkboxone: checkbox1,
                checkboxtwo: checkbox2,
                checkboxthree: checkbox3,
                checkboxfour: checkbox4,
                checkboxfive: checkbox5,
                checkboxsix: checkbox6,
                checkboxseven: checkbox7,
                checkboxeight: checkbox8,
                checkboxnine: checkbox9,
                checkboxten: checkbox10,
                checkboxeleven: checkbox11,
                checkboxtwelve: checkbox12
            },
            otherCheckbox: $("#editotherCheckbox").val(),
            remarks: $("#remarks").val(),
            reported: $("#reported").val(),
            contact: $("#contact").val(),
            date: $("#editdate").val(),
        }

        var updates = {};
        updates['/cho/demographics/' + id.key] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {


            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#demographicslist"
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