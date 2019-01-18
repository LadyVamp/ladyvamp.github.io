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



//Расчет
$(function () {
    $(".calculate").on("click", function () { //при нажатии на кнопку
        var consumption = parseInt($('.consumption').val()); 
        var power = parseInt($('.power').val()); 
        var member = parseInt($('.member').val()); 
        var day = parseInt($('.day').val()); 
        var dinner = parseInt($('.dinner').val()); 

        console.log('consumption = ', consumption);
        console.log('power = ', power);
        console.log('member = ', member);
        console.log('day = ', day);
        console.log('dinner = ', dinner);

        var result = 0;
        //грамм на человека
        // gmember = consumption/15; //    BRS 3000t: 140/15 = 9.3
                                    //Quick Track 185/25 = 7.4
        //todo select с известными значениями горелок. switch-case и подставлять константы
        //мощность / расход газа
        powercons = power/consumption;
        console.log('powercons = ', powercons);
        result = (member * dinner * day * powercons).toFixed(2);
        // result = (member * dinner * day * gmember).toFixed(2); //для brs и quick track
        console.log('result = ', result);
        $('#result').val(result);


    });
});


//Генератор
/*$(function () {
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
*/