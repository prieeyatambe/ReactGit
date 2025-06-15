import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CityComponent from "./Components/city";
import '../src/Styles/city.css';
export const App = () => {
    const divStyle = {
        backgroundImage: 'url(https://www.pixelstalk.net/wp-content/uploads/2016/07/HD-Relaxing-Image.jpg)', // Set the background color
        backgroundSize: 'cover', // Ensures the background image covers the whole component
        backgroundPosition: 'center', // Centers the image
        backgroundHeight: '100vh', // Sets the height of the background image
        backgroundWidth: '50%', // Sets the width of the background image
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsxs("div", { id: "heading", style: divStyle, children: [_jsx("h1", { style: { fontSize: 55 }, children: "Weather App" }), _jsx("br", {}), "\u2002\u2002\u2002\u2002", _jsx("text", { children: " \u00A9 PriyaTambe 2025" })] }), _jsx(CityComponent, {})] }) }));
};
