function downloadFile(blablabla) {
  // Long running function

  let file = "The file";

  blablabla(file);
}

function saveFile(file) {
  // Saves the file and returns the file location

  let fileLocation = file + ": saved in Downloads";

  console.log(fileLocation);
}

downloadFile(saveFile);
