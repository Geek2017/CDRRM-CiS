angular.module('newApp').controller('socnewCtrl', function($scope) {
    pageSetUp();
    $(document).ready(function() {

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


        $('#activate-step-2').on('click', function(e) {
            $('ul.setup-panel li:eq(1)').removeClass('disabled');
            $('ul.setup-panel li a[href="#step-2"]').trigger('click');
            $(this).remove();
        })

        $('#activate-step-3').on('click', function(e) {
            $('ul.setup-panel li:eq(2)').removeClass('disabled');
            $('ul.setup-panel li a[href="#step-3"]').trigger('click');
            $(this).remove();
        })
    });


    var obj;

    $scope.tojson = function(obj) {

        var table = $('#convert-table').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table;

    }
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var datetoday = month + ":" + day + ":" + year;

    $('#newsoc').on('submit', function(e) {
        $scope.tojson();


        e.preventDefault();

        console.log($scope.tojson(obj))

        var newobj = $scope.tojson(obj);

        var uid = firebase.database().ref().child('cswdo/soec/').push().key;

        const [, ...rest] = newobj.reverse();
        const withoutLast = rest.reverse();
        const withoutLast2 = $scope.tojson(obj);

        var data = {
            date: datetoday,
            type_disaster: $scope.type_disaster,
            place_occurence: $scope.place_occurence,
            asof: $scope.asof,
            prefered_by: $scope.prefered_by,
            prefered_by_designation: $scope.prefered_by_designation,
            certified_by: $scope.certified_by,
            certified_by_designation: $scope.certified_by_designation,
            submmitted_by: $scope.submmitted_by_designation
        }

        var updates = {};
        updates['cswdo/soec/' + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {


            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#socnew"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });
    var cnt = 0;
    $scope.addtr = function() {
        $("#appendhere0").append("<tr> <td> <label class='select '> <select id='rhadetails ' required> <option value='0 ' selected>select</option> <option value='1 '>Volcanic Eruption</option> <option value='2 '>Earthquake</option> <option value='3 '>Tsunamin</option> <option value='4 '>Landslide</option> <option value='5 '>Typhoon</option> <option value='6 '>Storm Surge</option> <option value='7 '>Drougth</option> <option value='8 '>Cold Spell</option> <option value='9 '>FlashFlood</option> <option value='10 '>Red Tide</option> <option value='11 '>Fish Kills</option> <option value='12 '>Locust</option> <option value='13 '>Infestation</option> <option value='14 '>Fire</option> <option value='15 '>Explosion</option> <option value='16 '>Armed Conflict</option> <option value='17 '>Terrorism</option> <option value='18 '>Poisoning</option> <option value='19 '>Mass Action</option> <option value='20 '>Accident</option> <option value='21 '>Other</option> </select><i></i> </td><td> <label class='input '> <input type='text ' name='particulars ' placeholder=' ' required> </label> </td><td> <label class='input '> <input type='date' name='asof' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text ' name=' ' placeholder=' '> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td></tr>")


        $("#appendhere1").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text ' name=' ' placeholder=' '> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td></tr>")

        $("#appendhere2").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text ' name=' ' placeholder=' '> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td></tr>")



        cnt++;
        $('table thead th').each(function(i) {

        });

    }

    $scope.removetr = function() {
        $('#appendhere0 tr:last').remove();
        $('#appendhere1 tr:last').remove();
        $('#appendhere2 tr:last').remove();
    }






});