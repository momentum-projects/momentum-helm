class Profile {
  firstName: string;
  lastName: string;
  title: string;
  experience: string[];

  constructor(
    firstName: string,
    lastName: string,
    title: string,
    experience: string[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.experience = experience;
  }
}

class Profile2 {
  constructor(
    public firstName: string,
    public lastName: string,
    public title: string,
    public experience: string[]
  ) {}
}
