#### Fast Initialization of npm Project

```
npm init -y
```

###### Installing nodemon package for entire system (it realoads the server automatically if any chage maden in *.* js,mjs,cjs,json files)
```
npm i --global  nodemon
```

###### Setup nodemon for watching the file
```
nodemon main.js
```


#### NVM - Node Version Manager

###### This utility help to maintain multiple version of Node.js

```
nvm -v
```

```
nvm install 8
```

```
nvm use 12
```



#### CommonJS

###### It loads the modules Synchronously and require below syntax 

```
require("modulename")
```


#### EcmaScript Module comes ES6 onwards

###### It loads the modules Asynchronously and require below syntax with one setting in package.json

```
import http from "http"
```

###### It is modern approach

###### Setup the below setting in package.json

```
{   ......
    "type": "module",
    .......
}
```

###### Deafult value of type is `commonjs`