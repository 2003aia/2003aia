$("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $("#nav").toggleClass("active");
});