angular.module('newApp').controller('rnenewCtrl', function($scope) {
    pageSetUp();

    // document.getElementById("divison").onchange = function() {myFunction()};


    var ref = firebase.database().ref("/deped/rne/");

    var municipality = $('#municipality').val();
    var host = $('#host').val();
    var accomodated = $('#accomodated').val();
    var families = $('#families').val();
    var individuals = $('#individuals').val();
    var classrooms = $('#classrooms').val();
    var dateOfEvacuation = $('#dateOfEvacuation').val();
    var dateOfDecampment = $('#dateOfDecampment').val();
    var remarks = $('#remarks').val();

    // var division = $('#division').val()
    // console.log(division);

    
    
    $("#submit").click(function() {
            // console.log(municipality);
            // console.log(host);
            // console.log(accomodated);
            // console.log(families);
            // console.log(individuals);
            // console.log(classrooms);
            // console.log(dateOfEvacuation);
            // console.log(dateOfDecampment);
            // console.log(remarks);
            ref.push({
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
            .then(function(data) {
                console.log(data.key);
                // ref.child(data.key).update({
                //     key: data.key
                // })
                console.log("Success");

                window.location.href = "#rnenew";

                $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Number of Evacuation Centers and other Details Added !</div>');
                setTimeout(function() {
                    $("#notif").hide()
                }, 10000);

                // document.getElementById("municipality").value = "";
                // document.getElementById("municipalityNo").value = "";
                // document.getElementById("evacCenter").value = "";
                // document.getElementById("evacCenterNo").value = "";
                // document.getElementById("classroomNo").value = "";
                // document.getElementById("familiesNo").value = "";
                // document.getElementById("individualNo").value = "";
                // document.getElementById("personnel").value = "";
                // document.getElementById("residentLearners").value = "";
                // document.getElementById("evacueeLearners").value = "";
                // document.getElementById("affectedLearners").value = "";
                // document.getElementById("affectedSchool").value = "";
                // document.getElementById("learnerCasualties").value = "";
                // document.getElementById("causeOfDeath").value = "";
                // document.getElementById("affectedTPNum").value = "";
                // document.getElementById("affectedNTPNum").value = "";
                // document.getElementById("totalDamage").value = "";
                // document.getElementById("partialMajorDamage").value = "";
                // document.getElementById("partialMinorDamage").value = "";
                // document.getElementById("TLSNeededNum").value = "";
                // document.getElementById("armchairDamage").value = "";
                // document.getElementById("tableChairDamage").value = "";
                // document.getElementById("LMDamage").value = "";
                // document.getElementById("computerDamage").value = "";
                // document.getElementById("cleanUp").value = "";
                // document.getElementById("PFA").value = "";
                
            })
            .catch(function(error) {
                console.log("Login Failed!", error.message);
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
                setTimeout(function() {
                    $("#notif").hide()
                }, 10000);

            });
    });


    

   
});