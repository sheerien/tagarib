//First way
$(document).ready(function() {
    // // click : mouseEnter: mouseLeave
    // $("#btn").click(function() {
    //     // $(".item").hide()
    //     // $(".item").show()
    //     // $(".item").toggle()
    //     // $(".item").fadeOut()
    //     // $(".item").fadeIn()
    //     // $(".item").fadeToggle()
    //     // $(".item").slideUp()
    //     // $(".item").slideDown()
    //     // $(".item").slideToggle()
    //     $(".item").animate({
    //         left: "100px"
    //     }, 2000)
    // })

    // $("#btn2").click(function() {
    //     $(".item").slideUp(5000);
    // })
    // $("#btn3").click(function() {
    //     $(".item").stop();
    // })

    // // $(".applyCss").css("color", "red")
    // // $(".applyCss").css({
    // //     color: "red",
    // //     background: "green"

    // // })
    // $(".applyCss").addClass("test")
    //     .delay(2000)
    //     .queue(function() {
    //         $(this).removeClass('test')
    //     })

    // let dimDiv = $("section").width()
    // let innDiv = $("section").innerWidth()
    // let outDiv = $("section").outerWidth()
    // let marginDiv = $("section").outerWidth(true)
    // console.log(dimDiv)
    // console.log(innDiv)
    // console.log(outDiv)
    // console.log(marginDiv)
    // let diDiv = $("section").height()
    // let inDiv = $("section").innerHeight()
    // let outtDiv = $("section").outerHeight()
    // let margnDiv = $("section").outerHeight(true)
    // console.log(diDiv)
    // console.log(inDiv)
    // console.log(outtDiv)
    // console.log(margnDiv)

    // let divText = $("div.demo").text() //get
    // let divHTML = $("div.demo").html() //get
    // let inpValue = $("input").val(); //get
    // console.log(divText)
    // console.log(divHTML)
    // console.log(inpValue)
    // ADD DATA
    // $(".ele").append(" this is append text")
    // $(".ele").prepend(" this is prepend text")
    // $(".ele").after(" this is after text")
    $(".ele").before(" this is before text")

    //Traversing
    // $("span").parent().css("border", "2px solid red");
    // $("span").parents().css("border", "2px solid red");
    // $("span").parents("ul").css("border", "2px solid red");
    // $("span").parentsUntil("div").css("border", "2px solid red");
    // $(".trave").children().css("border", "2px solid red"); // direct child
    // $(".trave").children("p").css("border", "2px solid red"); // direct child
    // $(".trave").find('p').css("border", "2px solid red"); // search
    // $(".trave section").siblings('p').css("border", "2px solid red"); // search
    // $(".trave section p").first('p').css("border", "2px solid red"); // search
    // $(".trave section p").last('p').css("border", "2px solid red"); // search
    $(".trave section p").eq(0).css("border", "2px solid red"); // search

    $("ul li a").on('click', function(e) {
        // console.log(e.target)
        // $(this).addClass('active').siblings().removeClass('active')
        // $(this).css('background', 'yellow').siblings().css('background', 'blue')
        $(this).css('background', 'yellow').parent().siblings().find('a').css('background', 'blue')
    })

    // $(window).scroll(function() {
    //     let w = $(window).scrollTop()
    //     let s = $('.About').offset().top
    //         // console.log(w)
    //         // console.log(s)

    //     if (w >= s) {
    //         $('.About').css('background', 'red')
    //     } else {
    //         $('.About').css('background', 'blue')
    //     }
    // })

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $('.scrolling').show();
        } else {
            $('.scrolling').hide();

        }
    })

    $('.scrolling').click(function() {
        $('html, body').animate({
            scrollTop: 0
        })
    })

    $("ul li a").click(function() {
        let target = $(this).attr('data-target');
        $(".main div").hide();
        $('.' + target).fadeIn();

    })


});
// //Second way
// $(function() {
//     console.log("jquery second way is ready ...")
// });

function newToggle(selector) {
    if (selector.style.display == "none") {
        selector.style.display = "block"
    } else {
        selector.style.display = "none"
    }
}