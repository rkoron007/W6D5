import React from 'react';

class Clock extends React.Component {
  constructor(){
    super();
    this.state = {currentTime: new Date()};

  }

  tick(){
    this.setState({currentTime: new Date()});
  }


  componentDidMount(){
  this.id =  setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount(){
    this.clearInterval(this.id);
    this.state.currentTime = 0;
  }


  render(){
    function addZeroBefore(n) {
      return (n < 10 ? '0' : '') + n;
    }
    let hr = addZeroBefore(this.state.currentTime.getHours() % 12);
    let min = addZeroBefore(this.state.currentTime.getMinutes());
    let sec = addZeroBefore(this.state.currentTime.getSeconds());
    return (
      <div className='clock'>
        <h1>Clock</h1>
        <h2> {hr} : {min} : {sec} </h2>
      </div>
    );
  }


}

export default Clock;





/// react code
//
// let clock = new Clock();
//
// clock.componentWillMount();
// ///////// componente is already mount
// clock.componentDidMount();
// //// im ready to take your component out of the dom
// clock.componentWillUnmount();
