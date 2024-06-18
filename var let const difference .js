  
//   <--- variable  difference ---->
  
  var a = 1;
    var b1 = "manoj";
    // var a = 0;
    // c= 5;
    document.write(a ,'<br>');//global variable
    // document.write(b);
    if(true){
        b= "nothing";
     
        document.write(b ,"<br>");
      //  document.write(b,"<br>"); //local variable 
    }
    document.write(b);



    //      <------let variable difference ------->


    let a= 1;

    let d= "manoj";
    let c= 1;
    document.write(a,'<br>');
    document.write(b,'<br>');
    if(true){
        d= "killer";
        document.write(d,'<br>');

    }

    document.write(d,'<br>');



         //    <-------- const difference -----------> 

   const a = 1;

    if(true){
    const a = 2;

    document.write(a,"<br>");
   }
   document.write(a);



    

