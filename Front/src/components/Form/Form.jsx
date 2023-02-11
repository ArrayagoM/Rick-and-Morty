import { useState } from "react";
import { Link } from 'react-router-dom';
import Validation from "./validation";

const Form = ({login}) => {
  const [userData, setUserData] = useState({ 
    username: '', 
    password: '' 
  });

const [  errors, setErrors] = useState({ 
  username: '', 
  password: '' 
});



const handleInputChange = (e) => {
setUserData({
...userData,
[e.target.name]: e.target.value
})
setErrors(
  Validation({
    ...userData,
      [e.target.name]: e.target.value
    })
)

}


const handleSubmit = (e) => {
  e.preventDefault();
  login(userData)
}

  return (
    <form  onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
      {errors.username && <p style={{color: "red"}} >{errors.username}</p>}
      
      <label htmlFor="password">Password</label>
      <input 
      type="password"
      name="password" 
      value={userData.password} 
      onChange={handleInputChange}
      />
{errors.password && <p style={{color: "red"}} >{errors.password}</p>}
      <button>LOGIN</button>
    </form>
  )

};

export default Form;
