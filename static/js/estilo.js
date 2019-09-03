/*var g_urls = {
    'login': '{% url "rest_login" %}',
    'logout': '{% url "rest_logout" %}',
    'test_auth': '{% url "test_auth" %}',
}

var g_auth  = localStorage.getItem("auth");
if (g_auth==null){
    g_auth = sessionStorage.getItem("auth");
};

if (g_auth){
    try{
        g_auth = JSON.parse(g_auth);
    }catch(error){
        g_auth = null;
    }
}

var getCookie = function(name){
    var cookieValue = null;
    if(document.cookie && document.cookie !==''){
        var cookies = document.cookie.split(';');
        for(var i = 0; i<cookies.length; i++){
            var cookie = jQuery.trim(cookies[i]);
            if(cookie.substring(0, name.length + 1)===(name + "=")){
                cookieValue = decodeURIComponent(cookie.substring(name.length+1));
                break;
            }
        }
    }
    return cookieValue;
};

var g_csrftoken = getCookie('csrftoken');
var initLogin = function(){
    if(g_auth){
        console.log("logiado");
        console.log(g_auth.username);
        if(g_auth.remember_me){
            localStorage.setItem("auth", JSON.stringify(g_auth));
        } else{
            sessionStorage.setItem("auth", JSON.stringify(g_auth));
        }
    } else {
        console.log("no logeado")
        localStorage.removeItem("auth")
        sessionStorage.removeItem("auth")
    }
}

$(function(){
    $("#btnLogin").click(function(){
        var username = $("#id_email").val();
        var password = $("#id_contrasenia").val();
        if(username && password){
            console.log("iniciando con", username, password);
            $.ajax({
                url: g_urls.login,
                method: "POST",
                data: {
                    username: username,
                    password: password,
                    csrfmiddlewaretoken: g_csrftoken
                }
            }).done(function(data){
                console.log("hecho", username, data.key)
                g_auth = {
                    username: username,
                    key: data.key,
                }
            });
        }
    });
});*/
