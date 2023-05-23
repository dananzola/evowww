import React from 'react';
import ContactForm from './ContactForm';
import PriceCalc from './PriceCalc';


const Body = () => {
    return (
        <div className="row gx-4 gx-lg-6">
            
                    <h1 className="m-0 logotop" style={{ fontFamily: 'Robotica', fontSize: '6em', color: 'black' }}>evolve<font style={{ color: 'rgb(0, 0, 0, .5)', fontSize: '.25em' }}>inc.</font></h1>
                    <div className="col-lg-11" id="header">
                        <h3 className="m-0"><span className="m-0 span-angle"> w/ print for personalized gifts.</span></h3>
                        <hr className="hr-divider mt-3" />
            </div>
           
                    <div className="col-lg-7" id="body">
                        <h4 className="m-0" id="titles">What do we offer you?</h4>
                        <h6 className="m-0 mb-2">T-Shirts, Socks, Signs, Stickers, Mugs, Tumblers...</h6>
                        <div className="col-lg-12 rounded mt-3" >
                                <p>Printing with sublimation is a versatile and innovative method that offers numerous advantages. Sublimation printing allows for vibrant and long-lasting colors, as the dyes are directly infused into the substrate, resulting in a permanent and fade-resistant image. This printing technique is ideal for a wide range of substrates, including polyester fabrics, ceramic tiles, metal plates, glass, and polymer-coated items. With sublimation, you can effortlessly create customized apparel like t-shirts, jerseys, and sportswear, as well as promotional items such as mugs, keychains, and mousepads. Moreover, sublimation printing enables the production of personalized home decor items like photo frames, cushions, and blankets. The versatility of sublimation ensures that your creativity knows no bounds, as you can explore an extensive range of substrates to deliver stunning and unique designs.</p>
                                <p>Plotters, on the other hand, offer limitless possibilities for customizing t-shirts and creating eye-catching stickers. With a plotter, you can precisely cut out intricate designs and shapes, making it ideal for producing personalized apparel and decals. These machines can effortlessly handle a variety of materials, including heat transfer vinyl, adhesive vinyl, and even flock or rhinestone materials. Plotters allow you to bring your artistic visions to life by cutting out logos, text, or intricate graphics that can be heat pressed onto t-shirts, resulting in professional-quality designs. Additionally, plotters excel in creating stickers, enabling you to craft vibrant, durable, and precisely cut decals for various purposes, such as branding, product labels, or decorative stickers. The flexibility and precision offered by plotters open up a world of possibilities for creating captivating t-shirt designs and visually appealing stickers that leave a lasting impression.</p>
                                <p>Experience the boundless world of creativity with sublimation printing and plotters. Unleash vibrant and fade-resistant colors on a diverse range of substrates, from fabrics to ceramics and metals. Personalize t-shirts, home decor, and promotional items that truly make a statement. And with plotters, precision cutting brings your imagination to life, allowing you to create stunning apparel and captivating stickers with professional-grade quality. Whether you seek distinctive designs or memorable branding, these services offer unlimited potential for customization. Embrace the synergy of sublimation printing and plotting technology, and unlock the power to captivate and leave a lasting impression. Elevate your creations to new heights with these innovative services today.</p>
                    <PriceCalc />
                </div>
                
                <hr className="hr-divider mt-3" />

                    </div>
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

        </div>
            
        
    );
};
export default Body;