// Google Apps Script Web App for Muna Agency leads.
// Owner account: munaagencyuz@gmail.com
// Deploy: Extensions/Apps Script -> Deploy -> New deployment -> Web app.
// Execute as: Me. Who has access: Anyone.
// Then set Cloudflare Pages env GOOGLE_APPS_SCRIPT_URL to the Web App URL.

const SHEET_NAME = 'Leads';
const EMAIL_TO = 'info@munamedia.me';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Created at', 'Name', 'Company', 'Email', 'Phone/Telegram', 'Market', 'Budget', 'Message', 'Source']);
    }

    sheet.appendRow([
      new Date(),
      payload.name || '',
      payload.company || '',
      payload.email || '',
      payload.phone || '',
      payload.market || '',
      payload.budget || '',
      payload.message || '',
      payload.source || 'munaagency.com'
    ]);

    const subject = 'New Muna Agency lead';
    const body = [
      'New Muna Agency lead',
      '',
      `Name: ${payload.name || ''}`,
      `Company: ${payload.company || ''}`,
      `Email: ${payload.email || ''}`,
      `Phone/Telegram: ${payload.phone || ''}`,
      `Market: ${payload.market || ''}`,
      `Budget: ${payload.budget || ''}`,
      '',
      `Message: ${payload.message || ''}`,
      '',
      `Source: ${payload.source || 'munaagency.com'}`
    ].join('\n');
    MailApp.sendEmail(EMAIL_TO, subject, body);

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
