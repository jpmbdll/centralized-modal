import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/index';
import './index.css';
import App from './App';
import TestModal from './components/UI/Modal';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <TestModal/>
    <App />
  </Provider>,
  document.getElementById('root')
);
