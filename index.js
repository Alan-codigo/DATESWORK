console.log("Fechas");

// FUNCION QUE ES LLAMADA AL OPRIMIR EL BOTON
function muestraeldia(){
    // FECHA SERA IGUAL AL STRING QUE NOS RETORNE LA FUNCION
    fecha = fechaordenada();
    // LABORABLEONO NOS REGRESA UN BOLEANO Y EL DIA DE LA SEMANA
    let setrabaja = laborableono(fecha);
    // OBTENER DIA ES EL DIA DE LA SEMANA QUE CAE LA FECHA
    let diaescrito = obtenerdia(setrabaja[1]);
    // SI ES VERDADERO SE TRABAJA Y SI ES FALSO NO
    if(setrabaja[0] === true){
        document.getElementById("resultado").innerHTML = "work the day " + diaescrito; 
    } else { 
        document.getElementById("resultado").innerHTML = "dont word the day " + diaescrito; 
    }
}

// CREAMOS LA FUNCION QUE CREA UN STRING FECHA
function fechaordenada(){

    // ASIGNAMOS VALORES A LAS VARIABLES
    let dia = String(document.getElementById("dia").value);
    let mes = String(document.getElementById("mes").value);
    let anio = String(document.getElementById("anio").value);
    
    // DEPENDIENDO EL NUMERO DE MES LE ASIGNAMOS EL NOMBRE DEL MES
    switch(mes){
        case "1":
            mes = "January "
        break;
        case "2":
            mes = "February "
        break;
        case "3":
            mes = "March "
        break;
        case "4":
            mes = "April "
        break;
        case "5":
            mes = "May "
        break;
        case "6":
            mes = "June "
        break;
        case "7":
            mes = "July "
        break;
        case "8":
            mes = "August "
        break;
        case "9":
            mes = "September "
        break;
        case "10":
            mes = "Octuber "
        break;
        case "11":
            mes = "November "
        break;
        case "12":
            mes = "December " 
        break;
    }

    //
    let fecha = mes + dia + ", " + anio + " 00:00:01";

    return fecha;
}

function laborableono(fecha){
    console.log(fecha);
    const d = new Date(fecha);
    let day = d.getDay();
    console.log(day);

    if( day === 0 || day === 6 ){
        console.log(day);
        return [false,day];
    } else { 
        return [true,day];
    }
}

function obtenerdia(x){

    let diadesemana;
    switch(x){
        case 0:
            diadesemana = "Sunday "
        break;
        case 1:
            diadesemana = "Monday "
        break;
        case 2:
            diadesemana = "Tuesday "
        break;
        case 3:
            diadesemana = "Wednesday "
        break;
        case 4:
            diadesemana = "Thursday "
        break;
        case 5:
            diadesemana = "Friday "
        break;
        case 6:
            diadesemana = "Saturday "
        break;
    }

return diadesemana;
}