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
import Pagination from './Pagination';


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
        <div className='Home'>
           <div className='HomeImage'>
            <div className='HomeImageBody'>
             <Lottie options={defaultOptions}  height={500} width={500} /> 

    <div class="card-overlay">
    <p class="card-text"> This is SasiBhumaraju. I'm a React JS front-end developer and Java Spring Boot back-end developer with experience designing and implementing web applications. </p>
  </div>
             </div>
          </div>
            <div className='Self'>
             <div className='SelfTitle'>
               <span className='SelfTitleA'>Front end</span> <span className='SelfTitleB'>Engineer</span> 
               <div className='SelfBody'>Back End Developer</div>
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
            <div className='HireMe'>Hire Me</div>
            </div>
           

        

        </div>
    );
}

export default Home;