import { projectLogger } from "./domLogic"
import format from "date-fns/format"
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";

let currentActiveProject = 'DEFAULT'

const projects = {
    'DEFAULT' : [],
}

// todo factory function
function TodoItem (title, description, dueDate, priority) {
        this.completed = false
        this.title = title
        this.description = description
        this.dueDate = format(new Date(`${dueDate}`), 'MM/dd/yyyy')
        this.priority = priority
}

// formats date
const formatDate = (dateValue) => {
    const selectedDate = new Date(`${dateValue}T00:00:00`)
    const timeZone = 'America/Los_Angeles'

    const utcDate = zonedTimeToUtc(selectedDate, timeZone)
    const losAngelesDate = utcToZonedTime(utcDate, timeZone)
    const formattedDate = format(losAngelesDate, "yyyy-MM-dd HH:mm:ss", { timeZone: timeZone })

    return formattedDate
}

// creates new project array
const createProject = (projectName) => {
    projectName = changeToUpperCase(projectName)
    let projectNames = currentProjects()
    if(projectNames.includes(projectName))
    {
        projectLogger('Project name already exists!')
    }
    else
    {
        projects[projectName] = []
        return projects
    }
}

const markTodoItemComplete = (todoItem) => {
    todoItem.completed = true
    return todoItem
}

const markTodoItemNotComplete = (todoItem) => {
    todoItem.completed = false
    return todoItem
}

// changes text to uppercase
const changeToUpperCase = (text) => {
    return text.toUpperCase()
}

// creates todo item by calling factory function and pushes to current array
const createTodoItem = (title, description, dueDate, priority) => {
    let todo = new TodoItem(title, description, dueDate, priority)
    pushTodoItem(todo)
    console.log(todo)
    return todo
}

// pushes todo item into current active project
const pushTodoItem = (todoItem) => {
    projects[currentActiveProject].push(todoItem)
}

// returns list of current project names
const currentProjects = () => {
    let projectNamesArr = []
    for (const names in projects) 
    {
        projectNamesArr.push(names.toUpperCase())
    }

    return projectNamesArr
}

// sets current project
const setProject = (projectName = 'DEFAULT') => {
    projectName = changeToUpperCase(projectName)
    const projects = currentProjects()

    if (projects.includes(projectName))
    {
        currentActiveProject = projectName
        return `${logger(`Set project to: ${currentActiveProject}`)}`
    }
    else
    {
        console.log('Project name does not exist!')
    }
}

// removes project from project object
const removeProject = (project) => {
    project = changeToUpperCase(project)
    if (project == projects[project])
    {
        return logger('Cannot delete default project!')
    }
    
    let projectNames = currentProjects()
    console.log(projectNames)

    if (projectNames.includes(project))
    {
        if(project == currentActiveProject)
        {
            setProject()
        }
        delete projects[project]
    }
    else
    {
        return logger('Cannot remove a project that does not exist!')
    }
}

// Logs message to console
const logger = (message) => {
    console.log(message)
}

// removes todo item
const removeTodoItem = (todoItem, project = currentActiveProject) => {
    if (todoItem < 0 || todoItem > projects[project].length - 1)
    {
        return logger('Todo item does not exist!')
    }
    else
    {
        projects[project].splice(projects[project].indexOf(todoItem), 1)
        console.log(projects)
        return projects[project]
    }
}

// edits todo due date
const editDueDate = (todoItem, newDate) => {
    const project = projects[currentActiveProject]
    if (todoItem < 0 || todoItem > project.length - 1)
    {
        return logger('Todo item does not exist!')
    }
    else
    {   
        let formattedDate = formatDate(newDate)
        console.log(formattedDate)
        let reformat = format(new Date(`${formattedDate}`), 'MM/dd/yyyy')
        return todoItem.dueDate = reformat
    }
}

const editTitle = (todoItem, newTitle) => {
    const project = projects[currentActiveProject]
    if (todoItem < 0 || todoItem > project.length - 1)
    {
        return logger('Todo item does not exist!')
    }
    else
    {
        return todoItem.title = newTitle
    }
}

const editDescription = (todoItem, newDesc) => {
    const project = projects[currentActiveProject]
    if (todoItem < 0 || todoItem > project.length - 1)
    {
        return logger('Todo item does not exist!')
    }
    else
    {   
        return todoItem.description = newDesc
    }
}

const editPriority = (todoItem, newPriority) => {
    const project = projects[currentActiveProject]
    if (todoItem < 0 || todoItem > project.length - 1)
    {
        return logger('Todo item does not exist!')
    }
    else
    {
        return todoItem.priority = newPriority
    }
}

const editProjectName = (oldProjectName, newProjectName) => {
    let p = currentProjects()
    if (oldProjectName == 'DEFAULT')
    {
        return logger('Cannot change default project!')
    }
    else if (!p.includes(oldProjectName))
    {
        return logger('Project does not exist to change name!')
    }
    else if (p.includes(newProjectName))
    {
        return logger('New project name already exists!')
    }
    else
    {
        delete Object.assign(projects, {[newProjectName]: projects[oldProjectName.toUpperCase()]})[oldProjectName]
        return projects
    }
}


// sort functionality
// -- refactor this messy code
const sortTodos = (timeFrame) => {
    if (timeFrame == 'today')
    {
        let today = new Date()
        let formattedDate = format(today, 'MM/dd/yyyy')
        today = new Date(formattedDate)
        return createSortedObj(timeFrame, today)
    }
    else if(timeFrame == 'week')
    {   
        let today = new Date()
        let formattedToday = format(today, 'MM/dd/yyyy')
        today = new Date(formattedToday)
        console.log(today.getTime())

        let week = new Date()
        week.setDate(week.getDate() + 7)
        let formattedWeek = format(week, 'MM/dd/yyyy')
        week = new Date(formattedWeek)
        return createSortedObj(timeFrame, today, week)
    }
    else if(timeFrame == 'month')
    {
        let today = new Date()
        let formattedToday = format(today, 'MM/dd/yyyy')
        today = new Date(formattedToday)
        console.log(today.getTime())

        let month = new Date()
        month.setMonth(month.getMonth() + 1)
        let formattedMonth = format(month, 'MM/dd/yyyy')
        month = new Date(formattedMonth)
        console.log(month)
        return createSortedObj(timeFrame, today, month)
    }
}

const createSortedObj = (timeframe, date, dates = null) => {
    let sorted = {}

    for(const i in projects)
        {   
            sorted[i] = []
            for(let j = 0; j < projects[i].length; j++)
            {
                for(const keys in projects[i][j])
                {
                    if (keys == 'dueDate' && timeframe == 'today')
                    {
                        let dueDate = new Date(projects[i][j][keys])
                        dueDate = dueDate.getTime()

                        if (dueDate == date.getTime())
                        {
                            sorted[i].push(projects[i][j])
                        }
                    }
                    else if (keys == 'dueDate' && timeframe == 'week' || timeframe == 'month')
                    {
                        let dueDate = new Date(projects[i][j][keys])
                        dueDate = dueDate.getTime()

                        if (dueDate >= date.getTime() && dueDate <= dates.getTime())
                        {
                            sorted[i].push(projects[i][j])
                        }
                    }
                }
            }

            if (sorted[i].length == 0)
            {
                delete sorted[i]
            }
        }   
    return sorted
}

export {
    projects,
    removeProject,
    createProject,
    createTodoItem,
    setProject,
    removeTodoItem,
    editDueDate, 
    editTitle,
    editDescription,
    editPriority,
    editProjectName, 
    currentActiveProject,
    markTodoItemComplete,
    markTodoItemNotComplete,
    formatDate,
    sortTodos,
    currentProjects
}