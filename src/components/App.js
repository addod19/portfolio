// eslint-disable-next-line
// eslint-no-unused-vars
import React, { useState, useEffect } from 'react';

import Pages from '../pages'

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/addod19')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      })
      .catch( err => err);
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;
