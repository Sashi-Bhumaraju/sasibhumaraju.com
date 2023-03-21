import React,{useState} from 'react';
import './Home.css';
import sasibhumaraju from '../assets/sasibhumaraju.jpeg';
import tick from '../assets/tick.svg';
import coffe from '../assets/coffe.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import mail from '../assets/mail.svg';
import telegram from '../assets/telegram.svg';
import twitter from '../assets/twitter.svg';

import lottie from '../assets/happy.json';
import Lottie from 'react-lottie';
//import bulb from '../assets/bulb.lottie';



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
                  <img className='Icon' src={mail}></img>
                  <img className='Icon' src={linkedin}></img>
                  <img className='Icon' src={github}></img>
                  <img className='Icon' src={coffe}></img>
                  <img className='Icon' src={instagram}></img>
                  <img className='Icon' src={telegram}></img>
                  <img className='Icon' src={twitter}></img>
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