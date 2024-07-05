import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import AppRouter from './router/AppRouter.jsx';

// function App() {
//     const [data, setData] = useState(null);
//     const [toggle, setToggle] = useState(false);
//     const [value, setValue] = useState('')

//     const onClick = () => setToggle((prev) => !prev);

//     useEffect(() => {
//         setTimeout(() => {
//             setData({});
//         }, 100);
//     }, []);

//     return (
//         <div className="App">
//             <h1 data-testid='value-elem'>{value}</h1>
//             {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
//             {data && <div style={{ color: 'red' }}>data</div>}
//             <h1>Hello world</h1>
//             <button data-testid='toggle-btn' onClick={onClick}>click me</button>
//             <input onChange={e => setValue(e.target.value)} type="text" placeholder="Some text.."></input>
//         </div>
//     );
// }

// export default App;

const App = () => {
    return (
        <div>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
