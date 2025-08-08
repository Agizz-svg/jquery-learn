$(document).ready(function(){
    $('#tombol').click(function(){
        $('.box').slideDown();
    });

    $('#tombol2').click(function(){
        $('.box').slideUp();
    });

    $('#tombol3').click(function(){
        $('.box').slideToggle();
    });
});