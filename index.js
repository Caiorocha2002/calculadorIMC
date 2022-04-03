

 


 function result(){
   
     var heightElement= document.getElementById("height");
      var height= heightElement.value;

       var weightElement= document.getElementById("weight");
       var weight= weightElement.value;
 
     var calculation= weight/(height*height);
     var imc = parseInt(calculation);
    
     var elementValueResult= document.getElementById("result");
     var resultImc= " O valor do resultado do seu IMC  é = a " + imc + " compare o com os dados abaixo.";
     elementValueResult.innerHTML= resultImc;
 
    }