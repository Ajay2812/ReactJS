import React from "react"
export default function Prac(){
    const [contact,setContact]=React.useState({
        firstName:"Ajay",
        lastName:"Patel",
        phone:"7036682809",
        email:"ajay@gmail.com",
        isFavourite:true
    })

    function handleClick(){
        setContact(prevContact=>{
            return {
                ...prevContact,
                isFavourite:!prevContact.isFavourite
            }
        })
    }

    return(
        <main>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            <button onClick={handleClick}>{contact.isFavourite ? "Yes" : "No"}</button>
        </main>
        
    )
}