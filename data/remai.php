<?php
      		header('Content-Type: application/json;charset=utf-8');
          	$conn=mysqli_connect('127.0.0.1','root','','jinli');
          	$sql='SET NAMES UTF8';
          	mysqli_query($conn,$sql);
          	$sql = "SELECT * FROM rm_list";
          	$result=mysqli_query($conn,$sql);
          	$row=mysqli_fetch_all($result);
          	echo json_encode($row);
          ?>