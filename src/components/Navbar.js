import airbnb_logo from '../images/airbnb_logo.png'

export function Navbar() {
    return (
        <nav>
            <img className='nav--logo' src={airbnb_logo} alt='' width='150px' height='100px'/>
        </nav>
    )
}