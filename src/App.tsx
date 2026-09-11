import { Suspense } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import type { Itechnology } from "./type/Type";
import Card from "./components/card/card";
import Footer from "./components/Footer";

const getTechs = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const  data = res.json();
  return data;
};

const cardPromise: Promise<Itechnology[]> = getTechs();

function App() {
  return (
    <>
      <Nav />
      <Banner />
      
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-50">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-[#DB2777] rounded-full animate-spin"></div>
          </div>
        }
      >
        <Card cardPromise={cardPromise} />
      </Suspense>
      
      <Footer />
    </>
  );
}

export default App;
