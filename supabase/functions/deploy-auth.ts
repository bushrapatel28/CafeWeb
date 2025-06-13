// Script to deploy the auth edge function
import { encode as base64Encode } from "https://deno.land/std@0.168.0/encoding/base64.ts";
import { readFile } from "https://deno.land/std@0.168.0/fs/read_file.ts";

// Function to read and encode a file to base64
async function readAndEncodeFile(filePath: string): Promise<string> {
  try {
    const fileContent = await readFile(filePath);
    return base64Encode(fileContent);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    throw error;
  }
}

async function deployAuthFunction() {
  const supabaseProjectRef = Deno.env.get("SUPABASE_PROJECT_ID");
  const picaSecret = Deno.env.get("PICA_SECRET_KEY");
  const picaConnectionKey = Deno.env.get("PICA_SUPABASE_CONNECTION_KEY");
  const actionId = "conn_mod_def::GC40T84CyNM::ee8XBvT6TRua_1upUL_H5Q";

  if (!supabaseProjectRef || !picaSecret || !picaConnectionKey) {
    console.error("Missing required environment variables");
    Deno.exit(1);
  }

  // Read and encode the auth function file
  const indexFileContent = await readAndEncodeFile("./auth/index.ts");
  const denoJsonContent = await readAndEncodeFile("./auth/deno.json");

  const url = `https://api.picaos.com/v1/passthrough/projects/${supabaseProjectRef}/functions/deploy?slug=auth&bundleOnly=false`;

  const requestBody = {
    file: [indexFileContent, denoJsonContent],
    metadata: {
      entrypoint_path: "index.js",
      import_map_path: "import_map.json",
      static_patterns: ["**/*"],
      verify_jwt: true,
      name: "auth",
    },
  };

  const headers = {
    "x-pica-secret": picaSecret,
    "x-pica-connection-key": picaConnectionKey,
    "x-pica-action-id": actionId,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Deployment successful:", data);
      return data;
    } else {
      const errorData = await response.text();
      console.error("Deployment failed:", response.status, errorData);
      throw new Error(`Deployment failed: ${response.status} ${errorData}`);
    }
  } catch (error) {
    console.error("Error during deployment:", error);
    throw error;
  }
}

// Execute the deployment
deployAuthFunction()
  .then((result) => {
    console.log("Auth function deployed successfully:", result);
    Deno.exit(0);
  })
  .catch((error) => {
    console.error("Failed to deploy auth function:", error);
    Deno.exit(1);
  });
