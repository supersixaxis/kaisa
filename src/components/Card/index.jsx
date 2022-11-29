import PropTypes from 'prop-types'

function Card({title, cover }) {
    return (
        
        <div className='CardWrapper'>
            <img className='CardImage' src={cover} alt="Appartement" />
            <h2 className='CardTitle'>{title}</h2>
        </div>
       
    )
}
 
Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}
 
/*Card.defaultProps = {
    title: '',
    picture: DefaultPicture,
} */

export default Card