angular.module('newApp').controller('hfrnewCtrl', function($scope) {
    pageSetUp();

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

    $('#savehfr').on('submit', function(e) {
        e.preventDefault();
        console.log($scope.tojsone(obje))
        console.log($scope.tojsonf(objf))


        var uid = firebase.database().ref().child('cho/hfr').push().key;

        var data = {
            hfrdate: $('#hfrdate').val(),
            hfrtime: $("#hfrtime").val(),
            hfrtype: $("#hfrtype").val(),
            hfrdetails: $("#hfrdetails").val(),
            hfrregion: $("#hfrregion").val(),
            hfrprovince: $("#hfrprovince").val(),
            hfrmuci: $("#hfrmuci").val(),
            noOfDeaths: $("#noOfDeaths").val(),
            noOfAdmitted: $("#noOfAdmitted").val(),
            noOfOutPatients: $("#noOfOutPatients").val(),
            noOfMissing: $("#noOfMissing").val(),
            populationDisplace: $("#populationDisplace").val(),
            noOfDisplayFam: $("#noOfDisplayFam").val(),
            noOfDisplayFam2: $("#noOfDisplayFam2").val(),
            publicAvail: $("#publicAvail").val(),
            hospitalsAvail: $("#hospitalsAvail").val(),
            RHUAvail: $("#RHUAvail").val(),
            publicFunc: $("#publicFunc").val(),
            hospitalsFunc: $("#hospitalsFunc").val(),
            RHUFunc: $("#RHUFunc").val(),


            atn: $scope.tojsone(obje),

            assist: $scope.tojsonf(objf),



            mobile: $('#mobile').val(),
            landline: $('#landline').val(),
            faxno: $('#faxno').val(),
            datep: $('#datep').val(),
            printedn: $('#printedn').val(),
            designation: $('#designation').val(),
            printedn2: $('#printedn2').val(),
            signature: localStorage.getItem('sign')


        }

        var updates = {};
        updates['/cho/hfr/' + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {


            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#hfrnew"
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
    $('#sig-image').hide();


});