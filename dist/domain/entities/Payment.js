"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(paymentId, invoiceId, amount, paymentDate, status, referenceNumber = null) {
        this.paymentId = paymentId;
        this.invoiceId = invoiceId;
        this.amount = amount;
        this.paymentDate = paymentDate;
        this.status = status;
        this.referenceNumber = referenceNumber;
    }
}
exports.Payment = Payment;
//# sourceMappingURL=Payment.js.map