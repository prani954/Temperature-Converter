//------------------------------------------------------
//temperature conversion
//------------------------------------------------------
const degC = document.querySelector('#degC')
const degF = document.querySelector('#degF')
const conc = document.getElementById('con-cel')
const conf = document.getElementById('con-far')
const convF = document.querySelector('#convertF')
const convC = document.querySelector('#convertC')
const err = document.querySelector('#err')
const image = document.querySelector('#temp-img')
const errn = document.querySelector('#errn')
const imagen = document.querySelector('#temp-imgn')
const reset = document.querySelector('#reset')
let cold = "./assets/cold.gif"
let cool = "./assets/cool.gif"
let warm = "./assets/warm.gif"

let celFar
let farCel
let tempImg = ''
let tempImgn = ''

function cImg(ele,res){
    tempImg = ''
    tempImg = `<img src=${res}>`

    ele.innerHTML = tempImg
}
function changeImage(i,val){
    if(val<32){
        cImg(i,cold)
    }
    else if(val>=32 && val<=50){
        cImg(i,cool)
    }
    else{
        cImg(i,warm)
    }
}
function errorCheck(ele1,ele2,ele3,msg){
        ele1.innerText = msg
        clear(ele2,ele3)
}
function clearN(ele1,ele2){
    ele1.innerText = ''
    ele2.innerText = ''
}
function clear(ele1,ele2){
    ele1.innerHTML = ''
    ele2.innerHTML = ''
}
convF.addEventListener('click',()=>{
    let cel = degC.value.trim()
    if(cel==='')
    {
        errorCheck(err,conf,image,'please Enter value in deg C')
        return;
    }
    let celNum = +cel
    if(isNaN(parseFloat(celNum)))
    {
        clear(conf,image)
        err.innerText = `${cel} is not a Number, please enter a valid number`
        return;
    }
    else{
        err.innerText = ''
        celFar = (9/5)*(celNum)+32;
        conf.innerHTML = celFar+" &deg;F";
        changeImage(image,parseInt(celFar))
    }
})
convC.addEventListener('click',()=>{
    let far = degF.value.trim()
    if(far==='')
    {
        errorCheck(errn,conc,imagen,'please Enter value in deg F')
        return;
    }
    let farNum = +far
    if(isNaN(parseFloat(farNum)))
    {
        clear(conc,imagen)
        errn.innerText = `${far} is not a Number, please Enter a valid number`
        return;
    }
    else{
        errn.innerText = ''
        farCel = (5/9)*(farNum-32)
        conc.innerHTML = farCel+" &deg;C";
        changeImage(imagen,parseInt(farNum))
    }
})
reset.addEventListener('click',()=>{
    degC.value = ''
    degF.value = ''
    clear(conf,image)
    clear(conc,imagen)
    clearN(err,errn)
})
