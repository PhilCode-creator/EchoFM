import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import './player.css';

const Player = ({ cover, name, author }) => {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const toggleMusic = () => {
        console.log(name);
        // TODO: toggleMusic
    };

    return (
        <div className="player">
            <div className="player-infos">
                <div className="song-infos">
                    <img src={cover} alt="cover" />
                    <div className="names">
                        <h1>{name}</h1>
                        <p>{author}</p>
                    </div>
                </div>
                <FontAwesomeIcon className='player_play_icon' onClick={toggleMusic} icon={faPlay} />
                <div className="volume">
                <Box sx={{ width: 200 }}>
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <VolumeDown/>
                        <Slider aria-label="Volume" value={value} onChange={handleChange} />
                        <VolumeUp />
                    </Stack>
                </Box>
                </div>
            </div>

        </div>
    );
};

export default Player;