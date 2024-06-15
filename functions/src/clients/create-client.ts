import * as admin from "firebase-admin";
import { onRequest } from "firebase-functions/v2/https";

admin.initializeApp();

const db = admin.firestore();

export const createClient = onRequest(async (req, res) => {
  const data = req.body;

  if (!data) {
    res.status(400).send("No data provided");
    return;
  }
  try {
    const docRef = await db.collection("clients").add(data);
    res.status(200).send(`Document added with ID: ${docRef.id}`);
  } catch (error) {
    console.error("Error adding document: ", error);
    res.status(500).send("Error adding document");
  }
});
