$(document).ready ( function () {

  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });




  $(".table-row:has(input:checked)").css("background-color", "rgba(6, 178, 245, 0.16)"); 

  $(".table-row:has(input:disabled)").css("opacity", "0.5"); 
});




//Menu

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show-menu");
}

window.onclick = function(event) {
if (!event.target.matches('.menu__button')) {

  let dropdowns = document.getElementsByClassName("sidebar");
  let i;
  for (i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show-menu')) {
      openDropdown.classList.remove('show-menu');
    }
  }
};

} 