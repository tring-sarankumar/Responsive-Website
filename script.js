const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

const openFullImg=(pic)=>{
    fullImgBox.style.display="flex";
    fullImg.src=pic;
}

const closeFullImg = () =>{
    fullImgBox.style.display="none";

}