import express from 'express';
import {TransModel} from '../../database/allModels';
import passport from 'passport';

const Router = express.Router();

Router.post('/', async (req, res) => {
    try {
      const transaction = await TransModel.create(req.body.details);
      await transaction.save();
      res.send(transaction);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  Router.get('/', async (req, res) => {
    try {
      const transactions = await TransModel.find();
      res.send(transactions);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  Router.get('/:id', async (req, res) => {
    try {
      const transaction = await TransModel.findById(req.params.id);
  
      if (!transaction) {
        return res.status(404).send({ error: 'Transaction not found' });
      }
  
      res.send(transaction);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  Router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['users', 'category', 'amount'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));
  
    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates' });
    }
  
    try {
      const transaction = await TransModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  
      if (!transaction) {
        return res.status(404).send({ error: 'Transaction not found' });
      }
  
      res.send(transaction);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  Router.delete('/:id', async (req, res) => {
    try {
      const transaction = await TransModel.findByIdAndDelete(req.params.id);
  
      if (!transaction) {
        return res.status(404).send({ error: 'Transaction not found' });
      }
  
      res.send(transaction);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  

  export default Router;