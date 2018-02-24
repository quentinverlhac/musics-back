# Back of MUSICS reservation website

This is the back end of the reservation website for MUSICS.
It works with the front end found in `musics-front` repository.

The purpose of the website is to manage the reservation of music rooms for the association MUSICS at CentraleSupélec.
It was made by Remi Calixte and Quentin Verlhac in winter 2017

## Architecture of the back

The back uses the server `node.js` and the module `express` for routing.
The database is `MariaDB` (MySQL-like).
`Sequelize` is the ORM used in order to communicate with the database.

In development environment, the back uses docker containers for node.js and MariaDB.
To launch the back, use `docker-compose up`.

Index.js is the file that docker run when it starts the back.
Appart from `index.js`, everything happens in the folder `src`.

The Sequelize models can be found in the folder `models`.
- The connection with the MariaDB database is set in `database.js`
- The various model entities are set up in `models.js`
- The relations are set up in `relations.js`

In `src/controllers` folder, there are `entity.controller.js` files, which implement the functions to communicate with the database
In `src/routes` folder, there are  `entity.router.js` files, which create the routes using express and the corresponding controller functions

The authentification is made through Oauth access tokens, given by ViaRezo Auth.
It is an Oauth server giving credentials for every student in CentraleSupélec.
