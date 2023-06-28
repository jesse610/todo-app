
import { projects, currentActiveProject, setProject, createTodoItem, createProject, removeProject, markTodoItemComplete, markTodoItemNotComplete, formatDate, editTitle, editDescription, editDueDate, editPriority, removeTodoItem, sortTodos, editProjectName } from "./applicationLogic";
import format from "date-fns/format";
import './style.css'
import { parse, parseISO } from "date-fns";

const displayProjects = () => {
    let projectUl = document.querySelector('.project-items')
    const h2 = document.querySelector('.task-container > div > h2')
    projectUl.textContent = ''

    for (const names in projects) {
        let li = createProjectListItem(names)
        projectUl.appendChild(li)
    }
    displayProjectBtns()
}

const createProjectListItem = (name) => {
    let li = document.createElement('li');
    let a = createProjectLink(name);
    li.appendChild(a)
    return li
}

const createProjectLink = (name) => {
    let a = document.createElement('a')
    a.setAttribute('href', '#')
    a.setAttribute('class', 'project')
    a.textContent = name
    a.addEventListener('click', () => {
        handleProjectLinkClick(a.textContent)
    })
    return a
}

const handleProjectLinkClick = (projectName) => {
    setProject(projectName)
    displayTasks()
    updateTaskHeading()
    hideAddTaskButton(false)
    hideAddTaskForm(true)
    if (document.querySelector('#update-form') != null)
    {
        removeUpdateTaskForm()
    }
}

const hideAddTaskButton = (tf) => {
    const addTaskBtn = document.querySelector('#add-task-btn')
    addTaskBtn.hidden = tf
}

const hideAddTaskForm = (tf) => {
    const form = document.querySelector('#task-form')

    if(form != null && tf == true)
    {
        form.remove()
    }
}

const updateTaskHeading = (name = currentActiveProject) => {
    const h2 = document.querySelector('.task-container > div > h2')
    h2.textContent =  `Tasks: ${name}`
}

const displayTasks = (type, items) => {
    const projectTodos = projects[currentActiveProject]
    console.log(currentActiveProject)
    const taskItemsUl = document.querySelector('#task-items')
    taskItemsUl.className = 'default-task-items'
    taskItemsUl.textContent = ''
    console.log(projectTodos)
    
    for (const i in projectTodos)
    {
        let li = createLiTodoItem(projectTodos[i], currentActiveProject)
        taskItemsUl.appendChild(li)
    }
}


const createLiTodoItem = (todoItem, project, timeframe) => {
    let li = document.createElement('li')
    for (const keys in todoItem)
    {  
        if(keys == 'completed')
        {
            let checkbox = createTodoCheckbox(todoItem)
            li.appendChild(checkbox)
        }
        else
        {
            let span = createTodoSpan(todoItem[keys])
            li.appendChild(span)
        }
    }

    for (let i = 0; i < 1; i++)
    {
        let editBtn = createEditBtn(todoItem, timeframe)
        let deleteBtn = createDeleteBtn(todoItem, project, timeframe)
        li.appendChild(editBtn)
        li.appendChild(deleteBtn)
    }
    return li
}

const createTodoCheckbox = (todoItem) => {
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('change', () => {
        console.log(todoItem)
        updateCompleteStatus(todoItem)
        console.log(projects)
    })
    updateCheckboxDisplay(todoItem, checkbox)

    return checkbox
}

const updateCompleteStatus = (todoItem) => {
    let todoItemValue = todoItem.completed
    console.log(todoItemValue)
    if (todoItemValue != true)
    {
        return markTodoItemComplete(todoItem)
    }
    else
    {
        return markTodoItemNotComplete(todoItem)
    }
}

const updateCheckboxDisplay = (todoItem, checkbox) => {
    if (todoItem.completed == true)
    {
        checkbox.checked = true
    }
    else
    {
        checkbox.checked = false
    }
}

const createTodoSpan = (todoItemValue) => {
    let span = document.createElement('span')
    span.textContent = todoItemValue
    return span
}

const createEditBtn = (todoItem, timeframe) => {
    const editBtn = document.createElement('button')
    editBtn.type = 'button'
    editBtn.textContent = 'edit'
    editBtn.addEventListener('click', () => {
        populateEditForm(todoItem, timeframe)
        hideAddTaskButton(true)
    })
    return editBtn
}

const createDeleteBtn = (todoItem, project, timeframe) => {
    const deleteBtn = document.createElement('button')
    deleteBtn.type = 'button'
    deleteBtn.textContent = 'delete'
    deleteBtn.addEventListener('click', () => {
        deleteTodo(todoItem, project, timeframe)
    })
    return deleteBtn
}

const populateEditForm = (todoItem, timeframe) => {
    const updateForm = createUpdateForm(todoItem, timeframe)
}

const createUpdateForm = (todoItem, timeframe) => {
    const form = document.createElement('form')
    form.action = '#'
    form.id = 'update-form'
    
    // updates title input
    const title = document.createElement('input')
    title.type = 'text'
    title.name = 'title'
    title.autocomplete = "off"
    title.id = 'title-update'
    title.value = todoItem.title
    form.appendChild(title)

    // updates description input
    const desc = document.createElement('input')
    desc.type = 'text'
    desc.name = 'description'
    desc.autocomplete = "off"
    desc.id = 'description-update'
    desc.value = todoItem.description
    form.appendChild(desc)

    // updates date input
    const date = document.createElement('input')
    date.type = 'date'
    date.name = 'deadline'
    date.id = 'deadline-update'
    const day = todoItem.dueDate
    const parsedDate = parse(day, 'MM/dd/yyyy', new Date())
    const formattedDate = format(parsedDate, "yyyy-MM-dd")
    date.value = formattedDate
    form.appendChild(date)

    // creates select 
    const select = document.createElement('select')
    select.name = 'priority'
    select.id = 'priority-update'
    console.log(select)
    form.appendChild(select)

    // creates disabled option
    const option1 = document.createElement('option')
    option1.disabled = true
    option1.textContent = 'Choose priority'
    option1.id = 'default'
    select.appendChild(option1)

    // creates low option
    const option2 = document.createElement('option')
    option2.value = 'low'
    option2.textContent = 'Low'
    select.appendChild(option2)

    // creates medium option
    const option3 = document.createElement('option')
    option3.value = 'medium'
    option3.textContent = 'Medium'
    select.appendChild(option3)

    // creates medium option
    const option4 = document.createElement('option')
    option4.value = 'high'
    option4.textContent = 'High'
    select.appendChild(option4)

    select.value = todoItem.priority.toLowerCase()
    // creates cancel button
    const cancelBtn = document.createElement('button')
    cancelBtn.id = 'cancel-btn'
    cancelBtn.type = 'button'
    cancelBtn.textContent = 'Cancel'
    cancelBtn.addEventListener('click', () => {
        document.querySelector('#update-form').remove()
    })
    form.appendChild(cancelBtn)

    // creates update button
    const updateBtn = document.createElement('button')
    updateBtn.id = 'update-btn'
    updateBtn.type = 'submit'
    updateBtn.textContent = 'Update task'
    updateBtn.addEventListener('click', (e) => {
        e.preventDefault()
        onUpdateFormSubmit(title, desc, date, select, todoItem, timeframe)
    })
    form.appendChild(updateBtn)
    // appends form to container
    const container = document.querySelector('.form-container')
    container.appendChild(form)
}

// updates todos with edits
const onUpdateFormSubmit = (title, desc, date, select, todoItem, timeframe) => {
    editTitle(todoItem, title.value)
    editDescription(todoItem, desc.value)
    editDueDate(todoItem, date.value)
    editPriority(todoItem, select.value)
    removeUpdateTaskForm()
    hideAddTaskButton(false)
    updateDisplay(timeframe)
}

const removeUpdateTaskForm = () => {
    const updateForm = document.querySelector('#update-form')
    updateForm.remove()
}

// deletes todo item
const deleteTodo = (todoItem, project, timeframe) => {
    removeTodoItem(todoItem, project)
    updateDisplay(timeframe)
}

const updateDisplay = (timeframe) => {
    const sortedTaskItems = document.querySelector('.sorted-task-items')
    if (sortedTaskItems != null)
    {
        createSortedDisplay(timeframe)
    }
    else
    {
        displayTasks()
    }

}

// displays task form
const displayTaskForm = () => {
    const addTaskBtn = document.querySelector('#add-task-btn')
    addTaskBtn.addEventListener('click', function() {
        createTaskForm()
        hideAddTaskButton(true)
    })
}

const createTaskForm = () => {
    const form = document.createElement('form')
    form.action = '#'
    form.id = 'task-form'
    
    // creates title input
    const input1 = document.createElement('input')
    input1.type = 'text'
    input1.name = 'title'
    input1.placeholder = 'Title'
    input1.autocomplete = "off"
    input1.id = 'title'
    form.appendChild(input1)

    // creates description input
    const input2 = document.createElement('input')
    input2.type = 'text'
    input2.name = 'description'
    input2.placeholder = 'Description'
    input2.autocomplete = "off"
    input2.id = 'description'
    form.appendChild(input2)

    // creates date input
    const input3 = document.createElement('input')
    input3.type = 'date'
    input3.name = 'deadline'
    input3.id = 'deadline'
    form.appendChild(input3)

    // creates select 
    const select = document.createElement('select')
    select.name = 'priority'
    select.id = 'priority'
    form.appendChild(select)

    // creates disabled option
    const option1 = document.createElement('option')
    option1.selected = true
    option1.disabled = true
    option1.textContent = 'Choose priority'
    option1.id = 'default'
    select.appendChild(option1)

    // creates low option
    const option2 = document.createElement('option')
    option2.value = 'low'
    option2.textContent = 'Low'
    select.appendChild(option2)

    // creates medium option
    const option3 = document.createElement('option')
    option3.value = 'medium'
    option3.textContent = 'Medium'
    select.appendChild(option3)

    // creates medium option
    const option4 = document.createElement('option')
    option4.value = 'high'
    option4.textContent = 'High'
    select.appendChild(option4)

    // creates cancel button
    const cancelBtn = document.createElement('button')
    cancelBtn.id = 'cancel-btn'
    cancelBtn.type = 'button'
    cancelBtn.textContent = 'Cancel'
    cancelBtn.addEventListener('click', cancelTodo)
    form.appendChild(cancelBtn)

    // creates submit button
    const submitBtn = document.createElement('button')
    submitBtn.id = 'submit-btn'
    submitBtn.type = 'submit'
    submitBtn.textContent = 'Create task'
    submitBtn.addEventListener('click', onTaskFormSubmit)
    form.appendChild(submitBtn)

    // appends form to container
    const container = document.querySelector('.form-container')
    container.appendChild(form)
}

// cancels todo item
const cancelTodo = () => {
    hideAddTaskButton(false)
    hideAddTaskForm(true)
}

// creates todo item
const onTaskFormSubmit = (e) => {
    e.preventDefault()
    let title = document.querySelector('#title')
    let desc = document.querySelector('#description')
    let deadline = document.querySelector('#deadline')
    let priority = document.querySelector('#priority')

    let formErrors = checkFormValues(title, desc, deadline, priority)
    if (!formErrors)
    {   
        const formattedDate = formatDate(deadline.value)
        createTodoItem(title.value, desc.value, formattedDate, priority.value)
        displayTasks()
        resetForm()
        hideAddTaskButton(false)
        hideAddTaskForm(true)
        console.log(projects)
    }
}

// checks form for any invalid inputs
const checkFormValues = (title, desc, deadline, priority) => {
    let errors = false

    if (title.value == '') 
    {
        title.classList.add('error')
        errors = true
    } 
    
    if (desc.value == '')
    {
        desc.classList.add('error')
        errors = true
    } 
    
    if (deadline.value == '')
    {
        deadline.classList.add('error')
        errors = true
    } 
    
    if (priority.value == 'Choose priority') 
    {
        priority.classList.add('error')
        errors = true
    }

    return errors
}


// resets form values after submit
const resetForm = () => {
    const form = document.querySelector('#task-form')
    form.reset()
    const priority = document.querySelector('#priority')
    priority.selectedIndex = 0
}

const addProject = () => {
    const addProjectBtn = document.querySelector('#add-project-btn')
    addProjectBtn.addEventListener('click', function(e) {
        const projectInputs = document.querySelectorAll('#project-name-input')
        
        if (projectInputs.length == 0)
        {
            displayProjectForm()
            e.stopPropagation()
        }
    })
}

const displayProjectForm = () => {
    const taskItemsUI = document.querySelector('.project-items')

    const form = document.createElement('form')
    form.id = 'project-name-form'

    const input = document.createElement('input')
    input.type = 'text'
    input.name = 'project'
    input.id = 'project-name-input'
    form.appendChild(input)

    const input2 = document.createElement('input')
    input2.type = 'submit'
    input2.hidden = true
    form.appendChild(input2)
    form.addEventListener('submit', function(e) {
        onProjectSubmit(e)
    })

    taskItemsUI.appendChild(form)
    input.focus()

    // removes input if not clicked on 
    const inputField = document.querySelector('#project-name-input')

    document.addEventListener('click', function(event) {
        if (!form.contains(event.target) && event.target !== inputField) {
            inputField.remove()
            form.remove()
        }
    })
}

const onProjectSubmit = (e) => {
    e.preventDefault()
    const projectHeading = document.querySelector('.project-heading')
    const projectName = document.querySelector('#project-name-input')
    const span = document.createElement('span')
    span.id = 'error-message'
    projectHeading.appendChild(span)

    if (projectName.value == '')
    {
        projectLogger('Error! Project name cannot be empty')
    }
    else
    {
        console.log(projectName.value)
        createProject(projectName.value)
        displayProjects()
    }
}

// displays error message for new projects that are made
const projectLogger = (text) => {
    const errorMessage = document.querySelector('#error-message')
    errorMessage.textContent = text

    setTimeout(() => {
        errorMessage.remove()
    }, 3000)
}

const displayProjectBtns = () => {
    const displayedProjects = document.querySelectorAll('.project-items > li')
    displayedProjects.forEach(project => {
        console.log(project.textContent)
        if (project.textContent != 'DEFAULT' && project.querySelector('button') === null)
        {
            addRemoveProjectBtn(project)
            addEditProjectBtn(project)
        }
    })
}

const addRemoveProjectBtn = (project) => {
    let deleteBtn = createRemoveProjectBtn()
    project.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', () => {
        deleteProject(project)
    })
}

const addEditProjectBtn = (project) => {
    let editBtn = createEditProjectBtn()
    project.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', () => {
        editProjectNameProject(project)
    })
}

const createRemoveProjectBtn = () => {
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Remove'
    deleteBtn.type = 'button'
    return deleteBtn
}

const deleteProject = (project) => {
    let projectName = project.querySelector('a')
    removeProject(projectName.textContent)
    console.log(projects)
    displayProjects()
    displayTasks()
    updateTaskHeading()
    hideAddTaskForm(true)
    hideAddTaskButton(false)
}

const createSortedDisplay = (timeFrame) => {
    const sortedTodos = sortTodos(timeFrame)
    console.log(sortedTodos)
    const taskItemsUl = document.querySelector('#task-items')
    taskItemsUl.className = 'sorted-task-items'
    taskItemsUl.textContent = ''
    
    for (const key in sortedTodos)
    {   
        for(const todo in sortedTodos[key])
        {
            let li = createLiTodoItem(sortedTodos[key][todo], key, timeFrame)
            taskItemsUl.appendChild(li)
        }
    }
}

const displaySorted = () => {
    const sortTimeframes = document.querySelectorAll('.sort-timeframe')
    console.log(sortTimeframes)
    sortTimeframes.forEach(timeframe => {
        timeframe.addEventListener('click', () => {
            createSortedDisplay(timeframe.textContent.toLowerCase())
            updateTaskHeading(timeframe.textContent)
            hideAddTaskButton(true)
            hideAddTaskForm(true)
        })
    })
}

export {
    displayProjects,
    displayTasks,
    displayTaskForm,
    addProject,
    projectLogger,
    displayRemoveProjectBtns,
    displaySorted
}