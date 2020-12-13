// Application Modules and Routing
angular
    .module('newApp', ['ngRoute', 'firebase'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/dashboard.html',
                controller: "dashboardCtrl"
            })
            .when('/rhalist', {
                templateUrl: 'views/rhalist.html',
                controller: "rhalistCtrl"
            })
            .when('/cnsbdchonew', {
                templateUrl: 'views/cnsbdchonew.html',
                controller: "cnsbdchonewCtrl"
            })
            .when('/cnsbdcholist', {
                templateUrl: 'views/cnsbdcholist.html',
                controller: "cnsbdcholistCtrl"
            })
            .when('/rhanew', {
                templateUrl: 'views/rhanew.html',
                controller: "rhanewCtrl"
            })
            .when('/demographicsnew', {
                templateUrl: 'views/demographicsnew.html',
                controller: "demographicsnewCtrl"
            })
            .when('/demographicslist', {
                templateUrl: 'views/demographicslist.html',
                controller: "demographicslistCtrl"
            })
            .when('/cflist', {
                templateUrl: 'views/cflist.html',
                controller: "cflistCtrl"
            })
            .when('/cfnew', {
                templateUrl: 'views/cfnew.html',
                controller: "cfnewCtrl"
            })
            .when('/crlist', {
                templateUrl: 'views/crlist.html',
                controller: "crlistCtrl"
            })
            .when('/crnew', {
                templateUrl: 'views/crnew.html',
                controller: "crnewCtrl"
            })
            .when('/cdlist', {
                templateUrl: 'views/cdlist.html',
                controller: "cdlistCtrl"
            })
            .when('/ecdnew', {
                templateUrl: 'views/ecdnew.html',
                controller: "ecdnewCtrl"
            })
            .when('/ecdlist', {
                templateUrl: 'views/ecdlist.html',
                controller: "ecdlistCtrl"
            })
            .when('/flasnew', {
                templateUrl: 'views/flasnew.html',
                controller: "flasnewCtrl"
            })
            .when('/flaslist', {
                templateUrl: 'views/flaslist.html',
                controller: "flaslistCtrl"
            })
            .when('/locnew', {
                templateUrl: 'views/locnew.html',
                controller: "locnewCtrl"
            })
            .when('/loclist', {
                templateUrl: 'views/loclist.html',
                controller: "loclistCtrl"
            })
            .when('/rnenew', {
                templateUrl: 'views/rnenew.html',
                controller: "rnenewCtrl"
            })
            .when('/rnelist', {
                templateUrl: 'views/rnelist.html',
                controller: "rnelistCtrl"
            })
            .when('/cnsbdnew', {
                templateUrl: 'views/cnsbdnew.html',
                controller: "cnsbdnewCtrl"
            })
            .when('/cnsbdlist', {
                templateUrl: 'views/cnsbdlist.html',
                controller: "cnsbdlistCtrl"
            })
            .when('/intakesheetnew', {
                templateUrl: 'views/intakeSheetsNew.html',
                controller: "intakeSheetNewCtrl"
            })
            .when('/intakesheetlist', {
                templateUrl: 'views/intakesheetlist.html',
                controller: "intakesheetlistCtrl"
            })
            .when('/roomlistingnew', {
                templateUrl: 'views/roomlistingnew.html',
                controller: "roomlistingnewCtrl"
            })
            .when('/roomlistinglist', {
                templateUrl: 'views/roomlistinglist.html',
                controller: "roomlistinglistCtrl"
            })
            .when('/mohrfnew', {
                templateUrl: 'views/mohrfnew.html',
                controller: "mohrfnewCtrl"
            })
            .when('/mohrflist', {
                templateUrl: 'views/mohrflist.html',
                controller: "mohrflistCtrl"
            })
            .when('/cnsbdbarangaynew', {
                templateUrl: 'views/cnsbdbarangaynew.html',
                controller: "cnsbdbarangaynewCtrl"
            })
            .when('/cnsbdbarangaylist', {
                templateUrl: 'views/cnsbdbarangaylist.html',
                controller: "cnsbdbarangaylistCtrl"
            })
            .when('/intakesheetscswdonew', {
                templateUrl: 'views/intakesheetscswdonew.html',
                controller: "intakesheetcswdonewCtrl"
            })
            .when('/intakesheetcswdolist', {
                templateUrl: 'views/intakesheetcswdolist.html',
                controller: "intakesheetcswdolistCtrl"
            })
            .when('/cnsbdcswdonew', {
                templateUrl: 'views/cnsbdcswdonew.html',
                controller: "cnsbdcswdonewCtrl"
            })
            .when('/cnsbdcswdolist', {
                templateUrl: 'views/cnsbdcswdolist.html',
                controller: "cnsbdcswdolistCtrl"
            })
            .when('/hfrlist', {
                templateUrl: 'views/hfrlist.html',
                controller: "hfrlistCtrl"
            })
            .when('/hfrnew', {
                templateUrl: 'views/hfrnew.html',
                controller: "hfrnewCtrl"
            })
            .when('/soclist', {
                templateUrl: 'views/soclist.html',
                controller: "soclistCtrl"
            })
            .when('/socnew', {
                templateUrl: 'views/socnew.html',
                controller: "socnewCtrl"
            })
            .when('/mgfdcnew', {
                templateUrl: 'views/mgfdcnew.html',
                controller: "mgfdcnewCtrl"
            })
            .when('/mgfdclist', {
                templateUrl: 'views/mgfdclist.html',
                controller: "mgfdclistCtrl"
            })
            .when('/rocrnew', {
                templateUrl: 'views/rocrnew.html',
                controller: "rocrnewCtrl"
            })
            .when('/rocrlist', {
                templateUrl: 'views/rocrlist.html',
                controller: "rocrlistCtrl"
            })
            .when('/rdsnew', {
                templateUrl: 'views/rdsnew.html',
                controller: "rdsnewCtrl"
            })
            .when('/rdslist', {
                templateUrl: 'views/rdslist.html',
                controller: "rdslistCtrl"
            })
            .when('/radnew', {
                templateUrl: 'views/radnew.html',
                controller: "radnewCtrl"
            })
            .when('/radlist', {
                templateUrl: 'views/radlist.html',
                controller: "radlistCtrl"
            })
            .when('/donationnew', {
                templateUrl: 'views/donationnew.html',
                controller: "donationnewCtrl"
            })
            .when('/donationlist', {
                templateUrl: 'views/donationlist.html',
                controller: "donationlistCtrl"
            })
            .when('/accesscardlist', {
                templateUrl: 'views/accesscardlist.html',
                controller: "accesscardlistCtrl"
            })
            .when('/accesscardnew', {
                templateUrl: 'views/accesscardnew.html',
                controller: "accesscardnewCtrl"
            })
            .when('/ddorlist', {
                templateUrl: 'views/ddorlist.html',
                controller: "ddorlistCtrl"
            })
            .when('/ddornew', {
                templateUrl: 'views/ddornew.html',
                controller: "ddornewCtrl"
            })
            .when('/ecllist', {
                templateUrl: 'views/ecllist.html',
                controller: "ecllisttCtrl"
            })
            .when('/eclnew', {
                templateUrl: 'views/eclnew.html',
                controller: "eclnewCtrl"
            })
            .when('/dcmlist', {
                templateUrl: 'views/dcmlist.html',
                controller: "dcmlistCtrl"
            })
            .when('/dcmnew', {
                templateUrl: 'views/dcmnew.html',
                controller: "dcmnewCtrl"
            })
            .when('/esrlist', {
                templateUrl: 'views/esrlist.html',
                controller: "esrlistCtrl"
            })
            .when('/esrnew', {
                templateUrl: 'views/esrlist.html',
                controller: "esrnewCtrl"
            })
            .when('/cnsbdcdrrmolist', {
                templateUrl: 'views/cnsbdcdrrmolist.html',
                controller: "cnsbdcdrrmolistCtrl"
            })
            .when('/idrnew', {
                templateUrl: 'views/idrnew.html',
                controller: "idrnewCtrl"
            })
            .when('/idrlist', {
                templateUrl: 'views/idrlist.html',
                controller: "idrlistCtrl"
            })
            .when('/frnew', {
                templateUrl: 'views/frnew.html',
                controller: "frnewCtrl"
            })
            .when('/frlist', {
                templateUrl: 'views/frlist.html',
                controller: "frlistCtrl"
            })
            .when('/masrnew', {
                templateUrl: 'views/masrnew.html',
                controller: "masrnewCtrl"
            })
            .when('/masrlist', {
                templateUrl: 'views/masrlist.html',
                controller: "masrlistCtrl"
            })
            .when('/launnew', {
                templateUrl: 'views/launnew.html',
                controller: "launnewCtrl"
            })
            .when('/launlist', {
                templateUrl: 'views/launlist.html',
                controller: "launlistCtrl"
            })
            .when('/cnsbdcdrrmonew', {
                templateUrl: 'views/cnsbdcdrrmonew.html',
                controller: "cnsbdcdrrmonewCtrl"
            });



    });