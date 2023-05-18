const express = require('express');
const app = express();
const beneficiaries = require('../models/Beneficiary');
const UserData = require('../models/UserDetails');
const CurrentUser = require('../models/CurrentUser');

const getBeneData = async (req, res) => {
    try {
      const u = await CurrentUser.findOne();
      const curr = await UserData.findOne({ _id: u.currentUser });

      if (!curr || !curr.beneficiaries) {
        return res.status(404).json({ error: 'User beneficiaries not found' });
      }

      const currBene = curr.beneficiaries;

      const bene = await beneficiaries.find();

      const beneDataArray = [];

    for (const b of bene) {
      if (currBene.includes(b._id)) {
        
        const data = {
          name : b.name,
          accountNumber : b.accountNumber
        };

        beneDataArray.push(data);
      }
    }
    res.status(200).json(beneDataArray);
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error', message: 'Failed to fetch bene data' });
    }
  }
  
  module.exports = getBeneData;