import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Post title={'Title'} author={'Author Authorson'} body={"body text body text body text body text body text body text body text body text"} comments={['comments', 'comments', 'commmments']} />, document.getElementById('root'));
registerServiceWorker();
