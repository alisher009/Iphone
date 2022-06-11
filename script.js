const width = document.querySelector('.Alpine-Green')
const silver = document.querySelector('.Silver')
const gold = document.querySelector('.Gold')
const graphite = document.querySelector('.Graphite')
const sierraBlue = document.querySelector('.Sierra-Blue')
const boxIphone = document.querySelector('.imgiPhone2')


function removeimges(){
    boxIphone.classList.remove('imgiPhone7')
    boxIphone.classList.remove('imgiPhone3')
    boxIphone.classList.remove('imgiPhone4')
    boxIphone.classList.remove('imgiPhone5')
    boxIphone.classList.remove('imgiPhone6')
}


width.onclick = () => {
    removeimges()
    console.log(width);
   boxIphone.classList.add('imgiPhone6')
}
silver.onclick = () => {
    removeimges()
    console.log(silver);
    boxIphone.classList.add('imgiPhone3')
 }
gold.onclick = () => {
    removeimges()
    console.log(gold);
    boxIphone.classList.add('imgiPhone4')
 }
graphite.onclick = () => {
    removeimges()
    console.log(graphite);
    boxIphone.classList.add('imgiPhone5')
 }
sierraBlue.onclick = () => {
    removeimges()
    console.log(sierraBlue);
    boxIphone.classList.add('imgiPhone7')
 }
