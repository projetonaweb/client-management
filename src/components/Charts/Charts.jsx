import React, { useState } from "react";
import Chart from "react-apexcharts";



const Charts = () => {
  const [selectOption, setSelectOption] = useState('line')
  
  const [options, setOptions] = useState({   
    xaxis: {
      categories: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
    }
  },)

  const [series, setSeries] = useState([{
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 10, 324, 123, 12]
    }
  ])



  return (
    <div style={{display: 'flex', alignItems: 'center', padding: '40px 0', height: '500px', width: '1150px', justifyContent: 'space-between'}} className="chart"> 


          <Chart
            options={options}
            series={series}
            type='bar'
            width="550"
          />
          <Chart
            options={options}
            series={series}
            type='line'
            width="550"
          />


    </div>
  );
}

export default Charts;