export class Risk {
  public description: string;
  public action: string;
  public expirationDate: Date;
  public gdm: string;

  constructor(description: string, action: string, expirationDate: Date, gdm: string) {
    this.description = description;
    this.action = action;
    this.expirationDate = expirationDate;
    this.gdm = gdm;
  }
/*
  getDescription(): string {
    return this.description;
  }
  getAction(): string {
    return this.action;
  }
  getExpirationDate(): Date {
    return this.expirationDate;
  }
  getGDM(): string {
    return this.gdm;
  }
*/
}
