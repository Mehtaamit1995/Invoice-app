import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from '../service/customer.service';
import { CustomerEntity } from '../model/customer.entity';
import { Customer } from '../model/customer.interface';
import { Repository } from 'typeorm';
import { InvoiceService } from '../../invoice/service/invoice.service';

@Controller('customer')
export class CustomerController {

    constructor(private customerService: CustomerService,
        private invoiceService: InvoiceService) { }

    // @Post()
    // createCustomer(customer: Promise<CustomerEntity>{```
    // return this.customerRepository.save(details);    
    // }

    @Post()
    createCustomer(
     name: string,
     email: string,
     phone: number,
     address: string,
  ): Promise<CustomerEntity> {
    return this.customerService.create({ name, email, phone, address })
  }

    // @Get()
    // findAll(): Promise<CustomerEntity>{
    // return this.customerService.findAll();  
    // } 


    // @Get()
    // findOne(id: string): Promise<CustomerEntity> {
    // return this.customerRepository.findOne(id);
    // }
    
    // @Get('/:id')
    // invoices(@Parent() customer) {
    //     const { id } = customer;
    //     console.log(customer);
    //     return this.invoiceService.findByCustomer(id);
    // }

}
