const createError = (statusCode,massage)=>{
    const error = new Error(massage);
    error.statusCode = statusCode;
    throw error;
};
module.exports = createError;