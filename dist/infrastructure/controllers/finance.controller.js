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
const common_1 = require("@nestjs/common");
const get_invoices_usecase_1 = require("../../application/use-cases/get-invoices.usecase");
const log_payment_usecase_1 = require("../../application/use-cases/log-payment.usecase");
let FinanceController = class FinanceController {
    constructor(getInvoicesUseCase, logPaymentUseCase) {
        this.getInvoicesUseCase = getInvoicesUseCase;
        this.logPaymentUseCase = logPaymentUseCase;
    }
    async getInvoices() {
        const invoices = await this.getInvoicesUseCase.execute();
        return {
            message: 'Pending invoices retrieved successfully.',
            data: invoices,
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
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "getInvoices", null);
__decorate([
    (0, common_1.Post)('payments'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "logPayment", null);
exports.FinanceController = FinanceController = __decorate([
    (0, common_1.Controller)('finance'),
    __metadata("design:paramtypes", [get_invoices_usecase_1.GetInvoicesUseCase,
        log_payment_usecase_1.LogPaymentUseCase])
], FinanceController);
//# sourceMappingURL=finance.controller.js.map