'use client'
import {useState} from 'react'
import styles from './form.module.css'

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthday: '',
        country: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here, such as sending to an API or outputting the data
        console.log(formData);
      };

    return(
        <div id='form' className={styles.form}>
        <form>
          <ul>
            <li>
              <label>Name</label>
              <div className={styles.fullName}>
                <div className={styles.name}>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder=""
                        required
                    />
                    <label>First Name</label>
                </div>
                <div className={styles.name}>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder=""
                        required
                    />
                    <label>Last Name</label>
              </div>
              </div>
            </li>
            <li>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                        required
                    />
            </li>
            <li>
                    <label>What country do you live in?</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder=""
                        required
                    />
            </li>
          </ul>
          <button type="submit">Subscribe</button>
        </form>
        </div>
    )
}

export default Form