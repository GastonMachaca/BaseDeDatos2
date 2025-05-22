/* 
Crear una base llamada cafetería, con una colección de cafés especiales que tenga los siguientes datos:
• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
• array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
• peso en gramos
• intensidad (baja, media, alta)
• array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
• si contiene leche (booleano)
• objeto tostador con localidad, nombre y cuit.
Cargar 10 cafés especiales.
Los datos a cargar en cada entidad deben ser útiles a las consultas que se detallan a continuación

*/

/* 

Objetivos de Aprobación No Directa (Calificación de 4 a 5 puntos):
1) Crear el script .js con la creación de la base de datos y las colecciones.
2) Buscar cuántos cafés contienen chocolate entre sus ingredientes.
3) Buscar cuántos cafés son de tipo “cold brew”· y contienen “vainilla” entre sus ingredientes.
4) Listar tipo y peso de los cafés que tienen una intensidad “media”.
5) Obtener tipo, peso e intensidad de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.

Objetivos de Aprobación Directa (Calificación de 6 a 10 puntos):
6) Mostrar los cafés que fueron tostados en localidades que contengan “san”, permitiendo buscar por “san”
y que se muestren también los de “santos”, “san justo”, etc. Ordenar el resultado por peso de manera
descendente.
7) Mostrar la sumar del peso de cada tipo de Café.
8) Agregar el ingrediente “whisky” todos los cafés cuya intensidad es alta.
9) Sumarle 10 al peso de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
10) Eliminar los cafés cuyo peso sea menor o igual a 210.

*/

// 1) Crear el script .js con la creación de la base de datos y las colecciones.

db = db.getSiblingDB("cafeteria");

db.cafes.drop();

db.cafes.insertMany([
    {//1 Objeto
        tipo: "espresso", //• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
        ingredientes: [ 'vainilla-canela','chocolate','caramelo' ], // array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
        peso: 100, // peso en gramos
        intensidad: "baja", // intensidad (baja, media, alta)
        precios: [
            { tipo : 'efectivo', precio : 100},
            { tipo : 'tarjeta', precio : 150}
        ],// array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
        contieneLeche : true, //si contiene leche (booleano)
        tostador : {
            localidad : "Capital Federal",
            nombre : "The last coffee",
            cuit : "11-12345678-5"
        }  // objeto tostador con localidad, nombre y cuit.
    },
    {//2 Objeto
        tipo: "filtrado", //• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
        ingredientes: [ 'vainilla-canela','chocolate','caramelo' ], // array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
        peso: 200, // peso en gramos
        intensidad: "media", // intensidad (baja, media, alta)
        precios: [
            { tipo : 'efectivo', precio : 300},
            { tipo : 'tarjeta', precio : 350}
        ],// array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
        contieneLeche : false, //si contiene leche (booleano)
        tostador : {
            localidad : "Mendoza",
            nombre : "The coffee",
            cuit : "11-12351261-8"
        }  // objeto tostador con localidad, nombre y cuit.
    },
    {//3 Objeto
        tipo: "cold brew", //• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
        ingredientes: [ 'vainilla','caramelo' ], // array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
        peso: 100, // peso en gramos
        intensidad: "alta", // intensidad (baja, media, alta)
        precios: [
            { tipo : 'efectivo', precio : 400},
            { tipo : 'tarjeta', precio : 450}
        ],// array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
        contieneLeche : false, //si contiene leche (booleano)
        tostador : {
            localidad : "Jujuy",
            nombre : "First coffee",
            cuit : "11-12345678-5"
        }  // objeto tostador con localidad, nombre y cuit.
    },
    {//4 Objeto
        tipo: "descafeinado", //• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
        ingredientes: [ 'vainilla','caramelo' ], // array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
        peso: 100, // peso en gramos
        intensidad: "alta", // intensidad (baja, media, alta)
        precios: [
            { tipo : 'efectivo', precio : 500},
            { tipo : 'tarjeta', precio : 550}
        ],// array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
        contieneLeche : true, //si contiene leche (booleano)
        tostador : {
            localidad : "Salta",
            nombre : "Takes Coffee",
            cuit : "11-12345678-5"
        }  // objeto tostador con localidad, nombre y cuit.
    },
    {//5 Objeto
        tipo: "cold brew", //• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
        ingredientes: [ 'caramelo' ], // array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
        peso: 100, // peso en gramos
        intensidad: "alta", // intensidad (baja, media, alta)
        precios: [
            { tipo : 'efectivo', precio : 600},
            { tipo : 'tarjeta', precio : 650}
        ],// array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
        contieneLeche : true, //si contiene leche (booleano)
        tostador : {
            localidad : "Salta",
            nombre : "Takes Coffee",
            cuit : "11-12345678-5"
        }  // objeto tostador con localidad, nombre y cuit.
    },
    {//6 Objeto
        tipo: "descafeinado", //• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
        ingredientes: [ 'vainilla-canela','caramelo' ], // array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
        peso: 220, // peso en gramos
        intensidad: "baja", // intensidad (baja, media, alta)
        precios: [
            { tipo : 'efectivo', precio : 700},
            { tipo : 'tarjeta', precio : 750}
        ],// array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
        contieneLeche : true, //si contiene leche (booleano)
        tostador : {
            localidad : "Salta",
            nombre : "Moe's Coffee",
            cuit : "11-12345678-5"
        }  // objeto tostador con localidad, nombre y cuit.
    },
    {//7 Objeto
        tipo: "cold brew", //• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
        ingredientes: ['caramelo','vainilla' ], // array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
        peso: 250, // peso en gramos
        intensidad: "baja", // intensidad (baja, media, alta)
        precios: [
            { tipo : 'efectivo', precio : 800},
            { tipo : 'tarjeta', precio : 850}
        ],// array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
        contieneLeche : true, //si contiene leche (booleano)
        tostador : {
            localidad : "san pedro",
            nombre : "Moe's Coffee",
            cuit : "11-12345678-5"
        }  // objeto tostador con localidad, nombre y cuit.
    },
    {//8 Objeto
        tipo: "descafeinado", //• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
        ingredientes: [ 'vainilla-canela','caramelo','vainilla' ], // array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
        peso: 350, // peso en gramos
        intensidad: "media", // intensidad (baja, media, alta)
        precios: [
            { tipo : 'efectivo', precio : 900},
            { tipo : 'tarjeta', precio : 950}
        ],// array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
        contieneLeche : true, //si contiene leche (booleano)
        tostador : {
            localidad : "san justo",
            nombre : "Second Coffee",
            cuit : "11-12345678-5"
        }  // objeto tostador con localidad, nombre y cuit.
    },
    {//9 Objeto
        tipo: "descafeinado", //• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
        ingredientes: [ 'vainilla-canela','caramelo','vainilla' ], // array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
        peso: 50, // peso en gramos
        intensidad: "media", // intensidad (baja, media, alta)
        precios: [
            { tipo : 'efectivo', precio : 1000},
            { tipo : 'tarjeta', precio : 1050}
        ],// array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
        contieneLeche : true, //si contiene leche (booleano)
        tostador : {
            localidad : "Salta",
            nombre : "Test Coffee",
            cuit : "11-12345678-5"
        }  // objeto tostador con localidad, nombre y cuit.
    },
    {//10 Objeto
        tipo: "descafeinado", //• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
        ingredientes: [ 'vainilla-canela','caramelo' ], // array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
        peso: 150, // peso en gramos
        intensidad: "alta", // intensidad (baja, media, alta)
        precios: [
            { tipo : 'efectivo', precio : 1100},
            { tipo : 'tarjeta', precio : 1150}
        ],// array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
        contieneLeche : true, //si contiene leche (booleano)
        tostador : {
            localidad : "santos",
            nombre : "Pepe Coffee",
            cuit : "11-12345678-5"
        }  // objeto tostador con localidad, nombre y cuit.
    }
])

// 2) Buscar cuántos cafés contienen chocolate entre sus ingredientes.

print("Cantidad de cafes con chocolate:" ,db.cafes.countDocuments({ingredientes : "chocolate"}));

// 3) Buscar cuántos cafés son de tipo “cold brew”· y contienen “vainilla” entre sus ingredientes.

print("Cantidad de cafes que son de tipo cold brew y contienen vainilla :" ,db.cafes.countDocuments(
    {
        tipo : "cold brew",
        ingredientes : { $elemMatch : { $regex: /vainilla/}}
    }
));

// 4) Listar tipo y peso de los cafés que tienen una intensidad “media”.

print("Lista de cafes por tipo y peso con intensidad media:" ,
    db.cafes.find(
        { intensidad : "media"},
        { tipo : 1, peso : 1}
    )
);

// 5) Obtener tipo, peso e intensidad de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.

print("Lista de cafes por tipo, peso e intensidad cuyo peso se encuentre entre 200 y 260 inclusive:" ,
    db.cafes.find(
        { peso : { $gte: 200 , $lte : 260}},
        { tipo : 1, peso : 1, intensidad : 1}
    )
);

/*6) Mostrar los cafés que fueron tostados en localidades que contengan “san”, permitiendo buscar por “san”
y que se muestren también los de “santos”, “san justo”, etc. Ordenar el resultado por peso de manera
descendente. */



// 7) Mostrar la sumar del peso de cada tipo de Café.

print("Mostrar la sumar del peso de cada tipo de Cafe:");

db.cafe.aggregate([
    {
        $group : {
            _id : "$tipo",
            peso : {$sum : "$peso"}
        }
    }
    
]);