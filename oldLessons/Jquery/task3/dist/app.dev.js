"use strict";

element = "";
counter = 0;
$("button").click(function () {
  $.ajax({
    url: "http://jsonplaceholder.typicode.com/todos?type=main",
    type: "GET",
    dataType: "json",
    success: function success(result) {
      console.log(result.completed);
      console.log(result);

      for (var i = 0; i < result.length; i++) {
        element += "<div class=\"d-flex justify-content-between border rounded p-2 my-2 align-items-center\"><input type=\"checkbox\" ".concat(checked = 'checked' ? result[i].completed == true : result, " ><p class=\"m-0 p-0\">").concat(result[i].title, "</p></div>");
        counter++;
        $("#Counter").html(counter);
      }

      $("#result").html(element);
    }
  });
});