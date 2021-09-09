# More Angular

## Learning Objectives

1. What happens when we nest components?
1. Understand the lifecycle of components
1. See how we put together a basic application

## building a directive

1. HostListener('click') - method listener and HostBinding('class.open') - property

## nesting components

1. Connecting data from one component to another through events
2. 2-way data-binding

## lifecycle example

- [Angular Lifecycle Example App](https://angular.io/guide/lifecycle-hooks#peek-a-boo) and [the code](https://github.com/angular/angular.io/blob/master/public/docs/_examples/lifecycle-hooks/ts/src/app/peek-a-boo.component.ts)
- ngOnInit (impl OnInit)
- ngOnChanges (impl OnChanges - changes:SimpleChanges)
- ngDoCheck (impl OnDoCheck)
- ngAfterContentInit
- ngAfterContentChecked
- ngAfterViewInit
- ngAfterViewChecked
- ngOnDestroy

## exercise for today

Today's exercise will be to continue refactoring of our application. We created a "Full profile editor" this morning. 

For the assignment, I'd like you to create a screen that lists all the profiles in a list. On here, it would allow you to create "connections" between profiles.

- Show a list of each profile (a 3-4 line version so you could see 3-5 on a screen)
- Assume you're using the site as profile `0`
- Add a connect buttonand when you click "Connect" next to a profile it would save a connection and switch to a "Disconnect" button
- Use at least 3 components with `Input` and `Output` to connect them together

## referencing HTML elments

1. [local references](https://www.codingdefined.com/2019/12/using-local-references-for-angular-html.html)
2. pulling in with @ViewChild('selector') of type ElementRef and .nativeElement

## Nesting components - why did we pretend you can't pass in content?

1. Where is my content?
1. Directive - `ng-content`
1. @ContentChild - pulling a child selector from the content

## Services

1. Logging Service
    - just a normal typescript class
    - log to console
    - shouldn't just create service instances manually
    - injecting via constructor
    - providers
2. Hiararchical Injector
    - app module
    - app component
    - single component
    - nesting services (`@Injectable`)
