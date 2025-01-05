const inpu=document.getElementById('inpu')
const todolist=document.getElementById('todo_list')
console.log(todolist)

function addtodo(){
    let task=inpu.value
    const liele=document.createElement('li')
    liele.classList.add("list")
    const span=document.createElement('span')
    span.innerHTML=task
    span.classList.add('span')
    const correct_btn=document.createElement('button')
    correct_btn.innerHTML= "&#10003;"
    correct_btn.classList.add('correct')
    correct_btn.addEventListener('click',()=>{
        span.classList.add('complete')
    })
    
    const delete_btn=document.createElement('button')
    delete_btn.innerHTML= "&#10006;"
    delete_btn.classList.add('wrong')
    delete_btn.addEventListener('click',()=>{
        liele.remove()
    })


    liele.appendChild(span)
    liele.appendChild(correct_btn)
    liele.appendChild(delete_btn)
    todolist.appendChild(liele)
     inpu.value=''


    
}
