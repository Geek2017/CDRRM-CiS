angular.module('newApp').controller('frlistCtrl', function($firebaseArray, $scope, $http, $timeout) {

    pageSetUp();


    var cnt = 0;
    $("#addmeb").on("click", function() {

        $("#appendhereb").append("<tr><td class='col-md-10'><label class='textarea'><textarea rows='5' ></textarea></label></td></tr>");
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

        $("#appendherec").append('<tr><td class="col-md-2"><label class="input"> <input type="text" name="Number_of_Cases" placeholder="2.1"></label></td><td class="col-md-10"><label class="textarea"><textarea rows="5" ></textarea></label></td></tr>');
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

        $("#appendhered").append("<tr><td class='col-md-10'><label class='textarea'><textarea rows='5' ></textarea></label></td></tr>");
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
                return $cell.find('input').val() || $cell.find('textarea').val() || $cell.find("#type option:selected").text();
            }

        })
        return table;

    }

    var objc;
    $scope.tojsonc = function(objc) {

        var table = $('#table-c').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find('textarea').val() || $cell.find("#type option:selected").text();
            }

        })
        return table;

    }

    var objd;
    $scope.tojsond = function(objd) {

        var table = $('#table-d').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find('textarea').val() || $cell.find("#type option:selected").text();
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

    firebase.database().ref('/cdrmo/fr/').orderByChild('uid').on("value", function(snapshot) {

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
                window.location.href = "#frlist"
            });

            var rowsTotal = $('#data tbody tr').length;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                $('#nav').append('<a href="#idrlist" rel="' + i + '">' + pageNum + '</a>');
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

        console.log($scope.clickedUser)


        $('#myModal').modal('show');
    };


    $scope.printit = function(users) {
        // document.getElementById("sum").innerHTML = users.total;
        // document.getElementById("sum2").innerHTML = users.total2;
        // document.getElementById("sum3").innerHTML = users.total3;
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        var hr = dateObj.getHours();
        // var hr = (hr + 24 - 2) % 24;
        $scope.mid = 'am';
        if (hr == 0) { //At 00 hours we need to show 12 am
            hr = 12;
        } else if (hr > 12) {
            hr = hr % 12;
            $scope.mid = 'pm';
        }
        var mins = dateObj.getMinutes();
        var time = dateObj.getTime();

        $scope.datetoday = month + "/" + day + "/" + year;
        $scope.time = hr;
        $scope.time2 = time;


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
        var ref = firebase.database().ref("/cho/cnsbd/" + id.key);
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
            window.location.href = "#cnsbdcholist"
        }, 1500);
        $('#myModal2').modal('hide');
    };

    $scope.close = function() {
        $('#myModal').modal('hide');
        $('#myModal2').modal('hide');
        $('#myModal3').modal('hide');
    };

    var obj;
    $scope.tojson = function(obj) {

        var table = $('#convert-table').tableToJSON({

            extractor: function(cellIndex, $cell) {
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

    $('#saverha').on('submit', function(e) {
        e.preventDefault();

        console.log($scope.tojsonb(objb))
        console.log($scope.tojsonc(objc))
        console.log($scope.tojsond(objd))
        console.log($scope.tojsone(obje))
        console.log($scope.tojsonf(objf))
        console.log($scope.tojsong(objg))

        // var uid = firebase.database().ref().child('cdrmo/fr/').push().key;

        var data = {

            date: $scope.clickedUser.date,
            background: $scope.tojsonb(objb),

            ercu: $scope.tojsonc(objc),

            pic: $scope.tojsond(objd),

            or: $scope.tojsone(obje),
            
            sr: $scope.tojsonf(objf),

            preparedBy: $scope.clickedUser.preparedBy,
            signature: localStorage.getItem('sign'),
            approved: $scope.clickedUser.approved,
            signature2: localStorage.getItem('sign2'),


        }

        var updates = {};
        // console.log(id.key);
        updates['/cdrmo/idr/' + id.key] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {
            $('#myModal').modal('hide');

            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#frlist"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });


    var cnt = 0;
    $scope.addtr = function() {
        $("#appendhere").append('<tr class="row_to_clone"> <td class="col-md-6"><label class="input"> <input type="text" placeholder="Description"> </label></td></td><td class="col-md-1"><label class="input"> <input type="text" placeholder="Qty"> </label></td></td><td class="col-md-1"> <label class="input "> <input type="number" class="txt" autocomplete="off" placeholder="0.00"/> </label> </td><td class="col-md-1"><label class="input"> <input type="text" autocomplete="off" placeholder="Qty"> </label></td></td><td class="col-md-1"> <label class="input "> <input type="number" class="txt2" autocomplete="off" placeholder="0.00"/> </label> </td><td class="col-md-1"><label class="input"> <input type="text" placeholder="Qty"> </label></td></td><td class="col-md-1"> <label class="input "> <input type="number" class="txt3" autocomplete="off" placeholder="0.00"/> </label> </td></tr>');
        cnt++;
        $('table thead th').each(function(i) {

        });

    }
    $scope.removetr = function() {

        $('#appendhere tr:last').remove();
        $('table thead th').each(function(i) {

        });
        calculateSum();
        calculateSum2();
        calculateSum3();
    }

    $scope.delAppend = function() {
        console.log("Del")
        $(this).closest("tr").remove();
        $('table thead th').each(function(i) {

        });
        calculateSum();
        calculateSum2();
        calculateSum3();

        $('#myModal').modal('hide');
    };

    $("#appendhere").on('click', '.deleteb', function() {
        $(this).closest("tr").remove();
        $('table thead th').each(function(i) {

        });
        calculateSum();
        calculateSum2();
        calculateSum3();
    });


    function calculateSum() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt").each(function() {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        $("#sum").html(sum.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum2() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt2").each(function() {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        $("#sum2").html(sum.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum3() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt3").each(function() {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        $("#sum3").html(sum.toFixed(2));
        console.log(sum.toFixed(2));
    }

    $("#convert-table").on("keyup", ".txt", function() {
        calculateSum();
    });

    $("#convert-table").on("keyup", ".txt2", function() {
        calculateSum2();
    });

    $("#convert-table").on("keyup", ".txt3", function() {
        calculateSum3();
    });



    
    (function () {
        window.requestAnimFrame = (function (callback) {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimaitonFrame ||
                function (callback) {
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

        canvas.addEventListener("mousedown", function (e) {
            drawing = true;
            lastPos = getMousePos(canvas, e);
        }, false);

        canvas.addEventListener("mouseup", function (e) {
            drawing = false;
        }, false);

        canvas.addEventListener("mousemove", function (e) {
            mousePos = getMousePos(canvas, e);
        }, false);

        // Add touch event support for mobile
        canvas.addEventListener("touchstart", function (e) {

        }, false);

        canvas.addEventListener("touchmove", function (e) {
            var touch = e.touches[0];
            var me = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(me);
        }, false);

        canvas.addEventListener("touchstart", function (e) {
            mousePos = getTouchPos(canvas, e);
            var touch = e.touches[0];
            var me = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(me);
        }, false);

        canvas.addEventListener("touchend", function (e) {
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
        document.body.addEventListener("touchstart", function (e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
        }, false);
        document.body.addEventListener("touchend", function (e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
        }, false);
        document.body.addEventListener("touchmove", function (e) {
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

        // Set up the UI

        var sigImage = document.getElementById("sig-image");
        var clearBtn = document.getElementById("sig-clearBtn");
        var submitBtn = document.getElementById("sig-submitBtn");
        clearBtn.addEventListener("click", function (e) {
            clearCanvas();

            sigImage.setAttribute("src", "");
        }, false);
        submitBtn.addEventListener("click", function (e) {
            var dataUrl = canvas.toDataURL();

            localStorage.setItem('sign', dataUrl)
            sigImage.setAttribute("src", dataUrl);
        }, false);

    })();

    (function () {
        window.requestAnimFrame = (function (callback) {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimaitonFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        var canvas = document.getElementById("sig-canvas2");
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#222222";
        ctx.lineWidth = 4;

        var drawing = false;
        var mousePos = {
            x: 0,
            y: 0
        };
        var lastPos = mousePos;

        canvas.addEventListener("mousedown", function (e) {
            drawing = true;
            lastPos = getMousePos(canvas, e);
        }, false);

        canvas.addEventListener("mouseup", function (e) {
            drawing = false;
        }, false);

        canvas.addEventListener("mousemove", function (e) {
            mousePos = getMousePos(canvas, e);
        }, false);

        // Add touch event support for mobile
        canvas.addEventListener("touchstart", function (e) {

        }, false);

        canvas.addEventListener("touchmove", function (e) {
            var touch = e.touches[0];
            var me = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(me);
        }, false);

        canvas.addEventListener("touchstart", function (e) {
            mousePos = getTouchPos(canvas, e);
            var touch = e.touches[0];
            var me = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(me);
        }, false);

        canvas.addEventListener("touchend", function (e) {
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
        document.body.addEventListener("touchstart", function (e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
        }, false);
        document.body.addEventListener("touchend", function (e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
        }, false);
        document.body.addEventListener("touchmove", function (e) {
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

        // Set up the UI

        var sigImage = document.getElementById("sig-image2");
        var clearBtn = document.getElementById("sig-clearBtn2");
        var submitBtn = document.getElementById("sig-submitBtn2");
        clearBtn.addEventListener("click", function (e) {
            clearCanvas();

            sigImage.setAttribute("src", "");
        }, false);
        submitBtn.addEventListener("click", function (e) {
            var dataUrl = canvas.toDataURL();

            localStorage.setItem('sign2', dataUrl)
            sigImage.setAttribute("src", dataUrl);
        }, false);

    })();


}).filter('startFrom', function() {
    return (input, start) => {
        start = +start;
        return input.slice(start);
    }
})