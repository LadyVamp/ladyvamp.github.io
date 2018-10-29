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

// function setFocus(dp) {
//     document.getElementById(dp).focus();
// }


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
            // $('#resultDate').val(result.toLocaleString("ru", options)); //четверг, 25 октября 2018 г.

            //форматирование начальной даты, раньше нельзя: Uncaught Unexpected literal at position 2
            // var startDateCopy = $("#datepicker").val(); //скопировали 10/24/2018
            // $('#datepicker').val(startDateCopy.replace(/^(\d{2}).(\d{2}).(\d{4})/, '$2.$1.$3')); //24.10.2018

            $('#resultDate').val(result.toLocaleString("ru", options)); //четверг, 25 октября 2018 г.

        }
        else if ($('#datepicker').val() == "") {
            console.log('Выберите начальную дату!');
            // setFocus('datepicker');
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
            //форматирование начальной даты, раньше нельзя: Uncaught Unexpected literal at position 2
            // var startDateCopy = $("#datepicker").val(); //скопировали 10/24/2018
            // $('#datepicker').val(startDateCopy.replace(/^(\d{2}).(\d{2}).(\d{4})/, '$2.$1.$3')); //24.10.2018

            $('#resultDate2').val(result.toLocaleString("ru", options)); //четверг, 25 октября 2018 г.

        }

        else if ($('#datepicker2').val() == "") {
            console.log('Выберите начальную дату!!');
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
            var startDate = $.datepicker.parseDate('mm/dd/yy', $('#datepicker3').val());
            var finishDate = $.datepicker.parseDate('mm/dd/yy', $('#datepicker4').val());
            result = finishDate.getDate() - startDate.getDate();
            $('#resultCount').val(result);

        }

    });
});