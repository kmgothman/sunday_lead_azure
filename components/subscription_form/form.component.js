'use client'
import {useState} from 'react'
import Head from 'next/head';
import styles from './form.module.css'

const Form = () => {
  const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    country: ''
  }
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false)
  const [confirmation, setConfirmation] = useState(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const confirmForm = (message) => {
    setConfirmation(message)
    setTimeout(setConfirmation,3000,null)
  }
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const url = 'https://script.google.com/macros/s/AKfycbyLszlQ9Ce3nzITv4K0QAyX5wfbcfnfKxPzkgG2lcbUcsMlbf6nLSEpQy7ipnv3sga30Q/exec'
    try {
      const response = await fetch(url, {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify(formData)
      })
      const result = await response.json()
      if (result.result == "success") {
        console.log("success")
        setLoading(false)
        setFormData(initialForm)
        confirmForm('Thank You for Subscribing!')
      } else {
        setLoading(false)
        setFormData(initialForm)
        confirmForm('Sorry, somethings wrong :(')
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      setFormData(initialForm)
      confirmForm('Sorry, somethings wrong :(')
    } 
  } 

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
          <button onClick={handleSubmit} >Subscribe</button>
        </form>
        {loading ? <img src='/icons/loader.gif' className={styles.loader}/> : <></>}
        {loading ? <div className={styles.grey}></div> : <></>}
        {confirmation ? <div className={styles.grey}><div className={styles.confirmation}><p>{confirmation}</p></div></div> : <></>}
        </div>
    )
}

export default Form