function submitForm() {
  document.getElementById("subscribe-successful-dialog").style.display = "flex"; //show dialog
  setTimeout(function () {
    document.getElementById("subscribe-successful-dialog").style.opacity = 1;
  }, 10); // set a little delay to keep animation
  return false;
}

function confirmSubmit() {
  document.getElementById("subscribe-successful-dialog").style.opacity = 0;
  setTimeout(function () {
    document.getElementById("subscribe-successful-dialog").style.display =
      "none";
  }, 500); // hide after 0.5s for the animation
}
