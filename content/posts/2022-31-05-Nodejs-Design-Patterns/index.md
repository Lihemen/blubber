---
title: Node.js Design Patterns and Common Use Cases
date: "2022-05-31T09:00:00.001Z"
template: "post"
draft: false
slug: "nodejs-design-patterns-and-common-use-cases"
category: "API Design"
tags:
  - "javascript"
  - "nodejs"
  - "api"
description: "In Node.js as is in most Object Oriented Programming (OOPs) such as Java, C, C#, Javascript, there are 3 broad classifications of Design Patterns which can be used to design your API and codebase. They form the structure upon which clean code is built and maintained"
socialImage: "/media/nodejs.png"
---

In Node.js as is in most Object Oriented Programming (OOPs) such as Java, C, C#, Javascript, there are 3 broad classifications of Design Patterns which can be used to design your API and codebase. They form the structure upon which clean code is built and maintained

![The node.js logo](/media/nodejs.png)

In Node.js as is in most Object Oriented Programming (OOPs) such as Java, C, C#, Javascript, there are 3 broad classifications of Design Patterns.

1. Creational Patterns
2. Behavioural Patterns
3. Structural Patterns

These patterns govern the intent and rationale behind writing clean code and reducing redundancy.

1.0 CREATIONAL PATTERNS.
As the name implies, these patterns are mostly employed when you typically want to abstract certain redundancies such as multiple instantiation of a rather Singleton class, or handling common reimplementation of a similar function.

By this there are 4 basic or common patterns that fall under this category.

1.1. Singleton Pattern
The Singleton pattern suggests a single instance of a class throughout the codebase to prevent unnecessary bugs. This pattern is mostly used in cases of logging. A single Logger class is instantiated throughout the codebase to handle all logs and push them to either a single or multiple log files as the case may be. This helps in debugging a lot, because multiple instances of this class aren't created.

1.2. Builder Pattern
This pattern is more common in the world outside of Programming. It is clearly seen in the construction of a row of flats or a block of apartments. Each preceeding apartment is essentially the same as the next structurally, with the differences being customization.
This pattern is used to customize instances of a created object, separating the construction of complex objects from its representation.
This pattern is a solution to the telescopic constructor (an anti-pattern representing the construction of an Object with many class arguments, making it difficult to keep track of it all)

1.3. Factory Pattern
The factory pattern is a rather common pattern especially in API development. The intent on this pattern is to define an interface for creating an object but let subclasses decide with class to instantiate.

For example, multiple Models have a function to get a single object belonging to the model with the same implementation. Writing this function multiple times is redundant and can introduce bugs. This function can be abstracted to a handlerFunction that takes in the Model as an argument and processes the request based on the model to output the object belonging to the Model

1.4. Prototype Pattern
The intent of the prototype pattern is to provide a blueprint upon which multiple instances of an object can be built upon. Properties and data common to the objects can be pre-populated to allow for minimal customization if necessary.

For example, a Shopper class representing people going to the mall to purchase items. A Student prototype can be built on top of this interface to represent students shopping for the same items. This allows for grouping of objects with similar data. An instance of the Student prototype will have all the shopping data needed to instantiate a subclass of the Shopper class.

2.0. BEHAVIOURAL PATTERNS.
Patterns classified as behavioural seek to provide an abstraction to the behaviour of objects as they are handled by other objects.
There are four(4) major patterns grouped under this namely;

2.1. Chain-of-Responsibility Pattern
This pattern is mostly on display in the request-response cycle. Each middleware in the cycle has access to the request object and can handle the request or modify the request before it reaches the response
The intent of this pattern is to avoid coupling the sender of a request to its receiver by giving more than one succeeding object the chance to handle the request. The receiving objects are chained and the request object is passed along the chain.

2.2. Command Pattern
The command pattern seeks to encapsulate a request as an object, thereby providing an interface to handle parameterization of different requests, log requests and support undoable operations.
This pattern is very useful when working with the command-line so as to abstract the various request supported at runtime and their implementation by a conductor.

2.3. Iterator Pattern
A object built using this pattern provides a uniform interface for interacting with aggregate data. It provides a way to access the elements of an aggregate object sequentially without exposing the underlying representation.
Simply put, this pattern allows for handling data in lists while abstracting the implementation from subclasses.

2.4. Observer Pattern
The observer pattern is a 2-way pattern between two(2) objects, the observer (an object that can watch other objects for state changes) nd the observables (object that provides access to it's state changes).
As defined by the Gang of Four, the observer pattern is intended to define a one-many dependency between objects so that when one object has a state change, all its dependencies are notified and updated automatically.
This pattern is typically used in feeds and notifications systems to constantly watch for changes to data and respond accordingly.

3.0. STRUCTURAL PATTERNS.
The patterns grouped as structural patterns seek to abstract and predefine a strict or flexible instance of a class typically providing a means for extending or reimplementation by subclasses.

By this definition, there are 4 patterns under this group.

3.1. Decorator Pattern
The objects implemented using this pattern seek to attach additional responsibilities to an object dynamically. Decorators provide a flexible approach for extending functionality by subclasses of a Class. This allows for overriding methods by the subclasses and as such, objects implemented using this pattern don't have to match the same interface as the Object it is built upon

3.2. Adapter Pattern
Adapters make incompatible instances of objects compatible. An adapter converts the interface of a class into another clients(class) expectations.
Adapters let classes work together that couldn't otherwise due to incompatibility.
An example would be the implementation of the browser localStorage in node.js. Ordinarily, since node.js is a server runtime, it doesn't have access to certain browser APIs. With an adapter implementation of the same interfaces of the localStorage, it will act the same as a browser localStorage

3.3. Composite Pattern
The intent of the composite pattern is to compose objects into tree structures to represent part-whole hierarchies. Composites lets clients treat individual objects and compositions of objects uniformly. Composites must implement the same interface as it's leaf.
This pattern is clearly on display in the folder-file architecture of operating systems, where folder are embedded within other folders and might have a file or folder as a leaf of the subpath.

3.4. Proxy Pattern
A proxy is essentially an object that controls access to another object. This is very common in servers, whereby another server acts as a proxy between the request and the final destination. The most common reasons for this are for cachebility, management of remote resources to avoid expensive server costs and handling expensive objects that might introduce bottlenecks in the network and reduce the speed of execution and response.
A key thing to note about a proxy is that, for any object that is protected behind a proxy, the proxy must have all the same interfaces as the object it serves as a proxy for. The implementation of said interfaces might differ, but they must be present.

A common example will be having a proxy in front of fs module to filter out certain types of files. This module has the readfile interface, the proxy will implement this interface with it's additional restrictions, thereby preserving the core module for its own use and providing an interface specific to a purpose.
Another would be having a proxy after a request call, to cache the request query in an in-memory database eg. Redis, to improve speed of query execution, and before a response execution to cache the response of said query.

The goal of design patterns is to provide adequate structure to code, reduce bugs and help in providing suitable interfaces to handle objects. This article seeks to provide a broad overview of common OOP design patterns easily implementable in node.js
