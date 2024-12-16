"use client";
import useTicketStore from "../state/store";

const TicketSelector = ({ handleNextClick }) => {
  const { vipTickets, regularTickets, increaseTicket, decreaseTicket } = useTicketStore();

  return (
    <div>
      <h1 className="text-center">Vælg Billetter</h1>
      <div className="bayon flex gap-10 bg-accent max-w-56 px-5 py-3 rounded-lg justify-between">
        <h3>VIP 1299,-</h3>
        <div className="flex gap-2">
          <button onClick={() => decreaseTicket("VIP")}>-</button>
          <span>{vipTickets}</span>
          <button onClick={() => increaseTicket("VIP")}>+</button>
        </div>
      </div>
      <div className="bayon flex gap-10 bg-accent max-w-56 px-5 py-3 rounded-lg justify-between">
        <h3>Regular 799,-</h3>
        <div className="flex gap-2">
          <button onClick={() => decreaseTicket("Regular")}>-</button>
          <span>{regularTickets}</span>
          <button onClick={() => increaseTicket("Regular")}>+</button>
        </div>
      </div>
      <div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TicketSelector;
