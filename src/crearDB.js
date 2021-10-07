import { getFirestore } from "./firebase/firebaseConfig";

//copiar este codigo en algun componente antes del return de app.

//   React.useEffect(()=> {
   

//    const items = [
//         {
//             "title": "CABLE PUENTE",
//             "description": "Cable puente de bateria 200 amp",
//             "imgDir": "https://i.ibb.co/WkBypBj/CABLE-PUENTE-DE-BATERIA.jpg",
//             "price": 1500,
//             "stock": 4,
//             "categoryId": "Electricidad"
//         },
//         {
//             "title": "CINTA VINI",
//             "description": "Cinta vini tape blanca y negra x10 mts",
//             "imgDir": "https://i.ibb.co/KqJfM2z/CINTA-VINI-TAPE-BLANCA-Y-NEGRA.jpg",
//             "price": 200,
//             "stock": 10,
//             "categoryId": "Electricidad"
//         },
//         {
//             "title": "CABLE PARA ARRANQUE DE BATERIA",
//             "description": "Cable para arranque de bateria 50mm",
//             "imgDir": "https://i.ibb.co/KqJfM2z/CINTA-VINI-TAPE-BLANCA-Y-NEGRA.jpg",
//             "price": 1200,
//             "stock": 5,
//             "categoryId": "Electricidad"
//         },
//         {
//             "title": "CABLE PARA SOLDAR",
//             "description": "Cable para soldar unipolar 1*50",
//             "imgDir": "https://i.ibb.co/KqJfM2z/CINTA-VINI-TAPE-BLANCA-Y-NEGRA.jpg",
//             "price": 2000,
//             "stock": 6,
//             "categoryId": "Electricidad"
//         },
//         {
//             "title": "SOLDADOR NORMALIZADO",
//             "description": "Soldador normalizado 60amp",
//             "imgDir": "https://i.ibb.co/KqJfM2z/CINTA-VINI-TAPE-BLANCA-Y-NEGRA.jpg",
//             "price": 1050,
//             "stock": 3,
//             "categoryId": "Electricidad"
//         },
//         {
//             "title": "SOLDADOR ECONOMICO",
//             "description": "Soldador económico de madera 40amp",
//             "imgDir": "https://i.ibb.co/KqJfM2z/CINTA-VINI-TAPE-BLANCA-Y-NEGRA.jpg",
//             "price": 570,
//             "stock": 7,
//             "categoryId": "Electricidad"
//         },
//         {
//             "title": "LLAVE TERMICA TRIPOLAR SICA",
//             "description": "Llave térmica tripolar SICA 50amp",
//             "imgDir": "https://i.ibb.co/KqJfM2z/CINTA-VINI-TAPE-BLANCA-Y-NEGRA.jpg",
//             "price": 3100,
//             "stock": 2,
//             "categoryId": "Electricidad"
//         },
//         {
//             "title": "LLAVE TERMICA TRIPOLAR JELUZ",
//             "description": "Llave térmica tripolar JELUZ 50amp",
//             "imgDir": "https://i.ibb.co/KqJfM2z/CINTA-VINI-TAPE-BLANCA-Y-NEGRA.jpg",
//             "price": 1700,
//             "stock": 2,
//             "categoryId": "Electricidad"
//         },
//         {
//             "title": "ESTUFA HALOGENA",
//             "description": "Estufa halógena de 4 velas",
//             "imgDir": "https://i.ibb.co/KqJfM2z/CINTA-VINI-TAPE-BLANCA-Y-NEGRA.jpg",
//             "price": 9100,
//             "stock": 2,
//             "categoryId": "Electricidad"
//         },
//         {
//             "title": "CALOVENTOR",
//             "description": "Caloventor 1000/2000 W",
//             "imgDir": "https://i.ibb.co/KqJfM2z/CINTA-VINI-TAPE-BLANCA-Y-NEGRA.jpg",
//             "price": 4500,
//             "stock": 2,
//             "categoryId": "Electricidad"
//         },
//         {
//             "title": "LAMPARAS LED LUZ CALIDA INTERELEC",
//             "description": "Lámparas LED A60 E-27 luz cálida INTERELEC 9w",
//             "imgDir": "https://i.ibb.co/KqJfM2z/CINTA-VINI-TAPE-BLANCA-Y-NEGRA.jpg",
//             "price": 160,
//             "stock": 12,
//             "categoryId": "Electricidad"
//         },
//         {
//             "title": "LAMPARAS LED LUZ CALIDA BAW",
//             "description": "Lámparas LED A60 E-27 luz cálida BAW 10w",
//             "imgDir": "https://i.ibb.co/KqJfM2z/CINTA-VINI-TAPE-BLANCA-Y-NEGRA.jpg",
//             "price": 150,
//             "stock": 15,
//             "categoryId": "Electricidad"
//         },
//     ];


// const db = getFirestore();
// const itemsCollection = db.collection("items");


// items.forEach((item) => {
//     itemsCollection
//         .add(item)
//         .then((docRef) => console.log('Item agregado exitosamente: ',docRef.id))
//         .catch((error) => console.log(error));

//     });
//   },[])