// index.ts
import { Hono } from 'hono';
import { authors } from './routes/authors';

export const app = new Hono().basePath('/api');

export const routes = app.route('/authors', authors);
