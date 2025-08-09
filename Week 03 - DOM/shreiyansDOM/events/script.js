// events => any movement on the screen knwon as event 
// event listener => respond to the event 



    //  let h1 = document.querySelector("h1");

    //  h1.addEventListener("click",function(){
    //     h1.style.color="red";

    //  })

    //  console.log(h1);


    // let pp =  document.querySelector("#pp");
    // console.log(pp);

    
    // pp.addEventListener("dblclick",function(){
    //                     pp.style.color ="green";
                       
    //  });

            // document.addEventListener("keydown",function(e){
            //         console.log("key pressed",e.key);

            // });

            // let input = document.querySelector("input");
            // input.addEventListener("input",function(e){
            //   if(e.data !==null){
            //         console.log(e.data);
            //   }else{
            //     console.log("this is a backslash");
            //   }



               
            // })

            // change , submit , onSubmit
            // /   /   /   




            // let h1 = document.querySelector("h3");
            // console.log(h1) 

            // let sel = document.querySelector("select");
            // console.log(sel)
            // sel.addEventListener("change",function(e){
            //     console.log(e);
            //     console.log(e.target.value);

            //     if(e.type === "change"){
            //         h1.textContent = "item is selectd"
            //         console.log(e.target.value +"is selected");
            //     }
            // })


            let h1 = document.querySelector("h1");
            console.log(h1);
            window.addEventListener("keyup",function(e){
                console.log(e.key);
               if(e.key !== " "){
                 h1.textContent = `${e.key}`
               }
               
            })