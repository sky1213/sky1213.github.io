<?php
      		header('Content-Type: application/json;charset=utf-8');
              $name=$_REQUEST['name'];
          	$pwd=$_REQUEST['pwd'];
          	$conn=mysqli_connect('127.0.0.1','root','','jinli');
          	$sql='set names utf8';
          	mysqli_query($conn,$sql);
          	$sql = "SELECT id FROM jl_user where name='$name' and pwd='$pwd' ";
          	$result=mysqli_query($conn,$sql);
          	$row=mysqli_fetch_row($result);

          	if($row==NULL){
          		echo '{"code":-1,"msg":"用户名或密码错误"}';
          	}else{
          		$uid = $row[0];
      		$output = [
      			'code'=>1,
      			'msg'=>'登录成功',
      			'name'=>$name,
      			'id'=>$uid
      	];
      	echo json_encode($output);
          	}
          ?>