import HomePage from "@/src/HomePage";
import { setCapsule } from "@/src/redux/capsuleSlice";
import { useAppDispatch } from "@/src/redux/hooks";
import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
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
  const [capsuleData, setCapsuleData] = useState<CapsuleDataResponse[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    dispatch(setCapsule(capsuleData));
  }, [capsuleData, dispatch]);

  const loadData = async () => {
    await axios
      .get(`http://localhost:4300/Api/index.php`)
      .then(({ data, status }) => {
        setCapsuleData(data);
      });
  };
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
