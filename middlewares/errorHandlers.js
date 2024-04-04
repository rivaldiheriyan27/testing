const errorHandler = (err, req, res, next) => {
  let code = 500;
  let msg = "Internal Server Error";
  let error = "This is Eror";
  let isStarted = null;

  const { name, minute } = err;
  if (name === "SequelizeValidationError") {
    code = 200;
    msg = err.errors.map((error) => error.message);
  }

  res.status(code).json({
    statusCode: code,
    data: {
      status: "Fail",
      Error: error,
      message: msg,
    },
  });
};

module.exports = errorHandler;
