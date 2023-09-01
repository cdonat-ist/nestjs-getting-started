## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation || Setup project

Install global NestJS CLI  
```bash
npm install -g @nestjs/cli
```

Init Project
```bash
nest new project-name
```

Open project
```bash
cd project-name
```

Install documentation generator
```bash
npm i -D @compodoc/compodoc
npm i @nestjs/serve-static
```

Install Swagger generator
```bash
npm i @nestjs/swagger
```

Config Swagger
```typescript
// src/main.ts
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
```

Generate documentation with Compodoc
```bash
npx compodoc -p tsconfig.json -d docs
```

Run application
```bash
npm run start:dev
```

Access Compodoc documentation
> [localhost:3000/swagger/](http://localhost:3000/swagger/)


Run application
```bash
npm run start:dev
```
Access Compodoc documentation
> [localhost:8080/](http://localhost:8080/)


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
