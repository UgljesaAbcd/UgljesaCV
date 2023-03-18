import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import EarthSphere from './components/EarthSphere';
import SaturnSphere from './components/SaturnSphere';

const timeSpeedOptions = [
  { key: 1, value: 1, text: 1 },
  { key: 1000, value: 1000, text: 1000 },
  { key: 36000, value: 36000, text: 36000 },
  { key: 86400, value: 86400, text: 86400 }
];

const My3D = () => {
  const [currentPlanet, setCurrentPlanet] = useState('earth');
  const [timeSpeed, setTimeSpeed] = useState({
    key: 86400,
    value: 86400,
    text: 86400
  });
  const [initTime] = useState(new Date());
  const [orbitVisible, setOrbitVisible] = useState(true);
  const [showNames, setShowNames] = useState(true);

  const providedProps = {
    initTime,
    orbitVisible,
    showNames,
    timeSpeed: timeSpeed.value
  };
  return (
    <Box
      sx={{
        width: '100%',
        px: 2,
        pt: 1,
        height: 'calc(100vh - 40px)',
        overflowY: 'scroll'
      }}
    >
      <Select
        value={currentPlanet}
        onChange={e => setCurrentPlanet(e.target.value)}
      >
        <MenuItem value={'earth'}>Earth</MenuItem>
        <MenuItem value={'saturn'}>Saturn</MenuItem>
      </Select>

      <Box
        sx={{
          width: '100%',
          px: 2,
          pt: 1,
          height: 'calc(100vh - 130px)',
          backgroundColor: 'black'
        }}
      >
        <Canvas>
          <OrbitControls maxDistance={400} minDistance={20} />
          <ambientLight intensity={1} />
          {
            {
              earth: <EarthSphere {...providedProps} />,
              saturn: <SaturnSphere {...providedProps} />
            }[currentPlanet]
          }

          <Stars
            radius={200} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={2000} // Amount of stars (default=5000)
            factor={2} // Size factor (default=4)
            saturation={0} // Saturation 0-1 (default=0)
            fade
          />
        </Canvas>
      </Box>
    </Box>
  );
};

export default My3D;
