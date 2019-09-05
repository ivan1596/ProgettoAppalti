
  var Abi = misureandregistroABI;
  var address = misureandregistroAdress;
  web3js.eth.defaultAccount = '0xed9d02e382b34818e88B88a309c7fe71E65f419d';
  var myContract = new web3js.eth.Contract(Abi, address, { gas: 10000000000000000000, gasPrice: '20000000'});
  var myContractPagamenti = new web3js.eth.Contract(pagamentiABI, pagamentiAdress, { gas: 10000000000000000000, gasPrice: '20000000'});
  var struct = []

  $(function() {
  
    async function dataaaa() {
        let tot = await myContractPagamenti.methods.getRecordsCount().call()
        var n
    
        for(n=0 ; n<tot ; n++){
          let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
          await myContractPagamenti.methods.getRecordWithKey(chiave).call((err, result) => { 
          importoP = result.importo;//  /[{y:'2006',a:0,b:0}],
          struct.push({
            y: 10,
            a: 10,
            b: 10
          });
        
          })
        }return struct
        }
        console.log(struct)
        function pushData() {
            
           
            return  dataaaa();
          }
   



    
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
                data: pushData(),
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

});










