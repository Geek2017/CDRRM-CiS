angular.module('newApp').controller('demographicsnewCtrl', function ($scope) {
    pageSetUp();

    var checkbox1 = false, checkbox2 = false, checkbox3 = false, checkbox4 = false, checkbox5 = false, checkbox6 = false,
    checkbox7 = false, checkbox8 = false, checkbox9 = false, checkbox10 = false, checkbox11 = false, checkbox12 = false;

    
    $(function () {
        $("#checkbox1").change(function () {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox1 = true;
            } else {
                checkbox1 = false;
            }
        });
        $("#checkbox2").change(function () {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox2 = true;
            } else {
                checkbox2 = false;
            }
        });
        $("#checkbox3").change(function () {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox3 = true;
            } else {
                checkbox3 = false;
            }
        });
        $("#checkbox4").change(function () {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox4 = true;
            } else {
                checkbox4 = false;
            }
        });
        $("#checkbox5").change(function () {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox5 = true;
            } else {
                checkbox5 = false;
            }
        });
        $("#checkbox6").change(function () {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox6 = true;
            } else {
                checkbox6 = false;
            }
        });
        $("#checkbox7").change(function () {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox7 = true;
            } else {
                checkbox7 = false;
            }
        });
        $("#checkbox8").change(function () {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox8 = true;
            } else {
                checkbox8 = false;
            }
        });
        $("#checkbox9").change(function () {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox9 = true;
            } else {
                checkbox9 = false;
            }
        });
        $("#checkbox10").change(function () {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox10 = true;
            } else {
                checkbox10 = false;
            }
        });
        $("#checkbox11").change(function () {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox11 = true;
            } else {
                checkbox11 = false;
            }
        });
        $("#checkbox12").change(function () {
            if ($(this).is(":checked")) {
                // $("#otherCheckbox").show();
                checkbox12 = true;
                document.getElementById("otherCheckbox").style.display = "block";
                // $("#AddPassport").hide();
            } else {
                $("#otherCheckbox").hide();
                checkbox12 = false;
                // $("#AddPassport").show();
            }
        });
    });

    // if (document.getElementById("checkbox1").checked) {
    //     checkbox1 = true;
    // } else {
    //     checkbox1 = false;
    // }
    // if (document.getElementById("checkbox2").checked) {
    //     checkbox2 = true;
    // } else {
    //     checkbox2 = false;
    // }
    // if (document.getElementById("checkbox3").checked) {
    //     checkbox3 = true;
    // } else {
    //     checkbox3 = false;
    // }
    // if (document.getElementById("checkbox4").checked) {
    //     checkbox4 = true;
    // } else {
    //     checkbox4 = false;
    // }
    // if (document.getElementById("checkbox5").checked) {
    //     checkbox5 = true;
    // } else {
    //     checkbox5 = false;
    // }
    // if (document.getElementById("checkbox6").checked) {
    //     checkbox6 = true;
    // } else {
    //     checkbox6 = false;
    // }
    // if (document.getElementById("checkbox7").checked) {
    //     checkbox7 = true;
    // } else {
    //     checkbox7 = false;
    // }
    // if (document.getElementById("checkbox8").checked) {
    //     checkbox8 = true;
    // } else {
    //     checkbox8 = false;
    // }
    // if (document.getElementById("checkbox9").checked) {
    //     checkbox9 = true;
    // } else {
    //     checkbox9 = false;
    // }
    // if (document.getElementById("checkbox10").checked) {
    //     checkbox10 = true;
    // } else {
    //     checkbox10 = false;
    // }
    // if (document.getElementById("checkbox11").checked) {
    //     checkbox11 = true;
    // } else {
    //     checkbox11 = false;
    // }
    // if (document.getElementById("checkbox12").checked) {
    //     checkbox12 = true;
    // } else {
    //     checkbox12 = false;
    // }

    $('#savedemo').on('submit', function (e) {
        e.preventDefault();



        var uid = firebase.database().ref().child('cho/demographics').push().key;

        var data = {
            families: $('#families').val(),
            individuals: $('#individuals').val(),
            lessthan1: $('#lessthanone').val(),
            oneTofive: $('#oneTofive').val(),
            greaterthansixty: $('#greaterthansixty').val(),
            pwd: $('#pwd').val(),
            women: $('#women').val(),
            pregnant: $('#pregnant').val(),
            lactating: $('#lactating').val(),
            waterSource: $('#waterSource').val(),
            toiletFacility: $('#toiletFacility').val(),
            bathingFacility: $('#bathingFacility').val(),
            hwFacility: $('#hwFacility').val(),
            odPractice: $('#odPractice').val(),
            spaceOD: $('#spaceOD').val(),
            sam: $('#sam').val(),
            mam: $("#mam").val(),
            // consulations: $("#consulations").val(),
            prenatal: $("#prenatal").val(),
            referrals: $("#referrals").val(),
            measles: $("#measles").val(),
            ttORtd: $("#ttORtd").val(),
            opv: $("#opv").val(),
            deworming: $("#deworming").val(),
            dignityKits: $("#dignityKits").val(),
            vitaminA: $("#vitaminA").val(),
            zinc: $("#zinc").val(),
            ferrousSulfate: $("#ferrousSulfate").val(),
            vitSupplementation: $("#vitSupplementation").val(),
            mnp: $("#mnp").val(),
            sf: $("#sf").val(),
            nutritionCounselling: $("#nutritionCounselling").val(),
            others: $("#others").val(),
            waterTesting: $("#waterTesting").val(),
            waterTreatment: $("#waterTreatment").val(),
            waterContainers: $("#waterContainers").val(),
            hygieneKits: $("#hygieneKits").val(),
            washFacilities: $("#washFacilities").val(),
            dislodging: $("#dislodging").val(),
            mosquitoNets: $("#mosquitoNets").val(),
            disinfectantSpraying: $("#disinfectantSpraying").val(),
            pfa: $("#pfa").val(),
            psychosocialProcessing: $("#psychosocialProcessing").val(),
            stressManagement: $("#stressManagement").val(),
            referrals2: $("#referrals2").val(),
            others2: $("#others2").val(),
            checkboxes: {
                checkboxone: checkbox1,
                checkboxtwo: checkbox2,
                checkboxthree: checkbox3,
                checkboxfour: checkbox4,
                checkboxfive: checkbox5,
                checkboxsix: checkbox6,
                checkboxseven: checkbox7,
                checkboxeight: checkbox8,
                checkboxnine: checkbox9,
                checkboxten: checkbox10,
                checkboxeleven: checkbox11,
                checkboxtwelve: checkbox12
            },
            otherCheckbox: $("#otherCheckbox").val(),
            remarks: $("#remarks").val(),
            reported: $("#reported").val(),
            contact: $("#contact").val(),
            date: $("#date").val(),
        }

        var updates = {};
        updates['/cho/demographics/' + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {


            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#demographicsnew"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }


    });

    // $("#checkbox12").change(function(){

    //     //If it was checked
    //     if($(this).prop('checked') == true){
    //         document.getElementById("otherCheckbox").style.display = "block";

    //     }

    //     //If it was unchecked
    //     else {
    //         document.getElementById("otherCheckbox").style.display = "none";
    //     }
    // });



});