import photo_grid from '../images/grid.png'

export function Hero() {
    return (
        <section className='hero'>
            <img className='hero--photo' src={photo_grid} alt='' width='700px' height='400px'/>
            <h1 className='hero-header'>Experiences</h1>
            <p className='hero-text'>
                Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.
            </p>
        </section>
    )
}