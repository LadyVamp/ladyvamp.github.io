//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------

phoneObject = {
    init : function (){
        $(".tel-button-row").click(this.addNumber);
        $(".cross").click(function(){
            phoneObject.changePhoneText('','delete');
            // $(".tel-typed").empty();
            // $(".tel-typed")[0].id = '';
        });
        document.addEventListener("keyup", function(event){
            // console.log(event.keyCode);
            var possibleKeysArr = [48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105]
            if (possibleKeysArr.indexOf(event.keyCode) != '-1') {
                // console.log(event.key);
                phoneObject.changePhoneText(event.key);
                // $(".tel-typed")[0].id += event.key;
                // var text =  $(".tel-typed").text();
                // text += event.key;
                // $(".tel-typed").text(text);
            } else if (event.keyCode == 8){
                // $(".tel-typed").empty();
                // $(".tel-typed")[0].id = '';
                phoneObject.changePhoneText('','delete');
            }
           
        });
       
    },
    addNumber:function (event) {
        // console.log(event.target.id);
        switch (event.target.id){
            case ('call') :
                console.log(event.target.id);
                break;
            case ('C') :
                $(".tel-typed").empty();
                $(".tel-typed")[0].id = '';
                break;
            default :
                phoneObject.changePhoneText(event.target.id);
                // $(".tel-typed")[0].id += event.target.id;
                // var text =  $(".tel-typed").text();
                // text += event.target.id;
                // $(".tel-typed").text(text);
                
        }
    },
    changePhoneText:function (value, action) {
        // debugger;
        if ($(".tel-typed")[0].id.length < 10) {
            $(".tel-typed")[0].id += value; 
            var id = $(".tel-typed")[0].id;
            phoneObject.createMask(id);
        }
        if (action == 'delete') {
            var newID = $(".tel-typed")[0].id = $(".tel-typed")[0].id.slice(0,-1);
            phoneObject.createMask(newID);
        }
        
        
    },
    createMask:function(id){
        if(id.length == 0){
            $(".tel-typed").text('');
        }else if (id.length <=3){
            $(".tel-typed").text('+7(' + id.slice(0,3)+')');
        }else if (id.length > 3 && id.length <=6){
            $(".tel-typed").text('+7(' + id.slice(0,3)+')'+id.slice(3,6));
        }else if (id.length > 6 && id.length <=8){
            $(".tel-typed").text('+7(' + id.slice(0,3)+')'+id.slice(3,6)+'-'+id.slice(6,8));  
        }else if (id.length > 8 && id.length <=10){
            $(".tel-typed").text('+7(' + id.slice(0,3)+')'+id.slice(3,6)+'-'+id.slice(6,8)+'-'+id.slice(8,10));                
        }
    },
    
}
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
mainController={
    consol                  : $("#consoleBlock"),

    init:function(){
        $('#btn_exit').click(ExitObject.exitRequest);
        $("#btn_connect_to_server").click(websocketController.createSocketConnection);
        $("#btn_disconnect_from_server").click(websocketController.disconnect);

        $("#btn_clear_console").click(this.clearConsole);


        $(".callBtn_big").click(this.makeCall);
        $("#PhoneList").on('change', this.onPhoneSelChange);

        LoginObject.requestToRecieveAllInfoForThePage();
        mainController.checkIfAdmin();
        mainController.pastePhones();
       
    },
    checkIfAdmin:function(){
        // debugger;
        if (LoginObject.perms.indexOf('test') != -1){
            $(".adminHref").css('display', 'inline-block');
        }
    },
    consoleWrite:function(message) {
        mainController.consol.prepend(mainController.formatTimeOfDay(jQuery.now()) + " " + message);
    },
    clearConsole:function() {
        // window.requests.ajax('clear');
        mainController.consol.text('');
    },
    formatTimeOfDay:function(millisSinceEpoch) {
        var secondsSinceEpoch = (millisSinceEpoch / 1000) | 0;
        var secondsInDay = ((secondsSinceEpoch % 86400) + 86400) % 86400;
        var seconds = secondsInDay % 60;
        var minutes = ((secondsInDay / 60) | 0) % 60;
        var hours = (secondsInDay / 3600) | 0;
        return (hours +3) + (minutes < 10 ? ":0" : ":")
            + minutes + (seconds < 10 ? ":0" : ":")
            + seconds;
    },

    doLogActions:function(action,message){
        $.ajax({
            type:       'POST',
            url:        'php/process.php',
            dataType:   'json',
            data:       {request: 'makeLogs', 'logMessage': message},
            beforeSend: function () {
                // console.log('start');
            },
            success: function (result) {
                // console.log(result);
                if(result.answer == 'denied') {
                    location.replace('./login.php');
                }
                // debugger;
            },
            error: function (xhr, ajaxOptions, thrownError) {
                // console.log(xhr);
                xhr.responseText.length > 1 ? $('.result-data').html(xhr.responseText) : $('.result-data').html('<span style="color:#ED1C1C;display:block;text-align:center;margin:30px 0px;">Сбой. Получен неизвестный ответ от сервера.</span>');
                // xhr.responseText.length > 1 ? InterfaceObject.consoleWrite(xhr.responseText+' \n'): InterfaceObject.consoleWrite('Сбой. Получен неизвестный ответ от сервера. \n') ;	
                $('.result-data').css('display','block');
                setTimeout(function(){
                    $('.result-data').css('display','none');
                },10000);
            }
        });
    },
    pastePhones:function(){
        // debugger;
        var phonesArr = $("#PhoneList")[0].dataset.phones.split(',');
        
        phonesArr.forEach(function(element) { 
            // изначально у нас уже стоит там основной номер телефона. проверяем не совпадает ли он с этим номером.
            if (element.trim() !== $(".primaryPhone").text()) {
                // console.log('nope');
                $('#PhoneList').append('<option >' + element.trim() + '</option>');
            }
        });
    },
    onPhoneSelChange:function(){
        // console.log('onPhoneSelChange');
        var lisconn = 0;
        if (typeof websocketController.websocket !== 'undefined') {
            if (websocketController.websocket.readyState === websocketController.websocket.OPEN) {
                lactphone = $("#PhoneList option:selected").text();
                // console.log('New phone: ' + lactphone);
                mainController.doChangePhoneRequest(lactphone);

                lisconn = 1;
            } else if (websocketController.websocket.readyState === websocketController.websocket.CLOSED) {
                console.log('closed socket');
                mainController.consoleWrite('Соединение с сервером закрыто \n');
                
            }
        }

        if (lisconn === 0) {
            mainController.consoleWrite('Нет соединения с сервером \n');
        }
    },

    // отправляем в пхп запрос на изменение вв базе активного номера телефона
    doChangePhoneRequest:function(aactivephone){
        // debugger;
        // console.log('doChangePhone: ' + aactivephone);
        $.ajax({
            type:       'POST',
            url:        'php/process.php',
            dataType:   'json',
            data:       {request: 'changeOperPhone', activephone: aactivephone},
            beforeSend: function () {
                //
            },
            success: function (result) {
                // console.log(result);
                // debugger;
                if(result.answer == 'denied') {
                    location.replace('./login.php');
                }else if (result.answer == '1') {                   
                    websocketController.sendMessageToServer(aactivephone,'OPER_PHONE_CHANGED');
                } 
            },
            error: function (xhr, ajaxOptions, thrownError) {
                // console.log(xhr);
                xhr.responseText.length > 1 ? $('.result-data').html(xhr.responseText) : $('.result-data').html('<span style="color:#ED1C1C;display:block;text-align:center;margin:30px 0px;">Сбой. Получен неизвестный ответ от сервера.</span>');
                // xhr.responseText.length > 1 ? InterfaceObject.consoleWrite(xhr.responseText+' \n'): InterfaceObject.consoleWrite('Сбой. Получен неизвестный ответ от сервера. \n') ;
                mainController.consoleWrite('Сбой при изменении номера телефона. \n') ;	
                $('.result-data').css('display','block');
                setTimeout(function(){
                    $('.result-data').css('display','none');
                },10000);
            }
        });
    },

    makeCall:function() {
        websocketController.sendMessageToServer($(".tel-typed")[0].id, 'ORIGINATE');        
    }
}
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
var ExitObject = {
    // выход
    exitRequest:function(){
        $.ajax({
            type: 'POST',
            url: 'php/process.php',
            dataType: 'json',//to change
            data: {request:'exit'},
            beforeSend: function () {
                // console.log(this.data);
            },
            success: function (result) {
                // console.log(result.answer);
                if(result.answer == 'logged out') {
                    websocketController.sendMessageToServer('LOGOUT','LOGOUT');
                    setTimeout(function(){
                        location.replace('./login.php');
                    },3000);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr);
            }
        });
    }
}
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
websocketController= {
    websocket:null,

    disconnect:function (){
        websocketController.websocket.close();
    },

    // создаем соединение вебсокета
    createSocketConnection:function() {
            websocketController.websocket = new WebSocket(this.dataset.server);//
            websocketController.websocket.onopen 	    = function(evt) {websocketController.onOpen(evt)};
            websocketController.websocket.onclose 	    = function(evt) {websocketController.onClose(evt)};
            websocketController.websocket.onmessage     = function(evt) {websocketController.onMessage(evt)};
            websocketController.websocket.onerror 	    = function(evt) {websocketController.onError(evt)};
    	
    },

    onOpen:function(evt) {
        console.log('openned');
        if(websocketController.checkWebsocketConnectionStatus()) {
            websocketController.sendMessageToServer('','LOGIN');
        }
    },

    onClose:function(evt) {
        console.log('closed');
        websocketController.changeInterfaceStyles('disconnect');
        mainController.consoleWrite("Соединение с сервером закрыто\n");
    },

    onError:function(evt)  {
        var lmsg = JSON.parse(evt.data);
        var lerrorCode = lmsg.code;
        var lerrorDescription = lmsg.discribe;

        console.log('Код: ' + lerrorCode + 'Ошибка: ' + lerrorDescription + '\n');

    },

    onMessage:function(evt) {
        // {"cmd": "<name>", "value": "<value>"}
        // writeToScreen("response: " + evt.data + '\n');
        // {"res": "OK", "code": "1", "discribe": "", "cmd": "LOGIN"} 

        var lcmd = '';
        var lval = '';
        var lres = '';
        try {
            var lmsg = JSON.parse(evt.data);
            lcmd = lmsg.cmd ? lmsg.cmd : lmsg.res;
            lval = lmsg.value ? lmsg.value : lmsg.code;
            lres = lmsg.res;
        } catch(e) {
            console.dir('!!! Error in json: ' + JSON.stringify(evt));
        }

        if (lcmd == "LOG") {
            var llog = JSON.parse(evt.data);
            var llogs = llog.value;
            mainController.consoleWrite(llogs + '\n');
        }

        if (lcmd == "IND") {
           
            if (lval.trim().toLowerCase() == 'dial') {
                websocketController.changeInterfaceStyles('dial');
            }else if(lval.trim().toLowerCase() == 'answer') {
                websocketController.changeInterfaceStyles('answer');
            }else if(lval.trim().toLowerCase() == 'hangup') {
                websocketController.changeInterfaceStyles('hangup');
            }
        }

        // ловим команду для запуска счетчика и его значения
        if (lcmd == "CNT") {
            //создаем и начинаем счетсик
            
            
            $(".connect_time").text(websocketController.counter(lval));
        }

        if(lcmd.toUpperCase() == 'LOGIN' && lres == 'OK') {            
            mainController.consoleWrite("Соединение с сервером установлено\n");// пишем в консоль на страниу сообщение
            websocketController.changeInterfaceStyles('connect');
        }


        return 1;
    },
    counter:function (lval) {
        var minutes = Math.floor(lval/60);
        var seconds = lval%60;
        var min = '';
        var sec = '';
        if (minutes < 10) {
            min = '0' + minutes;
        } else {
            min = minutes;
        }

        if (seconds < 10) {
            sec = '0' + seconds;
        } else {
            sec = seconds;
        }
        return min + ':' + sec;
    },
    changeInterfaceStyles:function(action){
        var connectBtn = $("#btn_connect_to_server");
        var disconnectBtn = $("#btn_disconnect_from_server");
        var connectIndicator = $(".connect_indicator");
        var timer = $(".connect_time");
        var phoneList = $("#PhoneList");
        switch (action) {
            case 'connect' :
                connectBtn.css('background-color','#4CAF50');
                disconnectBtn.css('background-color','#3F51B5');
                connectIndicator.text('Ожидаем начало работы...');
                phoneList.removeAttr('disabled');
                break;
            case 'disconnect' :
                connectBtn.css('background-color','#3F51B5');
                disconnectBtn.css('background-color','#F44336');
                // connectIndicator.text('Нет соединения с сервером');
                connectIndicator.text('Ожидаем начало работы...'); 
                phoneList.attr('disabled','disabled');               
                break;
            case 'dial' :
                connectIndicator.text('Осуществляем дозвон');
                break;
            case 'answer' :
                timer.css('display','block');
                timer.text(websocketController.counter(0));
                connectIndicator.text('На звонок ответили');
                break;
            case 'hangup' :
                timer.css('display','none');
                timer.text(websocketController.counter(0));
                connectIndicator.text('Звонок завершен');
                break;
        }
    },

    checkWebsocketConnectionStatus:function(){
        var lisconn = 0;
        if (typeof websocketController.websocket !== 'undefined') {
            if (websocketController.websocket.readyState === websocketController.websocket.OPEN) {
                lisconn = 1;
                return true;
            } else if (websocketController.websocket.readyState === websocketController.websocket.CLOSED) {
                return false;
            }
        }

        if (lisconn === 0) {
            return false;
        } 
    },

    sendMessageToServer:function(value, command) {
        $.ajax({
            type: 'POST',
            url: 'php/process.php',
            dataType: 'json',
            data: {request:'checkSessionExpirationStatus',
                    'value':value?value:'',
                    'command':command?command:''},
            beforeSend: function () {
                // console.log(this.data);
            },
            success: function (result) {
                if(result.answer == 'denied') {
                    location.replace('./login.php');
                }else if (result.answer == '1') {
                    if ( websocketController.checkWebsocketConnectionStatus()) {
                        websocketController.websocket.send('{"jwt":"' + result.jwt + '"}');
                    }
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                // console.log(xhr);	
                xhr.responseText.length > 1 ? $('.result-data').html(xhr.responseText) : $('.result-data').html('<span style="color:#ED1C1C;display:block;text-align:center;margin:30px 0px;">Сбой. Получен неизвестный ответ от сервера.</span>');
                // xhr.responseText.length > 1 ? InterfaceObject.consoleWrite(xhr.responseText+' \n'): InterfaceObject.consoleWrite('Сбой. Получен неизвестный ответ от сервера. \n') ;	
                InterfaceObject.consoleWrite('Сбой. Получен неизвестный ответ от сервера. \n') ;	
                $('.result-data').css('display','block');
                setTimeout(function(){
                    $('.result-data').css('display','none');
                },10000);	
            }
        });
    },


}