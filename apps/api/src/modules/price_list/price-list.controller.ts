import { Controller } from '@nestjs/common';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
// import { priceListRouter } from '@passo/common/lib/routers/price-list';
@Controller()
export class PriceListController {
  // @TsRestHandler(priceListRouter.createPost)
  getPriceList() {
    // return tsRestHandler(priceListRouter, async ({ params }) => {
    // console.log('test');
    // });
  }
}
