import mongoose from 'mongoose';


const itemSchema = new mongoose.Schema({
  ItemsN: {
      type: String,
      required: true
  },
  price: {
      type: Number,
      required: true
  },
  quantity: {
      type: Number,
      required: true
  }
});


const CheckDSchema = new mongoose.Schema({
 
  
  Name: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true
},
Address: {
    type: String,
    required: true
},
PNumber: {
    type: String,
    required: true
},
CurrentuserId: {
    type: String,
    required: true
},

items: [itemSchema], 
totalPrice: {
    type: Number,
    required: true
}

},{ timestamps: true } );




const CheckD = mongoose.model('ChackD', CheckDSchema);

export default CheckD;