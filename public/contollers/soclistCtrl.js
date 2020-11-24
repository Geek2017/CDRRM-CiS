angular.module('newApp').controller('soclistCtrl', function($firebaseArray, $scope, $http, $timeout) {

    pageSetUp();
    firebase.database().ref('/cswdo/soec/').orderByChild('uid').on("value", function(snapshot) {
        let returnArr = [];
        snapshot.forEach(childSnapshot => {
            let item = childSnapshot.val();
            item.key = childSnapshot.key;

        });

        $scope.sds = returnArr;
        console.log($scope.sds)
    });

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
            $scope.$apply(function() {

                var tcol = 0;
                let returnArr = [];
                snapshot.forEach(childSnapshot => {
                    let item = childSnapshot.val();
                    item.key = childSnapshot.key;
                    returnArr.push(item);
                    //     returnArr.push($.extend(true,
                    //         item.type_disaster,

                    //         item.submmitted_by,

                    //         item.submmitted_by_designation,

                    //         item.prefered_by_designation,

                    //         item.prefered_by,

                    //         item.place_occurence,

                    //         item.certified_by,

                    //         item.certified_by_designation,

                    //         item.asof,

                    //         item.i0, item.i1, item.i2));



                });




                $scope.cfss = returnArr;

                console.log($scope.cfss)


            });

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

        }, 100);


    });


});