import { useEffect } from "react"
import { useState } from "react"
import { UserReport } from "./components/UserReport";
import { Report } from "./components/Report";

function App() {
  const [data, setData] = useState([]);
  const [time, setTime] = useState("daily");

  async function getData ()  {
    const res = await fetch("data.json")
    const data = await res.json()
    return data
}
  
  useEffect(()=>{
    getData()
      .then((newData) =>setData(newData))
  },[])

  return (
    <main className="main-container">
      <div className="report-container">
        <UserReport setTime={setTime} time={time}/>
        <Report data={data} time={time}/>
      </div>
    </main>
  )
}

export default App
