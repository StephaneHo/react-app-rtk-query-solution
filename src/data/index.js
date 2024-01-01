const rentingCategories = [
  "Outillage professionnel",
  "Espaces verts",
  "Transports et manutention",
  "Elevation et travail en hauteur",
  "Terrassement et routes",
  "Demolition et  Gros oeuvre",
];

export const createRandomRentalCategory = () => {
  return rentingCategories[
    Math.floor(Math.random() * rentingCategories.length)
  ];
};
