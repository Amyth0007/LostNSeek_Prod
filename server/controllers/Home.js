import Objs from "../models/object.js";
// import Users from "../models/user.js";

const Home = async (req, res) => {
 
  const d1 = await Objs.find();
  console.log(d1);
  const d = await Objs.aggregate([
  {
    $lookup:
     {
      from: 'users',
      localField: 'Fouderid',
      foreignField: '_id',
      as: 'result'
     },
  },
  {
    $unwind: "$result"
  },
  {
    $addFields: {
      "founderName": "$result.name"
    }
  },
  {
    $project: {
      result: 0
    }
  }
  ])
  console.log(d);
  //  const d = await Objs.aggregate([{
  //     $lookup: {
  //        from: 'users',
  //        localField: 'Fouderid',
  //        foreignField: '_id',
  //        as: 'result'

  //     },
  //  }, 
  //  // {
  //  //    $addFields: {
  //  //       "founderName": { $arrayElemAt: ["$result.name", 0] }
  //  //    }

  //  // }
  //  {
  //     $unwind: "$result"
  //   },
  //   {
  //     $addFields: {
  //       "founderName": "$result.name"
  //     }
  //   }
  //  ])
  //  d.forEach(e => console.log(e.result));
  try {

    const data = await Objs.find();
    res.status(200).send(d);

  } catch (error) {
    res.status(300).send({msg : "not ok"});


  }


}

export default Home