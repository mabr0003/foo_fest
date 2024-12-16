"use client";
import { useState } from "react";
import useTicketStore from "../state/store";
import { sendData } from "@/lib/actions";

const GuestInfo = ({ handleNextClick, handleBackClick }) => {
  const { vipTickets, regularTickets } = useTicketStore();
  const totalGuests = vipTickets + regularTickets;

  const [guestInfo, setGuestInfo] = useState(Array(totalGuests).fill({ firstname: "", lastname: "", email: "" }));

  const handleChange = (index, field, value) => {
    const updatedGuestInfo = [...guestInfo];
    updatedGuestInfo[index] = { ...updatedGuestInfo[index], [field]: value };
    setGuestInfo(updatedGuestInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendData(guestInfo);
    handleNextClick();
  };

  return (
    <div>
      <h1 className="text-center">Udfyld Information</h1>
      <form onSubmit={handleSubmit}>
        {guestInfo.map((guest, index) => (
          <div key={index} className="mb-4 border p-4 rounded">
            <h3>Guest {index + 1}</h3>
            <div className="flex flex-col gap-2">
              <label>
                First Name:
                <input type="text" value={guest.firstname} onChange={(e) => handleChange(index, "firstname", e.target.value)} className="border p-2 rounded w-full" />
              </label>
              <label>
                Last Name:
                <input type="text" value={guest.lastname} onChange={(e) => handleChange(index, "lastname", e.target.value)} className="border p-2 rounded w-full" />
              </label>
              <label>
                Email:
                <input type="email" value={guest.email} onChange={(e) => handleChange(index, "email", e.target.value)} className="border p-2 rounded w-full" />
              </label>
            </div>
          </div>
        ))}
        <div>
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Next
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={handleBackClick}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default GuestInfo;
