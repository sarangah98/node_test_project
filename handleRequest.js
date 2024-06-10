function handleRequest(req,res){
    try {
        if(req.method === 'GET'){
            res.send('This is GET Method');
        }
        else if(req.method === 'POST'){
            res.send('This is POST Method');
        }
        else if(req.method === 'PUT'){
            res.send('This is PUT Method');
        }
        else{
            res.send('Something went wrong....')
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}
module.exports = handleRequest;