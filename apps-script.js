// ============================================================
//  Pulse CRM — Google Apps Script Web App
//  Paste this into Extensions → Apps Script in your CRM sheet
//  Then Deploy → New deployment → Web app → Anyone → Deploy
// ============================================================

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Try to get the specified sheet, fall back to active
    let sheet;
    try {
      sheet = ss.getSheetByName(data.sheetName || 'Sheet1') || ss.getActiveSheet();
    } catch(err) {
      sheet = ss.getActiveSheet();
    }

    sheet.clearContents();

    // Write headers
    const headers = data.headers || ['Client Name','Contact','Status','Deal Value (€)','Next Step','Notes'];
    sheet.appendRow(headers);

    // Style header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#1a1a2e');
    headerRange.setFontColor('#e8c97a');

    // Write data rows
    const rows = data.rows || [];
    rows.forEach((row, i) => {
      sheet.appendRow(row);
      // Alternate row background
      const rowRange = sheet.getRange(i + 2, 1, 1, headers.length);
      rowRange.setBackground(i % 2 === 0 ? '#ffffff' : '#f8f8ff');
    });

    // Auto-resize columns
    for (let i = 1; i <= headers.length; i++) {
      sheet.autoResizeColumn(i);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        count: rows.length,
        message: `Synced ${rows.length} clients successfully`
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Pulse CRM endpoint active ✓' }))
    .setMimeType(ContentService.MimeType.JSON);
}
