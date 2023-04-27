const indexedDB = window.indexedDB
const formulario = document.getElementById('form')

if (indexedDB && form) {
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
    const objectStore = db.createObjectStore('tareas', {
      // autoIncrement: true //CON ESTO , DECIMOS QUE LA CLAVE SE AUTOGENERE
      keyPath: 'taskTitle' // ESTA ES OTRA FORMA DDE DAR CLAVE, EN ESTA CASO LE INDICAMOS QUE VALOR DEL OBJETO QUE QUEREMOS GUARDAR SERA LA CLAVE
    })
    console.log('ALMACEN CREADO', objectStore)
  }

  //EVENTO DE ERROR
  request.onerror = (error) => {
    console.log('error', error)
  }

  const addData = (data) => {
    //CREAMOS UNA TRASACCION
    const transaction = db.transaction(['tareas'], 'readwrite') // (ALMACEN DE DATOS, MODO DE TRASACCION (readonly, readwrite) )

    //ABRIR EL ALMACEN DE DATO
    const objectStore = transaction.objectStore('tareas')

    const request = objectStore.add(data) //AQUI COMO SEF¿GUNDO PARAMETRO VA LA CLAVE - PERO AHORA SE AUTOGENERA
    console.log(request)
  }

  formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = {
      taskTitle: e.target.task.value,
      taskPriority: e.target.priority.value
    }

    // console.log(data)
    addData(data)
  })

}

