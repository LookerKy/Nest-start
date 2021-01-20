<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

---

## Nestjs

Nest js는 기본적으로 express위에서 돌아가는 frame work이며, enterprise에 특화되며 typescript를 이용한 framework입니다.

Nest js에서 festify를 사용하기 위해선 정해진 방식 이용해 접근하는게 중요합니다. 그렇지 않으면 성능저하나 충돌이 일어날 가능성이 높습니다.(추후 따로 빼서 정리)

Nestjs는 반드시 하나만 존재해야하는 **`Main`** 을 가지고 있고, `Module`, `Controller`, `Service`로 기본 구성이 되어있습니다.  

### install & Create Project

**[install]**
```shell
$ npm -g install @nestjs/cli
```

**[Create Project]**
```shell
$ nest new [projectName]
```

### Module  

Module은 **`@Module()`** 데코레이터로 표기하며, Nest가 애플리케이션 구조를 구성하는데 사용하는 메타 데이터를 제공합니다. 모든 nest application은 `하나 이상의 Module`을 갖습니다. 모듈의 종류는 다음과 같습니다.

- Root Module  

- Feature Module  

- Share Module

- Global Module

- Dynamic Module

Module은 기능별로 분리하는 것이 좋고, Root module은 전체 Module을 응집하는 최상위 Module이라고 할 수 있다.

### Pipe

Pipe는 쉽게 설명하면 express의 middleware와 비슷한 동작을 한다. 기본적인 파이프의 종류는 다음과 같다.

- ValidationPipe  

- ParseIntPipe

- ParseBoolPipe

- ParseArrayPipe

- ParseUUIDPipe

- DefaultValuePipe

이 중 ValidatePipe는 request에 관련된 유효성을 검사해주는 파이프이다 .

```javascript 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
```
- whitelist : decorator(@)가 없는 속성이 들어오면 해당 속성은 제거하고 받아들입니다.(ex DTO @IsString)

- forbidNonWhitelisted : DTO에 명시해 둔 외의 인자가 요청 시 차단하는 역할을 해준다.

- transform : api의 url을 통해 들어오는 모든 인자들은 기본적으로 모두 string type이다. 해당 option을 사용 시 parameter에 명시해 둔 Type으로 변경해준다.  


##### [transform EX]

```javascript
@Get('/:id')
  getOne(@Param('id') movieId: number) {
    console.log(typeof movieId);
    return this.moviesService.getOne(movieId);
  }
```

##### [result]
```shell
number
```

### mapped-types
mapped-types는 DTO를 transform해주는 유용한 라이브러리이다.
여기서 **`DTO`** 란 `Data Transfer Object`의 약자로 Typescript에서는 데이터가 네트워크를 통해 전송함에 있어 타이핑을 체크하기 위한 스키마를 정의하는 개체이다.
예를 들면 CRUD 중 Create와 Update시 두 DTO가 아래와 같이 거의 동일한 경우가 있다.
```javascript
export class CreateMovieDTO {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}

export class UpdateMovieDto {
  @IsString()
  readonly title?: string;

  @IsNumber()
  readonly year?: number;

  @IsString({ each: true })
  readonly genre?: string[];
}
```
이와 같은경우 유사한 코드가 반복되는 현상이 발생한다. 이와 같은경우 mapped-types를 사용하면 더욱 간결한 코드를 짤 수 있다.

**[mapped-types install]**  

```shell
npm i @nestjs/mapped-types
```
**[mapped-types 적용 후]**

```javascript
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
```
mapped-types의 **`partialType`** 은 상속 DTO의 개체들을 선택적(Optional)으로 만드는 기능을 한다.

### Unit Test
 - Unit Test: 소프트웨어를 이루고 있는 가장 작은 모듈에 대한 테스트

 - 클래스, 함수, 단위로 테스트

 - 각 테스트는 독립적인 목표와 상태를 갖고있어야 하며 각각의 테스트의 결과는 다른 테스트에 영향을 미치지 말아야 함

 - jest : javascript, node, typescript등의 테스트 도구 

```javascript
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be 4', () => {
    expect(2 + 2).toEqual(4);
  });
});
```
- describe : 테스트 정의

- beforEach : 각 테스트 케이스가 실행되기 전 수행될 내용

- it('Test Name', callback) : 단위 테스트 명 정의 및 테스트 구현 콜백

- expect : 테스트 대상 function or class 

### e2e Testing (End 2 End)