import UserData from '../models/Codigo.js';
import GameInfo from '../models/Codigo.js';

const getGameCode = (req, res) => {
  GameInfo.findById(req.params.id, (err, gameinfo) => {
    res.status(200).json(gameinfo);
  });
};

const postGameCode = (req, res) => {
  const { gamecode, name, rating } = req.body;
  const gameinfo = new GameInfo({ gamecode, name, rating });
  gameinfo.save((err, gameinfo) => {
    res.status(201).json(gameinfo);
  });
};
