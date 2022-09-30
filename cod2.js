var altura
altura = prompt ("Digite a altura: ")
var peso 
peso = prompt ("Digite o peso: ")
var valor 
valor = (peso/(altura * altura))
var m = Math.round (valor)
alert(m)

if(m<=17)
{
   var i = "Muito abaixo do peso!"
}
else if (m >17 && m < 18.49)
{
    var i = "Abaixo do peso!"
}
else if (m > 18.50 && m < 24.99)
{
    var i = "Peso normal!"
}
else if (m > 25 && m < 29.99)
{
    var i = "Acima do peso!"
}
else if ( m > 30 && m < 34.99)
{
    var i = "Obesidade I!"
}
else if ( m > 35 && m < 39.99)
{
    var i = "Obesidade II!"
}
else if ( m > 40)
{
    var i = "Obesidade III!"
}
 alert (i)
 document.write ("Seu IMC é: "+m+" e seu índice de massa corporal é: "+i)
