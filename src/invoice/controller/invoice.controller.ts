import { Controller, Get, Post } from '@nestjs/common';
import { string } from 'yargs';
import { Observable, of } from 'rxjs';
import { InvoiceService } from '../service/invoice.service';
import { InvoiceEntity } from '../model/invoice.entity';

@Controller('invoice')
export class InvoiceController {

    constructor(private invoiceService: InvoiceService) { }


    // @Get()
    // findAll(): Promise<InvoiceEntity[]> {
    // return this.invoiceService.findAll();
    // }

    // @Get()
    // findByCustomer(id: string): Promise<InvoiceEntity[]>{
    // return this.invoiceRepository.createQueryBuilder("invoice")
    // .where("invoice.customer = :id", { id })
    // .getMany();
    //  }

    // @Get()
    // findOne(id: string) : Promise <InvoiceEntity>{
    // return this.invoiceRepository.findOne(id);    
    // }

    // @Post()
    // create(invoice: Invoice): Promise<InvoiceEntity> {
    //     const customer = await this.customerService.findOne(invoice.customer);
    //     const subTotal = invoice.items.reduce((acc, curr) => {
    //       return acc + Number((curr.rate * curr.quantity).toFixed(2))
    //     }, 0)

    
    //     const taxAmount = subTotal * Number((invoice.taxRate / 100).toFixed(2));
    //     const total = subTotal + taxAmount;
    //     const outstandingBalance = total;
    //     return this.invoiceRepository.save({
    //       ...invoice,
    //       customer,
    //       subTotal,
    //       taxAmount,
    //       total,
    //       outstandingBalance
    //     } as any);
    
    //   }

    
}