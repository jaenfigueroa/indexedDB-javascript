const indexedDB = window.indexedDB

if (indexedDB) {
  let db

  //ABRIR LA BASE DE DATOS (NOMBRE, VERSION)
  const request = indexedDB.open('Lista de tareas', 1)

  //EVENTO DE EXITO
  request.onsuccess = () => {
    db = request.result
    console.log('OPEN', db)

    //ESTE METODO, SOLO SE EJECUTA A LA HORA DE ACCEDER A LA BASE DE DATOS POR PRIMERA VEZ
  }

  /*
    - VERIFICAR SI NECESITA ACTUALIZACION
    - SE EJECUTA PRIMERO
    - VERIFICA QUE EXISTE, SI NO, LA CREA
  */
  request.onupgradeneeded = () => {
    db = request.result
    console.log('CREATED', db)

    /*
      TODAS LAS FUNCIONES DE:
      - LAS CREACION DE BASE DE DATOS, ELIMINACION, LECTURA DE BASE DE DATOS,
        SE HARA AQUI DENTRO
      - TODO LO DEMAS VA AQUI DENTRO
    */

    //CREAR UN ALMACEN DE OBJETOS (PODEMOS CREAR LA CANTIDAD QUE QUERAMOS)
    const objectStore = db.createObjectStore('tareas')
    const objectStore2 = db.createObjectStore('tareas2')
  }

  //EVENTO DE ERROR
  request.onerror = (error) => {
    console.log('error', error)
  }


}

