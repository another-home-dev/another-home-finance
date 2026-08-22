"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(invoiceId, amount, status, studentId) {
        this.invoiceId = invoiceId;
        this.amount = amount;
        this.status = status;
        this.studentId = studentId;
    }
    pay() {
        this.status = 'Paid';
    }
}
exports.Invoice = Invoice;
//# sourceMappingURL=Invoice.js.map