angular.module('newApp').controller('launnewCtrl', function ($scope) {
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

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var datetoday = month + ":" + day + ":" + year;

    $('#savelaun').on('submit', function (e) {
        e.preventDefault();

        var overAllFuel = totalFuel + totalFuel2 + totalFuel3;
        var overAllWater = totalWater + totalWater2 + totalWater3;
        var overAllElectric = totalElectric + totalElectric2 + totalElectric3;
        var allTotal = overAllFuel + overAllWater + overAllElectric;

        console.log($scope.tojsonb(objb))
        console.log($scope.tojsonc(objc))
        console.log($scope.tojsond(objd))
        console.log($scope.tojsone(obje))
        // console.log($scope.tojsonf(objf))
        // console.log($scope.tojsong(objg))

        setTimeout(function () {
            console.log('done')
            $scope.tojsonb();
            $scope.tojsonc();
            $scope.tojsond();
            $scope.tojsone();

            // console.log(withoutLast0)
            // console.log(withoutLast1)
            // console.log(withoutLast2)
            // console.log(withoutLast3)


            var uid = firebase.database().ref().child('cdrmo/laun/').push().key;

            var data = {
                "date": datetoday,
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
            updates['cdrmo/laun/' + uid] = data;
            firebase.database().ref().update(updates);
            console.log(updates)

            if (updates) {


                $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
                setTimeout(function () {
                    window.location.href = "#/"
                    window.location.href = "#launnew"
                }, 1500);
            } else {
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
            }


        }, 2000);



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