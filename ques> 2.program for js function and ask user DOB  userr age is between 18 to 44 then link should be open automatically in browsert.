<html>
<body>
<input type="date" id="txtDOB" /> 
<button id="btnCalculate"  onclick="fnCalculateAge();" >done</button> 
<script>
function fnCalculateAge(){

     var userDateinput = document.getElementById("txtDOB").value;  
	 console.log(userDateinput);
	 
     // convert user input value into date object
	 var birthDate = new Date(userDateinput);
	  console.log(" birthDate"+ birthDate);
	 
	 // get difference from current date;
	 var difference=Date.now() - birthDate.getTime(); 
	 	 
	 var  ageDate = new Date(difference); 
	 var calculatedAge=   Math.abs(ageDate.getUTCFullYear() - 1970);
	  if( calculatedAge>18 && calculatedAge<=44)
	  {
          window.open(
              "https://selfregistration.cowin.gov.in/");
	  }
	  else
	  {
	  	document.write("you are not eligilable for vacination")
	  }

}
</script>
</body>
</html>
