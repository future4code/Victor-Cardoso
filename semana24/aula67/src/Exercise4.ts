const mapArray = (array: string[], i: number = array.length - 1) => {
  if (i >= 0) {
    mapArray(array, i - 1);
    console.info("Indice: ", i, array[i]);
  }
};

const nome = ["Victor", "Cardoso", "Pudo", "Torres"];

mapArray(nome);
