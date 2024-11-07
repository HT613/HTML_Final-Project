function init(){
//add your javascript between these two lines of code
  var button = document.getElementById("entrybutton");
 

  function changeText() {
    var textbox = document.getElementById("entryinput");
    document.getElementById("textoutput").innerHTML = textbox.value;
    alert("Henry Tran: " + textbox.value);
  }


  button.addEventListener("click", changeText);
}

window.addEventListener("load", init);
