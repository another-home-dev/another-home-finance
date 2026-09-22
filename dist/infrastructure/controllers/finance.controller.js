"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const get_invoices_usecase_1 = require("../../application/use-cases/get-invoices.usecase");
const create_invoice_usecase_1 = require("../../application/use-cases/create-invoice.usecase");
const log_payment_usecase_1 = require("../../application/use-cases/log-payment.usecase");
const create_invoice_dto_1 = require("../dto/create-invoice.dto");
const log_payment_dto_1 = require("../dto/log-payment.dto");
let FinanceController = class FinanceController {
    constructor(getInvoicesUseCase, createInvoiceUseCase, logPaymentUseCase) {
        this.getInvoicesUseCase = getInvoicesUseCase;
        this.createInvoiceUseCase = createInvoiceUseCase;
        this.logPaymentUseCase = logPaymentUseCase;
    }
    async getInvoices() {
        const invoices = await this.getInvoicesUseCase.execute();
        return {
            message: 'Pending invoices retrieved successfully.',
            data: invoices,
        };
    }
    async getInvoicesForStudent(studentId) {
        const invoices = await this.getInvoicesUseCase.execute(studentId);
        return {
            message: 'Invoices retrieved successfully.',
            data: invoices,
        };
    }
    async createInvoice(dto) {
        const invoice = await this.createInvoiceUseCase.execute(dto);
        return {
            message: 'Invoice created successfully.',
            data: invoice,
        };
    }
    async logPayment(dto) {
        const payment = await this.logPaymentUseCase.execute(dto);
        return {
            message: 'Payment logged successfully.',
            data: payment,
        };
    }
};
exports.FinanceController = FinanceController;
__decorate([
    (0, common_1.Get)('invoices'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all invoices' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns an array of all invoices.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "getInvoices", null);
__decorate([
    (0, common_1.Get)('invoices/:studentId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all invoices for a specific student' }),
    (0, swagger_1.ApiParam)({ name: 'studentId', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns an array of invoices for the student.' }),
    __param(0, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "getInvoicesForStudent", null);
__decorate([
    (0, common_1.Post)('invoices'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new fee invoice for a student' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Invoice created successfully.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_invoice_dto_1.CreateInvoiceDto]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "createInvoice", null);
__decorate([
    (0, common_1.Post)('payments'),
    (0, swagger_1.ApiOperation)({ summary: 'Log a payment against an invoice' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Payment logged successfully.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [log_payment_dto_1.LogPaymentDto]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "logPayment", null);
exports.FinanceController = FinanceController = __decorate([
    (0, swagger_1.ApiTags)('Finance'),
    (0, common_1.Controller)('finance'),
    __metadata("design:paramtypes", [get_invoices_usecase_1.GetInvoicesUseCase,
        create_invoice_usecase_1.CreateInvoiceUseCase,
        log_payment_usecase_1.LogPaymentUseCase])
], FinanceController);
//# sourceMappingURL=finance.controller.js.map