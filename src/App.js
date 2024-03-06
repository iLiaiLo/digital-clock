import React from 'react'

function App() {
  const [seconds,SetSeconds] = React.useState('');
  const [minutes,SetMinutes] = React.useState('');
  const [hours,SetHours] = React.useState('')

  //:${date.getMinutes().toString().length===1?"0"+date.getMinutes():date.getMinutes()}:${date.getSeconds().toString().length===1?"0"+date.getSeconds():date.getSeconds()}

  React.useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      SetSeconds(`${date.getSeconds().toString().length===1?"0"+date.getSeconds():date.getSeconds()}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(()=>{
    const interval=setInterval(()=>{
    const date= new Date();
    SetMinutes(`${date.getMinutes().toString().length===1?"0"+date.getMinutes():date.getMinutes()}`);
  },1000);

  return ()=>{
    clearInterval(interval)
  }
  },[]);

  React.useEffect(()=>{
    const interval=setInterval(()=>{
    const date= new Date();
    SetHours(`${date.getHours().toString().length===1?"0"+date.getHours():date.getHours()}`);
  },1000);

  return ()=>{
    clearInterval(interval)
  }
  },[])

  return (
  <div className="container">
    <div className="hours">{hours}</div>
    <div className="minutes">{minutes}</div>
    <div className="seconds">{seconds}</div>
  </div>   

  );
}

export default App;
