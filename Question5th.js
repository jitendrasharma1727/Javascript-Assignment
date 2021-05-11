         function reverse(str)
                {
  	               let rev_str = "";
                  for( let i = str.length-1 ;i >= 0 ;i--)
                       {
                        rev_str+= str[i];
                        }
    // return reverse string 
                      return rev_str;
                }
       
  
             function is_palidrome( str)
               {

                 	 reverse_str = reverse(str);
    
                   if( reverse_str === str)
                  {
                    console.log("passed string is palindrome ");
                  }
                   else
                 {
                   console.log("passed string is not palindrome")
                 }
  
             }

             is_palidrome("Madam");
             is_palidrome("nusrsers")
