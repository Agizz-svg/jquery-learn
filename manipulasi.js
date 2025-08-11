$(document).ready(function(){
    $('#tambah').click(function(){
        $('.lingkaran').addClass('biru');
        $('.pesan').text('class biru di tambahkan');
    });

    $('#hapus').click(function(){
        $('.lingkaran').removeClass('biru');
        $('.pesan').text('class biru di hapus');
    });
});