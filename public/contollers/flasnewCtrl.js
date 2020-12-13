angular.module('newApp').controller('flasnewCtrl', function ($scope) {
    pageSetUp();

    var obj0, obj1, obj2;

    var total1 = 0,
        total2 = 0,
        total3 = 0;
    total4 = 0;
    total5 = 0;
    total6 = 0;
    total7 = 0;
    total8 = 0;
    total9 = 0;
    total10 = 0;
    total11 = 0;
    total12 = 0;
    total13 = 0;
    total14 = 0;
    total15 = 0;
    total16 = 0;
    total17 = 0;
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

    $('#newflas').on('submit', function (e) {

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


            var uid = firebase.database().ref().child('/deped/flas/').push().key;

            var data = {
                date: datetoday,



                "center": $.extend(true,
                    JSON.parse(localStorage.getItem('i0')),
                    JSON.parse(localStorage.getItem('i1')),
                    JSON.parse(localStorage.getItem('i2'))),

                "total1": total1,
                "total2": total2,
                "total3": total3,
                "total4": total4,
                "total5": total5,
                "total6": total6,
                "total7": total7,
                "total8": total8,
                "total9": total9,
                "total10": total10,
                "total11": total11,
                "total12": total12,
                "total13": total13,
                "total14": total14,
                "total15": total15,
                "total16": total16,
                "total17": total17,

                "preparedBy": $scope.preparedBy,
                "signature": localStorage.getItem('sign'),
                "noted": $scope.noted,
                "signature2": localStorage.getItem('sign2'),
                "approvedBy": $scope.approvedBy,
                "signature3": localStorage.getItem('sign3'),





            }

            var updates = {};
            updates['/deped/flas/' + uid] = data;
            firebase.database().ref().update(updates);
            console.log(updates)

            if (updates) {


                $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
                setTimeout(function () {
                    window.location.href = "#/"
                    window.location.href = "#flasnew"
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
        $("#appendhere0").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td> </tr>")


        $("#appendhere1").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class='txt' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class='txt2' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class='txt3' autocomplete='off'/> </label> </td></tr>")

        $("#appendhere2").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='date' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='date' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td></tr>")



        cnt++;


    }

    $scope.removetr = function () {
        $('#appendhere0 tr:last').remove();
        $('#appendhere1 tr:last').remove();
        $('#appendhere2 tr:last').remove();
    }



    function calculateSum() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        // $("#sum").html(sum.toFixed(2));
        total1 = sum.toFixed(2);
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
        // $("#sum2").html(sum.toFixed(2));
        total2 = sum.toFixed(2);
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
        //.toFixed() method will roundoff the final sum to 2 decimal places
        // $("#sum3").html(sum.toFixed(2));
        total3 = sum.toFixed(2);
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
        //.toFixed() method will roundoff the final sum to 2 decimal places
        // $("#sum3").html(sum.toFixed(2));
        total4 = sum.toFixed(2);
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
        // $("#sum3").html(sum.toFixed(2));
        total5 = sum.toFixed(2);
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
        //.toFixed() method will roundoff the final sum to 2 decimal places
        // $("#sum3").html(sum.toFixed(2));
        total6 = sum.toFixed(2);
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
        //.toFixed() method will roundoff the final sum to 2 decimal places
        // $("#sum3").html(sum.toFixed(2));
        total7 = sum.toFixed(2);
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
        // $("#sum3").html(sum.toFixed(2));
        total8 = sum.toFixed(2);
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
        // $("#sum3").html(sum.toFixed(2));
        total9 = sum.toFixed(2);
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
        // $("#sum3").html(sum.toFixed(2));
        total10 = sum.toFixed(2);
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
        // $("#sum3").html(sum.toFixed(2));
        total11 = sum.toFixed(2);
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
        // $("#sum3").html(sum.toFixed(2));
        total12 = sum.toFixed(2);
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
        // $("#sum3").html(sum.toFixed(2));
        total13 = sum.toFixed(2);
        console.log(sum.toFixed(2));
    }

    function calculateSum14() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt14").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        // $("#sum3").html(sum.toFixed(2));
        total14 = sum.toFixed(2);
        console.log(sum.toFixed(2));
    }

    function calculateSum15() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt15").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        // $("#sum3").html(sum.toFixed(2));
        total15 = sum.toFixed(2);
        console.log(sum.toFixed(2));
    }

    function calculateSum16() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt16").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        // $("#sum3").html(sum.toFixed(2));
        total16 = sum.toFixed(2);
        console.log(sum.toFixed(2));
    }
    function calculateSum17() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt17").each(function () {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        // $("#sum3").html(sum.toFixed(2));
        total17 = sum.toFixed(2);
        console.log(sum.toFixed(2));
    }


    $("#table0").on("keyup", ".txt", function () {
        calculateSum();
    });

    $("#table0").on("keyup", ".txt2", function () {
        calculateSum2();
    });

    $("#table0").on("keyup", ".txt3", function () {
        calculateSum3();
    });
    $("#table1").on("keyup", ".txt4", function () {
        calculateSum4();
    });
    $("#table1").on("keyup", ".txt5", function () {
        calculateSum5();
    });
    $("#table1").on("keyup", ".txt6", function () {
        calculateSum6();
    });
    $("#table1").on("keyup", ".txt7", function () {
        calculateSum7();
    });
    $("#table1").on("keyup", ".txt8", function () {
        calculateSum8();
    });
    $("#table1").on("keyup", ".txt9", function () {
        calculateSum9();
    });
    $("#table2").on("keyup", ".txt10", function () {
        calculateSum10();
    });
    $("#table2").on("keyup", ".txt11", function () {
        calculateSum11();
    });
    $("#table2").on("keyup", ".txt12", function () {
        calculateSum12();
    });
    $("#table2").on("keyup", ".txt13", function () {
        calculateSum13();
    });
    $("#table2").on("keyup", ".txt14", function () {
        calculateSum14();
    });
    $("#table2").on("keyup", ".txt15", function () {
        calculateSum15();
    });
    $("#table2").on("keyup", ".txt16", function () {
        calculateSum16();
    });
    $("#table2").on("keyup", ".txt17", function () {
        calculateSum16();
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

        var canvas = document.getElementById("sig-canvas3");
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

        var sigImage = document.getElementById("sig-image3");
        var clearBtn = document.getElementById("sig-clearBtn3");
        var submitBtn = document.getElementById("sig-submitBtn3");
        clearBtn.addEventListener("click", function (e) {
            clearCanvas();

            sigImage.setAttribute("src", "");
        }, false);
        submitBtn.addEventListener("click", function (e) {
            var dataUrl = canvas.toDataURL();

            localStorage.setItem('sign3', dataUrl)
            sigImage.setAttribute("src", dataUrl);
        }, false);

    })();



});