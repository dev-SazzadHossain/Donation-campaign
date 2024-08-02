import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Modal, Button, ButtonToolbar, Placeholder, Input } from "rsuite";
import { clothing, education, food, health } from "../../utils/AllImages";
const CustomModal = ({ openModal, setOpenModal, singleDonation = {} }) => {
  const handleClose = () => setOpen(false);
  const [backdrop, setBackdrop] = React.useState("static");
  const [donationSave, setDonationSave] = useState([]);

  let [users, setUsers] = useState({
    ...singleDonation,
    name: "",
    email: "",
  });

  const handleSubmit = () => {
    const find = donationSave?.find((donation) => donation?.id === users?.id);
    if (!find) {
      const updatedDonations = [...donationSave, users];
      setDonationSave(updatedDonations);
      localStorage.setItem("donation", JSON.stringify(updatedDonations));
      toast.success(`Added Donation ${users?.donationName || users?.id}`);
    } else {
      toast.error(
        `All Ready Donation This category ${
          users?.donationName || users?.category
        }`
      );
    }
  };

  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem("donation")) || [];
    setDonationSave(storedDonations);
  }, []);
  return (
    <div>
      {/* <div
        className={` justify-center items-center h-screen w-full absolute left-0 top-0 bg-red-500/90  ${
          open ? "opacity-100 block z-50" : "opacity-0 hidden z-0"
        }`}
      > */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        backdrop={backdrop}
        content="center"
        size="md"
        className=""
      >
        <Modal.Header closeButton={false}>
          <Modal.Title>Donation Checkout</Modal.Title>
          <div className="pt-3">
            <img
              src={
                singleDonation?.url || singleDonation.category === "health"
                  ? health
                  : singleDonation.category === "clothing"
                  ? clothing
                  : singleDonation.category === "education"
                  ? education
                  : singleDonation.category === "food"
                  ? food
                  : ""
              }
              alt={singleDonation?.category}
              className=" rounded-lg "
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div>
              {" "}
              <Input
                required
                placeholder="Your Full Name"
                name="name"
                value={users?.name}
                onChange={(e) => setUsers((prv) => ({ ...prv, name: e }))}
              />
            </div>
            <div className="py-3">
              {" "}
              <Input
                required
                placeholder="Your Email Address"
                name="email"
                value={users?.email}
                onChange={(e) => setUsers((prv) => ({ ...prv, email: e }))}
              />
            </div>
            <div>
              {" "}
              <Input value={users?.title} readOnly />
            </div>
            <div className="py-3">
              {" "}
              <Input value={users?.category} readOnly />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setOpenModal(false);
              handleSubmit();
            }}
            appearance="primary"
            type="submit"
          >
            Submit
          </Button>
          <Button onClick={() => setOpenModal(false)} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {/* </div> */}
    </div>
  );
};

export default CustomModal;
