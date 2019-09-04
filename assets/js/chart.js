
//var date = new Date(dataP);
//str=str.replace(/T|\:\d\dZ/g,' ')
console.log(dataP)
var isoDate = new Date(dataP).toISOString();
console.log(isoDate)
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
                        y: isoDate,
                        a: 0,
                        b: 0
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
    