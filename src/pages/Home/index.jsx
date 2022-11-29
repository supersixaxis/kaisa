import Banner from '../../components/Banner'
import { appartementList } from '../../datas/appartementList'
import Card from '../../components/Card'
import './style.css'
import bannerImg from '../../assets/banner1.png'
import { Link } from 'react-router-dom'

function Home(){
    return(
      <>
       <Banner texte='Chez vous, partout et ailleurs' image ={bannerImg} alt=''/>
    <div className='HomeWrapper'>
     
         {appartementList.map((appartement, index) => (
          <div key={`${appartement.id}-${index}`} className='CardsContainer'>
          <Link to={`Logement/${appartement.id}` }>
          <Card
            cover={appartement.cover}
            title={appartement.title}
          /></Link></div>
        ))}
    </div>
    </>
)
}

export default Home