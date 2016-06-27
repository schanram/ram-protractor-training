# External type definitions

## What are they?

* Type annotations that describe the shape of *existing* Javascript
* Written seperately from the Javascript it is describing
* Do not specify an implementation
* They are promises made to the typescript compiler that the runtime Javascript will match the shape of the declarations
  * This is in contrast with typescript compiler being given typescript files, and it generating the Javascript that it knows 100% conforms to those declarations 

### Examples

**1. global variable declaration** 
```ts
declare let someString: string
```
*Consuming code*:
```ts
console.log(someString);
```

**2. global class declaration** 
```ts
declare class SomeClass {
    doStuff(): void
}
```
*Consuming code*:
```ts
let instance = new SomeClass();
```

**3. global namespace declaration**
```ts
declare namespace SomeNamespace {
    let isEnabled: boolean;
    function getStuff(): string;
}
```
*Consuming code*:
```ts
if (SomeNamespace.isEnabled) {
    let val = SomeNamespace.getStuff();
    console.log(val.length);
}
```

**4. es2015 module declaration (old style)**
```ts
\\ some-component.d.ts
declare module "some-component" {
    export class AnotherClass {
        title: string;
    }
}
```
*Consuming code*:
```ts
import { AnotherClass } from "some-component";
let ano = new AnotherClass();
```

**5. es2015 module (new style)**

```ts
\\ my-app.d.ts
export declare class MyClass {
    name: string;
}
```
*Consuming code*:
```ts
import { MyClass } from "my-app";
let ano = new AnotherClass();
```

**6. global namespace also consumable as an es2015 module**

```ts
\\ my-app.d.ts
declare namespace NgTable.Core {
    interface INgTableParams<T> {}
}
declare module "ng-table/core" {
    import core = NgTable.Core;
    export = core;
}
```
*Consuming code (as global namespace)*:
```ts
let table: NgTable.Core.INgTableParams<IPerson>;
```
*Consuming code (as es2015 module)*:
```ts
import { INgTableParams } from "ng-table/core";
let table: INgTableParams<IPerson>;
```


## When do you need them?

Anytime your Typescript program references Javascript code as opposed to Typescript.

*This happens a more than you think!*

You see even code written in Typescript, when delivered to you, will be in the form of a package that includes:
1. Javascript files
2. Type declaration files

ie the original typescript will not be included (or at least in any way that will influence the typescript compiler)

---

## Consuming existing type definitions

### Where do you find them?

**1. Inside the Javascript npm package**

If the Javascript you're referencing was written in typescript and delivered as an npm package, you won't need to go and find the type declarations.

In this case the type declarations will be resolved automatically by the typescript compiler and language service from the node_modules folder.

**2. On DefinitelyTyped registry**

Most type declarations for existing Javascript packages will be published to the [DefinitelyTyped registry](https://github.com/DefinitelyTyped/DefinitelyTyped).

**IMPORTANT**: DefinitelyTyped is *not* the preferred place to publish type declarations now.

**3. On typings registry**

The [typings registry](https://github.com/typings/registry) is the replacement to the DefinitelyTyped registry.

The typings registry is really just an index of library names, with each indexed entry linking to where the type definition files are located. Some of the
available locations that can be linked to are:

* npm typings package
* arbitrary github repo
* DefinitelyTyped registry

#### Searching for type declarations

If the typescript are not bundled in the same npm package that delivers the Javascript, your best bet to find existing external type declarations is to
use the `typings` tool to perform a search. EG
```cmd
typings search --name domready
``` 

### How can you install them?

To install an external type declaration file, you will use the `typings` tool. For details on using typings tool see 
[here](https://github.com/typings/typings/blob/master/docs/commands.md)

*EG - installing a global type declaration from definitelytyped*
```cmd
typings install dt~knockout --global --save
```

*EG - installing a global type declaration from a github repo at a specific commit*
```cmd
typings install github:christianacca/typed-ng-table/typings.json#930b5a14174e594d6167691ed0938be42a6b06aa --global --save
```

*EG - installing a module type declaration from definitelytyped*
```cmd
typings install npm~knockout --save
```

### How do you reference them in code?

Once you've installed the type declaration files into your project, you will need to ensure they're available to the typescript compiler and language
service.

How you acheive this will depend on how you setup your typescript project. Most of the time you'll be configuring your project with a `tsconfig.json`.

A typical `tsconfig.json` configuration that excludes the node_modules folder will already be referencing the typings you've installed. Otherwise you will need
to include the `typings/index.d.ts` in the files section of the `tsconfig.json`. 

---

## Writing type definitions

There are two main use cases for writing your own type declarations:

1. Tweeking existing type declarations
  * maybe the typings you've found are out of date. You extend the definitions with your own type *additional* declaration file whilst you wait
2. An Javascript library does not have types defined


### How to write

**Golden rule**: type declarations must be a faithful representation of the Javascript that it is defining.

**Example 1: library exposes global object(s)**

So for example, if the Javascript library exposes its public API as one of more objects assigned to the global (window) context, the type declaration
you write will need to declare these globals.

**Example 2: library exposes modules (eg commonjs or amd)**

If on the otherhand the Javascript library exposes its public API to be consumed using commonjs or amd, the type declaration you write will need to declare modules.

The style of module declaration you write can be either:

1. es2015 import / exports
2. export = xxx

**Example 3: library exposes modules and global objects (eg umd)**

It's also fairly common that a Javascript library will expose its public API as a single global namespace object and at the same time allow it's API to be consumed
using commonjs and/or amd ie the library follows a UMD format.

In this case your type declarations will need to write either:

* a single type declaration that will declare both global namespace and module
  (example: [typed-ng-table](https://github.com/christianacca/typed-ng-table/blob/master/index.d.ts))
* two type declarations: one that exposes a global namespace and another that exposes a module (example: 
  [typed-contrib/knockout](https://github.com/typed-contrib/knockout)


#### How to write: library exposes global object(s)

```ts
declare class SomeClass {
    doStuff(): void
}
```
*Consuming code*:
```ts
let instance = new SomeClass();
```

#### How to write: library exposes modules (eg commonjs or amd)

**1. es2015 import / exports**
```ts
\\ my-app.d.ts
export declare class MyClass {
    name: string;
}
```
*Consuming code*:
```ts
import { MyClass } from "my-app";
let ano = new AnotherClass();
```

**2. export = xxx**
```ts
declare function domready(callback: () => any) : void;
export = domready;
```
*Consuming code*:
```ts
import domready from "domready";
domready(() => {
    // do stuff
})
```
**NOTE**: The typings tool will convert the `export = xxx` into the declarations below 
(see [detailed explanation of why](https://github.com/typings/typings/blob/master/docs/external-modules.md)):
```ts
declare module 'domready/main' {
    function domready(callback: () => any) : void;
    export = domready;
}
declare module 'domready' {
    import main = require('domready/main');
    export = main;
}
```



