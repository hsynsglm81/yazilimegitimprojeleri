const colorsContainer=document.getElementById("colorsContainer")
const bigColor=document.getElementById("bigColor")
const img=document.getElementById("img")

// const insan1={
//     name:"huseyin",
//     surname:"saglam",
//     gender:"male"
// }
// insan1.name
// insan2.gender


// const insan2={
//     name:"cuneyt",
//     surname:"kara",
//     gender:"male"
// }

// const buttons=["red","blue","yellow","green","gray","#356"]

// for(let sayac=0;sayac < buttons.length;sayac++){
//     const color=document.createElement("div")
//     color.id=buttons[sayac]
//     color.classList.add("smallBox")
//     color.style.backgroundColor=buttons[sayac];

//     color.addEventListener("click", function () { 
//         bigColor.style.backgroundColor=buttons[sayac];
//     setTimeout(function(){
//      bigColor.style.backgroundColor="white";
//     }, 2000);

//     });

//     colorsContainer.appendChild(color)
// }


// const color1=document.createElement("div")
// color1.id="red"
// color1.classList.add("smallBox")
// color1.style.backgroundColor="red"

// const color2=document.createElement("div")
// color2.id="yellow"
// color2.classList.add("smallBox")
// color2.style.backgroundColor="yellow"

// const color3=document.createElement("div")
// color3.id="green"
// color3.classList.add("smallBox")
// color3.style.backgroundColor="green"

// colorsContainer.appendChild(color1)
// colorsContainer.appendChild(color2)
// colorsContainer.appendChild(color3)


const images=["./img/image1.jpeg","./img/image2.jpeg","./img/image3.jpeg"]
for(let sayac=0;sayac < images.length;sayac++){
    const smallImg=document.createElement("img")

    smallImg.classList.add("smallBox")
    smallImg.setAttribute("src",images[sayac])
        // const color=document.createElement("div")
        // color.id=buttons[sayac]
        // color.classList.add("smallBox")
        // color.style.backgroundColor=buttons[sayac];
    
        smallImg.addEventListener("click", function () { 
            img.setAttribute("src",images[sayac])           
        });
    
        colorsContainer.appendChild(smallImg);
    }

//event listener

// color1.addEventListener("click",function(){
//    bigColor.style.backgroundColor="red"
//    setTimeout(function(){
//     bigColor.style.backgroundColor="white"
//    },2000) 
// })
// color2.addEventListener("click",function(){
//     bigColor.style.backgroundColor="yellow"
//     setTimeout(function(){
//         bigColor.style.backgroundColor="white"
//        },2000) 
//  })
//  color3.addEventListener("click",function(){
//     bigColor.style.backgroundColor="green"
//     setTimeout(function(){
//         bigColor.style.backgroundColor="white"
//        },2000) 
//  })




