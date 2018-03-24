import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
  const array = [
    {title:'Look at me!',content:'Whazzup?'},
    {title:'Tab2: look at you', content:'hey you! Come over here.'},
    {title:'tab3', content:'shhhh. You didnt see me.'}
  ];
class WRoot extends React.Component {

  render() {
    return (
      <div>
        <Clock />
        <Tabs {...array} />
      </div>
    );
  }
}

export default WRoot;
