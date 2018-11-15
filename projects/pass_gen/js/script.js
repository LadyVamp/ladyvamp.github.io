function validate(evt) { //только цифры в input
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }

};

$(document).ready(function () { //Действие при загрузке страницы
    new ClipboardJS('.btn-clipboard');
}
);

function generate(len, dic) {
    var pass = "";
    for (var i = 0; i < len; i++) {
        pass += dic.charAt(Math.floor(Math.random() * dic.length));
    }
    console.log(pass);
    $('#result').val(pass);
}

//Генератор
$(function () {
    $(".generator").on("click", function () { //при нажатии на кнопку
        var len = parseInt($('#len').val()); //взять длину пароля из input
        var dic = "";
        var radioValue = $("input:radio[name=radio]:checked").val(); //взять тип словаря из radiobtn

        switch (radioValue) {
            case 'digit':
                dic = "1234567890";
                break;
            case 'upperCase':
                dic = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
                break;
            case 'lowerCase':
                dic = "abcdefghijklmnopqrstuvwxyz";
                break;
            case 'all':
                dic = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
                break;
            case 'allAndSpec':
                dic = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
                break;
            default:
                dic = "abcdefghijklmnopqrstuvwxyz1234567890";
                break;
        }
        generate(len, dic);

    });
});

