import React from 'react'
import contactimg from '../Assest/contact-us.png'

const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div className='CCntainer' id='ContactUs'>
            <div className='backround-contact-us'>
            <img src={contactimg} className="image-left-contact" alt='contact_image...'/>
            </div>
            <div className="behaind mt-5 ">
                <h2 className="mb-3">feel free to contact us for any inquiry</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label label" htmlFor="name">
                            Name
                        </label>
                        <input className="form-control" type="text" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label label" htmlFor="email">
                            Email
                        </label>
                        <input className="form-control" type="email" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label label" htmlFor="message">
                            Message
                        </label>
                        <textarea className="form-control" id="message" required  rows="6"/>
                    </div>
                    <button className="btn btn-primary" type="submit">
                        {formStatus}
                    </button>
                </form>
            </div>
        </div>

    )
}
export default ContactForm