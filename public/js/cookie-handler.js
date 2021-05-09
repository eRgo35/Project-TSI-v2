function getCookie(e) {
  var name = e + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}
if (getCookie("theme") == "") {
  document.getElementById("theme").href = "css/blue.css";
}
else {
  document.getElementById("theme").href = "css/" + getCookie("theme") + ".css";
}