<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require './PHPMailer/src/Exception.php';
  require './PHPMailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'PHPMailer/language/');
  $mail->IsHTML(true);

  // От кого письмо
  $mail->setFrom('site@etc-yamal.ru', 'Сайт');
  // Кому отправить
  $mail->addAddress('e.olegs@mail.ru');
  // Тема письма
  $mail->Subject = 'Заявка на звонок, с сайта';

  $body = '<h1>Заголовок</h1>';

  if(trim(!empty($_POST['NAME']))) {
    $body.='<p><strong>Имя:</strong> '.$_POST['NAME'].'</p>';
  }

  if(trim(!empty($_POST['PHONE']))) {
    $body.='<p><strong>Телефон:</strong> '.$_POST['PHONE'].'</p>';
  }

  $mail->Body = $body;

  // Отправляем
  if (!$mail->send()) {
    $message = 'Ошибка!';
  } else {
    $message = 'Данные отправлены!';
  }

  $responce = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($responce);