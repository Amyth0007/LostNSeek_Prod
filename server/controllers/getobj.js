import Objs from "../models/object.js";
// import Users from "../models/user.js";

const getobj = async (req, res) => {

  //   const d1 = await Objs.find();
  console.log();
  console.log(req.user);
  // const d = await Objs.aggregate([
  // {
  //   $lookup:
  //    {
  //     from: 'users',
  //     localField: 'Fouderid',
  //     foreignField: '_id',
  //     as: 'result'
  //    },
  // },
  // {
  //   $unwind: "$result"
  // },
  // {
  //   $addFields: {
  //     "founderName": "$result.name"
  //   }
  // },
  // {
  //   $project: {
  //     result: 0
  //   }
  // }, 
  // {
  //   $match :{
  //       founderName : req.user.name
  //   }
  // }
  // ])
  const data = await Objs.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "Fouderid",
        foreignField: "_id",
        as: "founder"
      }
    },
    { $unwind: "$founder" },
    {
      $addFields: {
        founderName: "$founder.name"
      }
    },
    {
      $lookup: {
        from: "users",
        localField: "claimedBy",
        foreignField: "_id",
        as: "claimedUsers"
      }
    },
    {
      $match: {
        founderName: req.user.name
      }
    },
    {
      $project: {
        founder: 0,
        claimedBy: 0
        // "claimedUsers.name": 1
      }
    },
    
  ]);
  console.log("aggregate");
  console.log(data[1].claimedUsers);
  console.log(data);
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

    // const data = await Objs.find();
    res.status(200).send(data);

  } catch (error) {
    res.status(300).send({ msg: "not ok" });


  }


}

export default getobj