import { btnSave } from './domElements';

// ABRIR LA BASE DE DATOS (NOMBRE, VERSION)
const miBase = indexedDB.open('miBaseDeDatos', 1)

//COMPROBAR SI LA BASE DE DATOS EXISTE, SI NO LA CREA AUTOMATICAMENTE
miBase.onupgradeneeded = (e) => {

  // Obtener la referencia a la base de datos
  const db = e.target.result

  //CREAR UN ALMACEN DE OBJETOS (nombre, clave)
  db.createObjectStore('miAlmacen', { keyPath: 'id' })

  // AGREGAR UN OBJETO { id: 123, name: 'Juan' } al almacén de objetos
  const transaction = e.target.transaction; // Obtener la transacción actual
  const objectStore = transaction.objectStore('miAlmacen') // Obtener el almacén de objetos 'miAlmacen'

  const datoAGuardar = { id: 123, name: 'Juan' } // CREAR EL OBJETO A AGREGAR
  objectStore.add(datoAGuardar) // AGREGAR EL OBJETO AL ALMACÉN DE OBJETOS
}

// Callback que se ejecuta cuando se abre la base de datos exitosamente

//EVENTO DE EXITO
miBase.onsuccess = (e) => {
  console.log('exito', e)
  // const db = e.target.result; // Obtener la referencia a la base de datos

  // // Obtener una transacción de solo lectura para el almacén de objetos 'miAlmacen'
  // const transaction = db.transaction(['miAlmacen'], 'readonly')
  // const store = transaction.objectStore('miAlmacen')

  // // Obtener el objeto con clave '123' del almacén de objetos
  // const request = store.get(123) // GET -> PARA OBTENER , BUSCA POR LA CLAVE

  // //////////////////////////////////////////
  // request.onsuccess = (e) => {
  //   var data = e.target.result
  //   console.log(data.name) // Mostrará 'Juan'
  // }
}

//EVENTO DE ERROR
miBase.onerror = (e) => {
  console.log('error', e)
}

//////////////////////////////
//////////////////////////////
//////////////////////////////
// const agregarObjeto = (clave, valor) => {
//   miBase.onupgradeneeded = (e) => {
//     const db = e.target.result // Obtener la referencia a la base de datos

//     // CREAR un almacén de objetos llamado 'miAlmacen' con una clave 'id'
//     db.createObjectStore('miAlmacen', { keyPath: 'id' })

//     // AGREGAR UN OBJETO { id: 123, name: 'Juan' } al almacén de objetos
//     const transaction = e.target.transaction; // Obtener la transacción actual
//     const objectStore = transaction.objectStore('miAlmacen') // Obtener el almacén de objetos 'miAlmacen'

//     const datoAGuardar = { id: clave, name: valor } // CREAR EL OBJETO A AGREGAR
//     objectStore.add(datoAGuardar) // AGREGAR EL OBJETO AL ALMACÉN DE OBJETOS
//   }
// }

// btnSave.addEventListener('click', agregarObjeto(27, 'jaen'))

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


