"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceModule = void 0;
const common_1 = require("@nestjs/common");
const finance_controller_1 = require("./infrastructure/controllers/finance.controller");
const get_invoices_usecase_1 = require("./application/use-cases/get-invoices.usecase");
const log_payment_usecase_1 = require("./application/use-cases/log-payment.usecase");
const invoice_repository_interface_1 = require("./domain/ports/invoice.repository.interface");
const invoice_mock_repository_1 = require("./infrastructure/database/repositories/invoice.mock-repository");
const payment_repository_interface_1 = require("./domain/ports/payment.repository.interface");
const payment_mock_repository_1 = require("./infrastructure/database/repositories/payment.mock-repository");
let FinanceModule = class FinanceModule {
};
exports.FinanceModule = FinanceModule;
exports.FinanceModule = FinanceModule = __decorate([
    (0, common_1.Module)({
        controllers: [finance_controller_1.FinanceController],
        providers: [
            get_invoices_usecase_1.GetInvoicesUseCase,
            log_payment_usecase_1.LogPaymentUseCase,
            {
                provide: invoice_repository_interface_1.INVOICE_REPOSITORY,
                useClass: invoice_mock_repository_1.InvoiceMockRepository,
            },
            {
                provide: payment_repository_interface_1.PAYMENT_REPOSITORY,
                useClass: payment_mock_repository_1.PaymentMockRepository,
            },
        ],
        exports: [get_invoices_usecase_1.GetInvoicesUseCase, log_payment_usecase_1.LogPaymentUseCase],
    })
], FinanceModule);
//# sourceMappingURL=finance.module.js.map