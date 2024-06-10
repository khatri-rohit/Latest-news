import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState('technology')
  const [country, setCountry] = useState('in')

  return (
    <div className="">
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} country={country} />
    </div>
  );
};

export default App;
