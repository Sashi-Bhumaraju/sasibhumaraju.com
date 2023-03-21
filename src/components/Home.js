import React from 'react';
import './Home.css';
import coffe from '../assets/coffe.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import mail from '../assets/mail.svg';
import telegram from '../assets/telegram.svg';
import twitter from '../assets/twitter.svg';
import lottie from '../assets/happy.json';
import Lottie from 'react-lottie';




function Home () {
    const data = [  {    "country": "USA",    "city": "New York"  },  {    "country": "USA",    "city": "Los Angeles"  },  {    "country": "USA",    "city": "Chicago"  },  {    "country": "Canada",    "city": "Toronto"  },  {    "country": "Canada",    "city": "Vancouver"  },  {    "country": "Canada",    "city": "Montreal"  },  {    "country": "UK",    "city": "London"  },  {    "country": "UK",    "city": "Manchester"  },  {    "country": "UK",    "city": "Birmingham"  }]

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottie,
        // rendererSettings: {
        //   preserveAspectRatio: "xMidYMid slice"
        // }
      };

    return(
        <div className='Home' id="/">
             
             <div className='Self'>
             <div className='SelfTitle'>
                <div>  <span className='SelfTitleA'>Front end</span> <span className='SelfTitleB'>Engineer</span> </div>
                  <div className='SelfBody'>ReactJs </div>
             </div>   
            
              <div className='SocialIcons'>
               <a  target="_blank" href="mailto:sasi.bhumaraju@gmail.com">   <img className='Icon' src={mail}></img></a>
               <a  target="_blank" href="https://www.linkedin.com/in/sasibhumaraju/"><img className='Icon' src={linkedin}></img></a>
               <a  target="_blank" href="https://github.com/sasibhumaraju"><img className='Icon' src={github}></img></a>
               <a  target="_blank" href="https://www.buymeacoffee.com/SasiBhumaraju"><img className='Icon' src={coffe}></img></a>
               <a  target="_blank" href="https://www.instagram.com/sasi_bhumaraju/"><img className='Icon' src={instagram}></img></a>
               <a  target="_blank" href="https://t.me/SasiBhumaraju"><img className='Icon' src={telegram}></img></a>
               <a  target="_blank" href="https://twitter.com/BhumarajuSashi"><img className='Icon' src={twitter}></img></a>
              </div>
            <a className='HireMe' target="_blank"  href="mailto:sasi.bhumaraju@gmail.com">Hire Me</a>
            </div>
           
            <div className='HomeImage'>
            <div className='HomeImageBody'>
             
               <Lottie  options={defaultOptions}  height={600} width={600} /> 
           
             

                <div className="card-overlay">
                <p className="card-text"> Don't disturb me.</p>
              </div>
             </div>
          </div>
        

        </div>
    );
}

export default Home;