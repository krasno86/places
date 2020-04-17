import React from "react";
import Top3 from './top_3'
import Last3 from './last_3'

class TopCompany extends React.Component {
  render() {
    return (
      <div style={{float:'left', border: '4px double black', height: '700px', width: '70%', marginLeft:'1%' }}>
        <h1>Top_company</h1>
        <Top3 />
        <Last3 />
      </div>
    );
  }
}

export default TopCompany;