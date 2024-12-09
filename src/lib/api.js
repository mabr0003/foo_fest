const url = process.env.NEXT_PUBLIC_API_URL;

export async function getBands() {
  const response = await fetch(url + "/bands", {
    method: "GET",
  });

  const data = await response.json();
  return data;
}

export async function getSchedule() {
  const response = await fetch(url + "/schedule", {
    method: "GET",
  });

  const data = await response.json();
  return data;
}

export async function getSingleBand(slug) {
  const response = await fetch(url + "/bands/" + slug, {
    method: "GET",
  });

  const data = await response.json();
  return data;
}
