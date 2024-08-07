$(document).ready(function () {
  $(".service-item").on("click", function () {
    $(".service-item").removeClass("active");
    $(this).addClass("active");

    const serviceId = $(this).data("service");
    $(".service-description").removeClass("active");
    $(`#${serviceId}`).addClass("active");
  });

  $("#brand-strategy").addClass("active");
});
