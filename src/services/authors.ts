import { client } from '../server/client';
import { GetOneClientReq } from './types/authors';

export const AuthorsServices = {
  async getClients() {
    const res = await client.api.authors.$get();
    if (!res.ok) {
      throw new Error('server error');
    }
    const data = await res.json();
    return data;
  },

  async getOneClient(req: GetOneClientReq) {
    const res = await client.api.authors[':id'].$get({ param: { id: req.param.id } });
    if (!res.ok) {
      throw new Error('server error');
    }
    const data = await res.json();
    return data;
  },
};
