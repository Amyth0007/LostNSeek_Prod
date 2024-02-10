const getprofile = (req, res)=>{
      console.log("getprofile");
      console.log(req.body);
      res.status(203).send(req.user);
}

export default getprofile