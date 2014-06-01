function load_json(src) {
  var head = document.getElementsByTagName('head')[0];

  //use class, as we can't reference by id
  var element = head.getElementsByClassName("json")[0];

  try {
    element.parentNode.removeChild(element);
  } catch (e) {
    //
  }

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.className = "json";
  script.async = false;
  head.appendChild(script);

  //call the postload function after a slight delay to allow the json to load
  window.setTimeout(postloadfunction, 100)
}