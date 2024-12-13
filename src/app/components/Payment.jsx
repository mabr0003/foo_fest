const Payment = () => {
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
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Payment;
