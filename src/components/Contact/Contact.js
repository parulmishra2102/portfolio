import "./Contact.scss"



function Contact(props) {
    return (
        <div className='contact' id="contact">
           <div className="left">
              
                   <img src="assets/shake.svg" alt-=""></img>
                   </div>
                   <div className='right'>
                       <h2>Contact</h2>
                       <form>
                           <input type="text" placeholder="Email id"/>
                           <textarea placeholder="message"></textarea>
                           <button type="send"></button>
                           </form>
               </div>
           </div>
      
    )
}

export default Contact
