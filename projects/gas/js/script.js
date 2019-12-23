//Расчет
$(function() {
    $(".calculate").on("click", function() { //при нажатии на кнопку
        var consumption = parseInt($('.consumption').val()); //Расход газа горелки заявленный, г/час
        var power = parseInt($('.power').val()); //Мощность горелки заявленная, Вт
        var person = parseInt($('.person').val()); //Кол-во участников 
        var day = parseInt($('.day').val()); //Кол-во дней
        var dinner = parseInt($('.dinner').val()); //Кол-во приемов пищи в день
        var result = 0;
        var resultBallon = 0; //кол-во баллонов
        //грамм на человека
        // gperson = consumption/15; //    BRS 3000t: 140/15 = 9.3
        //Quick Track 185/25 = 7.4
        //мощность / расход газа
        powcons = power / consumption;
        result = (person * dinner * day * powcons).toFixed(2);
        resultBallon = (person * dinner * day * powcons / 450).toFixed(2);
        // result = (person * dinner * day * gperson).toFixed(2); //для brs и quick track
        // console.log('result = ', result);
        $('#result').val(result);
        // console.log('resultBallon = ', resultBallon);
        $('#resultBallon').val(resultBallon);

    });
});



//Расчет с известной горелкой
$(function() {
    $(".calculateBurner").on("click", function() { //при нажатии на кнопку
        // var consumption = parseInt($('.consumption').val()); //Расход газа горелки заявленный, г/час
        // var power = parseInt($('.power').val());             //Мощность горелки заявленная, Вт
        var person = parseInt($('.person').val()); //Кол-во участников 
        var day = parseInt($('.day').val()); //Кол-во дней
        var dinner = parseInt($('.dinner').val()); //Кол-во приемов пищи в день
        var burner = document.getElementById("selectBurner"); //Расход газа на человека в день, если известна модель горелки
        var consumptionPersonDay = burner.value;
        var resultBurner = 0;
        var resultBurnerBallon = 0;
        resultBurner = (person * dinner * day * consumptionPersonDay).toFixed(2);
        resultBurnerBallon = (resultBurner / 450).toFixed(2);
        // console.log('resultBurner = ', resultBurner);
        $('#resultBurner').val(resultBurner);
        // console.log('resultBurnerBaloon = ', resultBurnerBallon);
        $('#resultBurnerBallon').val(resultBurnerBallon);
    });
});