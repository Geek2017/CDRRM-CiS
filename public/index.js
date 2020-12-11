$(document).ready(function($http) {
    pageSetUp();



    // $http.get("http://api.weatherapi.com/v1/forecast.json?key=ed9905c895ea49fa93c73936201711&q=legaspi albay&days=1")
    //     .then(function(response) {
    //         console.log(response.data);
    //     });


    $.get("https://api.weatherapi.com/v1/forecast.json?key=ed9905c895ea49fa93c73936201711&q=legaspi albay&days=1", function(data, status) {
        console.log(data);



        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var n = weekday[d.getDay()];
        var d = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var date = d.getUTCDate();
        var month = d.getUTCMonth() + 1; // Since getUTCMonth() returns month from 0-11 not 1-12
        var year = d.getUTCFullYear();

        var dateStr = months[d.getMonth()] + " " + date + ", " + year;

        $('.day').text(n)
        $('.date').text(dateStr)
        if (data.location.name == 'Legaspi') {
            $('.location').text('Legazpi City')
        } else {
            $('.location').text(data.location.name)

        }



        $('.weather').text(data.current.condition.text)
        $('.temp').text(data.current.temp_c + ' C')
        $('.wind').text(data.current.wind_kph + ' Kph')
        $('.humidity').text(data.current.humidity + ' %')

        $('.sunrise').text(data.forecast.forecastday[0].astro.sunrise)
        $('.sunset').text(data.forecast.forecastday[0].astro.sunset)


        $('.breadcrumb').show()
    });

    $('.chonav').hide()
    $('.depednav').hide()
    $('.brgynav').hide()
    $('.cswdonav').hide()
    $('.cdrrmonav').hide()
    $('.breadcrumb').hide()

    $("ul.li").find(".chonav").css("background-color", "red");

    firebase.auth().onAuthStateChanged(function(user) {

        if (!user) {
            window.location.href = './login.html';
        } else {
            if (!user.emailVerified) {
                window.location.href = './login.html';
            }
        }
        $('#displayname').text(user.displayName);

        var ref = firebase.database().ref("users");
        ref.orderByChild("email").equalTo(user.email).once("child_added", function(snapshot) {
            console.log('users data', snapshot.val())

            if (snapshot.val().role) {
                if (snapshot.val().role == 0) {
                    $('.chonav').show()
                    $('.depednav').show()
                    $('.brgynav').show()
                    $('.cswdonav').show()
                    $('.cdrrmonav').show()
                } else if (snapshot.val().role == 1) {
                    $('.chonav').show()
                } else if (snapshot.val().role == 2) {
                    $('.depednav').show()
                } else if (snapshot.val().role == 3) {
                    $('.brgynav').show()
                } else if (snapshot.val().role == 4) {
                    $('.cswdonav').show()
                }

            }

        })
    })
})