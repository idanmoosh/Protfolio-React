import { SiReact,SiReactrouter,SiRedux, SiGithub, SiHtml5,SiJavascript,SiNodedotjs,SiCss3,SiPython,SiGit } from "react-icons/si";
import  './skillContainer.css';


const skillList={
    1:{
        name: 'JS',
        logo: <SiJavascript/>
    },
    2:{
        name: 'React',
        logo: <SiReact/>
    },
    3:{
        name: 'React-Router',
        logo: <SiReactrouter/>
    },
    4:{
        name: 'Redux',
        logo: <SiRedux/>
    },
    5:{
        name: 'GitHub',
        logo: <SiGithub/>
    },
    6:{
        name: 'HTML 5',
        logo: <SiHtml5/>
    },
    7:{
        name: 'Node JS',
        logo: <SiNodedotjs/>
    },
    8:{
        name: 'CSS',
        logo: <SiCss3/>
    },
    9:{
        name: 'Python',
        logo: <SiPython/>
    },
    10:{
        name: 'Git',
        logo: <SiGit/>
    },
}

export default function SkillsContainer(){


    return (<div className="SkillsMain">
                <h2 className="skillsHeader">Skills</h2>
                <div className="SkillsContainer">
                    {Object.keys(skillList).map(key=>{
                        return(
                            <div className="skill">
                                {skillList[key].logo}
                                <p className="skillName">{skillList[key].name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )


}