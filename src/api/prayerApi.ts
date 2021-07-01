import httpClient from "./server";

export const fetchAllPrayers = async () => {
  return await httpClient.get("prayers");
};

export const fetchPrayerById = async (id: number) => {
  return await httpClient.get(`prayers/${id}`);
};

export const deletePrayer = async (id: number) => {
  return await httpClient.delete(`prayers/${id}`);
};
