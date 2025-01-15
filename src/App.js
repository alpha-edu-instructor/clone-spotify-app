import { useEffect, useState } from "react";
import AppRouter from "./components/core/AppRouter";
import Layout from "./components/core/Layout";
import { getAccessToken } from "./services/auth";
import "./assets/css/style.css";

export default function App() {
  const [error, setError] = useState("");

  useEffect(() => {
    async function getToken() {
      try {
        await getAccessToken();
      } catch (error) {
        setError("Error during fetching access token");
        console.log(error);
      }
    }
    getToken();
  }, []);

  if (error) {
    return <div style={{ color: "#fff" }}>{error}</div>;
  }

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}
