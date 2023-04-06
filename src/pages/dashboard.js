import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div>
      <div>Dashboard</div>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Dashboard;
