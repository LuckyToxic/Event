
// ПЕРВОЕ ЗАДАНИЕ НА СМЕНУ ЦВЕТА ПРИ НАВЕДЕНИИ НА БЛОК 

box1.addEventListener('mouseover',function(){
    box4.style.backgroundColor = 'green'
})

box1.addEventListener('mouseout',function(){
    box4.style.backgroundColor = 'gray'
})

box2.addEventListener('mouseover',function(){
    box4.style.backgroundColor = 'yellow'
})

box2.addEventListener('mouseout',function(){
    box4.style.backgroundColor = 'gray'
})

box3.addEventListener('mouseover',function(){
    box4.style.backgroundColor = 'orange'
})

box3.addEventListener('mouseout',function(){
    box4.style.backgroundColor = 'gray'
})




// ВТОРОЕ ЗАДАНИЕ НА ПЕРЕМЕЩЕНИЕ БЛОКА

let  box = document.getElementById('box1')

function moveBox(event){
    if(event.button == 0){
        box.style.position = 'absolute'
        box.style.left = event.pageX -100 + 'px'  
        box.style.top = event.pageY -100 + 'px' 
        box.style.transition = '1s'
    }else if(event.button == 1){
        box2.style.position = 'absolute'
        box2.style.left = event.pageX -100 + 'px'  
        box2.style.top = event.pageY -100 + 'px'
        box2.style.transition = '1s'
    }else if(event.button == 2){
        box3.style.position = 'absolute'
        box3.style.left = event.pageX -100 + 'px'  
        box3.style.top = event.pageY -100 + 'px'
        box3.style.transition = '1s'
    }
}
    


// ТРЕТЬЕ ЗАДАНИЕ НА ПЕРЕМЕЩЕНИЕ ТРЕХ БЛОКОВ

