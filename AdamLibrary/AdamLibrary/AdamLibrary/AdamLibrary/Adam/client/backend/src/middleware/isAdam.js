const isAdem= (req, res, next) => {
    console.log('User object:', req.user);  // Debugging line
    if (req.user.role !== 'adem') {
      return res.status(403).json({ message: 'Access denied: Adem role required' });
    }
    next();
  };

  module.exports = { isAdem };  

  //Use const isInstructor = require('../middleware/isAdem'); to use in routes
  