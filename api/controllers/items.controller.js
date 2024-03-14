import Cart from "../models/Cart.model.js";
import Items from "../models/Items.model.js";
import CheckD from "../models/Checkout.model.js";
import { errorHandle } from "../utils/error.js";

//add new items to the database
export const Itcreate = async (req, res, next) => {
    if (!req.user.isAdmin) {
      return next(errorHandle(403, "Yor are not alowed to create a items"));
    }
  
    const { ItemsN, price, quantity, image,  Description,  } = req.body;
  
    const newItems = new Items({
      ItemsN,
      price,
      quantity,
      image,
      Description,
      
    });
    try {
      const savedItems = await newItems.save();
      res.status(201).json(savedItems);
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  //get all items and display home page
  export const getAllItems = async (req, res, next) => {
    try {
      const items = await Items.find();
  
      if (items.length > 0) {
        res.json({ message: "Items details retrieved successfully", items });
      } else {
        return next(errorHandle(404, " student not fonud "));
      }
    } catch (error) {
      console.log(error.message);
  
      next(error);
    }
  };

 //after click one items it item's belongs data display
  export const getitems = async (req, res, next) => {
    try {
      const itemsId = req.params.ItemsId; 
      
      
      const items = await Items.find({ _id: itemsId });
  
      if (items.length > 0) {
        res.json({ message: "Item details retrieved successfully", items });
      } else {
        return next(errorHandle(404, "Item not found"));
      }
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  };

//after add to cart clicking data go to the cart database
  export const Cartcrete = async (req, res, next) => {
    
  
    const { ItemId,CurrentuserId,ItemsN, price, quantity, image,  Description,  } = req.body;
  
    const newItems = new Cart({
      ItemId,
      CurrentuserId,
      ItemsN,
      price,
      quantity,
      image,
      Description,
      
    });
    try {
      const savedItems = await newItems.save();
      res.status(201).json(savedItems);
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  //Current userId eqaul data display in the cart
  export const getCartItem = async (req, res, next) => {
    
    try {
      const { CurrentuserId } = req.params;
      console.log(CurrentuserId)
  
      // Query the database for documents matching CurrentuserId
      const items = await Cart.find({ CurrentuserId });
      console.log(items)
  
      
  
      // Send extracted data as response
      res.json(items);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
};

//after click the check out those data save the chekd database
export const CheckOutcrete = async (req, res, next) => {
    
  
  const {  price, length,totalPrice,Name,email,Address,PNumber,CurrentuserId,items  } = req.body;

  if (!/^\d{10}$/.test(PNumber)) {
    return res.status(400).json({ message: 'Phone number must be 10 digits long.' });
}


  const newItems = new CheckD({
  
   
        price,
       
        length,
        totalPrice,
        Name,
        email,
        Address,
        PNumber,
        CurrentuserId,
        items

    
  });
  try {

    const savedItems = await newItems.save();
    res.status(201).json(savedItems);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//romove 1 items in the cart 
export const deleteItems = async (req, res, next) => {
  
  try {
    
    await Cart.findByIdAndDelete(req.params.itemsId);
    res.status(200).json("The post has been deleted");
  } catch (error) {
    next(error);
  }
};

//after checkout clear the cart 
export const deleteItemss = async (req, res, next) => {
  try {
    const { CurrentuserId } = req.params;
    
    // Delete items associated with the specified CurrentUserId
    await Cart.deleteMany({ CurrentuserId });

    res.status(200).json({ message: "Items have been deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

//get checkout details and fetch the order page
export const  checkout = async (req, res, next) => {
  try {
    const { CurrentuserId } = req.params;
    console.log(CurrentuserId)

    // Query the database for documents matching CurrentuserId
    const items = await CheckD.find({ CurrentuserId });
    console.log(items)

    

    // Send extracted data as response
    res.json(items);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};











  



  
  
  