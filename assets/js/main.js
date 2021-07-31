$(document).ready(function() {
    $('.side_menu').click(function() {
        var name = $(this).attr('id');
        
        if (name == "task") {
            $('.side_menu').removeClass('active');
            $('.isi').load('task.html');
            $('#task').addClass('active');
        } else if (name == "profile") {
            $('.side_menu').removeClass('active');
            $('.isi').load('profile.html');
            $('#profile').addClass('active');
        }
    });
    // halaman yang di load default pertama kali
    $('.isi').load('task.html');
    $('#task').addClass('active');
});
