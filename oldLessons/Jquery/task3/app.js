element = ``;
counter = 0;

$("button").click(function () {
  $.ajax({
    url: "http://jsonplaceholder.typicode.com/todos?type=main",
    type: "GET",
    dataType: "json",
    success: function (result) {
      console.log(result[1].completed);
      console.log(result);
      for (let i = 0; i < result.length; i++) {
        element += `<div class="d-flex justify-content-between border rounded p-2 my-2 align-items-center"><input type="checkbox"  ${result[i].completed === true? 'checked': ''}><p class="m-0 p-0">${result[i].title}</p></div>`;
        counter++;
        $("#Counter").html(counter);
      }

      $("#result").html(element);
    },
  });
});
