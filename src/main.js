$(".delete").click( () => {
    console.log("Hey, that was easy!")
});
$(".delete").hover( function () {
    $(this).toggleClass("isBlue")
});

$("#destroyer").click( function() {
        $(".song-container").toggle()
        $(this).toggleClass("isRed").text("Hi, John")
})


// Select second of two things with this class
$(".article--main").eq(1).addClass("isRed")

$(".article--main").hover( function() {
    $(this).toggleClass("isBlue")
});


