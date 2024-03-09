import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LiveStream from './components/LiveStream';
import VideoUpload from './components/VideoUpload';
import VideoPlayer from './components/VideoPlayer';
import Recommendations from './components/Recommendations';

function App() {
  const [videos, setVideos] = useState([]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/live" component={LiveStream} />
        <Route path="/upload" component={VideoUpload} />
        <Route path="/watch/:id" component={VideoPlayer} />
        <Route path="/recommendations" component={Recommendations} />
      </Switch>
    </Router>
  );
}

export default App;
