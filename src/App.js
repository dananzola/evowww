import './App.css';
import './fire.scss';
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import Body from './comps/Body';
import About from './comps/About';
import Layout from './layouts/Layout';
const bootstrap = require('bootstrap');

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Body />} />
            <Route path="about" element={<About />} />
            <Route
                path="*"
                element={<Body />}
            />
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={router} />        
    );
}

export default App;