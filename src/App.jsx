import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TicketContainer from "./components/TicketContainer";
import Tickets from "./components/Tickets";
import LoadingSpinner from "./components/LoadingSpinner";

const loadTickets = () => fetch("/data.json").then((res) => res.json());

function App() {
  const ticketsPromise = loadTickets();
  // console.log(orderPromise);

  return (
    <div>
      <header className="">
        <Navbar></Navbar>
      </header>
      <section>
        <Suspense fallback={<LoadingSpinner />}>
          <TicketContainer promise={ticketsPromise}></TicketContainer>
        </Suspense>
      </section>
      <main></main>
    </div>
  );
}

export default App;
