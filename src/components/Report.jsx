import { ReportCard } from "./ReportCard"


export const Report = ({data, time}) => {
  return (
    <section className="user-reportDetail-container">
          <ReportCard data={data} time={time}/>
        </section>
  )
}
