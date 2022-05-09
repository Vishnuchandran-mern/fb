$(document).ready(function(){
    $('#signup-form').validate({
        rules:{
            email:{
                required:true
                
            },
            pass:{
                required:true,
                minlength:4,
                maxlength:6
            },
            Day:{
                required:true
            }
            
    
    
    
            


        },
        messages:{
            pass:{
                required:'venam',
                minlength:'noki adikadai'
            }

            
        }


      
        
    
    })
    


})