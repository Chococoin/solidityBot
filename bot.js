// 'use strict'

const { Telegraf, Markup } = require('telegraf')
const fs = require('fs')

const telegramApiKey = fs.readFileSync(".telegramApiKey").toString().trim()

const app = new Telegraf(telegramApiKey)

var tarea1 =
'\
Tarea 1\n\
1.- ¿Qué son los tipos de datos? \n\t/definicion_de_tipos_de_datos, \n\t/boolean, \n\t/integer, \n\tString, \n\tFloat, \n\tArray, \n\tTuple, \n\tObjecto.\n Lo pueden hacer tomando ejemplos en Python y en Javascript. \n\
2.- ¿Qué son las Variables y las Constantes? \n\
3.- ¿Qué son las funciones?\ \n\
Y finalmente...\
4.- ¿Qué son las clases y las instancias?'

var tarea2 =
'\
Segunda Tarea:\n\n\
1.- ¿Qué significa declaración y asignación de una Variable?\n\n\
2.- Hablando de funciones. ¿Qué es un argumento y en qué se diferencia de un parámetro?\n\n\
3.- ¿Qué es un método y en qué se diferencia de una función? (Se necesita saber muy bien que es una clase para poder responder a esta pregunta)\n\n\
4.- ¿ Cuáles son los operadores matemáticos ? Similitudes y Diferencias entre operadores matemáticos de Javascript y Python.\n\n\
5.- ¿Cuáles son los Operadores Lógicos? Similitudes y diferencias entre Javascript y Python.\n\n\
6.- Responde con "Sí" o "No":. A) ¿Son todos los operadores matemáticos compatibles con todos los tipos de datos? B) ¿Son todos los operadores Lógicos compatibles con todos lo tipos de datos? C) ¿Pueden algunos operadores lógicos o matemáticos trabajar con diferentes tipos de datos contemporáneamente?\n\n\
7.- ¿Cuáles son los tipo de dato en Solidity?\n\
'

var boleano = 
'¿Qué es un booleano?\n\n\
Un boleano es el primer tipo de dato más simple que existe y solo puede tener una de dos formas. Puede ser "Verdadero" o puede ser "Falso"\
En Python el boleano se escribe capitalizado "True / False" mientras en JavaScript y en Solidity se escribe todo en minusculas "true / false"\n\
Deriva directamente de la unidad minima de información que es el bit\n\
0 es Falso y 1 es verdadero.\n\
En otros contextos todo lo que no sea 0, o nulo (null) o indefinido (undefined), se considera verdadero.\
'

var respuesta_al_compilador =
'Para responder a esta pregunta debes pensar en números binarios como seguramente habrás imaginado. La respuesta es "10101110".\n'

var entero =
'¿Qué es un "integer" o entero?\n\n\
Un integer es un numero entero, 0,1,2,3... y no, no llegan hasta el infinito. Una computadora dispone de una cantidad limitada de memoria y además para guardar el valor de un único número el sistema asigna recursos limitados. En Solidity son 256 bits. Por eso veremos que en Solidity el tipo del entero de mayor capacidad se llama uint256 y int256 guarda la mitad pues todos son de valor positivo. Pero no nos adelantemos tanto. Un entero como el 1 no puede ser dividido entre 2 sin que algo extraño suceda.\
Imagina esto por un momento, que tú eres el compilador de un lenguaje de programación extraño que asigna 8 bits de recursos para guardar la información de cualquier entero ¿Cómo guardarías el número 174 dentro de esos 8 bits? -> acá la solución de este problema. \/problema_del_compilador.\
'

var definicion_tipo_dato =
'¿Qué son los tipos de datos?\n\n\
En el universo todo es energía que nunca se destruye; solo se transforma.\
En el mundo de la computación esta ley se mantiene. Nuestra unidad mínima de información, el bit, podría ser conciderado como el atomo de este universo.\
Al igual que el atomo conforma el estado de la materia (gaseoso, liquido, solido, plasma, etc)\ nuestro bit a según de como es agrupado con otros bits conforma el estado o tipo de los datos\
Entre los diferentes lenguajes de programación podrían existir infinidades de tipos de datos, pero los más frecuentes son variaciones de los que aquí vamos a ver \
como boleanos, números enteros, números de punto flotante y cuerdas o estringas. Este grupo de tipos de datos por lo general se agrupan entre los llamados primitivos. Luego hay otros tipos de datos que \
siendo un poco más elaborados podrían no agruparse con los primitivos, aquí podemos mencionar las listas o arrays, los objetos (super importantes) o diccionarios y las funciones o procesos.\
'

var content =
'\
Definición tipo de datos\n\n\
/definicion_tipo_dato\n\
/boolean\n\
/integer\n\
'

// Start command
app.command('/start', ( ctx ) => {
    ctx.reply('Bienvenid@! Soy el 🤖 bot del grupo de clases de Solidity salido de criptocositas de Platzi. Mi misión es ayudarte en todo lo posible para que te conviertas en un programador de Smart Contracts lo más rápido posible. Conmigo puedes revisar las tareas y repasar los conceptos fundamentales. Si quieres que yo realice nuevas tareas sugierelo a Germán, juntos podemos hacer grandes cosas. Para revisar las tareas pincha aquí /tareas para revisar el contenido del taller pincha /contenido. Si no recuerdas los comandos pide /ayuda')
})

app.command('/tareas', ( ctx ) => {
    ctx.reply('- Tarea 1 /tarea1\n- Tarea 2 /tarea2')
})

app.command('/tarea1', ( ctx ) => {
    ctx.reply(tarea1)
})

app.command('/tarea2', ( ctx ) => {
    ctx.reply(tarea2)
})

app.command('/ayuda', ( ctx ) => {
    ctx.reply('Inicia con \/start, ve lo que de allí te interesa.')
})

app.command('/boolean', ( ctx ) => {
    ctx.reply(boleano)
})

app.command('/integer', ( ctx ) => {
    ctx.reply(entero)
})

app.command('/definicion_de_tipos_de_datos', ( ctx ) => {
    ctx.reply(definicion_tipo_dato)
})

app.command('/contenido', ( ctx ) => {
    ctx.reply(content)
})

app.command('/problema_del_compilador', ( ctx ) => {
    ctx.reply(respuesta_al_compilador)
})

app.startPolling()
