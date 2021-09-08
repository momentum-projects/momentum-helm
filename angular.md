# Angular

## Learning Objectives

1. How to install the base tools for Angular
2. How to create a new Angular App
3. Building a basic component in Angular
4. Using directives in Angular to show data and respond to events

## starting a project

```bash
npm install -g @angular/cli@v11-lts

ng new -S linkme-[yourname]
# Yes - type-checking
# Yes - add routing
# Use SCSS for our CSS language

cd linkme-[yourname]
npm i -D @angular-eslint/template-parser@4
ng add @angular-eslint/schematics
ng g @angular-eslint/schematics:convert-tslint-to-eslint --remove-tslint-if-no-more-tslint-targets --ignore-existing-tslint-config

# Install additional plugins
npm install --save-dev @typescript-eslint/eslint-plugin eslint-plugin-prettier

# Install Prettier and Prettier-ESLint dependencies
npm install --save-dev prettier prettier-eslint eslint-config-prettier
```

## Getting Oriented

1. What happens when Angular starts? What's the difference between `index.html` in my codebase vs the one delivered in the browser?
1. Creating a component - orient to files
    - go over css
    - templateUrl vs template
    - adding a component manually
1. activity - create two components

## Basics Components & Directives

1. Add simple.css
1. Data Binding
    - String interpolation
    - properties
    - methods
    - getter
    - encoding
    - string interpolation vs property binding (innerText)
1. Reacting to Events - (click)
1. *ngIf
1. *ngFor
1. *ngFor - trackBy
1. ng-container
1. *ngModel - needs imported via `import { FormsModule } from "@angular/forms";` and added to `imports` in `app.module.ts`

## Activity 
Build a tic-tac-toe game with Angular

Include:

- a start game button that clears the board
- allow plays in empty squares with alternating "X"s and "O"s
- a grid with 3x3 and borders using CSS

Bonus:
- detect a win
- beautiful styles
- utilize `for` loop(s) to create the board

## Angular Lesson 2 - Adding Ant Design

1. ngStyle
1. ngClass
1. install
    - `ng add ng-zorro-antd`
    - restore `app.component.html`
    - remove `sipmle.css`
1. [Ant Design](https://ng.ant.design)
    - creating a [button](https://ng.ant.design/components/button/en)

## resources

- [Angular Directives](https://angular.io/guide/built-in-directives)
- [Angular ESLint](https://github.com/angular-eslint/angular-eslint) and [Angular ESLint with Angular 11](https://github.com/angular-eslint/angular-eslint#quick-start-with-angular-before-v12)
- [Linting Thoughts](https://dev.to/dreiv/using-eslint-and-prettier-with-vscode-in-an-angular-project-42ib)
- [Ant CSS Component Library](https://ng.ant.design/docs/introduce/en))

## useful commands

* run the server `ng serve`
* run the linter `ng lint` and to fix problems `ng lint --fix`
