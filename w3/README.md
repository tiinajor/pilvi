
# Introduction to NodeJS

In this worksheet you will be introduced to **NodeJS**, a runtime environment that allows you to run JavaScript code on a web server. NodeJS is based on the Chrome V8 JavaScript engine that runs inside the Chrome browser but adapted for server use.

It uses an event-driven, non-bocking I/O model which makes it very efficient when handling large numbers of connections.

The runtime uses a single thread running an *event loop* to to handle **all** incoming requests. When a connection is received we typically fire a callback to handle the request, returning control to the main thread once the work is done. This is termed **non-blocking** because the callback is used to handle the work leaving the main event loop free to deal with other requests.

Before you start this or any other worksheet you should make sure you have the latest commits from the upstream repository on **GitHub**.
```
git pull kurssi master
```

# Server-Side Scripting

Now we have mastered the JavaScript programming language it is time to start applying this knowledge. In this topic you will be introduced to **NodeJS** a runtime based on the Chrome V8 JavaScript engine that allows JavaScript code to be run on a web server.

1. the worksheet **01 Introduction** is considered essential and shows not only how to run a script on the server and effectively debug it but also shows how to import third-party packages and use the CommonJS module design to write and import your own modules.
2. the **02 NodeJS and ECMA6** worksheet covers a range of ECMA6 constructs currently supported by NodeJS

In the next topic you will learn how to design an API that adheres to REST principles and how to use NodeJS to build it. It is vital that you have a good grasp of the JavaScript materials covered in the earlier topics.
