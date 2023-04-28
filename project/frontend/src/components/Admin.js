import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Admin() {

    // var loggedIn = false 

    const [formData,setFormData] = useState({
        user_name: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleClick = () => {
        if (user_name === 'admin'){
            navigate("/addRecord")
        }

    }

    const {user_name, password} = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {

        e.preventDefault();
    }

  return (
    <>
    <section className='heading'>
        <p>
             Enter your credentials:
        </p>
      
    </section>

    <section className='form'>
        <form onSubmit = {onSubmit}>

            {/* //Enter name */}
            <div className="form-group">
            <input type="text" className="form-control" id="user_name" 
            name="user_name" value={user_name} 
            placeholder='Username: '
            onChange={onChange}  
            />
            </div>

            {/* //Enter email */}
            <div className="form-group">
            <input type="text" className="form-control" id="password" 
            name="password" value={password} 
            placeholder='Password: '
            onChange={onChange}  
            />
            </div>
            <div className="form-group">
                <button type="submit" className='btn btn-block' onClick={(e) => handleClick()}>Submit</button>
            </div>
            </form>
            </section>
        </>
  )
}

export default Admin