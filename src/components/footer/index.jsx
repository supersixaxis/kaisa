import logoKasa from '../../assets/LOGOFOOTER.png'
import "./style.css";


function Footer(){
    return (
        <div className='FooterWrapper'>
        <img className='LogoFooter' src ={logoKasa} alt = 'Logo kasa'/>
        <p className='FooterP'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer