window.onload = function() {

  var links = document.getElementsByTagName("li");

  for(var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      document.getElementById("content-frame").src = this.getAttribute("data-link");
    }
  }

};