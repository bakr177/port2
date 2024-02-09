
function SendMail() {
  var templateParams = {
      from_name: document.getElementById("fullName").value,
      email_id: document.getElementById("email_id").value,
      message: document.getElementById("message").value
  };

  emailjs.send("service_4m35pjw", "template_aw446js", templateParams)
      .then(function(response) {
          alert('SUCCESS! ' + response.status + ', ' + response.text);
      }, function(error) {
          alert('FAILED... ' + error);
      });
}



