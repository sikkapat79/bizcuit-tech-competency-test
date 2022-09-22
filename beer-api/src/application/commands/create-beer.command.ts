export class CreateBeerCommand {
  constructor(
    public readonly uid: string,

    public readonly brand: string,

    public readonly name: string,

    public readonly style: string,

    public readonly hop: string,

    public readonly yeast: string,

    public readonly malts: string,

    public readonly ibu: string,

    public readonly alcohol: string,

    public readonly blg: string,
  ) {}
}
