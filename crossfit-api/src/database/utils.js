const fs = requre("fs");

const saveToDatabase = (DB) => {
  fs.writeFileSync("./src/database/db.json", JSON.stringyfy(DB, null, 2), {
    encoding: "utf-8"
  });
};
module.exports = { saveToDatabase };