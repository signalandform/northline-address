import { google } from "googleapis";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

function base64UrlEncode(input: Buffer | string) {
  const buf = Buffer.isBuffer(input) ? input : Buffer.from(input);
  return buf
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function makeRawEmail(opts: {
  to: string;
  subject: string;
  text: string;
  from?: string;
  replyTo?: string;
}) {
  const lines = [
    `To: ${opts.to}`,
    `Subject: ${opts.subject}`,
    opts.from ? `From: ${opts.from}` : undefined,
    opts.replyTo ? `Reply-To: ${opts.replyTo}` : undefined,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    opts.text,
  ].filter(Boolean);

  return base64UrlEncode(lines.join("\n"));
}

export async function sendViaGmail(opts: {
  to: string;
  subject: string;
  text: string;
  from?: string;
  replyTo?: string;
}) {
  const clientId = requireEnv("GMAIL_CLIENT_ID");
  const clientSecret = requireEnv("GMAIL_CLIENT_SECRET");
  const refreshToken = requireEnv("GMAIL_REFRESH_TOKEN");
  const redirectUri = process.env.GMAIL_REDIRECT_URI || "http://localhost";

  const auth = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
  auth.setCredentials({ refresh_token: refreshToken });

  const gmail = google.gmail({ version: "v1", auth });

  const raw = makeRawEmail(opts);
  const res = await gmail.users.messages.send({
    userId: "me",
    requestBody: { raw },
  });

  return { messageId: res.data.id };
}
