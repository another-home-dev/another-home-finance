"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const consul_registration_1 = require("./consul-registration");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Finance Service API')
        .setDescription('Invoicing and payment tracking.')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4003;
    await app.listen(port);
    (0, consul_registration_1.registerWithConsul)('finance', port);
    console.log(`Finance service is listening on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map