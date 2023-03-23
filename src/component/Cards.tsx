import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useCapsuleSelector from "../redux/CustomHooks/useCapsuleSelector";
import { CapsuleDataResponse } from "@/pages";
import CapsuleDetailsModal from "./CapsuleDetailModal";
interface Props {
  startValue: number;
  endValue: number;
  searchStatusQuery: string;
  searchOriginalLaunchQuery: string;
  searchTypeQuery: string;
}
const Cards = (props: Props) => {
  const {
    startValue,
    endValue,
    searchStatusQuery,
    searchOriginalLaunchQuery,
    searchTypeQuery,
  } = props;
  const { value } = useCapsuleSelector();
  const [selectedCapsuleData, setSelectedCapsuleData] =
    useState<CapsuleDataResponse>();

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (capsuleObj: CapsuleDataResponse) => {
    setSelectedCapsuleData(capsuleObj);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const searchData = (value: CapsuleDataResponse[]): CapsuleDataResponse[] => {
    return value
      .filter((capsuleObj) => {
        if (searchStatusQuery === "") {
          return capsuleObj;
        } else if (
          capsuleObj.status
            .toLowerCase()
            .includes(searchStatusQuery.toLowerCase())
        ) {
          return capsuleObj;
        }
      })
      .filter((capsuleObj) => {
        if (searchOriginalLaunchQuery === "") {
          return capsuleObj;
        } else if (capsuleObj.original_launch)
          if (
            capsuleObj.original_launch.includes(
              searchOriginalLaunchQuery.toLowerCase()
            )
          ) {
            return capsuleObj;
          }
      })
      .filter((capsuleObj) => {
        if (searchTypeQuery === "") {
          return capsuleObj;
        } else if (capsuleObj.type)
          if (
            capsuleObj.type
              .toLowerCase()
              .includes(searchTypeQuery.toLowerCase())
          ) {
            return capsuleObj;
          }
      });
  };
  console.log(value);
  return (
    <section className="py-16 bg-gray-100 overflow-hidden ml-4 mr-4 ">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-xl mx-auto text-center">
          <span className="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest">
            Here&apos;s is the
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
            Capsules
          </h2>
        </div>

        <div className="flex flex-wrap -m-4">
          {searchData(value).length === 0 ? (
            <h3 className=" mx-auto font-heading text-2xl md:text-2xl text-gray-900 font-black tracking-tight">
              Data not Found
            </h3>
          ) : (
            <>
              {value &&
                searchData(value)
                  .map((capsuleObj) => {
                    return (
                      <div
                        key={capsuleObj.capsule_serial}
                        className="w-full md:w-1/4 p-3"
                      >
                        <div className="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-white rounded-3xl">
                          <div className="flex-initial mb-8">
                            <h3 className="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">
                              Serial {capsuleObj.capsule_serial}
                            </h3>
                            <p className="text-sm text-gray-500 font-bold">
                              Capsule Original Launch :{" "}
                              <span className="text-sm text-gray-500 font-medium">
                                {capsuleObj.original_launch}
                              </span>
                            </p>
                            <p className="text-sm text-gray-500 font-bold">
                              Capsule Type :{" "}
                              <span className="text-sm text-gray-500 font-medium">
                                {capsuleObj.type}
                              </span>
                            </p>
                          </div>
                          <div className="flex-initial">
                            <div className="flex flex-wrap justify-center -m-1.5">
                              <div className="w-auto p-1.5">
                                <a
                                  className="flex items-center justify-center w-10 h-10 bg-gray-300 hover:bg-gray-800 rounded-full"
                                  onClick={() => handleOpenModal(capsuleObj)}
                                >
                                  <VisibilityIcon
                                    style={{ color: "#FFFFFF" }}
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                  .slice(startValue, endValue)}
            </>
          )}
        </div>
      </div>
      {modalOpen && selectedCapsuleData && (
        <CapsuleDetailsModal
          onClose={handleCloseModal}
          capsuleData={selectedCapsuleData}
        />
      )}
    </section>
  );
};

export default Cards;
