# Perfil del Proyecto

## Introducción

Las clínicas y veterinarias que no cuentan con un sistema digital de gestión enfrentan serias limitaciones en el seguimiento de la salud de las mascotas. Actualmente, gran parte de la información —como historial médico, tratamientos, o antecedentes clínicos— se registra de manera manual en documentos físicos. Este procedimiento genera riesgos de pérdida de datos, dificulta la recuperación rápida de la información y provoca una desconexión entre las distintas áreas de atención, como consulta, farmacia, laboratorio o servicios especializados. Estas deficiencias impactan en la eficiencia del servicio, la calidad del cuidado brindado y la confianza de los propietarios de las mascotas.
Este proyecto busca proponer una solución digital parcial, centrada en los módulos clave que podrían ser desarrollados en un periodo de seis semanas. La solución tiene como objetivo facilitar el trabajo del personal médico, mejorar la trazabilidad del paciente y optimizar la atención médica, mediante un sistema web que digitalice parte del flujo de atención en consultorios de medicina familiar

## Identificación del problema

![Diagrama de Ishikawa](assets/1_izhikawa.png)

El presente diagrama de Ishikawa expone de manera clara las causas principales que generan la baja trazabilidad, la pérdida de información y la lentitud en el registro de atenciones en clínicas veterinarias que dependen de procesos manuales. Estas causas se agrupan en seis categorías clave: materiales, datos, tecnología, medición, tiempo, personal y métodos. Dentro de cada una se identifican factores como la dependencia de documentos físicos que se deterioran o extravían, la dispersión del historial clínico y los errores de transcripción manual, la ausencia de un sistema digital de gestión, la falta de métricas de seguimiento del paciente, los retrasos en la búsqueda de historiales, la resistencia del personal a la digitalización, y el uso de registros manuales y citas verbales. Todo esto repercute negativamente en la eficiencia del servicio, en la continuidad de los tratamientos y en la confianza de los propietarios de las mascotas.

El análisis evidencia que el problema no se limita únicamente a la falta de herramientas tecnológicas, sino que abarca también aspectos humanos y organizativos dentro de las clínicas. La sobrecarga de tareas manuales, la resistencia al cambio, junto con la inexistencia de trazabilidad clínica, son obstáculos que impiden ofrecer una atención moderna, ágil y confiable. Por tanto, la solución propuesta —un sistema web parcial— busca abordar directamente estas causas, ofreciendo una plataforma que centralice la información clínica, optimice la programación de consultas.


## Objetivo General

Diseñar, modelar y prototipar un sistema web que digitalice parcialmente los procesos clave de atención veterinaria y la trazabilidad de historiales veterinarios.

## Objetivos Específicos

-   Desarrollar funcionalidades para la gestión de dueños, mascotas y consultas.
-   Diseñar una estructura de base de datos relacional para almacenar consultas, mascotas, dueños de forma ordenada.
-   Diseñar un módulo para que un recepcionista cree una consulta
-   Diseñar un módulo para que un veterinario registre los datos de consultas veterinarias 

-   Implementar un sistema de autenticación de usuarios y roles (recepcionista y  veterinario).

## Límites y Alcances

### Límites: 
-   No se contemplará la digitalización completa de todas las áreas 
-   No se desarrollarán aplicaciones móviles.
-   No se llevará el prototipo a producción.
-   No se contemplará conexión entre veterinarias, sino se centrará exclusivamente en una sola veterinaria.
-   No se desarrollan funcionalidades avanzadas de gestión de sesiones (recuperar contraseñas, cambiar datos personales o cambiar contraseña)
-   El prototipo no estará optimizado para manejar múltiples usuarios simultáneos ni grandes volúmenes de datos. No se realizarán pruebas de rendimiento ni se implementarán técnicas de optimización de bases de datos (como índices complejos o particionamiento) para mejorar la velocidad. 
-   No se contemplará seguimiento de desparasitación u otros tipos de tratamientos veterinarios.


### Alcances: 
-   Registro digital de mascota, dueños e historial veterinario básico 
-   Gestión de historial veterinario con información del veterinario que lo atendió.
-   Implementación de roles diferenciados para personal veterinario 
-   Visualización de reportes básicos para historial veterinario 
-   Trazabilidad de las mascotas por propietario mediante historiales veterinarios digitales centralizados.
-   Trazabilidad de las citas de las mascotas por propietario y veterinario.


## Tecnologías a usar

\begin{longtable}{|p{3cm}|p{3cm}|p{9cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Capa & \bfseries \color{white} Tecnología & \bfseries \color{white} Justificación \\ \hline
\endhead
\textbf{Backend} & Python Django & Framework robusto para backend, con soporte de seguridad y APIs RESTful. \\ \hline
\textbf{Frontend} & React & Framework modular y mantenible, con soporte para JavaScript y diseño responsivo. \\ \hline
\textbf{Base Datos} & PostgreSQL & Motor de base de datos relacional confiable, con integridad referencial. \\ \hline
\textbf{Contenedor} & Docker & Permite empaquetar la aplicación garantizando ejecución idéntica en todos los entornos. \\ \hline
\textbf{Hosting} & AWS & Plataforma en la nube que facilita el despliegue y pruebas de prototipos. \\ \hline
\end{longtable}

---

# Diagrama de Contexto

## Identificacion del proyecto

### Nombre del proyecto TPS

Sistema Veterinario

### Breve descripcion del proposito del sistema

Diseñar, modelar y prototipar un sistema web parcial para consultorios veterinarios. Enfocandose en las consultas veterinarias, esto podria mejorar la 
trazabilidad de los pacientes y optimiza la atención al eliminar la dependencia de registros 
manuales. El sistema incluye la gestión de consultas y un sistema de autenticación con para el personal y los dueños de mascota.

## Modelo de contexto del sistema

A continuacion se muestra el diagrama de contexto del sistema:

![Diagrama de Contexto](assets/2_contexto.png)

## Descripcion de actores y flujos
\begin{longtable}{|p{3cm}|p{2cm}|p{5cm}|p{5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Actor & \bfseries \color{white} Tipo & \bfseries \color{white} Descripción Rol & \bfseries \color{white} Flujo Información \\ \hline
\endhead
\textbf{Veterinario} & Persona & Personal médico encargado de la atención veterinaria de las mascotas & \textbf{Entrada:} Datos consulta. \newline \textbf{Salida:} Historial, Consultas. \\ \hline
\textbf{Recepcionista} & Persona & Personal encargado de la programacion de consultas y registro de dueños y mascotas & \textbf{Entrada:} Datos cita, dueño y consulta. \newline \textbf{Salida:} Horarios, Citas. \\ \hline
\end{longtable}



# Diagrama BPMN generado por BizAgi

\includepdf[pages=-, pagecommand={\thispagestyle{plain}}, scale=0.85]{assets/bpmn.pdf}

# Requerimientos funcionales y no funcionales

## Requerimientos funcionales

-   Registrar productos y ventas.
-   Actualizar stock.
-   Consultar inventario.

## Requerimientos no funcionales

-   Sistema web parcial
-   Base de datos relacional
-   Interfaz gráfica
-   Seguridad
-   Respaldo
-   Mantenimiento
-   Soporte

# Alcances y limitaciones (C++)

**Alcances:** Una sola farmacia, ABM de productos/ventas/usuarios.
**Limitaciones:** Sin facturación fiscal, monousuario, local (archivos), sin interfaz gráfica.

# Herramientas y tecnologías (C++)

\begin{longtable}{|p{5cm}|p{5cm}|}
\hline
\rowcolor{headerblue} \bfseries \color{white} Categoría & \bfseries \color{white} Herramienta \\ \hline
\endhead
\textbf{Lenguaje} & C++ \\ \hline
\textbf{Entorno} & Visual Studio Code \\ \hline
\textbf{Almacenamiento} & Archivos locales \\ \hline
\textbf{Control Versiones} & Git \\ \hline
\end{longtable}