angular.module('newApp').controller('soclistCtrl', function($firebaseArray, $scope, $http, $timeout) {

    pageSetUp();


    firebase.database().ref('/cswdo/soec/').orderByChild('uid').on("value", function(snapshot) {


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

            $scope.asof = $scope.cfss[0].asof;
            $scope.type_of_disaster = returnArr.type_disaster;
            $scope.place_of_occurence = returnArr.place_occurence;

            console.log($scope.asof)




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



    var obj0, obj1, obj2;

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

    $scope.tojson2 = function(obj2) {

        var table2 = $('#table2').tableToJSON({

            extractor: function(cellIndex, $cell) {
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

    $('#newsoc').on('submit', function(e) {

        e.preventDefault($(".step-1").trigger("click"));


        $scope.tojson0();
        $scope.tojson1();
        $scope.tojson2();

        console.log($scope.tojson0(obj0))
        console.log($scope.tojson1(obj1))
        console.log($scope.tojson2(obj2))

        setTimeout(function() {
            console.log('done')

            var data = {
                date: datetoday,

                "type_disaster": $scope.type_disaster,
                "place_occurence": $scope.place_occurence,
                "asof": $scope.asof,

                "prefered_by": $scope.prefered_by,
                "prefered_by_designation": $scope.prefered_by_designation,

                "certified_by": $scope.certified_by,
                "certified_by_designation": $scope.certified_by_designation,

                "submmitted_by": $scope.submmitted_by,
                "submmitted_by_designation": $scope.submmitted_by_designation,

                "details": $.extend(true,
                    JSON.parse(localStorage.getItem('i0')),
                    JSON.parse(localStorage.getItem('i1')),
                    JSON.parse(localStorage.getItem('i2')))


            }

            var updates = {};
            updates['cswdo/soec/' + localStorage.getItem('keyid')] = data;
            firebase.database().ref().update(updates);
            console.log(updates)

            if (updates) {


                $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
                setTimeout(function() {
                    window.location.href = "#/"
                    window.location.href = "#soclist"
                }, 1500);
            } else {
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
            }


        }, 2000);


    });



    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    navListItems.click(function(e) {
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

    $('.step-2').click(function() {
        $scope.tojson0();

        console.log($scope.tojson0(obj0))

        localStorage.setItem('i0', JSON.stringify($scope.tojson0(obj0)))
        $('ul.setup-panel li:eq(1)').removeClass('disabled');

        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
    });


    $('.step-3').click(function() {
        $scope.tojson1();

        console.log($scope.tojson1(obj1))

        localStorage.setItem('i1', JSON.stringify($scope.tojson1(obj1)))
        $('ul.setup-panel li:eq(2)').removeClass('disabled');

        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
    });


    $('.step-1').click(function() {
        $scope.tojson2();

        console.log($scope.tojson2(obj2))

        localStorage.setItem('i2', JSON.stringify($scope.tojson2(obj2)))
        $('ul.setup-panel li:eq(0)').removeClass('disabled');

        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
    });




    var cnt = 0;
    $scope.addtr = function() {
        $("#appendhere0").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text ' name=' ' placeholder=' '> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td>")


        $("#appendhere1").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text ' name=' ' placeholder=' '> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td></tr>")

        $("#appendhere2").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text ' name=' ' placeholder=' '> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td></tr>")



        cnt++;


    }

    $scope.removetr = function() {
        $('#appendhere0 tr:last').remove();
        $('#appendhere1 tr:last').remove();
        $('#appendhere2 tr:last').remove();
    }


    $scope.editgetid = function(id) {
        var id = id;

        localStorage.setItem('keyid', id);

        var cdata = []
        firebase.database().ref("cswdo/soec/" + id).on("child_added", function(snapshot) {
            var data = snapshot.val();

            cdata.push(data)


        });

        console.log(cdata)

        $('#myModal').modal('show');

        $scope.asof = cdata[0]

        $scope.type_disaster = cdata[10]
        $scope.place_occurence = cdata[5]

        $scope.tbldatas = cdata[4]

        $scope.certified_by = cdata[1]
        $scope.certified_by_designation = cdata[2]

        $scope.prefered_by = cdata[6]
        $scope.prefered_by_designation = cdata[7]

        $scope.submmitted_by = cdata[8]
        $scope.submmitted_by_designation = cdata[9]

    }


    $scope.delgetid = function(id) {
        var id = id;
        console.log(id)
        var adaRef = firebase.database().ref('/cswdo/soec/' + id);
        adaRef.remove()
            .then(function() {
                console.log("Remove succeeded.")
            })
            .catch(function(error) {
                console.log("Remove failed: " + error.message)
            });
    }
});