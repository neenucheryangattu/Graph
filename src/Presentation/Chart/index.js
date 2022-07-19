import React,{useState} from 'react'
import {Representation} from './style'
import {Chart as ChartJs,BarElement,CategoryScale,LinearScale} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { GetCitieslist } from './store';
import { useNavigate } from "react-router-dom";
import {useSearchParams } from "react-router-dom";
ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement
)


function Charts() {
 
      const[{isLoading,cities,measurements,parameter},{getcity,setCities,setmeasurements,getmeasurements,setparameter}]=GetCitieslist()
    
    console.log(cities,'............city')
    const[city,setcity]=useState('')
    const[date_from,setdate_from]=useState('')
    const[date_to,setdate_to]=useState('')
    console.log(parameter.parameter,'............msrmnts')
    console.log(date_to,'................date')
    console.log(date_from,'................datefrm')
    console.log(city,'...........selectcity')
    
    React.useEffect(() => {
      getcity();
    }, []);
  var data= {
    labels: ['pm25','um025','um100','pm1','um010','pm10'],
    datasets: [{
        label: '# of Pollution',
        data: [12, 19, 3, 5, 2, 3,6],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
           
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
           
        ],
        borderWidth: 1
    }]
}

var options={
  scales:{
    y:{
      beginAtZero:true
    }
  },
  legend:{
    labels:{
      fontSize:26
    }
  }
}

const navigate = useNavigate();

const handleClick = () =>{
  navigate({
    pathname: '/measurements',
    search: `?city=${city}&date_from=${date_from}&date_to=${date_to}`,
  }

  );
  getmeasurements( `?city=${city}&date_from=${date_from}&date_to=${date_to}`)
}

  return (
    <Representation>
     
      <Bar
      data={data}
      height={100}
     
      options={options}
      />
     <div className='date'>
     
     <select name="cars" id="cars" onChange={(e)=>setcity(e.target.value)} >
        <option value="volvo" disabled selected hidden>City</option>
        {cities?.map((res, index) => (
        <option value={cities.city}>{res.city}</option>
        ))}
      
       </select>
     
      <input type='date' onChange={(e)=>setdate_from(e.target.value)}/>
      <input type='date' onChange={(e)=>setdate_to(e.target.value)}/>
     
     </div>
   <div className='btn'>
    <button onClick={()=> handleClick( `?city=${city}&date_from=${date_from}&date_to=${date_to}`)}>Submit</button>
   </div>
   

   
    </Representation>
  )
}

export default Charts