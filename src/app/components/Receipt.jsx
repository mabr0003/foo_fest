import useTicketStore from "../state/store";
const Recepit = () => {
  const { vipTickets, regularTickets, RegularPrice, VipPrice, tentPrices, reservation, selectedSpot, twoPersonTentCount, threePersonTentCount, goGreen } = useTicketStore();
  const goGreenPrice = 249;
  const twoPersonTentTotal = tentPrices["2-person"] * twoPersonTentCount;
  const threePersonTentTotal = tentPrices["3-person"] * threePersonTentCount;
  const totalSum = RegularPrice + VipPrice + goGreenPrice + reservation + twoPersonTentTotal + threePersonTentTotal;
  return (
    <div>
      <div className="flex flex-col">
        <h3 className="text-red-500">Biletter</h3>
        <div className="flex">
          <span>{regularTickets === 0 ? "" : `Regular x ${regularTickets}`}</span>
          <span>{regularTickets === 0 ? "" : `${RegularPrice},-`}</span>
        </div>
        <div>
          <span>{vipTickets === 0 ? "" : `VIP x ${vipTickets}`}</span>
          <span>{vipTickets === 0 ? "" : `${VipPrice},-`}</span>
        </div>
      </div>
      <div>
        <h3 className="text-red-500">Camp</h3>
        <div>{selectedSpot.area}</div>
      </div>
      {twoPersonTentCount > 0 || threePersonTentCount > 0 ? (
        <div>
          <h3 className="text-red-500">Telt</h3>
          {twoPersonTentCount > 0 && (
            <div className="flex gap-10">
              <span>{`2-person x ${twoPersonTentCount}`}</span>
              <span>{`${twoPersonTentTotal},-`}</span>
            </div>
          )}
          {threePersonTentCount > 0 && (
            <div className="flex gap-10">
              <span>{`3-person x ${threePersonTentCount}`}</span>
              <span>{`${threePersonTentTotal},-`}</span>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
      <div>
        {goGreen ? (
          <div>
            <span>Go Green</span>
            <span>{`${goGreenPrice},-`}</span>
          </div>
        ) : (
          ""
        )}

        <div>
          <span>Reservationsgebyr</span>
          <span>{`${reservation},-`}</span>
        </div>
      </div>

      <div>
        <span>Total</span>
        <span>{`${totalSum},-`}</span>
      </div>
    </div>
  );
};

export default Recepit;
