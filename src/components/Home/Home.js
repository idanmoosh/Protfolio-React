import './Home.css'
import pixels from './pixels.jpg'

export function Home () {
    return (
        <div className="Home">
            <img src={pixels}alt='pixels' className='HeroImage'/>
            <section>
            <h2 className='h2'>Hello!</h2>
            <p> I'm <span>Idan</span>, a Developer Based in Ramat-Gan. Looking for my next challenge</p>
            </section>
        </div>
    )
}