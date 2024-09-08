const router = require('express').Router();
const Bands = require('./bands-model');

router.get('/', (req, res) => {
  Bands.getAll()
    .then((bands) => {
      res.json(bands);
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong getting bands',
        error: error,
      });
    });
});

router.get('/:band_id', async (req, res) => {
  try {
    const band = await Bands.getById(req.params.band_id);
    res.json(band);
  } catch (error) {
    res.status(404).json({
      message: `A band with ${req.params.band_id} could not be found`,
      error: error,
    });
  }
});

router.put('/:band_id', async (req, res) => {
  const bandId = req.params.band_id;
  try {
    const theUpdatedBandIs = await Bands.update(bandId, req.body);
    res.json(theUpdatedBandIs);
  } catch (error) {
    res.status(500).json({
      message: `There was an issue updating ${bandId}, please check your payload and try again.`,
      error: error,
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const newBand = await Bands.add(req.body);
    res.status(201).json(newBand);
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong adding the band, ${req.body.band_name}`,
      error: error,
    });
  }
});

module.exports = router;