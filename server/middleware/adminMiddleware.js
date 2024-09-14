import Admin from '../models/adminModel.js'; // Adjust according to your model structure

export const verifyAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.userId);
    if (!admin || admin.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    req.userRole = admin.role; // Attach user role to request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};
