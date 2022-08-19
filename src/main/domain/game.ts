export type GameProps = {
  id: number;
  name: string;
  platform: string;
  multiplayer: boolean;
  price: number;
  launchDate: string;
  genre: string;
  developer: string;
}

export class Game {
  public gameProps: Required<GameProps>;

  constructor(gameProps: GameProps) {
    this.gameProps = {
      ...gameProps
    }
  }

  get id(): number {
    return this.gameProps.id;
  }

  set id(value: number) {
    this.gameProps.id = value;
  }

  get name(): string {
    return this.gameProps.name;
  }

  set name(value: string) {
    this.gameProps.name = value;
  }

  get platform(): string {
    return this.gameProps.platform;
  }

  set platform(value: string) {
    this.gameProps.platform = value;
  }

  get multiplayer(): boolean {
    return this.gameProps.multiplayer;
  }

  set multiplayer(value: boolean) {
    this.gameProps.multiplayer = value;
  }

  get price(): number {
    return this.gameProps.price;
  }

  set price(value: number) {
    this.gameProps.price = value;
  }

  get launchDate(): string {
    return this.gameProps.launchDate;
  }

  set launchDate(value: string) {
    this.gameProps.launchDate = value;
  }

  get genre(): string {
    return this.gameProps.genre;
  }

  set genre(value: string) {
    this.gameProps.genre = value;
  }

  get developer(): string {
    return this.gameProps.developer;
  }

  set developer(value: string) {
    this.gameProps.developer = value;
  }

  toJSON() {
    return {
      ...this.gameProps,
    };
  }
}
