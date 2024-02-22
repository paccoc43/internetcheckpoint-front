# InternetCheckpoint-Front
![](./src/assets/img/prueba.svg)

## Requerimientos

El proyecto utiliza los siguientes paquetes de código abierto:

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

Genera el build en la carpeta [dist](./dist/pas)

    npm run build

Si aparece un error de node-sass al build, ejecutar:

    npm install node-sass@4.10.0 --no-save

## Analisis    

Muestra un esquema del blundle generado

    npm run analyze


## Instrucciones angular-cli

| Scaffold  | Usage                                       | ShortCut |
| --------- | ------------------------------------------- | -------- |
| Component | `ng g component my-new-component`           |          |
| Directive | `ng g directive my-new-directive`           |          |
| Pipe      | `ng g pipe my-new-pipe`                     |          |
| Service   | `ng g service my-new-service`               |          |
| Class     | `ng g class my-new-class`                   |          |
| Interface | `ng g interface my-new-interface`           |          |
| Enum      | `ng g enum my-new-enum`                     |          |
| Module    | `ng g module my-module`                     |          |
| Routing   | `ng g module modules/module-name --routing` |          |

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
