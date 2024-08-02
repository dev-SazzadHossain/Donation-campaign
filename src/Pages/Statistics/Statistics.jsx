import React, { useEffect, useState } from "react";
import CustomContainer from "../../ShearComponents/CustomContainer/CustomContainer";
import ReactApexChart from "react-apexcharts";

const Statistics = () => {
  const [donation, setDonation] = useState([]);

  useEffect(() => {
    setDonation(JSON.parse(localStorage.getItem("donation")) || []);
  }, []);
  const state = {
    series: [12, donation.length],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["All Data", "Donation"],
      colors: ["#0000FF", "#FF0000"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="pt-32">
      <CustomContainer>
        {" "}
        <div className=" w-full flex justify-center items-center">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="pie"
            width={380}
          />
        </div>
      </CustomContainer>
    </div>
  );
};

export default Statistics;
