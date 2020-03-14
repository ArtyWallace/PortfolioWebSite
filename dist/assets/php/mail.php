<?php 

$recepient = "artem.prudnikov57@gmail.com";
$sitename = "prudnikov.website";

$name = trim($_POST['name']);
$email = trim($_POST['email']);
$text = trim($_POST['text']);
$message = "Имя: $name \nЕ-Мэйл: $email \nСообщение: $text";

$pagetitle = "Новое сообщение с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");