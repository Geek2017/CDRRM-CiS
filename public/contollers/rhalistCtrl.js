angular.module('newApp').controller('rhalistCtrl', function($scope, $http, $timeout) {

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


    var acc = document.getElementsByClassName("accordion");
    var i;

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



    firebase.database().ref('/cho/rha/').orderByChild('uid').on("value", function(snapshot) {

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


        }, 100);


    });

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

    $scope.selectUser = function(users) {
        // document.getElementById("sum").innerHTML=users.total;
        // document.getElementById("sum2").innerHTML=users.total2;
        // document.getElementById("sum3").innerHTML=users.total3;
        // console.log( users );
        // console.log( $scope.cfs );

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
        document.getElementById("rhadate").value = users.rhadate;
        document.getElementById("rhatime").value = users.rhatime;
        document.getElementById("datep").value = users.datep;

        $('#myModal2').modal('show');
    };

    $scope.selectUser2 = function(users) {
        // console.log(users);
        $scope.clickedUser = users;
        id = users;

        $('#myModal3').modal('show');
    };

    $scope.selectUser3 = function(users) {
        // console.log(users);
        $scope.clickedUser = users;
        id = users;
        $('#myModal').modal('show');
    };

    $scope.deleteUser = function() {
        var ref = firebase.database().ref("/cho/rha/" + id.key);
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
            window.location.href = "#rhalist"
        }, 1500);
        $('#myModal3').modal('hide');
    };

    $scope.close = function() {
        $('#myModal').modal('hide');
        $('#myModal2').modal('hide');
        $('#myModal3').modal('hide');
    };



    var obj;
    var obj2;
    $scope.tojson = function(obj) {

        var table = $('#convert-table').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table;

    }
    $scope.tojson2 = function(obj2) {

        var table2 = $('#convert-table2').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table2;

    }


    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var datetoday = month + ":" + day + ":" + year;


    var cnt = 0;
    $("#addmeb").on("click", function() {

        $("#appendhereb").append("<tr ><td><label class='input'><input type='text' name='Province' placeholder='Province Name' required></label></td><td><label class='input'><input type='text' name='Municipality/City' placeholder='Municipality/City Name'></label></td><td><label class='input'><input type='number' name='Families' placeholder='Families Count'></label></td><td><label class='input'><input type='number' name='Individuals' placeholder='Individuals Count'></label></td><td><label class='input'><input type='number' name='No.Of.EC' placeholder='No. Of EC'></label></td><td><label class='input'><input type='number' name='No.of.Fam.EC' placeholder='No. of Fam. EC'></label></td><td class='col-md-2'><label class='input col-md-10'><input type='text' name='No.of.Indiv.in.EC' placeholder='No. of Indiv. in EC' class='number' /></label><label class='input col-md-1'><button class='btn btn-danger btn-sm deleteb'>X</button></label></td></tr>");
        cnt++;
        $('table thead th').each(function(i) {

        });

    });

    $("#minmeb").on("click", function() {

        $('#appendhereb tr:last').remove();
        $('table thead th').each(function(i) {

        });

    });


    var cntc = 0;
    $("#addmec").on("click", function() {

        $("#appendherec").append("<tr><td><label class='input'><input type='text' name='Province' placeholder='Province Name' required></label></td><td><label class='input'><input type='text' name='MunicipalityorCity' placeholder='Municipality/City Name'></label></td><td><label class='input'><input type='number' name='Total_Number_of_Deaths' placeholder='Total Number of Deaths Count'></label></td><td><label class='input'><input type='number' name='Admitted' placeholder='Admitted Count'></label></td><td><label class='input'><input type='number' name='Admitted_then_Discharge' placeholder='Admitted then Discharge Count'></label></td><td><label class='input'><input type='number' name='Not_dmitted' placeholder='Not Admitted Count'></label></td><td class='col-md-2'><label class='input col-md-10'><input type='text' name='Total_Number_of_Missing' placeholder='Total Number of Missing Count' class='number' /></label><label class='input col-md-1'><button class='btn btn-danger btn-sm deletec'>X</button></label></td></tr>");
        cntc++;
        $('table thead th').each(function(i) {

        });

    });

    $("#minmec").on("click", function() {

        $('#appendherec tr:last').remove();
        $('table thead th').each(function(i) {

        });

    });


    var cntd = 0;
    $("#addmed").on("click", function() {

        $("#appendhered").append("<tr><td class='col-md-2'><label class='input'><input type='number' name='Number_of_Cases' placeholder='Number of Cases'></label></td><td class='col-md-2'><label class='input'><input type='number' name='Number_of_Days' placeholder='Number of Days'></label></td><td class='col-md-10'><label class='textarea'><textarea rows='2' iname='Remarks' placeholder='Remarks'></textarea></label></td><td class='col-md-1'><button class='btn btn-danger btn-lg deleted'>X</button></td></tr>");
        cntd++;
        $('table thead th').each(function(i) {

        });

    });

    $("#minmed").on("click", function() {

        $('#appendhered tr:last').remove();
        $('table thead th').each(function(i) {

        });

    });

    var cnte = 0;
    $("#addmee").on("click", function() {

        $("#appendheree").append("<tr><td class='col-md-10'><label class='textarea'><textarea rows='5' ></textarea></label></td></tr>");
        cnte++;
        $('table thead th').each(function(i) {

        });

    });

    $("#minmee").on("click", function() {

        $('#appendheree tr:last').remove();
        $('table thead th').each(function(i) {

        });

    });

    var cntf = 0;
    $("#addmef").on("click", function() {

        $("#appendheref").append("<tr><td class='col-md-10'><label class='textarea'><textarea rows='5' ></textarea></label></td></tr>");
        cntf++;
        $('table thead th').each(function(i) {

        });

    });

    $("#minmef").on("click", function() {

        $('#appendheref tr:last').remove();
        $('table thead th').each(function(i) {

        });

    });

    var cntg = 0;
    $("#addmeg").on("click", function() {

        $("#appendhereg").append("<tr><td class='col-md-10'><label class='textarea'><textarea rows='5' ></textarea></label></td></tr>");
        cntg++;
        $('table thead th').each(function(i) {

        });

    });

    $("#minmeg").on("click", function() {

        $('#appendhereg tr:last').remove();
        $('table thead th').each(function(i) {

        });

    });




    var objb;
    $scope.tojsonb = function(objb) {

        var table = $('#table-b').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }

        })
        return table;

    }

    var objc;
    $scope.tojsonc = function(objc) {

        var table = $('#table-c').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }

        })
        return table;

    }

    var objd;
    $scope.tojsond = function(objd) {

        var table = $('#table-d').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }

        })
        return table;

    }

    $('#run').click(function() {
        var table = $('#table-e').tableToJSON({
            extractor: function(cellIndex, $cell) {
                // get text from the span inside table cells;
                // if empty or non-existant, get the cell text
                return $cell.find('input').val() || $cell.text() || $cell.find('textarea').val();
            }
        });
        alert(JSON.stringify(table));
    });

    var obje;
    $scope.tojsone = function(obje) {

        var table = $('#table-e').tableToJSON({
            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.text() || $cell.find('textarea').val();
            }
        });
        return table;
    }

    var objf;
    $scope.tojsonf = function(objf) {

        var table = $('#table-f').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find('textarea').val();
            }

        })
        return table;

    }

    var objg;
    $scope.tojsong = function(objg) {

        var table = $('#table-g').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find('textarea').val();
            }

        })
        return table;

    }

    $('#saverha').on('submit', function(e) {
        e.preventDefault();

        console.log($scope.tojsonb(objb))
        console.log($scope.tojsonc(objc))
        console.log($scope.tojsond(objd))
        console.log($scope.tojsone(obje))
        console.log($scope.tojsonf(objf))
        console.log($scope.tojsong(objg))

        // var uid = firebase.database().ref().child('cho/rha').push().key;

        var data = {
            rhadate: $('#rhadate').val(),
            rhatime: $("#rhatime").val(),
            rhatype: $("#rhatype option:selected").text(),
            rhadetails: $("#rhadetails option:selected").text(),
            rharegion: $("#rharegion").val(),
            rhaprovince: $('#rhaprovince').val(),
            rhamuci: $('#rhamuci').val(),

            moe: $scope.tojsonb(objb),

            hos: $scope.tojsonc(objc),

            statuseds: $scope.tojsond(objd),

            atn: $scope.tojsone(obje),

            ped: $scope.tojsonf(objf),

            recom: $scope.tojsong(objg),


            dhs: $("#dhs option:selected").text(),
            dhr: $('#dhr').val(),
            lhs: $("#lhs option:selected").text(),
            lhr: $('#lhr').val(),
            phs: $("#phs option:selected").text(),
            phr: $('#phr').val(),
            rhcs: $("#rhcs option:selected").text(),
            rhcr: $('#rhcr').val(),
            bhss: $("#bhss option:selected").text(),
            bhsr: $('#bhsr').val(),
            others: $("#others option:selected").text(),
            otherr: $('#otherr').val(),


            communications: $("#communications option:selected").text(),
            communicationr: $('#communicationr').val(),
            eps: $("#eps option:selected").text(),
            epr: $('#epr').val(),
            waters: $("#waters option:selected").text(),
            waterr: $('#waterr').val(),
            rbs: $("#rbs option:selected").text(),
            rbr: $('#rbr').val(),
            others1: $("#others1 option:selected").text(),
            otherr1: $('#otherr1').val(),



            mobile: $('#mobile').val(),
            landline: $('#landline').val(),
            faxno: $('#faxno').val(),
            datep: $('#datep').val(),
            printedn: $('#printedn').val(),
            signature: localStorage.getItem('sign')


        }

        var updates = {};
        updates['/cho/rha/' + id.key] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {
            $('#myModal2').modal('hide');

            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#rhalist"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }


    });

    (function() {
        window.requestAnimFrame = (function(callback) {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimaitonFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        var canvas = document.getElementById("sig-canvas");
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#222222";
        ctx.lineWidth = 4;

        var drawing = false;
        var mousePos = {
            x: 0,
            y: 0
        };
        var lastPos = mousePos;

        canvas.addEventListener("mousedown", function(e) {
            drawing = true;
            lastPos = getMousePos(canvas, e);
        }, false);

        canvas.addEventListener("mouseup", function(e) {
            drawing = false;
        }, false);

        canvas.addEventListener("mousemove", function(e) {
            mousePos = getMousePos(canvas, e);
        }, false);

        // Add touch event support for mobile
        canvas.addEventListener("touchstart", function(e) {

        }, false);

        canvas.addEventListener("touchmove", function(e) {
            var touch = e.touches[0];
            var me = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(me);
        }, false);

        canvas.addEventListener("touchstart", function(e) {
            mousePos = getTouchPos(canvas, e);
            var touch = e.touches[0];
            var me = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(me);
        }, false);

        canvas.addEventListener("touchend", function(e) {
            var me = new MouseEvent("mouseup", {});
            canvas.dispatchEvent(me);
        }, false);

        function getMousePos(canvasDom, mouseEvent) {
            var rect = canvasDom.getBoundingClientRect();
            return {
                x: mouseEvent.clientX - rect.left,
                y: mouseEvent.clientY - rect.top
            }
        }

        function getTouchPos(canvasDom, touchEvent) {
            var rect = canvasDom.getBoundingClientRect();
            return {
                x: touchEvent.touches[0].clientX - rect.left,
                y: touchEvent.touches[0].clientY - rect.top
            }
        }

        function renderCanvas() {
            if (drawing) {
                ctx.moveTo(lastPos.x, lastPos.y);
                ctx.lineTo(mousePos.x, mousePos.y);
                ctx.stroke();
                lastPos = mousePos;
            }
        }

        // Prevent scrolling when touching the canvas
        document.body.addEventListener("touchstart", function(e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
        }, false);
        document.body.addEventListener("touchend", function(e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
        }, false);
        document.body.addEventListener("touchmove", function(e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
        }, false);

        (function drawLoop() {
            requestAnimFrame(drawLoop);
            renderCanvas();
        })();

        function clearCanvas() {
            canvas.width = canvas.width;
        }

        var sigImage = document.getElementById("sig-image");
        var clearBtn = document.getElementById("sig-clearBtn");
        var submitBtn = document.getElementById("sig-submitBtn");
        clearBtn.addEventListener("click", function(e) {
            clearCanvas();
            $('#sig-image').hide();
            $('#sig-canvas').show();
            sigImage.setAttribute("src", "");
        }, false);
        submitBtn.addEventListener("click", function(e) {
            $('#sig-image').show();
            $('#sig-canvas').hide();
            var dataUrl = canvas.toDataURL();

            localStorage.setItem('sign', dataUrl)
            sigImage.setAttribute("src", dataUrl);
        }, false);

    })();
    $('#sig-canvas').hide();
}).filter('startFrom', function() {
    return (input, start) => {
        start = +start; //parse to int
        return input.slice(start);
    }
})