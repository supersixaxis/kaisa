import { useParams } from 'react-router-dom'
import { appartementList } from '../../datas/appartementList'
import './style.css'
import Error from '../../components/error'
import { ImageSlider } from '../../components/Slide'
import DropDown from '../../components/collapse/index'
import starFull from '../../assets/Starfull.png'
import starEmpty from '../../assets/Starempty.png'

function Logement() {
    const {id} = useParams()
    const appartement = appartementList.find((logement)=> logement.id === id);
    const rang = [1, 2, 3, 4, 5]

    if (!appartement) {
      return <Error />
    }
    return(  
    <div className='LogementWrapper'>  
    <div>
    <ImageSlider slides={appartement.pictures}/>
    </div>
        <div className='header-flex'>
        <h1 className='primaryColor appartementTitle'>{appartement.title}</h1>
        <div className='host-flex'>
        <p className='primaryColor hostP'>{appartement.host.name}</p>
        <img src={appartement.host.picture} alt="Propriétaire" className='imageHost'/>
        </div>
        </div>
        <p className='primaryColor'>{appartement.location}</p>
        <div >
        <div className='tag-flex'> 
        <ul className='appartementListe'>
                {appartement.tags.map((tags, index) => (
                <li className='appartementTags' key={`${index}-${tags}`}>{tags}</li>
              ))}
        </ul>
        <div className='star'>{rang.map((rangElement) =>
              appartement.rating >= rangElement ? <span key={rangElement}> <img src={starFull} alt='starFull' className='' /></span> : <span key={rangElement}><img src={starEmpty} alt='starEmpty' className='' /></span>
            )}</div>


        </div>
        </div>



        
        <div className='dropdownWrapper'>
          <div className='dropDownLogement'>
        <DropDown title='Description'
            description={<p>{appartement.description}</p>} />
            </div>
          <div className='dropDownLogement'>
        <DropDown
            title='Équipements'
            description={<ul className=''>{appartement.equipments.map((equipments, index) => (
              <li className='appartementEquipements' key={`${index}-${equipments}`}>{equipments}</li>
            ))}</ul>} />
            </div>
      </div>
         


</div> 
    )

  }


export default Logement