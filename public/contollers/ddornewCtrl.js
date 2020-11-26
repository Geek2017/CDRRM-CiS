angular.module('newApp').controller('ddornewCtrl', function($scope) {
    pageSetUp();

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

        e.preventDefault($(".step-1").trigger("click"));

        setTimeout(function() {
            console.log('done')
            $scope.tojson0();
            $scope.tojson1();

            console.log($scope.tojson0(obj0))
            console.log($scope.tojson1(obj1))


            var uid = firebase.database().ref().child('/cswdo/ddor/').push().key;

            var data = {
                date: datetoday,

                aof: $scope.aof,
                time: $scope.time,
                ec: $scope.ec,
                bie: $scope.bie,
                nof: $scope.nof,
                nofm: $scope.nofm,

                table0: $scope.tojson0(obj0),
                table1: $scope.tojson1(obj1),

            }

            var updates = {};
            updates['/cswdo/ddor/' + uid] = data;
            firebase.database().ref().update(updates);
            console.log(updates)

            if (updates) {


                $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
                setTimeout(function() {
                    window.location.href = "#/"
                    window.location.href = "#ddornew"
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

});