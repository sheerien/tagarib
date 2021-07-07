// global variables
let form = document.querySelector('.add-task');
let taskInput = document.querySelector('#task-input')
let addTask = document.querySelector('[type="submit"]')
let noTask = document.querySelector('.no-task')
let showTask = document.querySelector('.show-task')
let taskCount = document.querySelector('.task-count span')
let taskFinish = document.querySelector('.task-finish span')

// localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];
let data = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : []

console.log(tasks)


// toggle placeholder
function togglePlace(ele, str) {
    ele.addEventListener('focus', function(e) {
        e.target.placeholder = ""
    })
    ele.addEventListener('blur', function(e) {
        e.target.placeholder = str
    })
}

// create html 
function createTaskHtml(task) {
    let mainSpan = document.createElement('span')
    mainSpan.setAttribute('class', 'task')
    let content = `
    ${task}
    <span class="control">
        <span class="update"><i class="far fa-edit"></i></span>
        <span class="delete"><i class="far fa-trash-alt"></i></span>
        <span class="finish"><i class="far fa-check-circle"></i></span>
    </span>
    
    `
    mainSpan.innerHTML = content
    showTask.appendChild(mainSpan)

}


// focus on load
window.onload = function() {
    taskInput.focus();
    togglePlace(taskInput, 'Enter Your Task')
}

// form preventDefault
form.addEventListener('submit', function(e) {
    e.preventDefault()
})

// add task
addTask.addEventListener('click', function() {
    if (!taskInput.value) {
        alert('pls enter your task')

    } else {
        // console.log(taskInput.value)
        // noTask.remove();
        if (tasks.includes(taskInput.value)) {
            taskInput.value = ''
            alert('task exist')
            console.log(data)
                // location.reload();

        } else {
            // console.log(tasks)
            location.reload();
            tasks.push(taskInput.value)
            localStorage.setItem('tasks', JSON.stringify(tasks))
            taskInput.value = ''
            console.log(data)
        }

    }

})

taskCount.textContent = data.length.toString()

// show tasks

data.map(task => {
    createTaskHtml(task)
})

let allElements = [...showTask.children]

console.log(allElements.length)
    // typeof(finish) != 'undefined' && finish != null
if (allElements.length > 0) {
    let count = 0
        // finish
    for (let i = 0, len = allElements.length; i < len; i++) {
        allElements[i].querySelector('.finish').addEventListener('click', function(e) {
            e.target.parentNode.parentNode.parentNode.classList.toggle("complete")
            if (e.target.parentNode.parentNode.parentNode.classList.contains("complete")) {
                // console.log(e.target.parentNode.parentNode.parentNode.childNodes[0])
                count++
                taskFinish.textContent = count.toString()
            } else if (!e.target.parentNode.parentNode.parentNode.classList.contains("complete")) {
                count--
            }
            taskFinish.textContent = count.toString()
        })
    }
    // delete
    for (let i = 0, len = allElements.length; i < len; i++) {
        allElements[i].querySelector('.delete').addEventListener('click', function(e) {
            //delete from data array
            let eleText = e.target.parentNode.parentNode.parentNode.textContent.trim()
            console.log(eleText)
            let newData = data.filter(task => task !== eleText);
            data = newData
            console.log(newData)
            console.log(data)
            if (!data.length > 0) {
                localStorage.clear()
                location.reload()
            } else {
                localStorage.setItem('tasks', JSON.stringify(data))
            }

            e.target.parentNode.parentNode.parentNode.remove();
            taskCount.textContent = data.length.toString()
        })
    }
    // html update
    function htmlUpdate(textNode, ele) {
        // create div => container update elements
        let updateContainer = document.createElement("div")
            // add class to div element
        updateContainer.setAttribute('class', 'div-update ')

        // create submit
        let inputSubmit = document.createElement("input")
            // add attributes to input submit
        inputSubmit.setAttribute('type', 'submit')
        inputSubmit.setAttribute('class', 'input-submit')
        inputSubmit.value = "+"

        // create input update value
        let updateInput = document.createElement("input")

        // add attributes to input update value
        updateInput.setAttribute("type", "text")
        updateInput.setAttribute("class", "input-update")
        updateInput.value = textNode
        updateContainer.appendChild(updateInput)
        updateContainer.appendChild(inputSubmit)

        // insert div update element before my element next sibling
        showTask.insertBefore(updateContainer, ele.nextElementSibling)
    }
    // update

    for (let i = 0, len = allElements.length; i < len; i++) {
        allElements[i].querySelector('.update').addEventListener('click', function(e) {
            // parent element
            let ele = e.target.parentNode.parentNode.parentNode

            // text Content
            let textNode = ele.textContent.trim()

            // call function htmlUpdate
            htmlUpdate(textNode, ele)

            let task = document.querySelector('.task')
                // console.log(task)
                // console.log(task.nextElementSibling)

            console.log('==================================')


            let updateBtn = document.querySelector('.input-submit');
            console.log(updateBtn)
            updateBtn.addEventListener('click', function(e) {
                let parent = this.parentNode.previousElementSibling
                console.log(parent)
                let val = this.previousElementSibling.value
                console.log(val)
            })


        })

    }

}