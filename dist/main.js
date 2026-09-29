"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: true,
        credentials: false,
    });
    app.setGlobalPrefix('api/service-two');
    const config = app.get(config_1.ConfigService);
    const port = Number(config.get('APP_PORT') || '8002');
    await app.listen(port, '0.0.0.0');
    console.log('backend-two listening on port', port);
}
bootstrap();
//# sourceMappingURL=main.js.map