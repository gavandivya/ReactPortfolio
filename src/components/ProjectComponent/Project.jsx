import React from 'react';
import "./Project.css"

const Project = () => {
  return (
    <div>
          <h2 className="text-3xl font-bold uppercase mb-3 text-center">Projects</h2>
          <div className="flex gap-4 flex-wrap justify-center text-justify">
            <div className='card xl:w-96 shadow-md'>
            <img className="card-img-top img-fluid"
            alt="img1" style={{padding: "20px", borderRadius: "10px"}} src="https://user-images.githubusercontent.com/49062060/216764425-6d6ba6b3-d4c4-456f-9de8-96b6999a6ecf.png"
            />                
            <p><span className='font-bold'>Youddit</span> - Implemented advanced features like live chat on Youtube where users can comment and do infinite scrolling without blocking the page, n-level nested comments using recursion similar to Reddit, search on keystroke enhanced it by reducing the API call by debounce, used lazy loading to bundle the app in chunks, made it high performant by caching data in Redux store. Switch to dark/light theme mode.
            <br/>TechStack -  <span style={{textDecoration:"underline"}}>React.js, Redux Toolkit, Bootstrap, HTML , CSS.</span></p>
            </div>
            <div className='card xl:w-96 shadow-md'>
            <img className="card-img-top img-fluid"
                            alt="image2"
                            style={{padding: "20px", borderRadius: "10px"}}
                            src="https://user-images.githubusercontent.com/49062060/216787586-acf476f3-e21a-4fdb-841b-9bf106eaa78f.png"
            />                
            <p><span className='font-bold'>Brainy Fools</span> - Retrived team member data from Github API, used context API to manage to dark/light theme throught out the app.<br/> Made custom hook to manage city selection based on State. Search the member of team wrt to their Name, Company Name and Location. Displayed Github Stats acc to each user. <br/>Invalid path redirection to 404 Not Found and Error Page.
            <br/>TechStack - <span style={{textDecoration:"underline"}}> React.js, TailwindCSS, Bootstrap, HTML, CSS.</span></p>
            </div>
            <div className='card xl:w-96 shadow-md'>
            <img className="card-img-top img-fluid" alt="image3" style={{padding: "20px", borderRadius: "10px"}}
                        src="https://user-images.githubusercontent.com/49062060/216768985-9d6861ee-31b6-431d-96f6-c1ba442af719.png"
            />
            <p><span className='font-bold'>Neogcamp level 0 </span> - A selection portfolio made for Neog Level 1  which consists of 10 projects built using Vanilla JS and React JS, it includes some logic building projects like includes Cash Manager, Palidrome Birthday, Stock Profit and Loss etc. It also consist of 3 blogs written on Hashnode on topics related to React JS and HTML5.
            All the projects are deployed on netlify and the source code is available on github.</p>
            </div>
          </div>
    </div>
  )
}

export default Project;