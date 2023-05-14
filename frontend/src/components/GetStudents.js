// for each loop for each name, sabki link banao, http://localhost/user:/id
// something like this: 
//foeach(
/* <div>
<a url = "localhost/user/{id}>
</div>) */

import react from 'react'
import axios from 'axios'

function GetStudents() {
  const [users, setUsers] = react.useState([])

  react.useEffect(() => {
    async function fetchUsers() {
      const response = axios.get('http://localhost:8000/users')
      .then(function (response) {
        // console.log(response)
        // console.log(response.data);
        setUsers(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      
      
    }
    fetchUsers()
  }, [])

  return (
    <div>
      {users.map(user => (
        <div key={user._id}>
          <h2>{user.name} {user.LastName}</h2>
          <p>Student ID: {user.rollnumber}</p>
          <p>Email: {user.email}</p>
          <p>Batch: {user.batch}</p>
          
          <p>Degree Verified: {user.isVerified}</p>
          <p>Degree link: {user.url}</p>
        </div>
      ))}
    </div>
  )
}

export default GetStudents
