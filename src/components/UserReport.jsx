export const UserReport = ({setTime, time}) => {

  const handleClick = (e) =>{
    setTime(e.target.value)
  }

  const isActive = (buttonTime) => {
    return time === buttonTime ? "timeframes-button timeframes-button-active" : "timeframes-button";
  }

  return (
      <section className="user-report-container">
          <article className="user-report-info">
            <div className="avatar-container">
              <img className="avatar"src="/images/image-jeremy.png" alt="avatar" />
            </div>
            <div className="report-for-container">
              <p className="report-for-p">Report for</p>
              <h1 className="report-for-h1">Jeremy Robson</h1>
            </div>
          </article>
          <article className="user-report-timeframes">
          
            <button className={isActive("daily")} value="daily" onClick={handleClick}>Daily</button>
            <button className={isActive("weekly")} value="weekly" onClick={handleClick}>Weekly</button>
            <button className={isActive("monthly")} value="monthly" onClick={handleClick}>Monthly</button>
          </article>
      </section>
  )
}
