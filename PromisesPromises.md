# Promises, Promises...

---

Disclaimer: A lot of really smart people like Promises and the APIs built on top of them. Statements made in this presentation are the opinion of the author and may or may not be embarassing to him at a later date.

---

# The Javascript Event Loop
### A quick review

... a series of execution stacks until there is nothing left to do

---

# The callback

----

## problems with callbacks

----

### maybe-sync and semi-sync

----

### callback signatures

----

#### the "error-first callback" convention

----

#### event handlers

----

### flow control

----

### The christmas tree

----

### Unhandled Exception

---

# Promises

...and there was much rejoicing

----

## a callback you can pass around

----

## a record of side effects

----

## a monad (sortof)

---

# Patterns

---

# Problems

## The forest of no return

## except callbacks!

## can't catch me!

## Event emitters

#### redux `dispatch()`
#### `EventEmitter`
#### `dispatchEvent()`
#### `fetch`

---

# References

A few of the articles I mentioned (or intended to mention):

- [http://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/](http://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/)
- [https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8](https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8)
- [https://medium.com/@mikeal/modern-modules-d99b6867b8f1](https://medium.com/@mikeal/modern-modules-d99b6867b8f1)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
- [https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns#the-thensuccess-fail-anti-pattern](https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns#the-thensuccess-fail-anti-pattern) <- I disagree with this one because the Promise can almost never know what it is taking responsibility for - making it the effective equivalent of an 'uncaughtException' handler in some cases - but it’s more than just worth thinking about
- [https://nodejs.org/api/process.html#process_event_uncaughtexception](https://nodejs.org/api/process.html#process_event_uncaughtexception)
- [https://nodejs.org/api/process.html#process_process_nexttick_callback_args](https://nodejs.org/api/process.html#process_process_nexttick_callback_args) for the discussion of “maybe sync” callbacks
- [https://developer.mozilla.org/en-US/docs/Web/API/FetchObserver](https://developer.mozilla.org/en-US/docs/Web/API/FetchObserver) Even `fetch` has callbacks.
