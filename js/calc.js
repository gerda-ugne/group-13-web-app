
// Sets everything to 0
setAllToZero();
clearWaste();

//
var newtotal=0, x = 0, score=0;

// Each function calculates waste for the corresponding type of trash and changes the user score

function calculateGlassWaste()
{

var field = document.getElementById('glass').value;
x = newtotal;
newtotal=field*(-2) + x;
document.getElementById('disp').innerHTML= newtotal;
}


function calculateCardboardWaste()
{
var field = document.getElementById('cardboard').value;
x=newtotal;
newtotal=field*(-3) + x;
document.getElementById('disp').innerHTML= newtotal;
}


function calculateTinsWaste()
{
var field = document.getElementById('tins').value;
x=newtotal;
newtotal=field*(-4) + x;
document.getElementById('disp').innerHTML= newtotal;
}


function calculatePlasticBottlesWaste()
{
var field = document.getElementById('plasticBottles').value;
x=newtotal;
newtotal=field*(-5) + x;
document.getElementById('disp').innerHTML= newtotal;
}


function calculateDrinkCartonsWaste()
{
var field = document.getElementById('drinkCartons').value;
x=newtotal;
newtotal=field * (1) + x;
document.getElementById('disp').innerHTML= newtotal;
}


function calculatePlasticBagsWaste()
{
var field = document.getElementById('plasticBags').value;
x=newtotal;
newtotal=field*(2) + x;
document.getElementById('disp').innerHTML= newtotal;
}



function calculatePlasticFilmWaste()
{
var field = document.getElementById('plasticFilm').value;
x=newtotal;
newtotal=field*(3) + x;
document.getElementById('disp').innerHTML= newtotal;
}



function calculateSoiledCardboardWaste()
{
var field = document.getElementById('soiledCardboard').value;
x=newtotal;
newtotal=field*(4)+ x;
document.getElementById('disp').innerHTML= newtotal;
}




function calculateCrispPacketWaste()
{
var field = document.getElementById('crispPacket').value;
x=newtotal;
newtotal=field*(5) + x;
document.getElementById('disp').innerHTML= newtotal;
}

// Sets user score to 0
function clearWaste()
{
x=newtotal;
newtotal=0;
document.getElementById('disp').innerHTML= newtotal;
}

// Set field values to 0
function setAllToZero()
{
  document.getElementById('glass').value = undefined;
  document.getElementById('cardboard').value = undefined;
  document.getElementById('tins').value = undefined;
  document.getElementById('plasticBottles').value = undefined;
  document.getElementById('drinkCartons').value = undefined;
  document.getElementById('plasticBags').value = undefined;
  document.getElementById('plasticFilm').value = undefined;
  document.getElementById('soiledCardboard').value = undefined;
  document.getElementById('crispPacket').value = undefined;
}
