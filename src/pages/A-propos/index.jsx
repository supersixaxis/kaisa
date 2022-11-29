import Banner from '../../components/Banner'
import bannerImg from '../../assets/banner2.png'
import DropDown from '../../components/collapse/index'
import './style.css'


function APropos() {
    return (
        <div className='aProposWrapper'>
          <Banner image = {bannerImg} alt='Montagne'
          />
        <section>
            <div className='dropDownCenter'>
                      <DropDown
            title='Fiabilité'
            description={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>}
          />
          <DropDown
            title='Respect'
            description={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
          />
          <DropDown
            title='Service'
            description={<p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>}
          />
          <DropDown
            title='Sécurité'
            description={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
          />
          </div>
        </section>
        </div>
    )
}

export default APropos