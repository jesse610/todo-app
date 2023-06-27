import { createTodoItem, createProject, projects, setProject, removeProject, removeTodoItem, editDueDate, editTitle, editDescription, editPriority, editProjectName, markTodoItemComplete, currentActiveProject } from "./applicationLogic";
import { displayProjects, displayTasks, displayTaskForm, addProject, displayRemoveProjectBtns } from "./domLogic";
import './style.css'

createTodoItem('Test title', 'Test descr', '06/28/23', 'High')
createTodoItem('Test title', 'Test descr', '06/28/23', 'High')
console.log(projects[currentActiveProject][0])

displayProjects()
displayTasks()
displayTaskForm()
addProject()
displayRemoveProjectBtns()

