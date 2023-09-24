import mongoose from "mongoose";
import SuperHero from "../models/SuperHero.js";

export const getAll = async (req, res) => {
  try {
    const pageOptions = {
      page: parseInt(req.query.page, 10) || 1,
      limit: parseInt(req.query.limit, 10) || 5,
    };
    const allHero = await SuperHero.find().exec();
    const heros = await SuperHero.find()
      .skip(pageOptions.page * pageOptions.limit - pageOptions.limit)
      .limit(pageOptions.limit)
      .exec();

    res.json({
      pages: Math.ceil(allHero.length / pageOptions.limit),
      heros: heros,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить данные",
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const heroId = req.params.id;
    const hero = await SuperHero.findOne({ _id: heroId }).exec();
    res.json(hero);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось найти героя",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const heroId = req.params.id;
    const hero = await SuperHero.findOneAndDelete({ _id: heroId });
    res.json(hero);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось удалить героя",
    });
  }
};
export const create = async (req, res) => {
  try {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      Images,
    } = req.body;
    const doc = new SuperHero({
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      Images,
    });
    const hero = await doc.save();
    res.json(hero);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать героя",
    });
  }
};
export const update = async (req, res) => {
  try {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      Images,
    } = req.body;
    const heroId = req.params.id;

    const existingHero = await SuperHero.findById(heroId);
    if (!existingHero) {
      return res.status(404).json({ message: "Герой не найден" });
    }

    existingHero.nickname = nickname;
    existingHero.real_name = real_name;
    existingHero.origin_description = origin_description;
    existingHero.superpowers = superpowers;
    existingHero.catch_phrase = catch_phrase;
    existingHero.Images = Images;

    const hero = await existingHero.save();

    res.json(hero);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось обновить героя",
    });
  }
};
