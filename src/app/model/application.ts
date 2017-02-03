export class Application {
  private name: string;
  private technologies: string[];

  constructor(name: string, technologies: string[]) {
    this.name = name;
    this.technologies = technologies;
  }

  getName(): string{
    return this.name;
  }

  getTechnologies(): string[]{
    return this.technologies;
  }
}
