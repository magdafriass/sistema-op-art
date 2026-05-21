# sistema-op-art
solemne II pensamiento computacional p5.js

# Sistema Visual Dinámico e Interactivo en p5.js

## Información del proyecto

Nombre: Sistema Geométrico Interactivo  
Autora: Magdalena Paz Frías Aldama

---

## Descripción objetiva

Este proyecto es un sistema visual dinámico e interactivo desarrollado en p5.js. Se genera una composición basada en una grilla de figuras geométricas que reaccionan constantemente al movimiento del mouse y a la interacción del teclado.

En pantalla se observan círculos y cuadrados organizados en una estructura repetitiva. El tamaño de las figuras cambia dependiendo de la distancia entre cada figura y la posición del mouse.

El sistema utiliza inputs continuos como el movimiento del mouse y la presión de teclas para modificar parámetros visuales.

Los outputs generados son cambios en tamaño, color y distribución visual de las formas geométricas.

---

## Descripción conceptual

La idea central del proyecto es explorar la repetición, variación y respuesta dinámica dentro de un sistema visual computacional.

El trabajo dialoga con el Diseño Generativo y principios del Op Art, ya que utiliza repetición modular, variaciones visuales y una relación directa entre interacción y composición visual.


- Diseño generativo basado en patrones repetitivos.
- Composición modular geométrica.
- Sistemas visuales interactivos.

## diseño explorado

- Repetición
- Variación
- Interactividad
- Transformación visual en tiempo real

---

## Input / Output y sistema

## Inputs
- Movimiento del mouse (mouseX, mouseY)
- Presión de teclas

## Procesos
El sistema recorre una grilla completa utilizando bucles `for`.

Se calcula la distancia entre el mouse y cada figura usando `dist()`.

Luego se usa `map()` para transformar esa distancia en distintos tamaños.

Dependiendo del modo activo, se modifican colores y comportamiento visual.

## Outputs
- Cambio de tamaño en figuras
- Cambio de color
- Composición dinámica
- Variación entre círculos y cuadrados

## Interactividad
El movimiento del mouse modifica el tamaño de los elementos visuales.

Cada vez que se presiona una tecla, cambia la paleta de color del sistema.

---

## Diagrama de flujo

El sistema recibe información del mouse y teclado.

Luego procesa posición, distancia y reglas visuales.

Finalmente genera una respuesta gráfica dinámica en tiempo real.

---

## Imágenes

Aquí se puede agregar la imagen del diagrama de flujo:

![Diagrama de flujo](diagrama-flujo.png)


##link editable
https://editor.p5js.org/magdalenaa/sketches/4_ovgqCo4

