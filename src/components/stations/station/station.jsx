import './station.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const Station = ({name, image}) => {
    const playMusic = () => {
        console.log(name)
        //TODO play music
    };
    return ( 
        <div className="station">
            <div className="cover">
                <img src={image} alt={name}/>
                <FontAwesomeIcon className='play_icon' onClick={playMusic} icon={faPlay} />
            </div>
            <h1>{name}</h1>
        </div>
     );
}
 
export default Station;