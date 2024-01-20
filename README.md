# Desplegar fácil y rápido Vite React en Github Pages

> [!IMPORTANT]
> Si o si, necesitas haber hecho `git init` y ademas agregar el `git remote add origin url` en local, porque si no te sale un error, no es necesario haber hecho un commit almenos.

### 1. Instale el paquete

```
pnpm i gh-pages --D
```

### 2. En el `package.json`, agregue esta linea, para hacer el deploy

```
"deploy": "gh-pages -d dist",
```

### 3. En el archivo `vite.config.ts`, agregue esta línea antes de `plugins: [react()]`

Tiene que coincidir con el nombre del repositorio que tiene en el github

```
base: "/NOMBRE-DEL-REPOSITORIO",
```

### 4. Primero generar el dist

Porque el contenido de esa carpeta es la que se va a subir en la rama gh-pages del repositorio

```
pnpm run build
```

### 5. Finalmente, ejecute este comando para hacer el deploy

Lo que va hacer es subir el contenido de la carpeta dist a la rama gh-pages del repositorio

```
pnpm run deploy
```

> [!NOTE]
> FUENTE ORIGINAL: https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf
