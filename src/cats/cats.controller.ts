import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  getHello(): string {
    return 'gdfdfdf';
  }
  @Get('cat')
  // eslint-disable-next-line @typescript-eslint/ban-types
  findCat(): object {
    return {
      id: 1,
      name: 'user',
    };
  }
}

