# InternetCheckpoint-Front
![](./src/assets/img/prueba.svg)

* [Rama main](https://github.com/paccoc43/internetcheckpoint-front)
* [Rama develop](https://github.com/paccoc43/internetcheckpoint-front/tree/develop)

## Requerimientos

El proyecto utiliza los siguientes paquetes de código abierto:

* [VSCode](https://code.visualstudio.com/) 
* [NodeJS](https://nodejs.org) 
* [Angular](https://angular.io) 
* [Angular CLI](https://cli.angular.io) 
* [Angular Material](https://material.angular.io)
* [Bootstrap](https://getbootstrap.com)
* [AnimeJS](https://animejs.com)

Proyecto de base de angular-cli: ``ng new pas --style=scss --prefix=pas``

## Instalación

    npm install

## Ejecución

Levanta la [Web](http://localhost:4200) en entorno de  ```Desarrollo```

    npm start

## Build

Genera el build 

    npm run build

## Instrucciones angular-cli

| Scaffold  | Usage                                       |
| --------- | ------------------------------------------- |
| Component | `ng g component my-new-component`           |
| Directive | `ng g directive my-new-directive`           |
| Pipe      | `ng g pipe my-new-pipe`                     |
| Service   | `ng g service my-new-service`               |
| Class     | `ng g class my-new-class`                   |
| Interface | `ng g interface my-new-interface`           |
| Enum      | `ng g enum my-new-enum`                     |
| Module    | `ng g module my-module`                     |
| Routing   | `ng g module modules/module-name --routing` |

## Errores
MSBUILD : error MSB4132: The tools version "2.0" is unrecognized. Available tools versions are "4.0".

Falta instalar visual studio redistributable y python a través del comando: 

    npm install --global --production windows-build-tools

cannot conver t argument 1 from 'v8::Local<v8::Value>' to 'const v8::String::Utf8Value

Versión de node es más nueva: 

Instalar nvm(gestor de versiones node): 
    https://content.breatheco.de/en/how-to/nvm-install-windows#:~:text=Steps%20to%20install%20with%20nvm%3A&text=Install%20nvm%20Go%20to%20your,that%20you%20will%20hit%20too.

	- nvm install 10.16.3

	- nvm use 10.16.3
