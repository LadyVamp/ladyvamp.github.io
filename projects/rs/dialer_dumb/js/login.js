// "use strict";
/*-------------------------------------------------------------------------------

-------------------------------------------------------------------------------*/

// обьект осуществления входа в систему
var LoginObject = {
    // status      : flase, // статус логина
    // login       : $('.InputEmail').val(), //логин пользователя
    // password    : $('#InputPassword').val() , //пароль пользователя
    perms   :'',
    groupList:'',

    // действия при логине
    doLogin:function(event) {
        event.preventDefault();
        // debugger;
        
        LoginObject.makeLoginRequest(); // направляем на сервер реквест на проверку введенных данных
    },

    // проверяем данные пользователя
    makeLoginRequest:function() {
        // debugger;
        $.ajax({
            type: 'POST',
            url: 'php/process.php',
            dataType: 'json',
            data: {request:'login', "login": $('.InputEmail').val(), "password" : $('#InputPassword').val()},
            beforeSend: function () {
                // console.log(this.data);
            },
            success: function (result) {
                // console.log(result);
                //если успешно прошел запрос, то выполняем эти действия
                if (result.session_id) {
                    LoginObject.checkRights();
                }else { // если запрос дошел до сервера, но был неверен
                    $(".error_message").empty();
                    $(".error_message").css('color', 'red');
                    $(".error_message").text(result);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                xhr.responseText.length > 1 ? $('.result-data').html(xhr.responseText) : $('.result-data').html('<span style="color:#ED1C1C;display:block;text-align:center;margin:30px 0px;">Сбой. Получен неизвестный ответ от сервера.</span>');
                
                $('.result-data').css('display','block');
                setTimeout(function(){
                    $('.result-data').css('display','none');
                },2500);
            }
        });
    },

    checkRights:function() {
        // debugger;
        $.ajax({
            type: 'POST',
            url: 'php/process.php',
            dataType: 'json',//to change
            data: {request:'getRights'},
            beforeSend: function () {
                // console.log(this.data);
            },
            success: function (result) {
                if(result.perms.indexOf('dump_admin') != '-1' && result.perms.indexOf('dump_connect') == '-1'){
                    LoginObject.requestToRecieveAllInfoForThePage();
                    setTimeout(function(){
                        location.replace('./admin/index.php');
                    },2000);
                }else {
                    
                    LoginObject.requestToRecieveAllInfoForThePage('login');
                    // setTimeout(function(){
                    //     location.replace('./index.php');
                    // },2000);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                // если запрос вообще не прошел
                // console.log(xhr);
                xhr.responseText.length > 1 ? $('.result-data').html(xhr.responseText) : $('.result-data').html('<span style="color:#ED1C1C;display:block;text-align:center;margin:30px 0px;">Сбой. Получен неизвестный ответ от сервера.</span>');
                
                $('.result-data').css('display','block');
                setTimeout(function(){
                    $('.result-data').css('display','none');
                },2500);
                // setTimeout(function(){
                //     location.reload();
                // },3000);
            }
        });
    },

    // действия, если логин и пароль были верны.
    doOnSuccessLogin:function(event) {
        event.preventDefault();
        LoginObject.requestToRecieveAllInfoForThePage('login');
        // LoginObject.doOnSuccessLogin();
        
        

        // запускаем процесс отрисовки всей нужной информации на странице
        // InterfaceObject.render();
    },

    //создаем запрос, который является тригером на сервере, чтобы сохранить данные в сессию и вывести на страницу
    requestToRecieveAllInfoForThePage:function(status){
        $.ajax({
            type: 'POST',
            url: 'php/process.php',
            dataType: 'json',
            data: {request:'getStatisticAndInfo'},
            beforeSend: function () {
                // console.log(this.data);
            },
            success: function (result) {
                // debugger
                // console.log(result);    
                if(result.answer == 'denied') {
                    location.replace('./login.php');
                }else {
                    if (status == 'login')  {
                        mainController.doLogActions('LOGIN',"LOGIN");        
                        // перебрасываем на главную страницу
                        setTimeout(function(){
                            location.replace('./index.php');
                        },2500);
                    }
                    // debugger;
                LoginObject.perms = result.perms;
                // websocketController.serv = result.server_addr;
                }
                
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                // console.log(xhr);
                xhr.responseText.length > 1 ? $('.result-data').html(xhr.responseText) : $('.result-data').html('<span style="color:#ED1C1C;display:block;text-align:center;margin:30px 0px;">Сбой. Получен неизвестный ответ от сервера.</span>');
                
                $('.result-data').css('display','block');
                setTimeout(function(){
                    $('.result-data').css('display','none');
                },2500);
                // setTimeout(function(){
                //     location.reload();
                // },3000);
            },
            async:false
        });       
    },

    // searchOnKeyClick(){
    //     $.ajax({
    //         type: 'POST',
    //         url: 'php/process.php',
    //         dataType: 'json',
    //         data: {request:'search_group','mask':InterfaceObject.InputGoupp.val()},
    //         beforeSend: function () {
    //             console.log(this.data);
    //         },
    //         success: function (result) {
    //             console.log('here');  
    //             $('.grouplist').empty();
    //             result.groups.forEach(function(el){
    //                 $('.grouplist').append('<p id="'+el.code+'" class="groupListOption">'+el.name+'</p>');
    //             });        
    //         },
    //         error: function (xhr, ajaxOptions, thrownError) {
    //             console.log(xhr);
    //         }
    //     });     
    // },


    forgotPassProcedure : function () {
        $(".AuthForm").css('display','none');
        $(".passForg").css('display','block');
    },

    forgPassCheckRequest : function (event) {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'php/process.php',
            dataType: 'json',
            data: {request:'restorePassw',"value":$('.InputEmailLoginCheck').val()},
            beforeSend: function () {
                // console.log(this.data);
            },
            success: function (result) {
                // debugger;
                // console.log(result);
                if (result.result.toLowerCase() == 'ok') {
                    $("#forgPassForm").css('display','none');
                    $(".restorePassH").text('Ваш запрос успешно отправлен. Ожидайте уведомления по электронной почте.');
                    $(".restorePassH").css('width','600px');
                    setTimeout(function(){
                        location.replace('./login.php');
                    },5000);
                }
               
            },
            error: function (xhr, ajaxOptions, thrownError) {
                // console.log(xhr);
            
                xhr.responseText.length > 1 ? $('.result-data').html(xhr.responseText) : $('.result-data').html('<span style="color:#ED1C1C;display:block;text-align:center;margin:30px 0px;">Сбой. Получен неизвестный ответ от сервера.</span>');
                
                $('.result-data').css('display','block');
                setTimeout(function(){
                    $('.result-data').css('display','none');
                },5500);
                // setTimeout(function(){
                //     location.reload();
                // },6000);
            },
            async:false
        });  
    },
}


