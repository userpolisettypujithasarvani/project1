import React from 'react';
import data from './data.json';
import icon from './boy.svg';

let Resume=(props)=>{
    let info=Object.values(props.location.index.value);
    let person=data.profiles[info]
    console.log(person);
    return(
        <div className="parent">
            <div className="child">
                <img src={icon} alt="profile"/>     
                <h3>{person.basics.name}</h3>
                <hr></hr>
                <a href={"mailto:"+person.basics.email} className="link">{person.basics.email}</a>
                <br></br>
                <a href={"tel:"+person.basics.mobile} className="link">{person.basics.mobile}</a>

            </div>
            <div className="child2">
                <h3>Educational Qualifications</h3>
                <hr></hr>
                {person.education.map((i,j)=>
                (
                    <div key={j}>
                    <h4>{i.degree}</h4>
                    <ul>
                        <li>{i.percentage}%</li>
                        <li>{i.institute}</li>
                    </ul>
                    </div>
                ))}
                <br></br>
                <h3>Skills</h3>
                <hr></hr>
                {person.skills.map((x,y)=>(
                    <div key={y}>
                        <h4>{x.type}</h4>
                        {x.values.map((k,l)=>(
                            <div key={l} style={{display:"inline"}} >
                                <span className="skill">{k}</span>
                            </div>
                        ))}
                    </div>
                ))
                }
                
                


            </div>
        </div>
    )
}
export default Resume;