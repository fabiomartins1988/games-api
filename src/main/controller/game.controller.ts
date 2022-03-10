// import UserService from '../service/game.service';
import router from '../routes/routes';

router.get("/games", (resquest, response) => {

  response.status(200).json({'hello': 'world'});
});

router.get("/games/:id", (resquest, response) => {

  response.status(200).json({'hello': 'world'});
});

router.get("/games/:name", (resquest, response) => {

  response.status(200).json({'hello': 'world'});
});

router.post("/games", (resquest, response) => {

  response.status(201).send();
});