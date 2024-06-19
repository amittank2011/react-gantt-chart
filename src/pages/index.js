import GanttChart from "../components/GanttChart";

import api from "../service/api";

export default function Home({ data }) {
  return (
    <div>
      <h1>Gantt Chart POC</h1>
      <GanttChart data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const data = await api({ request: `/api/chartData`, method: "GET" });

  return {
    props: {
      data,
    },
  };
}
