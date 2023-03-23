import { useEffect } from "react";
import useCapsuleSelector from "../redux/CustomHooks/useCapsuleSelector";
interface Props {
  startValue: number;
  setStartValue: React.Dispatch<React.SetStateAction<number>>;
  endValue: number;
  setEndValue: React.Dispatch<React.SetStateAction<number>>;
  CARDS_COUNT: number;
}
const Pagination = (props: Props) => {
  const { startValue, setStartValue, endValue, setEndValue, CARDS_COUNT } =
    props;
  const { value } = useCapsuleSelector();
  useEffect(() => {
    setEndValue(
      startValue + CARDS_COUNT < value.length
        ? startValue + CARDS_COUNT
        : value.length
    );
  }, [CARDS_COUNT, setEndValue, startValue, value.length]);

  return (
    <>
      {value.length >= 1 && (
        <section className="py-16 bg-gray-100 overflow-hidden ml-4 mr-4 ">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-700 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {startValue}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {endValue}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {value.length}
              </span>{" "}
              Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button
                onClick={() => {
                  setStartValue((prev) =>
                    prev - CARDS_COUNT <= 0 ? (prev = 0) : prev - CARDS_COUNT
                  );
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Prev
              </button>
              <button
                onClick={() => {
                  setStartValue((prev) =>
                    prev + CARDS_COUNT >= value.length
                      ? prev
                      : prev + CARDS_COUNT
                  );
                  console.log("clickes");
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Pagination;
