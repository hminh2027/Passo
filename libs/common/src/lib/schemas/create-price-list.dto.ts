import { z } from 'zod';

export const createPriceListDto = z.object({
  code: z.string(),
  name: z.string(),
});

export const createPriceListResponseDto = z.object({
  code: z.string(),
  name: z.string(),
});
