import { Module, forwardRef} from '@nestjs/common';
import { CustomerController } from './controller/customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './model/customer.entity';
import { CustomerService } from './service/customer.service';
import { InvoiceModule } from 'src/invoice/invoice.module';


@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity]), forwardRef(() => InvoiceModule)],
  providers: [CustomerService, CustomerController],
  exports: [CustomerService]
})
export class CustomerModule {}
