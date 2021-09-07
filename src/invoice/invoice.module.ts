import { Module ,forwardRef } from '@nestjs/common';
import { InvoiceService } from './service/invoice.service';
import { InvoiceController } from './controller/invoice.controller';
import { InvoiceEntity } from './model/invoice.entity';
import { CustomerEntity } from 'src/customer/model/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from 'src/customer/customer.module';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceEntity]), forwardRef(() => CustomerModule)],
  providers: [InvoiceService, InvoiceController],
  exports: [InvoiceService]
})
export class InvoiceModule {}
