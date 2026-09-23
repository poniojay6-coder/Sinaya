import {
  callDeepSeek,
  isDeepSeekConfigured,
} from "./services/ai/deepseek.client.js";
import {
  testCopernicusConnection,
} from "./services/satellite/copernicus.client.js";

async function testServices() {
  console.log("Testing external services...\n");

  // Test DeepSeek
if (!isDeepSeekConfigured()) {
  console.log("⏭️ DeepSeek test skipped: no API key configured.");
} else {
  try {
    const aiResponse = await callDeepSeek([
      {
        role: "system",
        content:
          "You are the BantayTubig assistant. Give short and safe aquaculture advice.",
      },
      {
        role: "user",
        content:
          "The pond pH is 5.5. Explain the possible risk in one sentence.",
      },
    ]);

    console.log("✅ DeepSeek connection successful");
    console.log("Response:", aiResponse);
  } catch (error) {
    console.error("❌ DeepSeek connection failed");
    console.error(error);
  }
}

  // Test Copernicus
  try {
    const satelliteResponse = await testCopernicusConnection();

    console.log("✅ Copernicus connection successful");
    console.log(
      "Available collections:",
      satelliteResponse.collections?.length ?? "Connection confirmed",
    );
  } catch (error) {
    console.error("❌ Copernicus connection failed");
    console.error(error);
  }
}

testServices();