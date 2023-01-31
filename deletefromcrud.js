function deleteFromCrud(event){
    event.preventDefault()
    const name = event.target.username.value
    const email = event.target.mail.value
    const phone = event.target.phno.value

    const obj = {
        name,
        email,
        phone
    }

    axios.post('https://crudcrud.com/api/273a6a0bbec843fc9bbaf14809ae6319/studentdetails', obj )
                .then((response) => {
                    showUserOnScreen(response.data)
                     console.log(response.data)
                })
                .catch(error => console.log(error))

}
    
    window.addEventListener('DOMContentLoaded', () =>{
        axios.get('https://crudcrud.com/api/273a6a0bbec843fc9bbaf14809ae6319/studentdetails')
        .then((res) => {
            console.log(res.data)
            for (var i = 0; i< res.data.length ; i++){
                showUserOnScreen(res.data[i])
            }
        })
        .catch((err) => {console.log(err)})
    })


    function showUserOnScreen(user){

        document.getElementById('name').value = ''
        document.getElementById('mail').value = ''
        document.getElementById('phno').value = ''
        const parent = document.getElementById('listofusers')
        const child = `<li id = ${user._id}> ${user.name} - ${user.email} -${user.phone}  <button onclick=editUser('${user.email}','${user.name}','${user.phone}') style = "border : 3px solid green;">Edit </button> <button onclick=deleteUser('${user._id}') style = "border : 3px solid red;">Delete</button> </li> <br>`
        parent.innerHTML = parent.innerHTML + child 
    }

    function deleteUser(userId){
       axios.delete(`https://crudcrud.com/api/273a6a0bbec843fc9bbaf14809ae6319/studentdetails/${userId}`)
       .then(() => {
            removeUserFromScreen(userId)
       }).catch(err => console.log(err))
    }

    function removeUserFromScreen(userId){
        let parent = document.getElementById('listofusers')
        let childToBeDeleted = document.getElementById(userId)
        parent.removeChild(childToBeDeleted)
    }


