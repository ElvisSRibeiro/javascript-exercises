//ctrl + / comenta multiplas linhas automaticamente
function getDiaSemanaTexto() {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0 : 
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1 : 
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2 : 
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3 : 
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4 : 
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5 : 
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6 : 
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default : diaSemanaTexto = null;
            return diaSemanaTexto;
    }

}

const data = new Date('1994-04-16 00:00:');
const diaSemana = data.getDay();

console.log(diaSemana, getDiaSemanaTexto(diaSemana));