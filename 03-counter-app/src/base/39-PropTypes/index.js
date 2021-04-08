import React from 'react';
import reactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css';

const divRoot = document.querySelector('#root');

reactDom.render(<PrimeraApp saludo={"123"} />, divRoot);

