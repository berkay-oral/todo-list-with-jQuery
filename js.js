  
  
$(document).ready(function(){
    $(".inputArea button").click(function(){

        let value = $("input").val();

        if(value === ''){
          
             $(document).ready(function(){
                 $("#div1").fadeIn();
                 $("#div1").children().slideDown()
                 
                $("#div1").click(function(){
                    $(this).fadeOut()
                    $("#div1").children().slideUp()
                })
            }) 
        }
        else{

                
            $("ul").append( '<li><div class="xGoster"><i class="fas fa-times"></i></div>'+ value +'</li>')
            
            $("li:even").css("background-color","pink")
            $("li:odd").css("background-color", "orange")


            
        
            //NOTLARI SİLME İŞLEMİ
            //li İÇİNDEKİ  .xGoster classına tıkladığımda
             $("li").on("click",".xGoster", function(){
             $(this).parent().slideUp(500, function(){
                 $(this).remove();
             })
            })


          



           }

    })
})


  //input odaklanma olayı
    $(document).ready(function(){
        $("input").focusin(function(){
        $(this).css("background","#8ffffe")
        $(this).css("color","black")
        $(this).attr("placeholder", "")
    })

    $("input").focusout(function(){
        $(this).css("background","white")
        $(this).attr("placeholder", "write something!")
    })
  })
  





 //fadeOut'lu    remove(); 
 $("h4").click(function(){


          $(document).ready(function(){
              $(".popUp2Back").fadeIn()
              
              let yes = $(".yes")
              let no = $(".no")
              
              yes.click(function(){
                    $("ul").children().fadeOut(1000,  function(){//fadeout 1 saniye de remove et h4 tıkladığında
                        $(this).remove()
                        })
                        $(".popUp2Back").fadeOut()

              })

              no.click(function(){
                  $(".popUp2Back").fadeOut()
              })
          })  
    
});








