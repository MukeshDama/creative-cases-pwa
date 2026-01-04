const API_BASE_URL = "http://localhost:4000";

export const api = {
  getCases: async () => {
    const response = await fetch(`${API_BASE_URL}/cases`);
    if (!response.ok) throw new Error("Failed to fetch cases");
    return response.json();
  },

  getFilters: async () => {
    const response = await fetch(`${API_BASE_URL}/filters`);
    if (!response.ok) throw new Error("Failed to fetch filters");
    return response.json();
  },

  getClients: async () => {
    const response = await fetch(`${API_BASE_URL}/clients`);
    if (!response.ok) throw new Error("Failed to fetch clients");
    return response.json();
  },
};
