# Para publicar la Web AILearn

## URL de la aplicacion web

development [https://dev.app.rvd.ai/]

testing [https://test.app.rvd.ai/]

## Pasos

### 1. Clonar repositorio de compilacion

`GitHub`: [https://github.com/aimpact-partners/ailearn-web-build]

branchs: `development` || `testing`

### 2. Compilar paquete

-   Ubicarse en el directorio donde esta el `beyond.json` donde se incluyen todos los paquetes

-   Ejecutar el comando

```
beyond build @aimpact/ailearn-app web-[environment] --logs
```

### 3. Copiar el codigo fuente generado en

-   ailearn\app\\.beyond\builds\web-[environment]\code

### 4. Ubicarse en el branch correspondiente del repositorio de compilacion

### 5. Eliminar el codigo previo de la raiz del repositorio de compilacion

### 6. Pegar el codigo en la raiz del repositorio de compilacion

### 7. Subir el codigo al branch correspondiente

Branchs:

-   `development`
-   `testing`
