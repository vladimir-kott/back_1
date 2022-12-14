document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }
  else if(event.target.dataset.type === 'edit'){
    const id = event.target.dataset.id
    let editMenu = prompt("Enter new value for")
    if (editMenu != null) {
      edit(id, editMenu)
    }
  }
})

async function edit(id, string){
  await fetch(`/${JSON.stringify({id, string})}`, {method: 'PUT'})
  document.location.reload(true)
}

async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}