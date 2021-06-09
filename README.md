<h1 align="center">Chatterz</h1></br>

<p align="center">
:incoming_envelope:  A JAM stack PWA, real-time messaging web app built with GraphQL, Nexus schema, Apollo, React, TypeScript, Next.js, JWT and MongoDB. :mailbox_with_mail:
</p>
<br>

<p align="center">
  <a href="#"><img alt="built with love" src="https://forthebadge.com/images/badges/built-with-love.svg"/></a>
  <a href="#"><img alt="js Badge" src="https://forthebadge.com/images/badges/made-with-typescript.svg"/></a>
  <a href="https://github.com/k4u5h4L"><img alt="k4u5h4L GitHub badge" height="37" src="https://badgen.net/badge/GitHub/k4u5h4L?icon=github&color=24292e"/></a>
  <a href="#"><img alt="machine Badge" height="37" src="https://forthebadge.com/images/badges/works-on-my-machine.svg"/></a>
  <a href="#"><img alt="not bug but feature" height="37" src="https://forthebadge.com/images/badges/not-a-bug-a-feature.svg"/></a>
  <a href="#"><img alt="spaghetti Badge" src="https://forthebadge.com/images/badges/contains-tasty-spaghetti-code.svg"/></a>
</p>

<br>
<p align="center">
<img width="460px" src="assets/logo.png" alt="chatterz"></img>
</p><br>

## Technologies used:

-   React as the UI library.

-   Next.js as the React framework for auth and stuff.

-   GraphQL as the API language.

-   Socket.io for real time communication

-   MongoDB, and Mongoose as the ODM.

-   NextAuth as the authentication backend with passwordless logins.

## Features:

-   [x] Real time one-to-one messaging

-   [x] Messages sync: saves and let's you chat using any device!

-   [x] Automatic real-time sentiment recognition of the messages of the other person

-   [x] Integrated calendar inside the messaging app

-   [x] Integrated notes saving in the chats

-   [x] Integrated to-do list in the chats

-   [ ] On-to-one or group Video calling

-   [ ] Group chats

-   [ ] End-to-end encryption

## Prerequisites:

-   Node.js and yarn installed.

-   MongoDB installed and the daemon running at `localhost:27017`.

## To run:

-   Clone and cd into the repo.

```
git clone https://github.com/k4u5h4L/Chatterz.git && cd Chatterz
```

-   Install the dependencies

```
yarn install
```

-   Create a new file called `.env.local` and fill in variables and keys from different providers from the `.env.example` file.

-   Run the development server for the Express backend server by running these two commands in separate terminals.

```bash
# this will compile the server TS code and will watch for file changes
yarn run watch

# This will spin up the development server using the nodemon utility
yarn run dev:server
```

-   Now with all the API keys and the backend server running, run development server for the client.

```
yarn dev
```

-   Now visit the location [localhost:3000](http://localhost:3000) to check out the site!

## Note:

-   This project is for learning purposes only.

<!-- -   Any contribution is welcome. You may fork the repo and issue a PR. -->
