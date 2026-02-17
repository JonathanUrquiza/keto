# Recuperar index.html original (versión Keto)

Si las modificaciones realizadas para la **Dieta sin TACC** no son las que necesitabas, puedes volver a la versión anterior así:

## Opción 1 – Copiar el archivo de respaldo

1. En la carpeta del proyecto, abre la carpeta **`dieta`**.
2. Ahí está el archivo **`index_original_keto.html`** (copia exacta del `index.html` antes de los cambios).
3. Copia `index_original_keto.html` a la raíz del proyecto.
4. Renombra la copia a **`index.html`** (reemplazando el actual).

## Opción 2 – Desde la terminal

En la raíz del proyecto:

```bash
copy dieta\index_original_keto.html index.html
```

(Linux/Mac: `cp dieta/index_original_keto.html index.html`)

---

**Nota:** Si también cambiaste `js/app.js` (menú semanal y lista de compras), esa versión Keto depende de los datos que tenía ese archivo. Si lo necesitas, se puede generar un respaldo de `app.js` original para restaurar todo el comportamiento Keto.

**Fecha del respaldo:** Febrero 2026
