import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

const options = { cors: true }

async function bootstrap() {
  const app = await NestFactory.create(AppModule, options)
  app.enableCors()
  const port = process.env.PORT || 8000

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  )

  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - RamenGO')
    .setDescription(
      'Este é um teste proposto pela RED VENTURES, de um sistema de restaurante que tem como objetivo principal buscar id de proteinas e caldos para inserir em um pedido'
    )
    .setVersion('1.0')
    .addTag('Users')
    .addTag('Auth')
    .addTag('Proteins')
    .addTag('Broths')
    .addTag('Orders')
    .addBearerAuth()
    .addApiKey()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document)

  await app.listen(port)

  console.log(`Server is running 🚀`)
}
bootstrap()
