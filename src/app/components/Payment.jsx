import Receipt from "./Receipt";
const Payment = ({ handleNextClick }) => {
  return (
    <div>
      <form>
        <label>
          Kortholder:
          <input type="text" className="border p-2 rounded w-full" />
        </label>
        <label>
          Kortnummer:
          <input type="text" className="border p-2 rounded w-full" />
        </label>
        <label>
          Dato
          <input type="email" className="border p-2 rounded w-full" />
        </label>
        <label>
          CVC
          <input type="email" className="border p-2 rounded w-full" />
        </label>
      </form>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleNextClick}>
        Finish
      </button>
      <div>
        <Receipt />
      </div>
    </div>
  );
};

export default Payment;
