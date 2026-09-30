import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <main>
      <h1>Hello, you are on the landing page for visitors.</h1>
      <p>Sign up now, or sign in to see your super secret dashboard!</p>
    </main>
  );
};

export default Landing;