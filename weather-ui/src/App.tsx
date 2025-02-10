import CityComponent from "./Components/city";
import '../src/Styles/city.css';

export const App=()=>{

  const divStyle = {
    backgroundImage:'url(https://www.pixelstalk.net/wp-content/uploads/2016/07/HD-Relaxing-Image.jpg)',  // Set the background color
    backgroundSize: 'cover',  // Ensures the background image covers the whole component
    backgroundPosition: 'center', // Centers the image
    backgroundHeight: '100vh',  // Sets the height of the background image
    backgroundWidth: '50%',  // Sets the width of the background image
  };

  return(
    <>
            <div>
            <div id="heading" style={divStyle}>
                <h1 style={{fontSize:55}}>Weather App</h1>
                <br />
                  &ensp;&ensp;&ensp;&ensp;
                 <text> &copy; PriyaTambe 2025</text>
            </div> 
            <CityComponent></CityComponent>
            </div>
    </>
  );
}