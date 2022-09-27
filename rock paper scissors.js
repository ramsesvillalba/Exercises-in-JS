var piedra = 1;
var papel = 2;
var tijera = 3;

var jugador=2;
var computador=1;

if (jugador == 3  && computador == 2) 
{
    console.log("Tijera corta papel, ganaste");
}
else if (jugador == 1  && computador == 3) 
{
    console.log("Piedra rompe tijera, ganaste");
}
else if (jugador == 2  && computador == 1) 
{
    console.log("Papel envuelve piedra, ganaste");
}
else if (jugador == computador ) 
{
    console.log("mismos elementos, esto es un empate");
}
else {
    console.log("Perdiste")
}   
