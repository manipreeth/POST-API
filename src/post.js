import React,{useState} from 'react'
import axios from 'axios'

function Post() {
  const [userName,handleUsername]=useState('')
  const [userEmail,handleEmail]= useState('')
  const [userPassword,handlePassword]= useState('')


  const Submit=(()=>{
    return(
      axios.post('https://jsonplaceholder.typicode.com/posts',
          {
            UserName: userName,
            userEmail: userEmail,
            UserPassword: userPassword
          })
      .then((res)=>{
        console.log(res)
      })
      
      .catch(err=>{
        console.log(err)
      }),
      handleEmail(''),
      handleUsername(''),
      handlePassword(''))
  })

  return(
    <div>
      <form>
        <label>User Name: </label>
        <input type='text' 
          value={userName} 
          onChange ={e=>handleUsername(e.target.value)} /><br/>
        
        <label>User Email: </label>        
        <input type='text' 
          value={userEmail} 
          onChange ={e=>handleEmail(e.target.value)} /><br/>
        
        <label>Password: &nbsp;</label>        
        <input type='text' 
          value={userPassword} 
          onChange ={e=>handlePassword(e.target.value)} />
      
      </form>
      <button onClick={Submit}>Submit</button>
    </div>
  )
}

export default Post;