angular.module('newApp').controller('locnewCtrl', function($scope) {
    pageSetUp();

    // document.getElementById("divison").onchange = function() {myFunction()};


    var ref = firebase.database().ref("/loc/");

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
                municipality: $('#municipality').val(),
                municipalityNo: $('#municipalityNo').val(),
                evacCenter: $('#evacCenter').val(),
                evacCenterNo: $('#evacCenterNo').val(),
                classroomNo: $('#classroomNo').val(),
                familiesNo: $('#familiesNo').val(),
                individualNo: $('#individualNo').val(),
                personnel: $('#personnel').val(),
                residentLearners: $('#residentLearners').val(),
                evacueeLearners: $('#evacueeLearners').val(),
                affectedSchool: $('#affectedSchool').val(),
                affectedLearners: $('#affectedLearners').val(),
                learnerCasualties: $('#learnerCasualties').val(),
                causeOfDeath: $('#causeOfDeath').val(),
                affectedTPNum: $('#affectedTPNum').val(),
                affectedNTPNum: $('#affectedNTPNum').val(),
                totalDamage: $('#totalDamage').val(),
                partialMajorDamage: $('#partialMajorDamage').val(),
                partialMinorDamage: $('#partialMinorDamage').val(),
                TLSNeededNum: $('#TLSNeededNum').val(),
                armchairDamage: $('#armchairDamage').val(),
                tableChairDamage: $('#tableChairDamage').val(),
                LMDamage: $('#LMDamage').val(),
                computerDamage: $('#computerDamage').val(),
                cleanUp: $('#cleanUp').val(),
                PFA: $('#PFA').val()
            })
            .then(function(data) {
                console.log(data.key);
                // ref.child(data.key).update({
                //     key: data.key
                // })
                console.log("Success");

                document.getElementById("municipality").value = "";
                document.getElementById("municipalityNo").value = "";
                document.getElementById("evacCenter").value = "";
                document.getElementById("evacCenterNo").value = "";
                document.getElementById("classroomNo").value = "";
                document.getElementById("familiesNo").value = "";
                document.getElementById("individualNo").value = "";
                document.getElementById("personnel").value = "";
                document.getElementById("residentLearners").value = "";
                document.getElementById("evacueeLearners").value = "";
                document.getElementById("affectedLearners").value = "";
                document.getElementById("affectedSchool").value = "";
                document.getElementById("learnerCasualties").value = "";
                document.getElementById("causeOfDeath").value = "";
                document.getElementById("affectedTPNum").value = "";
                document.getElementById("affectedNTPNum").value = "";
                document.getElementById("totalDamage").value = "";
                document.getElementById("partialMajorDamage").value = "";
                document.getElementById("partialMinorDamage").value = "";
                document.getElementById("TLSNeededNum").value = "";
                document.getElementById("armchairDamage").value = "";
                document.getElementById("tableChairDamage").value = "";
                document.getElementById("LMDamage").value = "";
                document.getElementById("computerDamage").value = "";
                document.getElementById("cleanUp").value = "";
                document.getElementById("PFA").value = "";
                
            });
    });


    

   
});