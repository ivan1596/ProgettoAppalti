var json_data = []

  $(function() {
   
    var the_array
  firebase.firestore().collection('storicopagamenti').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.data().data, '=>', doc.data().pagamento);
        var data = doc.data().data
        var pagamento = doc.data().pagamento
       
        the_array = {
            'data' : data,
            'pagamento' : pagamento
        };


        json_data.push(new Object(the_array))
        console.log(json_data)
      });
      console.log(json_data)
     
      document.getElementById("morris").innerHTML = Morris.Line({
        element: 'morris-line-chart',
        data: json_data,
        xkey: 'data',
        ykeys: ['pagamento'],
        labels: ['Totale'],
        hideHover: 'auto',
        resize: true
    });
    })
       
   
    

    
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
            })
           
            /*====================================
    MORRIS LINE CHART
 ======================================*/
           
     
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

});










