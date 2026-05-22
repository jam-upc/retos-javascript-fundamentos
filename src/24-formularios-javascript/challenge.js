function prevenirEnvioPorDefecto(evento) {
  evento.preventDefault = true;
  return evento;
}

function extraerDatosFormulario(formulario) {
  const resultado = {
    name: formulario.name,
    message: formulario.message
  };
  return resultado;

}

function guardarEnLocalStorage(datos) {
  
}

function leerDesdeLocalStorage() {
  // Tu código aquí
}

function crearObjetoConTimestamp(nombre, mensaje) {
  // Tu código aquí
}

function renderizarMensajeGuardado(datos) {
  // Tu código aquí
}

function validarFormulario(nombre, mensaje) {
  // Tu código aquí
}

export {
  prevenirEnvioPorDefecto,
  extraerDatosFormulario,
  guardarEnLocalStorage,
  leerDesdeLocalStorage,
  crearObjetoConTimestamp,
  renderizarMensajeGuardado,
  validarFormulario,
};
