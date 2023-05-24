import React from 'react';
import ContactForm from './ContactForm';


const Connections = () => {
    

    return (
        <div className="col-lg-5" id="connections">
            <h3 className="mb-0" id="titles">connections</h3>
            <h6 className="">get in touch when you're ready!</h6>
            <div className="row rounded justify-content-center" id="transBG">
                <h5 class="mb-0" id="titles">hours</h5>
                <table class="table" >
                    <tbody>
                        <tr>
                            <td>Mon:</td>
                            <td>9am - 9pm</td>
                        </tr>
                        <tr>
                            <td>Tues:</td>
                            <td>closed</td>

                        </tr>
                        <tr>
                            <td>Weds - Fri:</td>
                            <td>8am - 7pm</td>
                        </tr>
                        <tr>
                            <td>Sat:</td>
                            <td>10am - 2pm</td>
                        </tr>
                        <tr>
                            <td>Sun:</td>
                            <td>closed</td>
                        </tr>
                    </tbody>
                </table>

                <h6>call, text or email:</h6>
                <div className="col-lg-4 col-sm-10 rounded m-1" id="transDarkBG">
                    <a href="tel:+7729850694" className="nav-link m-0">(772) 985-0694</a>
                </div>
                <div className="col-lg-7 col-sm-10 rounded m-1" id="transDarkBG">
                    <a href="mailto:evolvewithprint@gmail.com" className="nav-link m-0">evolvewithprint@gmail.com</a>
                </div>
                <hr className="hr-divider mt-3" />
                <div className="col-12 rounded m-1">
                    <h6>send us a message:</h6>
                    <ContactForm />
                </div>
                <hr className="mt-3 hr-divider" />
                <h6>find us on our socials:</h6>
                <div className="col-12 rounded m-1 d-flex justify-content-center">
                    <img className="img-socials m-2" src="/imgs/instagram.png" />
                    <img className="img-socials m-2 rounded" src="/imgs/twitter.png" />
                    <img className="img-socials m-2" src="/imgs/facebook.png" />
                </div>

            </div>

        </div>


    )
};

export default Connections;