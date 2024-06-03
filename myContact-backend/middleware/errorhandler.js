const { constants } = require("../constant");

const errorHandler = (err, req, res, next) => {
  const statusCode = req.statusCode ? req.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      req.json({
        title: "Validation Field",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      req.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.UNAUTHORIZED:
      req.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN:
      req.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      req.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
        console.log("No Error")
      break;
  }
};

module.exports = errorHandler;
