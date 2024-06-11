import { adminFirestore } from "../firebase";

export const addRequest = async (req: any, res: any) => {
  try {
    const { name, value } = req.body;
    const newDoc = await adminFirestore.collection("your-collection").add({
      name,
      value,
      createdAt: new Date().toISOString(),
    });
    res
      .status(201)
      .json({ id: newDoc.id, message: "Document added successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
