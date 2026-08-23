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
exports.GetInvoicesUseCase = void 0;
const common_1 = require("@nestjs/common");
const invoice_repository_interface_1 = require("../../domain/ports/invoice.repository.interface");
let GetInvoicesUseCase = class GetInvoicesUseCase {
    constructor(invoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }
    async execute(studentId) {
        const invoices = studentId
            ? await this.invoiceRepository.findByStudentId(studentId)
            : await this.invoiceRepository.findAll();
        return invoices.map((invoice) => ({
            invoiceId: invoice.invoiceId,
            amount: invoice.amount,
            status: invoice.effectiveStatus,
            studentId: invoice.studentId,
            dueDate: invoice.dueDate,
            description: invoice.description,
            createdAt: invoice.createdAt,
            paidAt: invoice.paidAt,
        }));
    }
};
exports.GetInvoicesUseCase = GetInvoicesUseCase;
exports.GetInvoicesUseCase = GetInvoicesUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(invoice_repository_interface_1.INVOICE_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], GetInvoicesUseCase);
//# sourceMappingURL=get-invoices.usecase.js.map