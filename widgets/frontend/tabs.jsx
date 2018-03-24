import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTab: 0
    };


    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    return () => this.setState({currentTab: num});
  }

  render(){
    return (
    <div>
      <ul className="button-time">
          <button onClick = {this.selectTab(0)}>ONE</button>
          <button onClick = {this.selectTab(1)}>TWO</button>
          <button onClick = {this.selectTab(2)}>THREE</button>
      </ul>
      <article> I'm Cool</article>
    </div>
  );
  }

}


export default Tabs;
