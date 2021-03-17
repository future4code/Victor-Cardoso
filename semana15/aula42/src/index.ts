import express, { Request, Response } from "express";

import { countries, country } from './countries'

const app = express();

const PORT: number = 3001;

app.get("/countries/all", (req: Request, res: Response) => {
  try {
    const allCountries = countries.map((country) => {
      return country;
    })

    res.status(200).json({allCountries});
  } catch (err) {
    res.status(404).json({ message: `${err.message}`});
    throw new Error("Not found");
  }
});

app.get("/countries/search", (req: Request, res: Response) => {
  let result: country[] = countries;
  try {
    if (!req.query.name && !req.query.capital && !req.query.continent) {
      throw new Error("No search query params were found. Try again!");
    }
    
    if (req.query.name) {
      result = result.filter(country => country.name.includes(req.query.name as string))
    }
    if (req.query.capital) {
      result = result.filter(country => country.capital.includes(req.query.capital as string))
    }
    if (req.query.continent) {
      result = result.filter(country => country.continent.includes(req.query.continent as string))
    }
    
    const filteredCountries = result.map((country) => {
      return country
    });

    res.status(200).json({filteredCountries});
  } catch (err) {
    res.status(400).send(err.message);
  }
})

app.get("/countries/:id", (req: Request, res: Response) => {
  try {
    const allCountries = countries.find((country: country) => {
      return country.id === Number(req.params.id);
    })

    res.status(200).json({allCountries});
  } catch (err) {
    res.status(404).json({ message: `${err.message}`});
    throw new Error("Not found")
  }
});

app.put("/countries/edit/:id", (req: Request, res: Response) => {
  let errorCode: number = 404;

  try {
    const countryIndex: number = countries.findIndex((country) => country.id === Number(req.params.id))
    if (countryIndex === -1) {
      throw new Error("Country not found.")
    }
  
    if (!req.body.name && !req.body.capital) {
      throw new Error("Update parameters not found.")
    }
  
    if (req.body.name) {
      countries[countryIndex].name = req.body.name;
    }
    if (req.body.capital) {
      countries[countryIndex].capital = req.body.capital;
    }

    res.status(200).send("Update Successful!")
  } catch (err) {
    console.log(err)
    res.status(errorCode).send(err.message)
  }
})


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});