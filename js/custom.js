$(document).ready(function(){
    $('.expandTable').hide();
    $('.mobileService').hide();
    $('.expandUpwork').hide();
    $('.expandUpworkPro').hide();
    $('.expandUpworkEnterprise').hide();

});

var width = $(window).width();
if(width>991){
    $('.PrimaryControl').click(function(){
        $('.expandTable').slideToggle('slow');
    });
}else if(width<768){
    $('.upwork').click(function(){
        $('.expandUpwork').slideToggle('slow');
    });
    $('.upworkPro').click(function(){
        $('.expandUpworkPro').slideToggle('slow');
    });
    $('.upworkEnterprise').click(function(){
        $('.expandUpworkEnterprise').slideToggle('slow');
    });
}
else{
    $('.PrimaryControl').click(function(){
        $('.mobileService').slideToggle('slow');
    });
}
if(width>768 ){
    var highestCol = Math.max($('.upwork').height(),$('.upworkPro').height(),$('.upworkEnterprise').height());
    $('.upwork').height(highestCol);
    $('.upworkPro').height(highestCol);
    $('.upworkEnterprise').height(highestCol);
}


function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

$(document).ready(function(){
    $('.browse').hide();
    $('.aboutUs').hide();
});

$('#browseExpand').click(function(){
    $('#browse').addClass('expand');
    $('.browse').slideToggle('slow');
    $('#browseExpand').click(function(){
        $('#browse').removeClass('expand');
    });
});

$('#aboutUsExpand').click(function(){
    $('#aboutUs').addClass('expand');
    $('.aboutUs').slideToggle('slow');
    $('#aboutUsExpand').click(function(){
        $('#aboutUs').removeClass('expand');
    });

});

$('.mobileMenu').click(function(){
    $('#menu').addClass('active');
});
$('.closeMenu').click(function(){
    $('#menu').removeClass('active');
});

$('.footerItem').click(function(){
   $(this).find("div").slideToggle('slow');
});
