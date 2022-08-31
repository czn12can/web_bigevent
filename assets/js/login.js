$(function(){
    // 去注册
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })
    // 去登录
    $('#link_login').on('click',function(){
        $('.reg-box').hide()
        $('.login-box').show()
    })
// 从layui中获取form对象
    var  form = layui.form
    let layer = layui.layer
     form.verify({
pwd: [
    /^[\S]{6,12}$/
    ,'密码必须6到12位，且不能出现空格'
  ] ,
  repwd:function(value){
    // 确认密码框
    // 拿到密码框的内容
    //然后进行判断
    //提示信息
   let  pwd = $('.reg-box [name=password]').val()
    if (pwd !== value){
        return '两次密码不一样'
    }
  }

     })


     //监听注册表单的提交事件
     $('#form_reg').on('submit',function(e){
        e.preventDefault()

        $.post('http://api-breakingnews-web-itheima.net/api/reguser',{username:$('#form_reg [name=username]').val() ,password:$('#form_reg [name=password]').val()},
        function(res){
            if (res.status !== 0){
                return layer.msg(res.message)
            }
            layer.msg('注册成功,请登录!!')
            $('#link_login').click()
        })
     })
})

