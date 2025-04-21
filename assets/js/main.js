function mostrarPropiedades(propiedades, selector, limite = 3) {
  const zona = document.querySelector(selector)
  let estructuraHTML = ""

  for (let index = 0; index < Math.min(limite, propiedades.length); index++) {
    const propiedad = propiedades[index]
    estructuraHTML += `
      <div class="col-md-4 mb-4">
        <div class="tarjeta">
          <img src="${propiedad.src}" alt="Foto propiedad" />
          <div class="tarjeta-cuerpo">
            <h5>${propiedad.nombre}</h5>
            <p>${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p>
              <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${propiedad.baños} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
            <p class="${propiedad.smoke ? 'texto-verde' : 'texto-rojo'}">
              <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
              ${propiedad.smoke ? 'Se permite fumar' : 'Prohibido fumar'}
            </p>
            <p class="${propiedad.pets ? 'texto-verde' : 'texto-rojo'}">
              <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>
              ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      </div>
    `
  }

  zona.innerHTML = estructuraHTML
}

// Mostrar propiedades en venta y alquiler
mostrarPropiedades(propiedadesEnVenta, ".props-venta")
mostrarPropiedades(propiedadesAlquiler, ".props-alquiler")
