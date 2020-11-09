angular.module('newApp').controller('ecdnewCtrl', function($scope) {
    pageSetUp();

    var ref = firebase.database().ref("/deped/ecd/");

    var municipality = $('#municipality').val();
    var host = $('#host').val();
    var accomodated = $('#accomodated').val();
    var families = $('#families').val();
    var individuals = $('#individuals').val();
    var classrooms = $('#classrooms').val();
    var dateOfEvacuation = $('#dateOfEvacuation').val();
    var dateOfDecampment = $('#dateOfDecampment').val();
    var remarks = $('#remarks').val();
    
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
                host: $('#host').val(),
                accomodated: $('#accomodated').val(),
                families: $('#families').val(),
                individuals: $('#individuals').val(),
                classrooms: $('#classrooms').val(),
                dateOfEvacuation: $('#dateOfEvacuation').val(),
                dateOfDecampment: $('#dateOfDecampment').val(),
                remarks: $('#remarks').val()
            })
            .then(function(data) {
                console.log(data.key);
                // ref.child(data.key).update({
                //     key: data.key
                // })
                console.log("Success");

                window.location.href = "#ecdnew";

                $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Evacuation School Site Added !</div>');
                setTimeout(function() {
                    $("#notif").hide()
                }, 10000);

                // document.getElementById("municipality").value = "0";
                // document.getElementById("host").value = "";
                // document.getElementById("accomodated").value = "";
                // document.getElementById("families").value = "";
                // document.getElementById("individuals").value = "";
                // document.getElementById("classrooms").value = "";
                // document.getElementById("dateOfEvacuation").value = "";
                // document.getElementById("dateOfDecampment").value = "";
                // document.getElementById("remarks").value = "";
                
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