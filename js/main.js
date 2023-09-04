const hamburgerIcon = document.querySelector('#hamburger-icon')
const mobileMenu = document.querySelector('.menu')

hamburgerIcon.addEventListener('click',toggleElement)

function toggleElement(e){

    let openElement = document.querySelector('.active-left')    // Selecciona el elemento despegable desde la izquierda que esté activo.
    if (openElement && !e.target) { openElement.classList.remove('active-left')}  // Sí existe un elemento abierto desde la izquierda y es diferente de e.target, entonces cierrelo.

    openElement = document.querySelector('.active-rigth')
    if (openElement && !e.target) { openElement.classList.remove('active-rigth')}

    switch (e.target){
        case hamburgerIcon: // Sí presionaron el icono hamburguesa se cambia el estado del menú desplegable en la versión mobile.
            mobileMenu.classList.toggle('active-left')
            break;
    }
}