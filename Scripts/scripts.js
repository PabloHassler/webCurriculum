//variable global
archivoInput = 0;

// cargar la foto de perfil
function validarExt()
{
    document.getElementById('visor2').style.display  = 'none';
    document.getElementById('archivoInput').style.display  = 'none';
    archivoInput = document.getElementById('archivoInput');
    var archivoRuta = archivoInput.value;
    var extPermitidas = /(.jpg)$/i;
    if(!extPermitidas.exec(archivoRuta)){
        alert('Asegurese de haber seleccionado una imagen JPG');
        archivoInput.value = '';
        return false;
    }

    else
    {
        if (archivoInput.files && archivoInput.files[0]) 
        {
            cargarFoto();
            var visor = new FileReader();
            visor.onload = function(e) 
            {
                localStorage.setItem("foto-perfil",e.target.result);
                cargarFoto();
            };
            visor.readAsDataURL(archivoInput.files[0]);
        }
    }
}
function cargarFoto(){
    
    var foto = localStorage.getItem("foto-perfil");
    document.getElementById('visorArchivo').innerHTML = '<embed src="'+foto+'" width="160" height="175" />';
}

// guardar datos formulario
document.getElementById('guardar').addEventListener('click',() => guardarDatos())
function guardarDatos(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var dni = document.getElementById('dni').value;
    var cuil = document.getElementById('cuil').value;
    var fecha = document.getElementById("fecha").value;
    var resFecha = fecha.split("-");
    var reversedFecha = resFecha.reverse(); 
    var FechaOb = reversedFecha.join('/');
    var nacionalidad = document.getElementById('nacionalidad').value;
    var telefono = document.getElementById('telefono').value;
    var mail = document.getElementById('mail').value;
    var direccion = document.getElementById('direccion').value;
    var provincia = document.getElementById('provincia').value;
    var perfil = document.getElementById('perfil').value;
    var habilidades = document.getElementById('habilidades').value;
    var experiencia = document.getElementById('experiencia').value;
    if(nombre!=""){
        document.getElementById("nombre").style.backgroundColor = "#F7F7F7";
        document.getElementById("nombre").style.border = "2px solid #000000";
    }
    else {
        document.getElementById("nombre").style.backgroundColor = "#ffeded";
        document.getElementById("nombre").style.border = "2px solid #ffc4c4";
    }
    if(apellido!=""){
        document.getElementById("apellido").style.backgroundColor = "#F7F7F7";
        document.getElementById("apellido").style.border = "2px solid #000000";
    }
    else {
        document.getElementById("apellido").style.backgroundColor = "#ffeded";
        document.getElementById("apellido").style.border = "2px solid #ffc4c4";
    }
    if(dni!=""){
        document.getElementById("dni").style.backgroundColor = "#F7F7F7";
        document.getElementById("dni").style.border = "2px solid #000000";
    }
    else {
        document.getElementById("dni").style.backgroundColor = "#ffeded";
        document.getElementById("dni").style.border = "2px solid #ffc4c4";
    }
    if(cuil!=""){
        document.getElementById("cuil").style.backgroundColor = "#F7F7F7";
        document.getElementById("cuil").style.border = "2px solid #000000";
    }
    else {
        document.getElementById("cuil").style.backgroundColor = "#ffeded";
        document.getElementById("cuil").style.border = "2px solid #ffc4c4";
    }
    if(fecha!=""){
        document.getElementById("fecha").style.backgroundColor = "#F7F7F7";
        document.getElementById("fecha").style.border = "2px solid #000000";
    }
    else {
        document.getElementById("fecha").style.backgroundColor = "#ffeded";
        document.getElementById("fecha").style.border = "2px solid #ffc4c4";
    }
    if(nacionalidad!=""){
        document.getElementById("nacionalidad").style.backgroundColor = "#F7F7F7";
        document.getElementById("nacionalidad").style.border = "2px solid #000000";
    }
    else {
        document.getElementById("nacionalidad").style.backgroundColor = "#ffeded";
        document.getElementById("nacionalidad").style.border = "2px solid #ffc4c4";
    }
    if(telefono!=""){
        document.getElementById("telefono").style.backgroundColor = "#F7F7F7";
        document.getElementById("telefono").style.border = "2px solid #000000";
        localStorage.setItem("telefono",telefono);
    }
    else {
        document.getElementById("telefono").style.backgroundColor = "#ffeded";
        document.getElementById("telefono").style.border = "2px solid #ffc4c4";
    }
    if(mail!=""){
        document.getElementById("mail").style.backgroundColor = "#F7F7F7";
        document.getElementById("mail").style.border = "2px solid #000000";
    }
    else {
        document.getElementById("mail").style.backgroundColor = "#ffeded";
        document.getElementById("mail").style.border = "2px solid #ffc4c4";
    }
    if(direccion!=""){
        document.getElementById("direccion").style.backgroundColor = "#F7F7F7";
        document.getElementById("direccion").style.border = "2px solid #000000";
    }
    else {
        document.getElementById("direccion").style.backgroundColor = "#ffeded";
        document.getElementById("direccion").style.border = "2px solid #ffc4c4";
    }
    if(provincia!=""){
        document.getElementById("provincia").style.backgroundColor = "#F7F7F7";
        document.getElementById("provincia").style.border = "2px solid #000000";
    }
    else {
        document.getElementById("provincia").style.backgroundColor = "#ffeded";
        document.getElementById("provincia").style.border = "2px solid #ffc4c4";
    }
    if(perfil!="") {
        document.getElementById("perfil").style.backgroundColor = "#F7F7F7";
        document.getElementById("perfil").style.border = "2px solid #000000";
    }
    else {
        document.getElementById("perfil").style.backgroundColor = "#ffeded";
        document.getElementById("perfil").style.border = "2px solid #ffc4c4";
    }
    if(habilidades!=""){
        document.getElementById("habilidades").style.backgroundColor = "#F7F7F7";
        document.getElementById("habilidades").style.border = "2px solid #000000";
    }
    else {
        document.getElementById("habilidades").style.backgroundColor = "#ffeded";
        document.getElementById("habilidades").style.border = "2px solid #ffc4c4";
    }
    if(experiencia!="") {
        document.getElementById("experiencia").style.backgroundColor = "#F7F7F7";
        document.getElementById("experiencia").style.border = "2px solid #000000";
    }
    else {
        document.getElementById("experiencia").style.backgroundColor = "#ffeded";
        document.getElementById("experiencia").style.border = "2px solid #ffc4c4";
    }
    if ((nombre!="") && (apellido!="") && (dni!="") && (cuil!="") && (fecha!="") && (nacionalidad!="") && (telefono!="") && (mail!="") && (direccion!="") && (provincia!="") && (perfil!="") && (experiencia!="") && (habilidades!="")){
        localStorage.setItem("nombre",nombre);
        localStorage.setItem("apellido",apellido);
        localStorage.setItem("dni",dni);
        localStorage.setItem("cuil",cuil);
        localStorage.setItem("fecha",FechaOb);
        localStorage.setItem("nacionalidad",nacionalidad);
        localStorage.setItem("telefono",telefono);
        localStorage.setItem("mail",mail);
        localStorage.setItem("direccion",direccion);
        localStorage.setItem("provincia",provincia);
        localStorage.setItem("perfil",perfil);
        localStorage.setItem("habilidades",habilidades);
        localStorage.setItem("experiencia",experiencia);
        document.getElementById("formulario").style.display = "none";
        document.getElementById("botones-guardar").style.display = "none";
        document.getElementById("visor-cv").style.display = "flex";
        insertar();
    }
}
//Modificar datos del formulario
document.getElementById('modificar').addEventListener('click', () => modificarDatos())
document.getElementById('modificar2').addEventListener('click', () => modificarDatos())
function modificarDatos(){
    document.getElementById('archivoInput').style.display  = 'flex';
    document.getElementById("formulario").style.display = "flex";
    document.getElementById("botones-guardar").style.display = "flex";
    document.getElementById("visor-cv").style.display = "none";
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var dni = document.getElementById('dni');
    var cuil = document.getElementById('cuil');
    var fecha = document.getElementById('fecha');
    var nacionalidad = document.getElementById('nacionalidad');
    var telefono = document.getElementById('telefono');
    var mail = document.getElementById('mail');
    var direccion = document.getElementById('direccion');
    var provincia = document.getElementById('provincia');
    var perfil = document.getElementById('perfil');
    var habilidades = document.getElementById('habilidades');
    var experiencia = document.getElementById('experiencia');
    nombre.value=localStorage.getItem('nombre');
    apellido.value=localStorage.getItem('apellido');
    dni.value=localStorage.getItem('dni');
    cuil.value=localStorage.getItem('cuil');
    var fechaSecundaria=localStorage.getItem('fecha');
    var resFecha = fechaSecundaria.split("/");
    var reversedFecha = resFecha.reverse(); 
    fecha.value = reversedFecha.join('-');
    nacionalidad.value=localStorage.getItem('nacionalidad');
    telefono.value=localStorage.getItem('telefono');
    mail.value=localStorage.getItem('mail');
    direccion.value=localStorage.getItem('direccion');
    provincia.value=localStorage.getItem('provincia');
    perfil.value=localStorage.getItem('perfil');
    habilidades.value=localStorage.getItem('habilidades');
    experiencia.value=localStorage.getItem('experiencia');
}

//Eliminar datos del formulario
document.getElementById('borrar').addEventListener('click', () => borrarDatos())
function borrarDatos(){
    let formulario = document.getElementById('formulario');
    formulario.reset();

    localStorage.removeItem("foto-perfil")
    localStorage.removeItem("nombre");
    localStorage.removeItem("apellido");
    localStorage.removeItem("dni");
    localStorage.removeItem("cuil");
    localStorage.removeItem("fecha");
    localStorage.removeItem("nacionalidad");
    localStorage.removeItem("telefono");
    localStorage.removeItem("mail");
    localStorage.removeItem("direccion");
    localStorage.removeItem("provincia");
    localStorage.removeItem("perfil");
    localStorage.removeItem("habilidades");
    localStorage.removeItem("experiencia");
}
//Insertar los datos en el CV
function insertar(){
    document.getElementById("nom").innerHTML = localStorage.getItem("nombre");
    document.getElementById("ape").innerHTML = localStorage.getItem("apellido");
    document.getElementById("var-dni").innerHTML = localStorage.getItem("dni");
    document.getElementById("var-cuil").innerHTML = localStorage.getItem("cuil");
    document.getElementById("var-fecha").innerHTML = localStorage.getItem("fecha");
    document.getElementById("var-nacionalidad").innerHTML = localStorage.getItem("nacionalidad");
    document.getElementById("var-cel").innerHTML = localStorage.getItem("telefono");
    document.getElementById("var-mail").innerHTML = localStorage.getItem("mail");
    document.getElementById("var-dire").innerHTML = localStorage.getItem("direccion");
    document.getElementById("var-prov").innerHTML = localStorage.getItem("provincia");
    document.getElementById("var-perfil").innerHTML = localStorage.getItem("perfil");
    document.getElementById("var-habilidades").innerHTML = localStorage.getItem("habilidades");
    document.getElementById("var-experiencia").innerHTML = localStorage.getItem("experiencia");
    
}