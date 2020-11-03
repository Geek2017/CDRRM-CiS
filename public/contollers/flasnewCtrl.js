angular.module('newApp').controller('flasnewCtrl', function($scope) {
    pageSetUp();

    // document.getElementById("divison").onchange = function() {myFunction()};


    var ref = firebase.database().ref("/flas/");

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
                division: $('#division').val(),
                municipality: $('#municipality').val(),
                divisionNo: $('#divisionNo').val(),
                municipalityNo: $('#municipalityNo').val(),
                schoolNo: $('#schoolNo').val(),
                evacCenter: $('#evacCenter').val(),
                affectedSchool: $('#affectedSchool').val(),
                families: $('#families').val(),
                individuals: $('#individuals').val(),
                residentLearners: $('#residentLearners').val(),
                displacedLearners: $('#displacedLearners').val(),
                totalLearners: $('#totalLearners').val(),
                residentPersonnel: $('#residentPersonnel').val(),
                displacedPersonnel: $('#displacedPersonnel').val(),
                evacueePersonnel: $('#evacueePersonnel').val(),
                totalPersonnel: $('#totalPersonnel').val(),
                totalClassrooms: $('#totalClassrooms').val(),
                numClassroom: $('#numClassroom').val(),
                neededTLS: $('#neededTLS').val(),
                totalTLS: $('#totalTLS').val(),
                additionalTLS: $('#additionalTLS').val()
            })
            .then(function(data) {
                console.log(data.key);
                // ref.child(data.key).update({
                //     key: data.key
                // })
                console.log("Success");

                document.getElementById("division").value = "";
                document.getElementById("municipality").value = "";
                document.getElementById("municipalityNo").value = "";
                document.getElementById("schoolNo").value = "";
                document.getElementById("divisionNo").value = "";
                document.getElementById("evacCenter").value = "";
                document.getElementById("affectedSchool").value = "";
                document.getElementById("families").value = "";
                document.getElementById("individuals").value = "";
                document.getElementById("residentLearners").value = "";
                document.getElementById("displacedLearners").value = "";
                document.getElementById("totalLearners").value = "";
                document.getElementById("residentPersonnel").value = "";
                document.getElementById("displacedPersonnel").value = "";
                document.getElementById("evacueePersonnel").value = "";
                document.getElementById("totalPersonnel").value = "";
                document.getElementById("totalClassrooms").value = "";
                document.getElementById("numClassroom").value = "";
                document.getElementById("neededTLS").value = "";
                document.getElementById("totalTLS").value = "";
                document.getElementById("additionalTLS").value = "";
                
            });
    });


    

   
});