angular.module('newApp').controller('ddorlistCtrl', function($firebaseArray, $scope, $http, $timeout) {

    pageSetUp();


    firebase.database().ref('/cswdo/ddor/').orderByChild('uid').on("value", function(snapshot) {

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

            $scope.cfss = returnArr;

            console.log(returnArr)

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


    var obj0, obj1;

    $scope.tojson0 = function(obj0) {

        var table0 = $('#table0').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table0;

    }

    $scope.tojson1 = function(obj1) {

        var table1 = $('#table1').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table1;

    }

    const withoutLast0 = $scope.tojson0(obj0);
    const withoutLast1 = $scope.tojson1(obj1);

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var datetoday = month + ":" + day + ":" + year;

    $('#newddor').on('submit', function(e) {

        e.preventDefault();

        setTimeout(function() {
            console.log('done')
            $scope.tojson0();
            $scope.tojson1();

            console.log($scope.tojson0(obj0))
            console.log($scope.tojson1(obj1))

            var data = {
                date: datetoday,

                aof: $scope.aof,
                time: $scope.time,
                ec: $scope.ec,
                bie: $scope.bie,
                nof: $scope.nof,
                nofm: $scope.nofm,
                noro: $scope.noro,

                table0: $scope.tojson0(obj0),
                table1: $scope.tojson1(obj1),

                promblem_encounter: $scope.promblem_encounter,
                action_taken: $scope.action_taken,
                plans_reccommendation: $scope.plans_reccommendation,

            }

            var updates = {};
            updates['/cswdo/ddor/' + localStorage.getItem('keyid')] = data;
            firebase.database().ref().update(updates);
            console.log(updates)

            if (updates) {

                $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
                setTimeout(function() {
                    window.location.href = "#/"
                    window.location.href = "#ddorlist"
                }, 1500);
            } else {
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
            }


        }, 2000);

    });


    var cnt0 = 0;
    $scope.addtr = function() {
        $("#appendhere0").append("<tr class='row_to_clone'> <td> <label class='input'> <input type='text' required> </label> </td><td> <label class='input'> <input type='text' required> </label> </td><td><label class='input'> <input type='text' required> </label> </td><td> <label class='input '> <input type='text' required/> </label> </td></tr>")
        cnt0++;
    }

    $scope.removetr = function() {
        $('#appendhere0 tr:last').remove();
    }

    var cnt1 = 0;
    $scope.addtrs = function() {
        $("#appendhere1").append("<tr class='row_to_clone'> <td> <label class='input'> <input type='text' required> </label> </td><td> <label class='input'> <input type='text' required> </label> </td><td><label class='input'> <input type='text' required> </label> </td></tr>")
        cnt1++;
    }

    $scope.removetrs = function() {
        $('#appendhere1 tr:last').remove();
    }



    $scope.editgetid = function(id) {
        var id = id;

        localStorage.setItem('keyid', id);

        var cdata = []
        firebase.database().ref("cswdo/ddor/" + id).on("child_added", function(snapshot) {
            var data = snapshot.val();

            cdata.push(data)
        });

        console.log(cdata)

        $scope.aof = new Date(cdata[1]),
            $scope.time = new Date(cdata[12]),
            $scope.ec = cdata[4],
            $scope.bie = cdata[2],
            $scope.nof = cdata[5],
            $scope.nofm = cdata[6],
            $scope.noro = cdata[7],

            $scope.tbldata0 = cdata[10],
            $scope.tbldata1 = cdata[11],

            $scope.promblem_encounter = cdata[9],
            $scope.action_taken = cdata[0],
            $scope.plans_reccommendation = cdata[8]

        $('#myModal').modal('show');
    }


    $scope.delgetid = function(id) {
        var id = id;
        console.log(id)
        var adaRef = firebase.database().ref('/cswdo/ddor/' + id);
        adaRef.remove()
            .then(function() {
                console.log("Remove succeeded.")
            })
            .catch(function(error) {
                console.log("Remove failed: " + error.message)
            });
    }
});