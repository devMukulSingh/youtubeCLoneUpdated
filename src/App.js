import './_app.scss';
import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Search from "./Pages/SearchPage/Search";
import Error from "./Pages/ErrorPage/Error";
import PlayerScreen from "./Pages/PlayerScreen/PlayerScreen"
import { AppContext } from './context/contextApi';
import TrendingPage from './Pages/TrendingPage/TrendingPage';

const App = () => {
  return (
    <>
    <AppContext>
      <BrowserRouter>
        <Routes>

        <Route path ="/" exact element= {<Layout/>} >
          <Route index element = {<HomeScreen/>} />
            <Route path = "/trending/:category" element = { <TrendingPage/>} />
            <Route path = "/video/:id" element = { <PlayerScreen/> } />
           <Route path = "/search/:query" element = { <Search/> } />
        </Route>
        <Route path ="*" element = {<Error/>} />          

        </Routes>

      </BrowserRouter>
    </AppContext>
    </>
  );
}

export default App;
