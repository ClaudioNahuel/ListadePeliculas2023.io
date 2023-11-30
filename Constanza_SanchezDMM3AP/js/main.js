
$(".btn-add").on("click", function(){
  let datos = $("#peliculas").val();
  console.log(datos)
  if( datos !== ""){
    let nuevo_li = $("<li></li>");
    nuevo_li.html(`<p>${datos}</p>
    <button class="btn-delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-x" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M6.146 5.146a.5.5 0 0 1 .708 0L8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 0 1 0-.708"/>
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
  </svg></button>`)
    
    $("#lista-peliculas").append(nuevo_li);
    $("#peliculas").val("");
    $("#vacio").css("display", "none");
    guardarPeliculas();
  }  
  return false;
})


$("#lista-peliculas").on("click", ".btn-delete", function(){
  let eliminar = confirm("Desea elimnar la pelicula?");
  if(eliminar){
    $(this).parent().remove();
    guardarPeliculas();
    if ($("#lista-peliculas li").length === 0) {
      $("#vacio").css("display", "block");    
    }
  }
});

$("#btn-vaciar").on("click", function () {
  let vaciar = confirm("Desea vaciar la lista de peliculas?");
  if(vaciar) {
      $("#lista-peliculas").children().remove();   
      guardarPeliculas();
      $("#vacio").css("display", "block");
  }
})

function guardarPeliculas(){
  let aGuardar = $("#lista-peliculas").html();
  localStorage.setItem("peliculas", aGuardar);
};

$(function(){
  let peliculasGuardadas = localStorage.getItem("peliculas");
  if(peliculasGuardadas != null){
    $("#lista-peliculas").html(peliculasGuardadas);
  }
  if ($("#lista-peliculas li").length === 0) {
    $("#vacio").css("display", "block");    
  }
});

$("#info").on("click", function () {
  $("[data-vista]").css("display", "none");
  $('[data-vista="datos"]').css("display", "block");
});

$(".cerrar").on("click", function () {
  $("[data-vista]").css("display", "none");
  $('[data-vista="inicio"]').css("display", "block");
});