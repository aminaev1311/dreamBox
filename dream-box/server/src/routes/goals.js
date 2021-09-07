const { Router } = require("express");
const router = Router();
const Goal = require("@m/goal");

router.get("/api/get-goals", async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.user._id });

    res.status(200).json(goals);
  } catch (e) {
    console.error(e);
    res.status(501).send({ result: false });
  }
});
router.delete("/api/delete-goal/:id", async (req, res) => {
  try {
    const goal = await Goal.deleteOne({ _id: req.params.id });
    if (goal) {
      res.status(200).send({ result: true });
    } else {
      res.status(501).send({ result: false });
    }
  } catch (e) {
    console.error(e);
    res.status(501).send({ result: false });
  }
});

router.post("/api/add-goal", async (req, res) => {
  try {
    const { body, user } = req;
    if (body.userId === user._id) {
      const newGoal = new Goal({ ...body });
      const { _id } = await newGoal.save();
      return res.status(200).send({ result: true, _id });
    }
    res.status(401).send({ result: false });
  } catch (e) {
    console.error(e);
    res.status(501).send({ result: false });
  }
});

module.exports = router;
