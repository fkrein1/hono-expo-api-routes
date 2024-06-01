import { InferRequestType } from 'hono';

import { client } from '../../server/client';

const getOneClient = client.api.authors[':id'].$get;

export type GetOneClientReq = InferRequestType<typeof getOneClient>;
