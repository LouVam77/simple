
function comenzar() {
  let clave = prompt("Ingrese clave")
  if (clave == "miguel062309") {
  alert("Contesta brevemente")
      const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        })
        
        swalWithBootstrapButtons.fire({
          title: 'Responde:',
          text: "¿Eres novio de la señorita Luisa Melina Varòn Montaño?",
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire({
                  imageUrl: 'tres.jpg',
                  imageWidth: 400,
                  imageHeight: 200,
                  title: 'Ella quiere decirte esto:',
                  text: 'Melinita - Negri, querìa decirle que muchas gracias por la manera en la que me da animos para todo. Yo soy una persona que se entristece muy ràpido cuando me dicen o pasa algo que no me gusta, y tambièn me reprimo mucho las cosas, y solo verlo asì sonreirme aunque me ve actuando como una kk es como algo que me ilumina el corazòn, no me cambia el estado de animo pero me hace pensar en lo importante y valioso que es y eres.',
                  width: 300,
                  padding: '1em',
                  color: '#716add',
                  background: '#FFFFFF80',
                  backdrop: `
    #FFF
    url("giphy.gif")
    left top
    no-repeat
  `,
                 confirmButtonText: 'Leido'
                })
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            alert('Esta pagina no es dirigida a ti')
          }
        })
  } else {
    alert("Pagina de acceso privado")
  }
    };