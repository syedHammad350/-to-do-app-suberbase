


const supabaseUrl = 'https://wrqjrxzqnzwxndenybhm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndycWpyeHpxbnp3eG5kZW55YmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMDI5MzYsImV4cCI6MjA1MTg3ODkzNn0.UybrUxy2IRFobYj1mGnua6UT0JOrPMNOscHl4Rg7Vps"
const supabaseClient =supabase.createClient(supabaseUrl, supabaseKey)
console.log(supabaseClient)



const inpu=document.getElementById('inpu')
const todolist=document.getElementById('todo_list')
console.log(todolist)

 async function loadtodo(){
    const { data, error } = await supabaseClient
  .from('todos')
  .select()
  console.log(data)
   

    

 }

async function addtodo(){
    let task=inpu.value
    const { error } = await supabaseClient
  .from('todos')
  .insert({task})
  console.log(task)


    // const liele=document.createElement('li')
    // liele.classList.add("list")
    // const span=document.createElement('span')
    // span.innerHTML=task
    // span.classList.add('span')
    // const correct_btn=document.createElement('button')
    // correct_btn.innerHTML= "&#10003;"
    // correct_btn.classList.add('correct')
    // correct_btn.addEventListener('click',()=>{
    //     span.classList.add('complete')
    // })
    
    // const delete_btn=document.createElement('button')
    // delete_btn.innerHTML= "&#10006;"
    // delete_btn.classList.add('wrong')
    // delete_btn.addEventListener('click',()=>{
    //     liele.remove()
    // })


    // liele.appendChild(span)
    // liele.appendChild(correct_btn)
    // liele.appendChild(delete_btn)
    // todolist.appendChild(liele)
     inpu.value=''


    
}
function addui(){
     const liele=document.createElement('li')
    liele.classList.add("list")
    const span=document.createElement('span')
    span.innerHTML=inpu.value
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
}
loadtodo()