angular.module('newApp').controller('roomlistingnewCtrl', function ($scope) {
    pageSetUp();

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

    var obj0, obj1, obj2;

    $scope.tojson0 = function (obj0) {

        var table0 = $('#table0').tableToJSON({

            extractor: function (cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table0;

    }

    $scope.tojson1 = function (obj1) {

        var table1 = $('#table1').tableToJSON({

            extractor: function (cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table1;

    }

    $scope.tojson2 = function (obj2) {

        var table2 = $('#table2').tableToJSON({

            extractor: function (cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table2;

    }

    const withoutLast0 = $scope.tojson0(obj0);
    const withoutLast1 = $scope.tojson1(obj1);
    const withoutLast2 = $scope.tojson2(obj2);

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var datetoday = month + ":" + day + ":" + year;

    $('#newcf').on('submit', function (e) {

        e.preventDefault($(".step-1").trigger("click"));

        setTimeout(function () {
            console.log('done')
            $scope.tojson0();
            $scope.tojson1();
            $scope.tojson2();

            console.log($scope.tojson0(obj0))
            console.log($scope.tojson1(obj1))
            console.log($scope.tojson2(obj2))

            var evacCenter = $scope.evacCenter;
            var roomNo = $scope.roomNo;
            var teacher = $scope.teacher;
            var cardColor = $scope.cardColor;
            var roomLeader = $scope.roomLeader;


            var uid = firebase.database().ref().child('barangay/roomListing/').push().key;

            var data = {
                date: datetoday,

                "evacCenter": $scope.evacCenter,
                "roomNo": $scope.roomNo,
                "teacher": $scope.teacher,

                "cardColor": $scope.cardColor,
                "roomLeader": $scope.roomLeader,



                "details": $.extend(true,
                    JSON.parse(localStorage.getItem('i0')),
                    JSON.parse(localStorage.getItem('i1')),
                    JSON.parse(localStorage.getItem('i2'))),

                "submmitted_by": $scope.submmitted_by,
                "subPositon": $scope.subPositon,
                "signature": localStorage.getItem('sign'),

                "notedBy": $scope.notedBy,
                "notedPositon": $scope.notedPositon,
                "signature2": localStorage.getItem('sign2')




            }

            var updates = {};
            updates['barangay/roomListing/' + uid] = data;
            firebase.database().ref().update(updates);
            console.log(updates)

            if (updates) {


                $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
                setTimeout(function () {
                    window.location.href = "#/"
                    window.location.href = "#roomlistingnew"
                }, 1500);
            } else {
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
            }


        }, 2000);





    });



    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this).closest('li');

        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
        }
    });

    $('ul.setup-panel li.active a').trigger('click');


    $('.step-2').click(function () {
        $scope.tojson0();

        console.log($scope.tojson0(obj0))

        localStorage.setItem('i0', JSON.stringify($scope.tojson0(obj0)))
        $('ul.setup-panel li:eq(1)').removeClass('disabled');

        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
    });


    $('.step-3').click(function () {
        $scope.tojson1();

        console.log($scope.tojson1(obj1))

        localStorage.setItem('i1', JSON.stringify($scope.tojson1(obj1)))
        $('ul.setup-panel li:eq(2)').removeClass('disabled');

        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
    });


    $('.step-1').click(function () {
        $scope.tojson2();

        console.log($scope.tojson2(obj2))

        localStorage.setItem('i2', JSON.stringify($scope.tojson2(obj2)))
        $('ul.setup-panel li:eq(0)').removeClass('disabled');

        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
    });


    var cnt = 0;
    $scope.addtr = function () {
        $("#appendhere0").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text ' name=' ' placeholder=' '> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td>")


        $("#appendhere1").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text ' name=' ' placeholder=' '> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td></tr>")

        $("#appendhere2").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text ' name=' ' placeholder=' '> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td></tr>")



        cnt++;


    }

    $scope.removetr = function () {
        $('#appendhere0 tr:last').remove();
        $('#appendhere1 tr:last').remove();
        $('#appendhere2 tr:last').remove();
    }






});