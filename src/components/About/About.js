import './About.css'
import pxArt from './pxArt.png'
import SkillsContainer from '../skillsContainer/SkillsContainer'
import HobbiesContainer from '../HobbiesContainer/HobbiesContainer'

export function About () {
    return (
        <div className='about'>
            <section className='AboutSection'>
                <img src={pxArt} alt='thats-me'/>
                <div className='content'>
                    <h2 className='aboutHeader'>About me</h2>
                    <p className='aboutText'>I'm a developer who <span className='aboutSpan'>loves creating</span> and building. with vast <span className='aboutSpan'>experience in R&D processes.</span>
                     I can assure a clean and coherent code. Love working in groups and alone.<span className='aboutSpan'> welcoming each challenge with a smile.</span> </p>
                </div>
            </section>
            <section className='skillSection'>
                <SkillsContainer/>
            </section>
            {/*using the same classNames as Skills as a shortcut*/}
            <section className='skillSection'>
                <HobbiesContainer/>
            </section>


        </div>
    )

}