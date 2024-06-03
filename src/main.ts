import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { useContainer } from 'class-validator'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  })
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
      'Esta é a documentação de um teste proposto pela RED VENTURES, de um sistema de restaurante que tem como objetivo principal buscar id de proteinas e caldos para inserir em um pedido'
    )
    .setVersion('1.0')
    .addTag('Users')
    .addTag('Auth')
    .addTag('Proteins')
    .addTag('Broths')
    .addTag('Orders')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .addApiKey()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/swagger', app, document, {
    customSiteTitle: 'Ramen-GO',
    customfavIcon: 'https://avatars.githubusercontent.com/u/6936373?s=200&v=4',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js'
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css'
    ]
  })

  useContainer(app.select(AppModule), { fallbackOnErrors: true })

  await app.listen(port)

  console.log(`Server is running 🚀`)
}
bootstrap()
