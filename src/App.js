import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Form from "./Pages/Form/Form";
import store from "./Redux/Redux";
import { Provider } from "react-redux";

function App() {

  return (
   <Provider store={store}>
      <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<Form title='Qo’shish'/>} />
      <Route path="/edit" element={<Form title='O’zgartirish'/>} />

      </Routes>
    </div>
   </Provider>
  );
}

export default App;
