import { c } from '.';
import { createPriceListDto, createPriceListResponseDto } from '../schemas/create-price-list.dto';

export const priceListRouter = c.router({
  createPost: {
    method: 'POST',
    path: '/price_lists',
    responses: {
      201: createPriceListResponseDto,
    },
    body: createPriceListDto,
    summary: 'Create a price list',
  },
});
