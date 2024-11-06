import { countries } from "@myracketpartner/common";

// Usa import.meta.glob para importar las banderas
const flagModules = import.meta.glob("/src/images/flags/*.svg");

// Función para obtener el nombre y la bandera del país
export async function getCountryName(value) {
  if (!value) return null;

  // Encuentra el nombre del país según el valor proporcionado
  const country = countries.find((country) => country.value === value);
  console.log(country);
  // Si se encuentra el país, retorna el nombre y la bandera importada dinámicamente
  if (country) {
    // Obtiene la bandera importada de manera dinámica
    const flagModule = flagModules[`/src/images/flags/${value}.svg`];
    // console.log(flagModule);
    // Si el módulo de la bandera existe, lo carga
    if (flagModule) {
      const flag = (await flagModule()).default;
      console.log(flag);
      return {
        name: country.label,
        flag: flag,
      };
    }

    // Si el módulo de la bandera no existe, retorna el nombre sin bandera
    return {
      name: country.label,
      flag: null,
    };
  }

  // Si no se encuentra el país, retorna null
  return null;
}
