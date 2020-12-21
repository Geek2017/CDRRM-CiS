angular.module('newApp').controller('launlistCtrl', function ($firebaseArray, $scope, $http, $timeout) {

    pageSetUp();

    var grandTotal = 0,
        cost1 = 0,
        cost2 = 0,
        cost3 = 0,
        cost4 = 0,
        // fuelTotal = 0;
        fuel1 = 0,
        fuel2 = 0,
        fuel3 = 0,
        fuel4 = 0,
        fuel5 = 0,
        fuel6 = 0,
        totalFuel = 0,
        totalFuel2 = 0,
        totalFuel3 = 0,
        totalWater = 0,
        totalWater2 = 0,
        totalWater3 = 0,
        totalElectric = 0;
    totalElectric2 = 0;
    totalElectric3 = 0;

    var cnt = 0;
    $("#addmeb").on("click", function () {

        $("#appendhereb").append("<tr><td><label class='input'><input type='input' name='' class='' value='' autocomplete='off' /></label></td><td><label class='input'><input type='input' name='' class='' value='' autocomplete='off' /></label></td><td><label class='input'><input type='number' name='' placeholder='' class=''></label></td><td><label class='input'><input type='number' autocomplete='off' class='' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='txt' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='txt2' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='txt3' /></label></td></tr>");
        cnt++;
        $('table thead th').each(function (i) {

        });

    });

    $("#minmeb").on("click", function () {

        $('#appendhereb tr:last').remove();
        $('table thead th').each(function (i) {

        });

    });


    var cntc = 0;
    $("#addmec").on("click", function () {

        $("#appendherec").append("<tr><td><label class='input'><input type='input' name='' class='' value='' autocomplete='off' /></label></td><td><label class='input'><input type='input' name='' class='' value='' autocomplete='off' /></label></td><td><label class='input'><input type='input' name='' class='' value='' autocomplete='off' /></label></td><td><label class='input'><input type='number' name='' placeholder='' class=''></label></td><td><label class='input'><input type='number' autocomplete='off' class='' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='txt4' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='txt5' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='txt6' /></label></td></tr>");
        cntc++;
        $('table thead th').each(function (i) {

        });

    });

    $("#minmec").on("click", function () {

        $('#appendherec tr:last').remove();
        $('table thead th').each(function (i) {

        });

    });


    var cntd = 0;
    $("#addmed").on("click", function () {

        $("#appendhered").append("<tr><td><label class='input'><input type='input' name='' class='' value='' autocomplete='off' /></label></td><td><label class='input'><input type='input' name='' class='' value='' autocomplete='off' /></label></td><td><label class='input'><input type='number' name='' placeholder='' class=''></label></td><td><label class='input'><input type='number' autocomplete='off' class='' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='txt7' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='txt8' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='txt9' /></label></td></tr>");
        cntd++;
        $('table thead th').each(function (i) {

        });

    });

    $("#minmed").on("click", function () {

        $('#appendhered tr:last').remove();
        $('table thead th').each(function (i) {

        });

    });

    var cnte = 0;
    $("#addmee").on("click", function () {

        $("#appendheree").append("<tr><td><label class='input'><input type='input' name='' class='' value='' autocomplete='off' /></label></td><td><label class='input'><input type='input' name='' class='' value='' autocomplete='off' /></label></td><td><label class='input'><input type='number' name='' placeholder='' class=''></label></td><td><label class='input'><input type='number' autocomplete='off' class='' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='txt10' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='txt11' /></label></td><td><label class='input'><input type='number' autocomplete='off' class='txt12' /></label></td></tr>");
        cnte++;
        $('table thead th').each(function (i) {

        });

    });

    $("#minmee").on("click", function () {

        $('#appendheree tr:last').remove();
        $('table thead th').each(function (i) {

        });

    });

    var cntf = 0;
    $("#addmef").on("click", function () {

        $("#appendheref").append("<tr><td class='col-md-10'><label class='textarea'><textarea rows='5' ></textarea></label></td></tr>");
        cntf++;
        $('table thead th').each(function (i) {

        });

    });

    $("#minmef").on("click", function () {

        $('#appendheref tr:last').remove();
        $('table thead th').each(function (i) {

        });

    });

    var cntg = 0;
    $("#addmeg").on("click", function () {

        $("#appendhereg").append("<tr><td class='col-md-10'><label class='textarea'><textarea rows='5' ></textarea></label></td></tr>");
        cntg++;
        $('table thead th').each(function (i) {

        });

    });

    $("#minmeg").on("click", function () {

        $('#appendhereg tr:last').remove();
        $('table thead th').each(function (i) {

        });

    });




    var objb;
    $scope.tojsonb = function (objb) {

        var table = $('#table-b').tableToJSON({

            extractor: function (cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }

        })
        return table;

    }

    var objc;
    $scope.tojsonc = function (objc) {

        var table = $('#table-c').tableToJSON({

            extractor: function (cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }

        })
        return table;

    }

    var objd;
    $scope.tojsond = function (objd) {

        var table = $('#table-d').tableToJSON({

            extractor: function (cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }

        })
        return table;

    }

    $('#run').click(function () {
        var table = $('#table-e').tableToJSON({
            extractor: function (cellIndex, $cell) {
                // get text from the span inside table cells;
                // if empty or non-existant, get the cell text
                return $cell.find('input').val() || $cell.text() || $cell.find('textarea').val();
            }
        });
        alert(JSON.stringify(table));
    });

    var obje;
    $scope.tojsone = function (obje) {

        var table = $('#table-e').tableToJSON({
            extractor: function (cellIndex, $cell) {
                return $cell.find('input').val() || $cell.text() || $cell.find('textarea').val();
            }
        });
        return table;
    }

    var objf;
    $scope.tojsonf = function (objf) {

        var table = $('#table-f').tableToJSON({

            extractor: function (cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find('textarea').val();
            }

        })
        return table;

    }

    var objg;
    $scope.tojsong = function (objg) {

        var table = $('#table-g').tableToJSON({

            extractor: function (cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find('textarea').val();
            }

        })
        return table;

    }

    const withoutLast0 = $scope.tojsonb(objb);
    const withoutLast1 = $scope.tojsonc(objc);
    const withoutLast2 = $scope.tojsond(objd);
    const withoutLast3 = $scope.tojsone(obje);

    var id;

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

    firebase.database().ref('/cdrmo/laun/').orderByChild('uid').on("value", function (snapshot) {

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

        $timeout(function () {
            $scope.$apply(function () {

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
            $('#here').after(' <ul style="margin:0!important;margin-top:4px" class="pagination pagination-sm pull-right"  ><li ><a href="#launlist" rel="0" id="backward"> < </a></li> <li id="nav"></li>   <li><a href="#cflist" rel="0" id="forward"> > </a></li></ul>');
            var rowsShown = localStorage.getItem('pf')

            $("#pfilter").change(function () {

                rowsShown = localStorage.getItem('pf')


                localStorage.setItem('pf', $("#pfilter option:selected").text())

                window.location.href = "#"
                window.location.href = "#launlist"
            });

            var rowsTotal = $('#data tbody tr').length;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                $('#nav').append('<a href="#launlist" rel="' + i + '">' + pageNum + '</a>');
            }

            $('#data tbody tr').hide();
            $('#data tbody tr').slice(0, rowsShown).show();
            $('#nav a:first').addClass('active');
            $('#nav a ').bind('click', function () {

                $('#nav a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                localStorage.setItem('curp', currPage)
                var startItem = currPage * rowsShown;
                var endItem = startItem + rowsShown;
                $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                css('display', 'table-row').animate({
                    opacity: 1
                }, 300);
                console.log($(this).attr('rel'))


            });

            $("#backward").click(function () {

                var cp = localStorage.getItem('curp');
                if (cp >= 1) {
                    cp = cp - 1;
                    localStorage.setItem('curp', cp)
                    var startItem = cp * rowsShown;
                    var endItem = startItem + rowsShown;
                    $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                    css('display', 'table-row').animate({
                        opacity: 1
                    }, 300);
                }
            });

            $("#forward").click(function () {

                var tp = $('#data tbody tr').length - 1;

                var cp = localStorage.getItem('curp');
                if (cp < tp) {
                    cp = cp * 1 + 1;
                    localStorage.setItem('curp', cp)
                    var startItem = cp * rowsShown;
                    var endItem = startItem + rowsShown;
                    $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                    css('display', 'table-row').animate({
                        opacity: 1
                    }, 300);
                }
            });

        }, 100);


    });


    $scope.selectUser = function (users) {
        document.getElementById("sumFirstFuel").innerHTML = users.totalFuel;
        document.getElementById("sumSecondFuel").innerHTML = users.totalFuel2;
        document.getElementById("sumThirdFuel").innerHTML = users.totalFuel3;
        document.getElementById("sumFirstWater").innerHTML = users.totalWater;
        document.getElementById("sumSecondWater").innerHTML = users.totalWater2;
        document.getElementById("sumThirdWater").innerHTML = users.totalWater3;
        document.getElementById("sumFirstElectric").innerHTML = users.totalElectric;
        document.getElementById("sumSecondElectric").innerHTML = users.totalElectric2;
        document.getElementById("sumThirdElectric").innerHTML = users.totalElectric3;
        // totalFuel = users.totalFuel;
        // totalFuel2 = users.totalFuel2;
        // totalFuel3 = users.totalFuel3;
        // totalWater = users.totalWater;
        // totalWater2 = users.totalWater2;
        // totalWater3 = users.totalWater3;
        // totalElectric = users.totalElectric;
        // totalElectric2 = users.totalElectric2;
        // totalElectric3 = users.totalElectric3;


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


        $('#myModal').modal('show');
    };


    $scope.printit = function (users) {
        // document.getElementById("sum").innerHTML = users.total;
        // document.getElementById("sum2").innerHTML = users.total2;
        // document.getElementById("sum3").innerHTML = users.total3;


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
        setTimeout(function () {
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


    $scope.selectUser2 = function (users) {
        // console.log(users);
        $scope.clickedUser = users;
        id = users;

        $('#myModal2').modal('show');
    };

    $scope.selectUser3 = function (users) {
        // console.log(users);
        $scope.clickedUser = users;
        id = users;
        $('#myModal3').modal('show');
    };

    $scope.updateUser = function () {
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

            .catch(function (error) {
                console.log("Login Failed!", error.message);
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
                setTimeout(function () {
                    $("#notif").hide()
                }, 10000);

            });

        // window.location.href = "#ecdlist";

        $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Updated !</div>');
        setTimeout(function () {
            $("#notif").hide()
        }, 10000);

        $('#myModal').modal('hide');

    };

    $scope.deleteUser = function () {
        var ref = firebase.database().ref("/cho/cnsbd/" + id.key);
        ref.remove()
            .catch(function (error) {
                console.log("Login Failed!", error.message);
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
                setTimeout(function () {
                    $("#notif").hide()
                }, 1500);

            });;

        // $("#notif").show();
        // window.location.href = "#ecdlist";

        $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Deleted !</div>');
        setTimeout(function () {
            window.location.href = "#/"
            window.location.href = "#cnsbdcholist"
        }, 1500);
        $('#myModal2').modal('hide');
    };

    $scope.close = function () {
        $('#myModal').modal('hide');
        $('#myModal2').modal('hide');
        $('#myModal3').modal('hide');
    };

    var obj;
    $scope.tojson = function (obj) {

        var table = $('#convert-table').tableToJSON({

            extractor: function (cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table;

    }

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var datetoday = month + ":" + day + ":" + year;

    $('#savelaun').on('submit', function (e) {

        var overAllFuel = totalFuel + totalFuel2 + totalFuel3;
        var overAllWater = totalWater + totalWater2 + totalWater3;
        var overAllElectric = totalElectric + totalElectric2 + totalElectric3;
        var allTotal = overAllFuel + overAllWater + overAllElectric;
        
        $scope.tojson();

        e.preventDefault();

        console.log($scope.tojson(obj))

        var newobj = $scope.tojson(obj);

        const [, ...rest] = newobj.reverse();
        const withoutLast = rest.reverse();
        console.log(withoutLast)
        var data = {
            "date": $scope.clickedUser.date,
            "totalFuel": totalFuel,
            "totalFuel2": totalFuel2,
            "totalFuel3": totalFuel3,
            "fuelTotal": overAllFuel,
            "waterTotal": overAllWater,
            "totalWater": totalWater,
            "totalWater2": totalWater2,
            "totalWater3": totalWater3,
            "electricTotal": overAllElectric,
            "totalElectric": totalElectric,
            "totalElectric2": totalElectric2,
            "totalElectric3": totalElectric3,
            "overAll": allTotal,

            "fuel_diesel": $scope.tojsonb(objb),
            "fuel_gasoline": $scope.tojsonc(objc),
            "water": $scope.tojsond(objd),
            "electric": $scope.tojsone(obje),
        }

        var updates = {};
        // console.log(id.key);
        updates['/cdrmo/laun/' + id.key] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {
            $('#myModal').modal('hide');

            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function () {
                window.location.href = "#/"
                window.location.href = "#launlist"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });


    var cnt = 0;
    $scope.addtr = function () {
        $("#appendhere").append('<tr class="row_to_clone"> <td class="col-md-6"><label class="input"> <input type="text" placeholder="Description"> </label></td></td><td class="col-md-1"><label class="input"> <input type="text" placeholder="Qty"> </label></td></td><td class="col-md-1"> <label class="input "> <input type="number" class="txt" autocomplete="off" placeholder="0.00"/> </label> </td><td class="col-md-1"><label class="input"> <input type="text" autocomplete="off" placeholder="Qty"> </label></td></td><td class="col-md-1"> <label class="input "> <input type="number" class="txt2" autocomplete="off" placeholder="0.00"/> </label> </td><td class="col-md-1"><label class="input"> <input type="text" placeholder="Qty"> </label></td></td><td class="col-md-1"> <label class="input "> <input type="number" class="txt3" autocomplete="off" placeholder="0.00"/> </label> </td></tr>');
        cnt++;
        $('table thead th').each(function (i) {

        });

    }
    $scope.removetr = function () {

        $('#appendhere tr:last').remove();
        $('table thead th').each(function (i) {

        });
        calculateSum();
        calculateSum2();
        calculateSum3();
    }

    $scope.delAppend = function () {
        console.log("Del")
        $(this).closest("tr").remove();
        $('table thead th').each(function (i) {

        });
        calculateSum();
        calculateSum2();
        calculateSum3();

        $('#myModal').modal('hide');
    };

    $("#appendhere").on('click', '.deleteb', function () {
        $(this).closest("tr").remove();
        $('table thead th').each(function (i) {

        });
        calculateSum();
        calculateSum2();
        calculateSum3();
    });


    function calculateSum() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        fuel1 = sum;
        var fuelTotal = fuel1 + fuel4;
        totalFuel = fuel1 + fuel4;
        //.toFixed() method will roundoff the final sum to 2 decimal places
        // document.getElementById("sumNumber").textContent=sum.toFixed(2);
        $("#sumFirstFuel").html(fuelTotal.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum2() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt2").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        fuel2 = sum;
        var fuelTotal = fuel2 + fuel5;
        totalFuel2 = fuel2 + fuel5;
        $("#sumSecondFuel").html(fuelTotal.toFixed(2));
        $("#grandTotal").html(grandTotal.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum3() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt3").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        fuel3 = sum;
        var fuelTotal = fuel3 + fuel6;
        totalFuel3 = fuel3 + fuel6;
        //.toFixed() method will roundoff the final sum to 2 decimal places
        $("#sumThirdFuel").html(fuelTotal.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum4() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt4").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        fuel4 = sum;
        var fuelTotal = fuel4 + fuel1;
        totalFuel = fuel4 + fuel1;
        //.toFixed() method will roundoff the final sum to 2 decimal places
        $("#sumFirstFuel").html(fuelTotal.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum5() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt5").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        fuel5 = sum;
        var fuelTotal = fuel5 + fuel2;
        totalFuel2 = fuel5 + fuel2;
        $("#sumSecondFuel").html(fuelTotal.toFixed(2));
        $("#grandTotal").html(grandTotal.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum6() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt6").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        fuel6 = sum;
        var fuelTotal = fuel6 + fuel3;
        totalFuel3 = fuel6 + fuel3;
        //.toFixed() method will roundoff the final sum to 2 decimal places
        $("#sumThirdFuel").html(fuelTotal.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum7() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt7").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        totalWater = sum;
        //.toFixed() method will roundoff the final sum to 2 decimal places
        $("#sumFirstWater").html(sum.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum8() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt8").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        cost3 = sum;
        grandTotal = cost1 + cost2 + cost3 + cost4;
        totalWater2 = sum;
        $("#sumSecondWater").html(sum.toFixed(2));
        $("#grandTotal").html(grandTotal.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum9() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt9").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        totalWater3 = sum;
        $("#sumThirdWater").html(sum.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum10() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt10").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        totalElectric = sum;
        $("#sumFirstElectric").html(sum.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum11() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt11").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        totalElectric2 = sum;
        $("#sumSecondElectric").html(sum.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum12() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt12").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        totalElectric3 = sum;
        $("#sumThirdElectric").html(sum.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum13() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt13").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        cost4 = sum;
        grandTotal = cost1 + cost2 + cost3 + cost4;
        $("#sumCost2").html(sum.toFixed(2));
        $("#grandTotal").html(grandTotal.toFixed(2));
        console.log(sum.toFixed(2));
    }

    $("#table-b").on("keyup", ".txt", function () {
        calculateSum();
    });

    $("#table-b").on("keyup", ".txt2", function () {
        calculateSum2();
    });

    $("#table-b").on("keyup", ".txt3", function () {
        calculateSum3();
    });
    $("#table-c").on("keyup", ".txt4", function () {
        calculateSum4();
    });
    $("#table-c").on("keyup", ".txt5", function () {
        calculateSum5();
    });

    $("#table-c").on("keyup", ".txt6", function () {
        calculateSum6();
    });
    $("#table-d").on("keyup", ".txt7", function () {
        calculateSum7();
    });
    $("#table-d").on("keyup", ".txt8", function () {
        calculateSum8();
    });

    $("#table-d").on("keyup", ".txt9", function () {
        calculateSum9();
    });
    $("#table-e").on("keyup", ".txt10", function () {
        calculateSum10();
    });
    $("#table-e").on("keyup", ".txt11", function () {
        calculateSum11();
    });
    $("#table-e").on("keyup", ".txt12", function () {
        calculateSum12();
    });
    $("#table-e").on("keyup", ".txt13", function () {
        calculateSum13();
    });

}).filter('startFrom', function () {
    return (input, start) => {
        start = +start;
        return input.slice(start);
    }
})