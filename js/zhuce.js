
var char1=[];
var name_sub=0;
var pwd_sub=2;
var pwd1_sub=3;
var yan_sub=4;
function yan() {
    var w = 100;
    var h = 25;
    c1.width = w;
    c1.height = h;
    var ctx = c1.getContext('2d');
    ctx.fillStyle = rc(180, 230);
    ctx.fillRect(0,0, w, h);
    var pool = 'ABCDEFGHJKLMNPQRSTUVWXY123456789abdefghkmnpqrstuvwxy';
    for(var i=0; i<4; i++){
        //生成一个随机字符
        var txt = pool[rn(0,pool.length)];
        //console.log(txt);
        char1.push(txt);
        var fontSize = rn(16, 30);//字体大小
        ctx.font = fontSize+'px SimHei';
        var color = rc(80,180);//字体颜色
        ctx.fillStyle = color;
        ctx.textBaseline = 'top'; //文本基线
        ctx.save(); //保存画笔的当前状态：无旋转/无平移
        ctx.translate(25*i+25/2,  25/2);
        //ctx.rotate( rn(-45,45)*Math.PI/180 );
        var x = -fontSize/2;
        var y = -fontSize/2;
        ctx.fillText(txt, x, y);  //绘制文本
        ctx.restore(); //恢复画笔状态到最近一次保存的效果
    }
    /*random number：返回指定范围内的随机整数*/
    function rn(min, max){
        return Math.floor( Math.random()*(max-min) + min );
    }
    /*random color：返回指定范围内的随机颜色*/
    function rc(min, max){
        var r = Math.floor(Math.random()*(max-min)+min);
        var g = Math.floor(Math.random()*(max-min)+min);
        var b = Math.floor(Math.random()*(max-min)+min);
        return `rgb(${r}, ${g}, ${b})`;
    }
}
yan();
//change.onclick= yan();  为什么不对！！！
$("#change").on("click",function(){
    yan();
})
//console.log(char1);
c2.onblur = test1;
function test1() {
    var reg = new RegExp(char1.join(""), "ig");       //????
    console.log(reg);
    if (reg.test(c2.value)) {
        change_span.style.visibility = "hidden";
        yan_sub=1;
    } else {
        if (this.value == "") {
            var msg = "请输入验证码";
            change_span.innerHTML = msg;
            change_span.style.visibility = "visible";
            yan_sub=4;
        } else {
            var msg = "您输入的验证码不正确";
            change_span.innerHTML = msg;
            change_span.style.color="red";
            //s2.className = "help-block danger";
            change_span.style.visibility = "visible";
            yan_sub=4;
        }
    }
}
$('#c2').focus(function () {
    var a='请输入右边图片中的字符';
    $('#change_span').html(a);
    $('#change_span').css('color','#999');
    $('#change_span').css('visibility','visible');
});
$('#name').blur(function () {
    var data = $('#kuang').serialize();
    $.ajax({
        type:'post',
        url:'data/zhuce.php',
        data:data,
        success:function(obj){
            if(obj.code===-1){
                var a='用户名已存在';
                $('#name_span').html(a);
                $('#name_span').css('color','red');
                $('#name_span').css('visibility','visible');
                name_sub=0;
            }
            else{
                if(!$('#name').val()==''){
                    var reg=/^([\u4e00-\u9fa5]|\w){3,15}$/ig;
                    if(reg.test($('#name').val())){
                        $('#img1').css('visibility','visible');
                        name_sub=1;
                    }else{
                        var a='用户名格式错误';
                        $('#name_span').html(a);
                        $('#name_span').css('color','red');
                        $('#name_span').css('visibility','visible');
                        name_sub=0;
                    }
                }else{
                    var a='用户名不能为空';
                    $('#name_span').html(a);
                    $('#name_span').css('color','red');
                    $('#name_span').css('visibility','visible');
                    name_sub=0;
                }
            }
        },
        error: function(){
            alert('异步请求出错！')
        }
    })

});

$('#name').focus(function () {
    $('#img1').css('visibility','hidden');
    var a='3-15个字符可使用字母、数字、汉子或组合';
    $('#name_span').html(a);
    $('#name_span').css('color','#999');
    $('#name_span').css('visibility','visible');
});

$('#pwd').focus(function () {
    var a='6-30个字符，推荐字母、数字和符号组合';
    $('#pwd_span').html(a);
    $('#pwd_span').css('color','#999');
    $('#pwd_span').css('visibility','visible');
    $('#img2').css('visibility','hidden');
});
$('#pwd').blur(function () {
    $('#pwd_span').css('visibility','hidden');
    if(!$('#pwd').val()==''){
        var reg=/^\w{6,30}$/ig;
        if(reg.test($('#pwd').val())){
            $('#img2').css('visibility','visible');
            pwd_sub=1;
        }else{
            var a='密码格式错误';
            $('#pwd_span').html(a);
            $('#pwd_span').css('color','red');
            $('#pwd_span').css('visibility','visible');
            pwd_sub=2;
        }

    }else{
        var a='密码不能为空';
        $('#pwd_span').html(a);
        $('#pwd_span').css('color','red');
        $('#pwd_span').css('visibility','visible');
        pwd_sub=2;
    }
});
$('#pwd_must').focus(function () {
    $('#img3').css('visibility','hidden');
    $('#pwd_span_must').css('visibility','visible');
});
$('#pwd_must').blur(function () {
    if($('#pwd_must').val()==$('#pwd').val()){
        if(!$('#pwd_must').val()=='') {
            $('#img3').css('visibility', 'visible');
            var a = '密码一致';
            $('#pwd_span_must').html(a);
            $('#pwd_span_must').css('color', '#999');
            $('#pwd_span_must').css('visibility', 'visible');
            pwd1_sub=1;
        }
    }else{
        var a='密码不一致';
        $('#pwd_span_must').html(a);
        $('#pwd_span_must').css('color','red');
        $('#pwd_span_must').css('visibility','visible');
        pwd1_sub=3;
    }
});
clk.onclick=function(){
    //设置disabled和当前input的checked相反！
    zhuce_a.disabled=
        !this.checked;
}
$('#zhuce_a').click(function(){
    //console.log(pwd_sub);
    //console.log(pwd1_sub);
    //console.log(name_sub);
    //console.log(yan_sub);
    if(pwd_sub==pwd1_sub==name_sub==yan_sub){
        var data = $('#kuang').serialize();
        console.log(data);
        $.ajax({
            type:'post',
            url:'data/zhuce2.php',
            data:data,
            success:function(obj){
                if(obj==1){
                    sessionStorage.setItem('name', $('#name').val());
                    location.href = 'main.html';
                }
            else{
                alert("添加失败")
                }
            }
        })
    }
});
