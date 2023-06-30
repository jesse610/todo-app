import { projectLogger } from "./domLogic"
import format from "date-fns/format"
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import { storeLocalStorage, retrieveLocalStorage } from "./storage";

let currentActiveProject = 'DEFAULT'

let projects;

if (retrieveLocalStorage())
{
    projects = retrieveLocalStorage()
}
else
{
    projects = [
        {
            name: 'DEFAULT', 
            tasks: [],
        },
    ]
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
        const newProject = {name: projectName, tasks: []}
        projects.push(newProject)
        storeLocalStorage(projects)
        return projects
    }
}

const markTodoItemComplete = (todoItem) => {
    todoItem.completed = true
    storeLocalStorage(projects)
    return todoItem
}

const markTodoItemNotComplete = (todoItem) => {
    todoItem.completed = false
    storeLocalStorage(projects)
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
    const project = getCurrentProject()
    console.log(project)
    project.tasks.push(todoItem)
    storeLocalStorage(projects)
}

const getCurrentProject = () => {
    const project = projects.filter(property => property.name == currentActiveProject)
    return project[0]
}

// returns list of current project names
const currentProjects = () => {
    const names = projects.map(property => property.name)
    console.log(names)
    return names
}

// sets current project
const setProject = (projectName = 'DEFAULT') => {
    projectName = changeToUpperCase(projectName)
    const names = currentProjects()

    if (names.includes(projectName))
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
    const defaultProject = projects[0]

    if (project == defaultProject.name)
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
        const index = projects.findIndex(p => p.name == project)
        projects.splice(index, 1)
        storeLocalStorage(projects)
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
const removeTodoItem = (todoItemIndex, projectIndex) => {
    const projectObj = projects[projectIndex]
    const tasks = projects[projectIndex].tasks
    if (todoItemIndex < 0 || todoItemIndex > tasks.length - 1)
    {
        return logger('Todo item does not exist!')
    }
    else
    {
        projectObj.tasks.splice(todoItemIndex, 1)
        console.log(projects)
        storeLocalStorage(projects)
        return projectObj
    }
}

// edits todo due date
const editDueDate = (todoItem, newDate) => {
    if (todoItem < 0)
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
    if (todoItem < 0)
    {
        return logger('Todo item does not exist!')
    }
    else
    {
        return todoItem.title = newTitle
    }
}

const editDescription = (todoItem, newDesc) => {
    if (todoItem < 0)
    {
        return logger('Todo item does not exist!')
    }
    else
    {   
        return todoItem.description = newDesc
    }
}

const editPriority = (todoItem, newPriority) => {
    if (todoItem < 0)
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
    oldProjectName = oldProjectName.toUpperCase()
    newProjectName = newProjectName.toUpperCase()
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
        const index = projects.findIndex((project) => project.name === oldProjectName);
        if (index !== -1)
        {
            projects[index].name = newProjectName
            storeLocalStorage(projects)
        }
        return projects
    };
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
    let sorted = []

    for(let i = 0; i < projects.length; i++)
        {   
            const newProject = {name: projects[i].name, tasks: []}
            sorted.push(newProject)
            for(let j = 0; j < projects[i].tasks.length; j++)
            {
                for(const keys in projects[i].tasks[j])
                {
                    if (keys == 'dueDate' && timeframe == 'today')
                    {
                        let dueDate = new Date(projects[i].tasks[j][keys])
                        dueDate = dueDate.getTime()

                        if (dueDate == date.getTime())
                        {
                            console.log(sorted[i].tasks)
                            sorted[i].tasks.push(projects[i].tasks[j])
                            console.log(sorted)
                        }
                    }
                    else if (keys == 'dueDate' && timeframe == 'week' || timeframe == 'month')
                    {
                        let dueDate = new Date(projects[i].tasks[j][keys])
                        dueDate = dueDate.getTime()

                        if (dueDate >= date.getTime() && dueDate <= dates.getTime())
                        {
                            sorted[i].tasks.push(projects[i].tasks[j])
                        }
                    }
                }
            }

            // if (sorted[i].tasks.length == 0)
            // {
            //     sorted.splice(sorted.indexOf(sorted[i].name), 1)
            // }
        }
    return sorted.filter(project => project.tasks.length > 0)
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
    currentProjects,
    getCurrentProject
}