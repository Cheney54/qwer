$("#box").fullpage({
    verticalCentered: false,
    // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90', '#f90', '#f90'],
    anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],

    scrollingSpeed: 1000,
    continuousVertical: true,
    fixedElements:".menu",
    menu:".menu",
    afterLoad:function (anchor,index) {
        if (index===1){
            $(".my").css("transform","translateY(0)")
            $(".no h2").css("transform","translateX(0)")
            $(".no p").css("transform","translateX(0)");
            $(".suml p").css("transform","translateY(0)");
        }
        if(index===2){
            $(".threeleft").css("transform","translateX(0)");
            $(".threeright").css("transform","translateX(0)");
        }
        if(index===3){
            $(".swiper-container").css("transform","translateX(0)");
            $(".swiper-wrapper").css("transform","translateX(0)");
        }
        if (index === 6) {
            $(".callq p").transition({y: 0});
            $(".callq h1").transition({x: 0});
            $(".callq .input").transition({x: 0});
            $(".callq h2").transition({x: 0});
            $(".callq h3").transition({x: 0});
        }

    },
    onLeave:function (index,direction) {
        if (index===1){
            $(".my").css("transform","translateZ(-250px)")
            $(".no h2").css("transform","translateX(-1000px)")
            $(".no p").css("transform","translateX(1000px)");
            $(".suml p").css("transform","translateZ(250px)");
        }
        if(index===2){
            $(".threeleft").css("transform","translateX(-1000px)");
            $(".threeright").css("transform","translateX(1000px)");
        }
        if(index===3){
            $(".swiper-container").css("transform","translateX(-1000px)");
            $(".swiper-wrapper").css("transform","translateX(-1000px)");
        }
        if (index === 6) {
            $(".callq p").transition({y: -1300});
            $(".callq h1").transition({x: 1300});
            $(".callq .input").transition({x: -1300});
            $(".callq h2").transition({x: 1300});
            $(".callq h3").transition({x: 1300});
        }
    }





});
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});