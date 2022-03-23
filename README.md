# Strategy Pattern

The strategy pattern suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called strategies.

# Observer Pattern

Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they're observing.

### Problem:

Imagine that you have two types of objects: a **Customer** and a **Store**. The customer is very interested in a particular brand of product(marca do produto)(say, it's a new model of the Iphone) which should become available in the store very soon.

The custumer could visit the store every day and check product availability. But while the product is still en route, most of these trips would be pointless(a maioria dessas viagens seriam inúteis). 

On the other hand, the store could send tons of emails(which might be considered spam) to all customers each time a new product becomes available. This would save some customers from endless trips to the store. At the same time, it'd upset other customers who aren't interested in new products.

It looks like we've got a conflict. Either the customer wastes time checking product availability or the store wastes resources notifying the wrong customers.

### Solution

The object that has some interesting state is often called subject, but since it's also going to notify other objects about the changes to its state, we'll call it publisher. All other objects that want to track changes to the publisher's state are called subscribers.

The Observer pattern suggests that you add a subscription mechanism to the publisher class so individual objects can subscribe to or unsubscribe from a stream of events coming from that publisher.

Now, whenever an important event happens to the publisher, it goes over its subscribers and call the specific notification method on their objects.

# Template Method

### Template in the Real World

The **template method** pattern is used when two or more implementations of a similar algorithm exist. In the real world templates are used all the time: for architectural plans, and throughout(ao longo) the engineering domain. A template plan may be defined which is then built(construído) on with further variations. For example, a basic house plan can have many variations such as adding an extensions or using a different heating system.

### The Template Pattern

The Template Method pattern is known as a behavioural pattern, as it's used to manage algorithms, relationships and responsibilities between objects. The definition of Template Method provided in the original Gang of Four book on Design Patterns states:

**Defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithms structure.**

# Decorator Method

The **decorator method** intercepts some function.

# Adapter 

In software engineering, the adapter pattern is a software design pattern (also known as wrapper, an alternative naming shared with the decorator pattern) that allows the interface of an existing class to be used as another interface.