function validar(respuesta){

    if (respuesta.dataset.correcta === "true"){
        Swal.fire({
            title: 'Pregunta correcta',
            text: 'Cada vez estás mas cerca de la meta.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
          
    }else{
        Swal.fire({
            title: 'Respuesta incorrecta',
            text: 'Cada vez estás mas mal',
            icon: 'error',
            confirmButtonText: 'Inténtalo de nuevo'
          });
    }
}