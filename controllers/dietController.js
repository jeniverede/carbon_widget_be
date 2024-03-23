const Diet = require("../schemas/Diet");

exports.calculateDietCarbonProducedController = async (req, res) => {
  const { daysPerWeek } = req.body;

  try {
    // Calculate carbon produced
    const carbonProduced = calculateCarbonProduced(daysPerWeek);
    // Save data to MongoDB
    const diet = new Diet({
      daysPerWeek,
      carbonProduced,
    });
    await diet.save();

    // Send response
    res.json({
      result: `Carbon produced by eating meet ${daysPerWeek} days a week: ${carbonProduced.toFixed(
        2
      )} pounds of CO2`,
    });
  } catch (error) {
    console.error("Error calculating carbon produced:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

function calculateCarbonProduced(daysPerWeek) {
  /* calculation logic */
  const emissionFactorMeat = 27; // Emission factor for beef, most common meat consumed

  // Calculates total carbon produced
  const carbonProduced = emissionFactorMeat * daysPerWeek;

  return carbonProduced;
}