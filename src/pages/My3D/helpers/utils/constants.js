import sun from '@assets/sun2.jpg';
import mercury from '@assets/mercury.png';
import venus from '@assets/venus.png';
import earth from '@assets/earth2.jpg';
import mars from '@assets/mars.jpg';
import jupiter from '@assets/jupiter.jpg';
import saturn from '@assets/saturn.jpg';
import rings from '@assets/rings.jpg';
import uran from '@assets/uranus.jpg';
import neptune from '@assets/neptune.jpg';
import pluto from '@assets/pluto.jpg';
import moon from '@assets/moon2.jpg';
import io from '@assets/io.jpg';
import europe from '@assets/europe.jpg';
import ganymede from '@assets/ganymede.jpg';
import callisto from '@assets/callisto.jpg';
import iapetus from '@assets/iapetus.jpg';
import tethys from '@assets/tethys.jpg';
import dione from '@assets/dione.jpg';
import rhea from '@assets/rhea.jpg';
import titan from '@assets/titan.jpg';

export const sunObject = {
  tiltedAxis: 7.25,
  rotationSpeedInHrs: 672,
  revolutionInDays: null,
  radius: 696340,
  key: 'sun',
  value: 'sun',
  text: 'Sun',
  picture: sun,
  distanceToSun: null,
  type: 'star'
};

export const mercuryObject = {
  tiltedAxis: 0.03,
  orbitTilt: 7,
  rotationSpeedInHrs: 1407.5,
  revolutionInDays: 88,
  radius: 2493.7,
  key: 'mercury',
  value: 'mercury',
  text: 'Mercury',
  picture: mercury,
  distanceToSun: 57909227,
  type: 'planet'
};

export const venusObject = {
  tiltedAxis: 177.3,
  orbitTilt: 3.4,
  rotationSpeedInHrs: 5832,
  revolutionInDays: 224.7,
  radius: 6051.8,
  key: 'venus',
  value: 'venus',
  text: 'Venus',
  picture: venus,
  distanceToSun: 108209475,
  type: 'planet'
};

export const earthObject = {
  tiltedAxis: 23.4,
  orbitTilt: 0,
  rotationSpeedInHrs: 24,
  revolutionInDays: 365.3,
  radius: 6377.397,
  key: 'earth',
  value: 'earth',
  text: 'Earth',
  picture: earth,
  distanceToSun: 149600000,
  type: 'planet'
};

export const marsObject = {
  tiltedAxis: 25.19,
  orbitTilt: 1.85,
  rotationSpeedInHrs: 24.623,
  revolutionInDays: 656.98,
  radius: 3389.5,
  key: 'mars',
  value: 'mars',
  text: 'Mars',
  picture: mars,
  distanceToSun: 227943824,
  type: 'planet'
};

export const jupiterObject = {
  tiltedAxis: 3.13,
  orbitTilt: 1.3,
  rotationSpeedInHrs: 9.925,
  revolutionInDays: 4328.9,
  radius: 69911,
  key: 'jupiter',
  value: 'jupiter',
  text: 'Jupiter',
  picture: jupiter,
  distanceToSun: 778340821,
  type: 'planet'
};

export const saturnObject = {
  tiltedAxis: 26.73,
  orbitTilt: 3.4,
  rotationSpeedInHrs: 10.656,
  revolutionInDays: 10749.25,
  radius: 58232,
  key: 'saturn',
  value: 'saturn',
  text: 'Saturn',
  picture: saturn,
  rings: rings,
  distanceToSun: 1426666422,
  type: 'planet'
};

export const saturnRing = {
  innerRing: 74565,
  outerRing: 136780,
  tiltedAxis: 26.73,
  rotationSpeedInHrs: 10.656
};

export const uranObject = {
  tiltedAxis: 82.23,
  orbitTilt: 0.77,
  rotationSpeedInHrs: 17.24,
  revolutionInDays: 30668,
  radius: 25362,
  key: 'uran',
  value: 'uran',
  text: 'Uran',
  picture: uran,
  distanceToSun: 2870658186,
  type: 'planet'
};

export const neptuneObject = {
  tiltedAxis: 28.32,
  orbitTilt: 1.77,
  rotationSpeedInHrs: 16.11,
  revolutionInDays: 60150,
  radius: 24622,
  key: 'neptune',
  value: 'neptune',
  text: 'Neptune',
  picture: neptune,
  distanceToSun: 4498396441,
  type: 'planet'
};

export const moonObject = {
  tiltedAxis: 0,
  orbitTilt: 5,
  rotationSpeedInHrs: 648,
  revolutionInDays: 27.3,
  radius: 1737.1,
  key: 'moon',
  value: 'moon',
  text: 'Moon',
  picture: moon,
  distanceToPlanet: 384400,
  type: 'satelite'
};

export const plutoObject = {
  tiltedAxis: 122.5,
  orbitTilt: 17,
  rotationSpeedInHrs: 153.6,
  revolutionInDays: 90560,
  radius: 1188.3,
  key: 'pluto',
  value: 'pluto',
  text: 'Pluto',
  picture: pluto,
  distanceToSun: 5900000000,
  type: 'planet'
};

export const ioObject = {
  tiltedAxis: 0,
  orbitTilt: 0.05,
  rotationSpeedInHrs: 42.456,
  revolutionInDays: 1.769,
  radius: 1821.6,
  key: 'io',
  value: 'io',
  text: 'Io',
  picture: io,
  distanceToPlanet: 421700,
  type: 'satelite'
};

export const europaObject = {
  tiltedAxis: 0.1,
  orbitTilt: 0.47,
  rotationSpeedInHrs: 85.224,
  revolutionInDays: 3.551,
  radius: 1560.8,
  key: 'europa',
  value: 'europa',
  text: 'Europa',
  picture: europe,
  distanceToPlanet: 670900,
  type: 'satelite'
};

export const ganymedeObject = {
  tiltedAxis: 0.2,
  orbitTilt: 0.2,
  rotationSpeedInHrs: 171.696,
  revolutionInDays: 7.154,
  radius: 2634.1,
  key: 'ganymede',
  value: 'ganymede',
  text: 'Ganymede',
  picture: ganymede,
  distanceToPlanet: 1070400,
  type: 'satelite'
};

export const callistoObject = {
  tiltedAxis: 0,
  orbitTilt: 0.192,
  rotationSpeedInHrs: 400.536,
  revolutionInDays: 16.689,
  radius: 2410.3,
  key: 'callisto',
  value: 'callisto',
  text: 'Callisto',
  picture: callisto,
  distanceToPlanet: 1882700,
  type: 'satelite'
};

export const iapetusObject = {
  tiltedAxis: 0,
  orbitTilt: 17.28,
  rotationSpeedInHrs: 1903.716,
  revolutionInDays: 79.3215,
  radius: 734.35,
  key: 'iapetus',
  value: 'iapetus',
  text: 'Iapetus',
  picture: iapetus,
  distanceToPlanet: 3560820,
  type: 'satelite'
};

export const tethysObject = {
  tiltedAxis: 0,
  orbitTilt: 1.12 + saturnObject.tiltedAxis,
  rotationSpeedInHrs: 45.307248,
  revolutionInDays: 1.887802,
  radius: 531.1,
  key: 'tethys',
  value: 'tethys',
  text: 'Tethys',
  picture: tethys,
  distanceToPlanet: 294619,
  type: 'satelite'
};

export const dioneObject = {
  tiltedAxis: 0,
  orbitTilt: 0.019 + saturnObject.tiltedAxis,
  rotationSpeedInHrs: 65.68596,
  revolutionInDays: 2.736915,
  radius: 564.4,
  key: 'dione',
  value: 'dione',
  text: 'Dione',
  picture: dione,
  distanceToPlanet: 377396,
  type: 'satelite'
};

export const rheaObject = {
  tiltedAxis: 0,
  orbitTilt: 0.345 + saturnObject.tiltedAxis,
  rotationSpeedInHrs: 108.437088,
  revolutionInDays: 4.518212,
  radius: 766.2,
  key: 'rhea',
  value: 'rhea',
  text: 'Rhea',
  picture: rhea,
  distanceToPlanet: 527108,
  type: 'satelite'
};

export const titanObject = {
  tiltedAxis: 0,
  orbitTilt: 0.34854 + saturnObject.tiltedAxis,
  rotationSpeedInHrs: 382.68,
  revolutionInDays: 15.945,
  radius: 2574.73,
  key: 'titan',
  value: 'titan',
  text: 'Titan',
  picture: titan,
  distanceToPlanet: 1221870,
  type: 'satelite'
};

export const skyObjects = {
  sun: sunObject,
  mercury: mercuryObject,
  venus: venusObject,
  earth: earthObject,
  mars: marsObject,
  jupiter: jupiterObject,
  saturn: saturnObject,
  uran: uranObject,
  neptune: uranObject,
  moon: moonObject,
  pluto: plutoObject
};
