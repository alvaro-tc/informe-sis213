# MARCO REFERENCIAL DEL SISTEMA TPS 

## Introducción

En el entorno empresarial actual, los Sistemas de Información Organizacional (SIO) se han convertido en un pilar indispensable. Su importancia radica en que permiten a las empresas estructurar, centralizar y gestionar su información para operar con eficiencia y respaldar la toma de decisiones. Dentro de esta jerarquía, el núcleo operativo recae en los Sistemas de Procesamiento de Transacciones (TPS). Estos sistemas han experimentado una profunda evolución tecnológica: pasaron de ser arquitecturas rígidas y lentas de procesamiento por lotes (batch) a convertirse en plataformas dinámicas en línea, capaces de registrar y procesar datos en tiempo real.

Este avance tecnológico responde directamente a la necesidad imperiosa de automatizar procesos. En cualquier negocio, depender de operaciones manuales genera cuellos de botella, errores humanos y una falta total de trazabilidad. Automatizar significa transformar esas tareas repetitivas en flujos de trabajo eficientes. Para lograrlo, el uso de sistemas web se ha consolidado como el estándar ideal en las organizaciones. Desarrollar sobre tecnologías web permite a las empresas implementar herramientas escalables, flexibles y de fácil acceso desde cualquier dispositivo, democratizando soluciones robustas para las pequeñas y medianas empresas.

En este marco, este proyecto consiste en el desarrollo de un Sistema de Información Organizacional Web basado en la evolución del enfoque TPS, que permitirá gestionar procesos, usuarios, transacciones y reportes mediante una plataforma tecnológica accesible y segura. La solución está diseñada para modernizar la gestión operativa de una cafetería en La Paz, Bolivia, reemplazando el uso de libretas de papel por un Punto de Venta (POS) digital que eleve la eficiencia y el control administrativo del establecimiento.

## Antecedentes

### Antecedentes del objeto de estudio

El objeto de estudio del presente proyecto es una cafetería de tamaño mediano en la ciudad de La Paz, Bolivia, que actualmente opera sus procesos de atención y venta de manera completamente manual. Este escenario, lejos de ser un caso aislado, refleja la realidad predominante en el sector gastronómico local, donde la adopción de tecnologías de gestión sigue siendo incipiente.

![Ejemplo de problemas en las cafeterias](assets/images/cafeteria.png){#fig:ejemplo_cafeteria width=65%}

En su estado actual, el flujo operativo de la cafetería depende íntegramente de la intervención humana no sistematizada: los pedidos de los clientes son anotados a mano por el personal en libretas o talonarios de papel, la comunicación entre el área de atención y la barra de preparación se realiza de forma verbal o mediante la entrega física de las comandas, y el proceso de cobro se ejecuta mediante cálculos mentales o con el apoyo de calculadoras de escritorio. Al cierre de cada jornada, el arqueo de caja se realiza de forma manual, contrastando el efectivo físico con las anotaciones del día, un proceso propenso a errores y discrepancias.

Esta situación genera un conjunto de problemas operativos concretos y recurrentes que afectan tanto la eficiencia del servicio como la salud financiera del negocio:

- **Pérdida e ilegibilidad de comandas:** El registro manual en papel está expuesto a extravíos, manchas o escritura ilegible, lo que deriva en errores en la preparación de pedidos y conflictos con los clientes.
- **Ausencia de control y auditoría de usuarios:** Al no existir un sistema de registro, resulta imposible determinar qué miembro del personal procesó, modificó o anuló una orden, eliminando cualquier posibilidad de rendición de cuentas.
- **Descuadres de caja recurrentes:** El cobro basado en cálculo mental o en calculadoras simples, sin un sistema que valide automáticamente los totales, genera discrepancias diarias entre los ingresos registrados y el efectivo real.
- **Nula trazabilidad histórica:** La ausencia de una base de datos implica que no existe ningún registro histórico de ventas. La gerencia no puede conocer cuáles son los productos más vendidos, los picos de demanda por hora o los ingresos acumulados por período, privándose de información crítica para la toma de decisiones estratégicas.

### Referencias técnicas de otros sistemas TPS

Como parte del análisis de referencia, se relevaron tres sistemas de gestión para cafeterías y restaurantes disponibles públicamente en GitHub. El estudio de estos proyectos permite identificar patrones de diseño comunes, tecnologías adoptadas por la comunidad y brechas funcionales que el presente sistema busca superar.

1. **proyecto-cafeteria** — ValentinHer (GitHub)
   - **Repositorio:** https://github.com/ValentinHer/proyecto-cafeteria.git
   - **Descripción general:** Sistema de gestión para cafetería desarrollado como proyecto académico. Implementa las operaciones básicas de un punto de venta: registro de productos, toma de pedidos y generación de órdenes.
   - **Stack tecnológico:** Aplicación web con arquitectura cliente-servidor, base de datos relacional para la persistencia de productos y transacciones, e interfaz de usuario orientada a la administración del negocio.
   - **Funcionalidades identificadas:** Gestión del catálogo de productos (CRUD), registro de pedidos por mesa, y consulta de historial de ventas a nivel básico.
   - **Diferencia con el sistema propuesto:** Este proyecto carece de un sistema de autenticación basado en roles diferenciados (Administrador vs. Cajero), no implementa procesamiento transaccional ACID para garantizar la integridad de los cobros concurrentes, y no genera comprobantes de pago en formato PDF. El sistema propuesto aborda estas limitaciones mediante JWT, sesiones de transacción en MongoDB y el módulo de facturación con PDFKit/jsPDF.

2. **Sistema-POS-Restaurantes** — ValentinPacheco (GitHub)
   - **Repositorio:** https://github.com/ValentinPacheco/Sistema-POS-Restaurantes.git
   - **Descripción general:** Sistema de Punto de Venta orientado a restaurantes, con enfoque en la gestión de órdenes en sala y el flujo de cobro al cliente. Representa una solución más cercana al dominio del presente proyecto por su naturaleza POS.
   - **Stack tecnológico:** Implementación web con separación de capas frontend y backend, manejo de estado de mesas y control de órdenes activas.
   - **Funcionalidades identificadas:** Panel de estado de mesas, creación y modificación de órdenes en curso, cálculo de totales y cierre de cuenta por mesa.
   - **Diferencia con el sistema propuesto:** Si bien aborda la gestión de mesas y órdenes, el sistema no contempla una arquitectura de microservicios contenerizada con Docker, ni un despliegue en infraestructura _cloud_ (AWS/DigitalOcean). Asimismo, el control de acceso por roles y la generación automatizada de reportes financieros con cortes de caja son funcionalidades ausentes que el presente proyecto incorpora de forma nativa.

3. **cafeteria-app** — FFW4 (GitHub)
   - **Repositorio:** https://github.com/FFW4/cafeteria-app.git
   - **Descripción general:** Aplicación web para la gestión de una cafetería, con foco en la experiencia del operador en el punto de atención. Desarrollada con un enfoque pragmático orientado a la agilidad en la toma de pedidos.
   - **Stack tecnológico:** Aplicación de página única (_SPA_) con componentes reactivos para la interfaz del POS y conexión a un servicio de backend para la persistencia de datos.
   - **Funcionalidades identificadas:** Selección de productos por categoría, armado del carrito de compras, asignación de pedidos y registro de ventas.
   - **Diferencia con el sistema propuesto:** Esta aplicación no implementa autenticación segura mediante _tokens_ JWT ni encriptación de contraseñas con _bcrypt_, exponiendo el sistema a vulnerabilidades de acceso no autorizado. Tampoco cuenta con un módulo de reportes analíticos ni con transacciones ACID multi-documento que garanticen la inmutabilidad de los registros históricos de venta, aspectos críticos en un TPS de producción.

## Descripción del objeto de estudio

La unidad de análisis del presente proyecto es una cafetería de servicio rápido ubicada en la ciudad de La Paz, Bolivia, con capacidad para atender simultáneamente a múltiples mesas. El establecimiento ofrece un menú compuesto principalmente por bebidas calientes y frías (cafés, infusiones, batidos) y una selección de alimentos de preparación rápida (postres, sándwiches, snacks), atendiendo a una clientela diversa en horario continuo.

**Estructura organizacional y actores del sistema:**

El personal operativo del establecimiento se organiza en dos roles funcionales claramente diferenciados, que se corresponden directamente con los actores del sistema a desarrollar:

- **Administrador:** Responsable de la gobernanza general del negocio. Gestiona el catálogo de productos (altas, bajas y modificaciones de precios), administra las cuentas del personal operativo y tiene acceso a los reportes de ventas e indicadores financieros.
- **Cajero / Operador POS:** Personal de atención directa al cliente. Su función central es construir y procesar órdenes en la interfaz del punto de venta, asignarlas a la mesa correspondiente y ejecutar el cobro al momento de cerrar la cuenta.

**Flujo actual del negocio (situación sin sistema):**

El ciclo de servicio actual sigue el siguiente flujo manual: el cliente se ubica en una mesa disponible → el cajero toma el pedido verbalmente y lo anota en la comanda de papel → la comanda se entrega en barra para preparación → los productos son entregados al cliente → al solicitar la cuenta, el cajero suma manualmente los ítems, comunica el total y recibe el pago en efectivo → el dinero se deposita en la caja registradora mecánica.

**Flujo propuesto del negocio (con el sistema TPS):**

Con la implementación del sistema, el flujo se transforma radicalmente: el cajero selecciona los productos del menú digital interactivo y los asigna a la mesa del cliente en la interfaz POS → el sistema calcula automáticamente el subtotal en tiempo real → al confirmar el cobro, el _backend_ procesa matemáticamente la transacción, aplica impuestos y sella el registro de forma inmutable en la base de datos → el sistema genera automáticamente el comprobante de pago (ticket/factura) → la mesa queda marcada como disponible para el próximo cliente. Cada uno de estos eventos queda registrado con fecha, hora, cajero responsable y detalle de productos, garantizando trazabilidad completa y eliminando cualquier posibilidad de descuadre.

## Descripción de Procesos del Sistema

Esta sección describe la forma en que el Sistema TPS-POS será implementado operativamente, detallando los procesos clave que lo componen y cómo cada uno se ejecuta dentro de la arquitectura MERN propuesta.

### Autenticación y Control de Acceso

Al ingresar al sistema, el operador introduce sus credenciales (usuario y contraseña) en la pantalla de _login_ construida con React.js. El _frontend_ envía una solicitud HTTP POST al _endpoint_ `/api/auth/login` del servidor Node.js/Express.js. El _backend_ recupera el registro del usuario desde MongoDB, verifica la contraseña mediante la función de comparación de _bcrypt_ y, si es válida, genera un JSON Web Token (JWT) firmado que incluye en su _payload_ el identificador del usuario y su rol (Administrador o Cajero). Este _token_ es devuelto al cliente y almacenado en el estado global de Redux, siendo adjuntado automáticamente en la cabecera `Authorization` de todas las peticiones subsiguientes. Los _middlewares_ de Express validan el _token_ en cada ruta protegida antes de permitir el acceso a los recursos.

### Gestión del Catálogo (Administrador)

El Administrador accede al módulo de gestión de productos desde su panel exclusivo. A través de formularios React, puede crear, editar, activar o desactivar ítems del menú (nombre, precio, categoría, imagen). Cada acción dispara una petición REST al _backend_ (POST, PUT o PATCH según corresponda), que valida los datos contra el esquema Mongoose de la colección `Productos` en MongoDB antes de persistir el cambio. Las modificaciones de precio no alteran registros históricos: las órdenes ya cerradas conservan el precio exacto del momento de la venta gracias a la desnormalización del carrito (`cartItems`).

### Registro de Orden en el POS (Cajero)

El Cajero opera la interfaz POS táctil. Selecciona una mesa disponible del panel de estados, luego elige productos del menú interactivo organizado por categorías. Cada selección actualiza el estado del carrito en Redux, recalculando subtotales y totales en tiempo real sin consultar el servidor. Una vez completada la orden, el Cajero confirma el método de pago. El _frontend_ envía la orden completa (mesa, cajero, `cartItems` con precios actuales, total calculado) al _endpoint_ `/api/orders` del _backend_.

### Procesamiento Transaccional y Cierre (Backend)

Al recibir la orden, el _backend_ inicia una Sesión de Transacción de MongoDB para garantizar las propiedades ACID. Dentro de la transacción atómica se ejecutan en secuencia: (1) validación matemática del total enviado por el cliente, (2) inserción del documento de la orden en la colección `Facturas/Órdenes` con todos los datos inmutables, (3) actualización del estado de la `Mesa` asignada de "ocupada" a "disponible". Si cualquiera de estos pasos falla (por ejemplo, por un corte de red), MongoDB ejecuta un _Rollback_ completo, garantizando que no queden "ventas a medias" en la base de datos.

### Generación de Comprobante (Factura/Ticket)

Una vez confirmada la transacción, el _backend_ devuelve los datos de la orden sellada al _frontend_. React activa automáticamente la opción de generar el comprobante, invocando el módulo de facturación (PDFKit o jsPDF) que construye el ticket en formato PDF con el detalle de los ítems, el total cobrado, la mesa, el cajero y la fecha exacta. El comprobante queda disponible para impresión inmediata desde el navegador.

### Reportes y Arqueo de Caja

El Administrador accede al módulo de reportes para consultar el resumen financiero del turno o del período seleccionado. El _backend_ ejecuta consultas de agregación (_Aggregation Pipeline_) sobre la colección de órdenes en MongoDB, consolidando ingresos totales, desglose por método de pago, productos más vendidos y ventas por cajero. Los resultados son renderizados en tablas y gráficos en el _frontend_ de React, permitiendo al Administrador realizar el arqueo de caja con datos exactos y auditables.

## Formulación del Problema

¿Cómo el desarrollo de un prototipo funcional basado en el procesamiento de transacciones permite proyectar una reducción en los errores operativos y una mejora en el control de usuarios por roles, asegurando la consistencia de los datos financieros desde una arquitectura web?

## Objetivos

### Objetivo General

Desarrollar un prototipo funcional de un Sistema de Información Organizacional Web basado en el enfoque de Procesamiento de Transacciones (TPS), que permita gestionar procesos, usuarios, transacciones y reportes mediante una arquitectura _backend_ funcional, con el propósito de proyectar una reducción en los errores operativos y una mejora en el control de usuarios por roles, asegurando la consistencia de los datos financieros desde una arquitectura web.

### Objetivos Específicos

- Implementar un módulo de gestión de pedidos en tiempo real para permitir a los meseros registrar, modificar y hacer seguimiento del estado de las órdenes (en preparación, servido, pagado) mediante una interfaz táctil dinámica construida con React.js.

- Diseñar un sistema de control de acceso basado en roles (RBAC) para diferenciar los permisos y vistas del Administrador, el Cajero y el Mesero mediante autenticación segura con JSON Web Tokens (JWT).

- Desarrollar un módulo de administración visual de mesas y reservas para permitir a los operadores conocer la disponibilidad y el estado de cada mesa del establecimiento mediante un panel de estados en tiempo real.

- Construir las APIs RESTful del backend para soportar todas las operaciones CRUD de los módulos de productos, órdenes, mesas y usuarios utilizando Node.js, Express.js y una base de datos MongoDB.

- Implementar un módulo de facturación y generación de recibos para automatizar el cálculo del cobro total y producir comprobantes detallados en formato PDF mediante la integración de métodos de pago simulados con una pasarela estándar.

- Desplegar el sistema en infraestructura cloud (AWS o DigitalOcean) para garantizar la portabilidad, disponibilidad y escalabilidad del entorno productivo utilizando contenedores Docker.

## Justificación

### Justificación Técnica

El desarrollo de este prototipo se fundamenta en la implementación de una arquitectura web moderna y de alta disponibilidad, estructurada bajo el entorno Cliente-Servidor empleando el stack MERN. Esta elección garantiza una separación absoluta entre la interfaz de usuario y la lógica de negocio. Se construirá un backend funcional y asíncrono utilizando Node.js y Express.js, optimizado para el procesamiento rápido de múltiples transacciones concurrentes (TPS). Para la persistencia de datos, se utilizará MongoDB, una base de datos orientada a documentos que otorga la flexibilidad necesaria para manejar carritos de compra dinámicos y catálogos escalables. En términos de seguridad, el sistema prescindirá del manejo tradicional de sesiones, implementando en su lugar autenticación sin estado mediante JSON Web Tokens (JWT) y el cifrado irreversible de contraseñas con el algoritmo Bcrypt. Esta infraestructura dota al sistema de una alta escalabilidad técnica, permitiendo futuras integraciones o el despliegue en infraestructuras en la nube (Cloud Hosting) sin necesidad de refactorizar el código base.

### Justificación Organizacional

A nivel organizacional, el prototipo representa un salto cualitativo en la gestión de procesos internos de la cafetería. La automatización de transacciones permite estandarizar el ciclo de servicio, eliminando las ambigüedades y retrasos propios de los procesos manuales y la comunicación verbal. Se establecerá un estricto control de usuarios mediante la implementación de un modelo de acceso basado en roles (RBAC), asegurando que los operadores (cajeros) y los tomadores de decisiones (administradores) interactúen únicamente con las interfaces y datos correspondientes a sus responsabilidades. Además, la capacidad del sistema para la generación de reportes automáticos dotará a la gerencia de información estructurada y en tiempo real sobre el rendimiento del negocio, transformando datos aislados en conocimiento estratégico.

### Justificación Económica

La viabilidad y necesidad del proyecto se sustentan en el impacto financiero positivo que genera la digitalización. La implementación del TPS asegura una drástica reducción de errores operativos; al automatizar el cálculo de subtotales, impuestos y cambio, se eliminan los recurrentes descuadres de caja diarios. Esto se traduce inmediatamente en la prevención de fugas de capital. Asimismo, la optimización del tiempo por cada transacción permite aumentar la capacidad de atención en horas pico (mayor rotación de mesas), elevando los ingresos. A mediano plazo, estas mejoras operativas confluyen en una notable reducción de costos operativos y administrativos.

## Límites y Alcances

### Límites

El alcance del presente proyecto se enmarca dentro de las siguientes restricciones técnicas y operativas:

- El sistema será exclusivamente web, requiriendo un navegador moderno y conexión a la red local o internet para su funcionamiento.
- Se utilizará una base de datos NoSQL (MongoDB) en lugar de una base de datos relacional tradicional, priorizando la agilidad en la estructura de los pedidos (documentos).
- Tendrá un sistema de autenticación de usuarios interno y cerrado; no se permitirá el registro público ni el inicio de sesión con redes sociales.
- No incluirá integración con sistemas externos en esta fase (como plataformas de delivery de terceros, o pasarelas de impuestos gubernamentales directas).

### Alcances

El sistema funcional entregado al finalizar el proyecto permitirá realizar las siguientes operaciones:

- Gestionar procesos operativos centrales, incluyendo la asignación y liberación de mesas de la cafetería.
- Gestionar usuarios y roles, otorgando permisos específicos para la administración del menú o la operación de la caja.
- Registrar transacciones comerciales en tiempo real, almacenando el detalle exacto de cada venta de manera inmutable.
- Generar reportes financieros e históricos de ventas filtrados por fechas o turnos.
- Administrar información maestra del negocio, como el alta, baja y modificación de productos, precios y categorías del catálogo.

## Metodología del Proyecto

### Tipo de estudio

La presente investigación se define bajo tres enfoques metodológicos:

- **Aplicado:** Ya que no se limita a la investigación teórica, sino que busca resolver un problema operativo concreto de la cafetería mediante la construcción de una herramienta útil.
- **Tecnológico:** Debido a que el núcleo de la solución requiere la aplicación de ingeniería de software, lenguajede programación y arquitecturas de sistemas modernos.
- **Descriptivo:** Puesto que requiere analizar, detallar y comprender la naturaleza del flujo de trabajo actual de la organización para poder traducirlo a requerimientos de software.

### Metodología de desarrollo

Para la construcción del software se adoptará **Scrum**, un marco de trabajo ágil iterativo e incremental, ideal para proyectos tecnológicos donde los requerimientos pueden evolucionar.

- **Sprint:** El desarrollo se dividirá en ciclos de trabajo cortos y de duración fija (ej. dos semanas), garantizando revisiones periódicas.
- **Product Backlog:** Se manejará una lista priorizada con todos los requerimientos funcionales, técnicos y de interfaz que el sistema POS necesita para operar.
- **Sprint Backlog:** En cada planificación, el equipo seleccionará un subconjunto de tareas del Product Backlog para diseñarlas, codificarlas y probarlas durante ese ciclo.
- **Entregables:** Al finalizar cada Sprint, se presentará un incremento de software funcional (un módulo operativo, como el panel de login o la interfaz de toma de pedidos) listo para ser validado por los interesados.

### Técnicas

Para garantizar que el sistema capture fielmente la realidad del negocio y se diseñe con robustez técnica, se aplicarán las siguientes técnicas:

- **Entrevistas:** Se realizarán entrevistas estructuradas a los actores clave (el administrador y el personal de caja). El objetivo es extraer requerimientos funcionales precisos, comprender los cuellos de botella actuales en la toma de pedidos y definir las métricas que la gerencia necesita visualizar en los reportes diarios.
- **Observación:** Se aplicará la observación directa no participante durante las horas pico de la cafetería. Esta técnica es fundamental para mapear el flujo de trabajo real (tiempo de atención por cliente, comunicación entre caja y preparación, y manejo físico del efectivo), identificando fricciones operativas que las entrevistas podrían omitir.
- **Análisis documental:** Se examinarán los registros físicos actuales de la organización (comandas de papel, libretas de contabilidad, inventarios manuales y facturas de proveedores). El análisis de estos documentos es el paso previo a la normalización de datos, permitiendo diseñar los esquemas exactos que conformarán la base de datos (MongoDB).
- **Modelado UML:** Se utilizará el Lenguaje Unificado de Modelado como puente entre la recolección de datos y la codificación. Se elaborarán Diagramas de Casos de Uso para definir la interacción por roles; Diagramas de Actividades para trazar el flujo lógico del Procesamiento de Transacciones (desde el pedido hasta la factura); y Diagramas de Clases para estructurar las entidades del sistema.
- **Modelo C4 (Técnica de Arquitectura):** Complementando a UML, se utilizará el modelo C4 para documentar la arquitectura web. Se elaborarán diagramas de Contexto (el sistema en su entorno), Contenedores (interacción entre React, Node.js y MongoDB), Componentes (controladores y servicios) y Código, facilitando la comprensión técnica del prototipo.

## Análisis preliminar del sistema TPS

El relevamiento inicial demuestra que los **procesos actuales** de la cafetería son enteramente manuales. El ciclo de servicio se basa en la transcripción de pedidos en libretas, cálculos matemáticos mentales y arqueos de caja basados en anotaciones físicas. Los **problemas** derivados de esta operatividad son severos: pérdida constante de comandas, errores humanos en el cobro, lentitud en el servicio y una total falta de auditoría que resulta en discrepancias financieras.

En cuanto a los **usuarios**, el personal opera sin una jerarquía digital; cualquiera puede modificar o anular un registro físico sin dejar rastro. Las **transacciones**, que deberían ser tratadas como eventos inmutables de entrada de capital, carecen de respaldo. Finalmente, la **información** generada por el negocio se pierde al finalizar el día, privando a la gerencia de datos históricos críticos para analizar qué productos se venden más o en qué horarios se requiere más personal.

## Propuesta de solución

Para resolver la problemática descrita, se propone el desarrollo y despliegue de un **Sistema de Información Organizacional Web**, específicamente orientado como un Punto de Venta (POS) transaccional.

- **Arquitectura:** El sistema se construirá bajo el patrón Cliente — Servidor, separando la capa de presentación visual de la capa de procesamiento lógico y acceso a datos, garantizando rendimiento y seguridad.
- **Tecnologías seleccionadas:**
  - **Backend (Servidor y Lógica):** Se desarrollará en **Node.js** utilizando el framework Express.js, creando una API RESTful encargada de la validación matemática, autenticación de usuarios y reglas de negocio.
  - **Base de datos (Persistencia):** Se utilizará **MongoDB** (NoSQL), modelada mediante Mongoose, para almacenar de forma ágil y estructurada los usuarios, catálogos y el historial inmutable de órdenes de venta.
  - **Frontend (Cliente y UI):** Se construirá con la biblioteca **React.js** (junto con HTML, CSS y JavaScript), desarrollando una interfaz de usuario interactiva, dinámica y adaptada a pantallas táctiles, que permita a los cajeros operar con máxima velocidad y mínima fricción.

## Cronograma

El proyecto tiene una duración total de **4 meses (16 semanas)**, organizado en 8 _Sprints_ de 2 semanas cada uno bajo el marco Scrum.

\begingroup\small
\begin{longtable}{|p{1.2cm}|p{1.5cm}|p{2.6cm}|p{5.5cm}|p{3cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Sprint & \bfseries \color{white} Semanas & \bfseries \color{white} Fase & \bfseries \color{white} Actividades principales & \bfseries \color{white} Entregable \\ \hline
\endhead
\textbf{0} & 1–2 & Inicio y Diseño & Levantamiento de requerimientos, diseño de \emph{wireframes} UI/UX, modelado de base de datos, configuración del repositorio GitHub y entorno Docker. & \emph{Product Backlog}, diseño de BD, \emph{wireframes} aprobados. \\ \hline
\textbf{1} & 3–4 & \emph{Backend} – Fundamentos & Configuración de Express.js, conexión MongoDB con Mongoose, modelos de datos (User, Product, Table, Order), sistema de autenticación JWT y \emph{middleware} de roles. & API de autenticación funcional (registro, \emph{login}, roles). \\ \hline
\textbf{2} & 5–6 & \emph{Backend} – Módulos Core & APIs RESTful para gestión de productos del menú (CRUD), gestión de mesas (CRUD + estados) y gestión de órdenes (crear, actualizar estado). & \emph{Endpoints} de Products, Tables y Orders documentados. \\ \hline
\textbf{3} & 7–8 & \emph{Frontend} – Base y Auth & Configuración de React.js + Redux Toolkit + React Router, pantallas de \emph{Login}, \emph{layout} principal y conexión con el API de autenticación. & \emph{Frontend} base funcional con \emph{login} y roles. \\ \hline
\textbf{4} & 9–10 & \emph{Frontend} – POS & Módulo POS táctil: selección de categorías, productos, cantidad y adición al carrito de órdenes; envío de pedidos al \emph{backend}. & Interfaz POS funcional conectada al \emph{backend}. \\ \hline
\textbf{5} & 11–12 & Mesas y Dashboard & Panel visual de estados de mesas, módulo de administración de menú (alta/baja de productos), vista de órdenes activas para cocina. & Gestión de mesas e interfaz de cocina operativa. \\ \hline
\textbf{6} & 13–14 & Facturación y Pagos & Módulo de generación de facturas en PDF, cálculo automático de totales, integración de métodos de pago simulados, historial de ventas. & Facturación y cierre de órdenes completo. \\ \hline
\textbf{7} & 15–16 & Cierre: QA y Despliegue & Pruebas funcionales e integración (QA), corrección de \emph{bugs}, despliegue en AWS/DigitalOcean con Docker, documentación técnica final y capacitación al usuario. & Sistema desplegado en producción y manual de usuario. \\ \hline
\caption{Cronograma de Sprints}
\label{tab:cronograma_sprints}
\end{longtable}
\endgroup

---

# MARCO TEÓRICO DEL SISTEMA TPS

## Sistemas de Información Organizacional

### Definición

Un Sistema de Información Organizacional (SIO) es un conjunto integrado de componentes — personas, procesos, datos, _hardware_ y _software_ — diseñado para recolectar, almacenar, procesar y distribuir información que apoye la coordinación, el control, el análisis y la toma de decisiones dentro de una organización [@laudon2020]. A diferencia de un simple programa informático, un SIO está profundamente imbricado con los procesos de negocio de la organización: define cómo fluye la información entre los actores, cuándo se captura, cómo se transforma y quién tiene acceso a ella.

En términos más precisos, un SIO transforma datos crudos (ej. el registro de una venta) en información significativa y estructurada (ej. un reporte de ingresos diarios), que a su vez se convierte en conocimiento útil para la gestión (ej. la identificación del turno de mayor rentabilidad). Este proceso de transformación es el núcleo del valor que aportan los SIO a las organizaciones modernas [@obrien2011].

### Componentes

Todo Sistema de Información Organizacional se articula en torno a seis componentes fundamentales que trabajan de forma interdependiente [@laudon2020]:

- **Hardware:** La infraestructura física que sustenta el sistema: servidores, terminales de trabajo, dispositivos de red y, en el contexto del presente proyecto, las estaciones de trabajo desde las que el personal operará la interfaz POS [@laudon2020].
- **Software:** Los programas y aplicaciones que procesan los datos. Incluye tanto el _software_ de sistema (sistema operativo, entorno de ejecución Node.js) como el _software_ de aplicación desarrollado a medida (la plataforma POS web) [@laudon2020].
- **Datos:** La materia prima del sistema. En el contexto de la cafetería, los datos son las órdenes, los productos, los usuarios, las mesas y las transacciones que el sistema captura y persiste en la base de datos MongoDB [@laudon2020].
- **Redes y telecomunicaciones:** La infraestructura de conectividad que permite el acceso concurrente al sistema desde múltiples dispositivos, habilitado por la arquitectura cliente-servidor del proyecto [@laudon2020].
- **Procedimientos:** Los protocolos y flujos de trabajo que definen cómo deben interactuar los usuarios con el sistema (ej. el proceso de apertura de turno, la toma de una orden, el cierre de caja) [@laudon2020].
- **Recursos humanos:** Los actores que operan el sistema. En el proyecto, esto comprende al Administrador y al Cajero, cada uno con roles y permisos claramente delimitados [@laudon2020].

### Tipos de sistemas

Desde una perspectiva funcional, los SIO se clasifican en distintos tipos según el nivel organizacional al que sirven. Los **Sistemas de Procesamiento de Transacciones (TPS)** operan en el nivel operativo, capturando y procesando las transacciones cotidianas del negocio. Los **Sistemas de Información Gerencial (MIS)** consolidan la información del TPS para generar reportes estructurados destinados a la gerencia media. Los **Sistemas de Soporte a Decisiones (DSS)** asisten en la toma de decisiones complejas mediante análisis de datos y modelos. Los **Sistemas de Información Ejecutiva (EIS)** proveen información estratégica de alto nivel a los directivos. El presente proyecto se enfoca en la implementación de un TPS, que actúa como la base de toda esta pirámide informacional [@laudon2020].

## Sistema de Procesamiento de Transacciones (TPS)

### Definición

Un Sistema de Procesamiento de Transacciones es un tipo especializado de SIO diseñado para capturar, procesar, validar y almacenar las transacciones operativas de una organización de forma inmediata, confiable y a gran escala [@obrien2011]. En el contexto del negocio, una **transacción** se define como cualquier evento discreto que modifica el estado de los datos del sistema y que debe quedar registrado de forma permanente e inalterable: el registro de una venta, la creación de una orden, el cobro de una cuenta o la modificación del catálogo de productos.

### Características

Los TPS se distinguen de otros tipos de sistemas de información por un conjunto de atributos técnicos y funcionales que los hacen aptos para el procesamiento operativo de alto volumen [@obrien2011]:

- **Procesamiento en tiempo real (_OLTP_):** A diferencia del procesamiento por lotes (_batch_), los TPS modernos procesan cada transacción en el instante en que se produce, actualizando la base de datos de forma inmediata y reflejando el estado actual del negocio en todo momento [@obrien2011].
- **Alta confiabilidad y disponibilidad:** Un TPS para un punto de venta debe estar disponible durante todo el horario operativo del negocio. La indisponibilidad del sistema implica la parálisis del servicio al cliente [@obrien2011].
- **Integridad transaccional (propiedades ACID):** Toda transacción en un TPS debe cumplir las propiedades de Atomicidad (la transacción se ejecuta completa o no se ejecuta), Consistencia (el sistema pasa de un estado válido a otro estado válido), Aislamiento (las transacciones concurrentes no interfieren entre sí) y Durabilidad (una transacción confirmada persiste incluso ante fallos del sistema) [@elmasri2015].
- **Manejo de alto volumen de datos estandarizados:** Los TPS están optimizados para procesar grandes cantidades de transacciones simples y repetitivas de forma eficiente, a diferencia de los sistemas analíticos que trabajan con consultas complejas sobre datos históricos [@obrien2011].

### Funciones

En el contexto específico del presente proyecto, el TPS ejecuta el siguiente ciclo funcional para cada transacción de venta [@obrien2011]:

1. **Captura de datos de origen:** El cajero construye la orden seleccionando productos del catálogo digital y asignándola a una mesa, introduciendo los datos de la transacción en el sistema mediante la interfaz POS de React.js [@obrien2011].
2. **Validación y verificación:** El _backend_ (Node.js/Express.js) verifica que el usuario tenga los permisos necesarios (validación JWT), que losítulos existan en el catálogo activo y que la mesa esté disponible [@obrien2011].
3. **Procesamiento matemático:** El motor transaccional calcula automáticamente los subtotales por ítem, aplica los impuestos correspondientes y determina el total a cobrar, eliminando el margen de error del cálculo manual [@obrien2011].
4. **Actualización de la base de datos:** La transacción se escribe de forma atómica en MongoDB, vinculando el documento de la orden con el cajero responsable, la mesa asignada y los ítems del carrito con sus precios exactos en ese instante [@obrien2011].
5. **Emisión del comprobante:** El sistema genera el ticket o factura en formato PDF, disponible para impresión inmediata, y actualiza el estado de la mesa a "disponible" [@obrien2011].

### Evolución hacia sistemas web

Los TPS han recorrido un largo camino desde las terminales monolíticas de los años setenta. La adopción de arquitecturas web modernas —como la empleada en este proyecto— representa la fase más reciente de esta evolución, caracterizada por tres ventajas fundamentales: **ubicuidad** (el sistema es accesible desde cualquier dispositivo con navegador web en la red local del negocio), **centralización** (todos los datos residen en un único repositorio en la nube, eliminando la dispersión de información), y **escalabilidad** (la arquitectura basada en microservicios y contenedores Docker permite escalar el sistema horizontalmente para absorber incrementos en la carga de trabajo sin rediseñar la arquitectura base) [@sommerville2015].

## Arquitectura de sistemas web

La arquitectura del sistema POS se basa en el modelo Cliente–Servidor, una de las estructuras más utilizadas en aplicaciones web modernas por su capacidad de separación de responsabilidades, escalabilidad y mantenimiento [@sommerville2015]. Siguiendo este diagrama:

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/diagrama/arquitectura_mern.png}
\caption{Diagrama de Arquitectura MERN}
\label{diag:arquitectura_mern}
\end{diagrama}

### Cliente

El cliente representa la capa de presentación del sistema, encargada de interactuar directamente con el usuario final mediante una interfaz gráfica accesible desde el navegador. En este proyecto, el cliente será desarrollado utilizando React.js, permitiendo [@sommerville2015]:

- Renderizado dinámico de componentes (Virtual DOM).
- Interacciones en tiempo real en el POS.
- Manejo del estado global mediante Redux Toolkit.
- Navegación sin recarga de página (SPA).

Funciones principales:

- Capturar datos de entrada (pedidos, login).
- Mostrar información procesada.
- Enviar solicitudes HTTP al servidor.

### Servidor

El servidor constituye la capa de lógica de negocio [@sommerville2015].
Tecnologías: Node.js; Express.js.
Funciones principales:

- Procesamiento de órdenes.
- Validaciones y cálculos.
- Ejecución de la lógica transaccional.

### API

La API permite la comunicación entre cliente y servidor mediante HTTP y JSON. Actúa como el puente documentado que estructura y transmite la información bidireccionalmente [@sommerville2015].
Características:

- Métodos estándar: GET, POST, PUT, DELETE.
- Arquitectura RESTful.

### Base de datos

Repositorio central donde reposa la persistencia de las entidades. Es el componente responsable de almacenar los datos operacionales a largo plazo para asegurar la durabilidad y disponibilidad de la información de las ventas y el menú [@elmasri2015].

### Flujo del Sistema

1. Usuario interactúa con frontend.
2. Cliente envía petición HTTP a la API.
3. Servidor procesa la solicitud y valida.
4. Se consulta o impacta la base de datos.
5. Servidor responde en JSON.
6. Frontend actualiza la interfaz.

## Seguridad en sistemas de información

Como modelador y encargado de la seguridad arquitectónica, se establece que un sistema de ventas (POS) debe proteger de forma absoluta sus _endpoints_ (rutas de API) y la persistencia de datos [@stallings2017].

### Autenticación

Se descartan las sesiones tradicionales. El sistema implementa JSON Web Tokens (JWT) [@jones2015]. Tras validar credenciales (contraseñas previamente procesadas con funciones criptográficas unidireccionales de _hash_, como _bcrypt_ [@provos1999]), el _backend_ emite un token firmado [@stallings2017]. Este token viaja en las cabeceras HTTP de cada petición del cliente, garantizando que el usuario es quien dice ser sin consultar la base de datos reiteradamente.

### Autorización

La autorización asegura que un usuario autenticado solo pueda realizar las acciones para las que está facultado. Se ejecuta verificando los niveles de privilegio incrustados y firmados criptográficamente en el token antes de responder a una petición [@stallings2017].

### Roles

El modelo de datos incluye una propiedad rígida de "Rol" (ej. Administrador, Cajero). Este mecanismo se implementa mediante _Middlewares_ (bloques de código intermedios en el _backend_) que desencriptan el _payload_ del token y rechazan con un error 403 (Prohibido) cualquier intento de un Cajero de acceder a las rutas de eliminación de usuarios o reportes gerenciales [@stallings2017].

### Control de acceso

Tanto a nivel de la interfaz (ocultando botones de configuración a cajeros) como a nivel de capa de datos, se aplican políticas estrictas para evitar inyecciones maliciosas o robo de sesiones, blindando el flujo desde que se presiona "Cobrar" hasta que la información reposa en el disco [@stallings2017].

## Base de datos

El diseño de la persistencia de datos constituye el corazón del sistema, siendo responsabilidad directa de la ingeniería de datos modelar la información de la cafetería para que sea escalable, rápida y matemáticamente exacta [@elmasri2015].

### Modelo relacional

Aunque tecnologías modernas como la pila MERN utilicen modelos NoSQL orientados a documentos para optimizar la velocidad transaccional, los principios lógicos relacionales son ineludibles en un TPS [@elmasri2015]. Las entidades maestras se identifican y separan claramente: `Usuarios` (Personal), `Categorías` (Clasificación del menú), `Productos` (Ítems de venta) y `Facturas/Órdenes` (Registro de la transacción). Se definen llaves referenciales explícitas entre ellas para establecer cardinalidad (ej. un cajero realiza muchas ventas, una orden contiene múltiples productos).

### Integridad

Los principios lógicos de integridad se mantienen ineludibles mediante el uso de esquemas de validación estrictos (como _Mongoose_ en el caso de la pila seleccionada). Estos esquemas garantizan la exactitud de los tipos de datos ingresados y previenen la inserción de documentos huérfanos o con información financiera incompleta [@elmasri2015].

### Normalización

Se aplican reglas de normalización para evitar anomalías; por ejemplo, la información del perfil del usuario o la descripción detallada de un producto no se repiten innecesariamente. Sin embargo, por requerimientos de diseño de un POS y para proteger la contabilidad, se realiza una desnormalización controlada en las `Órdenes`: al registrar una venta, el precio exacto actual del producto se copia de forma fija dentro de la orden. Esto garantiza que la información histórica sea inmutable frente a futuros cambios de precios en el catálogo [@elmasri2015].

### Transacciones

En el entorno TPS, una transacción es indivisible. Registrar una venta implica: calcular totales, insertar la orden, asociar el método de pago y actualizar la disponibilidad de la mesa. El motor de la base de datos se configura para garantizar atomicidad (Principios ACID), asegurando que si ocurre un fallo de red a la mitad del proceso, la base de datos ejecute un _Rollback_ (reversión completa de los pasos previos), previniendo que existan "ventas a medias" o corrupciones en los arqueos de caja [@elmasri2015].

## Metodología de desarrollo

### Scrum

Es un marco de trabajo ágil para el desarrollo, entrega y mantenimiento de productos complejos, definido en la _Scrum Guide_ [@schwaber2020]. Se fundamenta en tres pilares empíricos: transparencia, inspección y adaptación. Para el Sistema POS de Cafetería, Scrum es la elección metodológica óptima porque permite iterar rápidamente y ajustar requerimientos de acuerdo a la retroalimentación del cliente.

#### Roles

- **Product Owner:** Es el responsable de maximizar el valor del producto. Sus funciones son definir y mantener el _Product Backlog_; ser el punto de contacto único con el cliente; y aceptar o rechazar los incrementos funcionales [@schwaber2020].
- **Scrum Master:** Responsable de que el equipo aplique correctamente Scrum. Facilita las ceremonias, elimina impedimentos y protege al equipo de interrupciones externas [@schwaber2020].
- **Equipo de Desarrollo:** Equipo autoorganizado responsable de convertir los ítems del _Product Backlog_ en un incremento potencialmente entregable (programación, diseño y pruebas) [@schwaber2020].

#### Artefactos

- **Product Backlog:** Lista única y priorizada de todos los requerimientos funcionales y técnicos necesarios para el sistema [@schwaber2020].
- **Sprint Backlog:** Conjunto de requerimientos seleccionados para el _Sprint_ actual, divididos en tareas concretas a desarrollar por el equipo [@schwaber2020].
- **Incremento:** La suma de todas las funcionalidades completadas durante el _Sprint_, las cuales deben cumplir con la Definición de Hecho (código probado y validado) [@schwaber2020].

#### Eventos

- **Sprint Planning (Planificación):** Reunión de inicio donde el equipo define qué se va a entregar y cómo se va a construir el incremento durante el ciclo de trabajo [@schwaber2020].
- **Daily Scrum (Reunión diaria):** Reunión breve de sincronización del equipo de desarrollo para evaluar el progreso y exponer bloqueos u obstáculos [@schwaber2020].
- **Sprint Review (Revisión):** Demostración del _software_ funcional al _Product Owner_ y partes interesadas al finalizar el _Sprint_ para recoger impresiones [@schwaber2020].
- **Sprint Retrospective (Retrospectiva):** Espacio de mejora continua donde el equipo reflexiona sobre sus propios procesos de trabajo de cara a la siguiente iteración [@schwaber2020].

---

# MARCO PRÁCTICO

## Análisis del sistema

En base a la recopilación de datos realizada mediante entrevistas al personal y observación directa del flujo operativo de la cafetería, se identifican los siguientes actores, procesos y flujos que el sistema debe digitalizar.

**Actores del sistema:**

La cafetería opera con tres actores principales que interactúan con el sistema en distintos niveles de privilegio:

- **Administrador:** Actor con control total del sistema. Gestiona el catálogo de productos, categorías y precios; administra usuarios y roles; supervisa el inventario de insumos; genera reportes financieros y de ventas; y toma decisiones estratégicas apoyadas en los indicadores del _dashboard_.
- **Cajero / Operador POS:** Actor de atención directa. Registra ventas, selecciona productos del menú digital, asigna la mesa correspondiente, procesa el cobro y emite el comprobante digital al cliente.
- **Staff:** Actor de apoyo operativo. Recibe notificaciones de pedidos en producción, actualiza la disponibilidad de productos cuando un insumo se agota y gestiona el menú semanal disponible.

**Procesos principales identificados:**

1. **Proceso de venta:** El cajero construye el pedido seleccionando productos del menú digital → asigna la mesa → el sistema calcula automáticamente el subtotal → se selecciona el método de pago (efectivo o QR) → el _backend_ procesa la transacción de forma atómica → se emite el comprobante digital → el inventario se descuenta automáticamente.

2. **Proceso de gestión de inventario:** El administrador registra insumos y productos con su stock inicial → el sistema descuenta automáticamente al registrar cada venta → cuando un insumo alcanza el nivel mínimo, el sistema emite una alerta → el administrador genera la orden de compra vinculada al proveedor correspondiente → al recibir la mercadería, se registra la entrada y el stock se actualiza.

3. **Proceso de gestión de menú:** El encargado de cocina actualiza semanalmente los productos disponibles → asigna precios de venta y costos de producción → agrupa productos por categoría (bebidas calientes, jugos, almuerzos, _snacks_, postres) → marca productos como no disponibles cuando el insumo se agota → gestiona combos y menús del día.

4. **Proceso de reportes:** El administrador consulta el _dashboard_ con indicadores en tiempo real → filtra ventas por día, semana o mes → analiza productos más vendidos, horas pico, márgenes por categoría y comparativos históricos → exporta reportes en PDF.

**Flujo de datos del sistema:**

El flujo de información sigue la dirección: **Entrada (interfaz POS / administración)** → **Procesamiento (_backend_ Node.js/Express.js con validación JWT)** → **Persistencia (MongoDB)** → **Salida (reportes, comprobantes PDF, alertas de stock, _dashboard_)**. Cada transacción queda vinculada al cajero que la ejecutó, la mesa asignada, los productos con sus precios en ese instante y la fecha y hora exactas, garantizando trazabilidad completa y soporte a auditorías.

![Ejemplo de prueba en el análisis del sistema](assets/images/flujodatos.png){#fig:ejemplo_analisis width=65%}

## Determinación de requerimientos

### Requerimientos funcionales

Los requerimientos funcionales expresan lo que el sistema **debe hacer** operativamente. Se organizan por módulo funcional según el análisis del sistema.

**Autenticación y Control de Acceso**

\begingroup\small
\begin{longtable}{|p{1.2cm}|p{7.5cm}|p{2.5cm}|p{1.8cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Descripción del Requerimiento & \bfseries \color{white} Actor & \bfseries \color{white} Prioridad \\ \hline
\endhead
RF-01 & Permitir el inicio de sesión de usuarios del sistema mediante credenciales registradas. & Admin, Cajero, Cocina & Alta \\ \hline
RF-02 & Gestionar roles de usuario: crear, editar y eliminar cuentas del personal operativo. & Admin & Alta \\ \hline
RF-03 & Restringir el acceso a funcionalidades del sistema según el rol asignado al usuario autenticado. & Sistema/Admin & Alta \\ \hline
\caption{Requerimientos funcionales — Autenticación y Control de Acceso}
\label{tab:rf_auth}
\end{longtable}
\endgroup

**Gestión de Ventas y Pedidos**

\begingroup\small
\begin{longtable}{|p{1.2cm}|p{7.5cm}|p{2.5cm}|p{1.8cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Descripción del Requerimiento & \bfseries \color{white} Actor & \bfseries \color{white} Prioridad \\ \hline
\endhead
RF-04 & Registrar pedidos de clientes vinculados a una mesa y al cajero en turno. & Cajero & Alta \\ \hline
RF-05 & Agregar, editar y eliminar productos dentro de un pedido antes de su despacho. & Cajero & Alta \\ \hline
RF-06 & Enviar pedidos registrados al área de cocina para su preparación. & Cajero & Alta \\ \hline
RF-09 & Notificar al cajero automáticamente cuando el pedido esté listo para ser servido. & Sistema & Media \\ \hline
RF-10 & Gestionar el estado de mesas del establecimiento (disponible, ocupada). & Cajero & Media \\ \hline
RF-11 & Generar facturas o comprobantes digitales automáticamente por cada pedido cerrado. & Sistema & Alta \\ \hline
RF-12 & Calcular automáticamente el total del pedido, incluyendo subtotales e impuestos. & Sistema & Alta \\ \hline
RF-13 & Registrar pagos de pedidos con el método de pago utilizado (efectivo, QR). & Cajero & Alta \\ \hline
RF-14 & Registrar y actualizar el estado del pago de cada orden (pagado, pendiente). & Sistema & Alta \\ \hline
\caption{Requerimientos funcionales — Gestión de Ventas y Pedidos}
\label{tab:rf_ventas}
\end{longtable}
\endgroup

**Gestión del Área de Cocina**

\begingroup\small
\begin{longtable}{|p{1.2cm}|p{7.5cm}|p{2.5cm}|p{1.8cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Descripción del Requerimiento & \bfseries \color{white} Actor & \bfseries \color{white} Prioridad \\ \hline
\endhead
RF-04 & Registrar pedidos de clientes vinculados a una mesa y al cajero en turno. & Cajero & Alta \\ \hline
RF-05 & Agregar, editar y eliminar productos dentro de un pedido antes de su despacho. & Cajero & Alta \\ \hline
RF-06 & Enviar pedidos registrados al área de cocina para su preparación. & Cajero & Alta \\ \hline
RF-09 & Notificar al cajero automáticamente cuando el pedido esté listo para ser servido. & Sistema & Media \\ \hline
RF-10 & Gestionar el estado de mesas del establecimiento (disponible, ocupada). & Cajero & Media \\ \hline
RF-11 & Generar facturas o comprobantes digitales automáticamente por cada pedido cerrado. & Sistema & Alta \\ \hline
RF-12 & Calcular automáticamente el total del pedido, incluyendo subtotales e impuestos. & Sistema & Alta \\ \hline
RF-13 & Registrar pagos de pedidos con el método de pago utilizado (efectivo, QR). & Cajero & Alta \\ \hline
RF-14 & Registrar y actualizar el estado del pago de cada orden (pagado, pendiente). & Sistema & Alta \\ \hline
\caption{Requerimientos funcionales — Gestión de Ventas y Pedidos}
\label{tab:rf_ventas}
\end{longtable}
\endgroup

**Gestión de Menú y Productos**

\begingroup\small
\begin{longtable}{|p{1.2cm}|p{7.5cm}|p{2.5cm}|p{1.8cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Descripción del Requerimiento & \bfseries \color{white} Actor & \bfseries \color{white} Prioridad \\ \hline
\endhead
RF-15 & Gestionar el catálogo de productos del menú: crear, editar y eliminar ítems. & Admin & Alta \\ \hline
RF-16 & Gestionar categorías del menú (bebidas calientes, jugos, almuerzos, \emph{snacks}, postres). & Admin & Media \\ \hline
RF-17 & Controlar la disponibilidad de productos según el estado del inventario de insumos. & Admin & Media \\ \hline
\caption{Requerimientos funcionales — Gestión de Menú y Productos}
\label{tab:rf_menu}
\end{longtable}
\endgroup

**Reportes y Apoyo a la Toma de Decisiones**

\begingroup\small
\begin{longtable}{|p{1.2cm}|p{7.5cm}|p{2.5cm}|p{1.8cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Descripción del Requerimiento & \bfseries \color{white} Actor & \bfseries \color{white} Prioridad \\ \hline
\endhead
RF-18 & Visualizar reportes de ventas e ingresos filtrados por período (día, semana, mes). & Admin & Media \\ \hline
\caption{Requerimientos funcionales — Reportes y Toma de Decisiones}
\label{tab:rf_reportes}
\end{longtable}
\endgroup

### Requerimientos no funcionales

Establecen las restricciones y la forma en cómo debe operar y comportarse estructuralmente la aplicación.

\begingroup\small
\begin{longtable}{|p{1.2cm}|p{6.5cm}|p{2.5cm}|p{1.8cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Descripción del Requerimiento & \bfseries \color{white} Categoría & \bfseries \color{white} Prioridad \\ \hline
\endhead
RNF-01 & El sistema debe cifrar las contraseñas de los usuarios mediante \emph{hashing} irreversible con Bcrypt (factor de coste: 10). & Seguridad & Alta \\ \hline
RNF-02 & El sistema debe implementar autenticación segura sin estado mediante JSON Web Tokens (JWT). & Seguridad & Alta \\ \hline
RNF-03 & El sistema debe controlar el acceso a cada recurso y ruta según el rol del usuario autenticado. & Seguridad & Alta \\ \hline
RNF-04 & El sistema debe responder a las solicitudes del usuario en menos de 2 segundos bajo condiciones normales de operación. & Rendimiento & Alta \\ \hline
RNF-05 & El sistema debe soportar múltiples usuarios concurrentes sin degradación del rendimiento durante el horario de operación. & Rendimiento & Alta \\ \hline
RNF-06 & El sistema debe actualizar el estado de pedidos y mesas en tiempo real sin necesidad de recargar la página. & Rendimiento & Media \\ \hline
RNF-07 & La interfaz de usuario debe ser intuitiva, permitiendo operar al personal sin capacitación técnica avanzada. & Usabilidad & Alta \\ \hline
RNF-08 & El sistema debe ser \emph{responsive} y adaptado para uso en pantallas de mostrador y dispositivos táctiles. & Usabilidad & Media \\ \hline
RNF-09 & El sistema debe permitir una navegación fluida entre módulos sin interrupciones ni tiempos de espera perceptibles. & Usabilidad & Media \\ \hline
RNF-10 & El sistema debe tener una arquitectura modular que facilite el mantenimiento y la incorporación de nuevas funcionalidades. & Mantenibilidad & Alta \\ \hline
RNF-11 & El sistema debe ser escalable para incorporar nuevos productos, usuarios o sucursales sin rediseño de la arquitectura base. & Mantenibilidad & Media \\ \hline
RNF-12 & El sistema debe estar disponible durante todo el horario de operación del establecimiento, sin interrupciones no planificadas. & Disponibilidad & Alta \\ \hline
RNF-13 & El sistema debe manejar errores de forma controlada, informando al usuario con mensajes descriptivos sin exponer detalles internos del sistema. & Confiabilidad & Alta \\ \hline
RNF-14 & El sistema debe garantizar la integridad de los datos transaccionales mediante propiedades ACID en las operaciones de escritura críticas. & Datos & Alta \\ \hline
\caption{Requerimientos no funcionales del Sistema POS}
\label{tab:rnf}
\end{longtable}
\endgroup

## Modelado del sistema

### Historias de Usuario

Las historias de usuario del Sistema POS Cafetería se elaboraron bajo el formato ágil estándar: \textit{Como} [rol], \textit{quiero} [acción], \textit{para} [beneficio], acompañadas de criterios de aceptación con el esquema \textit{Dado / Cuando / Entonces}. Se presentan agrupadas por módulo funcional, en correspondencia directa con el Product Backlog del proyecto (28 historias de usuario, 122 story points en total).

**5.1 Módulo de Autenticación y Control de Acceso**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{0.6cm}|p{1.8cm}|p{2.8cm}|p{4.2cm}|p{1.3cm}|p{0.5cm}|p{0.9cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Título & \bfseries \color{white} Historia de Usuario & \bfseries \color{white} Criterios de Aceptación & \bfseries \color{white} Prioridad & \bfseries \color{white} SP & \bfseries \color{white} Sprint \\ \hline
\endhead
HU-01 & Registro e inicio de sesión de empleados & Como empleado, quiero registrarme e iniciar sesión con mis credenciales, para acceder al sistema según mi rol asignado. & \textbf{CA1:} Dado que soy un nuevo empleado, cuando completo el formulario con nombre, correo, teléfono, contraseña y rol, entonces mi cuenta es creada y soy redirigido al sistema.\newline\newline\textbf{CA2:} Dado que tengo cuenta existente, cuando ingreso credenciales válidas, entonces recibo un token JWT y soy redirigido a mi vista según mi rol. & Must-have & 5 & Sprint 1 \\ \hline
HU-02 & Control de acceso por rol & Como administrador, quiero que cada empleado solo acceda a las vistas permitidas para su rol, para garantizar la seguridad y el flujo correcto del sistema. & \textbf{CA1:} Dado que soy barista, cuando intento acceder a la ruta del dashboard, entonces soy bloqueado con un mensaje de acceso denegado.\newline\newline\textbf{CA2:} Dado que soy mesero, cuando inicio sesión, entonces solo veo las opciones de Inicio, Órdenes, Mesas y Menú en la navegación. & Must-have & 3 & Sprint 1 \\ \hline
\caption{Historias de Usuario — Módulo de Autenticación y Control de Acceso}
\label{tab:hu_autenticacion}
\end{longtable}
\endgroup

**5.2 Módulo de Dashboard y Panel de Control**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{0.6cm}|p{1.8cm}|p{2.8cm}|p{4.2cm}|p{1.3cm}|p{0.5cm}|p{0.9cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Título & \bfseries \color{white} Historia de Usuario & \bfseries \color{white} Criterios de Aceptación & \bfseries \color{white} Prioridad & \bfseries \color{white} SP & \bfseries \color{white} Sprint \\ \hline
\endhead
HU-03 & Panel de inicio con métricas del negocio & Como mesero o administrador, quiero ver un resumen del estado del negocio al ingresar al sistema, para tomar decisiones rápidas sobre las operaciones del día. & \textbf{CA1:} Dado que inicio sesión exitosamente, cuando se carga la página de inicio, entonces veo métricas de ingresos totales y mesas ocupadas en tarjetas.\newline\newline\textbf{CA2:} Dado que estoy en la página de inicio, cuando hay órdenes recientes, entonces las veo listadas con su estado, mesa y hora de creación. & Must-have & 3 & Sprint 1 \\ \hline
HU-21 & Métricas globales del sistema & Como administrador, quiero ver estadísticas globales del negocio en el dashboard, para tomar decisiones informadas sobre la operación. & \textbf{CA1:} Dado que accedo a la pestaña de Métricas, cuando se carga la vista, entonces veo tarjetas con total de órdenes, ingresos totales, platos activos, categorías y mesas.\newline\newline\textbf{CA2:} Dado que se crea una nueva orden, cuando actualizo las métricas, entonces los contadores reflejan los datos más recientes. & Should-have & 3 & Sprint 2 \\ \hline
\caption{Historias de Usuario — Módulo de Dashboard y Panel de Control}
\label{tab:hu_dashboard}
\end{longtable}
\endgroup

**5.3 Módulo de Gestión de Mesas**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{0.6cm}|p{1.8cm}|p{2.8cm}|p{4.2cm}|p{1.3cm}|p{0.5cm}|p{0.9cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Título & \bfseries \color{white} Historia de Usuario & \bfseries \color{white} Criterios de Aceptación & \bfseries \color{white} Prioridad & \bfseries \color{white} SP & \bfseries \color{white} Sprint \\ \hline
\endhead
HU-04 & Gestión de mesas del restaurante & Como administrador, quiero crear, editar y eliminar mesas con número, capacidad y color, para mantener actualizada la distribución física de la cafetería. & \textbf{CA1:} Dado que estoy en el módulo de Mesas, cuando creo una nueva mesa con número y capacidad, entonces aparece en la vista con estado Disponible.\newline\newline\textbf{CA2:} Dado que existe una mesa con una orden activa, cuando intento eliminarla, entonces el sistema me impide hacerlo o me advierte del conflicto. & Must-have & 3 & Sprint 1 \\ \hline
HU-05 & Visualización del estado de las mesas & Como mesero, quiero ver todas las mesas con su estado actual en tiempo real, para saber cuáles están disponibles, ocupadas o en uso. & \textbf{CA1:} Dado que estoy en la página de Mesas, cuando se carga la vista, entonces cada tarjeta muestra número, capacidad, estado y nombre del cliente si está ocupada.\newline\newline\textbf{CA2:} Dado que hay mesas con distintos estados, cuando aplico el filtro \emph{En uso}, entonces solo se muestran las mesas con órdenes activas. & Must-have & 2 & Sprint 1 \\ \hline
\caption{Historias de Usuario — Módulo de Gestión de Mesas}
\label{tab:hu_mesas}
\end{longtable}
\endgroup

**5.4 Módulo de Gestión del Menú**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{0.6cm}|p{1.8cm}|p{2.8cm}|p{4.2cm}|p{1.3cm}|p{0.5cm}|p{0.9cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Título & \bfseries \color{white} Historia de Usuario & \bfseries \color{white} Criterios de Aceptación & \bfseries \color{white} Prioridad & \bfseries \color{white} SP & \bfseries \color{white} Sprint \\ \hline
\endhead
HU-06 & Gestión de categorías del menú & Como administrador, quiero crear, editar y eliminar categorías de menú con nombre, color e ícono, para organizar visualmente los productos disponibles. & \textbf{CA1:} Dado que estoy en la sección de Categorías, cuando creo una con nombre, color e ícono, entonces aparece disponible al crear o editar platos.\newline\newline\textbf{CA2:} Dado que una categoría tiene platos asociados, cuando intento eliminarla, entonces el sistema procesa la solicitud o muestra el impacto de la acción. & Must-have & 2 & Sprint 1 \\ \hline
HU-07 & Gestión de platos del menú & Como administrador, quiero crear, editar y eliminar platos con nombre, precio, categoría e insumos requeridos, para mantener el menú actualizado con los productos disponibles. & \textbf{CA1:} Dado que estoy en la sección de Productos, cuando creo un plato asignándole insumos y cantidades, entonces queda vinculado a esos insumos para el descuento automático de inventario.\newline\newline\textbf{CA2:} Dado que un plato tiene precio o ingredientes desactualizados, cuando lo edito y guardo, entonces los cambios se reflejan inmediatamente en el menú. & Must-have & 5 & Sprint 1 \\ \hline
\caption{Historias de Usuario — Módulo de Gestión del Menú}
\label{tab:hu_menu_hu}
\end{longtable}
\endgroup

**5.5 Módulo de Toma y Gestión de Órdenes**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{0.6cm}|p{1.8cm}|p{2.8cm}|p{4.2cm}|p{1.3cm}|p{0.5cm}|p{0.9cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Título & \bfseries \color{white} Historia de Usuario & \bfseries \color{white} Criterios de Aceptación & \bfseries \color{white} Prioridad & \bfseries \color{white} SP & \bfseries \color{white} Sprint \\ \hline
\endhead
HU-08 & Toma de órdenes en el menú & Como mesero, quiero seleccionar una mesa, ingresar los datos del cliente, agregar platos al carrito y confirmar la orden, para registrar el pedido de forma rápida y sin errores. & \textbf{CA1:} Dado que ingreso al módulo de Menú, cuando selecciono mesa, completo datos del cliente y agrego platos, entonces se calcula el total con impuesto y puedo confirmar la orden.\newline\newline\textbf{CA2:} Dado que confirmo una orden en efectivo, cuando el sistema la registra, entonces aparece en la KDS del barista y en la lista de órdenes activas. & Must-have & 8 & Sprint 1 \\ \hline
HU-09 & Visualización y filtrado de órdenes & Como mesero o administrador, quiero ver todas las órdenes con su estado actual y filtrarlas, para hacer seguimiento del flujo de trabajo de la cocina. & \textbf{CA1:} Dado que estoy en la página de Órdenes, cuando se carga la lista, entonces veo todas las órdenes con cliente, mesa, ítems, total y estado.\newline\newline\textbf{CA2:} Dado que quiero ver solo las órdenes pendientes, cuando selecciono el filtro \emph{En Progreso}, entonces la lista se actualiza mostrando únicamente esas órdenes. & Must-have & 3 & Sprint 1 \\ \hline
\caption{Historias de Usuario — Módulo de Toma y Gestión de Órdenes}
\label{tab:hu_ordenes}
\end{longtable}
\endgroup

**5.6 Módulo de Cocina (KDS)**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{0.6cm}|p{1.8cm}|p{2.8cm}|p{4.2cm}|p{1.3cm}|p{0.5cm}|p{0.9cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Título & \bfseries \color{white} Historia de Usuario & \bfseries \color{white} Criterios de Aceptación & \bfseries \color{white} Prioridad & \bfseries \color{white} SP & \bfseries \color{white} Sprint \\ \hline
\endhead
HU-10 & Pantalla KDS para barista/cocina & Como barista, quiero ver las órdenes entrantes en mi pantalla de cocina organizadas por estado, para preparar los pedidos en el orden correcto. & \textbf{CA1:} Dado que se crea una nueva orden, cuando aparece en la pestaña \emph{Entradas} de la KDS, entonces veo el número de mesa, cliente, ítems y cantidad de cada uno.\newline\newline\textbf{CA2:} Dado que comienzo a preparar un pedido, cuando lo muevo a estado \emph{Preparando}, entonces desaparece de Entradas y aparece en la pestaña correspondiente. & Must-have & 5 & Sprint 2 \\ \hline
HU-11 & Actualización del estado de una orden & Como barista o mesero, quiero actualizar el estado de una orden (En Progreso, Preparando, Lista, Completada), para comunicar el avance del pedido al equipo. & \textbf{CA1:} Dado que una orden está en estado \emph{Preparando}, cuando el barista la marca como \emph{Lista}, entonces el mesero puede verla en la lista de órdenes listas para entregar.\newline\newline\textbf{CA2:} Dado que una orden fue entregada al cliente, cuando se marca como \emph{Completada}, entonces pasa al historial y la mesa puede liberarse. & Must-have & 3 & Sprint 2 \\ \hline
\caption{Historias de Usuario — Módulo de Cocina (KDS)}
\label{tab:hu_kds}
\end{longtable}
\endgroup

**5.7 Módulo de Pagos y Facturación**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{0.6cm}|p{1.8cm}|p{2.8cm}|p{4.2cm}|p{1.3cm}|p{0.5cm}|p{0.9cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Título & \bfseries \color{white} Historia de Usuario & \bfseries \color{white} Criterios de Aceptación & \bfseries \color{white} Prioridad & \bfseries \color{white} SP & \bfseries \color{white} Sprint \\ \hline
\endhead
HU-12 & Pago digital con Binance Pay & Como mesero, quiero procesar pagos digitales mediante Binance Pay al confirmar una orden, para ofrecer al cliente una alternativa de pago sin efectivo en criptomonedas (USDT / BNB). & \textbf{CA1:} Dado que el cliente elige pago con Binance Pay, cuando selecciono ese método y confirmo, entonces el sistema genera la solicitud de pago a la API de Binance Pay con el monto correcto de la orden.\newline\newline\textbf{CA2:} Dado que el cliente completa el pago, cuando la transacción es verificada por Binance Pay, entonces la orden queda registrada con el \texttt{transactionId} y se genera la factura. & Must-have & 5 & Sprint 2 \\ \hline
HU-13 & Generación de factura / comprobante & Como mesero, quiero generar una factura al completar una orden, para entregar al cliente un comprobante detallado de su consumo. & \textbf{CA1:} Dado que una orden fue pagada, cuando accedo a la opción de factura, entonces se muestra un documento con ítems, cantidades, subtotal, impuesto y total.\newline\newline\textbf{CA2:} Dado que estoy viendo la factura generada, cuando selecciono imprimir, entonces el sistema abre el diálogo de impresión con el formato correcto. & Must-have & 3 & Sprint 2 \\ \hline
\caption{Historias de Usuario — Módulo de Pagos y Facturación}
\label{tab:hu_pagos}
\end{longtable}
\endgroup

**5.8 Módulo de Gestión de Inventario**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{0.6cm}|p{1.8cm}|p{2.8cm}|p{4.2cm}|p{1.3cm}|p{0.5cm}|p{0.9cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Título & \bfseries \color{white} Historia de Usuario & \bfseries \color{white} Criterios de Aceptación & \bfseries \color{white} Prioridad & \bfseries \color{white} SP & \bfseries \color{white} Sprint \\ \hline
\endhead
HU-14 & Gestión de insumos del inventario & Como administrador, quiero agregar, editar y eliminar insumos con stock, unidades y umbrales mínimos y máximos, para controlar con precisión los materiales disponibles en la cafetería. & \textbf{CA1:} Dado que estoy en la página de Insumos, cuando agrego un nuevo insumo con nombre, unidad, stock actual, stock mínimo y costo unitario, entonces aparece en la lista con su estado de stock calculado.\newline\newline\textbf{CA2:} Dado que el stock de un insumo cambió, cuando lo edito y guardo, entonces el estado (Crítico/Bajo/Normal/Abundante) se recalcula automáticamente. & Must-have & 5 & Sprint 2 \\ \hline
HU-15 & Descuento automático de inventario al crear orden & Como administrador, quiero que al registrar una orden el sistema descuente automáticamente los insumos utilizados, para mantener el inventario actualizado sin intervención manual. & \textbf{CA1:} Dado que se confirma una orden con platos con insumos asociados, cuando el sistema la registra, entonces el stock de cada insumo se reduce según la cantidad usada por plato.\newline\newline\textbf{CA2:} Dado que se registra el descuento, cuando reviso el historial de consumos, entonces aparece un registro con fecha, cantidad y descripción de la orden. & Must-have & 5 & Sprint 2 \\ \hline
HU-16 & Alertas de stock crítico y bajo & Como administrador, quiero recibir alertas visuales cuando un insumo llega a nivel crítico o bajo, para reabastecerlo antes de que afecte las operaciones. & \textbf{CA1:} Dado que el stock cae por debajo del mínimo, cuando accedo a la página de Insumos, entonces ese insumo aparece destacado con un indicador \emph{Crítico} o \emph{Bajo}.\newline\newline\textbf{CA2:} Dado que hay múltiples insumos con stock crítico, cuando veo el panel de alertas, entonces se listan todos los insumos que requieren atención con su nivel actual. & Must-have & 3 & Sprint 2 \\ \hline
HU-17 & Reabastecimiento manual de insumos & Como administrador, quiero registrar el reabastecimiento de un insumo indicando la cantidad recibida, para actualizar el stock y mantener el historial de entradas. & \textbf{CA1:} Dado que recibo una entrega de insumos, cuando ingreso la cantidad a reponer en el formulario, entonces el stock del insumo aumenta por esa cantidad.\newline\newline\textbf{CA2:} Dado que se registra un reabastecimiento, cuando reviso las métricas, entonces el insumo ya no aparece en el panel de alertas si superó el umbral mínimo. & Must-have & 2 & Sprint 2 \\ \hline
HU-18 & Registro manual de consumo de insumos & Como administrador, quiero registrar consumos de insumos fuera de órdenes (mermas, pruebas, limpieza), para tener un historial de consumo completo y preciso. & \textbf{CA1:} Dado que necesito registrar un consumo especial, cuando ingreso la cantidad y descripción, entonces el stock baja y el evento queda en el historial del insumo.\newline\newline\textbf{CA2:} Dado que se registra el consumo, cuando reviso el detalle del insumo, entonces veo el registro con fecha, cantidad, costo estimado y descripción. & Should-have & 2 & Sprint 2 \\ \hline
HU-19 & Métricas de gasto diario en inventario & Como administrador, quiero ver un gráfico de gasto en inventario de los últimos 7 días, para entender los costos operativos y detectar anomalías. & \textbf{CA1:} Dado que estoy en la página de Insumos, cuando accedo a la sección de métricas, entonces veo un gráfico de barras con el gasto por día de los últimos 7 días.\newline\newline\textbf{CA2:} Dado que el gasto de un día es inusualmente alto, cuando reviso el gráfico, entonces puedo identificar fácilmente el día y compararlo con el promedio. & Should-have & 3 & Sprint 2 \\ \hline
HU-23 & Búsqueda y filtrado de insumos & Como administrador, quiero buscar insumos por nombre y filtrarlos por estado de stock, para encontrar rápidamente los insumos que necesito gestionar. & \textbf{CA1:} Dado que hay muchos insumos registrados, cuando escribo parte del nombre en el buscador, entonces la lista se filtra en tiempo real mostrando solo los coincidentes.\newline\newline\textbf{CA2:} Dado que quiero ver solo los insumos críticos, cuando aplico el filtro \emph{Crítico}, entonces la lista muestra únicamente los insumos con ese estado. & Should-have & 2 & Sprint 2 \\ \hline
\caption{Historias de Usuario — Módulo de Gestión de Inventario}
\label{tab:hu_inventario}
\end{longtable}
\endgroup

**5.9 Módulo de Gestión de Empleados**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{0.6cm}|p{1.8cm}|p{2.8cm}|p{4.2cm}|p{1.3cm}|p{0.5cm}|p{0.9cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Título & \bfseries \color{white} Historia de Usuario & \bfseries \color{white} Criterios de Aceptación & \bfseries \color{white} Prioridad & \bfseries \color{white} SP & \bfseries \color{white} Sprint \\ \hline
\endhead
HU-20 & Gestión de empleados desde el dashboard & Como administrador, quiero ver la lista de empleados activos y eliminar cuentas desde el panel de administración, para mantener el control del acceso al sistema. & \textbf{CA1:} Dado que estoy en la sección de Empleados, cuando se carga la lista, entonces veo el nombre, correo, teléfono y rol de cada empleado.\newline\newline\textbf{CA2:} Dado que un empleado ya no trabaja en la cafetería, cuando elimino su cuenta, entonces no puede volver a iniciar sesión con esas credenciales. & Should-have & 2 & Sprint 2 \\ \hline
\caption{Historias de Usuario — Módulo de Gestión de Empleados}
\label{tab:hu_empleados}
\end{longtable}
\endgroup

**5.10 Módulo de Interfaz y Experiencia de Usuario**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{0.6cm}|p{1.8cm}|p{2.8cm}|p{4.2cm}|p{1.3cm}|p{0.5cm}|p{0.9cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Título & \bfseries \color{white} Historia de Usuario & \bfseries \color{white} Criterios de Aceptación & \bfseries \color{white} Prioridad & \bfseries \color{white} SP & \bfseries \color{white} Sprint \\ \hline
\endhead
HU-22 & Modo oscuro / claro en la interfaz & Como cualquier usuario, quiero alternar entre modo oscuro y modo claro, para adaptar la interfaz a las condiciones de iluminación del entorno donde trabajo. & \textbf{CA1:} Dado que estoy usando el sistema en un área poco iluminada, cuando activo el modo oscuro desde la barra de navegación, entonces toda la interfaz cambia a paleta oscura sin recargar la página.\newline\newline\textbf{CA2:} Dado que cambié al modo oscuro, cuando cierro y vuelvo a abrir el navegador, entonces el sistema recuerda mi preferencia y mantiene el tema seleccionado. & Should-have & 2 & Sprint 2 \\ \hline
\caption{Historias de Usuario — Módulo de Interfaz y Experiencia de Usuario}
\label{tab:hu_interfaz}
\end{longtable}
\endgroup

**5.11 Funcionalidades Futuras (No Asignadas)**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{0.6cm}|p{1.8cm}|p{2.8cm}|p{4.2cm}|p{1.3cm}|p{0.5cm}|p{1.0cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Título & \bfseries \color{white} Historia de Usuario & \bfseries \color{white} Criterios de Aceptación & \bfseries \color{white} Prioridad & \bfseries \color{white} SP & \bfseries \color{white} Sprint \\ \hline
\endhead
HU-24 & Notificaciones de stock bajo en tiempo real & Como administrador, quiero recibir notificaciones emergentes cuando se detecta un insumo por debajo del mínimo después de una orden, para reaccionar de inmediato sin revisar el inventario manualmente. & \textbf{CA1:} Dado que se confirma una orden y el descuento deja un insumo bajo el mínimo, cuando la orden es procesada, entonces el sistema muestra una notificación \emph{toast} con el nombre del insumo afectado.\newline\newline\textbf{CA2:} Dado que recibo la notificación, cuando la descarto, entonces puedo continuar con la operación normal sin interrupciones. & Could-have & 3 & No asignado \\ \hline
HU-25 & Exportación del historial de órdenes a CSV & Como administrador, quiero exportar el historial de órdenes a un archivo CSV, para analizarlo en herramientas externas de reportes. & \textbf{CA1:} Dado que estoy en la sección de órdenes del Dashboard, cuando hago clic en \emph{Exportar CSV}, entonces se descarga un archivo con todas las órdenes con fecha, mesa, cliente, ítems y total.\newline\newline\textbf{CA2:} Dado que aplico un filtro por fecha antes de exportar, cuando descargo el archivo, entonces solo contiene las órdenes del rango seleccionado. & Could-have & 5 & No asignado \\ \hline
HU-26 & App móvil nativa para meseros & Como mesero, quiero una aplicación móvil nativa (iOS/Android) para tomar órdenes desde mi celular, para no depender de una tablet o computadora fija en el salón. & \textbf{CA1:} Dado que descargo la app en mi teléfono, cuando inicio sesión, entonces tengo acceso completo al módulo de mesas y toma de órdenes con interfaz optimizada para pantalla pequeña.\newline\newline\textbf{CA2:} Dado que tomo una orden desde el móvil, cuando la confirmo, entonces aparece en la KDS del barista igual que si se hubiera creado desde la web. & Won't-have & 13 & No asignado \\ \hline
HU-27 & Programa de fidelización de clientes & Como administrador, quiero registrar clientes frecuentes y acumular puntos por compra, para ofrecerles descuentos o beneficios como estrategia de retención. & \textbf{CA1:} Dado que un cliente realiza su quinta compra, cuando el mesero ingresa su teléfono al tomar la orden, entonces el sistema muestra los puntos acumulados y si aplica algún beneficio.\newline\newline\textbf{CA2:} Dado que un cliente canjea sus puntos, cuando el mesero aplica el descuento, entonces la factura refleja el descuento y los puntos son deducidos. & Won't-have & 8 & No asignado \\ \hline
HU-28 & Integración con plataformas de delivery & Como administrador, quiero recibir órdenes de plataformas externas directamente en el POS, para centralizar todas las órdenes en un solo sistema. & \textbf{CA1:} Dado que llega un pedido de una plataforma de delivery, cuando el sistema lo recibe vía webhook, entonces aparece automáticamente en la KDS con la etiqueta de la plataforma de origen.\newline\newline\textbf{CA2:} Dado que la plataforma cambia el estado de la orden, cuando el sistema sincroniza, entonces el estado en el POS se actualiza para reflejar el cambio. & Won't-have & 21 & No asignado \\ \hline
\caption{Historias de Usuario — Funcionalidades Futuras}
\label{tab:hu_futuras}
\end{longtable}
\endgroup

### Diagramas UML

Los diagramas UML del sistema han sido elaborados como evidencia gráfica del diseño funcional y estructural. Se incluyen los siguientes tipos de diagrama:

**Diagramas de Casos de Uso:**

Los diagramas de casos de uso representan las interacciones entre los **cuatro actores** del sistema —Administrador, Cajero/Mesero, Barista/Cocina y Cliente— y las funcionalidades que cada uno puede ejecutar. El sistema se divide en seis áreas funcionales, cada una documentada en un diagrama independiente: _Autenticación_, _Gestión de Personal y Catálogo_, _Inventario y Reportes_, _Operación POS_, _Cocina KDS_ y _Pagos y Facturación_.

**CU-1: Autenticación**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.70\linewidth]{assets/images/uml_casos_uso_01_autenticacion.png}
\caption{Casos de Uso — Autenticación}
\label{diag:cu_autenticacion}
\end{diagrama}

**CU-2: Gestión de Personal y Catálogo**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.75\linewidth]{assets/images/uml_casos_uso_02_gestion_personal_catalogo.png}
\caption{Casos de Uso — Gestión de Personal y Catálogo}
\label{diag:cu_gestion}
\end{diagrama}

**CU-3: Inventario y Reportes**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.70\linewidth]{assets/images/uml_casos_uso_03_inventario_reportes.png}
\caption{Casos de Uso — Inventario y Reportes}
\label{diag:cu_inventario}
\end{diagrama}

**CU-4: Operación POS**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.90\linewidth]{assets/images/uml_casos_uso_04_operacion_pos.png}
\caption{Casos de Uso — Operación POS}
\label{diag:cu_pos}
\end{diagrama}

**CU-5: Cocina KDS**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.65\linewidth]{assets/images/uml_casos_uso_05_cocina_kds.png}
\caption{Casos de Uso — Cocina KDS}
\label{diag:cu_kds}
\end{diagrama}

**CU-6: Pagos y Facturación**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.75\linewidth]{assets/images/uml_casos_uso_06_pagos_facturacion.png}
\caption{Casos de Uso — Pagos y Facturación}
\label{diag:cu_pagos}
\end{diagrama}

**Diagrama de Clases:**

El diagrama de clases expone la estructura estática del modelo de dominio del sistema. Las entidades principales son: \texttt{User} (personal con roles Admin / Cashier / Barista), \texttt{Category} y \texttt{Dish} (catálogo del menú), \texttt{Table} (mesas con estados), \texttt{Order} (transacciones con tipo \texttt{DINE\_IN} o \texttt{TAKEAWAY}), \texttt{OrderItem} (ítems embebidos), \texttt{Payment} (cobros en efectivo o \textit{Binance Pay}), \texttt{Insumo} (inventario con estados de stock) y \texttt{ConsumptionLog} (bitácora de descuentos). Las relaciones de cardinalidad siguen la lógica transaccional: un \texttt{User} crea múltiples \texttt{Order}; una \texttt{Order} contiene uno o más \texttt{OrderItem}; una \texttt{Order} genera un \texttt{Payment}; las \texttt{Table} solo se asignan a órdenes de tipo en local.

\begin{diagrama}[H]
\centering
\includegraphics[width=1.0\linewidth]{assets/images/uml_clases.png}
\caption{Diagrama de Clases — Modelo de Dominio del Sistema POS}
\label{diag:clases}
\end{diagrama}

**Diagramas de Actividades:**

El proceso de venta transaccional (TPS) se documenta en tres diagramas de actividades independientes, organizados por etapa del flujo. Cada diagrama utiliza _swimlanes_ para distinguir la responsabilidad de cada actor o componente. El flujo completo va desde la toma de orden hasta la emisión del comprobante de pago.

**ACT-1: Toma de Orden**

Cubre la interacción inicial entre el cliente y el cajero, la clasificación del pedido (en local o para llevar), la construcción del carrito y el registro de la orden en el sistema con descuento automático de inventario.

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/images/uml_actividades_01_toma_orden.png}
\caption{Diagrama de Actividades — Toma de Orden}
\label{diag:act_toma_orden}
\end{diagrama}

**ACT-2: Preparación en Cocina (KDS)**

Modela el ciclo de vida de la orden en cocina: desde la notificación a la pantalla KDS hasta la entrega al cliente por parte del cajero, pasando por los cambios de estado \texttt{PREPARING} → \texttt{READY}.

\begin{diagrama}[H]
\centering
\includegraphics[width=0.80\linewidth]{assets/images/uml_actividades_02_preparacion_cocina.png}
\caption{Diagrama de Actividades — Preparación en Cocina (KDS)}
\label{diag:act_cocina}
\end{diagrama}

**ACT-3: Proceso de Pago y Facturación**

Detalla el cobro al cliente con dos caminos alternativos: efectivo (con cálculo de vuelto) o \textit{Binance Pay} (con verificación asíncrona vía API). Finaliza con el registro del pago, liberación de mesa y generación del comprobante.

\begin{diagrama}[H]
\centering
\includegraphics[width=0.82\linewidth]{assets/images/uml_actividades_03_proceso_pago.png}
\caption{Diagrama de Actividades — Proceso de Pago y Facturación}
\label{diag:act_pago}
\end{diagrama}


## Diseño del sistema

### Arquitectura del sistema — Modelo C4

El diseño arquitectónico del Sistema POS para la cafetería se documenta utilizando el **Modelo C4** (_Context, Containers, Components, Code_), un estándar de representación jerárquica que permite comunicar la arquitectura de software a diferentes audiencias —desde la gerencia hasta los desarrolladores— con el nivel de detalle apropiado para cada una [@brown2018].

#### Nivel 1 — Diagrama de Contexto (_System Context_)

El Diagrama de Contexto es la vista de más alto nivel. Su propósito es mostrar el sistema como una caja negra y situar al lector en el entorno donde opera: quiénes interactúan con él y con qué sistemas externos se conecta.

**Actores (usuarios del sistema):**

- **Administrador:** Interactúa con el sistema a través de un navegador web en su estación de trabajo. Sus acciones se centran en la gestión del catálogo de productos, empleados, inventario y en la consulta de reportes financieros.
- **Cajero / Mesero:** Interactúa con el sistema a través de la interfaz táctil del POS. Registra órdenes (en local y para llevar), gestiona el estado de las mesas y procesa los cobros en efectivo o mediante _Binance Pay_.
- **Barista / Cocina:** Accede a la pantalla KDS (_Kitchen Display System_) para visualizar las órdenes entrantes y actualizar su estado de preparación en tiempo real.
- **Cliente:** Actor externo que interactúa con el sistema a través del cajero. Puede solicitar consumo en el establecimiento (en local) o un pedido para llevar (_takeaway_), y elegir pagar en efectivo o con _Binance Pay_.

**El sistema central:**

- **Sistema POS Web — Cafetería (La Paz, Bolivia):** Plataforma web construida sobre la arquitectura MERN, que centraliza la gestión de transacciones, usuarios, productos, mesas e inventario del establecimiento. Soporta dos modalidades de pedido: en local (con asignación de mesa) y para llevar (sin mesa).

**Sistemas externos:**

- **Binance Pay (Pasarela de Pagos Cripto):** Pasarela de pagos digital que procesa y verifica transacciones en criptomonedas (USDT / BNB). Sustituye al sistema de pagos anterior y permite al cliente pagar de forma digital sin efectivo, mediante verificación de transacción vía API REST de Binance Pay.
- **Servicio de Hosting Cloud (AWS EC2 / DigitalOcean):** Infraestructura de nube donde se despliegan los contenedores Docker que alojan la API y la base de datos del sistema.

**Relaciones clave en este nivel:**

El _Administrador_, el _Cajero_ y el _Barista_ acceden al Sistema POS a través del protocolo HTTPS desde sus respectivos navegadores. El _Cliente_ interactúa con el sistema a través del cajero para realizar su pedido. El Sistema POS se comunica con _Binance Pay_ mediante llamadas HTTP/REST para iniciar y verificar cobros digitales, y reside desplegado en el _Servicio de Hosting Cloud_.

\begin{diagrama}[H]
\centering
\includegraphics[width=0.95\linewidth]{assets/images/c4_nivel1_contexto.png}
\caption{C4 — Nivel 1: Diagrama de Contexto del Sistema POS Cafetería}
\label{diag:c4_nivel1}
\end{diagrama}

#### Nivel 2 — Diagrama de Contenedores (_Containers_)

El Diagrama de Contenedores descompone el sistema en sus bloques tecnológicos desplegables de forma independiente. Cada contenedor es una unidad ejecutable (una aplicación, un servicio, una base de datos) con una tecnología concreta.

**Contenedor 1 — Aplicación Web SPA (Frontend)**

\begingroup\small
\begin{longtable}{|p{3cm}|p{9.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Atributo & \bfseries \color{white} Detalle \\ \hline
\endhead
Tecnología & React.js 18 + Redux Toolkit + React Router DOM \\ \hline
Tipo & Single Page Application (SPA) — ejecutada en el navegador \\ \hline
Responsabilidad & Renderizar la interfaz táctil del POS, el panel de administración, la pantalla KDS de cocina y los reportes. Gestionar el estado global de sesión, carrito de órdenes y tipo de pedido (en local / para llevar). \\ \hline
Comunicación & Envía peticiones HTTP/REST en formato JSON a la API Backend a través de \texttt{axios}. Recibe el JWT del backend y lo adjunta en la cabecera \texttt{Authorization} de cada petición subsiguiente. Incluye el campo \texttt{orderType} (\texttt{dine\_in} / \texttt{takeaway}) en cada orden. \\ \hline
\caption{Especificaciones Técnicas del Frontend}
\label{tab:especificaciones_frontend}
\end{longtable}
\endgroup

**Contenedor 2 — API REST (Backend)**

\begingroup\small
\begin{longtable}{|p{3cm}|p{9.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Atributo & \bfseries \color{white} Detalle \\ \hline
\endhead
Tecnología & Node.js 20 LTS + Express.js 4 \\ \hline
Tipo & Servidor de API RESTful — desplegado en contenedor Docker (AWS EC2) \\ \hline
Responsabilidad & Exponer los \textit{endpoints} REST (\texttt{/api/user}, \texttt{/api/order}, \texttt{/api/table}, \texttt{/api/payment}, \texttt{/api/category}, \texttt{/api/dish}, \texttt{/api/metric}, \texttt{/api/inventory}). Ejecutar la lógica de negocio, validaciones, cálculos transaccionales, diferenciación de tipo de orden (en local / para llevar) y control de acceso por roles mediante \textit{middlewares} JWT. \\ \hline
Comunicación & Recibe peticiones HTTPS del Frontend. Lee y escribe documentos en MongoDB a través del ODM Mongoose. Invoca la API de \textit{Binance Pay} para procesar y verificar cobros digitales en criptomonedas (USDT / BNB). \\ \hline
\caption{Especificaciones Técnicas del Backend}
\label{tab:especificaciones_backend}
\end{longtable}
\endgroup

**Contenedor 3 — Base de Datos (MongoDB)**

\begingroup\small
\begin{longtable}{|p{3cm}|p{9.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Atributo & \bfseries \color{white} Detalle \\ \hline
\endhead
Tecnología & MongoDB 7 (desplegado en contenedor Docker o MongoDB Atlas) \\ \hline
Tipo & Base de datos NoSQL orientada a documentos \\ \hline
Responsabilidad & Persistir de forma duradera todos los documentos del sistema: usuarios (\texttt{users}), productos (\texttt{products}), mesas (\texttt{tables}), órdenes (\texttt{orders}, con campo \texttt{orderType}: \texttt{dine\_in} / \texttt{takeaway}), pagos (\texttt{payments}, con campo \texttt{method}: \texttt{cash} / \texttt{binance\_pay}) e insumos (\texttt{inventory}). \\ \hline
Comunicación & Solo es accedida directamente por el Backend API a través del driver Mongoose. No expone puertos públicos; es accesible únicamente dentro de la red privada del entorno Docker. \\ \hline
\caption{Especificaciones Técnicas de la Base de Datos}
\label{tab:especificaciones_bd}
\end{longtable}
\endgroup

\begin{diagrama}[H]
\centering
\includegraphics[width=0.95\linewidth]{assets/images/c4_nivel2_contenedores.png}
\caption{C4 — Nivel 2: Diagrama de Contenedores del Sistema POS Cafetería}
\label{diag:c4_nivel2}
\end{diagrama}

#### Nivel 3 — Diagrama de Componentes (_Components_)

El Diagrama de Componentes descompone el interior del contenedor de la **API REST** en sus bloques de código desplegables de forma lógica independiente. Muestra los módulos controladores y de servicio que conforman el servidor Node.js/Express.js, sus responsabilidades individuales y las dependencias entre ellos.

**Componentes del Backend identificados:**

- **JWT Auth Middleware:** Intercepta todas las peticiones entrantes a rutas protegidas. Verifica y desencripta el JWT adjunto en la cabecera `Authorization`. Extrae el _payload_ (identidad y rol) y lo adjunta al objeto `req.user`. Bloquea el acceso si el token es inválido, expirado o el rol no tiene permisos.
- **User Controller & Service** (`/api/user`): Gestiona el ciclo de vida de los empleados: registro con hashing _bcrypt_, autenticación con emisión de JWT firmado, listado del personal activo y eliminación de cuentas.
- **Table Controller & Service** (`/api/table`): Controla el CRUD de mesas físicas y su estado en tiempo real (Disponible / Ocupada / En Uso). Bloquea la eliminación de mesas con órdenes activas.
- **Menu Controller & Service** (`/api/dish`, `/api/category`): Gestiona el catálogo de platos y categorías. Vincula cada plato con sus insumos para el descuento automático de inventario al confirmar órdenes.
- **Order Controller & Service** (`/api/order`): Módulo central del TPS. Registra órdenes con tipo `DINE_IN` (en local, con asignación de mesa) o `TAKEAWAY` (para llevar, sin mesa). Calcula subtotal, impuesto (13 %) y total; actualiza el estado de la mesa si corresponde y dispara el descuento de inventario de forma atómica.
- **KDS Controller & Service** (`/api/order` — vista cocina): Expone la vista filtrada de la pantalla KDS de cocina. Permite al barista actualizar el estado de las órdenes a través del flujo: _Entradas_ → _Preparando_ → _Lista_ → _Completada_.
- **Payment Controller & Service** (`/api/payment`): Procesa el cobro de una orden en efectivo o mediante _Binance Pay_ (USDT / BNB). Invoca la API de _Binance Pay_ para verificar la transacción cripto, registra el pago en la colección `payments`, marca la orden como _Pagada_ y libera la mesa si el pedido fue en local.
- **Inventory Controller & Service** (`/api/inventory`): Gestiona el ciclo de vida de los insumos: CRUD, cálculo automático de estado de stock (Crítico / Bajo / Normal / Abundante), registro de consumos manuales y reabastecimientos.
- **Metrics Controller & Service** (`/api/metric`): Calcula métricas globales mediante consultas agregadas a MongoDB: total de órdenes, ingresos acumulados, platos activos, mesas y gasto diario en inventario de los últimos 7 días.

\begin{diagrama}[H]
\centering
\includegraphics[width=1.0\linewidth]{assets/images/c4_nivel3_componentes.png}
\caption{C4 — Nivel 3: Diagrama de Componentes del Backend (API REST)}
\label{diag:c4_nivel3}
\end{diagrama}

#### Nivel 4 — Diagrama de Código (_Code_)

El Diagrama de Código amplía el módulo de mayor complejidad transaccional del sistema: el **Módulo de Gestión de Órdenes**. Muestra las clases, atributos, métodos y las relaciones de dependencia a nivel de código fuente entre los elementos que participan en el flujo de registro y procesamiento de una orden de venta.

**Clases y entidades principales del módulo:**

- **`OrderController`:** Capa de entrada HTTP. Captura las peticiones REST (`POST /api/order`, `GET`, `PUT`, `DELETE`) y delega la ejecución a `OrderService`. No contiene lógica de negocio.
- **`OrderService`:** Núcleo de la lógica transaccional. Orquesta la creación de órdenes: invoca `calculateTotals()` para calcular subtotal (suma de `item.price × item.qty`), impuesto (13 %) y total; llama a `InventoryService.deductStock()` para descontar insumos; y actualiza el estado de la mesa mediante `TableModel`.
- **`OrderModel`** (_Mongoose Schema_): Documento MongoDB que persiste la transacción. Contiene el tipo de orden (`OrderType`: `DINE_IN` / `TAKEAWAY`), la referencia a la mesa (solo para en local), al cajero creador y un arreglo embebido de `IOrderItem`. Registra el método de pago (`PaymentMethod`: `CASH` / `BINANCE_PAY`), estado y marcas de tiempo.
- **`IOrderItem`** (_Embedded Document_): Subdocumento embebido dentro de `OrderModel`. Almacena la referencia al plato, su nombre al momento de la venta (snapshot inmutable), cantidad, precio unitario y subtotal de línea.
- **`OrderType`** (_Enum_): Diferencia el tipo de pedido: `DINE_IN` (en local, con asignación de mesa) y `TAKEAWAY` (para llevar, sin mesa).
- **`OrderStatus`** (_Enum_): Controla el ciclo de vida de la orden: `PENDING` → `IN_PROGRESS` → `PREPARING` → `READY` → `COMPLETED` / `CANCELLED`.
- **`InventoryService`:** Servicio de soporte invocado por `OrderService`. Itera los ingredientes de cada plato ordenado y reduce el `currentStock` de cada `InsumoModel`. Recalcula el `StockStatus` automáticamente tras cada descuento.
- **`PaymentMethod`** (_Enum_): Define los métodos de pago disponibles: `CASH` (efectivo) y `BINANCE_PAY` (criptomonedas USDT/BNB vía API de Binance Pay).
- **`PaymentService`:** Procesa el cobro según el método seleccionado. Para `BINANCE_PAY`, invoca `verifyBinanceTx()` que llama a la API de Binance Pay para validar el `transactionId` y el monto. Persiste el comprobante en la colección `payments` y marca la orden como `COMPLETED`.
- **`JWTAuthMiddleware`:** Protege las rutas del módulo de órdenes exigiendo un token válido con rol `Admin` o `Cashier`.

\begin{diagrama}[H]
\centering
\includegraphics[width=1.0\linewidth]{assets/images/c4_nivel4_codigo.png}
\caption{C4 — Nivel 4: Diagrama de Código del Módulo de Gestión de Órdenes}
\label{diag:c4_nivel4}
\end{diagrama}

## Diseño de la Base de Datos

### Paradigma de persistencia

El sistema adopta **MongoDB** como motor de base de datos NoSQL orientado a documentos, gestionado a través del ODM (Object Document Mapper) **Mongoose**. Esta elección responde a los requisitos de un TPS moderno: flexibilidad en el esquema para los ítems de la orden (cuyo número varía por transacción), alta velocidad de escritura para el registro de ventas en tiempo real, y soporte nativo para transacciones ACID multi-documento mediante _Sessions_ en MongoDB 4+.

A pesar del paradigma documental, el diseño lógico preserva los principios de integridad referencial relacionales mediante el uso de `ObjectId` y la configuración `ref` de Mongoose, que permiten realizar operaciones de _populate_ (equivalentes a `JOIN`) entre colecciones relacionadas.

### Diccionarios de Datos

#### Colección: `users`

Almacena los registros del personal operativo y administrativo con acceso al sistema.

\begingroup\small
\begin{longtable}{|p{2.2cm}|p{1.5cm}|p{1.8cm}|p{3.5cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Campo & \bfseries \color{white} Tipo & \bfseries \color{white} Requerido & \bfseries \color{white} Descripción & \bfseries \color{white} Notas Técnicas \\ \hline
\endhead
\texttt{\_id} & ObjectId & \centering \textbf{Sí} & Identificador único del documento. & Generado automáticamente por MongoDB. \\ \hline
\texttt{name} & String & \centering \textbf{Sí} & Nombre completo del usuario. & Mínimo 3 caracteres. \\ \hline
\texttt{email} & String & \centering \textbf{Sí} & Dirección de correo electrónico. & Validado con expresión regular. Indexado como \texttt{unique: true}. \\ \hline
\texttt{phone} & Number & \centering \textbf{Sí} & Número de teléfono de contacto. & Debe contener 10 dígitos. \\ \hline
\texttt{password} & String & \centering \textbf{Sí} & Contraseña de acceso al sistema. & Almacenada como \textit{hash} irreversible con \textbf{Bcrypt} (coste: 10). Nunca en texto plano. \\ \hline
\texttt{role} & String & \centering \textbf{Sí} & Rol funcional asignado al usuario. & Valores: \texttt{"Admin"} o \texttt{"Cashier"}. Determina permisos en los \textit{endpoints}. \\ \hline
\texttt{createdAt} & Date & \centering \textbf{Sí} & Fecha y hora de creación del registro. & Generado automáticamente por \texttt{timestamps} de Mongoose. \\ \hline
\texttt{updatedAt} & Date & \centering \textbf{Sí} & Fecha y hora de la última modificación. & Actualizado automáticamente por \texttt{timestamps} de Mongoose. \\ \hline
\caption{Diccionario de datos: Colección Users}
\label{tab:diccionario_users}
\end{longtable}
\endgroup |

#### Colección: `tables`

Gestiona la información de las mesas físicas del establecimiento y su estado operativo en tiempo real.

\begingroup\small
\begin{longtable}{|p{2.2cm}|p{1.5cm}|p{1.8cm}|p{3.5cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Campo & \bfseries \color{white} Tipo & \bfseries \color{white} Requerido & \bfseries \color{white} Descripción & \bfseries \color{white} Notas Técnicas \\ \hline
\endhead
\texttt{\_id} & ObjectId & \centering \textbf{Sí} \arraybackslash & Identificador único del documento. & Generado automáticamente por MongoDB. \\ \hline
\texttt{tableNo} & Number & \centering \textbf{Sí} \arraybackslash & Número identificador de la mesa. & Configurado como \texttt{unique: true}. No pueden existir dos mesas con el mismo número. \\ \hline
\texttt{status} & String & \centering No \arraybackslash & Estado operativo actual de la mesa. & Valor por defecto: \texttt{"Available"}. Valores posibles: \texttt{"Available"} / \texttt{"Occupied"}. \\ \hline
\texttt{seats} & Number & \centering \textbf{Sí} \arraybackslash & Capacidad máxima de personas de la mesa. & Número entero positivo. Ej: \texttt{4}, \texttt{6}. \\ \hline
\texttt{currentOrder} & ObjectId & \centering No \arraybackslash & Referencia al pedido activo asignado a la mesa. & \textbf{Clave foránea lógica} $\rightarrow$ referencia al documento \texttt{\_id} de la colección \texttt{orders}. Valor \texttt{null} cuando la mesa está disponible. \\ \hline
\caption{Diccionario de datos: Colección Tables}
\label{tab:diccionario_tables}
\end{longtable}
\endgroup

#### Colección: `payments`

Registra los comprobantes de las transacciones financieras procesadas, almacenando los identificadores de seguimiento del sistema de cobros y el estado de cada operación.

\begingroup\small
\begin{longtable}{|p{2.2cm}|p{1.5cm}|p{1.8cm}|p{3.5cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Campo & \bfseries \color{white} Tipo & \bfseries \color{white} Requerido & \bfseries \color{white} Descripción & \bfseries \color{white} Notas Técnicas \\ \hline
\endhead
\texttt{\_id} & ObjectId & \centering \textbf{Sí} \arraybackslash & Identificador único del documento. & Generado automáticamente por MongoDB. \\ \hline
\texttt{paymentId} & String & \centering No \arraybackslash & Identificador de la transacción en el procesador. & ID retornado por el simulador o pasarela externa (ej. \texttt{TXN\_829312}). \\ \hline
\texttt{orderId} & String & \centering No \arraybackslash & Identificador del pedido asociado al pago. & Relación lógica con la colección \texttt{orders}. Almacenado como \texttt{String} para compatibilidad. \\ \hline
\texttt{amount} & Number & \centering No \arraybackslash & Monto total de la transacción. & Valor numérico decimal. Representa el importe cobrado. \\ \hline
\texttt{currency} & String & \centering No \arraybackslash & Código de la moneda de la transacción. & Ej: \texttt{"BOB"}, \texttt{"USD"}. \\ \hline
\texttt{status} & String & \centering No \arraybackslash & Estado de la operación de pago. & Valores posibles: \texttt{"Captured"}, \texttt{"Pending"}, \texttt{"Failed"}. \\ \hline
\texttt{method} & String & \centering No \arraybackslash & Canal o instrumento de pago utilizado. & Ej: \texttt{"Cash"}, \texttt{"Card"}, \texttt{"QR"}, \texttt{"Transfer"}. \\ \hline
\texttt{email} & String & \centering No \arraybackslash & Correo electrónico del pagador. & Utilizado para el envío del comprobante digital. \\ \hline
\texttt{contact} & String & \centering No \arraybackslash & Dato de contacto adicional. & Número de teléfono o contacto del cliente. \\ \hline
\texttt{createdAt} & Date & \centering No \arraybackslash & Fecha y hora de registro del pago. & Generado al momento de procesar el cobro exitoso. \\ \hline
\caption{Diccionario de datos: Colección Payments}
\label{tab:diccionario_payments}
\end{longtable}
\endgroup

#### Colección: `orders`

Constituye el eje central del sistema. Registra cada transacción de venta de forma integral, vinculando los datos del cliente, los productos consumidos, el resumen de facturación, la mesa asignada y el método de pago procesado.

\begingroup\small
\begin{longtable}{|p{2.4cm}|p{1.4cm}|p{1.6cm}|p{3.2cm}|p{4.9cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Campo & \bfseries \color{white} Tipo & \bfseries \color{white} Requerido & \bfseries \color{white} Descripción & \bfseries \color{white} Notas Técnicas \\ \hline
\endhead
\texttt{\_id} & ObjectId & \centering \textbf{Sí} \arraybackslash & Identificador único del documento. & Generado automáticamente por MongoDB. \\ \hline
\texttt{customerDetails} & Object & \centering \textbf{Sí} \arraybackslash & Datos del cliente para quien se abre el pedido. & Objeto anidado: \texttt{name} (String), \texttt{phone} (Number) y \texttt{guests} (Number). \\ \hline
\texttt{orderStatus} & String & \centering \textbf{Sí} \arraybackslash & Estado actual del pedido en el flujo de servicio. & Valores posibles: \texttt{"Pending"}, \texttt{"In Preparation"}, \texttt{"Served"}, \texttt{"Paid"}. \\ \hline
\texttt{orderDate} & Date & \centering No \arraybackslash & Fecha y hora de creación del pedido. & Valor por defecto: \texttt{Date.now()}. \\ \hline
\texttt{bills} & Object & \centering \textbf{Sí} \arraybackslash & Resumen de facturación calculado por el servidor. & Objeto anidado: \texttt{total}, \texttt{tax} y \texttt{totalWithTax}. \\ \hline
\texttt{items} & Array & \centering No \arraybackslash & Lista de productos incluidos en el pedido. & Arreglo de objetos con datos desnormalizados para garantizar la inmutabilidad histórica. \\ \hline
\texttt{table} & ObjectId & \centering No \arraybackslash & Mesa física asignada al pedido. & \textbf{Referencia lógica} $\rightarrow$ vinculada al \texttt{\_id} de la colección \texttt{tables}. \\ \hline
\texttt{paymentMethod} & String & \centering No \arraybackslash & Método de pago utilizado para el cierre. & Ej: \texttt{"Cash"}, \texttt{"Digital Payment"}, \texttt{"QR"}. \\ \hline
\texttt{paymentData} & Object & \centering No \arraybackslash & Metadatos de confirmación de la transacción. & Almacena IDs de seguimiento generados por el simulador o pasarela externa (\texttt{transaction\_id}). \\ \hline
\texttt{createdAt} & Date & \centering \textbf{Sí} \arraybackslash & Fecha y hora de registro del documento. & Generado automáticamente mediante \texttt{timestamps} de Mongoose. \\ \hline
\texttt{updatedAt} & Date & \centering \textbf{Sí} \arraybackslash & Fecha y hora de la última modificación. & Actualizado automáticamente mediante \texttt{timestamps} de Mongoose. \\ \hline
\caption{Diccionario de datos: Colección Orders}
\label{tab:diccionario_orders}
\end{longtable}
\endgroup

### Colección: `dishes`

Almacena la información detallada de los platillos, productos o bebidas disponibles en el menú del restaurante.

\begingroup\small
\begin{longtable}{|p{2.2cm}|p{1.5cm}|p{1.8cm}|p{3.5cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Campo & \bfseries \color{white} Tipo & \bfseries \color{white} Requerido & \bfseries \color{white} Descripción & \bfseries \color{white} Notas Técnicas \\ \hline
\endhead
\texttt{\_id} & ObjectId & \centering \textbf{Sí} & Identificador único del platillo. & Generado automáticamente por MongoDB. \\ \hline
\texttt{name} & String & \centering \textbf{Sí} & Nombre comercial del plato o bebida. & Debe ser único para evitar duplicados en el menú. \\ \hline

\texttt{price} & Number & \centering \textbf{Sí} & Precio de venta al público. & Se almacena como valor numérico (decimal/flotante). \\ \hline

\texttt{category} & ObjectId & \centering \textbf{Sí} & Referencia a la categoría del plato. & Vinculado a la colección \texttt{categories} mediante \textit{Population}. \\ \hline

\texttt{type} & String & \centering \textbf{No} & Clasificación del tipo de producto. & Valor por defecto: \texttt{"General"}. Permite agrupar por etiquetas personalizadas. \\ \hline

\caption{Diccionario de datos: Colección Dishes}
\label{tab:diccionario_dishes}
\end{longtable}
\endgroup

### Colección: `categories`

Esta colección clasifica los productos (ej. Entradas, Platos Fuertes, Bebidas) para facilitar la navegación en el punto de venta y agrupar los platillos por familias.

\begingroup\small
\begin{longtable}{|p{2.2cm}|p{1.5cm}|p{1.8cm}|p{3.5cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Campo & \bfseries \color{white} Tipo & \bfseries \color{white} Requerido & \bfseries \color{white} Descripción & \bfseries \color{white} Notas Técnicas \\ \hline

\endhead
\texttt{\_id} & ObjectId & \centering \textbf{Sí} & Identificador único de la categoría. & Generado automáticamente por MongoDB. \\ \hline
\texttt{name} & String & \centering \textbf{Sí} & Nombre de la categoría. & Indexado como \texttt{unique: true} para evitar duplicidad de nombres. \\ \hline

\texttt{bgColor} & String & \centering \textbf{No} & Color de fondo para la interfaz visual. & Valor por defecto: \texttt{"\#b73e3e"}. Almacenado en formato Hexadecimal. \\ \hline

\texttt{icon} & String & \centering \textbf{No} & Icono o emoji representativo. & Valor por defecto: \texttt{"[icono]"}. Se utiliza para la identificación rápida en el frontend. \\ \hline

\caption{Diccionario de datos: Colección Categories}
\label{tab:diccionario_categories}
\end{longtable}
\endgroup

### Relaciones entre colecciones

El modelo de datos, aunque documental (NoSQL), establece relaciones lógicas explícitas entre las colecciones mediante referencias `ObjectId`, preservando la integridad referencial del sistema TPS:

\begingroup\small
\begin{longtable}{|p{4.5cm}|p{2.5cm}|p{7cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Relación & \bfseries \color{white} Cardinalidad & \bfseries \color{white} Descripción \\ \hline
\endhead
\texttt{users} $\rightarrow$ \texttt{orders} & \centering \textbf{1 : N} \arraybackslash & Un usuario (cajero) puede haber procesado múltiples órdenes a lo largo de su operación. Cada orden registra implícitamente al operador responsable de la sesión activa. \\ \hline
\texttt{tables} $\rightarrow$ \texttt{orders} & \centering \textbf{1 : N} \arraybackslash & Una mesa puede estar asociada a múltiples órdenes a lo largo del tiempo (una por cada servicio). En un momento dado, solo una orden puede estar activa por mesa (\texttt{currentOrder}). \\ \hline
\texttt{tables} $\rightarrow$ \texttt{orders} (activa) & \centering \textbf{1 : 1} \arraybackslash & En tiempo real, la relación entre una mesa y su pedido en curso es uno a uno: el campo \texttt{currentOrder} en \texttt{Table} apunta a exactamente un único documento activo en \texttt{orders}. \\ \hline
\texttt{orders} $\rightarrow$ \texttt{payments} & \centering \textbf{1 : 1} \arraybackslash & Cada orden pagada genera exactamente un registro de pago en la colección \texttt{payments}. La relación se establece a través del campo \texttt{orderId} en \texttt{Payment}. \\ \hline
\caption{Relaciones y Cardinalidad del Modelo de Datos}
\label{tab:relaciones_modelo}
\end{longtable}
\endgroup

## IMPLEMENTACIÓN DE LOS MÓDULOS DEL SISTEMA

### Módulo de Gestión de Procesos

#### Descripción y propósito

El Módulo de Gestión de Procesos constituye el **cimiento operativo** del Sistema POS. Su responsabilidad es la administración de las **entidades maestras** del negocio: el catálogo de **Productos** (el menú de la cafetería) y el inventario de **Mesas** (la infraestructura física del establecimiento). Sin datos correctamente cargados en estas dos entidades, el módulo transaccional del POS no puede operar: no es posible construir una orden sin productos en el menú, ni asignarla a una mesa si estas no están registradas en el sistema.

El acceso a este módulo está **restringido exclusivamente al rol Administrador**, ya que la creación, modificación o eliminación de estos datos maestros afecta directamente la operativa de todos los cajeros del turno.

#### Submódulo: Gestión del Catálogo de Productos

Este submódulo provee las interfaces y los _endpoints_ necesarios para mantener actualizado el menú digital de la cafetería. Implementa las cuatro operaciones CRUD completas sobre la colección `products` de MongoDB:

- **Creación (Create):** El Administrador accede al formulario de alta de producto en el panel de administración de React. Ingresa los atributos del ítem (nombre, descripción, precio, categoría —ej. `"Cafés"`, `"Infusiones"`, `"Postres"`, `"Snacks"`— e imagen). El _frontend_ envía una petición `POST /api/products` al backend, que valida los datos contra el esquema Mongoose del `ProductSchema` antes de insertar el nuevo documento en MongoDB.

- **Lectura (Read):** La interfaz POS del cajero consume el _endpoint_ `GET /api/products` para cargar el catálogo de productos activos, organizados por categoría, que se muestran en la grilla de selección táctil. El Administrador puede consultar el listado completo, incluyendo productos inactivos, desde el panel de gestión.

- **Actualización (Update):** El Administrador puede modificar cualquier atributo de un producto existente (incluyendo su precio) mediante una petición `PUT /api/products/:id`. **Restricción clave de integridad histórica:** la actualización de precios solo afecta a futuras órdenes. Los documentos de órdenes ya cerradas preservan el precio exacto del momento de la venta, gracias a la desnormalización controlada del campo `items` en la colección `orders`.

- **Eliminación lógica (Delete):** En lugar de borrar físicamente el registro, el sistema implementa una **eliminación lógica** mediante un cambio de estado (`active: false`). Esto garantiza que los productos que ya forman parte del historial de ventas sigan siendo referenciables en los reportes, sin aparecer en el menú activo del POS.

#### Submódulo: Gestión de Mesas

Este submódulo administra el registro de las mesas físicas del establecimiento, que son los nodos de anclaje del flujo transaccional del POS. Opera sobre la colección `tables` de MongoDB:

- **Alta de mesa (Create):** El Administrador registra una nueva mesa especificando su número (`tableNo`, único en el sistema) y su capacidad en asientos (`seats`). La mesa se crea con estado inicial `"Available"` y sin orden activa (`currentOrder: null`). Endpoint: `POST /api/tables`.

- **Consulta del panel de mesas (Read):** Los cajeros y el Administrador acceden al _endpoint_ `GET /api/tables` para renderizar el panel visual de estados, que muestra en tiempo real qué mesas están disponibles (`"Available"`) y cuáles están ocupadas con un pedido en curso (`"Occupied"`).

- **Actualización de estado (Update):** El estado de una mesa es actualizado automáticamente por el backend durante el flujo transaccional: se marca como `"Occupied"` al abrir una orden, y vuelve a `"Available"` al confirmar el pago y cerrar la transacción. El Administrador también puede actualizar manualmente el estado o los datos de una mesa a través de `PUT /api/tables/:id`.

- **Baja de mesa (Delete):** La eliminación de una mesa del registro solo está permitida si no tiene una orden activa vinculada (`currentOrder: null`), preservando la integridad referencial del historial.

### Módulo de Usuarios y Roles

#### Descripción y propósito

El Módulo de Usuarios y Roles constituye la **barrera de seguridad** del Sistema TPS. Su función es garantizar que cada actor que interactúe con el sistema sea quien dice ser (_autenticación_) y que solo pueda ejecutar las acciones para las que tiene autorización según su rol (_autorización_). Este módulo implementa un modelo de **Control de Acceso Basado en Roles** (RBAC — _Role-Based Access Control_), diferenciando dos perfiles funcionales: `"Admin"` y `"Cashier"`.

#### Mecanismo de autenticación: JSON Web Tokens (JWT)

El sistema descarta el uso de sesiones basadas en servidor (_server-side sessions_) —que requieren almacenamiento de estado en el backend y presentan problemas de escalabilidad horizontal— en favor de **autenticación sin estado (_stateless_) mediante JWT** [@jones2015].

El flujo de autenticación opera de la siguiente manera:

1. **Solicitud de acceso:** El operador ingresa su correo y contraseña en la pantalla de _login_ de React. El _frontend_ envía una petición `POST /api/auth/login` al backend con las credenciales en el cuerpo del _request_.

2. **Verificación de identidad:** El backend localiza el documento del usuario en la colección `users` a partir del correo electrónico. Utilizando la función `bcrypt.compare()`, compara la contraseña recibida (texto plano) con el _hash_ almacenado en la base de datos. Gracias al diseño de Bcrypt, esta comparación es segura incluso ante ataques de fuerza bruta, ya que el proceso de _hashing_ con un factor de coste de 10 hace computacionalmente costosa la verificación masiva de contraseñas.

3. **Emisión del token:** Si las credenciales son válidas, el backend genera un **JSON Web Token** firmado con una clave secreta (`JWT_SECRET`) almacenada como variable de entorno. El _payload_ del token contiene el `_id` del usuario y su `role` (`"Admin"` o `"Cashier"`), con un tiempo de expiración configurado (ej. `"8h"`, equivalente a un turno de trabajo).

4. **Uso del token:** El _frontend_ almacena el JWT en el estado global de Redux (y opcionalmente en `localStorage`). A partir de ese momento, **cada petición HTTP al backend incluye el token en la cabecera** `Authorization: Bearer <token>`.

5. **Validación en cada petición:** Un _middleware_ de Express (`verifyToken`) intercepta todas las rutas protegidas antes de ejecutar el controlador correspondiente. Deserializa el token usando `jwt.verify()`, extrae el _payload_ y lo adjunta al objeto `req.user`, haciendo disponibles la identidad y el rol del solicitante para los _middlewares_ de autorización subsiguientes.

#### Mecanismo de protección de contraseñas: Bcrypt

El almacenamiento de contraseñas en texto plano es una vulnerabilidad crítica inaceptable en cualquier sistema de producción. El sistema implementa **Bcrypt** como función de _hashing_ adaptativa de contraseñas [@provos1999]:

- **Proceso de registro:** Al crear un nuevo usuario, el backend ejecuta `bcrypt.hash(password, 10)` antes de persistir el documento en MongoDB. Este proceso: (a) genera un _salt_ criptográficamente aleatorio, (b) concatena el _salt_ con la contraseña, y (c) aplica el algoritmo Blowfish iterativamente `2^10 = 1.024` veces, produciendo un _hash_ de 60 caracteres que incluye el _salt_ incrustado. La contraseña original nunca se almacena ni se puede recuperar.

- **Factor de coste adaptativo:** El valor `10` representa el factor de coste (número de rondas de _hashing_). Este parámetro puede incrementarse en futuras versiones del sistema para compensar el aumento de la potencia computacional, manteniendo el algoritmo resistente a ataques por diccionario y fuerza bruta sin modificar el código.

#### Diferenciación de permisos por rol

Los dos roles del sistema tienen accesos claramente delimitados, implementados mediante _middlewares_ de autorización en el backend y renderizado condicional en el frontend:

\begingroup\small
\begin{longtable}{|p{7cm}|p{2.5cm}|p{2.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Acción / Recurso & \bfseries \color{white} Rol \texttt{Admin} & \bfseries \color{white} Rol \texttt{Cashier} \\ \hline
\endhead
Iniciar sesión & \centering SI \arraybackslash & \centering SI \arraybackslash \\ \hline
Operar el módulo POS (crear y cerrar órdenes) & \centering SI \arraybackslash & \centering SI \arraybackslash \\ \hline
Consultar estado de mesas & \centering SI \arraybackslash & \centering SI \arraybackslash \\ \hline
Gestionar catálogo de productos (CRUD) & \centering SI \arraybackslash & \centering NO \arraybackslash \\ \hline
Gestionar mesas (CRUD) & \centering SI \arraybackslash & \centering NO \arraybackslash \\ \hline
Crear, editar o eliminar usuarios & \centering SI \arraybackslash & \centering NO \arraybackslash \\ \hline
Acceder al módulo de reportes financieros & \centering SI \arraybackslash & \centering NO \arraybackslash \\ \hline
Consultar historial completo de ventas & \centering SI \arraybackslash & \centering NO \arraybackslash \\ \hline
Ver únicamente las ventas de su turno & \centering SI \arraybackslash & \centering SI \arraybackslash \\ \hline
\caption{Matriz de Control de Acceso por Roles (RBAC)}
\label{tab:matriz_permisos}
\end{longtable}
\endgroup

**Implementación en el backend:** Un segundo _middleware_ de Express (`verifyRole('Admin')`) se encadena después de `verifyToken` en las rutas sensibles. Si el `req.user.role` no coincide con el rol requerido, el _middleware_ interrumpe la cadena y retorna una respuesta `403 Forbidden` con un mensaje de error descriptivo, sin ejecutar el controlador.

**Implementación en el frontend:** React renderiza condicionalmente los componentes de navegación y las opciones del menú lateral basándose en el rol almacenado en el estado de Redux. Un cajero nunca verá los botones de administración de productos ni el acceso al panel de reportes gerenciales, reduciendo la superficie de error operativo y mejorando la experiencia de usuario.

### Módulo de Transacciones

Núcleo central del sistema TPS para la cafetería, diseñado en React.js para ofrecer una interfaz táctil de alta velocidad y baja fricción en la toma de pedidos (Punto de Venta).

- **Toma de Pedidos (POS):** Interfaz interactiva para seleccionar categorías (Cafés, Infusiones, Postres, Snacks) y agregar productos al carrito de compras con sus respectivas cantidades.
- **Gestión de Mesas y Estados:** Vinculación obligatoria de cada orden a una mesa específica de la cafetería. Control del flujo del pedido cambiando su estado: "En preparación" (barra/cocina), "Servido" y "Pagado".
- **Procesamiento de Pago y Cierre:** Cálculo automático en tiempo real de subtotales, impuestos y total a cobrar. Registro del método de pago (efectivo, tarjeta) e impresión del comprobante o ticket de venta.
- **Historial de transacciones:** Bitácora inmutable en MongoDB de todas las ventas realizadas, asociadas al cajero en turno, con protección contra alteraciones concurrentes.

### Módulo de Reportes

Módulo analítico estadístico que destila la información transaccional operativa de la cafetería para facilitar la toma de decisiones de la gerencia.

- **Dashboard Estadístico:** Panel visual en el _frontend_ que emplea librerías de gráficos (ej. Chart.js o Recharts) para mostrar las métricas clave en tiempo real.
- **Reportes de Ventas:** Consultas agregadas a MongoDB para extraer ingresos diarios, semanales o mensuales.
- **Rendimiento de Productos:** Identificación automática de los productos más vendidos (ej. Capuchino, Croissants) y los de menor rotación en el menú.
- **Exportación de Datos:** Capacidad para generar y descargar los reportes consolidados por cajero o por turnos en formatos limpios como PDF o Excel, facilitando el arqueo de caja y la contabilidad externa.

## Capa Backend Funcional

El _backend_ de la cafetería está desarrollado en **Node.js** con el _framework_ **Express.js**, actuando como una API RESTful robusta, aislada de la interfaz gráfica y conectada a **MongoDB**. Su arquitectura sigue el patrón MVC (Modelo-Vista-Controlador) adaptado a servicios:

- **Conexión BD:** Implementación de la cadena de conexión segura hacia MongoDB utilizando la librería `mongoose` para el modelado de datos mediante esquemas estructurados.
- **Modelos (`Models`):** Representación orientada a documentos de las entidades principales de la cafetería: `UserSchema` (personal operativo y administrativo), `ProductSchema` (menú), `TableSchema` (mesas) y `OrderSchema` (transacciones/ventas).
- **Controladores (`Controllers`):** Funciones que capturan las peticiones HTTP (GET, POST, PUT, DELETE), procesan la lógica central de ventas y devuelven respuestas estandarizadas en formato JSON.
- **Rutas y Servicios (`Routes/Services`):** Definición ordenada de los _endpoints_ de la API (`/api/orders`, `/api/products`, etc.) extrayendo la lógica de negocio a un nivel de servicio para mantener controladores limpios.
- **Capa de Seguridad (`Middlewares`):** Bloques intermedios que protegen rigurosamente las rutas. Incluyen la verificación de autenticidad mediante la validación y desencriptación de JSON Web Tokens (JWT) y la autorización por niveles (Ej. bloqueando a un Cajero de la ruta de borrado de productos).
- **Validaciones:** Uso de librerías en el _backend_ para verificar la integridad de los _payloads_ antes de interactuar con la base de datos (ej. asegurar que una orden recibida contenga obligatoriamente el ID de una mesa válida y al menos un producto).

## Validación y pruebas del sistema

El sistema implementa una estrategia de calidad de software en cuatro niveles, asegurando tanto la corrección técnica del código como la conformidad con los requisitos del negocio. Cada nivel de prueba tiene un alcance, herramientas y responsable definidos.

### Pruebas Unitarias

Las pruebas unitarias verifican el comportamiento correcto de funciones y módulos de forma aislada, sin dependencias externas. En el Sistema POS Cafetería se aplican sobre:

- **Funciones de cálculo:** validación matemática de subtotales, impuesto (13% IVA boliviano) y totales de órdenes.
- **Middlewares de seguridad:** verificación de que `isVerifiedUser` rechaza tokens JWT inválidos, expirados o manipulados.
- **Schemas de validación Zod:** confirmación de que los schemas rechazan _payloads_ malformados antes de llegar a la base de datos.
- **Lógica del orquestador QR (Django):** validación del algoritmo de failover entre proveedores MSC y ZAS y la correcta asignación de slots decimales para identificación de pagos.

**Herramientas:** Jest (Node.js/Express), pytest (Django/Python).

### Pruebas Funcionales

Las pruebas funcionales evalúan que cada funcionalidad del sistema responde correctamente ante entradas válidas e inválidas, verificando el cumplimiento de los criterios de aceptación de cada historia de usuario:

- Flujo completo de autenticación: registro, login, logout y redirección por rol.
- Operaciones CRUD del catálogo: categorías, platos, insumos y mesas.
- Generación y visualización de métricas en el dashboard.
- Flujo de toma de órdenes con cálculo de totales en tiempo real.
- Generación de facturas y comprobantes de pago.
- Filtros de búsqueda en inventario, órdenes y mesas.
- Generación del QR bancario y visualización del cronómetro de expiración.

**Herramientas:** Supertest (pruebas de API REST automatizadas), Postman (colecciones de prueba manuales).

### Pruebas de Integración

Las pruebas de integración verifican la comunicación correcta entre los distintos componentes del sistema: el _frontend_ React, la API Node.js, la base de datos MongoDB, el orquestador Django y los servicios externos (WhatsApp/Groq):

- **Frontend → API:** confirmación de que las peticiones HTTP del cliente son procesadas correctamente por el _backend_ con datos reales de MongoDB.
- **API → Orquestador QR:** verificación del ciclo completo de generación de QR, recepción del webhook de confirmación y actualización de estado de la orden.
- **API → WhatsApp:** comprobación de que los eventos de pago y cambio de estado disparan correctamente las notificaciones al cliente por WhatsApp (Baileys y Meta).
- **API → Groq:** validación de que el chatbot recibe el contexto del menú actualizado y responde correctamente a consultas entrantes.
- **Descuento de inventario:** verificación de que al confirmar una orden se reducen correctamente los stocks de todos los insumos vinculados según la receta de cada plato.

**Herramientas:** Supertest con base de datos de prueba aislada, mocks de los servicios externos (Baileys, Meta, Groq).

### Pruebas de Aceptación

Las pruebas de aceptación son ejecutadas en el entorno de producción desplegado en Oracle Cloud, con datos representativos del negocio real. Validan que el sistema cumple los criterios del _Product Owner_ y los usuarios finales:

- Flujo _end-to-end_ de una jornada completa: apertura de turno → toma de órdenes → preparación en KDS → cobro con QR bancario → cierre de caja.
- Verificación de que todas las notificaciones WhatsApp se reciben en el celular del cliente (QR de pago, confirmación y actualización de estado).
- Confirmación de que el chatbot Groq responde con información actualizada del menú en menos de 3 segundos.
- Validación de que el pipeline CI/CD en Oracle Cloud mediante GitHub Actions completa el despliegue en menos de 5 minutos.

**Herramientas:** Checklist manual con criterios de aceptación definidos en las historias de usuario del _Product Backlog_.

---

Los casos de prueba detallados se presentan a continuación, agrupados por módulo funcional y en correspondencia directa con las historias de usuario. Cada caso especifica el tipo de evaluación, la acción a verificar, el requerimiento funcional asociado y el criterio de éxito esperado.

**6.1 Módulo de Autenticación y Control de Acceso**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{1.2cm}|p{1.8cm}|p{3.5cm}|p{2.0cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID del Caso & \bfseries \color{white} Tipo de Prueba & \bfseries \color{white} Descripción & \bfseries \color{white} Req. Relacionado & \bfseries \color{white} Resultado Esperado \\ \hline
\endhead
CP-10 & Funcional & Iniciar sesión con correo y contraseña válidos desde la pantalla de \emph{login}. & RF-01 & El sistema autentica al usuario, genera un JWT y redirige al \emph{dashboard} correspondiente a su rol asignado. \\ \hline
CP-11 & Funcional & Registrar un nuevo empleado con nombre, correo, teléfono, contraseña y rol asignado. & RF-02 & La cuenta es creada exitosamente y el empleado puede iniciar sesión con las credenciales registradas. \\ \hline
CP-12 & Seguridad & Un usuario con rol de barista intenta acceder a la ruta del panel de administración. & RF-03 & El sistema bloquea el acceso y muestra un mensaje de acceso denegado sin exponer información sensible del sistema. \\ \hline
\caption{Casos de Prueba — Módulo de Autenticación y Control de Acceso}
\label{tab:cp_autenticacion}
\end{longtable}
\endgroup

**6.2 Módulo de Dashboard y Panel de Control**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{1.2cm}|p{1.8cm}|p{3.5cm}|p{2.0cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID del Caso & \bfseries \color{white} Tipo de Prueba & \bfseries \color{white} Descripción & \bfseries \color{white} Req. Relacionado & \bfseries \color{white} Resultado Esperado \\ \hline
\endhead
CP-13 & Funcional & Cargar la página de inicio tras autenticarse como mesero o administrador. & RF-18 & Se visualizan métricas del negocio (ingresos totales, mesas ocupadas) y la lista de órdenes recientes con estado, mesa y hora de creación. \\ \hline
CP-14 & Funcional & Acceder a la pestaña de Métricas globales del sistema como administrador. & RF-18 & Se muestran tarjetas con totales de órdenes, ingresos, platos activos, categorías y mesas, reflejando los datos más recientes del sistema. \\ \hline
\caption{Casos de Prueba — Módulo de Dashboard y Panel de Control}
\label{tab:cp_dashboard}
\end{longtable}
\endgroup

**6.3 Módulo de Gestión de Mesas**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{1.2cm}|p{1.8cm}|p{3.5cm}|p{2.0cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID del Caso & \bfseries \color{white} Tipo de Prueba & \bfseries \color{white} Descripción & \bfseries \color{white} Req. Relacionado & \bfseries \color{white} Resultado Esperado \\ \hline
\endhead
CP-15 & Funcional & Crear una nueva mesa indicando número y capacidad desde el módulo de Mesas. & RF-10 & La mesa aparece en la vista con estado \emph{Disponible} y queda disponible para ser asignada al registrar nuevas órdenes. \\ \hline
CP-16 & Funcional & Visualizar el panel de mesas y aplicar el filtro de estado \emph{En uso}. & RF-10 & Solo se muestran las mesas con órdenes activas, con información actualizada de número, capacidad, estado y nombre del cliente. \\ \hline
\caption{Casos de Prueba — Módulo de Gestión de Mesas}
\label{tab:cp_mesas}
\end{longtable}
\endgroup

**6.4 Módulo de Gestión del Menú**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{1.2cm}|p{1.8cm}|p{3.5cm}|p{2.0cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID del Caso & \bfseries \color{white} Tipo de Prueba & \bfseries \color{white} Descripción & \bfseries \color{white} Req. Relacionado & \bfseries \color{white} Resultado Esperado \\ \hline
\endhead
CP-17 & Funcional & Crear una nueva categoría de menú con nombre, color e ícono desde la sección de Categorías. & RF-16 & La categoría queda registrada y disponible al crear o editar platos, visible como opción en el menú del POS. \\ \hline
CP-18 & Funcional & Crear un nuevo plato asignándole nombre, precio, categoría e insumos requeridos con sus cantidades. & RF-15 & El plato queda registrado en el catálogo activo, visible en el menú y vinculado a los insumos para el descuento automático de inventario. \\ \hline
\caption{Casos de Prueba — Módulo de Gestión del Menú}
\label{tab:cp_menu}
\end{longtable}
\endgroup

**6.5 Módulo de Toma y Gestión de Órdenes**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{1.2cm}|p{1.8cm}|p{3.5cm}|p{2.0cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID del Caso & \bfseries \color{white} Tipo de Prueba & \bfseries \color{white} Descripción & \bfseries \color{white} Req. Relacionado & \bfseries \color{white} Resultado Esperado \\ \hline
\endhead
CP-19 & Integración & Seleccionar una mesa, ingresar datos del cliente, agregar platos al carrito y confirmar la orden desde el módulo de Menú. & RF-04, RF-12 & La orden queda registrada con cálculo automático de subtotal, impuesto y total; aparece en la KDS del barista y en la lista de órdenes activas. \\ \hline
CP-20 & Funcional & Filtrar la lista de órdenes aplicando el estado \emph{En Progreso}. & RF-04 & La lista muestra únicamente las órdenes con ese estado, con información visible de cliente, mesa, ítems y total a cobrar. \\ \hline
\caption{Casos de Prueba — Módulo de Toma y Gestión de Órdenes}
\label{tab:cp_ordenes}
\end{longtable}
\endgroup

**6.6 Módulo de Cocina (KDS)**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{1.2cm}|p{1.8cm}|p{3.5cm}|p{2.0cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID del Caso & \bfseries \color{white} Tipo de Prueba & \bfseries \color{white} Descripción & \bfseries \color{white} Req. Relacionado & \bfseries \color{white} Resultado Esperado \\ \hline
\endhead
CP-21 & Integración & Verificar que una orden recién confirmada por el mesero aparece en la pantalla KDS del barista. & RF-06 & La orden aparece en la pestaña \emph{Entradas} de la KDS con número de mesa, nombre del cliente e ítems con sus cantidades. \\ \hline
CP-22 & Integración & Cambiar el estado de una orden de \emph{Preparando} a \emph{Lista} desde la pantalla KDS. & RF-09 & La orden desaparece de la pestaña de preparación y el mesero puede visualizarla marcada como lista para ser entregada al cliente. \\ \hline
\caption{Casos de Prueba — Módulo de Cocina (KDS)}
\label{tab:cp_kds}
\end{longtable}
\endgroup

**6.7 Módulo de Pagos y Facturación**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{1.2cm}|p{1.8cm}|p{3.5cm}|p{2.0cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID del Caso & \bfseries \color{white} Tipo de Prueba & \bfseries \color{white} Descripción & \bfseries \color{white} Req. Relacionado & \bfseries \color{white} Resultado Esperado \\ \hline
\endhead
CP-23 & Integración & Procesar el pago de una orden mediante \emph{Binance Pay} (USDT / BNB) como método de cobro digital. & RF-13, RF-14 & La orden queda registrada con el \texttt{transactionId} de Binance Pay verificado, el estado cambia a \emph{Pagado} y se habilita la opción de generar la factura. \\ \hline
CP-24 & Aceptación & Generar la factura de una orden pagada y verificar el contenido completo del comprobante. & RF-11 & Se muestra el documento con los ítems, cantidades, subtotal, impuesto y total; se habilita el diálogo de impresión con el formato correcto. \\ \hline
\caption{Casos de Prueba — Módulo de Pagos y Facturación}
\label{tab:cp_pagos}
\end{longtable}
\endgroup

**6.8 Módulo de Gestión de Inventario**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{1.2cm}|p{1.8cm}|p{3.5cm}|p{2.0cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID del Caso & \bfseries \color{white} Tipo de Prueba & \bfseries \color{white} Descripción & \bfseries \color{white} Req. Relacionado & \bfseries \color{white} Resultado Esperado \\ \hline
\endhead
CP-25 & Funcional & Agregar un nuevo insumo con nombre, unidad, stock actual, stock mínimo y costo unitario desde la página de Insumos. & RF-17 & El insumo aparece en la lista con su estado de stock calculado automáticamente (Crítico / Bajo / Normal / Abundante). \\ \hline
CP-26 & Integración & Confirmar una orden con platos que tienen insumos asociados y revisar el estado del inventario. & RF-17 & El stock de cada insumo se reduce según la cantidad usada por plato y el descuento queda registrado en el historial de consumos con fecha y descripción. \\ \hline
CP-27 & Funcional & Reducir el stock de un insumo por debajo del umbral mínimo y acceder al panel de Insumos. & RF-17 & El insumo aparece destacado con indicador \emph{Crítico} o \emph{Bajo} y figura en el panel de alertas con su nivel actual de stock. \\ \hline
CP-28 & Funcional & Registrar el reabastecimiento de un insumo crítico indicando la cantidad recibida en el formulario. & RF-17 & El stock del insumo aumenta correctamente por la cantidad indicada; si supera el umbral mínimo, desaparece del panel de alertas. \\ \hline
CP-29 & Funcional & Buscar insumos escribiendo parte del nombre en el buscador y aplicar el filtro por estado \emph{Crítico}. & RF-17 & La lista se filtra en tiempo real mostrando únicamente los insumos en estado crítico cuyo nombre coincide con el texto ingresado. \\ \hline
\caption{Casos de Prueba — Módulo de Gestión de Inventario}
\label{tab:cp_inventario}
\end{longtable}
\endgroup

**6.9 Módulo de Gestión de Empleados**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{1.2cm}|p{1.8cm}|p{3.5cm}|p{2.0cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID del Caso & \bfseries \color{white} Tipo de Prueba & \bfseries \color{white} Descripción & \bfseries \color{white} Req. Relacionado & \bfseries \color{white} Resultado Esperado \\ \hline
\endhead
CP-30 & Funcional & Eliminar la cuenta de un empleado desde la sección de Empleados del panel de administración. & RF-02 & La cuenta es eliminada del sistema y el empleado ya no puede iniciar sesión con esas credenciales en ningún rol. \\ \hline
\caption{Casos de Prueba — Módulo de Gestión de Empleados}
\label{tab:cp_empleados}
\end{longtable}
\endgroup

**6.10 Módulo de Interfaz y Experiencia de Usuario**

\begingroup\scriptsize\setlength{\tabcolsep}{5pt}
\begin{longtable}{|p{1.2cm}|p{1.8cm}|p{3.5cm}|p{2.0cm}|p{4.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID del Caso & \bfseries \color{white} Tipo de Prueba & \bfseries \color{white} Descripción & \bfseries \color{white} Req. Relacionado & \bfseries \color{white} Resultado Esperado \\ \hline
\endhead
CP-31 & Usabilidad & Activar el modo oscuro desde la barra de navegación, cerrar el navegador y volver a abrirlo. & RNF-07 & La interfaz cambia a paleta oscura sin recargar la página y el sistema mantiene la preferencia seleccionada al volver a abrir el navegador. \\ \hline
\caption{Casos de Prueba — Módulo de Interfaz y Experiencia de Usuario}
\label{tab:cp_interfaz}
\end{longtable}
\endgroup

\newpage

## Desarrollo del Prototipo Funcional

El prototipo funcional del Sistema TPS POS Cafetería fue construido e iterado a lo largo de cuatro Sprints bajo el marco Scrum. El resultado es un sistema web completamente operativo, desplegado en producción sobre un servidor Ubuntu alojado en **Oracle Cloud Infrastructure**, con entrega continua automatizada mediante **GitHub Actions** en cada push a la rama `main`.

### Funcionalidades Implementadas

**Sprint 1 — Base del sistema**

Se implementaron los módulos core del sistema: autenticación con JWT y control de acceso por roles (Administrador, Mesero, Barista, Cajero), el panel POS táctil para toma de órdenes con carrito en tiempo real, la gestión visual de mesas con actualización vía WebSocket, y el módulo de administración del catálogo (categorías y platos con CRUD completo). Al finalizar el Sprint 1 el sistema era funcional para el ciclo básico: login → seleccionar mesa → tomar orden → visualizar en cocina.

**Sprint 2 — Módulos avanzados**

Se desarrollaron el display de cocina KDS con pestañas por estado (Entradas, Preparando, Listo), el módulo de gestión de inventario con descuento automático de insumos al confirmar órdenes, alertas visuales de stock crítico/bajo y gráfico de gasto semanal, la gestión de empleados desde el panel del administrador, el modo oscuro/claro persistente y las métricas globales del dashboard.

**Sprint 3 — Integraciones externas**

Se integró el **orquestador de pagos QR** desarrollado en **Django 5**, que genera códigos QR reales de bancos bolivianos (Mercantil Santa Cruz y Banco Ganadero) mediante ADB, con failover automático entre proveedores. Se implementó el módulo de **WhatsApp** con dos providers intercambiables: Baileys (WhatsApp Web, sin cuenta de negocio) y Meta Cloud API, para enviar el QR de pago, confirmaciones y actualizaciones de estado al cliente. Se integró el **chatbot IA con Groq** (modelo Llama 3.1 8B Instant) para responder consultas del menú por WhatsApp en tiempo real.

**Sprint 4 — Despliegue en producción**

Se aprovisionó el servidor en **Oracle Cloud Infrastructure** con Nginx como proxy inverso, PM2 como gestor de procesos para Node.js y systemd para el orquestador Django. Se configuró el pipeline de **GitHub Actions** que automatiza en cada push a `main`: build del frontend React, sincronización del código al servidor vía `rsync` sobre SSH y reinicio del proceso con `pm2 restart`.

### Evidencias del Sistema

A continuación se presentan capturas de pantalla del sistema funcional desplegado en producción. En cada sección se indica el rol que accede a la funcionalidad y el módulo al que corresponde.

**Pantalla de Login — Autenticación**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/images/screenshots/login.png}
\caption{Pantalla de inicio de sesión — ingreso de credenciales y selección de rol}
\label{diag:ss_login}
\end{diagrama}

**Dashboard del Administrador — Métricas globales**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/images/screenshots/dashboard_admin.png}
\caption{Dashboard administrativo — métricas de ingresos totales, órdenes activas, mesas ocupadas y platos}
\label{diag:ss_dashboard}
\end{diagrama}

**Panel de Mesas — Estado en tiempo real**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/images/screenshots/panel_mesas.png}
\caption{Panel visual de mesas — tarjetas con estado Disponible, Ocupada y filtro por estado}
\label{diag:ss_mesas}
\end{diagrama}

**Interfaz POS — Toma de órdenes**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/images/screenshots/pos_orden.png}
\caption{Interfaz POS táctil — selección de productos por categoría, carrito con cálculo automático de totales}
\label{diag:ss_pos}
\end{diagrama}

**Pantalla KDS — Cocina**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/images/screenshots/kds_cocina.png}
\caption{Display de cocina KDS — órdenes organizadas por estado con cambio de fase por el barista}
\label{diag:ss_kds}
\end{diagrama}

**Módulo de Inventario — Gestión de insumos**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/images/screenshots/inventario.png}
\caption{Módulo de inventario — lista de insumos con indicadores de stock crítico/bajo y panel de alertas}
\label{diag:ss_inventario}
\end{diagrama}

**Pago QR Bancario — Generación y cobro**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/images/screenshots/pago_qr.png}
\caption{Módulo de pago QR — código QR bancario boliviano generado con cronómetro de expiración y estado en tiempo real}
\label{diag:ss_qr}
\end{diagrama}

**Panel del Orquestador Django — Historial de pagos**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/images/screenshots/orquestador_qr.png}
\caption{Panel web del orquestador Django (:8500) — historial de pagos QR con estado, proveedor bancario y monto}
\label{diag:ss_orquestador}
\end{diagrama}

**Panel de WhatsApp — Administración**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/images/screenshots/whatsapp_panel.png}
\caption{Panel de administración WhatsApp — estado del provider, QR de conexión Baileys y opciones de gestión}
\label{diag:ss_whatsapp}
\end{diagrama}

**Notificación WhatsApp al cliente**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/images/screenshots/whatsapp_notificacion.png}
\caption{Notificación WhatsApp al cliente — imagen del QR de pago con monto, banco y tiempo estimado de expiración}
\label{diag:ss_wa_notif}
\end{diagrama}

**Chatbot Groq en WhatsApp**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/images/screenshots/chatbot_groq.png}
\caption{Chatbot IA con Groq — respuestas automáticas a consultas del menú recibidas por WhatsApp}
\label{diag:ss_chatbot}
\end{diagrama}

**Pipeline CI/CD — GitHub Actions**

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/images/screenshots/github_actions.png}
\caption{Pipeline de despliegue en GitHub Actions — pasos de build, rsync y reinicio PM2 en servidor Oracle Cloud}
\label{diag:ss_cicd}
\end{diagrama}

\newpage

## Documentación de Ingeniería Completa

Esta sección consolida toda la documentación técnica y funcional producida durante el proyecto, cumpliendo los requisitos de documentación de ingeniería de software establecidos por la cátedra.

### Documentación Funcional

**Documento de Especificación de Requisitos (SRS)**

El documento SRS del sistema se estructura en las siguientes secciones, todas desarrolladas en el presente informe:

- **Propósito y alcance:** Sistema POS web para cafetería en La Paz, Bolivia, orientado a reemplazar el registro manual de pedidos y los cálculos de caja manuales. Usuarios objetivo: Administrador y personal operativo (mesero, barista, cajero).
- **Descripción general del sistema:** Arquitectura MERN (MongoDB, Express, React, Node.js) con servicios adicionales para pagos QR (Django), notificaciones WhatsApp (Baileys/Meta) e IA conversacional (Groq).
- **Restricciones:** Sistema web exclusivo (requiere navegador moderno), autenticación interna con JWT (sin OAuth externo), base de datos NoSQL (MongoDB), sin integración con sistemas tributarios gubernamentales en esta fase.

**Relevamiento de la Información**

El levantamiento de requerimientos se realizó mediante tres técnicas complementarias: (1) **entrevistas** con el administrador y el personal de caja para extraer requerimientos funcionales precisos y métricas requeridas en los reportes; (2) **observación directa** durante las horas pico para mapear el flujo real de trabajo, los tiempos de atención y la comunicación entre caja y barra; (3) **análisis documental** de los registros físicos existentes (comandas, libretas de contabilidad, inventarios manuales) como base para diseñar los esquemas de datos.

**Requerimientos Funcionales y No Funcionales**

Los 20 requerimientos funcionales (RF-01 a RF-20) y 9 no funcionales (RNF-01 a RNF-09) se encuentran especificados en detalle en la Sección **Determinación de requerimientos** del presente documento, con descripción, módulo asociado y prioridad (Must-have / Should-have / Could-have).

**Historias de Usuario**

El _Product Backlog_ del sistema comprende **33 historias de usuario** (HU-01 a HU-33), totalizando **159 story points**. Se organizan en once módulos funcionales (Autenticación, Dashboard, Mesas, Menú, Órdenes, Cocina KDS, Pagos y Facturación, Inventario, Empleados, Interfaz UX) y tres integraciones externas (Pagos QR Django, WhatsApp, Groq IA), distribuidas en cuatro Sprints de dos semanas cada uno. Las historias completas con criterios de aceptación en formato Dado/Cuando/Entonces se presentan en la Sección **Historias de Usuario** del presente documento.

**Casos de Uso**

Se elaboraron seis diagramas UML de casos de uso que cubren todos los actores del sistema (Administrador, Mesero, Barista, Cajero, Cliente): CU-1 Autenticación, CU-2 Gestión de Personal y Catálogo, CU-3 Inventario y Reportes, CU-4 Operación POS, CU-5 Cocina KDS, CU-6 Pagos y Facturación. Los diagramas en formato PlantUML y sus imágenes PNG se encuentran en `Informe/assets/images/`.

### Documentación Técnica

**Arquitectura del Sistema**

El sistema sigue el patrón **Cliente-Servidor** con los siguientes componentes desplegados en Oracle Cloud Infrastructure:

\begingroup\small
\begin{longtable}{|p{3cm}|p{4cm}|p{6cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Componente & \bfseries \color{white} Tecnología & \bfseries \color{white} Responsabilidad \\ \hline
\endhead
Frontend & React 18 + Vite + Tailwind & SPA táctil, gestión de estado con Redux Toolkit \\ \hline
Backend API & Node.js 20 + Express.js & API RESTful, lógica de negocio, WebSocket \\ \hline
Base de datos & MongoDB + Mongoose & Persistencia de documentos, transacciones ACID \\ \hline
Orquestador QR & Django 5 + SQLite + ADB & Generación de QR bancario, failover, webhooks \\ \hline
WhatsApp & Baileys / Meta Cloud API & Notificaciones y chatbot \\ \hline
IA Chatbot & Groq API (Llama 3.1) & Respuestas automáticas sobre el menú \\ \hline
Proxy & Nginx & Reverse proxy, certificado SSL, archivos estáticos \\ \hline
Proceso Node & PM2 & Gestión y monitoreo del proceso en producción \\ \hline
CI/CD & GitHub Actions & Build, rsync y despliegue automático \\ \hline
\caption{Componentes de arquitectura del sistema}
\label{tab:arquitectura_componentes}
\end{longtable}
\endgroup

La documentación de arquitectura completa, incluyendo el modelo C4 en cuatro niveles (Contexto, Contenedores, Componentes y Código), se presenta en la Sección **Diseño del sistema** del presente informe.

**Diagramas UML**

Se elaboraron los siguientes diagramas UML como evidencia del diseño funcional y estructural:

- **Diagramas de Casos de Uso (6):** CU-1 a CU-6, uno por cada área funcional del sistema.
- **Diagrama de Clases:** estructura de las entidades principales del dominio y sus relaciones.
- **Diagramas de Actividades (3):** flujo de toma de orden, preparación en cocina y proceso de pago QR.

Todos los diagramas están disponibles en formato PlantUML (`.puml`) y como imagen PNG en `Informe/assets/images/`.

**Base de Datos**

El sistema utiliza **MongoDB** como sistema de persistencia principal, con los siguientes modelos documentales: `User`, `Order`, `Table`, `Dish`, `Category`, `Insumo`. El orquestador Django utiliza **SQLite** para persistir el modelo `Payment` del ciclo de vida de los QR bancarios. Los diccionarios de datos completos con tipos, restricciones y relaciones entre colecciones se presentan en la Sección **Diseño de la Base de Datos** del presente informe.

**API REST**

La API del backend expone los siguientes grupos de endpoints, todos bajo el prefijo `/api`:

\begingroup\small
\begin{longtable}{|p{3.5cm}|p{4cm}|p{5.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Grupo & \bfseries \color{white} Prefijo & \bfseries \color{white} Operaciones principales \\ \hline
\endhead
Autenticación & \texttt{/api/user} & Registro, login, logout, listar, eliminar \\ \hline
Órdenes & \texttt{/api/order} & Crear, listar, actualizar, confirmar pago \\ \hline
Pagos QR & \texttt{/api/payment/qr} & Crear QR, estado, cancelar, webhook, enviar por WA \\ \hline
Mesas & \texttt{/api/table} & CRUD completo + estados en tiempo real \\ \hline
Catálogo & \texttt{/api/category, /api/dish} & CRUD de categorías y platos \\ \hline
Inventario & \texttt{/api/insumo} & CRUD, consumo manual, reposición de stock \\ \hline
WhatsApp & \texttt{/api/whatsapp} & Estado, QR, test, logout, switch-provider, webhooks \\ \hline
Métricas & \texttt{/api/metric} & Dashboard: ventas, ingresos, órdenes \\ \hline
Groq & \texttt{/api/groq} & Endpoints del chatbot IA \\ \hline
\caption{Grupos de endpoints de la API REST}
\label{tab:api_grupos}
\end{longtable}
\endgroup

Todas las rutas marcadas como protegidas requieren la cookie `token` con un JWT válido. La autorización por rol se aplica a nivel de middleware en el backend.

### Documentación del Sistema

**Manual de Usuario**

El manual de usuario describe, en lenguaje no técnico, los flujos de operación del sistema para cada rol:

- **Administrador:** gestión del catálogo (altas, bajas y modificaciones de platos, categorías e insumos), administración de empleados, visualización de métricas y reportes, configuración del servicio WhatsApp y consulta del historial de pagos QR.
- **Mesero:** selección de mesa, toma de órdenes con el POS táctil, visualización del estado de las órdenes y notificación al cliente.
- **Barista:** operación de la pantalla KDS, avance del estado de preparación de pedidos.
- **Cajero:** procesamiento del cobro, generación del QR bancario, envío del QR al cliente por WhatsApp y generación de la factura/comprobante.

**Manual Técnico**

Describe la configuración, variables de entorno y dependencias del sistema para administradores técnicos. El contenido completo se encuentra en el archivo `descripcion.md` del repositorio y cubre: stack tecnológico, configuración de entornos (`.env` del backend, frontend y orquestador), instalación local, estructura de carpetas, roles de usuario y flujos principales del sistema.

**Manual de Instalación y Despliegue**

El aprovisionamiento de un servidor nuevo se realiza ejecutando `bash deploy/setup-server.sh`. El pipeline completo de despliegue en producción está documentado en `.github/workflows/deploy.yml` e incluye los _secrets_ de GitHub necesarios (`SSH_PRIVATE_KEY`, `SSH_HOST`, `SSH_USER`, `QR_API_URL`). La configuración de Nginx se encuentra en `deploy/nginx.conf`.

### Documentación del Código

**Estructura del Proyecto**

El repositorio `proyecto-sis213` se organiza en cuatro módulos principales:

\begingroup\small
\begin{longtable}{|p{3.5cm}|p{9.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Directorio & \bfseries \color{white} Contenido \\ \hline
\endhead
\texttt{pos-backend/} & API REST Node.js/Express: controladores, rutas, modelos Mongoose, middlewares JWT, servicios WhatsApp/Groq/QR, WebSocket \\ \hline
\texttt{pos-frontend/} & SPA React 18: páginas, componentes por dominio, Redux slices, hooks, configuración Axios \\ \hline
\texttt{api\_generador\_qr/} & Orquestador Django: modelos Payment, servicios de generación QR por banco, ADB, decoder OpenCV/pyzbar \\ \hline
\texttt{deploy/} & Configuración Nginx, script de aprovisionamiento del servidor y pipeline GitHub Actions \\ \hline
\caption{Estructura de directorios del repositorio}
\label{tab:estructura_dirs}
\end{longtable}
\endgroup

**Librerías y Dependencias Principales**

\begingroup\small
\begin{longtable}{|p{2.5cm}|p{2.5cm}|p{8cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Capa & \bfseries \color{white} Librería & \bfseries \color{white} Propósito \\ \hline
\endhead
Backend & express & Framework HTTP, enrutamiento RESTful \\ \hline
Backend & mongoose & ODM para MongoDB, schemas y validaciones \\ \hline
Backend & jsonwebtoken & Generación y verificación de JWT \\ \hline
Backend & bcrypt & Hash irreversible de contraseñas \\ \hline
Backend & zod & Validación de schemas de request body \\ \hline
Backend & @whiskeysockets/baileys & WhatsApp Web reverse-engineered \\ \hline
Backend & ws & WebSocket para eventos en tiempo real \\ \hline
Frontend & react 18 + vite & SPA con compilación optimizada \\ \hline
Frontend & @reduxjs/toolkit & Gestión de estado global \\ \hline
Frontend & @tanstack/react-query & Fetching y caché de datos del servidor \\ \hline
Frontend & tailwindcss & Framework de estilos utilitario \\ \hline
Orquestador & django 5 & Framework web Python para el orquestador QR \\ \hline
Orquestador & pyzbar + opencv & Decodificación de QR desde pantalla bancaria \\ \hline
IA & groq & SDK oficial de Groq API (Llama 3.1) \\ \hline
\caption{Librerías y dependencias principales del sistema}
\label{tab:dependencias}
\end{longtable}
\endgroup

\newpage

# CONCLUSIONES Y RECOMENDACIONES

## Conclusiones

### Desarrollo del Sistema TPS

Se desarrolló exitosamente un **prototipo funcional de un Sistema de Información Organizacional Web basado en el enfoque de Procesamiento de Transacciones (TPS)** para la gestión operativa de una cafetería. El sistema reemplaza íntegramente los procesos manuales de la organización —registro de pedidos en papel, cálculos mentales y arqueos de caja sin respaldo digital— por un flujo digital, trazable e inmutable que cubre el ciclo completo de servicio: desde el inicio de sesión del operador hasta la emisión del comprobante de pago y la actualización del inventario.

El prototipo fue desarrollado sobre el _stack_ MERN (MongoDB, Express.js, React.js, Node.js), con servicios adicionales para pagos QR bancarios (orquestador Django), notificaciones al cliente (WhatsApp mediante Baileys y Meta Cloud API) e inteligencia artificial conversacional (chatbot Groq con modelo Llama 3.1 8B). La arquitectura implementada garantiza las propiedades ACID en las transacciones críticas de venta mediante sesiones de MongoDB, y el sistema fue desplegado en producción sobre infraestructura **Oracle Cloud Infrastructure** con entrega continua automatizada por **GitHub Actions**.

### Módulos Implementados

El sistema entrega los siguientes módulos completamente funcionales e integrados:

- **Módulo de Autenticación y Control de Acceso (RBAC):** cinco roles diferenciados (Administrador, Mesero, Barista, Cajero, Cliente) con JWT en cookies _httpOnly_ y middleware de autorización en todas las rutas protegidas del _backend_.
- **Módulo POS — Toma de Órdenes:** interfaz táctil con selección de mesa, carrito dinámico con cálculo de totales en tiempo real, soporte para órdenes _dine-in_ y _takeaway_.
- **Módulo de Gestión de Mesas:** panel visual de estados con actualización en tiempo real mediante WebSocket, con restricciones de integridad referencial.
- **Módulo de Cocina KDS:** display de preparación con flujo de estados (Entradas → Preparando → Listo → Completada), visible en tiempo real por el barista y el mesero.
- **Módulo de Inventario:** control de insumos con descuento automático al confirmar órdenes, alertas de stock crítico/bajo y gráfico de gasto semanal.
- **Módulo de Pagos QR Bancario:** generación de QR real de bancos bolivianos (Mercantil Santa Cruz y Banco Ganadero), con failover automático entre proveedores, confirmación de pago vía webhook y actualización inmutable del estado de la orden.
- **Módulo WhatsApp:** envío de QR de pago, confirmaciones y actualizaciones de estado al cliente, con soporte para dos providers intercambiables en tiempo de ejecución.
- **Chatbot IA:** respuestas automáticas a consultas del menú por WhatsApp, con contexto del catálogo activo actualizado en tiempo real.
- **Módulo de Facturación:** generación de comprobantes de pago con detalle de ítems, subtotal, impuesto y total, habilitados para impresión directa.
- **Módulo de Reportes y Métricas:** dashboard con indicadores financieros clave (ingresos totales, órdenes por estado, platos más vendidos, empleados activos).

### Cumplimiento de Objetivos

El desarrollo del sistema cumplió todos los objetivos específicos planteados al inicio del proyecto:

- Se implementó el módulo de gestión de pedidos en tiempo real con la interfaz táctil dinámica construida en React.js.
- Se diseñó e integró el sistema de control de acceso RBAC con autenticación JWT, diferenciando los permisos de todos los roles del sistema.
- Se construyeron las APIs RESTful con Node.js y Express.js conectadas a MongoDB, soportando todas las operaciones CRUD de los módulos del sistema.
- Se implementó el módulo de facturación con cálculo automático del cobro y generación de comprobantes.
- Se desplegó el sistema en infraestructura _cloud_ (Oracle Cloud Infrastructure) con automatización completa del proceso de despliegue mediante GitHub Actions.
- Adicionalmente, se superó el alcance original al integrar el orquestador de pagos QR bancario boliviano, el sistema de notificaciones WhatsApp y el chatbot IA, ofreciendo al negocio capacidades de digitalización que van más allá del ciclo básico de un TPS.

## Recomendaciones

### Mejoras Futuras

Para iteraciones posteriores del sistema se recomienda implementar las siguientes funcionalidades identificadas durante el desarrollo como mejoras de alto impacto:

- **Exportación de reportes financieros a CSV/PDF** desde el módulo de métricas del administrador, permitiendo el análisis de datos en herramientas externas como Excel o Google Sheets.
- **Notificaciones de stock bajo en tiempo real** mediante _toast_ emergente al cajero en el momento en que una orden confirmada deja un insumo por debajo del umbral mínimo.
- **Portal del cliente** con historial de sus órdenes, puntos de fidelización y estado de pedidos activos, accesible desde un enlace enviado por WhatsApp.
- **Programa de fidelización** con acumulación de puntos por compra y aplicación de descuentos en el POS al identificar al cliente por su número de teléfono.
- **Integración con plataformas de delivery** (PedidosYa, Rappi) mediante webhooks para centralizar todas las órdenes —presenciales y remotas— en un único sistema.
- **Aplicación móvil nativa** (React Native / Expo) para el rol de mesero, optimizada para pantallas pequeñas y uso con una sola mano durante el servicio en sala.

### Escalabilidad

La arquitectura del sistema fue diseñada con la escalabilidad como atributo de calidad fundamental:

- **Escalado horizontal del backend:** el servidor Node.js puede replicarse detrás de un balanceador de carga (Nginx upstream, AWS ELB) sin modificaciones de código, ya que el estado de sesión reside en los JWT (sin estado en el servidor) y los datos compartidos en MongoDB.
- **Base de datos:** MongoDB Atlas ofrece _sharding_ automático para distribuir las colecciones de órdenes e insumos cuando el volumen de documentos supere los límites de un solo nodo.
- **Contenedores Docker:** se recomienda contenerizar todos los componentes del sistema (backend, frontend, orquestador Django) para simplificar el despliegue en múltiples entornos y facilitar el escalado mediante orquestadores como Kubernetes o Docker Swarm.
- **Caché de lectura:** para las consultas frecuentes de métricas y catálogo de productos, se recomienda incorporar Redis como capa de caché, reduciendo la carga sobre MongoDB en horas pico.
- **Orquestador QR:** la arquitectura de proveedores (`msc.py`, `zas.py`, `registry.py`) está diseñada para agregar nuevos bancos bolivianos sin modificar la lógica central, soportando la expansión futura del sistema de pagos.

### Seguridad

Se recomienda fortalecer la postura de seguridad del sistema en los siguientes aspectos para un despliegue en producción de largo plazo:

- **Renovación de JWT:** implementar tokens de actualización (_refresh tokens_) de larga duración almacenados en base de datos, complementando los tokens de acceso de corta duración (15 min), para reducir la ventana de exposición ante un token comprometido.
- **HTTPS forzado:** habilitar HSTS (_HTTP Strict Transport Security_) en la configuración de Nginx para prevenir ataques de _downgrade_ a HTTP.
- **Auditoría de accesos:** registrar en una colección inmutable de MongoDB todos los eventos de autenticación (login, logout, intentos fallidos) y las operaciones destructivas (eliminación de empleados, anulación de órdenes), incluyendo IP de origen y timestamp.
- **Rotación de secretos:** establecer un proceso periódico (trimestral) de rotación del `JWT_SECRET`, el `QR_WEBHOOK_SECRET` y las claves SSH del pipeline CI/CD.
- **Validación de webhooks:** verificar la firma HMAC en todos los webhooks entrantes (orquestador QR y Meta Cloud API) para prevenir inyección de pagos falsos desde fuentes externas.
- **Rate limiting granular:** extender el rate limiting existente (ya implementado para WhatsApp) a los endpoints de autenticación para mitigar ataques de fuerza bruta sobre el login.

### Integración con Otros Sistemas

El sistema fue diseñado con una arquitectura orientada a servicios que facilita su integración con sistemas externos:

- **Sistemas de contabilidad:** la API de órdenes puede conectarse con software de contabilidad boliviano (SIIGO, Monica) exportando las transacciones en formatos estándar (XML, JSON-LD) para registro contable automático.
- **Pasarelas de pago internacionales:** la abstracción del orquestador de pagos permite incorporar _providers_ adicionales como Stripe, MercadoPago o PayPal siguiendo el patrón de `registry.py` del módulo Django, sin modificar la lógica del backend Node.
- **Sistemas de inventario de proveedores:** se puede integrar con sistemas ERP de proveedores locales mediante EDI o APIs REST para automatizar las órdenes de reabastecimiento cuando un insumo alcanza el umbral crítico.
- **Plataformas de analítica:** la colección de órdenes de MongoDB puede conectarse con herramientas de BI como Power BI, Google Data Studio o Metabase para generar reportes avanzados sobre tendencias de venta, rentabilidad por producto y patrones de demanda horaria.
- **Sistemas de gestión hotelera (PMS):** para establecimientos con hospedaje, el POS puede integrarse con sistemas como Opera o Hestia para cargar consumos de cafetería directamente a la habitación del huésped.

\newpage

# Referencias Bibliográficas {-}

<div id="refs"></div>

