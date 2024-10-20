---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Data Annotations vs Fluent Validation: Object Validation in .NET'
pubDate: 2024-07-20
description: 'Data Annotations vs Fluent Validation: Object Validation in .NET'
author: 'Manases Lovera'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'El logotipo completo de Astro.'
tags: ["Data Annotations", "Fluent Validation", ".NET", "programmer", "software", "developer"]
---

Tengo un debate interno de cual es mejor para validar DTOs, esta es la conclucion a la que llegue:

Ambos te permiten validar igual, te proveen las mismas herramientas.

Ambos son igual de facil para comprobar validacion cuando ya todo esta configurado:

### DataAnnotation:
```c#

    if(!ModelState.IsValid)
        return BadRequest(ModelState);

```
### Fluent Validation:
```c#

    var validationResult = await validator.ValidateAsync(Dto);
    if (!validationResult.IsValid)
    {
        return BadRequest(validationResult.Errors);
    }

```
Data Annotations es mas facil de implementar, fluent validation requiere otro archivo, instalacion, Inyectar la dependencia y es mas codigo validar.

En FluentValidation cuando la data no es válida, los errores llegan como un array con todo lo que no es válido, en cambio, en data annotations es un objeto con cada propiedad y cada una viene con un arreglo con el nombre de cada propiedad, me gusta mas como fluent validation maneja esta parte, menos complicado para el frontend diría yo.

Ya que también debemos tomar en cuenta que el codigo hay que hacerlo tanto para tu leerlo como para que otros lo lean, fluent validation te da una mejor forma de ver todas las validaciones que tendra el DTO para ser válido sin tener que ir por cada DTO a revisar los data annotations.

En mi opinion, aunque data annotations al ser libreria interna y es mucho mas fácil de implementar en tu código, también opino que FluentValidation puede permitir al developer entender mas fácil, rápido y accesible, y proveer de mejor forma de errores que pueden tener mejor organización y vale la pena tomarse unos minutos de mas para instalar, configurar, etc.