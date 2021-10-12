import * as path from 'path';

import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';

import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        // eslint-disable-next-line no-process-env
        url: process.env.CONNECTION_URL,
        package: 'henkenclub.search.v1',
        protoPath: [path.join(__dirname, 'protobuf/upserter.proto')],
      },
    },
  );
  await app.listen();
}
bootstrap();
