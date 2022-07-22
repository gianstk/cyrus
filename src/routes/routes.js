import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CounterScreen from "../screens/CounterScreen";
import HomeScreen from "./../screens/HomeScreen";
import TodoScreen from "./../screens/TodoScreen";


const NavBar = () => {
  return (
    <nav className="bg-orange-300 flex py-3 px-6 justify-between text-white">
      <div className="font-bold text-3xl">React Test App</div>

      <div className="text-2xl">
        <a className="ml-3" href="/">Home</a>
        <a className="ml-3" href="/counter">Counter</a>
        <a className="ml-3" href="/todo">Todo</a>
      </div>
    </nav>
  );
}

const ApplicationRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/counter" element={<CounterScreen />} />
        <Route path="/todo" element={<TodoScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRouter;