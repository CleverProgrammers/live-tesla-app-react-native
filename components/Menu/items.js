import { faCog, faToolbox, faFan, faKey, faUnlockAlt, faMusic, faChevronRight, faClock, faThermometerHalf, faCar, faBolt, faMapMarkerAlt, faShoppingBag, faWrench, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

const items = [
    {
      id: 1,
      icon: faMusic,
      title: "Media",
    },
    {
      id: 2,
      icon: faClock,
      title: "Software Updates",
      subTitle: "Approximate time to install: 45 min"
    },
    {
      id: 3,
      icon: faThermometerHalf,
      title: "Climate",
      subTitle: "20°F"
    },
    {
      id: 4,
      icon: faCar,
      title: "Controls",
    },
    {
      id: 5,
      icon: faBolt,
      title: "Charging",
    },
    {
      id: 6, 
      icon: faMapMarkerAlt, 
      title: "Location "
    },    
    {
      id: 7, 
      icon: faShoppingBag, 
      title: "Upgrades "
    },        
    {
      id: 8, 
      icon: faKey, 
      title: "Phone Key ",
      subTitle: "Disconnected"
    },        
    {
      id: 9, 
      icon: faWrench, 
      title: "Services "
    },        
    {
      id: 11, 
      icon: faExclamationTriangle, 
      title: "Roadside assistance "
    },        
];

export default items;