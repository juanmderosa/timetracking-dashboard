import React from 'react'

const colorSelector = {
    Work: "hsl(15, 100%, 70%)",
    Play: "hsl(195, 74%, 62%)",
    Study: "hsl(348, 100%, 68%)",
    Exercise: "hsl(145, 58%, 55%)",
    Social: "hsl(264, 64%, 52%)",
    "Self Care": "hsl(43, 84%, 65%)",
  }
export const ReportCard = ({data, time}) => {
  const getMessage = (previous) => {
    if (time === "weekly") {
      return `Last Week - ${previous}`;
    } else if (time === "daily") {
      return `Last Day - ${previous}`;
    } else if (time === "monthly") {
      return `Last Month - ${previous}`;
    }
    return "";
  };

  return (
    <>
    {data.length > 0 && data.map((item, index)=>(
            <article key={index} className="activity-container">
              <div className="activity-header" style={{ backgroundColor: colorSelector[item.title] }}>
                  <img src={item.img} alt="activity img" />
              </div>
              <aside className="activity-info" >
                  <div className="title-container">
                  <p>{item.title}</p>
                  <img className='ellipsis-img' src="images/icon-ellipsis.svg" alt="ellipsis" />
                  </div>
                  <div className='timeframe-container'>
                    <h2 className="timeframe-h2">{`${item.timeframes[time].current}`} hrs</h2>
                    <p className="timeframe-last">{getMessage(item.timeframes[time].previous)} hrs</p>
                  </div>

              </aside>
            </article>
        ))}
    </>
    
  )
}
