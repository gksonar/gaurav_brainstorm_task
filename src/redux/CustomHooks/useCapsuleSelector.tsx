import { useAppSelector } from "../hooks";

const useCapsuleSelector = () => {
  return useAppSelector((state) => state.capsule);
};

export default useCapsuleSelector;
