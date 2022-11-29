
import logoKasa from '../../assets/LOGO.png'
import "./style.css";





function Header() {
    return (
        <div className='HeaderWrapper'>
        <img className='LogoHeader' src ={logoKasa} alt = 'Logo kasa' />
        <nav>
          <a className='StyledLink' href="/">Accueil</a>
          <a className='StyledLink' href="/A-propos">A propos</a>
        </nav>
      </div>
    
    )
}

export default Header