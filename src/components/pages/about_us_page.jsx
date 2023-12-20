import React from 'react';
import './Page.css'
const AboutUsPage = () => {
    return (
        <div className={'container'}>
            <h1>About Pixel Trails Game Store</h1>

            <p>Welcome to Pixel Trails Game Store, your one-stop destination for all your gaming needs. We are dedicated to providing a wide range of high-quality games and accessories to enhance your gaming experience.</p>

            <h2>Our Team</h2>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td>Andrey Bem</td>
                    <td rowSpan="1">Founder</td>
                    <td>
                        <a href={'mailto:andorussss@gmail.com'}>andorussss@gmail.com</a>
                    </td>
                </tr>
                <tr>
                    <td>Andrey Bem</td>
                    <td >Developer</td>
                    <td>
                        <a href={'mailto:andorussss@gmail.com'}>andorussss@gmail.com</a>
                    </td>
                </tr>
                <tr>
                    <td>Andrey Bem</td>
                    <td >Customer Support</td>
                    <td>
                        <a href={'mailto:andorussss@gmail.com'}>andorussss@gmail.com</a>
                    </td>
                </tr>
            </table>

            <h2>Contact Us</h2>

            <form>
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" required/><br/>

                <label htmlFor="email">Your Email</label>
                <input type="telephone" id="telephone" name="telephone"/><br/>
                <label>Preferred Contact Method:</label><br/>
                <input type="radio" id="contact-email" name="contact-method" value="email" checked/>
                <label htmlFor="contact-email">Email</label><br/>
                <input type="radio" id="contact-phone" name="contact-method" value="phone"/>
                <label htmlFor="contact-phone">Phone</label><br/>

                <label for="message">Your Message:</label><br/>
                <textarea id="message" name="message" rows="4" cols="50" required></textarea><br/>

                <input type="checkbox" id="subscribe" name="subscribe" value="subscribe" checked/>
                <label for="subscribe">Subscribe to our newsletter</label><br/>

                <button className={'btn'} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AboutUsPage;