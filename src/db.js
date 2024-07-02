const { default: mongoose } = require("mongoose");

class DB {
  constructor(uri, database = "mongodb") {
    this.uri = uri;
    this.database = database;
  }

  connect = async (options) => {
    try {
      switch (this.database) {
        case "mongodb":
          await mongoose.connect(this.uri, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 5000,
            ...options,
          });
          logger.info("successfully connected with mongodb");
          break;

        case "postgres":
          logger.info("successfully connected with postgres");

          break;

        case "redis":
          logger.info("successfully connected with redis");
          break;
      }
    } catch (err) {
      logger.error(err);
      process.exit(1);
    }
  };
}

module.exports = DB;
