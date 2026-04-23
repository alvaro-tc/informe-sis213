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

- Implementar un módulo de gestión de pedidos en tiempo real que permita a los meseros registrar, modificar y hacer seguimiento del estado de las órdenes (en preparación, servido, pagado) mediante una interfaz táctil dinámica construida con React.js.

- Diseñar e integrar un sistema de control de acceso basado en roles (RBAC) con autenticación segura mediante JSON Web Tokens (JWT), diferenciando los permisos y vistas del Administrador, el Cajero y el Mesero.

- Desarrollar un módulo de administración visual de mesas y reservas que presente un panel de estados en tiempo real, permitiendo a los operadores conocer la disponibilidad y el estado de cada mesa del establecimiento.

- Construir las APIs RESTful del _backend_ con Node.js y Express.js, conectadas a una base de datos MongoDB, para soportar todas las operaciones CRUD de los módulos de productos, órdenes, mesas y usuarios.

- Implementar un módulo de facturación y generación de recibos que automatice el cálculo del cobro total y produzca comprobantes detallados en formato PDF, integrando métodos de pago simulados mediante una pasarela estándar.

- Desplegar el sistema en infraestructura _cloud_ (AWS o DigitalOcean) utilizando contenedores Docker para garantizar la portabilidad, disponibilidad y escalabilidad del entorno productivo.

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

En términos más precisos, un SIO transforma datos crudos (ej. el registro de una venta) en información significativa y estructurada (ej. un reporte de ingresos diarios), que a su vez se convierte en conocimiento útil para la gestión (ej. la identificación del turno de mayor rentabilidad). Este proceso de transformación es el núcleo del valor que aportan los SIO a las organizaciones modernas.

### Componentes

Todo Sistema de Información Organizacional se articula en torno a seis componentes fundamentales que trabajan de forma interdependiente:

- **Hardware:** La infraestructura física que sustenta el sistema: servidores, terminales de trabajo, dispositivos de red y, en el contexto del presente proyecto, las estaciones de trabajo desde las que el personal operará la interfaz POS.
- **Software:** Los programas y aplicaciones que procesan los datos. Incluye tanto el _software_ de sistema (sistema operativo, entorno de ejecución Node.js) como el _software_ de aplicación desarrollado a medida (la plataforma POS web).
- **Datos:** La materia prima del sistema. En el contexto de la cafetería, los datos son las órdenes, los productos, los usuarios, las mesas y las transacciones que el sistema captura y persiste en la base de datos MongoDB.
- **Redes y telecomunicaciones:** La infraestructura de conectividad que permite el acceso concurrente al sistema desde múltiples dispositivos, habilitado por la arquitectura cliente-servidor del proyecto.
- **Procedimientos:** Los protocolos y flujos de trabajo que definen cómo deben interactuar los usuarios con el sistema (ej. el proceso de apertura de turno, la toma de una orden, el cierre de caja).
- **Recursos humanos:** Los actores que operan el sistema. En el proyecto, esto comprende al Administrador y al Cajero, cada uno con roles y permisos claramente delimitados.

### Tipos de sistemas

Desde una perspectiva funcional, los SIO se clasifican en distintos tipos según el nivel organizacional al que sirven. Los **Sistemas de Procesamiento de Transacciones (TPS)** operan en el nivel operativo, capturando y procesando las transacciones cotidianas del negocio. Los **Sistemas de Información Gerencial (MIS)** consolidan la información del TPS para generar reportes estructurados destinados a la gerencia media. Los **Sistemas de Soporte a Decisiones (DSS)** asisten en la toma de decisiones complejas mediante análisis de datos y modelos. Los **Sistemas de Información Ejecutiva (EIS)** proveen información estratégica de alto nivel a los directivos. El presente proyecto se enfoca en la implementación de un TPS, que actúa como la base de toda esta pirámide informacional.

## Sistema de Procesamiento de Transacciones (TPS)

### Definición

Un Sistema de Procesamiento de Transacciones es un tipo especializado de SIO diseñado para capturar, procesar, validar y almacenar las transacciones operativas de una organización de forma inmediata, confiable y a gran escala [@obrien2011]. En el contexto del negocio, una **transacción** se define como cualquier evento discreto que modifica el estado de los datos del sistema y que debe quedar registrado de forma permanente e inalterable: el registro de una venta, la creación de una orden, el cobro de una cuenta o la modificación del catálogo de productos.

### Características

Los TPS se distinguen de otros tipos de sistemas de información por un conjunto de atributos técnicos y funcionales que los hacen aptos para el procesamiento operativo de alto volumen:

- **Procesamiento en tiempo real (_OLTP_):** A diferencia del procesamiento por lotes (_batch_), los TPS modernos procesan cada transacción en el instante en que se produce, actualizando la base de datos de forma inmediata y reflejando el estado actual del negocio en todo momento.
- **Alta confiabilidad y disponibilidad:** Un TPS para un punto de venta debe estar disponible durante todo el horario operativo del negocio. La indisponibilidad del sistema implica la parálisis del servicio al cliente.
- **Integridad transaccional (propiedades ACID):** Toda transacción en un TPS debe cumplir las propiedades de Atomicidad (la transacción se ejecuta completa o no se ejecuta), Consistencia (el sistema pasa de un estado válido a otro estado válido), Aislamiento (las transacciones concurrentes no interfieren entre sí) y Durabilidad (una transacción confirmada persiste incluso ante fallos del sistema) [@elmasri2015].
- **Manejo de alto volumen de datos estandarizados:** Los TPS están optimizados para procesar grandes cantidades de transacciones simples y repetitivas de forma eficiente, a diferencia de los sistemas analíticos que trabajan con consultas complejas sobre datos históricos.

### Funciones

En el contexto específico del presente proyecto, el TPS ejecuta el siguiente ciclo funcional para cada transacción de venta:

1. **Captura de datos de origen:** El cajero construye la orden seleccionando productos del catálogo digital y asignándola a una mesa, introduciendo los datos de la transacción en el sistema mediante la interfaz POS de React.js.
2. **Validación y verificación:** El _backend_ (Node.js/Express.js) verifica que el usuario tenga los permisos necesarios (validación JWT), que losítulos existan en el catálogo activo y que la mesa esté disponible.
3. **Procesamiento matemático:** El motor transaccional calcula automáticamente los subtotales por ítem, aplica los impuestos correspondientes y determina el total a cobrar, eliminando el margen de error del cálculo manual.
4. **Actualización de la base de datos:** La transacción se escribe de forma atómica en MongoDB, vinculando el documento de la orden con el cajero responsable, la mesa asignada y los ítems del carrito con sus precios exactos en ese instante.
5. **Emisión del comprobante:** El sistema genera el ticket o factura en formato PDF, disponible para impresión inmediata, y actualiza el estado de la mesa a "disponible".

### Evolución hacia sistemas web

Los TPS han recorrido un largo camino desde las terminales monolíticas de los años setenta. La adopción de arquitecturas web modernas —como la empleada en este proyecto— representa la fase más reciente de esta evolución, caracterizada por tres ventajas fundamentales: **ubicuidad** (el sistema es accesible desde cualquier dispositivo con navegador web en la red local del negocio), **centralización** (todos los datos residen en un único repositorio en la nube, eliminando la dispersión de información), y **escalabilidad** (la arquitectura basada en microservicios y contenedores Docker permite escalar el sistema horizontalmente para absorber incrementos en la carga de trabajo sin rediseñar la arquitectura base).

## Arquitectura de sistemas web

La arquitectura del sistema POS se basa en el modelo Cliente–Servidor, una de las estructuras más utilizadas en aplicaciones web modernas por su capacidad de separación de responsabilidades, escalabilidad y mantenimiento [@sommerville2015]. Siguiendo este diagrama:

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/diagrama/arquitectura_mern.png}
\caption{Diagrama de Arquitectura MERN}
\label{diag:arquitectura_mern}
\end{diagrama}

### Cliente

El cliente representa la capa de presentación del sistema, encargada de interactuar directamente con el usuario final mediante una interfaz gráfica accesible desde el navegador. En este proyecto, el cliente será desarrollado utilizando React.js, permitiendo:

- Renderizado dinámico de componentes (Virtual DOM).
- Interacciones en tiempo real en el POS.
- Manejo del estado global mediante Redux Toolkit.
- Navegación sin recarga de página (SPA).

Funciones principales:

- Capturar datos de entrada (pedidos, login).
- Mostrar información procesada.
- Enviar solicitudes HTTP al servidor.

### Servidor

El servidor constituye la capa de lógica de negocio.
Tecnologías: Node.js; Express.js.
Funciones principales:

- Procesamiento de órdenes.
- Validaciones y cálculos.
- Ejecución de la lógica transaccional.

### API

La API permite la comunicación entre cliente y servidor mediante HTTP y JSON. Actúa como el puente documentado que estructura y transmite la información bidireccionalmente.
Características:

- Métodos estándar: GET, POST, PUT, DELETE.
- Arquitectura RESTful.

### Base de datos

Repositorio central donde reposa la persistencia de las entidades. Es el componente responsable de almacenar los datos operacionales a largo plazo para asegurar la durabilidad y disponibilidad de la información de las ventas y el menú.

### Flujo del Sistema

1. Usuario interactúa con frontend.
2. Cliente envía petición HTTP a la API.
3. Servidor procesa la solicitud y valida.
4. Se consulta o impacta la base de datos.
5. Servidor responde en JSON.
6. Frontend actualiza la interfaz.

## Seguridad en sistemas de información

Como modelador y encargado de la seguridad arquitectónica, se establece que un sistema de ventas (POS) debe proteger de forma absoluta sus _endpoints_ (rutas de API) y la persistencia de datos.

### Autenticación

Se descartan las sesiones tradicionales. El sistema implementa JSON Web Tokens (JWT). Tras validar credenciales (contraseñas previamente procesadas con funciones criptográficas unidireccionales de _hash_, como _bcrypt_), el _backend_ emite un token firmado [@stallings2017]. Este token viaja en las cabeceras HTTP de cada petición del cliente, garantizando que el usuario es quien dice ser sin consultar la base de datos reiteradamente.

### Autorización

La autorización asegura que un usuario autenticado solo pueda realizar las acciones para las que está facultado. Se ejecuta verificando los niveles de privilegio incrustados y firmados criptográficamente en el token antes de responder a una petición.

### Roles

El modelo de datos incluye una propiedad rígida de "Rol" (ej. Administrador, Cajero). Este mecanismo se implementa mediante _Middlewares_ (bloques de código intermedios en el _backend_) que desencriptan el _payload_ del token y rechazan con un error 403 (Prohibido) cualquier intento de un Cajero de acceder a las rutas de eliminación de usuarios o reportes gerenciales.

### Control de acceso

Tanto a nivel de la interfaz (ocultando botones de configuración a cajeros) como a nivel de capa de datos, se aplican políticas estrictas para evitar inyecciones maliciosas o robo de sesiones, blindando el flujo desde que se presiona "Cobrar" hasta que la información reposa en el disco.

## Base de datos

El diseño de la persistencia de datos constituye el corazón del sistema, siendo responsabilidad directa de la ingeniería de datos modelar la información de la cafetería para que sea escalable, rápida y matemáticamente exacta.

### Modelo relacional

Aunque tecnologías modernas como la pila MERN utilicen modelos NoSQL orientados a documentos para optimizar la velocidad transaccional, los principios lógicos relacionales son ineludibles en un TPS [@elmasri2015]. Las entidades maestras se identifican y separan claramente: `Usuarios` (Personal), `Categorías` (Clasificación del menú), `Productos` (Ítems de venta) y `Facturas/Órdenes` (Registro de la transacción). Se definen llaves referenciales explícitas entre ellas para establecer cardinalidad (ej. un cajero realiza muchas ventas, una orden contiene múltiples productos).

### Integridad

Los principios lógicos de integridad se mantienen ineludibles mediante el uso de esquemas de validación estrictos (como _Mongoose_ en el caso de la pila seleccionada). Estos esquemas garantizan la exactitud de los tipos de datos ingresados y previenen la inserción de documentos huérfanos o con información financiera incompleta.

### Normalización

Se aplican reglas de normalización para evitar anomalías; por ejemplo, la información del perfil del usuario o la descripción detallada de un producto no se repiten innecesariamente. Sin embargo, por requerimientos de diseño de un POS y para proteger la contabilidad, se realiza una desnormalización controlada en las `Órdenes`: al registrar una venta, el precio exacto actual del producto se copia de forma fija dentro de la orden. Esto garantiza que la información histórica sea inmutable frente a futuros cambios de precios en el catálogo.

### Transacciones

En el entorno TPS, una transacción es indivisible. Registrar una venta implica: calcular totales, insertar la orden, asociar el método de pago y actualizar la disponibilidad de la mesa. El motor de la base de datos se configura para garantizar atomicidad (Principios ACID), asegurando que si ocurre un fallo de red a la mitad del proceso, la base de datos ejecute un _Rollback_ (reversión completa de los pasos previos), previniendo que existan "ventas a medias" o corrupciones en los arqueos de caja.

## Metodología de desarrollo

### Scrum

Es un marco de trabajo ágil para el desarrollo, entrega y mantenimiento de productos complejos, definido en la _Scrum Guide_ [@schwaber2020]. Se fundamenta en tres pilares empíricos: transparencia, inspección y adaptación. Para el Sistema POS de Cafetería, Scrum es la elección metodológica óptima porque permite iterar rápidamente y ajustar requerimientos de acuerdo a la retroalimentación del cliente.

#### Roles

- **Product Owner:** Es el responsable de maximizar el valor del producto. Sus funciones son definir y mantener el _Product Backlog_; ser el punto de contacto único con el cliente; y aceptar o rechazar los incrementos funcionales.
- **Scrum Master:** Responsable de que el equipo aplique correctamente Scrum. Facilita las ceremonias, elimina impedimentos y protege al equipo de interrupciones externas.
- **Equipo de Desarrollo:** Equipo autoorganizado responsable de convertir los ítems del _Product Backlog_ en un incremento potencialmente entregable (programación, diseño y pruebas).

#### Artefactos

- **Product Backlog:** Lista única y priorizada de todos los requerimientos funcionales y técnicos necesarios para el sistema.
- **Sprint Backlog:** Conjunto de requerimientos seleccionados para el _Sprint_ actual, divididos en tareas concretas a desarrollar por el equipo.
- **Incremento:** La suma de todas las funcionalidades completadas durante el _Sprint_, las cuales deben cumplir con la Definición de Hecho (código probado y validado).

#### Eventos

- **Sprint Planning (Planificación):** Reunión de inicio donde el equipo define qué se va a entregar y cómo se va a construir el incremento durante el ciclo de trabajo.
- **Daily Scrum (Reunión diaria):** Reunión breve de sincronización del equipo de desarrollo para evaluar el progreso y exponer bloqueos u obstáculos.
- **Sprint Review (Revisión):** Demostración del _software_ funcional al _Product Owner_ y partes interesadas al finalizar el _Sprint_ para recoger impresiones.
- **Sprint Retrospective (Retrospectiva):** Espacio de mejora continua donde el equipo reflexiona sobre sus propios procesos de trabajo de cara a la siguiente iteración.

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

Las historias de usuario se redactan siguiendo el formato estándar: _Como_ [rol], _quiero_ [acción], _para_ [beneficio]. Se ordenan por módulo funcional y se acompañan de criterios de aceptación que sirven como base para las pruebas de validación.

\begingroup\small
\begin{longtable}{|p{2cm}|p{3.5cm}|p{5cm}|p{4cm}|p{4cm}|p{2cm}|p{1.5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} ID & \bfseries \color{white} Título & \bfseries \color{white} Descripción (Como, Quiero, Para) & \bfseries \color{white} Criterio de Aceptación 1 (Dado, Cuando, Entonces) & \bfseries \color{white} Criterio de Aceptación 2 (Dado, Cuando, Entonces) & \bfseries \color{white} Prioridad (MoSCoW) & \bfseries \color{white} Story Points \\ \hline
\endhead

\multicolumn{7}{|c|}{\bfseries SPRINT 1} \\ \hline
HU-01 & Registro e inicio de sesión de empleados & Como empleado, Quiero registrarme e iniciar sesión con mis credenciales, Para acceder al sistema según mi rol asignado & Dado que soy un nuevo empleado, Cuando completo el formulario de registro con nombre, correo, teléfono, contraseña y rol, Entonces mi cuenta es creada y soy redirigido al sistema & Dado que tengo una cuenta existente, Cuando ingreso mi correo y contraseña válidos, Entonces recibo un token JWT y soy redirigido a mi vista correspondiente según mi rol & Must-have & 5 \\ \hline
HU-02 & Control de acceso por rol & Como administrador, Quiero que cada empleado solo acceda a las vistas permitidas para su rol, Para garantizar la seguridad y el flujo correcto del sistema & Dado que soy un barista, Cuando intento acceder a la ruta /dashboard, Entonces soy redirigido o bloqueado con un mensaje de acceso denegado & Dado que soy un mesero, Cuando inicio sesión, Entonces solo veo las opciones de Inicio, Órdenes, Mesas y Menú en la navegación & Must-have & 3 \\ \hline
HU-03 & Panel de inicio con métricas del negocio & Como mesero o administrador, Quiero ver un resumen del estado del negocio al ingresar al sistema, Para tomar decisiones rápidas sobre las operaciones del día & Dado que inicio sesión exitosamente, Cuando se carga la página de inicio, Entonces veo las métricas de ingresos totales y mesas ocupadas en tarjetas & Dado que estoy en la página de inicio, Cuando hay órdenes recientes, Entonces las veo listadas con su estado, mesa y hora de creación & Must-have & 3 \\ \hline
HU-04 & Gestión de mesas del restaurante & Como administrador, Quiero crear, editar y eliminar mesas con número, capacidad y color, Para mantener actualizada la distribución física de la cafetería & Dado que estoy en el Dashboard > Mesas, Cuando creo una nueva mesa con número y capacidad, Entonces aparece en la vista de mesas con estado Disponible & Dado que existe una mesa con una orden activa, Cuando intento eliminarla, Entonces el sistema me impide hacerlo o me advierte del conflicto & Must-have & 3 \\ \hline
HU-05 & Visualización del estado de las mesas & Como mesero, Quiero ver todas las mesas con su estado actual en tiempo real, Para saber cuáles están disponibles, ocupadas o en uso & Dado que estoy en la página de Mesas, Cuando se carga la vista, Entonces cada tarjeta muestra número de mesa, capacidad, estado y el nombre del cliente si está ocupada & Dado que hay mesas con distintos estados, Cuando aplico el filtro En uso, Entonces solo se muestran las mesas con órdenes activas & Must-have & 2 \\ \hline
HU-06 & Gestión de categorías del menú & Como administrador, Quiero crear, editar y eliminar categorías de menú con nombre, color e ícono, Para organizar visualmente los productos disponibles & Dado que estoy en Dashboard > Categorías, Cuando creo una categoría con nombre, color e ícono, Entonces aparece disponible al crear o editar platos & Dado que una categoría tiene platos asociados, Cuando intento eliminarla, Entonces el sistema procesa la solicitud o me muestra el impacto de la acción & Must-have & 2 \\ \hline
HU-07 & Gestión de platos del menú & Como administrador, Quiero crear, editar y eliminar platos con nombre, precio, categoría e insumos requeridos, Para mantener el menú actualizado con los productos disponibles & Dado que estoy en Dashboard > Productos, Cuando creo un plato asignándole insumos y cantidades requeridas, Entonces el plato queda vinculado a esos insumos para el descuento automático de inventario & Dado que existe un plato con precio o ingredientes desactualizados, Cuando lo edito y guardo, Entonces los cambios se reflejan inmediatamente en el menú de toma de órdenes & Must-have & 5 \\ \hline
HU-08 & Toma de órdenes en el menú & Como mesero, Quiero seleccionar una mesa, ingresar los datos del cliente, agregar platos al carrito y confirmar la orden, Para registrar el pedido del cliente de forma rápida y sin errores & Dado que ingreso al módulo de Menú, Cuando selecciono una mesa, completo los datos del cliente y agrego platos al carrito, Entonces se calcula automáticamente el total con impuesto y puedo confirmar la orden & Dado que confirmo una orden con método de pago en efectivo, Cuando el sistema la registra, Entonces la orden aparece en la KDS del barista y en la lista de órdenes activas & Must-have & 8 \\ \hline
HU-09 & Visualización y filtrado de órdenes & Como mesero o administrador, Quiero ver todas las órdenes con su estado actual y filtrarlas, Para hacer seguimiento del flujo de trabajo de la cocina & Dado que estoy en la página de Órdenes, Cuando se carga la lista, Entonces veo todas las órdenes con cliente, mesa, ítems, total y estado & Dado que quiero ver solo las órdenes pendientes, Cuando selecciono el filtro En Progreso, Entonces la lista se actualiza mostrando únicamente esas órdenes & Must-have & 3 \\ \hline

\multicolumn{7}{|c|}{\bfseries SPRINT 2} \\ \hline
HU-10 & Pantalla KDS para barista / cocina & Como barista, Quiero ver las órdenes entrantes en mi pantalla de cocina organizadas por estado, Para preparar los pedidos en el orden correcto & Dado que se crea una nueva orden, Cuando aparece en la pestaña Entradas de la KDS, Entonces veo el número de mesa, cliente, ítems y cantidad de cada uno & Dado que comienzo a preparar un pedido, Cuando lo muevo al estado Preparando, Entonces desaparece de Entradas y aparece en la pestaña Preparando & Must-have & 5 \\ \hline
HU-11 & Actualización del estado de una orden & Como barista o mesero, Quiero actualizar el estado de una orden (En Progreso $\rightarrow$ Preparando $\rightarrow$ Lista $\rightarrow$ Completada), Para comunicar el avance del pedido al equipo & Dado que una orden está en estado Preparando, Cuando el barista la marca como Lista, Entonces el mesero puede verla en la lista de órdenes listas para entregar & Dado que una orden fue entregada al cliente, Cuando se marca como Completada, Entonces pasa al historial y la mesa puede liberarse & Must-have & 3 \\ \hline
HU-12 & Pago en línea con Razorpay & Como mesero, Quiero procesar pagos en línea mediante la pasarela Razorpay al confirmar una orden, Para ofrecer al cliente una alternativa de pago sin efectivo & Dado que el cliente elige pago en línea, Cuando selecciono ese método y confirmo, Entonces se abre el modal de Razorpay con el monto correcto de la orden & Dado que el cliente completa el pago en Razorpay, Cuando el pago es verificado, Entonces la orden queda registrada con los datos del pago y se genera la factura & Must-have & 5 \\ \hline
HU-13 & Generación de factura / comprobante & Como mesero, Quiero generar una factura al completar una orden, Para entregar al cliente un comprobante detallado de su consumo & Dado que una orden fue pagada, Cuando accedo a la opción de factura, Entonces se muestra un documento con ítems, cantidades, subtotal, impuesto y total & Dado que estoy viendo la factura generada, Cuando selecciono imprimir, Entonces el sistema abre el diálogo de impresión con el formato correcto & Must-have & 3 \\ \hline
HU-14 & Gestión de insumos del inventario & Como administrador, Quiero agregar, editar y eliminar insumos con stock, unidades y umbrales mínimos/máximos, Para controlar con precisión los materiales disponibles en la cafetería & Dado que estoy en la página de Insumos, Cuando agrego un nuevo insumo con nombre, unidad, stock actual, stock mínimo y costo unitario, Entonces aparece en la lista con su estado de stock calculado & Dado que el stock de un insumo cambió, Cuando lo edito con el nuevo valor y guardo, Entonces el estado (Crítico/Bajo/Normal/Abundante) se recalcula automáticamente & Must-have & 5 \\ \hline
HU-15 & Descuento automático de inventario al crear orden & Como administrador, Quiero que al registrar una orden el sistema descuente automáticamente los insumos utilizados, Para mantener el inventario actualizado sin intervención manual & Dado que se confirma una orden con platos que tienen insumos asociados, Cuando el sistema la registra, Entonces el stock de cada insumo es reducido según la cantidad usada por plato x cantidad pedida & Dado que se registra el descuento, Cuando reviso el historial de consumos del insumo, Entonces aparece un registro con la fecha, cantidad y descripción de la orden & Must-have & 5 \\ \hline
HU-16 & Alertas de stock crítico y bajo & Como administrador, Quiero recibir alertas visuales cuando un insumo llega a nivel crítico o bajo, Para reabastecerlo antes de que afecte las operaciones & Dado que el stock de un insumo cae por debajo del stock mínimo, Cuando accedo a la página de Insumos, Entonces ese insumo aparece destacado con un indicador Crítico o Bajo & Dado que hay múltiples insumos con stock crítico, Cuando veo el panel de alertas, Entonces se listan todos los insumos que requieren atención con su nivel actual & Must-have & 3 \\ \hline
HU-17 & Reabastecimiento manual de insumos & Como administrador, Quiero registrar el reabastecimiento de un insumo indicando la cantidad recibida, Para actualizar el stock y mantener el historial de entradas & Dado que recibo una entrega de insumos, Cuando ingreso la cantidad a reponer en el formulario de Reponer, Entonces el stock del insumo aumenta por esa cantidad & Dado que se registra un reabastecimiento, Cuando reviso las métricas de inventario, Entonces el insumo ya no aparece en el panel de alertas si superó el umbral mínimo & Must-have & 2 \\ \hline
HU-18 & Registro manual de consumo de insumos & Como administrador, Quiero registrar consumos de insumos fuera de órdenes (mermas, pruebas, limpieza), Para tener un historial de consumo completo y preciso & Dado que necesito registrar un consumo especial, Cuando ingreso la cantidad y descripción en el formulario de consumo, Entonces el stock baja y el evento queda en el historial del insumo & Dado que se registra el consumo, Cuando reviso el detalle del insumo, Entonces veo el registro con fecha, cantidad, costo estimado y descripción & Should-have & 2 \\ \hline
HU-19 & Métricas de gasto diario en inventario & Como administrador, Quiero ver un gráfico de gasto en inventario de los últimos 7 días, Para entender los costos operativos y detectar anomalías & Dado que estoy en la página de Insumos, Cuando accedo a la sección de métricas, Entonces veo un gráfico de barras con el gasto por día de los últimos 7 días & Dado que el gasto de un día es inusualmente alto, Cuando reviso el gráfico, Entonces puedo identificar fácilmente el día y compararlo con el promedio & Should-have & 3 \\ \hline
HU-20 & Gestión de empleados desde el dashboard & Como administrador, Quiero ver la lista de empleados activos y eliminar cuentas desde el panel de administración, Para mantener el control del acceso al sistema & Dado que estoy en Dashboard > Empleados, Cuando se carga la lista, Entonces veo el nombre, correo, teléfono y rol de cada empleado & Dado que un empleado ya no trabaja en la cafetería, Cuando elimino su cuenta, Entonces no puede volver a iniciar sesión con esas credenciales & Should-have & 2 \\ \hline
HU-21 & Métricas globales del sistema & Como administrador, Quiero ver estadísticas globales del negocio (total de órdenes, ingresos, platos, mesas, mesas ocupadas) en el dashboard, Para tomar decisiones informadas sobre la operación & Dado que accedo a la pestaña de Métricas del Dashboard, Cuando se carga la vista, Entonces veo tarjetas con el total de órdenes, ingresos totales, platos activos, categorías y mesas & Dado que acaba de crearse una nueva orden, Cuando actualizo las métricas, Entonces los contadores reflejan los datos más recientes & Should-have & 3 \\ \hline
HU-22 & Modo oscuro / claro en la interfaz & Como cualquier usuario, Quiero alternar entre modo oscuro y modo claro, Para adaptar la interfaz a las condiciones de iluminación del entorno donde trabajo & Dado que estoy usando el sistema en un área poco iluminada, Cuando activo el modo oscuro desde la barra de navegación, Entonces toda la interfaz cambia a paleta oscura sin recargar la página & Dado que cambié al modo oscuro, Cuando cierro y vuelvo a abrir el navegador, Entonces el sistema recuerda mi preferencia y mantiene el tema seleccionado & Should-have & 2 \\ \hline
HU-23 & Búsqueda y filtrado de insumos & Como administrador, Quiero buscar insumos por nombre y filtrarlos por estado de stock, Para encontrar rápidamente los insumos que necesito gestionar & Dado que hay muchos insumos registrados, Cuando escribo parte del nombre en el buscador, Entonces la lista se filtra en tiempo real mostrando solo los coincidentes & Dado que quiero ver solo los insumos críticos, Cuando aplico el filtro Crítico, Entonces la lista muestra únicamente los insumos con ese estado & Should-have & 2 \\ \hline

\multicolumn{7}{|c|}{\bfseries NO ASIGNADO} \\ \hline
HU-24 & Notificaciones de stock bajo en tiempo real & Como administrador, Quiero recibir notificaciones emergentes cuando se detecta un insumo por debajo del mínimo después de una orden, Para reaccionar de inmediato sin tener que revisar el inventario manualmente & Dado que se confirma una orden y el descuento deja un insumo por debajo del mínimo, Cuando la orden es procesada, Entonces el sistema muestra una notificación toast con el nombre del insumo afectado & Dado que recibo la notificación, Cuando la descarto, Entonces puedo continuar con la operación normal sin interrupciones & Could-have & 3 \\ \hline
HU-25 & Exportación del historial de órdenes a CSV & Como administrador, Quiero exportar el historial de órdenes a un archivo CSV, Para analizarlo en Excel u otras herramientas externas de reportes & Dado que estoy en la sección de órdenes del Dashboard, Cuando hago clic en Exportar CSV, Entonces se descarga un archivo con todas las órdenes incluyendo fecha, mesa, cliente, ítems y total & Dado que aplico un filtro por fecha antes de exportar, Cuando descargo el archivo, Entonces solo contiene las órdenes del rango seleccionado & Could-have & 5 \\ \hline
HU-26 & App móvil nativa para meseros & Como mesero, Quiero una aplicación móvil nativa (iOS/Android) para tomar órdenes desde mi celular, Para no depender de una tablet o computadora fija en el salón & Dado que descargo la app en mi teléfono, Cuando inicio sesión, Entonces tengo acceso completo al módulo de mesas y toma de órdenes con interfaz optimizada para pantalla pequeña & Dado que tomo una orden desde el móvil, Cuando la confirmo, Entonces aparece en la KDS del barista igual que si se hubiera creado desde la web & Won't-have & 13 \\ \hline
HU-27 & Programa de fidelización de clientes & Como administrador, Quiero registrar clientes frecuentes y acumular puntos por compra, Para ofrecerles descuentos o beneficios como estrategia de retención & Dado que un cliente realiza su quinta compra, Cuando el mesero ingresa su número de teléfono al tomar la orden, Entonces el sistema muestra sus puntos acumulados y si aplica algún beneficio & Dado que un cliente canjea sus puntos, Cuando el mesero aplica el descuento, Entonces la factura refleja el descuento y los puntos son deducidos & Won't-have & 8 \\ \hline
HU-28 & Integración con plataformas de delivery & Como administrador, Quiero recibir órdenes de plataformas externas (Uber Eats, Rappi) directamente en el POS, Para centralizar todas las órdenes en un solo sistema & Dado que llega un pedido de Uber Eats, Cuando el sistema lo recibe vía webhook, Entonces aparece automáticamente en la KDS con la etiqueta de la plataforma de origen & Dado que la plataforma de delivery cambia el estado de la orden, Cuando el sistema sincroniza, Entonces el estado en el POS se actualiza para reflejar el cambio & Won't-have & 21 \\ \hline

\caption{Backlog del Sistema POS Cafetería 5}
\label{tab:backlog}
\end{longtable}
\endgroup

### Diagramas UML

Los diagramas UML del sistema han sido elaborados en la herramienta Draw.io y se adjuntan como evidencia gráfica del diseño funcional. Se incluyen los siguientes tipos de diagrama:

**Diagrama de Casos de Uso:**
Representa las interacciones entre los actores del sistema (Administrador, Cajero, Encargado de Cocina) y los casos de uso identificados durante el análisis. Los casos de uso principales son: _Gestionar productos_, _Gestionar usuarios_, _Registrar venta_, _Emitir comprobante_, _Consultar inventario_, _Generar reporte_ y _Gestionar menú_.

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/diagrama/casos_de_uso1.png}
\caption{Diagrama de Casos de Uso del Sistema POS}
\label{diag:casos_uso_1}
\end{diagrama}

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/diagrama/casos_de_uso2.png}
\caption{Diagrama de Casos de Uso del Sistema POS}
\label{diag:casos_uso_2}
\end{diagrama}

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/diagrama/casos_de_uso3.png}
\caption{Diagrama de Casos de Uso del Sistema POS}
\label{diag:casos_uso_3}
\end{diagrama}

**Diagrama de Clases:**
Modela la estructura estática del sistema mediante las entidades principales y sus relaciones. Las clases identificadas son: `Usuario` (con atributos: id, nombre, email, contraseña, rol), `Producto` (id, nombre, precio, costo, categoría, disponible, stock), `Categoría` (id, nombre), `Orden` (id, usuario_id, mesa, estado, total, fecha, cartItems[ ]), `ItemOrden` (producto_id, cantidad, precioUnitario), `Proveedor` (id, nombre, contacto, condiciones) e `Inventario` (producto_id, stockActual, stockMínimo).

\begin{diagrama}[H]
\centering
\includegraphics[width=0.85\linewidth]{assets/diagrama/clases.png}
\caption{Diagrama de Clases del Sistema POS}
\label{diag:clases}
\end{diagrama}

**Diagrama de Actividades:**
Representa el flujo de actividades del proceso principal del sistema: el ciclo completo de una venta, desde que el cajero inicia sesión hasta que se emite el comprobante y se actualiza el inventario.

\begin{diagrama}[H]
\centering
\includegraphics[width=0.75\linewidth]{assets/diagrama/actividades.png}
\caption{Diagrama de Actividades — Flujo de Venta}
\label{diag:actividades}
\end{diagrama}

## Diseño del sistema

### Arquitectura del sistema — Modelo C4

El diseño arquitectónico del Sistema POS para la cafetería se documenta utilizando el **Modelo C4** (_Context, Containers, Components, Code_), un estándar de representación jerárquica que permite comunicar la arquitectura de software a diferentes audiencias —desde la gerencia hasta los desarrolladores— con el nivel de detalle apropiado para cada una [@brown2018].

#### Nivel 1 — Diagrama de Contexto (_System Context_)

El Diagrama de Contexto es la vista de más alto nivel. Su propósito es mostrar el sistema como una caja negra y situar al lector en el entorno donde opera: quiénes interactúan con él y con qué sistemas externos se conecta.

**Actores (usuarios del sistema):**

- **Administrador:** Interactúa con el sistema a través de un navegador web en su estación de trabajo. Sus acciones se centran en la gestión del catálogo de productos y usuarios, y en la consulta de reportes financieros.
- **Cajero / Operador POS:** Interactúa con el sistema a través de la interfaz táctil del POS desde la pantalla del punto de atención. Registra órdenes, gestiona el estado de las mesas y procesa los cobros de cada turno.

**El sistema central:**

- **Sistema POS Web — Cafetería (La Paz, Bolivia):** Plataforma web construida sobre la arquitectura MERN, que centraliza la gestión de transacciones, usuarios, productos y mesas del establecimiento.

**Sistemas externos:**

- **Módulo de Simulación de Pagos (Mock Gateway):** Sistema encargado de emular el comportamiento de una pasarela de pagos real. Permite registrar y confirmar transacciones mediante tarjetas de crédito o códigos QR de forma controlada, validando la lógica de negocio del POS sin necesidad de interactuar con entidades bancarias externas.
  Si bien el sistema fue diseñado siguiendo los estándares de integración de pasarelas como Razorpay o Libelula, la versión actual del prototipo utiliza un Entorno de Simulación (Mock Gateway). Esta decisión permite validar el flujo completo de la lógica de negocio (apertura, cobro y cierre de mesa) sin incurrir en costos transaccionales ni depender de conectividad externa durante las pruebas de estrés del sistema.
- **Servicio de Hosting Cloud (AWS EC2 / DigitalOcean):** Infraestructura de nube donde se despliegan los contenedores Docker que alojan la API y la base de datos del sistema.

**Relaciones clave en este nivel:**

El _Administrador_ y el _Cajero_ acceden al Sistema POS a través del protocolo HTTPS desde sus respectivos navegadores. El Sistema POS se comunica con la _Pasarela de Pagos_ mediante llamadas HTTP/REST para procesar cobros electrónicos, y reside desplegado en el _Servicio de Hosting Cloud_.

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
Responsabilidad & Renderizar la interfaz del POS, el panel de administración y los reportes. Gestionar el estado global de la sesión y del carrito de compras. \\ \hline
Comunicación & Envía peticiones HTTP/REST en formato JSON a la API Backend a través de \texttt{axios}. Recibe el JWT del backend y lo adjunta en la cabecera \texttt{Authorization} de cada petición subsiguiente. \\ \hline
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
Responsabilidad & Exponer los \textit{endpoints} REST (\texttt{/api/user}, \texttt{/api/order}, \texttt{/api/table}, \texttt{/api/payment}, \texttt{/api/category}, \texttt{/api/dish}, \texttt{/api/metric}). Ejecutar la lógica de negocio, validaciones, cálculos transaccionales y control de acceso por roles mediante \textit{middlewares} JWT. \\ \hline
Comunicación & Recibe peticiones HTTPS del Frontend. Lee y escribe documentos en MongoDB a través del ODM Mongoose. Invoca la API de la Pasarela de Pagos externa cuando se procesa un cobro electrónico. \\ \hline
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
Responsabilidad & Persistir de forma duradera todos los documentos del sistema: usuarios (\texttt{users}), productos (\texttt{products}), mesas (\texttt{tables}), órdenes (\texttt{orders}) y pagos (\texttt{payments}). \\ \hline
Comunicación & Solo es accedida directamente por el Backend API a través del driver Mongoose. No expone puertos públicos; es accesible únicamente dentro de la red privada del entorno Docker. \\ \hline
\caption{Especificaciones Técnicas de la Base de Datos}
\label{tab:especificaciones_bd}
\end{longtable}
\endgroup

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
\texttt{paymentId} & String & \centering No \arraybackslash & Identificador de la transacción en el procesador. & ID retornado por el simulador o pasarela externa (ej. \texttt{TXN_829312}). \\ \hline
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
\texttt{paymentData} & Object & \centering No \arraybackslash & Metadatos de confirmación de la transacción. & Almacena IDs de seguimiento generados por el simulador o pasarela externa (\texttt{transaction_id}). \\ \hline
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

\texttt{icon} & String & \centering \textbf{No} & Icono o emoji representativo. & Valor por defecto: \texttt{"🍲"}. Se utiliza para la identificación rápida en el frontend. \\ \hline

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

El sistema asegura la calidad del producto final a través de distintas evaluaciones de estrés y rendimiento:

- **Pruebas unitarias:** Validando que las funciones matemáticas y servicios individuales del _backend_ operen según la lógica.
- **Pruebas funcionales:** Ejecución de casos de uso (Ej: Qué sucede si el usuario ingresa un formato de fecha erróneo).
- **Pruebas de integración:** Ensayos del flujo Cliente hacia la API y hacia la base de datos extremo a extremo.
- **Pruebas de aceptación:** Pruebas finales realizadas con un entorno cercano a la organización para validación definitiva del _Product Owner_.

## Desarrollo del prototipo funcional

A lo largo de los _sprints_ se generan prototipos incrementales. En esta etapa el proyecto expone sus interfaces plenamente interactivas reflejando casos de éxito desde el inicio de sesión (_login_), hasta el registro exitoso de la operación. _(Incluir evidencias y capturas de pantalla reales aquí)_.

## Documentación de Ingeniería Completa

Se acompañan como anexos técnicos o repositorios vinculados:

- **Documentación funcional**

La documentación funcional consolida todos los artefactos producidos durante la fase de análisis y modelado del sistema. Está orientada a servir como referencia oficial para el equipo de desarrollo, el _Product Owner_ y las pruebas de aceptación.

- **Especificación de Requerimientos de Software (SRS)**

La Especificación de Requerimientos de Software documenta de forma estructurada y completa todos los requerimientos identificados para el Sistema POS de Cafetería. Se organiza en las siguientes secciones:

1. **Propósito del sistema:**  
   Desarrollar un Sistema de Punto de Venta (POS) web basado en la arquitectura MERN para digitalizar y centralizar las operaciones de una cafetería en la ciudad de La Paz, eliminando los procesos manuales y garantizando la trazabilidad de cada transacción.

2. **Alcance funcional:**  
   El sistema cubre seis módulos funcionales:
   - Gestión de Ventas y Pedidos (RF-01, RF-08, RF-09, RF-11, RF-12, RF-13, RF-14)
   - Control de Inventario (RF-03, RF-15, RF-16, RF-17, RF-18, RF-19)
   - Gestión de Menú y Productos (RF-05, RF-06, RF-07, RF-10, RF-20, RF-21)
   - Reportes y Toma de Decisiones (RF-04, RF-22, RF-23, RF-24, RF-25)
   - Gestión de Proveedores y Compras (RF-02, RF-26, RF-27, RF-28)
   - Gestión de Personal y Turnos (RF-29, RF-30, RF-31, RF-32)

3. **Restricciones del sistema:**
   - Plataforma exclusivamente web
   - Autenticación interna sin proveedores OAuth
   - Pagos simulados sin integración bancaria real
   - Sistema monosucursal en su primera versión
   - Sin descuento automático de insumos compuestos  
     _(Referencia completa en la sección Límites y Alcances del Marco Referencial)._

4. **Requerimientos funcionales:**  
   32 requerimientos funcionales organizados en 6 módulos, con identificador, descripción, actor responsable y prioridad.  
   _(Referencia: Tablas RF-01 a RF-32 en la sección 3.2)._

5. **Requerimientos no funcionales:**  
   13 requerimientos no funcionales en las categorías de Rendimiento, Confiabilidad, Seguridad, Disponibilidad, Escalabilidad, Usabilidad y Mantenibilidad.  
   _(Referencia: Tabla RNF-01 a RNF-13 en la sección 3.2)._

- **Relevamiento documentado**

El relevamiento de información se realizó mediante las siguientes técnicas aplicadas al personal de la cafetería:

1. **Entrevista estructurada al administrador:**  
   Se identificaron los procesos críticos de cobro, control de inventario y generación de reportes. El administrador manifestó la necesidad urgente de eliminar los descuadres de caja diarios y contar con información de ventas en tiempo real.

2. **Observación directa del flujo de servicio:**  
   Se documentó el ciclo completo de atención al cliente:  
   `toma de pedido verbal → comanda en papel → preparación → cobro manual → anotación en cuaderno`  
   Se identificaron los puntos de falla más frecuentes: comandas ilegibles, errores de suma y ausencia de trazabilidad.

3. **Revisión del repositorio de referencia:**  
   Se analizó la estructura del repositorio _Restaurant_POS_System_ (amritmaurya1504, GitHub), identificando los módulos implementados: gestión de órdenes en tiempo real, reservas de mesa, autenticación con control de roles, integración de pagos y facturación automática. Estos módulos sirvieron como base para la definición del alcance funcional del presente sistema.

- **Documentación técnica:** El diagrama de la arquitectura desplegada, diccionarios de datos, modelo E/R completo y especificación paramétrica de API.
- **Documentación del sistema:** Manual de usuario para operadores, el manual técnico, directrices de instalación en entorno de servidor y parametrización de variables de entorno.
- **Documentación del código:** Detalla la estructura de directorios del proyecto MERN y las dependencias utilizadas en el sistema de la cafetería.
  - **Estructura del Proyecto:** Separación física y lógica entre el cliente (aplicación React en el directorio `/frontend`) y el servidor (API Node.js en el directorio `/backend`).
  - **Librerías y Dependencias Backend:** Uso de `express` para el enrutamiento HTTP, `mongoose` como ODM para modelar los datos de MongoDB, `jsonwebtoken` para la generación y firma de tokens de sesión, `bcryptjs` para el hash de contraseñas, y `cors` para habilitar peticiones seguras desde el frontend.
  - **Librerías y Dependencias Frontend:** Uso de `react` para la construcción de interfaces de usuario interactivas del POS, `react-router-dom` para la navegación entre el terminal de cobro y el panel de administración, y `axios` para consumir las rutas RESTful del backend asíncronamente.

\newpage

# Referencias Bibliográficas {-}

<div id="refs"></div>
