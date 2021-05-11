   	function greet(Age ) {
   if(Age=>18)
   {
    return 'You are  Aligibale to vote';
   } 
   else
   {
   	return 'you are note  eligibale to vote'
   } 
}

function name(user, func)
{

    // accessing passed function
    const message = func();
      
    console.log(`${message} ${user}`);
    
}

greet(20)
name('John', greet);
