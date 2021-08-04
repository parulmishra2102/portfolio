import './Contact.scss';
import { useState } from 'react';

function Contact(props) {
  const [message, setmessage] = useState(false);
  const [contactData, setContactData] = useState({
    mail: '',
    message: ' ',
  });

  const saveDatahandler = (event) => {
    var data={...contactData}
    setContactData({...data,[event.target.name]:event.target.value})
   
    console.log(contactData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setmessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt-=""></img>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="mail"
            onChange={saveDatahandler}
            placeholder="Email id"
          />
          <textarea
            placeholder="message"
            name="message"
            onChange={saveDatahandler}
          ></textarea>
          <button type="send">Send</button>
          {message ?  <span> your {contactData.mail} id is registered to us, I'll get back to you soon</span> : ''} 
        </form>
      </div>
    </div>
  );
}

export default Contact;
