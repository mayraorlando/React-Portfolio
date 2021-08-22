import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App(){
  const[state, setState]=useState(true);
  let url="";
  return <div className="App" >
    <body>
    <div>
    <div className = "header sticky-top">
                <nav>
                <h1 className="name">Mayra Orando</h1>
                  <ul className="navbar">
                    <li><a href="#about">About me</a></li>
                    <li> <a href="http://docs.google.com/document/d/1rFRJYXuZsohMh6LZMyF0mHL5p2-rNeWlEapUWCQPlrk/edit?usp=sharing">Resume</a></li>
                    <li><a href="#work">Contact</a></li>
                    </ul>
                </nav>
     </div> 
             <div className="AboutMe">About Me!<p>I am an aspiring and dedicated individual who is ready to tackle any challenges thrown my way. I have ten years of working experience in customer service.Currently, I am a program coordinator at NACE. I am ready to explore a career in the web development industry. I know I have what it takes to become a professional web developer. I am a hard worker, open to new ideas, organized, detail oriented, and an excellent team player.</p></div>
             <div>
             <div className="Contact"><h1>Contact me</h1></div>
             <div className="email"><h3>mayraorlando2014@gmail.com</h3></div>
             <div className="phone"><h3>Phone Number: 704.668.6540</h3></div>
             </div>
             <div>
             <div className="portfolio"><h2>Portfolio</h2></div>
             <ul>
                    <li><a hreft={"https://mayraorlando.github.io/Day_Planner/"}>Planner</a></li>
                    <li><a hreft={"https://mayraorlando.github.io/Weather_Dashboard/"}>Weather</a></li>
                    <li><a hreft={"https://apptotakenotes.herokuapp.com/"}>Note-Taker</a></li>
              </ul>
             </div>
    
             </div> 
    </body>
    
</div>  
}

ReactDOM.render(
<App/>,
  document.getElementById('root')
);

