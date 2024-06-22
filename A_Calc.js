// Display script
             function Change_size() { 
                alert_msg("Display Changed");
                  var css = `
                    input {
                      font-size: 0.8em;
                      padding: 6px;
                    }
                    body {font-size: 3em;}
                    tr {
                      display: table;
                      width: 100%;
                    }
                    
                    td {
                      display: table-row;
                      text-align: center;
                    } 
                    
                    table {
                      background: rgba(225,225,225,0.5);
                      
                    }

                    /*right Footer*/
                      .vertical-menu {
                        width: 100px;
                        font-size: 0.8em;
                        position: fixed;
                        right: -30px;
                        top:80px;
                        z-index: 1;
                      }

                      .vertical-menu a {
                        background-color: #eee;
                        color: black;
                        font-size: 0.8em;
                        display: block;
                        padding: 12px;
                        text-decoration: none;
                        border-radius: 5px 0 0 5px;
                      }

                      .vertical-menu:hover {
                        right: 20px;
                      }

                      input[type="radio"]{
                            border: 0px;
                            width: 100%;
                            height: 1.5em;
                        }

                      input[type="checkbox"]{
                            border: 0px;
                            width: 100%;
                            height: 1.5em;
                        }

                      input[type="submit"]{
                            border: 0px;
                            border-radius:15px;height:80px;
                        }
                      }
                      
                  `;
                  
                  var style = document.createElement('style');
                  style.type = 'text/css';
                  style.appendChild(document.createTextNode(css));
                  document.head.appendChild(style);

                  document.getElementById("cart_list").cols="10";
            }
            function removeCustomStyles() {
              var style = document.querySelector('style[type="text/css"]');
              if (style) {
                style.remove();
              }
            }
						function openNav() {
						  document.getElementById("mySidenav").style.width = "250px";
						}

						function closeNav() {
						  document.getElementById("mySidenav").style.width = "0";
						}
						
						function changediv() {
							document.getElementById("idcontent").style.visibility = "visible";
							document.getElementById("idintro").style.visibility = "hidden";
							//alert("hai");
						}	
						
						function changedivback() {
							document.getElementById("idintro").style.visibility = "visible";
							document.getElementById("idcontent").style.visibility = "hidden";
							//alert("bye");
						}
						
						function overlay_on() {
							  document.getElementById("overlay").style.display = "block";
							}

						function overlay_off() {
							  document.getElementById("overlay").style.display = "none";
							}
		
						function content_chg(ato){
							//alert(ato);
							var k=["ctc1","ctc2","ctc3","ctc4","ctc5"];
							
							if (ato == 5)
							{
									for (var i=0;i<6;i++)
									{
											document.getElementById(k[i]).style.display = "block";
									}
							}
							else{
									
									for (var i=0;i<6;i++)
									{
										if ( i == ato )
										{
											document.getElementById(k[i]).style.display = "block";
										}
										else
										{
											document.getElementById(k[i]).style.display = "none";
										}
									}
							}
						}
		
						function alert_msg(a) {
						
							document.getElementById("snackbar").innerHTML=a;
						  var x = document.getElementById("snackbar");
						  x.className = "show";
						  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
						}
		// Funtional Scripts

			function go_whatapp_chat()
				{
					var a= prompt("Whatapp Number","");
					var b="http://wa.me/91"+a;
					
					
					//alert (b);
					window.open(b);
					
				}
				
			function serchingg(option)
				{
					//alert("Effrror");

          //var searchQuery = prompt("Enter your search query:"); instead i am getting input tag. 
          
          var searchQuery = document.getElementById("g_serch").value ;

          switch(option) 
          {
              
            case 1: // to Search in Google
        
              var encodedSearchQuery = encodeURIComponent(searchQuery); // text to encode covertion
              var searchUrl = "https://www.google.com/search?q="+encodedSearchQuery+"";

              // Backup Code - const searchUrl = `https://www.google.com/search?q=${encodedSearchQuery}`; Modify according to script

              //alert (searchUrl);
              window.open(searchUrl, "_blank");
            break;

            case 2: // to search in G-Image
        
              var encodedSearchQuery = encodeURIComponent(searchQuery); // text to encode covertion
              var searchUrl = "https://www.google.com/search?tbm=isch&q="+encodedSearchQuery;

              // Backup Code - const searchUrl = `https://www.google.com/search?tbm=isch&q=${encodedSearchQuery}`; Modify according to script

              //alert (searchUrl);
              window.open(searchUrl, "_blank");
            break;

            case 3 : // to Open a Specific Whatapp Chat
              var a= searchQuery;
					    var b="http://wa.me/91"+a;
					
					    window.open(b);

            break;

            case 4 : // To empty the input tag
              document.getElementById("g_serch").value = "";
            break ;

          }
				}
			
			function open_manger(){
				b= "https://script.google.com/macros/s/AKfycbw_aVKbvd9lmPGf6pTZPdFHs25C5URr9nYlfnXzk3TZRdblS8QjfFRyYI_aYOamX1Mxkw/exec";
				window.open(b);
			}
		
		// calcutation Script 
		 //alert ("comming to script" )
			
			
			
			// this below scrips are store data in google sheet, This logic Currently upate as cart but keeping this for reference.
		/*	function send_data(data)
				{
				//alert("send data");
				//alert(data); //for checking function is worikg or not.
				
						//not need bec it fetch from input but we feed as arr_input
								//var form_data = document.getElementsByClassName("form-data"); //retrieve filled form data
								//var i;
								//var data = [];
								//for(i=0; i<form_data.length; i++){
								//data.push(form_data[i].value);
								//}
					
					var adv_pay= prompt("Advance amount:",0);
				//	data.push(adv_pay);
				//	var bal_pay= data[4] - adv_pay;
					
				//	data.push(bal_pay);
					
				//	var ib="=Row()-1";
				//	data.push(ib);
					
				//	const date= new Date();
				//	data.push(date);
					
					google.script.run.saveData(data); // send to google app script
						//document.getElementById("form").style.display = "none"; // make form invisible
				//	document.getElementById("completion-msg").innerHTML+=ib;
				//	document.getElementById("completion-msg").style.display = "block"; // Optional if you want to give a completion feedback!
					
					// below is To show to booker the basic details
					alert(" Order Number   > "+data[8]+"\n Name         > "+data[0]+"\n Contact      > "+data[1]+"\n No 0f Copies     > "+data[2]+"\n Deatils           > "+data[3]+"\n Total Price     > "+data[4]+"\n Advance paid        > "+data[6]+"\n Balance amount    > "+data[7]+"\n Status            > "+data[5]);
				
				
				}
			
		/*	function Vistingcard_order()	
			{
				var cust_name= prompt("Customer Name :","");
					if (cust_name == null)
					{
						return;
					}
				var cust_data= prompt("Customer Details :","Ph :");
				
				var no_of_cps= "";//parseFloat(document.getElementById("TotalCopy_invt").value);
			
				var Ord_data="Visting Card ";
				
				
				var tbl=document.getElementById("vc_table"); // or document.getElementsByTagName("table")[2];
				
				for (r=1;r<=8;r++)
				{
					//alert(r);
					var tbl_r=tbl.getElementsByTagName("tr")[r];
					
					var tbl_used=tbl_r.getElementsByTagName("td")[4];
					var chk=tbl_used.children[0].value;  // insted of this bec this not working var chk0=tbl_used.getElementsByTagName("input");
					
					//alert(chk);
					if (chk>0)
					{	
						Ord_data +="\n";
						for (c=0;c<4;c++)
						{	//alert(c);
							var tbl_rd=tbl_r.getElementsByTagName("td")[c];
							var txt1=tbl_rd.innerHTML;
							Ord_data +=txt1;
						}
						no_of_cps += chk+" ";
					}
				}
				
				
				var tot_pri=parseInt(document.getElementById("result_vc_i").value);
				var statu="New_Order";
				
				var bill_arr= [cust_name,cust_data,no_of_cps,Ord_data,tot_pri,statu];
				
				send_data(bill_arr);
				
				//add this respective calculation file 
				//document.getElementById("result_inv").value=Math.round(totalwith_profit);		
				// add this in html table - <input type="text" id="result_inv" >
				//alert(cust_name);
				//alert(bill_arr);
				
			}			
				
			function billbook_order()	
			{
				var cust_name= prompt("Customer Name :","");
					if (cust_name == null)
					{
						return;
					}
				var cust_data= prompt("Customer Details :","Ph :");
				
				var no_of_cps= parseInt(document.getElementById("TotalBook").value);
				
				var ps=0;
					if(document.getElementById("pset").checked)
						{
							ps=parseInt(document.getElementById("pset").value);
						}
						else if(document.getElementById("p1set").checked)
						{
							ps=parseInt(document.getElementById("p1set").value);
						}
						else
						{
							ps=1;
						}
				var size=parseInt(document.getElementById("Paper_size").value);
				var set=ps;
				var addcpy=parseInt(document.getElementById("No_add_copy").value);
				
				// adds color
				var no_of_clr= parseInt(document.getElementById("No_of_color_bill").value);
				var clrs="";
				
				if (no_of_clr == 1)
				{
						clrs += document.getElementById("list_color_bill1").value;
				}else if (no_of_clr == 2)
				{
						clrs += document.getElementById("list_color_bill1").value;
						clrs += ",";
						clrs += document.getElementById("list_color_bill2").value;
						
				}else{ clrs += "nill"; }
				
				// add Side.
				var side= parseInt(document.getElementById("Printing_side_bill").value);
				
				var Ord_data="Billbook/LetterPad Sz-"+size+" Set-"+set+" Add cpy-1+"+addcpy+" Colour-"+clrs+" Side-"+side;
				
				var tot_pri=parseInt(document.getElementById("result_bill").value);
				var statu="New_Order";
				
				var bill_arr= [cust_name,cust_data,no_of_cps,Ord_data,tot_pri,statu];
				
				send_data(bill_arr);
				
				//add this respective calculation file 
				//document.getElementById("result_bill").value=Math.round(totalwith_profit);		
				// add this in html table - <input type="text" id="result_bill" >
				//alert(cust_name);
				//alert(bill_arr);
				
			}
			
			function nts_order()	
			{
				var cust_name= prompt("Customer Name :","");
					if (cust_name == null)
					{
						return;
					}
				var cust_data= prompt("Customer Details :","Ph :");
				
				var no_of_cps= parseInt(document.getElementById("TotalCopy_nts").value);
					
					var size=parseInt(document.getElementById("Paper_size_nts").value);
					var side=parseInt(document.getElementById("Printing_side_nts").value);
				
				// adds color
				var no_of_clr= parseInt(document.getElementById("No_of_color_nts").value);
				var clrs="";
				
				if (no_of_clr == 1)
				{
						clrs += document.getElementById("list_color_nts1").value;
				}else if (no_of_clr == 2)
				{
						clrs += document.getElementById("list_color_nts1").value;
						clrs += ",";
						clrs += document.getElementById("list_color_nts2").value;
						
				}else{ clrs += "nill"; }
				
				
				var Ord_data="Notice sz-"+size+" side-"+side+" Colour-"+clrs;
				
				var tot_pri=parseInt(document.getElementById("result_ntsi").value);
				var statu="New_Order";
				
				var bill_arr= [cust_name,cust_data,no_of_cps,Ord_data,tot_pri,statu];
				
				send_data(bill_arr);
				
				//add this respective calculation file 
				//document.getElementById("result_ntsi").value=Math.round(totalwith_profit);		
				// add this in html table - <input type="text" id="result_ntsi" >
				//alert(cust_name);
				//alert(bill_arr);
				
			}
			
			function inv_order()	
			{
				var cust_name= prompt("Customer Name :","");
					if (cust_name == null)
					{
						return;
					}
				var cust_data= prompt("Customer Details :","Ph :");
				
				var no_of_cps= parseFloat(document.getElementById("TotalCopy_invt").value);
			
			// add colours
				var no_of_clr= parseInt(document.getElementById("No_of_color_inv").value);
				var clrs="";
				
				if (no_of_clr == 1)
				{
						clrs += document.getElementById("list_color_inv1").value;
				}else if (no_of_clr == 2)
				{
						clrs += document.getElementById("list_color_inv1").value;
						clrs += ",";
						clrs += document.getElementById("list_color_inv2").value;
						
				}else{ clrs += "nill"; }
				
				var Ord_data="Invitation "+" Colour-"+clrs;
				
				var tot_pri=parseInt(document.getElementById("result_inv").value);
				var statu="New_Order";
				
				var bill_arr= [cust_name,cust_data,no_of_cps,Ord_data,tot_pri,statu];
				
				send_data(bill_arr);
				
				//add this respective calculation file 
				//document.getElementById("result_inv").value=Math.round(totalwith_profit);		
				// add this in html table - <input type="text" id="result_inv" >
				//alert(cust_name);
				//alert(bill_arr);
				
			}
			
			function Other_order()	
			{
				var cust_name= prompt("Customer Name :","");
					if (cust_name == null)
					{
						return;
					}
				var cust_data= prompt("Customer Details :","Ph :");
				
				var no_of_cps= prompt("No of Copies :","");
			
				var Ord_data= prompt("Order Details :","");
				
				var tot_pri= prompt("Total Price :","");
				var statu="New_Order";
				
				var bill_arr= [cust_name,cust_data,no_of_cps,Ord_data,tot_pri,statu];
				
				send_data(bill_arr);
				
				
			}
			*/ // this above scrips are store data in google sheet
		
			// Scripts to add to cart then to xl sheet
			
			function book_order_at_cart()
			{
				
			//	alert("1");	
				var cust_name= document.getElementById("cart_CustN").value;
				var cust_dtl= document.getElementById("cart_CustD").value;
				var adv_pay= document.getElementById("cart_adv").value;
				var bal_pay= document.getElementById("cart_bal").value;
				
				var date = new Date();
					
				var dateA=date.toString();
					
				var data=[cust_name,cust_dtl];
					var arr_t=document.getElementById("cart_list").value;
			
					var y=arr_t.split("\n");
					var len=(y.length)-1;
					
					for (i=0 ; i < len ; i++)
					{	
						//alert(typeof y[i]);
						
						var yd=y[i];
						
						var yd_arr=yd.split(",");
						
						var y1_copy=yd_arr[0];
						var y2_dtl=yd_arr[1];
						var y3_price=yd_arr[2];
						var y4_status=yd_arr[3];
						
						if (i==0){	data=[cust_name,cust_dtl,y1_copy,y2_dtl,y3_price,y4_status,adv_pay,bal_pay,"=Row()-1",dateA] ;}
						else {	data=[cust_name,cust_dtl,y1_copy,y2_dtl,y3_price,y4_status,"Ref_above","Ref_above","=Row()-1",dateA]	;}
						//alert(typeof data);
						
            google.script.run.saveData(data);  // send to google app script
						
            document.getElementById("completion-msg").innerHTML+="<br>"+data;
						document.getElementById("completion-msg").style.display = "block";// Optional if you want to give a completion feedback!
						//alert(data);
						
						if(true)
						{
							document.getElementById("cart_list").value="";
							document.getElementById("price_list").value="";
							document.getElementById("cart_tprc_add").value = 0;
							document.getElementById("cart_adv").value=0;
							document.getElementById("cart_bal").value=0;
						}
					}
					
				alert_msg(cust_name+"'s Order has been booked.....");
			}
			
			function bill_cart(){
				
				
				
				
				var no_of_cps= parseInt(document.getElementById("TotalBook").value);
				
				var ps=0;
					if(document.getElementById("pset").checked)
						{
							ps=parseInt(document.getElementById("pset").value);
						}
						else if(document.getElementById("p1set").checked)
						{
							ps=parseInt(document.getElementById("p1set").value);
						}
						else
						{
							ps=1;
						}
				var size=parseInt(document.getElementById("Paper_size").value);
				var set=ps;
				var addcpy=parseInt(document.getElementById("No_add_copy").value);
				
				// adds color
				var no_of_clr= parseInt(document.getElementById("No_of_color_bill").value);
				var clrs="";
				
				if (no_of_clr == 1)
				{
						clrs += document.getElementById("list_color_bill1").value;
				}else if (no_of_clr == 2)
				{
						clrs += document.getElementById("list_color_bill1").value;
						clrs += ",";
						clrs += document.getElementById("list_color_bill2").value;
						
				}else{ clrs += "nill"; }
				
				// add Side.
				var side= parseInt(document.getElementById("Printing_side_bill").value);
				
				var desr= document.getElementById("des_billbk").value;
				var Ord_data="Billbook/LetterPad- "+desr+" Sz-"+size+" Set-"+set+" Add cpy-1+"+addcpy+" Colour-"+clrs+" Side-"+side;
				
				var tot_pri=parseInt(document.getElementById("result_bill").value);
				var statu="New_Order";
				
				var cart_arr= [no_of_cps,Ord_data,tot_pri,statu];
				
				document.getElementById("cart_list").value+=cart_arr+"\n";
				document.getElementById("price_list").value+=tot_pri+"\n";
				
				
				document.getElementById("cart_tprc_add").value = parseInt(document.getElementById("cart_tprc_add").value)+parseInt(tot_pri);
				
				alert_msg("BillBook/LetterPad is Add to cart");
				
			}
		
			function vc_cart(){
				
								
				var no_of_cps= "";//parseFloat(document.getElementById("TotalCopy_invt").value); will be add by logic
			
				var desr= document.getElementById("des_vc").value;
				var Ord_data="Visting Card "+desr;
				
				
				var tbl=document.getElementById("vc_table"); // or document.getElementsByTagName("table")[2];
				
				for (r=1;r<=8;r++)
				{
					//alert(r);
					var tbl_r=tbl.getElementsByTagName("tr")[r];
					
					var tbl_used=tbl_r.getElementsByTagName("td")[4];
					var chk=tbl_used.children[0].value;  // insted of this bec this not working var chk0=tbl_used.getElementsByTagName("input");
					
					//alert(chk);
					if (chk>0)
					{	
						Ord_data +=" & ";
						for (c=0;c<4;c++)
						{	//alert(c);
							var tbl_rd=tbl_r.getElementsByTagName("td")[c];
							var txt1=tbl_rd.innerHTML;
							Ord_data +=txt1;
						}
						no_of_cps += chk+" ";
					}
				}
				
				
				var tot_pri=parseInt(document.getElementById("result_vc_i").value);
				var statu="New_Order";
				
				var cart_vc_arr= [no_of_cps,Ord_data,tot_pri,statu];
				
				document.getElementById("cart_list").value+=cart_vc_arr+"\n";
				document.getElementById("price_list").value+=tot_pri+"\n";
				
				
				document.getElementById("cart_tprc_add").value = parseInt(document.getElementById("cart_tprc_add").value)+parseInt(tot_pri);
				
				alert_msg("Visiting Card is Add to cart");
			}	
			
			function nts_cart(){
				
								
				var no_of_cps= parseInt(document.getElementById("TotalCopy_nts").value);
					
					var size=parseInt(document.getElementById("Paper_size_nts").value);
					var side=parseInt(document.getElementById("Printing_side_nts").value);
				
				// adds color
				var no_of_clr= parseInt(document.getElementById("No_of_color_nts").value);
				var clrs="";
				
				if (no_of_clr == 1)
				{
						clrs += document.getElementById("list_color_nts1").value;
				}else if (no_of_clr == 2)
				{
						clrs += document.getElementById("list_color_nts1").value;
						clrs += ",";
						clrs += document.getElementById("list_color_nts2").value;
						
				}else{ clrs += "nill"; }
				
				var desr= document.getElementById("des_nts").value;
				var Ord_data="Notice "+desr+" sz-"+size+" side-"+side+" Colour-"+clrs;
				
				var tot_pri=parseInt(document.getElementById("result_ntsi").value);
				var statu="New_Order";
				
				var cart_nts_arr= [no_of_cps,Ord_data,tot_pri,statu];
				
				document.getElementById("cart_list").value+=cart_nts_arr+"\n";
				document.getElementById("price_list").value+=tot_pri+"\n";
				
				
				document.getElementById("cart_tprc_add").value = parseInt(document.getElementById("cart_tprc_add").value)+parseInt(tot_pri);
				
				alert_msg("Notices is Add to cart");
			}	
			
			function inv_cart(){
				
				alert("in");				
				var no_of_cps= parseFloat(document.getElementById("TotalCopy_invt").value);
        var typ_i=parseInt(document.getElementById("inv_card_typ").value);
      // Get Type
        const typ_opt=["Bubu Card","A4 Card","Legal Card","A3 Card"];
        var typ_fin=typ_opt[typ_i];
			// add colours
				var no_of_clr= parseInt(document.getElementById("No_of_color_inv").value);
				var clrs="";
				
				if (no_of_clr == 1)
				{
						clrs += document.getElementById("list_color_inv1").value;
				}else if (no_of_clr == 2)
				{
						clrs += document.getElementById("list_color_inv1").value;
						clrs += ",";
						clrs += document.getElementById("list_color_inv2").value;
						
				}else{ clrs += "nill"; }
				
				var desr= document.getElementById("des_inv").value;
				var Ord_data="Invitation "+desr+"Type- "+typ_fin+" Colour-"+clrs;
				
				var tot_pri=parseInt(document.getElementById("result_inv").value);
				var statu="New_Order";
				
				var cart_nts_arr= [no_of_cps,Ord_data,tot_pri,statu];
				
				document.getElementById("cart_list").value+=cart_nts_arr+"\n";
				document.getElementById("price_list").value+=tot_pri+"\n";
				
				
				document.getElementById("cart_tprc_add").value = parseInt(document.getElementById("cart_tprc_add").value)+parseInt(tot_pri);
				
				alert_msg("Invitation is Add to cart");
			}	
			
			function other_cart(){
				
				
				
				var no_of_cps=document.getElementById("other_cps").value;
			
				var Ord_data= document.getElementById("other_dtl").value;
				
				var tot_pri=parseInt( document.getElementById("other_amt").value);
				//var statu="New_Order";Other_Status
				
				var statu= document.getElementById("Other_Status").value;
				
				var cart_other_arr= [no_of_cps,Ord_data,tot_pri,statu];
				
				
				
				document.getElementById("cart_list").value+=cart_other_arr+"\n";
				document.getElementById("price_list").value+=tot_pri+"\n";
				
				
				document.getElementById("cart_tprc_add").value = parseInt(document.getElementById("cart_tprc_add").value)+parseInt(tot_pri);
				
				alert_msg("This order is Add to cart");
			}	
			
			function flex_cart(){
				
				var cps=document.getElementById("flex_cps").value;
				var len=document.getElementById("flex_l").value;
				var wid=document.getElementById("flex_w").value;
				var qul=document.getElementById("flex_qua").value;
				
				var qof="";
				if (qul<50) { qof="Normal";}
				else {qof="start";}
				
				var Ord_data="Flex "+len+" x "+wid+" Quality"+qof;
				var statu="New_Order";
				var tot_pri=parseInt(document.getElementById("flex_rr").value);
				
				
				var cart_flex_arr= [cps,Ord_data,tot_pri,statu];
				
				document.getElementById("cart_list").value+=cart_flex_arr+"\n";
				document.getElementById("price_list").value+=tot_pri+"\n";
				
				
				document.getElementById("cart_tprc_add").value = parseInt(document.getElementById("cart_tprc_add").value)+parseInt(tot_pri);
				
				alert_msg("This Flex iem is Add to cart");
			}
			
			// Script to calc bal from cart 
			
			function find_bal(){
				
				var c_t=parseInt(document.getElementById("cart_tprc_add").value);
				var c_a=parseInt(document.getElementById("cart_adv").value);
				var c_b=c_t-c_a;
				document.getElementById("cart_bal").value=c_b;
			}
			
		// this below scripts are to calculate rate of the repective job 
		
		function billbookrate()
		{
			//alert("hai");
			var pq=parseFloat(document.getElementById("Main_paperQuality").value);
			var add_pap_quality=parseFloat(document.getElementById("Add_paperQuality").value);
			var ps;
			var ac=parseInt(document.getElementById("No_add_copy").value);
			var tt=parseInt(document.getElementById("TotalBook").value);
			var papsz=parseInt(document.getElementById("Paper_size").value);
			var prt_sd=parseInt(document.getElementById("Printing_side_bill").value);
			var noclr=parseInt(document.getElementById("No_of_color_bill").value);
			//alert(pq);
			//alert(ps);
			//alert(ac);
			if(document.getElementById("pset").checked)
			{
				ps=parseInt(document.getElementById("pset").value);
			}
			else if(document.getElementById("p1set").checked)
			{
				ps=parseInt(document.getElementById("p1set").value);
			}
			else
			{
				ps=1;
			}
			//alert(ps);
			var Maincopyrate=0;
			var Addcopyrate=0;
			
			if (tt>0)
			{ // for main copy
				//alert("Hai");
				var size=ps;
				var set=size/papsz;//4;
				var quir;
			
				if (pq>5)				// lesser than  5 for calculation per paper
				{
					quir=set/24;
				
				}else
				{
					quir=size;
					
				}
				Maincopyrate=quir*pq*tt;
				//alert(Maincopyrate);
			}
			
			if (ac>0)
			{// for additionl
				var temp=ac*ps;
				var size=temp;
				var set=size/papsz;//4;
				var quir;
			
				if (add_pap_quality>5)				// lesser than  5 for calculation per paper
				{
					quir=set/24;
				
				}else
				{
					quir=size;
					
				}
				Addcopyrate=quir*add_pap_quality*tt;
			}
			// Basic Rate's
			var composing=100*prt_sd; //+ with single or double side ;
			var printing=100*prt_sd*noclr; //+ with single or double side + Single or Double Colour.;
			var proof=50;
			var binding=50;
			var rate=Maincopyrate+Addcopyrate;
			
			// Incrementing the Rate for the composing and printing per 1000 copies. with respect to colour & side
			for (var i=1000;i<((ps+(ac*ps))*tt);i=i+1000)
				{
					composing = composing+(100*prt_sd);
					printing = printing+(100*prt_sd*noclr);
				}
				
			// Increasing the Binding Cost with respect to Additioal Copy 
			if (document.getElementById("letterpad").checked) //letterpad binding rate
			{
				binding=20*tt;
			}
			else if(document.getElementById("Nobinding").checked) //Nobinding binding rate
			{
				// remain the original value
			}
			else 									//Billbook binding rate per add copy
			{
			for (var i=0;i<ac;i++)
					{
						binding +=10;
					}
				binding =binding*tt;
			}
			
			var totalcost=(rate+composing+printing+binding+proof);
			var totalwith_profit=totalcost+(totalcost*0.30); // profit is added here
			
			// adding GST
			if (document.getElementById("a_gst_billbk").checked)
			{
				var n_rate=totalwith_profit;
				var gst=n_rate*0.18;
				var gst_rate=totalwith_profit+gst;
				totalwith_profit=gst_rate;
			}
			
			//alert(totalcost);
			document.getElementById("result_bill").value=Math.round(totalwith_profit); // to fill input box
			document.getElementById("result").innerHTML="The Estimated rate is  <span style=' background-color:black;'> Rs."+Math.round(totalwith_profit)+"</span>";		// to display result	
			
		}
		
		function vistingcardrate()
		{
			
			var vcr1=parseInt(document.getElementById("vc1c").innerHTML);
			var vcr2=parseInt(document.getElementById("vc2c").innerHTML);
			var vcr3=parseInt(document.getElementById("vc3c").innerHTML);
			var vcr4=parseInt(document.getElementById("vc4c").innerHTML);
			var vcr5=parseInt(document.getElementById("vc5c").innerHTML);
			var vcr6=parseInt(document.getElementById("vc6c").innerHTML);
			var vcr7=parseInt(document.getElementById("vc7c").innerHTML);
			var vcr8=parseInt(document.getElementById("vc8c").innerHTML);
            var vcr9=parseInt(document.getElementById("vc9c").innerHTML);
            var vcr10=parseInt(document.getElementById("vc10c").innerHTML);
            var vcr11=parseInt(document.getElementById("vc11c").innerHTML);
            var vcr12=parseInt(document.getElementById("vc12c").innerHTML);
            var vcr13=parseInt(document.getElementById("vc13c").innerHTML);
            var vcr14=parseInt(document.getElementById("vc14c").innerHTML);
        
			
			var vcq1=parseInt(document.getElementById("vc1n").value);
			var vcq2=parseInt(document.getElementById("vc2n").value);
			var vcq3=parseInt(document.getElementById("vc3n").value);
			var vcq4=parseInt(document.getElementById("vc4n").value);
			var vcq5=parseInt(document.getElementById("vc5n").value);
			var vcq6=parseInt(document.getElementById("vc6n").value);
			var vcq7=parseInt(document.getElementById("vc7n").value);
			var vcq8=parseInt(document.getElementById("vc8n").value);
            var vcq9=parseInt(document.getElementById("vc9n").value);
            var vcq10=parseInt(document.getElementById("vc10n").value);
            var vcq11=parseInt(document.getElementById("vc11n").value);
            var vcq12=parseInt(document.getElementById("vc12n").value);
            var vcq13=parseInt(document.getElementById("vc13n").value);
            var vcq14=parseInt(document.getElementById("vc14n").value);
            
			
			var tot_pri=(vcr1*vcq1)+(vcr2*vcq2)+(vcr3*vcq3)+(vcr4*vcq4)+(vcr5*vcq5)+(vcr6*vcq6)+(vcr7*vcq7)+(vcr8*vcq8)+(vcr9*vcq9)+(vcr10*vcq10)+(vcr11*vcq11)+(vcr12*vcq12)+(vcr13*vcq13)+(vcr14*vcq14);
			
			// adding GST
			if (document.getElementById("a_gst_vc").checked)
			{
				var n_rate=tot_pri;
				var gst=n_rate*0.18;
				var gst_rate=tot_pri+gst;
				tot_pri=gst_rate;
			}
			
			document.getElementById("result_vc_i").value=Math.round(tot_pri); // to fill input box
			document.getElementById("result_vc").innerHTML="The Estimated rate is    <span style=' background-color:black;'> Rs."+Math.round(tot_pri)+"</span>";		// to display result
			
			//alert(tot_pri);
		}
		function noticerate()
		{
		//alert("hai");
			// Qty inputs
			var pq=parseFloat(document.getElementById("PaperQuality_nts").value);
			var prt_sd=parseInt(document.getElementById("Printing_side_nts").value);
			var noclr=parseInt(document.getElementById("No_of_color_nts").value);
			var t_cpy=parseInt(document.getElementById("TotalCopy_nts").value);
			var pap_sz=parseInt(document.getElementById("Paper_size_nts").value);
			
			// Basic Rate's
			var composing=100*prt_sd; //+ with single or double side.
			var printing=100*prt_sd*noclr; //+ with single or double side + Single or Double Colour.
			var proof=50;
			var binding=50;
			
			// calculation of paper required
			var Maincopyrate=0;
			
			if (t_cpy>0)
			{ // for main copy
				//alert("Hai");
				var size=t_cpy;
				var set=size/pap_sz;//4;
				var quir;
			
				if (pq>5)				// lesser than  5 for calculation per paper
				{
					quir=set/24;
				
				}else
				{
					quir=size;
					
				}
				Maincopyrate=quir*pq;//*t_cpy;
				//alert(Maincopyrate);
			}
			
			
			var rate=Maincopyrate;
			
			// Incrementing the Rate for the composing and printing per 1000 copies + with single or double side + color.
			for (var i=1000;i<(t_cpy);i=i+1000)
				{
					composing = composing+(100*prt_sd);
					printing = printing+(100*prt_sd*noclr);
				}
			//alert(printing);
			var totalcost=(rate+composing+printing+binding+proof);
			var totalwith_profit=totalcost+(totalcost*0.30); // profit is added here
			
			// adding GST
			if (document.getElementById("a_gst_nts").checked)
			{
				var n_rate=totalwith_profit;
				var gst=n_rate*0.18;
				var gst_rate=totalwith_profit+gst;
				totalwith_profit=gst_rate;
			}
			
			//alert(totalwith_profit);
			document.getElementById("result_ntsi").value=Math.round(totalwith_profit); // to feed to nxt
			document.getElementById("result_nts").innerHTML="The Estimated Amt is    <span style=' background-color:black;'> Rs."+Math.round(totalwith_profit)+"</span>";	//	to display
				
		}
			
		function invtrate()
		{
			// varbile Quantites
			var noi=parseFloat(document.getElementById("TotalCopy_invt").value);
			var rrate=document.getElementById("Raw_rt").value; // String as Input 
			var noclr=parseInt(document.getElementById("No_of_color_inv").value);
      var typ_i=parseInt(document.getElementById("inv_card_typ").value);
			var bwi; // to know binding is involved or not 
			if(document.getElementById("Bwi").checked)
			{
				bwi=parseInt(document.getElementById("Bwi").value);
			}
			else
			{
				bwi=0;
			}
			
      // Inlizing the Prices as of now this the over all prices incluing the Composing,priting,masterm & profit for 1000 copies
      // Bubu,A4,Legal,A3 in below array
      const i_prz_A = [850,1250,1650,1950];
      const i_prz_B = [1100,1550,2000,2550];

      // Determining the Single or Double colour For Printing include all Charges
      if (noclr==1)
      {
        var i_wrk_prz = i_prz_A[typ_i];
      }
      else
      {
        var i_wrk_prz = i_prz_B[typ_i];
      }

      var f_wrk_prz =i_wrk_prz;
      // Incrementing the Rate for the  printing per 1000 copies 
			for (var i=1000;i<(noi);i=i+1000)
				{
					f_wrk_prz = f_wrk_prz+i_wrk_prz;
					
				}

      // Calcutating the raw card rate 
        var dummy = rrate;
        var dummy_len = dummy.length;

        var sample_code = "_uvwabcdefghijklmnopq";
        var ryt_d=0.0;	//sample_code.indexOf("e");
        var ryt=0;

        for ( var i=0;i<dummy_len;i++) //for converting String to number
        {
          var i_c=dummy.charAt(i).toLowerCase();
            
            if (i_c =="x")
            {var ryt_d= ryt_d+0.25;}
            else if (i_c =='y')
            {var ryt_d= ryt_d+0.5;}
            else if (i_c =='z')
            {var ryt_d= ryt_d+0.75;}
            else
            {
                ryt=sample_code.indexOf(i_c)+(ryt*10);        
            }
        }
        ryt=ryt+ryt_d;

        if (ryt<0)
            {
                var new_ryt=parseFloat(document.getElementById("Raw_rt").value);
                ryt=new_ryt;
            }
        document.getElementById("Raw_rt_result").value=ryt;

      var inv_rate_r= noi*ryt; // Final Card rate 



      // Final Rate
      var i_final_rate=inv_rate_r+f_wrk_prz;

      var i_single_crd_prz=i_final_rate/noi;
      var single_crd_prz = i_single_crd_prz.toFixed(1);

      var totalwith_profit =i_final_rate;

      ////////////////////////////////////////////////////////////////////////////////////////
      /* Moving to above logic to est price for invitation
			//var bwi=parseInt(document.getElementById("Bwi").value); // input as rate
			//alert(bwi);
			
			// Basic Rate's
			var composing=100; 
			var printing=100*noclr; 
			var proof=50;
			var binding=bwi;
			
			
			var prize=noi*rrate; 
			
			// Incrementing the Rate for the  printing per 1000 copies 
			for (var i=1000;i<(noi);i=i+1000)
				{
					composing = composing+100;
					printing = printing+(100*noclr);
					binding = binding + bwi;
					
				}
			
			var totalcost=(prize+composing+printing+binding+proof);
			var totalwith_profit=totalcost+(totalcost*0.30); // profit is added here
			*/

			// adding GST
			if (document.getElementById("a_gst_inv").checked)
			{
				var n_rate=totalwith_profit;
				var gst=n_rate*0.18;
				var gst_rate=totalwith_profit+gst;
				totalwith_profit=gst_rate;
			}
			
			//alert(totalwith_profit);
			document.getElementById("result_inv").value=Math.round(totalwith_profit);	 // to feed nxt process
			document.getElementById("result_invt").innerHTML="Is the Total Amount & Per Card Rs - "+single_crd_prz;		// to display
            //document.getElementById("result_invt").innerHTML="The Estimated Amt is    <span style=' background-color:black;'> Rs."+Math.round(totalwith_profit)+"</span> & Single card Cost of <span style=' background-color:blue;'> Rs - "+single_crd_prz+" </span>";		// to display
		}		
		
		function flex_rate()
		{
			var cps=parseInt(document.getElementById("flex_cps").value);
			var len=parseInt(document.getElementById("flex_l").value);
			var wid=parseInt(document.getElementById("flex_w").value);
			var qul=parseInt(document.getElementById("flex_qua").value);
			
			var siz=len*wid;
			var prc1= siz*qul;
			var prc= cps*prc1;
			
			var totalwith_profit=prc;
			document.getElementById("flex_rr").value=Math.round(totalwith_profit);
		}
		
