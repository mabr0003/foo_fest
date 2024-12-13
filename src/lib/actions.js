"use server";
import { postGuests } from "@/lib/api";

export async function sendData(guestInfo) {
  const data = guestInfo.map((guest) => ({
    firstname: guest.firstname,
    lastname: guest.lastname,
    email: guest.email,
  }));

  await postGuests(data);
}
