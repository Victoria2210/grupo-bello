$(function () {
  var navbarCollapse = function () {
    if ($("#navbar").offset().top > 100) {
      $("#navbar").addClass("navbar-shrink");
    } else {
      $("#navbar").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);
});

$(window).scroll(function (event) {
  let scroll = $(window).scrollTop() + 100;
  let position1 = $("#quienes-somos").position().top;
  let position2 = $("#que-hacemos").position().top;
  let position3 = $("#nuestro-grupo").position().top;
  let position4 = $("#contacto").position().top;

  $("#nav-quienes-somos").removeClass("active");
  $("#nav-que-hacemos").removeClass("active");
  $("#nav-nuestro-grupo").removeClass("active");
  $("#nav-contacto").removeClass("active");

  if (position1 < scroll && position2 > scroll) {
    $("#nav-quienes-somos").addClass("active");
  }
  if (position2 < scroll && position3 > scroll) {
    $("#nav-que-hacemos").addClass("active");
  }
  if (position3 < scroll && position4 > scroll) {
    $("#nav-nuestro-grupo").addClass("active");
  }
  if (position4 < scroll) {
    $("#nav-contacto").addClass("active");
  }
});

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          event.stopPropagation();

          let nombre = $("#name").val();
          let email = $("#email").val();
          let telefono = $("#phone").val();
          let asunto = $("#service").val();
          let mensaje = $("#message").val();

          const data = new FormData();
          data.append("nombre", nombre);
          data.append("telefono", "+ 56 " + telefono);
          data.append("email", email);
          data.append("asunto", asunto);
          data.append("mensaje", mensaje);

          var miInit = {
            method: "POST",
            mode: "cors",
            cache: "default",
            body: data,
          };

          fetch("./php/sendMail.php", miInit)
            .then(function (response) {
              return response.text();
            })
            .then(function (respuesta) {
              console.log(respuesta);
              if (respuesta === "200") {
                handleAlertSuccess(
                  "Se ha enviado su correo a un representante de Grupo Bello Abogados, el cual se pondrá en contacto a la brevedad con usted, ¡Gracias por preferirnos!"
                );
                $("#name").val("");
                $("#email").val("");
                $("#phone").val("");
                $("#service").val("");
                $("#message").val("");
              } else {
                handleAlertError(
                  "No se ha podido realizar el envío del correo, por favor intente más tarde"
                );
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function handleAlertError(Mensaje) {
  Swal.fire({
    title: "Opps...",
    text: Mensaje,
    icon: "error",
  });
}

function handleAlertSuccess(Mensaje) {
  Swal.fire({
    title: "¡Envío de correo exitoso!",
    text: Mensaje,
    icon: "success",
  });
}
