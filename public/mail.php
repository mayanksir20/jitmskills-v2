<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['user_name'];
    $email = $data['user_email'];
    $phone = $data['user_phone'];
    $location = $data['user_location'];
    $course = $data['selected_course'];
    $msg = $data['message'];

    $to = "info@jitmskills.com";
    $subject = "New Lead: " . $course . " - " . $name;

    $message = "
    <html>
    <head><title>New Enrollment Inquiry</title></head>
    <body>
    <h2>Student Details</h2>
    <p><b>Name:</b> $name</p>
    <p><b>Email:</b> $email</p>
    <p><b>Phone:</b> $phone</p>
    <p><b>Location:</b> $location</p>
    <p><b>Course Applied:</b> $course</p>
    <p><b>Message:</b> $msg</p>
    </body>
    </html>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: JITM Skills <no-reply@jitmskills.com>" . "\r\n";

    if(mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
}
?>