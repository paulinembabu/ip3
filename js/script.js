$(document).ready(function() {
    $("#sub").click(function(event) {
      event.preventDefault();
      var choosenNumber = $("input#number").val();
      var num=[];
      // find range and store it in our empty array
      for (i=1;i<=choosenNumber; i++){
        num.push(i)
      }
      for(index=0;index<num.length;index++){
         if(num[index] % 15===0){
          num[index] = "pingpong";
      }
      else if(num[index]%5===0){
         num[index]="pong";
      }
      else if (num[index]% 3===0){
         num[index]="ping";
      }
      }
      
      for (var i =0; i <= num.length; i++) {
        $("ul").append("<ul>"+num[i]+"</ul>");
      }

      
    });

  });