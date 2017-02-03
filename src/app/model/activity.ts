export class Activity {
  private description: string;
  private creationDate: Date;

  constructor( description: string, creationDate: Date ){
    this.description = description;
    this.creationDate = creationDate;
  }

  getDescription(): string {
    return this.description;
  }
  getCreationDate(): Date {
    return this.creationDate;
  }
}
