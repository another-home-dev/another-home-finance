import { IsString, IsNotEmpty, IsNumber, IsPositive, IsDateString } from 'class-validator';

export class CreateInvoiceDto {
    @IsString()
    @IsNotEmpty()
    studentId: string;

    @IsNumber()
    @IsPositive()
    amount: number;

    @IsDateString()
    dueDate: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}
