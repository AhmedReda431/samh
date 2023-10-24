import Swal from "sweetalert2";

export default function({}, inject) {
  const succToast = Swal.mixin({
    toast: true,
    timer: 3000,
    icon:'success',
    padding: "0.5rem",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    position: "top-end",
    showConfirmButton: false,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const errToast = Swal.mixin({
    toast: true,
    timer: 3000,
    icon:'error',
    padding: "0.5rem",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    position: "top-end",
    showConfirmButton: false,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  // Inject to context as $toast
  inject("errToast", errToast);
  // Inject to context as $toast
  inject("succToast", succToast);
}
