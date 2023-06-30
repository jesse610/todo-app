import { createTodoItem, createProject, projects, setProject, removeProject, removeTodoItem, editDueDate, editTitle, editDescription, editPriority, editProjectName, markTodoItemComplete, currentActiveProject, pushTodoItem, sortTodos } from "./applicationLogic";
import { displayProjects, displayTasks, displayTaskForm, addProject, displayProjectBtns, displaySorted } from "./domLogic";
import './style.css'

displayProjects()
displayTasks()
displayTaskForm()
addProject()
displayProjectBtns()
displaySorted()
console.log(projects)
sortTodos('today')

