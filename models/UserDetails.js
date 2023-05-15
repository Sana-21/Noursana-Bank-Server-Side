const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    loginId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
   
    bankData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BankData'
    },

    transactions: [
    {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
        ref: 'Transaction'
    }
    ],

    card: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
        ref: 'Card'
      },
   

    beneficiaries: [
        {
          type: mongoose.Schema.Types.ObjectId,
          default: null,
          ref: 'Beneficiary'
        }
    ]
  },
  {
    collection: "user-database",
  }
);
const UserData = mongoose.model('UserData', UserSchema);
module.exports = UserData;
