import React from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

// enables dynamic style changes
export default(props) => {
  const divStyle = {
    textAlign: 'left',
    fontSize: '10px',
    margin: 0,
    color: props.color
  };

  return (
    <div>
      <div style={divStyle}>{_.max(props.data)}</div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div style={divStyle}>{_.min(props.data)}</div>
      <div>{average(props.data)}&nbsp;{props.units}</div>
    </div>
  );
}
