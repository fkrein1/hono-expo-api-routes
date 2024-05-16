import { routes } from './app';

const { hc } = require('hono/dist/client') as typeof import('hono/client');

export type AppType = typeof routes;

export const client = hc<AppType>('http://localhost:8081');
