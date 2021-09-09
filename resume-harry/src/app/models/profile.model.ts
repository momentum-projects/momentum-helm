export class Profile {
  constructor(
    public userId: number,
    public firstName: string,
    public lastName: string,
    public title: string,
    public experience: string[],
    public connections: number[],
    public isActive: boolean
  ) {}
}

export const profiles = [
  new Profile(
    0,
    'Harry',
    'Stephens',
    'Mr.',
    ['Product Designer 2020', 'Developer 2021'],
    [],
    false
  ),
  new Profile(
    1,
    'David',
    'Rasch',
    'Mr.',
    ['Developer 2020', 'Angular Instructor 2021'],
    [],
    false
  ),
  new Profile(
    2,
    'Alan',
    'Cox',
    'Mr.',
    ['CFO 2017-2018', 'CEO 2018-2019', 'CTO 2020-2021'],
    [],
    false
  ),
  new Profile(
    3,
    'Dee',
    'Meyers',
    'Ms.',
    ['Student 2019', 'Student 2020', 'Developer 2021'],
    [],
    false
  ),
];
