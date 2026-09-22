"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerWithConsul = registerWithConsul;
const consul_1 = __importDefault(require("consul"));
const crypto_1 = require("crypto");
function registerWithConsul(serviceName, port) {
    const consulHost = process.env.CONSUL_HOST;
    if (!consulHost) {
        console.warn(`CONSUL_HOST not set — skipping service registry registration for "${serviceName}".`);
        return;
    }
    const consulPort = Number(process.env.CONSUL_PORT ?? 8500);
    const consul = new consul_1.default({ host: consulHost, port: consulPort });
    const address = process.env.SERVICE_ADDRESS ?? serviceName;
    const serviceId = `${serviceName}-${address}-${port}-${(0, crypto_1.randomUUID)().slice(0, 8)}`;
    consul.agent.service
        .register({
        id: serviceId,
        name: serviceName,
        address,
        port,
        tags: ['nestjs', 'another-home'],
        check: {
            name: `${serviceName} HTTP health check`,
            http: `http://${address}:${port}/health`,
            interval: '10s',
            timeout: '5s',
            deregistercriticalserviceafter: '1m',
        },
    })
        .then(() => console.log(`Registered "${serviceName}" (${serviceId}) with Consul at ${consulHost}:${consulPort}`))
        .catch((err) => console.error(`Failed to register "${serviceName}" with Consul:`, err instanceof Error ? err.message : err));
    const deregister = () => {
        consul.agent.service
            .deregister(serviceId)
            .catch((err) => console.error(`Failed to deregister "${serviceName}" from Consul:`, err instanceof Error ? err.message : err))
            .finally(() => process.exit(0));
    };
    process.on('SIGINT', deregister);
    process.on('SIGTERM', deregister);
}
//# sourceMappingURL=consul-registration.js.map