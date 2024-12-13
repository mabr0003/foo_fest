"use client";
import { useState, useEffect } from "react";
import TicketSelector from "../components/TicketSelector";
import CampingSelector from "../components/CampingSelector";
import GuestInfo from "../components/GuestInfo";
import Payment from "../components/Payment";
import { reserveSpot, fullfillReservation } from "@/lib/api"; // Import fullfillReservation
import useTicketStore from "../state/store";

export default function Tickets() {
  const [currentStep, setCurrentStep] = useState(1);
  const [timer, setTimer] = useState(null);
  const [timerStarted, setTimerStarted] = useState(false);
  const [reservationId, setReservationId] = useState(null); // Store reservation ID

  const { selectedSpot, vipTickets, regularTickets } = useTicketStore();
  const totalTickets = vipTickets + regularTickets;

  useEffect(() => {
    let interval;
    if (timerStarted && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer, timerStarted]);

  const handleNextClick = async () => {
    if (currentStep === 2) {
      if (!selectedSpot) {
        alert("Please select a camping spot before proceeding.");
        return;
      }

      try {
        const result = await reserveSpot(selectedSpot.area, totalTickets);

        console.log("Reservation Result:", result);

        if (result.message) {
          setReservationId(result.id); // Store the reservation ID
          setTimer(300); // Set the 5-minute timer
          setTimerStarted(true);
          setCurrentStep((prevStep) => prevStep + 1); // Move to the next step (step 3)
        } else {
          alert("Reservation failed. Please try again.");
        }
      } catch (error) {
        console.error("Failed to reserve spot:", error);
        alert("An error occurred. Please try again.");
      }
    } else if (currentStep === 4) {
      try {
        if (reservationId) {
          const result = await fullfillReservation(reservationId);
          console.log("Fulfilled Reservation:", result);
          setCurrentStep((prevStep) => prevStep + 1);
        } else {
          alert("No reservation ID found. Please try again.");
        }
      } catch (error) {
        console.error("Failed to fulfill reservation:", error);
        alert("An error occurred while fulfilling the reservation.");
      }
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBackClick = () => {
    setCurrentStep((prevStep) => Math.max(1, prevStep - 1));
  };

  return (
    <div>
      <main>
        {currentStep === 1 && (
          <section>
            <TicketSelector />
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleNextClick}>
              Next
            </button>
          </section>
        )}

        {currentStep === 2 && (
          <section>
            <CampingSelector />
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleNextClick}>
              Next
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={handleBackClick}>
              Back
            </button>
          </section>
        )}

        {currentStep === 3 && (
          <section>
            <GuestInfo />
            <div className="mt-4">
              {timer > 0 ? (
                <p>
                  Time remaining: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
                </p>
              ) : (
                <p>Time's up! Please finish your reservation.</p>
              )}
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleNextClick}>
              Next
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={handleBackClick}>
              Back
            </button>
          </section>
        )}

        {currentStep === 4 && (
          <section>
            <Payment />
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleNextClick}>
              Finish
            </button>
          </section>
        )}
      </main>
    </div>
  );
}
