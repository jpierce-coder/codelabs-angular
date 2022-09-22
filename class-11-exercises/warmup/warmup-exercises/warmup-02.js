let list = [
  {
    id: 1, 
    completed: true,
    action: "Study"
  },
  {
    id: 2,
    completed: false, 
    action: "Dishes"
  }
]

for (let i= 0; i < list.length; i++) {
  let fullTodo = `Id: ${list[i].id}, completed: ${list[i].completed}, action: ${list[i].action}`

  document.body.innerHTML += `
  <p>${fullTodo}</p>
  `
}
