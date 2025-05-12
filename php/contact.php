<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Collect form data from $_POST instead of php://input
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? 'Contact Form Submission');
    $messageContent = trim($_POST['message'] ?? '');

    // Validate inputs
    if (!$name || !$email || !$messageContent) {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "message" => "All required fields must be filled."
        ]);
        exit;
    }

    $from = "noreply@ivhub.com";
    $fromname = "IV Hub";
    $to = "hansraj.akki@gmail.com,dipesh.macair@gmail.com";

    $email_subject = "Contact Form Submission: $subject";

    $email_body = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f7f7f7;
          padding: 20px;
          color: #333;
        }
        .email-container {
          background-color: #ffffff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          max-width: 600px;
          margin: auto;
        }
        h2 {
          color: #0d6efd;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }
        th, td {
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }
        th {
          background-color: #f0f0f0;
        }
        .footer {
          margin-top: 30px;
          font-size: 12px;
          color: #888;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <h2>New Contact Form Submission</h2>
        <table>
          <tr>
            <th>Full Name</th>
            <td>' . htmlspecialchars($name) . '</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>' . htmlspecialchars($email) . '</td>
          </tr>
          <tr>
            <th>Subject</th>
            <td>' . htmlspecialchars($subject) . '</td>
          </tr>
          <tr>
            <th>Message</th>
            <td>' . nl2br(htmlspecialchars($messageContent)) . '</td>
          </tr>
        </table>
        <div class="footer">
          You received this email from IV Hub Contact Form.
        </div>
      </div>
    </body>
    </html>';

    $headers = "From: $fromname <$from>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode([
            "success" => true,
            "message" => "Message sent successfully!"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Failed to send message. Please try again later."
        ]);
    }
} else {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request method."
    ]);
}
?>