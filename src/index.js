import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SimpleMap from './Map';
import Marker from './Marker';

ReactDOM.render(<SimpleMap/>, document.getElementById('root'));
registerServiceWorker();
