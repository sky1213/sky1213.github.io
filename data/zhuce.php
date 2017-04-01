<?php
      		header('Content-Type: application/json;charset=utf-8');
            @$name = $_REQUEST['name'] or die('{"code":-2, "msg":"用户名不能为空"}');
          	$conn=mysqli_connect('127.0.0.1','root','','jinli');
          	$sql='SET NAMES UTF8';
          	mysqli_query($conn,$sql);
          	$sql = "SELECT id FROM jl_user where name='$name'";
          	$result=mysqli_query($conn,$sql);
          	$row=mysqli_fetch_row($result);
          	if($row==null){
          		echo '{"code":1,"msg":"用户名可用"}';
          	}else{
          		echo  '{"code":-1,"msg":"用户名已存在"}';
          	}
          ?>