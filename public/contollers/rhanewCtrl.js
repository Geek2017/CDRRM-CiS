angular.module('newApp').controller('rhanewCtrl', function($scope) {
    pageSetUp();

    var cnt = 0;
    $("#addme").on("click", function() {

        $("#appendhere").append("<tr ><td><label class='input'><input type='text' name='Province' placeholder='Province Name' required></label></td><td><label class='input'><input type='text' name='Municipality/City' placeholder='Municipality/City Name'></label></td><td><label class='input'><input type='number' name='Families' placeholder='Families Count'></label></td><td><label class='input'><input type='number' name='Individuals' placeholder='Individuals Count'></label></td><td><label class='input'><input type='number' name='No.Of.EC' placeholder='No. Of EC'></label></td><td><label class='input'><input type='number' name='No.of.Fam.EC' placeholder='No. of Fam. EC'></label></td><td class='col-md-2'><label class='input col-md-10'><input type='text' name='No.of.Indiv.in.EC' placeholder='No. of Indiv. in EC' class='number' /></label><label class='input col-md-1'><button class='btn btn-danger btn-sm deleteb'>X</button></label></td></tr>");
        cnt++;
        $('table thead th').each(function(i) {

        });

    });

    $("#minme").on("click", function() {

        $('#appendhere tr:last').remove();
        $('table thead th').each(function(i) {

        });
        // calculateSum();
    });



    var obj;
    $scope.tojson = function(obj) {

        var table = $('#convert-table').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table;

    }

    $('#saverha').on('submit', function(e) {
        e.preventDefault();

        console.log($scope.tojson(obj))

        var uid = firebase.database().ref().child('cho/rha').push().key;

        var data = {
            rhadate: $('#rhadate').val(),
            rhatime: $("#rhatime").val(),
            rhatype: $("#rhatype option:selected").text(),
            rhadetails: $("#type option:selected").text(),
            rharegion: $("#rharegion").val(),
            rhaprovince: $('#rhaprovince').val(),
            rhamuci: $('#rhamuci').val(),

            moe: $scope.tojson(obj)
                // rhaprovinceb: $('#rhaprovinceb').val(),
                // rhamunib: $("#rhamunib").val(),
                // rhafamb: $("#rhafamb").val(),
                // rhaindb: $("#rhaindb").val(),
                // rhaecb: $("#rhaecb").val(),
                // rhafamec: $('#rhafamec').val(),
                // rhaindiecb: $('#rhaindiecb').val(),

            // chprovince: $('#chprovince').val(),
            // hcmc: $("#hcmc").val(),
            // hctnod: $("#hctnod").val(),
            // hca: $("#hca").val(),
            // hcatd: $("#hcatd").val(),
            // hcna: $('#hcna').val(),
            // hctom: $('#hctom').val(),

            // chprovince: $('#chprovince').val(),
            // hcmc: $("#hcmc").val(),
            // hctnod: $("#hctnod").val(),
            // hca: $("#hca").val(),
            // hcatd: $("#hcatd").val(),
            // hcna: $('#hcna').val(),
            // hctom: $('#hctom').val(),

            // dhs: $("#dhs option:selected").text(),
            // dhr: $('#dhr').val(),
            // lhs: $("#lhs option:selected").text(),
            // lhr: $('#lhr').val(),
            // phs: $("#phs option:selected").text(),
            // phr: $('#phr').val(),
            // lhs: $("#lhs option:selected").text(),
            // lhr: $('#lhr').val(),
            // rhcs: $("#rhcs option:selected").text(),
            // rhcr: $('#rhcr').val(),
            // bhss: $("#bhss option:selected").text(),
            // bhsr: $('#bhsr').val(),
            // others: $("#others option:selected").text(),
            // otherr: $('#otherr').val(),

            // communications: $("#communications option:selected").text(),
            // communicationr: $('#communicationr').val(),
            // waters: $("#waters option:selected").text(),
            // waterr: $('#waterr').val(),
            // rbs: $("#rbs option:selected").text(),
            // rbr: $('#rbr').val(),
            // others1: $("#others1 option:selected").text(),
            // otherr1: $('#otherr1').val(),

            // noc: $('#noc').val(),
            // nod: $('#nod').val(),
            // nocdr: $('#nocdr').val(),
            // actionr: $('#actionr').val(),
            // problemr: $('#problemr').val(),
            // recommendationr: $('#recommendationr').val(),

            // mobile: $('#mobile').val(),
            // landline: $('#landline').val(),
            // faxno: $('#faxno').val(),
            // datep: $('#datep').val(),
            // printedn: $('#printedn').val(),
            // signature: localStorage.getItem('sign')


        }

        var updates = {};
        updates['/cho/rha/' + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)


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

        // Set up the UI
        var sigText = document.getElementById("sig-dataUrl");
        var sigImage = document.getElementById("sig-image");
        var clearBtn = document.getElementById("sig-clearBtn");
        var submitBtn = document.getElementById("sig-submitBtn");
        clearBtn.addEventListener("click", function(e) {
            clearCanvas();
            sigText.innerHTML = "Data URL for your signature will go here!";
            sigImage.setAttribute("src", "");
        }, false);
        submitBtn.addEventListener("click", function(e) {
            var dataUrl = canvas.toDataURL();
            sigText.innerHTML = dataUrl;
            sigImage.setAttribute("src", dataUrl);
        }, false);

    })();


});