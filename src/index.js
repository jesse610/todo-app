import { createTodoItem, createProject, projects, setProject, removeProject, removeTodoItem, editDueDate, editTitle, editDescription, editPriority, editProjectName } from "./applicationLogic";
import { displayProjects, displayTasks, displayTaskForm, addProject, displayRemoveProjectBtns } from "./domLogic";
import './style.css'

createProject('test 2')

displayProjects()
displayTasks()
displayTaskForm()
addProject()
// displayRemoveProjectBtns()
console.log(projects)