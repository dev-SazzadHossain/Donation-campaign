import React, { useEffect, useState } from "react";
import CustomContainer from "../../ShearComponents/CustomContainer/CustomContainer";
import Loading from "../../utils/Loading";
import Donation from "./Donation";

const AllDonation = ({ searchValue }) => {
  const [donationData, setDonationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredDonations, setFilteredDonations] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch("donation.json");
        const data = await response.json();
        if (data?.length > 0) {
          setDonationData(data);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);
  useEffect(() => {
    if (searchValue) {
      const filtered = donationData.filter((donation) =>
        donation.category.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredDonations(filtered);
    } else {
      setFilteredDonations(donationData);
    }
  }, [searchValue, donationData]);

  let delay = 0;

  return (
    <section>
      <CustomContainer>
        {loading ? (
          <Loading />
        ) : filteredDonations?.length > 0 ? (
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-10 gap-5 rounded-md">
            {filteredDonations?.map((donation) => {
              delay = delay + 0.2;

              return (
                <Donation
                  key={donation?.id}
                  donation={donation}
                  delay={delay}
                />
              );
            })}
          </div>
        ) : (
          <p className="pt-3 text-red-500 text-center">No donations found</p>
        )}
      </CustomContainer>
    </section>
  );
};

export default AllDonation;
