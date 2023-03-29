const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const cors = require('cors');
app.use(cors(), express.json());
port = 3080;

app.listen(port, () => {
  console.log("Server listening on to port::" + port);
});


const testFolder = 'C:\\IdeaProjects\\angular-exam-2\\src\\assets\\UF1_ExamenAaD';
const copyFile = "C:\\IdeaProjects\\angular-exam-2\\src\\assets\\UF1_ExamenAaD\\Documents\\FitxerOrigen.txt";
const destineFile = "C:\\IdeaProjects\\angular-exam-2\\src\\assets\\UF1_ExamenAaD\\Documents\\Docs1\\FitxerDesti.txt";
const image2Path = "C:\\IdeaProjects\\angular-exam-2\\src\\assets\\UF1_ExamenAaD\\Imatges\\Imatgef2.png";


const directoryPath = path.join(__dirname, testFolder);

//Exercici 1
// function llegeixDirectori(directori) {
//   const arxius = fs.readdirSync(directori);
//     arxius.forEach((arxiu) => {
//       const ruta = directori + '/' + arxiu;
//       const stats = fs.statSync(ruta);
//       if (stats.isDirectory()) {
//         console.log(ruta);
//         llegeixDirectori(ruta);
//       } else {
//         console.log(ruta);
//       }
//     });
//   }
//   console.log(testFolder)
//   llegeixDirectori(testFolder);

//Exercici 2
// fs.readFile(copyFile, 'utf8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//
//   if (!fs.existsSync(destineFile)) {
//     fs.writeFile(destineFile, data, (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log(`El contingut del fitxer ${copyFile} s'ha copiat correctament en el fitxer ${destineFile}.`);
//     });
//   } else {
//     fs.appendFile(destineFile, data, (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log(`El contingut del fitxer ${copyFile} s'ha concatenat correctament en el fitxer ${destineFile}.`);
//     });
//   }
// });

//Exercici 3
// app.post("/ex3", (req, res) => {
//   const readableStream = fs.createReadStream(image2Path, { highWaterMark: 16384, encoding: 'utf-8' });
//   console.log(path.basename(image2Path));
//   readableStream.on('data', (chunk) => {
//       const buf = Buffer.from(chunk)
//       console.log(buf);
//     }
//   );
// });

//Exercici 4
app.post("/ex4", (req, res) => {
  const readableStream = fs.createReadStream(image2Path, { highWaterMark: 16384 });
  console.log(path.basename(image2Path));

  readableStream.on('error', (err) => {
    console.error("No hi ha res per llegir");
  });

  readableStream.on('data', (chunk) => {
      console.log(chunk);
    }
  );
});
