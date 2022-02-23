// 'use strict'

const { Telegraf, Markup } = require('telegraf')
const fs = require('fs')

const telegramApiKey = fs.readFileSync(".telegramApiKey").toString().trim()

const app = new Telegraf(telegramApiKey)

var tarea1 =
'\
Tarea 1\n\
1.- ¿Qué son los tipos de datos? \n\t/definicion_de_tipos_de_datos, \n\t/boolean, \n\t/integer, \n\t/float, \n\t/string, \n\tArray, \n\tTuple, \n\tObjecto.\n Lo pueden hacer tomando ejemplos en Python y en Javascript. \n\
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
4.- ¿Cuáles son los operadores matemáticos? Similitudes y Diferencias entre operadores matemáticos de Javascript y Python.\n\n\
5.- ¿Cuáles son los Operadores Lógicos? Similitudes y diferencias entre Javascript y Python.\n\n\
6.- Responde con "Sí" o "No":. A) ¿Son todos los operadores matemáticos compatibles con todos los tipos de datos? B) ¿Son todos los operadores Lógicos compatibles con todos lo tipos de datos? C) ¿Pueden algunos operadores lógicos o matemáticos trabajar con diferentes tipos de datos contemporáneamente?\n\n\
7.- ¿Cuáles son los tipos de datos en Solidity?\n\
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

var numero_de_punto_flotante =
'¿Qué es un número de punto (o coma) flotante?\
Ya les comenté que los enteros son números naturales y estos son muy comodos para contar cosas "enteras". Pero ¿Qué pasa cuando queremos contar fracciones o dividir un número entero impar (como el uno) por un número par (como el 2)?\
Pues depende del lenguaje, en los lenguajes más extrictos como los de tipado estatico eso puede constituir una fuente de error (el programa se detiene bruscamente sin llegar a terminar). En cambio en lenguajes con tipado dinamico es muy posible que no se de un error\
y este es precisamente el problema de los lenguajes de tipado dinamicos que en ocaciones dan "errores silenciosos" que es una de las cosas más horribles que pueden suceder en la programación. Pero para ver esto con más detalles continuemos a aprender lo que es un número de punto flotante.\
Un numero de punto flotante ("float") es un número irracional o mejor entendido como un número con decimales. Ejemplo: 21 es un Int (entero) -> 21.0 es un número con decimal y por lo tanto un número de punto flotante. Observen que el valor absoluto de ambos números es el mismo, sin embargo \
para la computadora son dos números de tipos distintos con el mismo valor.\n\n\
Una curiosidad de Solidity es que NO POSEE un equivalente de este tipo de datos. Para Solidity todos los números son enteros.\n\n\
¡Tareitas Extra!\
¿Podrías encontrar una explicación de porque en Solidity no existe el tipo de dato para números de punto flotante?\
¿Qué sucede en Solidity si un entero impar es dividido por un entero par?\
¿Qué sucede en Solidity si dividimos 10 entre 3?\
(Pista: No existe el lenguaje perfecto, y Solidity no es la exepción de esta regla.)\
'

var estringa =
'¿Qué es una estringa?\n\n\
Hasta ahora hemos visto tipos de datos que representan números. ¿Pero qué pasa cuando necesitamos representar caracteres de letras o emojis*?\
Pues respuesta es el tipo de datos llamado estringa o string (cuerda). Como vimos antes una sucesión de bits en la memoria como el 10101110 que vimos anteriormente puede ser interpretado como el número decimal 174. Sin embargo, cuando \
la computadora sabe que el tipo de dato es una estringa entonces aplicará otra interpretación a dicha sucesión de unos y ceros. Según el lenguaje esta interpretación dependera por cual standar de codificación usa dicho lenguaje el primer estandar de caracteres fue ASCII. \
No se preocupen por aprender de memoria lo que aquí estamos hablando pues son conceptos generales que se aplican en todos los lenguajes y no a solidity en expecifico y tampoco nos interesa tanto (por ahora) entender como Solidity codifica las estringas.\
Lo realmente importante es saber como le debemos presentar a nuestra computadora una información que contiene letras y por lo tanto debe ser del tipo estringa.\
No te vayas confundir porque es realmente muy fácil.\n\n\
Todo lo que debes hacer es encerrar tu sucesión de letras y caracteres con entre dos de estos -> \' <- (comilla simple o apóstrofe)\ o dos de estos -> " <- (comilla doble).\n\n\
"Esto es una estringa creada con comillas dobles"\n\n\
\'Esta es una estringa creada con comillas simples\'\n\n\
¡Tareitas Extra!\n\n\
¿Qué pasa si dentro de mi sucesión de caracteres quiero colocar un apostrofe y estoy creando la estringa con comillas simples o al contrario, quiero colocar dentro de mi estringa unas comillas dobles y he creado la estringa con comillas dobles.? ¿No estaré confundiendo a la computadora así?\
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
Tipos de datos\n\n\
/definicion_tipo_dato\n\
/boolean\n\
/integer\n\
/float\n\
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

app.command('/definicion_de_tipos_de_datos', ( ctx ) => {
    ctx.reply(definicion_tipo_dato)
})

app.command('/boolean', ( ctx ) => {
    ctx.reply(boleano)
})

app.command('/integer', ( ctx ) => {
    ctx.reply(entero)
})

app.command('/float', ( ctx ) => {
    ctx.reply(numero_de_punto_flotante)
})

app.command('/string', ( ctx ) => {
    ctx.reply(estringa)
})

app.command('/contenido', ( ctx ) => {
    ctx.reply(content)
})

app.command('/problema_del_compilador', ( ctx ) => {
    ctx.reply(respuesta_al_compilador)
})

app.startPolling()
