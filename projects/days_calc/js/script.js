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

var options = { //для форматирования result
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC'
};

$(document).ready(function () {//инициализация datepicker'ов при загрузке страницы
    $('#datepicker').datepicker();
    $('#datepicker2').datepicker();
    $('#datepicker3').datepicker();
    $('#datepicker4').datepicker();
}
);

//Прибавить количество дней
$(function () {
    $(".addDays").on("click", function () { //по нажатию на кнопку
        if ($('#datepicker').val() != "") {
            var amount = parseInt($('#numOfDays').val());
            var result = $.datepicker.parseDate('mm/dd/yy', $('#datepicker').val());
            result.setDate(result.getDate() + amount);
            $('#resultDate').val(result.toLocaleString("ru", options));

            //форматирование исходной даты и вывод в консоль
            var startDateCopy = $("#datepicker").val(); //скопировали 10/24/2018
            startDateforConsole = startDateCopy.replace(/^(\d{2}).(\d{2}).(\d{4})/, '$2.$1.$3');
            console.log(startDateforConsole + ' + ' + amount + ' = ' + result.toLocaleString("ru", options));

        }
    });
});

//Отнять количество дней
$(function () {
    $(".subtractDays").on("click", function () {
        if ($('#datepicker2').val() != "") {
            var amount = parseInt($('#numOfDays2').val());
            var result = $.datepicker.parseDate('mm/dd/yy', $('#datepicker2').val());
            result.setDate(result.getDate() - amount);
            $('#resultDate2').val(result.toLocaleString("ru", options)); //четверг, 25 октября 2018 г.

            //форматирование исходной даты и вывод в консоль
            var startDateCopy = $("#datepicker2").val();
            startDateforConsole = startDateCopy.replace(/^(\d{2}).(\d{2}).(\d{4})/, '$2.$1.$3');
            console.log(startDateforConsole + ' + ' + amount + ' = ' + result.toLocaleString("ru", options));

        }
    });
});

//Кол-во дней между датами
$(function () {
    $(".countDays").on("click", function () {
        if (($('#datepicker3').val() == "") || ($('#datepicker4').val() == "")) {
            console.log('Даты не выбраны');
        }

        else if (($('#datepicker3').val() != "") && ($('#datepicker4').val() != "")) {
            var date1 = $.datepicker.parseDate('mm/dd/yy', $('#datepicker3').val());
            var date2 = $.datepicker.parseDate('mm/dd/yy', $('#datepicker4').val());
            result = Math.abs((date2 - date1) / 86400000);
            $('#resultCount').val(result);

            //форматирование и вывод в консоль
            date1ForConsole = $("#datepicker3").val().replace(/^(\d{2}).(\d{2}).(\d{4})/, '$2.$1.$3');
            date2ForConsole = $("#datepicker4").val().replace(/^(\d{2}).(\d{2}).(\d{4})/, '$2.$1.$3');
            console.log('date1: ' + date1ForConsole + ', date2: ' + date2ForConsole + ', result: ' + result);
        }

    });
});