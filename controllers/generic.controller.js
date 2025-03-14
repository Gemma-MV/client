export default{
    getInit: (req, res)=>{
        console.log("req.param: " + rep.params);
        res.end("req.query.rafa: " + req.query.rafa);
    }
}