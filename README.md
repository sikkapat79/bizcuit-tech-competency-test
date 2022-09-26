# Beers test

## Commands

### start system and build new image
```sh
npm run build
# OR 
pnpm build
```

### start system to not rebuild image if they are already existed
```sh
npm run start
# OR 
pnpm start
```

### init mockup beer
> Please keep in mind that I did not add error handling (eg. status code 404) in the frontend. Please run this command before playing around.
```sh
npm run mock:beer
# OR 
pnpm mock:beer
```

### stop system and remove image
```sh
npm run destroy
# OR 
pnpm destroy
```
