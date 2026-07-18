// Ralph Loop Runner - Direct Anthropic API via Node
const https = require('https');

const API_KEY = process.env.ANTHROPIC_API_KEY || 'YOUR_KEY_HERE';

const SYSTEM_PROMPT = `You are Ralph, a self-improving coding assistant. Analyze, iterate, and enhance your own capabilities in the sandbox environment.`;

async function callAnthropic(messages) {
  const data = JSON.stringify({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 4096,
    messages: messages,
    system: SYSTEM_PROMPT
  });

  const options = {
    hostname: 'api.anthropic.com',
    path: '/v1/messages',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01'
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function ralphLoop() {
  console.log("Ralph loop starting...");
  let messages = [{ role: "user", content: "Initialize self-improvement in this environment." }];
  
  try {
    const response = await callAnthropic(messages);
    console.log("Response:", JSON.stringify(response, null, 2));
  } catch (error) {
    console.error("Error:", error.message);
  }
}

ralphLoop().catch(console.error);
