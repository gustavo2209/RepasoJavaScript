function cambiarMsg() {
    $("#msg").html("<span style='color:red'>Otro mensaje</span>");
}

function restablecerMsg() {
    $("#msg").text("Hola Mundo");
}

function tomarMsg() {
    alert($("#msg").text());
}

/*--------------------------------------------------------------------- */

function cajaPut() {
    $("#caja").val("algo en el text");
}

function cajaGet() {
    alert($("#caja").val());
}
