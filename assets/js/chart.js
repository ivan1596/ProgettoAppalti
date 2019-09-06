
  var Abi = misureandregistroABI;
  var address = misureandregistroAdress;
  web3js.eth.defaultAccount = '0xed9d02e382b34818e88B88a309c7fe71E65f419d';
  var myContract = new web3js.eth.Contract(Abi, address, { gas: 10000000000000000000, gasPrice: '20000000'});
  var myContractPagamenti = new web3js.eth.Contract(pagamentiABI, pagamentiAdress, { gas: 10000000000000000000, gasPrice: '20000000'});
  var struct = []

  $(function() {
    var json_data = [{"y": "2016", "a": 10}, {"y": "2017", "a": 8}];
    var result = [];
    for(var i in json_data)
    result.push(json_data[i]);
    console.log(result);
    function a(){return result}

    
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
                data: a(),
                xkey: 'y',
                ykeys: ['a'],
                labels: ['Totale'],
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

});










