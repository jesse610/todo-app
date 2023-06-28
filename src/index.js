import { createTodoItem, createProject, projects, setProject, removeProject, removeTodoItem, editDueDate, editTitle, editDescription, editPriority, editProjectName, markTodoItemComplete, currentActiveProject } from "./applicationLogic";
import { displayProjects, displayTasks, displayTaskForm, addProject, displayRemoveProjectBtns } from "./domLogic";
import './style.css'

createTodoItem('Test title', 'Test descr', '06/28/23', 'High')
createTodoItem('Wash clothes', 'asdfe', '07/10/23', 'low')
console.log(projects[currentActiveProject][0])

displayProjects()
displayTasks()
displayTaskForm()
addProject()
displayRemoveProjectBtns()
console.log(projects)

