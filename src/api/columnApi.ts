import httpClient from "./server";

export const fetchAllColumns = async () => {
  return await httpClient.get("columns");
};

export const fetchColumnById = async (id: number) => {
  return await httpClient.get(`columns/${id}`);
};

interface IColumn {
  title: string;
  description: string;
}
export const createColumn = async (data: IColumn) => {
  return await httpClient.post("columns", data);
};

export const updateColumn = async (data: IColumn, id: number) => {
  return await httpClient.put(`columns/${id}`, data);
};

export const deleteColumn = async (id: number) => {
  return await httpClient.delete(`columns/${id}`);
};

interface IPrayer {
  title: string;
  description: string;
}
export const createPrayerForColumn = async (data: IPrayer, id: number) => {
  return await httpClient.post(`columns/${id}/prayers`, {
    ...data,
    checked: true,
  });
};
