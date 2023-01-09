 /**
 * midleware for handling client errors
 * @param {object} req - request object
 * @param {object} res - response object
 */
const handleClientErrors = (req, res) => {
   return res.status(404).send('Page is not found');
 };
 
 module.exports = { handleClientErrors };