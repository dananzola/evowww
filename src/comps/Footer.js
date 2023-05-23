import React from 'react';

function Footer() {
    return (
        <footer style={{ paddingBottom: '100px' }}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4">
                        <h5 className="" id="titles">evolve w/ print and gifts <font style={{ fontSize: '.5em' }}>inc.</font></h5>
                        <p>
                            Introducing a small-scale printing company located in the beautiful Treasure Coast, specializing in sublimation and plotting services. With a commitment to excellence, this local gem offers fast, affordable, and unmatched printing solutions. Whether you need personalized apparel, custom signage, or promotional materials, their expertise in sublimation and plotting ensures exceptional quality and vibrant results. What sets them apart is their dedication to customer satisfaction, going the extra mile by offering free delivery for local customers and national shipping across the USA. Discover the convenience and reliability of this printing company, where fast turnarounds, competitive pricing, and exceptional craftsmanship are guaranteed.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h5 class="mb-3" id="titles">links</h5>
                        <ul class="list-unstyled mb-0">
                            <li class="mb-1">
                                <a href="#!" className="nav-link">Frequently Asked Questions</a>
                            </li>
                            <li class="mb-1">
                                <a href="#!" className="nav-link" >Delivery</a>
                            </li>
                            <li class="mb-1">
                                <a href="#!" className="nav-link">Pricing</a>
                            </li>
                            <li>
                                <a href="#!" className="nav-link">Where we deliver?</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h5 class="mb-0" id="titles">hours</h5>
                        <table class="table" >
                            <tbody>
                                <tr>
                                    <td>Mon:</td>
                                    <td>9am - 9pm</td>
                                </tr>
                                <tr>
                                    <td>T</td>
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
                    </div>
                </div>
            </div>
            <div class="text-center p-3">
                &copy; 2023&nbsp;Copyright:&nbsp;
                <a class="text-dark" href="#">Evolve with Print, Inc.</a>
                <p>Powered by:&nbsp;
                    <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="React Logo" height="32" />
                        &nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="Node.js Logo" height="32" />
    </p>
</div>

        </footer>
    );
}

export default Footer;