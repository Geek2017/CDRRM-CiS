angular.module('newApp').controller('rdsnewCtrl', function($scope) {
    pageSetUp();
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

    $('#newrds').on('submit', function(e) {
        $scope.tojson();

        e.preventDefault();

        console.log($scope.tojson(obj))

        var newobj = $scope.tojson(obj);
        // [$scope.tojson(obj)];

        var uid = firebase.database().ref().child('/cswdo/rds/').push().key;
        var orno = $scope.ornum;
        var sector = $scope.sector;
        var disaster = $scope.disaster;
        var placeOccurance = $scope.placeOccurance;

        var from = $scope.from;
        var position = $scope.position;

        var noted = $scope.noted;
        var approved = $scope.approved;



        const [, ...rest] = newobj.reverse();
        const withoutLast = rest.reverse();
        const withoutLast2 = $scope.tojson(obj);
        // console.log(withoutLast)
        var data = {
            date: datetoday,
            disaster: disaster,
            placeOccurance: placeOccurance,
            dateOccurance: $('#dateOccurance').val(),
            from: from,
            position: position,
            noted: noted,
            signature: localStorage.getItem('sign'),
            approved: approved,
            signature2: localStorage.getItem('sign2'),
            relief: withoutLast2,
        }

        var updates = {};
        updates['/cswdo/rds/'  + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {


            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#rdsnew"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });
    var cnt = 0;
    $scope.addtr = function() {
        $("#appendhere").append('<tr class="row_to_clone"><td class="col-md-1"> <label class="input"> <input type="date" name="particulars"  placeholder="" required></label></td><td ><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td></td><td class="col-md-2"><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td class="col-md-2"><label class="input"> <input type="text" name="remarks" placeholder=""></label></td></td><td><label class="input"> <input type="number" name="amount" value="" class="" autocomplete="off" /></label></td><td class="col-md-2"><label class="input"> <input type="text" name="remarks" placeholder=""></label></td><td class="col-md-1"><label class="input"> <input type="text" name="remarks" placeholder=""></label></td></td><td class="col-md-1"><label class="input col-md-10"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td></tr>');
        cnt++;
        $('table thead th').each(function(i) {

        });

    }
    $scope.removetr = function() {

        $('#appendhere tr:last').remove();
        $('table thead th').each(function(i) {

        });
        // calculateSum();
    }

    $("#appendhere").on('click', '.deleteb', function() {
        $(this).closest("tr").remove();
        $('table thead th').each(function(i) {

        });
        // calculateSum();
    });


    // function calculateSum() {
    //     var sum = 0;
    //     //iterate through each textboxes and add the values
    //     $(".txt").each(function() {

    //         //add only if the value is number
    //         if (!isNaN(this.value) && this.value.length != 0) {
    //             sum += parseFloat(this.value);
    //         }

    //     });
    //     //.toFixed() method will roundoff the final sum to 2 decimal places
    //     $("#sum").html(sum.toFixed(2));
    //     console.log(sum.toFixed(2));
    // }

    // $("#convert-table").on("keyup", ".txt", function() {
    //     calculateSum();
    // });

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

    

   
});