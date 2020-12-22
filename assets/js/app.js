$(document).ready(() => {
    gsap.from([".loader-commas"], {visibility: 1, opacity: 1, duration: 2, repeat: -1, ease: "strong.inOut", yoyo: true});

    setTimeout(()=>{
        gsap.to(".loader", {duration: 1, autoAlpha: 0});
    }, 3000)

    setTimeout(()=>{
        gsap.from([".hello-world", ".name-title", ".job-title", ".presentation"], { visibility:0 ,opacity: 0, duration: 1, y: 20, ease: 'strong.inOut'});
        gsap.from([".sub-liner"], {visibility: 0, opacity: 0, duration: 3, y: 90});
        gsap.from([".left-menu>a"], {visibility: 0, opacity: 0, x: -10, stagger: 0.2, ease: 'strong.inOut', duration: 2});
        gsap.from([".left-social>a"], {visibility: 0, opacity: 0, duration: 1, y: 50, stagger: 0.5});
        gsap.from([".right-email"], {visibility: 0, opacity: 0, duration: 2, x: 70, ease: 'strong.inOut', stagger:1});
        gsap.from(".work-btn", {visibility: 0, opacity: 0, duration: 5, x: 50, ease: 'strong.inOut', onComplete: ()=>{gsap.from(
                ".work-btn", {repeat:-1, runBackwards:true, x: -25, visibility: 0, opacity: 0, duration: 2}
            )}})
    }, 4010);

});

/*
    Mouse animation
 */

    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0;

    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    $(".left-menu>a").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
    });
    $(".left-menu>a").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
    });

    $(".right-email>a").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
    });
    $(".right-email>a").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
    });

/*
    End Mouse animation
 */