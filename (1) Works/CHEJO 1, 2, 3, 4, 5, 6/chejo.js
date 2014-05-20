window.onload = function() {

  var links = document.getElementsByTagName("li");

  for(var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      document.getElementById("content-frame").src = this.getAttribute("data-link");
    }
  }

};


    $('.fancybox-thumbs').fancybox({
                prevEffect : 'none',
                nextEffect : 'none',

                closeBtn  : false,
                arrows    : false,
                nextClick : true,

                helpers : {
                    thumbs : {
                        width  : 50,
                        height : 50
                    }
                }
            });