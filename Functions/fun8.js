const object = {
  message: 'Hello,World!',

  logMessage() {
    console.log(this.message);
  }

};

setTimeout(object.logMessage, 1000);

/* While the setTimeout() function uses the object. logMessage as a callback,still, it invokes object.logMessage as a regular function, rather than a method. And during a regular function invocation this equals the global object,which is a window in the case of the browser environment.That's why console.log(this.message) inside logMessage method logs window.message, which is undefined.*/