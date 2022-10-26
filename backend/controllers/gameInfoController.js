import GameInfo from '../models/Codigo.js';

const getGameCode = (req, res) => {
  GameInfo.find({ gameCode: req.params.code }, (err, gameinfo) => {
    res.status(200).json(gameinfo);
  });
};

const postGameCode = (req, res) => {
  const { gameCode, name, rating } = req.body;
  const game = new GameInfo({ gameCode, name, rating });
  game.save((err, game) => {
    res.status(201).json(game);
  });
};

const deleteGameCode = (req, res) => {
  GameInfo.findByIdAndDelete(req.params.id, err => {
    const msg = { text: 'juego borrada' };
    res.status(200).json(msg);
  });
};

const gameController = {
  getGameCode,
  postGameCode,
  deleteGameCode
};

export default gameController;