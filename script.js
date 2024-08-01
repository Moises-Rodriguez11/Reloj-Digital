function actualizarReloj() {
    const ahora = new Date();
    let horas = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    
    const amPm = horas >= 12 ? 'P.M' : 'A.M';
    
    horas = horas % 12;
    horas = horas ? horas : 12;

    const tiempoFormateado = `${horas.toString().padStart(2, '0')}:${minutos}:${segundos} ${amPm}`;
    
    document.getElementById('hora').textContent = tiempoFormateado;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();
