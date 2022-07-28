import React from 'react';

import ChartBar from './ChartBar'
import './Chart.css';

const Chart = (props) => {
  const valueArray = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMax  = Math.max(...valueArray);

  return (
    <div className='chart'>
      {
        props.dataPoints.map(dataPoint => {
          return (
            <ChartBar 
              key={dataPoint.label}
              label={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMax}
            />
          )
        })
      }
    </div>
  )
}

export default Chart;