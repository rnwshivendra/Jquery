

/*
 selector in jquery -> $("symbol_SelectorName")
 on -> 1. event -> click onchange    2. function ()=>{ code }
*/









$(document).ready(()=>{

//     $("#head").hide();

//     $("body").on("keydown",function (event){
//          if(event.key === "s"){
//             $("#head").show(); 
//          }
//     })

//     $("body").on("keyup",function (event){
//         if(event.key === "s"){
//            $("#head").hide(); 
//         }
//    })

  // $("body").on("keypress", function(){
  //       $(".h-c").toggleClass("head-c");
  // })

  $("#btn").on("click",function(){
       $("form").toggleClass("hide");
  })

  

  
});
 












