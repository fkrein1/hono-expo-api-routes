import { client } from '../server/client';

export const AuthorsServices = {
  async getClients() {
    const res = await client.api.authors.$get();
    if (!res.ok) {
      throw new Error('server error');
    }
    const data = await res.json();
    return data;
  },

  async getOneClient(id: string) {
    const res = await client.api.authors[':id'].$get({ param: { id } });
    if (!res.ok) {
      throw new Error('server error');
    }
    const data = await res.json();
    return data;
  },
};
