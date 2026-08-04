<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
## Fuente oficial de requisitos

Antes de analizar, proponer, modificar o implementar cualquier función, leer:

- `docs/PRD_MASTER.md`

El archivo `docs/PRD_MASTER.md` es una copia sincronizada de referencia.

La fuente oficial del PRD se encuentra en:

`vrixora-admin-canvas/docs/PRD_MASTER.md`

No editar directamente la copia del PRD en este repositorio.

## Alcance de este repositorio

Este repositorio corresponde al sitio web público de VRIXORA Solutions.

Incluye:

- página corporativa de VRIXORA;
- presentación de productos y servicios;
- página comercial de TukTuk Control;
- información de planes, cuando corresponda;
- enlaces de instalación o acceso;
- captación de clientes;
- soporte y contacto;
- políticas de privacidad;
- SEO;
- accesibilidad;
- rendimiento;
- diseño adaptable a móvil y escritorio.

No implementar aquí funciones administrativas que pertenecen al Centro de Control, como:

- gestión de clientes;
- registro de pagos;
- generación administrativa de recibos;
- modificación de licencias;
- creación o edición de planes;
- empleados, roles y permisos;
- auditoría administrativa;
- sincronización de datos privados de TukTuk Control.

## WhatsApp y contacto

Los números y mensajes de contacto no deben quedar duplicados innecesariamente en el código.

Cuando se implemente la configuración dinámica del ecosistema, la web deberá utilizar la fuente de configuración aprobada para:

- atención al cliente;
- consultas comerciales;
- pago o renovación;
- enlaces oficiales de WhatsApp.

No exponer datos privados del cliente, licencias, pagos ni configuraciones administrativas.

## Reglas de trabajo

Antes de modificar código:

1. Ejecutar `git status`.
2. Confirmar la rama.
3. Leer el PRD.
4. Revisar el impacto en SEO, accesibilidad, rendimiento y diseño adaptable.
5. Documentar cualquier contradicción con el PRD.
6. Trabajar en una rama.
7. No reescribir el historial publicado.
8. No hacer `force push`.
9. No desplegar sin autorización.

No considerar una función terminada únicamente porque exista visualmente o porque el proyecto compile.

Verificar cuando corresponda:

- contenido;
- navegación;
- enlaces;
- responsive;
- accesibilidad;
- SEO;
- rendimiento;
- privacidad;
- compilación;
- despliegue;
- funcionamiento real.
