$('li').click(function() {
  if ($(this).css('color') === 'rgb(128, 128, 128)') {
    $(this).css({
      color: 'black',
      textDecoration: 'none'
    });
  } else {
    $(this).css({
      color: 'gray',
      textDecoration: 'line-through'
    });
  }
});
$('#semangat').append(
  "<audio controls autoplay hidden> <source src='assets/css/semangat.mp3' type='audio/mpeg' /></audio>"
);
// lengkapi jquery untuk menlist hasil dari todolist yang di inputkan
function id1303170041() {
  //  code Here...

  var li = document.createElement("li");
  var inputValue = document.getElementById("myinput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
 if (inputValue === '') {
    alert("Harap diisi dulu kakak kotaknya");
  } else {
  document.getElementById("todos").appendChild(li);
  }
  document.getElementById("plus").value="";
  }
