#  Principios SOLID
![1_lJ2ixDxnNFMJXLTgQ-XT0A](https://github.com/josRosario/solid/assets/165838841/97f8b399-373c-4e53-ab59-ab27fb2a6260)


# Data Transfer Object (DTO) – Patrón de diseño

* Una de las problemáticas más comunes cuando desarrollamos aplicaciones, es diseñar la forma en que la información debe viajar desde la capa de servicios a las aplicaciones o capa de presentación, ya que muchas veces por desconocimiento o pereza, utilizamos las clases de entidades para retornar los datos, lo que ocasiona que retornemos más datos de los necesarios o incluso, tengamos que ir en más de una ocasión a la capa de servicios para recuperar los datos requeridos.

![dto](https://github.com/josRosario/solid/assets/165838841/6405ec41-5842-45c8-8542-a42cdbf1f70b)





El patrón DTO tiene como finalidad de crear un objeto plano (POJO) con una serie de atributos que puedan ser enviados o recuperados del servidor en una sola invocación, de tal forma que un DTO puede contener información de múltiples fuentes o tablas y concentrarlas en una única clase simple.



# SOLID es un acrónimo que representa cinco principios de diseño para escribir software limpio, mantenible y extensible:

* `Principio de responsabilidad única`(SRP): cada clase o módulo debe tener una única responsabilidad, lo que significa que solo debe cambiar por un motivo.

  En Express.js, SRP sugiere que cada controlador o controlador de ruta debe tener una única responsabilidad. Así es como puedes estructurar tu código:

```javascript
// Bad Example: Mixing responsibilities
app.post('/register', (req, res) => {
  // Handle user registration logic (validation, database operations, etc.)
  // Handle user authentication logic (generate tokens, sessions, etc.)
});

// Better Example: Separating responsibilities
app.post('/register', UserController.register);
app.post('/login', AuthController.login);

```

En el ejemplo mejorado, hemos separado el registro y la autenticación de usuarios en controladores distintos ( UserControllery AuthController). Cada controlador ahora tiene una única responsabilidad, lo que hace que el código sea más fácil de mantener.

* `Principio abierto-cerrado` (OCP): las entidades de software deben estar abiertas a la extensión pero cerradas a la modificación, lo que permite agregar nuevas funciones sin alterar el código existente.

  Para seguir el principio abierto-cerrado, diseñe su aplicación Express.js de una manera que permita una fácil extensión sin modificar el código existente. El middleware y los componentes reutilizables son tus amigos:

```javascript
// Bad Example: Adding new functionality directly to the route handler
app.post('/register', UserController.register);
app.post('/login', AuthController.login, additionalMiddleware);

// Better Example: Extending using middleware
app.post('/register', UserController.register);
app.post('/login', AuthController.login, AuthController.additionalFunctionality);
```


Al agregar nuevas funciones AuthControllery ponerlas a disposición como middleware, cumplimos con el OCP. Puede ampliar el proceso de autenticación sin modificar los controladores de ruta principales.

  

* `Principio de sustitución de Liskov`(LSP): los subtipos deben ser sustituibles por sus tipos base sin alterar la corrección del programa.


```javascript
// Bad Example: Subclass that violates LSP
class BaseController {
  handleRequest(req, res) {
    // Handle request logic
  }
}

class UserController extends BaseController {
  handleRequest(req, res) {
    // Handle user-specific logic
  }
}
// Better Example: Subclass that adheres to LSP
class BaseController {
  handleRequest(req, res) {
    // Handle request logic
  }
}
class UserController extends BaseController {
  // No need to override handleRequest here
}
```
En el ejemplo, UserControllerno es necesario anular handleRequest, ya que se adhiere al principio de sustitución de Liskov. Las subclases deben ser intercambiables con las clases base sin afectar la corrección.




* `Principio de segregación de interfaces` (ISP): no se debe obligar a los clientes a depender de interfaces que no utilizan, lo que significa que tener varias interfaces pequeñas y específicas es mejor que una sola grande.


```javascript
// Bad Example: Monolithic middleware
app.use((req, res, next) => {
  // Complex middleware logic
  // ...
  next();
});

// Better Example: Multiple specific middleware
app.use(cors());
app.use(bodyParser.json());
app.use(loggerMiddleware);
```

En el ejemplo, las múltiples funciones específicas del middleware que se centran en preocupaciones individuales. Esto permite a los manejadores de rutas elegir el middleware que necesitan, cumpliendo con el ISP.

* `Principio de inversión de dependencia` (DIP): los módulos de alto nivel no deben depender de los módulos de bajo nivel, ambos deben depender de abstracciones y las abstracciones no deben depender de los detalles.

```javascript
// Bad Example: Directly instantiating dependencies
const userService = new UserService();
const userController = new UserController(userService);

// Better Example: Using dependency injection and an IoC container
const container = new IoCContainer();
container.register('userService', UserService);
container.register('userController', UserController);
const userController = container.resolve('userController');
```
En el ejemplo, un contenedor IoC gestiona dependencias y las inyecta en controladores, desacoplando componentes y facilitando el intercambio de implementaciones, siguiendo el Principio de Inversión de Dependencia.
