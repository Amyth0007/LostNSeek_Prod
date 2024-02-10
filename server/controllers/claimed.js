import Obj from "../models/object.js";
// import Objs from "../models/object.js";
// import Users from "../models/user.js";

const claimed = async (req, res) => {
 
    // const { id } = req.params; 
    const { claimedById } = req.body; 
    console.log(req.body);
  
    try {
      const object = await Obj.findById(claimedById);
      
      if (!object) {
        return res.status(404).json({ error: 'Object not found' });
      }
      console.log(req.user);
      // object.claimedBy.push(req.user.id);
      object.claimedBy.addToSet(req.user.id);
      console.log(object);
      await object.save();
      // const object1 = await Obj.findById(claimedById).populate(' claimedBy');
  
      res.status(200).json({ message: 'Object updated successfully', object });
    } catch (error) {
      console.error('Error updating object:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }


}

export default claimed