 function CelsToFahr(celsi) 
{
 
  var cTemp = celsi;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
  console.log( "fahrenheit is "+ message);
}

function fahrToCels(fahrenheit) 
{
	
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log("celcisius is "+message);
} 

CelsToFahr(45);
fahrToCels(60);
