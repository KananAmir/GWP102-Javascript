// const heading = document.querySelector("h1");
// console.log(heading.textContent);

console.log($("h1")[0].textContent);

// $(".click-me")[0].addEventListener("click", function () {
//   console.log("hello");
// });

$(".click-me").on("click", function () {
  //   console.log(this.textContent);
  //   $("h1").css({ color: "red", backgroundColor: "teal" });

  //   $("h1").hide();
  //   $("h1").show();
  $("h1").toggle(2000, function () {
    console.log("finished");
  });
  $("input").val("");
});

$(".accordion-heading").on("click", function () {
  //   $(".accordion-content").fadeOut(2000);
  //   $(".accordion-content").fadeIn(2000);
  //   $(".accordion-content").toggle("slow");
  //   $(".accordion-content").fadeTo("slow", 0);
  //   $(".accordion-content").slideUp();
  //   $(".accordion-content").slideDown();
  //   $(".accordion-content").slideToggle(3000);
});

$(".box").css({
  width: "100px",
  height: "100px",
  backgroundColor: "teal",
  position: "relative",
});

// $(".animate-me").on("click", function () {
//   $(".box").animate({ left: "200px" }, function () {
//     $(".box").animate({ left: "0px" });
//   });
// });

$(".animate-me").on("click", function () {
  $(".box").animate({ left: "200px" }, 3000, function () {
    $(".box").animate({ top: "100px" });
  });
});

$(".accordion-content")
  .css({ color: "red", fontSize: "24px" })
  .slideUp(3000)
  .slideDown(1000)
  .animate({ left: "200px" }, 2000);

// text();
// html();
// val();
// console.log($(".accordion-content").text());
// console.log($(".accordion-content").html("lorem ipsum"));
console.log($(".accordion-content").text("lorem ipsum"));

$("input").on("input", function (event) {
  //   console.log(event.target.value);
  console.log($("input").val());
  $("h1").remove();
  //   $("h1").empty();
});

$(".text").each((index, element) => {
  console.log(element);
});
