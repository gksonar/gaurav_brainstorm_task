import HomePage from "@/src/HomePage";
import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
export interface CapsuleDataResponse {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  original_launch_unix: number;
  missions: [
    {
      name: string;
      flight: number;
    }
  ];
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
}
const Home: NextPage = () => {
  const [state, setState] = useState<CapsuleDataResponse[]>([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios
      .get(`http://localhost:4300/Api/index.php`)
      .then(({ data, status }) => {
        setState(data);
      });
  };

  console.log(state);
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
