// var headertitle=document.getElementById('header-title')
// console.log(headertitle)
// headertitle.textContent="HEllO"
// headertitle.innerText="Naseem"

// console.log(headertitle.textContent)
// console.log(headertitle.innerText)

// headertitle.innerHTML='<h3>My name is Naseem</h3>'
// headertitle.style.borderBottom='2px solid black'

// headertitle.parentElement.parentElement.parentElement.parentElement.style.borderBottom='2px solid red'

// var items=document.getElementsByClassName('list-group-item');
// console.log(items)
// items[0].textContent="Hello"
// for(let item of items){
//     item.style.backgroundColor="gray";
// }


// let li=document.getElementsByTagName('li')
// console.log(li)
// for(let item of li){
//     item.style.backgroundColor="gray";
// }

// var headertitle=document.querySelector('#main-header')
// headertitle.style.borderBottom='2px solid black'

// let input=document.querySelector('input')
// input.value="naseem"

// let items=document.querySelector('.list-group-item')
// console.log(items)

// const title=document.querySelectorAll('.list-group-item')
// console.log(title)

// title.forEach((item)=>{
//     item.style.color="red"
// })

// const listitems=document.querySelector('#items')
// console.log(listitems.childNodes)
// console.log(listitems.children)
// console.log(listitems.firstChild)
// console.log(listitems.firstElementChild)

// const newdiv=document.createElement('div');

// var newdivtex=document.createTextNode("Hello world")

// newdiv.appendChild(newdivtex)
// newdiv.style.fontSize='15px'

// console.log(newdiv)

// var container=document.querySelector('header .container')

// var h1=document.querySelector('header h1')

// container.insertBefore(newdiv,h1)

var form=document.querySelector('form').addEventListener('submit',onsubmit)
var itemlist=document.getElementById('items')
var filter=document.getElementById('filter').addEventListener('keyup',filterEvent)
itemlist.addEventListener('click',deleteevent)

function onsubmit(e){
    e.preventDefault();

    let newInput=document.getElementById('item').value;
    let li=document.createElement('li')
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newInput))
    var del=document.createElement('button');
    
    del.classList='btn btn-danger btn-sm float-right delete'
    del.appendChild(document.createTextNode('X'))

    li.appendChild(del)

    itemlist.appendChild(li)


}

function deleteevent(e){
   if(e.target.classList.contains('delete'))
   if(confirm('Are you Sure')){
    var li=e.target.parentElement;
    itemlist.removeChild(li)
   }

}

function filterEvent(e){
    let text=e.target.value.toLowerCase()
    
    var items=itemlist.getElementsByTagName('li')
    Array.from(items).forEach((item)=>{
        let ItemName=item.firstChild.textContent;
        if(ItemName.toLocaleLowerCase().lastIndexOf(text)!=-1){
            item.style.display='block'
        }else{
            item.style.display='none'
        }
    })

}
