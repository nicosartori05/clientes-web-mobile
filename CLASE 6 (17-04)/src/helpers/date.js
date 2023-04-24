/**
 * Transforma un objeto Date a un string de fecha con formato: dd-MM-AAAA HH:mm:ss
 *
 * @param {Date} date
 * @return {string}
 */
export function dateToString(date) {
    // Forma 1: Usando los métodos de Date.
    // const year = String(date.getFullYear());
    // const month = String(date.getMonth() + 1).padStart(2, 0); // Los meses van de 0 a 11.
    // const day = String(date.getDate()).padStart(2, 0);
    // const hours = String(date.getHours()).padStart(2, 0);
    // const minutes = String(date.getMinutes()).padStart(2, 0);
    // const seconds = String(date.getSeconds()).padStart(2, 0);
    //
    // return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

    // Forma 2: Usando la API de Intl.
    // Creamos un objeto de Intl para formatear la fecha.
    const formattedDate = new Intl.DateTimeFormat('es-AR', {
        day: '2-digit', month: '2-digit', year: 'numeric',
    }).format(date);
    const formattedTime = new Intl.DateTimeFormat('es-AR', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
    }).format(date);

    return `${formattedDate} ${formattedTime}`;
}
