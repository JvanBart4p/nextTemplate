import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <main className="home">
        <div className="home__section-one">
          <h1>NextJS app Template</h1>
          <Button />
        </div>
      </main>
    </>
  );
}

// export async function getServerSideProps(ctx) {
//   let data = await fetch(`${process.env.REACT_APP_API_URL}/users`);
//   console.log(data.json());
//   return {
//     props: {},
//   };
// }
