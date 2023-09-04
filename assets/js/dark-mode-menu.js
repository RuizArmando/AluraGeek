function star(){
  let toggle = document.getElementById("toggle");
  let label = document.getElementById("dark-mode");
  toggle.addEventListener("change", (event) => {
  let estado = event.target.checked;
  document.body.classList.toggle('dark');
  if (estado == true) {
    label.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    label.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
  });
}

window.addEventListener('load', star);