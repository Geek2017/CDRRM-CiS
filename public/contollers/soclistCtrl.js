angular.module('newApp').controller('soclistCtrl', function($firebaseArray, $scope, $http, $timeout) {

    pageSetUp();

    var id;


    // firebase.database().ref('/barangay/roomListing/').orderByChild('uid').on("value", function(snapshot) {

    //     console.log(snapshot.val())
    //     if (!localStorage.getItem('pf')) {
    //         if (localStorage.getItem('pf') <= 10) {
    //             localStorage.setItem('pf', 10)
    //         }
    //     }

    //     var dateObj = new Date();
    //     var month = dateObj.getUTCMonth() + 1; //months from 1-12
    //     var day = dateObj.getUTCDate();
    //     var year = dateObj.getUTCFullYear();

    //     const datetoday = month + ":" + day + ":" + year;
    //     // '10:18:2020';
    //     // month + ":" + day + ":" + year;

    //     $timeout(function() {
    //         $scope.$apply(function() {

    //             var tcol = 0;
    //             let returnArr = [];
    //             snapshot.forEach(childSnapshot => {
    //                 let item = childSnapshot.val();
    //                 item.key = childSnapshot.key;
    //                 returnArr.push(item);
    //                 if (datetoday === item.date) {

    //                     tcol += 1 * item.total;
    //                 }
    //             });
    //             $scope.cfs = returnArr;
    //             $scope.tcol = tcol;
    //             console.log(returnArr)
    //         });
    //         $('#here').after(' <ul style="margin:0!important;margin-top:4px" class="pagination pagination-sm pull-right"  ><li ><a href="#cflist" rel="0" id="backward"> < </a></li> <li id="nav"></li>   <li><a href="#cflist" rel="0" id="forward"> > </a></li></ul>');
    //         var rowsShown = localStorage.getItem('pf')

    //         $("#pfilter").change(function() {

    //             rowsShown = localStorage.getItem('pf')


    //             localStorage.setItem('pf', $("#pfilter option:selected").text())

    //             window.location.href = "#"
    //             window.location.href = "#roomlistinglist"
    //         });

    //         var rowsTotal = $('#data tbody tr').length;
    //         var numPages = rowsTotal / rowsShown;
    //         for (i = 0; i < numPages; i++) {
    //             var pageNum = i + 1;
    //             $('#nav').append('<a href="#roomlistinglist" rel="' + i + '">' + pageNum + '</a>');
    //         }

    //         $('#data tbody tr').hide();
    //         $('#data tbody tr').slice(0, rowsShown).show();
    //         $('#nav a:first').addClass('active');
    //         $('#nav a ').bind('click', function() {

    //             $('#nav a').removeClass('active');
    //             $(this).addClass('active');
    //             var currPage = $(this).attr('rel');
    //             localStorage.setItem('curp', currPage)
    //             var startItem = currPage * rowsShown;
    //             var endItem = startItem + rowsShown;
    //             $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
    //             css('display', 'table-row').animate({ opacity: 1 }, 300);
    //             console.log($(this).attr('rel'))


    //         });

    //         $("#backward").click(function() {

    //             var cp = localStorage.getItem('curp');
    //             if (cp >= 1) {
    //                 cp = cp - 1;
    //                 localStorage.setItem('curp', cp)
    //                 var startItem = cp * rowsShown;
    //                 var endItem = startItem + rowsShown;
    //                 $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
    //                 css('display', 'table-row').animate({ opacity: 1 }, 300);
    //             }
    //         });

    //         $("#forward").click(function() {

    //             var tp = $('#data tbody tr').length - 1;

    //             var cp = localStorage.getItem('curp');
    //             if (cp < tp) {
    //                 cp = cp * 1 + 1;
    //                 localStorage.setItem('curp', cp)
    //                 var startItem = cp * rowsShown;
    //                 var endItem = startItem + rowsShown;
    //                 $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
    //                 css('display', 'table-row').animate({ opacity: 1 }, 300);
    //             }
    //         });

    //     }, 100);


    // });


    // $scope.selectUser = function(users) {
    //     // document.getElementById("sum").innerHTML=users.total;
    //     // document.getElementById("sum2").innerHTML=users.total2;
    //     // document.getElementById("sum3").innerHTML=users.total3;
    //     // console.log( users );
    //     // console.log( $scope.cfs );

    //     for (let index = 0; index < $scope.cfs.length; index++) {
    //         // console.log($scope.cfs[index].key)
    //         // console.log(users.key)
    //         if (users.key == $scope.cfs[index].key) {
    //             // console.log($scope.cfs[index])
    //             $scope.usersClicked = $scope.cfs[index];
    //             // console.log($scope.usersClicked.needs)
    //         }

    //     }


    //     $scope.clickedUser = users;
    //     id = users;
    //     // document.getElementById("editDateOfDecampment").value = users.dateOfDecampment;
    //     // document.getElementById("editDateOfEvacuation").value = users.dateOfEvacuation;

    //     $('#myModal').modal('show');
    // };

    // $scope.selectUser2 = function(users) {
    //     // console.log(users);
    //     $scope.clickedUser = users;
    //     id = users;

    //     $('#myModal2').modal('show');
    // };

    // $scope.selectUser3 = function(users) {
    //     console.log(users);
    //     $scope.clickedUser = users;
    //     id = users;
    //     $('#myModal3').modal('show');
    // };

    // $scope.updateUser = function() {
    //     var ref2 = firebase.database().ref("/barangay/roomListing/" + id.$id);
    //     ref2.update({
    //         schoolID: $('#schoolID').val(),
    //         school: $('#school').val(),
    //         region: $('#region').val(),
    //         division: $('#division').val(),
    //         district: $('#district').val(),
    //         municipality: $('#municipality').val(),
    //         enrollment: $('#enrollment').val(),
    //         totalSchool: $('#totalSchool').val(),
    //         schoolWithInfraDamage: $('#schoolWithInfraDamage').val(),
    //         totalDamageClassroom: $('#totalDamageClassroom').val(),
    //         partialDamageClassMajor: $('#partialDamageClassMajor').val(),
    //         partialDamageClassMinor: $('#partialDamageClassMinor').val(),
    //         temporaryLearning: $('#temporaryLearning').val(),
    //         deceasedPersonnel: $('#deceasedPersonnel').val(),
    //         injuredPersonnel: $('#injuredPersonnel').val(),
    //         missingPersonnel: $('#missingPersonnel').val(),
    //         displacedPersonnel: $('#displacedPersonnel').val(),
    //         totalEvacSchool: $('#totalEvacSchool').val(),
    //         ECLasted: $('#ECLasted').val(),
    //         totalSchoolReport: $('#totalSchoolReport').val(),
    //         schoolWithNonInfraDamage: $('#schoolWithNonInfraDamage').val(),
    //         damagedSchoolFurnitures: $('#damagedSchoolFurnitures').val(),
    //         damagedLearningMaterials: $('#damagedLearningMaterials').val(),
    //         damagedComputerEquipment: $('#damagedComputerEquipment').val()
    //     })

    //     .catch(function(error) {
    //         console.log("Login Failed!", error.message);
    //         $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
    //         setTimeout(function() {
    //             $("#notif").hide()
    //         }, 10000);

    //     });

    //     // window.location.href = "#ecdlist";

    //     $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Updated !</div>');
    //     setTimeout(function() {
    //         $("#notif").hide()
    //     }, 10000);

    //     $('#myModal').modal('hide');

    // };

    // $scope.deleteUser = function() {
    //     var ref = firebase.database().ref("/barangay/roomListing/" + id.key);
    //     ref.remove()
    //         .catch(function(error) {
    //             console.log("Login Failed!", error.message);
    //             $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
    //             setTimeout(function() {
    //                 $("#notif").hide()
    //             }, 1500);

    //         });;

    //     // $("#notif").show();
    //     // window.location.href = "#ecdlist";

    //     $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Deleted !</div>');
    //     setTimeout(function() {
    //         window.location.href = "#/"
    //         window.location.href = "#roomlistinglist"
    //     }, 1500);
    //     $('#myModal2').modal('hide');
    // };

    // $scope.close = function() {
    //     $('#myModal').modal('hide');
    //     $('#myModal2').modal('hide');
    //     $('#myModal3').modal('hide');
    // };



    // var obj;
    // var obj2;
    // $scope.tojson = function(obj) {

    //     var table = $('#convert-table').tableToJSON({

    //         extractor: function(cellIndex, $cell) {
    //             return $cell.find('input').val() || $cell.find("#type option:selected").text();
    //         }


    //     })
    //     return table;

    // }
    // $scope.tojson2 = function(obj2) {

    //     var table2 = $('#convert-table2').tableToJSON({

    //         extractor: function(cellIndex, $cell) {
    //             return $cell.find('input').val() || $cell.find("#type option:selected").text();
    //         }


    //     })
    //     return table2;

    // }


    // var dateObj = new Date();
    // var month = dateObj.getUTCMonth() + 1; //months from 1-12
    // var day = dateObj.getUTCDate();
    // var year = dateObj.getUTCFullYear();

    // var datetoday = month + ":" + day + ":" + year;

    // $('#newcf').on('submit', function(e) {
    //     $scope.tojson();
    //     $scope.tojson2();

    //     e.preventDefault();

    //     console.log($scope.tojson(obj))

    //     var newobj = $scope.tojson(obj);
    //     // [$scope.tojson(obj)];

    //     // var uid = firebase.database().ref().child('deped/cnsbd').push().key;
    //     var orno = $scope.ornum;
    //     var sector = $scope.clickedUser.sector;
    //     var leadAgency = $scope.clickedUser.leadAgency;
    //     var location = $scope.clickedUser.location;
    //     var evacCenter = $scope.clickedUser.evacCenter;
    //     var roomNo = $scope.clickedUser.roomNo;
    //     var teacher = $scope.clickedUser.teacher;
    //     var cardColor = $scope.clickedUser.cardColor;
    //     var roomLeader = $scope.clickedUser.roomLeader;



    //     const [, ...rest] = newobj.reverse();
    //     const withoutLast = rest.reverse();
    //     const withoutLast2 = $scope.tojson(obj);
    //     const withoutLast3 = $scope.tojson2(obj2);
    //     // console.log(withoutLast)
    //     var data = {
    //         date: datetoday,
    //         evacCenter: evacCenter,
    //         roomNo: roomNo,
    //         teacher: teacher,
    //         cardColor: cardColor,
    //         roomLeader: roomLeader,
    //         family: withoutLast2,
    //         family2: withoutLast3
    //     }

    //     var updates = {};
    //     // console.log(id.key);
    //     updates['/barangay/roomListing/' + id.key] = data;
    //     firebase.database().ref().update(updates);
    //     console.log(updates)

    //     if (updates) {
    //         $('#myModal').modal('hide');

    //         $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
    //         setTimeout(function() {
    //             window.location.href = "#/"
    //             window.location.href = "#roomlistinglist"
    //         }, 1500);
    //     } else {
    //         $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
    //     }

    // });


    // var cnt = 0;
    // $scope.addtr = function() {
    //     $("#appendhere").append(' <tr><td class="col-md-2"> <label class="input"> <input type="text" name="particulars"  placeholder="" required></label></td><td  class="col-md-2"><label class="input"> <input type="text" name="particulars"  placeholder="" required></label></td></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="remarks" placeholder=""></label></td></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="remarks" placeholder=""></label></td><td><label class="input"> <input type="text" name="remarks" placeholder=""></label></td><td ><label class="input"> <input type="text" name="remarks" placeholder=""></label></td></td><td><label class="input col-md-10"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label> <label class="input col-md-1"> <button class="btn btn-danger btn-sm deleteb">X</button></label></td></tr>');
    //     $("#appendhere2").append(' <tr><td> <label class="input"> <input type="text" name="particulars"  placeholder="" required></label></td><td><label class="input"> <input type="text" name="particulars"  placeholder="" required></label></td></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="remarks" placeholder=""></label></td></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td><label class="input"> <input type="text" name="remarks" placeholder=""></label></td><td><label class="input"> <input type="text" name="remarks" placeholder=""></label></td><td ><label class="input"> <input type="text" name="remarks" placeholder=""></label></td></td><td><label class="input col-md-10"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label> <label class="input col-md-1"> <button class="btn btn-danger btn-sm deleteb">X</button></label></td></tr>');
    //     cnt++;
    //     $('table thead th').each(function(i) {

    //     });

    // }
    // $scope.removetr = function() {

    //     $('#appendhere tr:last').remove();
    //     $('#appendhere2 tr:last').remove();
    //     $('table thead th').each(function(i) {

    //     });
    //     // calculateSum();
    //     // calculateSum2();
    //     // calculateSum3();
    // }

    // $scope.delAppend = function() {
    //     console.log("Del")
    //     $(this).closest("tr").remove();
    //     $('table thead th').each(function(i) {

    //     });
    //     // calculateSum();
    //     // calculateSum2();
    //     // calculateSum3();

    //     $('#myModal').modal('hide');
    // };

    // $("#appendhere").on('click', '.deleteb', function() {
    //     $(this).closest("tr").remove();
    //     $('table thead th').each(function(i) {

    //     });
    //     // calculateSum();
    //     // calculateSum2();
    //     // calculateSum3();
    // });
    // $("#appendhere2").on('click', '.deleteb', function() {
    //     $(this).closest("tr").remove();
    //     $('table thead th').each(function(i) {

    //     });

    // });


});