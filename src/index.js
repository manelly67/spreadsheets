import './style.css';


function component() {
    const element = document.createElement('div');
    const texto = document.createElement('p');
    texto.textContent = "INICIANDO REPOSITORIO"
    element.appendChild(texto);

    return element;
  }
  
  document.body.appendChild(component());