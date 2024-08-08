function changeStyle() {
    const divElement = document.getElementById("my-div");
    //divElement.style.backgroundColor = "lightblue";
    divElement.style.backgroundColor = "Purple";
    divElement.style.color = "White";
    divElement.style.fontSize = "24px";
    divElement.style.fontWeight = "bold";
}


const pElements = document.getElementsByTagName("p");
    console.log(pElements);
   
    for (let p of pElements){
        p.style.backgroundColor="yellow";
    }   
let headingElements = document.getElementsByClassName("my-heading");
    for (let head of headingElements){
        head.style.fontWeight = "italic";
    }
let subheadingElements = document.getElementsByClassName ("subheading");
    for (let shead of subheadingElements){
        shead.style.color = "orange";
    }
 