$(document).ready(function(){
    $('.after').click(function(){
        $('.kotak').after("<h4>contoh after</h4>")
    });

    $('.before').click(function(){
        $('.kotak').before("<h4>contoh before</h4>")
    });

    $('.append').click(function(){
        $('.kotak').append("<h4>contoh append</h4>")
    });

    $('.prepend').click(function(){
        $('.kotak').prepend("<h4>contoh prepend</h4>")
    });
});