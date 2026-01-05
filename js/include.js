function loadHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => document.getElementById(id).innerHTML = data);
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("site-head", "/includes/head.html");
  loadHTML("site-header", "/includes/header.html");
  loadHTML("site-footer", "/includes/footer.html");

  // SEO dynamic values
  if (document.title === "") {
    document.title = "Tripura Sarkari | Latest Govt Jobs in Tripura";
  }
});
