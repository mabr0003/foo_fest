import useTicketStore from "../state/store";
const GoGreen = () => {
  const { goGreen, toggleGoGreen } = useTicketStore();
  return (
    <div>
      <h3>Go Green</h3>
      <button className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${goGreen ? "bg-green-500 border-green-500 text-white" : "bg-gray-200 border-gray-400 text-gray-800"}`} onClick={toggleGoGreen} aria-label="Toggle Go Green">
        {goGreen && "✓"}
      </button>
    </div>
  );
};

export default GoGreen;
