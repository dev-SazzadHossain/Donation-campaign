import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CustomContainer from "../../ShearComponents/CustomContainer/CustomContainer";
import { Button } from "rsuite";
import ScrollToTop from "../../utils/ScrollToTop";
import CustomModal from "../../ShearComponents/CustomModal/CustomModal";
import { clothing, education, food, health } from "../../utils/AllImages";
const DonationDetails = () => {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [donationData, setDonationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  ScrollToTop(pathname);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch("/donation.json");
        const data = await response.json();
        if (data?.length > 0) {
          setDonationData(data);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  // single data load
  const singleDonation = donationData?.find((donation) => donation?.id == id);

  return (
    <div className=" pt-52">
      <CustomContainer>
        <div>
          <CustomModal />
          <div className=" relative  w-full h-[600px] overflow-hidden ">
            <img
              src={singleDonation?.url  || singleDonation?.category === "health"
                ? health
                : singleDonation?.category === "clothing"
                ? clothing
                : singleDonation?.category === "education"
                ? education
                : singleDonation?.category === "food"
                ? food
                : ""}
              alt={singleDonation?.category}
              className=" w-full h-[600px] object-cover rounded-lg"
            />
            <div className=" bg-black/70 absolute bottom-0 left-0 w-full h-[100px] flex items-center  rounded-lg">
              <div className=" pl-10">
                <Button
                  className=" text-lg font-semibold px-5"
                  color="red"
                  appearance="primary"
                  onClick={() => setOpenModal(true)}
                >
                  Donation
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-14 ">
            <h3 className="text-4xl font-bold pb-6 ">
              {singleDonation?.title}
            </h3>
            <p className=" font-normal text-base leading-8">
              {singleDonation?.description}
            </p>
          </div>
        </div>
      </CustomContainer>
      {openModal && (
        <CustomModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          singleDonation={singleDonation}
        />
      )}
    </div>
  );
};

export default DonationDetails;
