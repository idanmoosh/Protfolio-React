import './About.css'
import pxArt from './pxArt.png'

export function About () {
    return (
        <div className='about'>
            <section>
                <img src={pxArt} alt='thats-me'/>
                <div className='content'>
                    <h2>About me</h2>
                    <p> </p>
                </div>
            </section>
            <aside>

            </aside>
        </div>
    )

}