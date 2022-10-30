// Login Form

$(function() {
    var button = $('#login-trigger');
    var box = $('#login-box');
    var form = $('#login-form');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#login-trigger').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});

$(function() {
    var button = $('#admin-trigger');
    var box = $('#admin-box');
    var form = $('#admin-form');
    button.removeAttr('href');
    button.mouseup(function(admin) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(admin) {
        if(!($(admin.target).parent('#admin-trigger').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});
