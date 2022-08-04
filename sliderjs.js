$(document).ready(function(){
    $('.carousel').carousel();

    // membuat fungsi untuk klik prev
    $('.prev').click(function(){
            $('.carousel').carousel('prev');
        });

    // membuat fungsi untuk klik next
        $('.next').click(function(){
            $('.carousel').carousel('next');
        });
});