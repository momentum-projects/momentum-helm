# Routing

## routing

1. adding routing to your angular application
   - creating routes `{ path: '', component: Component}`
   - why `a href` won't work
1. routerLink
   - string
   - array - `['/users', 15]`
1. routerLinkActive
1. routerLinkActiveOptions `{exact: true}`
1. Injecting the router
1. ActivatedRoute (navigate, relativeTo)
1. Parameterized Routes `path: 'users/:id'`
   - loading parameter from `ActivatedRoute` - `this.route.snapshot.params['id']` (in ngOnInit)
1. What about reactive components?
   - `this.route.params` - an `Observable`
   - `this.route.params.subscribe((params: Params) => { this.user.id = params['id'] })`
   - angular is reaping the subscriptions
   - could use onDestroy
1. more params
   - `[queryParams]="{ user: 1 }"`
   - `fragment=loading`
   - accsessing -- import `route: ActivatedRoute`
   - `this.route.snapshot.queryParams` - `this.route.queryParams`
   - `this.route.snapshot.fragment` - `this.route.fragment`
   - types - converting to a number with `+`
   - `queryParamsHandling` - merge, preserve, overwrite
1. Nested Routes - `children`
   - `router-outlet`
1. Guards
   - `canActivate`
   - `canActivateChild`
1. Data
   - passing static data to a route

## Services

1. Shared data
2. Event Binding
3. Dependency Injection
