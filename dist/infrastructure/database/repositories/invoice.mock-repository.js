"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceMockRepository = void 0;
const common_1 = require("@nestjs/common");
const Invoice_1 = require("../../../domain/entities/Invoice");
let InvoiceMockRepository = class InvoiceMockRepository {
    constructor() {
        this.invoices = [
            new Invoice_1.Invoice('inv-1', 5000, 'Pending', 'student-123'),
            new Invoice_1.Invoice('inv-2', 7500, 'Pending', 'student-456'),
        ];
    }
    async findAll() {
        return this.invoices;
    }
    async findById(id) {
        const invoice = this.invoices.find(inv => inv.invoiceId === id);
        return invoice || null;
    }
    async save(invoice) {
        const index = this.invoices.findIndex(inv => inv.invoiceId === invoice.invoiceId);
        if (index >= 0) {
            this.invoices[index] = invoice;
        }
        else {
            this.invoices.push(invoice);
        }
        return invoice;
    }
};
exports.InvoiceMockRepository = InvoiceMockRepository;
exports.InvoiceMockRepository = InvoiceMockRepository = __decorate([
    (0, common_1.Injectable)()
], InvoiceMockRepository);
//# sourceMappingURL=invoice.mock-repository.js.map