# ENTREGA 1 WEB 💻 
# 👑 ROYALRACE 👑


##  Idea básica juego 🎲

El juego consiste en un tablero de NxN de tal forma que cada jugador comienza ubicandose en cada esquina (2-4 jugadores), la selección del jugador que comienza se realizará al azar y desde ahí el siguiente turno será dado al jugador de la derecha de quien inicia. Cada turno puedes comprar algo en la tienda y avanzar una casilla o comprar algo en la tienda y usar un objeto. Máximo se puede avanzar una casillap por turno y este movimiento será en todas las direccines excepto en diagonal y a cualquier casilla que se encuentre dentro del tablero. Gana el jugador que llega primero a la corona que se encuentra en el medio del tablero.>

En este sitio web tendrás acceso a 4 diferentes páginas, Home, Principal, Reglas y Team en donde encontrarás la pagina principal para iniciar sesión o registrate, un resumen del juego, las reglas del juego y la información del equipo que participo en esta entrega respectivamente.

## Elementos estáticos 🧍‍♀️

Hasta el momento los botones de Iniciar sesión, Registrarse, Iniciar Partida y Ver Perfil no se encuentran funcional pero se implementaran en las siguientes entregas. 

## Elementos dinámicos 🚂

Los elementos dinámicos de la página Reglas fueron realizados con _useState_ para crear estados, _useEffect_ para realizar el efecto del icono que va cambiando de imagen despues de un tiempo determinado tanto para los objetos como para las casillas y con elementos _onClick_ para poder realizar las funciones de avanzar o retroceder en la información de las reglas al dar click en los respectivos botones.

## Elementos importantes del juego 👑

Dentro de las reglas se mencionan las diferentes casillas y objetos existentes, las cuales serán mencionadas a continuacion:

## Casillas 🔳
- Casilla moneda: te da aleatoriamente una cantidad de dinero.

- Casilla calavera: el siguiente turno no puedes realizar ninguna acción 

- Casilla aleatorea: es una casilla no visible que puede ser cualquiera de las otras casillas mencionadas en esta lista 

- Casilla tesoro: te entrega un objeto al azar 

- Casilla ladrón: robar todo el dinero a uno de los jugadores rivales a elección 

- Casilla aliado: cuando caes en esta casilla ganas dinero ára regalarlo a otro jugador. 

## Objetos ⚔️

- Muro: Objeto que permite bloquear una casilla a elección y bloquear el paso por ella. 

- Espada: Atacas a un jugador y pierde el siguiente turno. 

- Escudo: Cuando el jugador adquiere este objeto se activa automáticamente, es 	decir, si un jugador en su turno ataca a otro y este presenta un objeto escudo, se salva de perder el siguiente turno, pero pierde su objeto escudo. No aplica para robos de dinero.