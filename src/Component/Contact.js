import React, { useState, useRef } from 'react'
import insta from '../Images/Social_img/instagram-line.svg'
import facebook from '../Images/Social_img/facebook-line.svg'
import twitter from '../Images/Social_img/twitter-x-line.svg'
import linkedin from '../Images/Social_img/linkedin-fill.svg'
import github from '../Images/Social_img/github-fill.svg'
import spinner from '../Images/Social_img/sppiner.gif'
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs'

const Contact = () => {
  const [username, setUsername] = useState("")
  const [useremail, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [emailsend, setEmailsend] = useState("none")
  const form = useRef();

  const email_Sender_btn = (e) => {
    let username = document.getElementById("username")
    let useremail = document.getElementById("useremail")
    let subject = document.getElementById("subject")

    username = username.value
    useremail = useremail.value
    subject = subject.value
    e.preventDefault()

    console.log(username)
    console.log(useremail)
    console.log(subject)

    setEmailsend("block")

    emailjs.sendForm(
      'service_74rq4j9',     // Service ID
      'template_sxe1u9x',    // Template ID
      form.current,
      'DHz6cbzuSA5vi44HG'      // Public Key
    )
      .then(
        (result) => {
          console.log(result.text);
          // alert('Email sent successfully!');
          setUsername("")
          setEmail("")
          setSubject("")
          setEmailsend("none")
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send email.');
        }
      );

    // setUsername("")
    // setEmail("")
    // setSubject("")
  }

  return (
    <>
      <h2 className="header_section">Contact us</h2>
      <div className="contact_section"> 
        <form onSubmit={email_Sender_btn} ref={form} className="contact_form">
          <input type="text" name="username" id="username" value={username}
            onChange={(e) => setUsername(e.target.value)} placeholder="Enter Name" className="contact_details" required />
          <input type="email" name="useremail" id="useremail" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} className="contact_details" value={useremail} required />
          <textarea name="subject" id="subject" cols="30" rows="10" placeholder="Enter Subject" onChange={(e) => setSubject(e.target.value)} className="contact_details" value={subject} required ></textarea>
          <button type="submit" id="form_btn">Submit
            <img src={spinner} alt="loading" className="spinner" style={{ display: emailsend }} />
          </button>
        </form>

        <div className="social_contacts">
          <h5 className="contact_header">Get In Touch</h5>
          <p className="contact_desc">If You have any query or just you say want to Say hi,please use the contact form</p>

          <div className="social_icon_imgs">
            <i className="social_icon">
              <a href="https://www.instagram.com/prakash_.5810/" target="_blank" rel="noopener noreferrer">
                <img className="social_icon_img" src={insta} alt="instagram" />
              </a>
            </i>
            <i className="social_icon">
              <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61556302989527" target="_blank" rel="noopener noreferrer">
                <img className="social_icon_img" src={facebook} alt="facebook" />
              </a>
            </i>
            <i className="social_icon">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img className="social_icon_img" src={twitter} alt="twitter" />
              </a>
            </i>
            <i className="social_icon">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img className="social_icon_img" src={linkedin} alt="linkedin" />
              </a>
            </i>
            <i className="social_icon">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img className="social_icon_img" src={github} alt="github" />
              </a>
            </i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
