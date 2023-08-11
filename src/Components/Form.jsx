import { useState } from 'react';
import './style.css';
const Form = () => {
    const [input, setInput] = useState([
        {
            name: '',
            email: '',
            password: '',
            birthdate: '',
            country: '',
            bio: '',
            gender: ''
        }
    ])
    const [formerror, setFormError] = useState({});

    const handleChange = (e) => {
       
         setInput({
             ...input, [e.target.name]: e.target.value
         })
    }

    const handleSubmit = () => {
        const err = {};
        if (!input.name) {
            err.name = "Name is required";
        }
        if (!input.email) {
            err.email = "Email is required";
        }
        if (!input.password) {
            err.password = "Password is required";
        }
        if (!input.birthdate) {
            err.birthdate = "Birth date is required";
        }
        if (!input.country) {
            err.country = "Country is required";
        }
        if (!input.bio) {
            err.bio = "Bio is required";
        }
        if (!input.gender) {
            err.gender = "Gender is required";
        }
        setFormError(err);
    }

    return (
        <div class="container">
            <h1 style={{ textAlign: "center" }}>Registration Form</h1>
            <form>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleChange} />
                    <span style={{ color: "darkblue"}}>{formerror.name}</span>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={handleChange} />
                    <span style={{ color: "darkblue" }}>{formerror.email}</span>
                </div>

                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder="ENTER THE PASSWORD" onChange={handleChange} />
                    <span style={{ color: "darkblue" }}>{formerror.password}</span>
                </div>

                <div class="form-group">
                    <label for="">Birthdate:</label>
                    <input type="date" name="birthdate" id="birthdate" onChange={handleChange} />
                    <label><span style={{ color: "darkblue" }}>{formerror.birthdate}</span></label>
                </div>

                <div class="form-group">
                    <label name="Country" for="country" >Country:</label >
                    <select style={{padding: "5px 5px"}} onChange={handleChange}>
                        <option value="">Select a country</option>
                        <option value="INDIA" >INDIA</option>
                        <option value="TURKEY">TURKEY</option>
                        <option value="AMERICA">AMERICA</option>
                        <option value="SAUDI ARABIA">SAUDI ARABIA</option>
                        <option value="GREECE">GREECE</option>
                        <option value="HONGKONG">HONGKONG</option>
                        <option value="SPAIN">SPAIN</option>
                        <option value="SWITZERLAND">SWITZERLAND</option>
                    </select>
                    <div>
                      <span style={{ color: "darkblue" }}>{formerror.country}</span>
                    </div>
                </div>

                <div class="form-group">
                    <label for="message">Bio:</label>
                    <textarea id="message" rows="4" name="bio" onChange={handleChange}></textarea>
                    <span style={{ color: "darkblue" }}>{formerror.bio}</span>
                </div>
                <div class="form-group" onChange={handleChange}>
                    <label >Gender:</label>
                    <label class="radio" >
                        <input type="radio" name="gender" value="male" /> Male
                    </label>
                    <label class="radio">
                        <input type="radio" name="gender" value="female" /> Female
                    </label>
                    <label class="radio">
                        <input type="radio" name="gender" value="other" /> Other
                    </label>
                    <label>
                        <span style={{ color: "darkblue" }}>{formerror.gender}</span>
                    </label>
                </div>
                <input type="button" value="Submit"  onClick={() => handleSubmit()} style={{marginTop: ""}}></input>
            </form>
        </div>
    )
}
export default Form;