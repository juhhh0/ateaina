import { flattenAttributes, getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getWorks() {
  const url = baseUrl + "/api/works?populate=*";

  return await fetchData(url);
}

export async function getHome() {
  const url = baseUrl + "/api/home-page?populate=*";
  const data = await fetchData(url);
  const expertisesUrl = baseUrl + "/api/expertises?populate=*";
  const expertises = await fetchData(expertisesUrl);

  return { data: data, expertises: expertises };
}

export async function getFooter() {
  const url = baseUrl + "/api/footer?populate=*";
  const data = await fetchData(url);

  return data;
}

export async function getNavbar() {
  const url = baseUrl + "/api/navbar?populate=*";
  const data = await fetchData(url);

  return data;
}

