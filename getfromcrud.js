function getFromCrud(event){
    event.preventDefault()
    const name = event.target.username.value
    const email = event.target.mail.value
    const phone = event.target.phno.value

    const obj = {
        name,
        email,
        phone
    }

    axios.post('https://crudcrud.com/api/e035c05bbe3640eea4908e2e620e1a42/studentdetails', obj )
                .then((response) => {
                    showUserOnScreen(response.data)
                     console.log(response.data)
                })
                .catch(error => console.log(error))

}
    
    window.addEventListener('DOMContentLoaded', () =>{
        axios.get('https://crudcrud.com/api/e035c05bbe3640eea4908e2e620e1a42/studentdetails')
        .then((res) => {
            console.log(res)
            for (var i = 0; i< res.data.length ; i++){
                showUserOnScreen(res.data[i])
            }
        })
        .catch((err) => {console.log(err)})
    })


    function showUserOnScreen(user){
        const parent = document.getElementById('listofusers')
        const child = `<li id = ${user.email}> ${user.name} - ${user.email} - ${user.phone} </li> <button onclick=editUser('${user.email}','${user.name}','${user.phone}') style = "border : 3px solid green;">Edit </button> <button onclick=deleteUser('${user.email}') style = "border : 3px solid red;">Delete</button> </li>`
        parent.innerHTML = parent.innerHTML + child
    }
