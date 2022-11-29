import './style.css'


function Banner (banner){
    return (
        <div className='bannerWrapper'>
        <p className="bannerP">{banner.texte}</p> 
        <img className='bannerImage' src={banner.image} alt ='bannière'/>
        </div>   
        )
}

export default Banner