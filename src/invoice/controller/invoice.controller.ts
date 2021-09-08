import { Controller, Get, Post } from '@nestjs/common';
// import { string } from 'yargs';
// import { Observable, of } from 'rxjs';
import { InvoiceService } from '../service/invoice.service';
import { InvoiceEntity } from '../model/invoice.entity';
import { Invoice } from '../model/invoice.interface';
import { Repository } from 'typeorm'
import { CustomerService } from '../../customer/service/customer.service';

@Controller('invoice')
export class InvoiceController {

    constructor(private invoiceService: InvoiceService,
        private customerService: CustomerService,
        private invoiceRepository: Repository<InvoiceEntity>  ) { }


    @Get()
    findAll(): Promise<InvoiceEntity[]> {
    return this.invoiceService.findAll();
    }

    @Get()
    findByCustomer(id: string): Promise<InvoiceEntity[]>{
    return this.invoiceRepository.createQueryBuilder("invoice")
    .where("invoice.customer = :id", { id })
    .getMany();
     }

    @Get()
    findOne(id: string) : Promise <InvoiceEntity>{
    return this.invoiceRepository.findOne(id);    
    }

    @Post()
    create(invoice: Invoice): Promise<InvoiceEntity> {
        const customer = this.customerService.findOne(invoice.customer);
        const subTotal = invoice.items.reduce((acc, curr) => {
          return acc + Number((curr.rate * curr.quantity).toFixed(2))
        }, 0)

    
        const taxAmount = subTotal * Number((invoice.taxRate / 100).toFixed(2));
        const total = subTotal + taxAmount;
        const outstandingBalance = total;
        return this.invoiceRepository.save({
          ...invoice,
          customer,
          subTotal,
          taxAmount,
          total,
          outstandingBalance
        } as any);
    
      }

    
}