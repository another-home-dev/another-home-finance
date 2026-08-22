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
exports.LogPaymentUseCase = void 0;
const common_1 = require("@nestjs/common");
const invoice_repository_interface_1 = require("../../domain/ports/invoice.repository.interface");
const payment_repository_interface_1 = require("../../domain/ports/payment.repository.interface");
const Payment_1 = require("../../domain/entities/Payment");
let LogPaymentUseCase = class LogPaymentUseCase {
    constructor(invoiceRepository, paymentRepository) {
        this.invoiceRepository = invoiceRepository;
        this.paymentRepository = paymentRepository;
    }
    async execute(dto) {
        const invoice = await this.invoiceRepository.findById(dto.invoiceId);
        if (!invoice) {
            throw new common_1.NotFoundException(`Invoice with ID ${dto.invoiceId} not found.`);
        }
        invoice.pay();
        await this.invoiceRepository.save(invoice);
        const newPayment = new Payment_1.Payment('pay-' + Math.floor(Math.random() * 100000), dto.invoiceId, dto.amount, new Date(), 'Success');
        return await this.paymentRepository.save(newPayment);
    }
};
exports.LogPaymentUseCase = LogPaymentUseCase;
exports.LogPaymentUseCase = LogPaymentUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(invoice_repository_interface_1.INVOICE_REPOSITORY)),
    __param(1, (0, common_1.Inject)(payment_repository_interface_1.PAYMENT_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object])
], LogPaymentUseCase);
//# sourceMappingURL=log-payment.usecase.js.map