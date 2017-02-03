export class Risk {
  private description: string;
  private action: string;
  private expirationDate: Date;
  private gdm: string;

  constructor(description: string, action: string, expirationDate: Date, gdm: string) {
    this.description = description;
    this.action = action;
    this.expirationDate = expirationDate;
    this.gdm = gdm;
  }
}
