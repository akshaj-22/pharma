const express = require("express");
const router = express.Router();
const { clientApplication } = require("./client");




router.post("/createdrug", async (req, res) => {
  try {
    const { drugId, drugName, drugBrand, drugIngredients, manufacturerName, manufacturingDate, expiryDate } = req.body;

    // Parse composition string to an array
    const parsedComposition = JSON.parse(composition);

    let manufacturerClient = new clientApplication();

    const result = await manufacturerClient.submitTxn(
      "manufacturer",
      "pharmachannel",
      "pharmanet",
      "DrugContract",
      "invokeTxn",
      "",
      "createDrug",
      drugId,
      drugName,
      drugBrand,
      drugIngredients,
      manufacturerName,
      manufacturingDate,
      expiryDate
    );

    res.status(201).json({
      success: true,
      message: "Drug created successfully!",
      data: { result },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create drug. Please check the details.",
      data: { error },
    });
  }
});

module.exports = router;
