import Admin from "firebase-admin";

const serviceAccount = require("./aspr-health-firebase-adminsdk-k58gl-6e487e3861.json");

Admin.initializeApp({
  credential: Admin.credential.cert(serviceAccount),
});
export default Admin;
