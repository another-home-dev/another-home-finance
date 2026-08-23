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
const typeorm_1 = require("@nestjs/typeorm");
const finance_controller_1 = require("./infrastructure/controllers/finance.controller");
const get_invoices_usecase_1 = require("./application/use-cases/get-invoices.usecase");
const create_invoice_usecase_1 = require("./application/use-cases/create-invoice.usecase");
const log_payment_usecase_1 = require("./application/use-cases/log-payment.usecase");
const invoice_repository_interface_1 = require("./domain/ports/invoice.repository.interface");
const invoice_repository_1 = require("./infrastructure/database/repositories/invoice.repository");
const payment_repository_interface_1 = require("./domain/ports/payment.repository.interface");
const payment_repository_1 = require("./infrastructure/database/repositories/payment.repository");
const invoice_orm_entity_1 = require("./infrastructure/database/entities/invoice.orm-entity");
const payment_orm_entity_1 = require("./infrastructure/database/entities/payment.orm-entity");
let FinanceModule = class FinanceModule {
};
exports.FinanceModule = FinanceModule;
exports.FinanceModule = FinanceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([invoice_orm_entity_1.InvoiceOrmEntity, payment_orm_entity_1.PaymentOrmEntity])],
        controllers: [finance_controller_1.FinanceController],
        providers: [
            get_invoices_usecase_1.GetInvoicesUseCase,
            create_invoice_usecase_1.CreateInvoiceUseCase,
            log_payment_usecase_1.LogPaymentUseCase,
            {
                provide: invoice_repository_interface_1.INVOICE_REPOSITORY,
                useClass: invoice_repository_1.InvoiceRepository,
            },
            {
                provide: payment_repository_interface_1.PAYMENT_REPOSITORY,
                useClass: payment_repository_1.PaymentRepository,
            },
        ],
        exports: [get_invoices_usecase_1.GetInvoicesUseCase, log_payment_usecase_1.LogPaymentUseCase],
    })
], FinanceModule);
//# sourceMappingURL=finance.module.js.map