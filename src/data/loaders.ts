import { flattenAttributes, getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  try {
    const response = await fetch(url, { cache: 'no-store' });
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getWorks() {
  const url = baseUrl + "/api/works?populate=*";

  return await fetchData(url);
}
