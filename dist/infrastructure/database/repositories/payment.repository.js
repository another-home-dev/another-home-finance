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
exports.PaymentRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const payment_orm_entity_1 = require("../entities/payment.orm-entity");
const payment_mapper_1 = require("../mappers/payment.mapper");
let PaymentRepository = class PaymentRepository {
    constructor(typeOrmRepository) {
        this.typeOrmRepository = typeOrmRepository;
    }
    async save(payment) {
        const ormEntity = payment_mapper_1.PaymentMapper.toPersistence(payment);
        const savedEntity = await this.typeOrmRepository.save(ormEntity);
        return payment_mapper_1.PaymentMapper.toDomain(savedEntity);
    }
};
exports.PaymentRepository = PaymentRepository;
exports.PaymentRepository = PaymentRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_orm_entity_1.PaymentOrmEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaymentRepository);
//# sourceMappingURL=payment.repository.js.map