angular.module('newApp').controller('masrnewCtrl', function($scope) {
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

        $("#appendhered").append('<tr><td class="col-md-2"><label class="input"> <input type="text" name="Number_of_Cases" placeholder="2.1"></label></td><td class="col-md-10"><label class="textarea"><textarea rows="5" ></textarea></label></td></tr>');
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

        $("#appendheree").append('<tr><td class="col-md-2"><label class="input"> <input type="text" name="Number_of_Cases" placeholder="2.1"></label></td><td class="col-md-10"><label class="textarea"><textarea rows="5" ></textarea></label></td></tr>');
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

        $("#appendheref").append('<tr><td class="col-md-2"><label class="input"> <input type="text" name="Number_of_Cases" placeholder="2.1"></label></td><td class="col-md-10"><label class="textarea"><textarea rows="5" ></textarea></label></td></tr>');
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

        var uid = firebase.database().ref().child('cdrmo/masr/').push().key;

        var data = {

            date: datetoday,
            background: $scope.tojsonb(objb),

            ercu: $scope.tojsonc(objc),

            pic: $scope.tojsond(objd),

            atn: $scope.tojsone(obje),
            
            or: $scope.tojsonf(objf),

            preparedBy: $scope.preparedBy,
            signature: localStorage.getItem('sign'),
            submitted: $scope.submitted,
            signature2: localStorage.getItem('sign2'),


        }

        var updates = {};
        updates['cdrmo/masr/' + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {


            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#masrnew"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }


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


});