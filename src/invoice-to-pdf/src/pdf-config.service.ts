import { join } from 'path';

import { Injectable } from '@nestjs/common';

import { PDFOptionsFactory, PDFModuleOptions } from '../pdf.interfaces';

@Injectable()
export class PDFConfigService implements PDFOptionsFactory {
    createPdfOptions(): PDFModuleOptions {
        return {
            view: {
                root: join(__dirname, '../assets/pdf'),
                engine: 'pug',
            },
        };
    }
}