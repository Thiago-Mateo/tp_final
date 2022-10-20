import GameInfo from '../models/Codigo.js';

const getGameCode = (req, res) => {
  GameInfo.findById(req.params.id, (err, gameinfo) => {
    res.status(200).json(gameinfo);
  });
};

const postGameCode = (req, res) => {
  gameinfo = GameInfo(req.body)
  .save((err, gameinfo) => {
    res.status(201).json(gameinfo);
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