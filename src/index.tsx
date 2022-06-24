import { createPortal } from 'react-dom';
import Wrapper from './components/Wrapper';
import Back from './components/Back';

export { Wrapper };

const init = () => {
    createPortal(Back, document.body);
};

export default init;
