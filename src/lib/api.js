const url = process.env.NEXT_PUBLIC_API_URL;

export async function getBands() {
  const response = await fetch(url + "/bands", {
    method: "GET",
  });

  const data = await response.json();
  return data;
}
