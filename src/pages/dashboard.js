import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  return (
    <main>
      <div>Dashboard</div>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Home
      </button>
    </main>
  );
};

export default Dashboard;
