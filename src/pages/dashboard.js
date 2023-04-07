import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  return (
    <main>
      <div className="dashboard">
        <div className="dashboard__section-one">
          <div>Dashboard</div>
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </button>
        </div> 
      </div>
    </main>
  );
};

export default Dashboard;
