import { createTodoItem, createProject, projects, setProject, removeProject, removeTodoItem, editDueDate, editTitle, editDescription, editPriority, editProjectName, markTodoItemComplete, currentActiveProject, pushTodoItem, sortTodos } from "./applicationLogic";
import { displayProjects, displayTasks, displayTaskForm, addProject, displayProjectBtns, displaySorted } from "./domLogic";
import './style.css'
createTodoItem('Wash clothes', 'asdfe', '07/10/23', 'low')
createTodoItem('Test title', 'Test descr', '06/29/23', 'High')
createTodoItem('Wash clothes', 'asdfe', '07/10/23', 'low')
createProject('test 2')
createProject('test 3')
// console.log(projects[currentActiveProject][0])
createTodoItem('clean car', 'rewef', '06/29/23', 'medium')
editProjectName('test 2', 'changed Name!')

displayProjects()
displayTasks()
displayTaskForm()
addProject()
displayProjectBtns()
displaySorted()
console.log(projects)
sortTodos('today')

