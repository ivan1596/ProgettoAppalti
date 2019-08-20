(function ($) {
        "use strict";
        var mainApp = {
    
            main_fun: function () {
                /*====================================
                METIS MENU 
                ======================================*/
                $('#main-menu').metisMenu();
    
                /*====================================
                  LOAD APPROPRIATE MENU BAR
               ======================================*/
                $(window).bind("load resize", function () {
                    if ($(this).width() < 768) {
                        $('div.sidebar-collapse').addClass('collapse')
                    } else {
                        $('div.sidebar-collapse').removeClass('collapse')
                    }
                });
    
                /*====================================
        MORRIS LINE CHART
     ======================================*/
                Morris.Line({
                    element: 'morris-line-chart',
                    data: [{
                        y: '2006',
                        a: 0,
                        b: 0
                    }, {
                        y: '2007',
                        a: 15,
                        b: 10
                    }, {
                        y: '2008',
                        a: 40,
                        b: 34
                    }, {
                        y: '2009',
                        a: 50,
                        b: 40
                    }, {
                        y: '2010',
                        a: 55,
                        b: 50
                    }, {
                        y: '2011',
                        a: 60,
                        b: 58
                    }, {
                        y: '2012',
                        a: 90,
                        b: 85
                    }, {
                        y: '2013',
                        a: 100,
                        b: 100
                    }],
                    xkey: 'y',
                    ykeys: ['a', 'b'],
                    labels: ['Maturato', 'Pagato'],
                    hideHover: 'auto',
                    resize: true
                });
               
         
            },
    
            initialization: function () {
                mainApp.main_fun();
    
            }
    
        }
        // Initializing ///
    
        $(document).ready(function () {
            mainApp.main_fun();
        });
    
    }(jQuery));
    