- Validación en findAll:
Se agregó una verificación para comprobar si la lista de usuarios estaba vacía.
En caso de que no existan registros, en lugar de devolver un arreglo vacío sin explicación, se responde con un mensaje indicando que “No hay usuarios registrados”.

- Validación en findById:
Se utiliza la función del modelo para buscar el usuario con ese id.
Si el usuario no existe, se responde con un estado 404 (Not Found) y un mensaje “Usuario no encontrado”.

- Validación en addUser:
Se comprobó que los campos obligatorios name y email estén presentes en el cuerpo de la solicitud.
Se validó que el correo electrónico tenga un formato correcto usando una expresión regular.
Si el campo age está presente, se verifica que sea un número válido y mayor a 0.

- Validación en updateUser:
Si se intenta actualizar el campo email, se valida que tenga un formato válido (misma expresión regular que en addUser).
Si se modifica la edad, se comprueba que sea un número positivo.
En caso de que el usuario no exista, se responde con un 404 (Not Found).

Fueron las validaciones que se me ocurrieron.
