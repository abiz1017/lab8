var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */

 exports.addRSVP = (req, res) =>{
   var rsvpEmail = req.body.rsvpEmail;
   console.log(rsvpEmail);
   data.rsvp.push(rsvpEmail);
   res.send(rsvpEmail);
 }
exports.adminView = function(request, response){
  response.render('rsvp', data);
};
