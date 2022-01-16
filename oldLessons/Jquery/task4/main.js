$(document).ready(function () {
  $(".number").click(function(){
    var value1 = $( this ).val();
    var value2 = $( ".result-input" ).val();
      $( ".result-input" ).val( value2+value1);
    });
    
    $(".reset").click(function(){
    $( ".result-input" ).val("");
    });
    
    $(".opt").click(function(){
    var value1 = $( this ).val();
    var value2 = $( ".result-input" ).val();
      $( ".result-input" ).val( value2+value1);
    });
    $(".equal").click(function(){
      var value2 = eval($( ".result-input" ).val());
      $( ".result-input" ).val( value2);
      });
});
