angular.module('newApp').controller('accesscardlistCtrl', function($firebaseArray, $scope, $http, $timeout) {

    pageSetUp();


    firebase.database().ref('/cswdo/accesscard').orderByChild('uid').on("value", function(snapshot) {


        if (!localStorage.getItem('pf')) {
            if (localStorage.getItem('pf') <= 10) {
                localStorage.setItem('pf', 10)
            }
        }

        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1;
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        const datetoday = month + ":" + day + ":" + year;

        $timeout(function() {


            var tcol = 0;
            let returnArr = [];
            snapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item.key = childSnapshot.key;
                returnArr.push(item);
            });




            $scope.cfs = returnArr;


            console.log($scope.cfs)

            $('#here').after(' <ul style="margin:0!important;margin-top:4px" class="pagination pagination-sm pull-right"  ><li ><a href="#cflist" rel="0" id="backward"> < </a></li> <li id="nav"></li>   <li><a href="#cflist" rel="0" id="forward"> > </a></li></ul>');
            var rowsShown = localStorage.getItem('pf')

            $("#pfilter").change(function() {

                rowsShown = localStorage.getItem('pf')
                localStorage.setItem('pf', $("#pfilter option:selected").text())
                window.location.href = "#"

            });

            var rowsTotal = $('#data tbody tr').length;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                $('#nav').append('<a href="#intakesheetlist" rel="' + i + '">' + pageNum + '</a>');
            }

            $('#data tbody tr').hide();
            $('#data tbody tr').slice(0, rowsShown).show();
            $('#nav a:first').addClass('active');
            $('#nav a ').bind('click', function() {

                $('#nav a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                localStorage.setItem('curp', currPage)
                var startItem = currPage * rowsShown;
                var endItem = startItem + rowsShown;
                $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                css('display', 'table-row').animate({ opacity: 1 }, 300);
                console.log($(this).attr('rel'))
            });

            $("#backward").click(function() {

                var cp = localStorage.getItem('curp');
                if (cp >= 1) {
                    cp = cp - 1;
                    localStorage.setItem('curp', cp)
                    var startItem = cp * rowsShown;
                    var endItem = startItem + rowsShown;
                    $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                }
            });

            $("#forward").click(function() {

                var tp = $('#data tbody tr').length - 1;

                var cp = localStorage.getItem('curp');
                if (cp < tp) {
                    cp = cp * 1 + 1;
                    localStorage.setItem('curp', cp)
                    var startItem = cp * rowsShown;
                    var endItem = startItem + rowsShown;
                    $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                }
            });

        }, 1000);


    });



    var obj0;

    $scope.tojson0 = function(obj0) {

        var table0 = $('#table0').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table0;

    }



    const withoutLast0 = $scope.tojson0(obj0);


    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var datetoday = month + ":" + day + ":" + year;

    $('#updateac').on('submit', function(e) {

        e.preventDefault($(".step-1").trigger("click"));


        $scope.tojson0();

        console.log($scope.tojson0(obj0))



        var data = {
            date: datetoday,

            City: $scope.City,
            EvacuationCenter: $scope.EvacuationCenter,
            CaseNo: $scope.CaseNo,
            Nameofamilyhead: $scope.Nameofamilyhead,
            PlaceofOrigin: $scope.PlaceofOrigin,

            Noofamilymembers: $scope.Noofamilymembers,
            Occupation: $scope.Occupation,
            FamilyIncome: $scope.FamilyIncome,
            Chairman: $scope.Chairman,
            cswdo: $scope.cswdo,
            list: $scope.tojson0(obj0)
        }

        var updates = {};
        updates['cswdo/accesscard/' + localStorage.getItem('keyid')] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {
            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#accesscardlist"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }





    });

    var cnt = 0;
    $scope.addtr = function() {
        $("#appendhere").append("<tr class='row_to_clone'> <td> <label class='input'> <input type='date' required> </label> </td><td><label class='input'> <input type='text' required> </label> </td><td> <label class='input '> <input type='text' required/> </label> </td></tr>");
        cnt++;
    }
    $scope.removetr = function() {
        $('#appendhere tr:last').remove();
        $('table thead th').each(function(i) {

        });
    }

    $scope.editgetid = function(id) {
        var id = id;
        // alert(id)
        localStorage.setItem('keyid', id);

        var cdata = []
        firebase.database().ref("/cswdo/accesscard/" + id).on("child_added", function(snapshot) {
            var data = snapshot.val();

            cdata.push(data)

        });

        console.log(cdata)
        $scope.City = cdata[2];
        $scope.EvacuationCenter = cdata[3];
        $scope.CaseNo = cdata[0];
        $scope.Nameofamilyhead = cdata[5];
        $scope.PlaceofOrigin = cdata[8];

        $scope.Noofamilymembers = cdata[6];
        $scope.Occupation = cdata[7];
        $scope.FamilyIncome = cdata[4];
        $scope.Chairman = cdata[1];
        $scope.cswdo = cdata[9];

        $scope.tbldatas = cdata[11]

        $('#myModal').modal('show');


    }


    $scope.delgetid = function(id) {
        var id = id;
        console.log(id)
        var adaRef = firebase.database().ref('/cswdo/accesscard/' + id);
        adaRef.remove()
            .then(function() {
                console.log("Remove succeeded.")
            })
            .catch(function(error) {
                console.log("Remove failed: " + error.message)
            });
    }


});