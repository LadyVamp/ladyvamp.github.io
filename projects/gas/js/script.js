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
        var consumption = parseInt($('.consumption').val()); //Расход газа горелки заявленный, г/час
        var power = parseInt($('.power').val());             //Мощность горелки заявленная, Вт
        var person = parseInt($('.person').val());           //Кол-во участников 
        var day = parseInt($('.day').val());                 //Кол-во дней
        var dinner = parseInt($('.dinner').val());           //Кол-во приемов пищи в день

        console.log('consumption = ', consumption);
        console.log('power = ', power);
        console.log('person = ', person);
        console.log('day = ', day);
        console.log('dinner = ', dinner);

        var result = 0;
        var resultBallon = 0; //кол-во баллонов
        //грамм на человека
        // gperson = consumption/15; //    BRS 3000t: 140/15 = 9.3
                                    //Quick Track 185/25 = 7.4
        //todo select с известными значениями горелок. switch-case и подставлять константы
        //мощность / расход газа
        powcons = power/consumption;
        console.log('power/consumption = ', powcons);
        result = (person * dinner * day * powcons).toFixed(2);
      resultBallon = (person * dinner * day * powcons/450).toFixed(2);
        // result = (person * dinner * day * gperson).toFixed(2); //для brs и quick track
        console.log('result = ', result);
        $('#result').val(result);
       console.log('resultBallon = ', resultBallon);
        $('#resultBallon').val(resultBallon);

    });
});



//Расчет с известной горелкой
$(function () {
    $(".calculateBurner").on("click", function () { //при нажатии на кнопку
        // var consumption = parseInt($('.consumption').val()); //Расход газа горелки заявленный, г/час
        // var power = parseInt($('.power').val());             //Мощность горелки заявленная, Вт
        var person = parseInt($('.person').val());           //Кол-во участников 
        var day = parseInt($('.day').val());                 //Кол-во дней
        var dinner = parseInt($('.dinner').val());           //Кол-во приемов пищи в день
        var burner = document.getElementById("selectBurner"); //Расход газа на человека в день, если известна модель горелки
        var consumptionPersonDay = burner.value;
        console.log('consumptionPersonDay = ', consumptionPersonDay);
        console.log('person = ', person);
        console.log('day = ', day);
        console.log('dinner = ', dinner);

        var resultBurner = 0;
        var resultBurnerBallon = 0;
        resultBurner = (person * dinner * day * consumptionPersonDay).toFixed(2);
       resultBurnerBallon = (resultBurner/450).toFixed(2);
        console.log('resultBurner = ', resultBurner);
        $('#resultBurner').val(resultBurner);
       console.log('resultBurnerBaloon = ', resultBurnerBallon);        $('#resultBurnerBallon').val(resultBurnerBallon);

    });
});



