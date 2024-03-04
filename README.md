# Reglas de CommitLint

Este repositorio contiene el archivo de reglas de CommitLint utilizado en los proyectos O2O para mantener la consistencia y el formato en los mensajes de commit. Commitlint es una herramienta útil para aplicar convenciones de mensajes de commit facilitando la lectura y gestión de cambios en el código.

## ¿Qué es CommitLint?

[CommitLint](https://commitlint.js.org) nos ayuda a garantizar que los mensajes de commit cumplan un formato y una convención estandarizados por el equipo O2O.

## Integración

Para integrar las reglas creamos un submódulo de este repositorio y modificamos el path de los hooks de Git para que se utilice el nuestro por defecto.
