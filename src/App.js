import { useEffect, useState } from "react";

const heading={textAlign:'center',color:'rgb(256,256, 256)',};

const containerStyle={
  width:'500px',
  height:'500px',
  backgroundColor:'rgb(256,256, 256,0.4)',
  marginLeft:'525px',
  borderRadius:'20px',
  boxShadow:'0 4px 8px rgba(2, 2, 2, 0.1)',
 
};

const stopwatchStyle={

  fontSize:'48px',
paddingLeft:'150px',paddingTop:'150px',fontWeight:'600'
};

const buttonStyle={

  backgroundColor:'red',marginLeft:'75px',marginTop:'120px',
  width:'65px',height:'50px',borderRadius:'20px',color:'white',fontSize:'20px'
}

function App() {

  const [time,setTime]=useState(0);
  const [timeRun,setTimeRun]=useState(false);


  useEffect(()=>{

    let timeInterval;
      if(timeRun){

        timeInterval= setInterval(()=>{

          setTime(prevTime=>prevTime+10);
        },10);
      }

      else if(!timeRun){
          clearInterval(timeInterval);
      }

      return ()=>clearInterval(timeInterval);
    } ,[timeRun]
  );

  return (
    <>
    <h1 style={heading}>Stopwatch</h1>

     <div className="container" style={containerStyle}>

      <div style={stopwatchStyle} >

      <span >{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
      <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
      <span>{("0"+Math.floor((time/10)%100)).slice(-2)}</span>

      </div>
      


      
     <div >
      <button style={buttonStyle} onClick={()=>setTimeRun(true)}>start</button>
      <button style={buttonStyle} onClick={()=>setTimeRun(false)}>stop</button>
      <button style={buttonStyle}onClick={()=>setTime(0)}>reset</button>
     </div>
     </div>

    </>
  );
}

export default App;
