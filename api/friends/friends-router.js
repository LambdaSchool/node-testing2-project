const router = require("express").Router();
const Friends = require("./friends-model");

router.get("/", (req, res) => {
  Friends.getAll()
    .then((friends) => {
      res.json(friends);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong when fetching friends",
        error: err,
      });
    });
});

router.get("/:friend_id", async (req, res) => {
  try {
    const friend = await Friends.getById(req.params.friend_id);
    res.json(friend);
  } catch (err) {
    res.status(500).json({
      message: `Something went wrong when fetching friend with id: ${req.params.friend_id}`,
      error: err,
    });
  }
});

router.delete("/:friend_id", async (req, res) => {
  try {
    const deletedFriend = await Friends.getById(req.params.friend_id);
    await Friends.remove(req.params.friend_id);
    res.json(deletedFriend);
  } catch (err) {
    res.status(500).json({
      message: `Something went wrong when fetching friend with id: ${req.params.friend_id}`,
      error: err,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const newFriend = await Friends.add(req.body);
    res.status(201).json(newFriend);
  } catch (err) {
    res.status(500).json({
      message: `Something went wrong when fetching friend with id: ${req.params.friend_id}`,
      error: err,
    });
  }
});

module.exports = router;
