import Error404 from '../../assets/404.png'
import './style.css'


function Error() {
    return (
        <div className='erreurWrapper'>
        <img className='erreur' src={Error404} alt = 'Erreur'/>
        <p className='erreurP'>Oups ! La page que vous demandez n'existe pas.</p>
        <a className='styledLinkError' href="/">Retourner sur la page d'acceuil</a>
        </div>

    )
}

export default Error