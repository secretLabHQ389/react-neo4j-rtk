//Hydration only for adding server-rendered
//components to the React node
//and can't have mismatches

//If you call root.render at some point after hydration, 
//and the component tree structure matches up with what was previously rendered, 
//React will preserve the state. Notice how you can type in the input, 
//which means that the updates from repeated render calls every second in this example 
//are not destructive:

import { hydrateRoot } from 'react-dom/client';
import './styles.css';
import App from './App.js';

const root = hydrateRoot(
  document.getElementById('root'),
  <App counter={0} />
);

let i = 0;
setInterval(() => {
  root.render(<App counter={i} />);
  i++;
}, 1000);