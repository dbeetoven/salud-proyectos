export class Activity {
  public description: string;
  public creationDate: Date;

  constructor( description: string, creationDate: Date ){
    this.description = description;
    this.creationDate = creationDate;
  }
/*
  getDescription(): string {
    return this.description;
  }
  getCreationDate(): Date {
    return this.creationDate;
  }
*/
}
