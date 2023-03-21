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
    // const data = [  {    "country": "USA",    "city": "New York"  },  {    "country": "USA",    "city": "Los Angeles"  },  {    "country": "USA",    "city": "Chicago"  },  {    "country": "Canada",    "city": "Toronto"  },  {    "country": "Canada",    "city": "Vancouver"  },  {    "country": "Canada",    "city": "Montreal"  },  {    "country": "UK",    "city": "London"  },  {    "country": "UK",    "city": "Manchester"  },  {    "country": "UK",    "city": "Birmingham"  }]

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
               <a  target="_blank" rel="noreferrer" href="mailto:sasi.bhumaraju@gmail.com">   <img className='Icon' alt='mail' src={mail}></img></a>
               <a  target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sasibhumaraju/"><img className='Icon' alt='linkedin' src={linkedin}></img></a>
               <a  target="_blank" rel="noreferrer" href="https://github.com/sasibhumaraju"><img className='Icon' alt='github' src={github}></img></a>
               <a  target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/SasiBhumaraju"><img className='Icon' alt='coffe' src={coffe}></img></a>
               <a  target="_blank" rel="noreferrer" href="https://www.instagram.com/sasi_bhumaraju/"><img className='Icon' alt='instagram' src={instagram}></img></a>
               <a  target="_blank" rel="noreferrer" href="https://t.me/SasiBhumaraju"><img className='Icon' alt='telegram' src={telegram}></img></a>
               <a  target="_blank" rel="noreferrer" href="https://twitter.com/BhumarajuSashi"><img className='Icon' alt='twitter' src={twitter}></img></a>
              </div>
            <a className='HireMe' target="_blank" rel="noreferrer"  href="mailto:sasi.bhumaraju@gmail.com">Hire Me</a>
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