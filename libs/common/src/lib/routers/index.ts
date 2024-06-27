import { initContract } from '@ts-rest/core';
import { priceListRouter } from './price-list';

export const c: ReturnType<typeof initContract> = initContract();

export const appRouter = c.router({
  priceLists: priceListRouter,
});
