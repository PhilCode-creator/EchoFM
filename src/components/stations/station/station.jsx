import playButton from '../../../img/play.svg'
import './station.css'
const Station = ({name, image}) => {
    return ( 
        <div className="sation">
            <img src={image} alt='ficker'/>
            <h1>{name}</h1>
            <image src={playButton} alt='ficker'></image>

        </div>
     );
}
 
export default Station;