"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(invoiceId, amount, status, studentId, dueDate, description, createdAt = new Date(), paidAt = null) {
        this.invoiceId = invoiceId;
        this.amount = amount;
        this.status = status;
        this.studentId = studentId;
        this.dueDate = dueDate;
        this.description = description;
        this.createdAt = createdAt;
        this.paidAt = paidAt;
    }
    pay() {
        this.status = 'Paid';
        this.paidAt = new Date();
    }
    get effectiveStatus() {
        if (this.status === 'Pending' && this.dueDate < new Date()) {
            return 'Overdue';
        }
        return this.status;
    }
}
exports.Invoice = Invoice;
//# sourceMappingURL=Invoice.js.map