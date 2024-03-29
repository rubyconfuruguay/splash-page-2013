function animation(){
    sun_raft();
    $(".ufo img.light").animate({opacity: '1' }, {queue:false, duration:1200, easing:'easeOutBounce'});
    $(".participants span").animate({opacity: '1' }, {queue:false, duration:2000, easing:'easeOutBounce'});
}

function sun_raft(){
    $(".ufo").animate({top:"-=8px"},1000).animate({top:"+=8px"}, 1000);
    setTimeout(sun_raft, 2000);
}

$(document).ready(function () {
    $('.ufo img').plaxify()
    $.plax.enable()

    $('.register ul li').click(function(){
        var selectedItem = $(this).attr('class').split(' ')[0];
        if(!$(this).hasClass('active')){
            var class2clear = $('.participants').attr('class').split(' ')[1];
            $('.register ul li').removeClass('active')
            $('.participants').addClass(selectedItem);
            $(this).addClass('active');
            $('.participants span').css('opacity','0');
            $('.ufo img.light').css('opacity','0');
            $('.participants').removeClass(class2clear);
            $('.participants span').animate({opacity: '1' }, {queue:false, duration:1200, easing:'easeOutBounce'});
            $(".ufo img.light").animate({opacity: '1' }, {queue:false, duration:1200, easing:'easeOutBounce'});
            $('.regContent').addClass(selectedItem);
            $('.regContent').find("div").css('display', 'none');
            var selectedItemLink = selectedItem + "Link";

            if (selectedItem === "atendee") {
                selectedItemLink = selectedItem + "Form";
            }
            $('.regContent').find("." + selectedItemLink).css('display', 'block');
            $('.regContent').removeClass(class2clear);
            return false;
        }
    });

    $("#time1").countdown({
        htmlTemplate: "<li><span class=\"cd-time\">days</span> <strong>%d</strong></li> <li><span class=\"cd-time\">hours</span> <strong>%h</strong></li> <li><span class=\"cd-time\">mins</span> <strong>%i</strong></li> <li><span class=\"cd-time\">sec</span> <strong>%s</strong></li>",
        date: "03/22/2013 09:00:00",
        offset: 1,
        onChange: function( event, timer ){
        },
        onComplete: function( event ){
            $(this).html("It is on!");
        },
        onPause: function( event, timer ){
            $(this).html("Pause");
        },
        onResume: function( event ){
            $(this).html("Resumed");
        },
        hoursOnly: false,
        minsOnly: false,
        leadingZero: true
    });

    setTimeout(animation, 300);
});
