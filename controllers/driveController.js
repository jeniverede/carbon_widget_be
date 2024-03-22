const Drive = require("../schemas/Drive");

exports.calculateCarbonProducedController = async (req, res) => {
  const { daysOfDriving } = req.body;

  try {
    // Calculate carbon produced
    const carbonProduced = calculateCarbonProduced(daysOfDriving);
    // Save data to MongoDB
    const drive = new Drive({
      daysOfDriving,
      carbonProduced,
    });
    await drive.save();

    // Send response
    res.json({
      result: `Carbon produced by driving ${daysOfDriving} days a week: ${carbonProduced.toFixed(
        2
      )} pounds of CO2`,
    });
  } catch (error) {
    console.error("Error calculating carbon produced:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

function calculateCarbonProduced(daysOfDriving) {
  /* calculation logic */
  const distancePerDayMiles = 30; // Average distance driven per day in miles
  const fuelEfficiencyMPG = 25; // Miles per gallon (MPG) of the vehicle
  const emissionFactorGasoline = 19.6; // Emission factor for gasoline in pounds of CO2 per gallon

  // Calculates total distance driven in a week
  const totalDistanceMiles = distancePerDayMiles * daysOfDriving;

  // Calculates total fuel consumed in a week
  const fuelConsumedGallons = totalDistanceMiles / fuelEfficiencyMPG;

  // Calculates total carbon produced in a week
  const carbonProducedPounds = fuelConsumedGallons * emissionFactorGasoline;

  return carbonProducedPounds;
}
