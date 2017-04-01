$('#denglu_a').click(function(){
   //var name=$('#name').val();
   //var pwd=$('#name').val();
    var data = $('#kuang').serialize();
    $.ajax({
        type:'post',
        url:'data/user.php',
        data:data,
        success:function(obj){
            if(obj.code===-1){
                alert('账号或密码错误，请重新输入！');
                var a='';
                $('#name').val(a);
                $('#pwd').val(a);
            }
            else{

                alert('登录成功！');
                sessionStorage.setItem('name', obj.name);
                location.href = 'main.html';

            }
        },
        error: function(){
            alert('异步请求出错！')
        }
    })
});
$('#name').focus(function () {
    var a='请输入登录名、邮箱账号或手机账号登录';
    $('#name_span').html(a);
    $('#name_span').css('color','#999');
    $('#name_span').css('visibility','visible');
});
$('#name').blur(function () {
    if($('#name').val()==''){
        var a='用户名不能为空';
        $('#name_span').html(a);
        $('#name_span').css('color','red');
        $('#name_span').css('visibility','visible');
    }

});
$('#pwd').focus(function () {
    var a='请输入登录名、邮箱账号或手机账号登录';
    $('#pwd_span').html(a);
    $('#pwd_span').css('color','#999');
    $('#pwd_span').css('visibility','visible');
});
$('#pwd').blur(function () {
    if($('#pwd').val()==''){
        var a='密码不能为空';
        $('#pwd_span').html(a);
        $('#pwd_span').css('color','red');
        $('#pwd_span').css('visibility','visible');
    }
});