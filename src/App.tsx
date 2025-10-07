import { useState } from "react";
// import Navbar from "./companents/navbar"
import { Navbar } from "./companents/navbar";
import {Timeline} from "./companents/timeline";
import {Calendar} from "./companents/Calendar";
function App() {
  const [tab, setTab] = useState("Calendar");

  return (
    <main className="w-full min-h-screen flex flex-col relative">
      <Navbar tabs={["Calendar", "Timeline"]} {...{ tab, setTab }} />
      <section className="p-4 flex-1 flex flex-col">
        {
          {
            Timeline: <Timeline />,
            Calendar: <Calendar />,
          }[tab]
        }
      </section>
    </main>
  );
}

export default App;

