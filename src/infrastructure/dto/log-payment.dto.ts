import { IsString, IsNotEmpty, IsNumber, IsPositive, IsOptional } from 'class-validator';

export class LogPaymentDto {
    @IsString()
    @IsNotEmpty()
    invoiceId: string;

    @IsNumber()
    @IsPositive()
    amount: number;

    @IsOptional()
    @IsString()
    referenceNumber?: string;
}
