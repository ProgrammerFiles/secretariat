import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages";
import { Layout } from "./components";


const App = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
            </Route>
        </Routes>
     );
}
 
export default App;
