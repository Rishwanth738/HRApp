import pool from "../db.js";

export const submitTask = async (req, res) => {
  const { taskId } = req.params;
  const { content } = req.body;
  const userId = req.user.id;

  try {
    const result = await pool.query(
      "INSERT INTO submissions (task_id, user_id, content) VALUES ($1, $2, $3) RETURNING *",
      [taskId, userId, content]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Submission failed", error: err });
  }
};

export const getResult = async (req, res) => {
  const userId = req.user.id;

  try {
    const result = await pool.query(
      "SELECT * FROM results WHERE user_id = $1 ORDER BY created_at DESC LIMIT 1",
      [userId]
    );

    if (result.rows.length === 0) return res.status(404).json({ message: "No result found" });

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch result", error: err });
  }
};
