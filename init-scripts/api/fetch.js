#!/usr/bin/env node

const RANDOM_BEER_URI = 'https://random-data-api.com/api/beer/random_beer';
const ADD_BEER_URI = 'http://host.docker.internal:4200/v1/beers';

const fetchRandomBeer = async () => {
  try {
    const response = await fetch(RANDOM_BEER_URI);
    const { id, ...beer } = await response.json();

    return beer;
  } catch (err) {
    console.error(`[ERROR] can't fetch beer from ${RANDOM_BEER_URI}`);
    console.error(err);

    throw err;
  }
};

const addBeer = async (beer) => {
  try {
    const response = await fetch(ADD_BEER_URI, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(beer),
    });

    return await response.json();
  } catch (err) {
    console.error(`[ERROR] can't fetch beer from ${ADD_BEER_URI}`);
    console.error(err);

    throw err;
  }
};

const initDb = async () => {
  console.log('[INFO] add new beer into database for 20 beers.');
  const prepareBeer = new Array(20).fill(null).map(async () => {
    const fetchedBeer = await fetchRandomBeer();
    const beer = await addBeer(fetchedBeer);

    return beer;
  });

  const beers = await Promise.all(prepareBeer);

  console.log(`[INFO] beers are already add to store for ${beers.length}`);
  console.table(beers);
};

initDb();
