import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      parentName,
      email,
      phone,
      studentName,
      currentGrade,
      interestedGrade,
      enquiryType,
      preferredContact,
      message,
    } = body;

    // Validate required fields
    if (!parentName || !email || !phone || !interestedGrade || !enquiryType || !preferredContact || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Enquiry - Doon International School</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #002B6B, #FFD700); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #002B6B; }
            .field-value { background: white; padding: 8px; border-radius: 4px; border: 1px solid #ddd; }
            .urgent { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 4px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔔 New Enquiry Received</h1>
              <p>Doon International School</p>
            </div>

            <div class="content">
              <div class="urgent">
                <strong>Action Required:</strong> Please respond to this enquiry within 24 hours.
              </div>

              <h2>Parent/Guardian Information</h2>
              <div class="field">
                <div class="field-label">Name:</div>
                <div class="field-value">${parentName}</div>
              </div>
              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">${email}</div>
              </div>
              <div class="field">
                <div class="field-label">Phone:</div>
                <div class="field-value">${phone}</div>
              </div>
              <div class="field">
                <div class="field-label">Preferred Contact Method:</div>
                <div class="field-value">${preferredContact}</div>
              </div>

              <h2>Student Information</h2>
              <div class="field">
                <div class="field-label">Student Name:</div>
                <div class="field-value">${studentName || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="field-label">Current Grade:</div>
                <div class="field-value">${currentGrade || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="field-label">Grade Interested In:</div>
                <div class="field-value">${interestedGrade}</div>
              </div>

              <h2>Enquiry Details</h2>
              <div class="field">
                <div class="field-label">Type of Enquiry:</div>
                <div class="field-value">${enquiryType}</div>
              </div>
              <div class="field">
                <div class="field-label">Message:</div>
                <div class="field-value" style="white-space: pre-wrap;">${message}</div>
              </div>

              <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">

              <p><strong>Submission Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              <p><strong>Source:</strong> Website Enquiry Form</p>

              <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 4px;">
                <p><strong>💡 Quick Actions:</strong></p>
                <ul>
                  <li>Reply to: <a href="mailto:${email}">${email}</a></li>
                  <li>Call: <a href="tel:${phone}">${phone}</a></li>
                  <li>Check enquiry type: ${enquiryType}</li>
                </ul>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: `"Doon International School" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to the same Gmail account
      subject: `New Enquiry: ${enquiryType} - ${parentName}`,
      html: emailHtml,
      replyTo: email, // Allow direct reply to the enquirer's email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Enquiry submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending enquiry email:', error);
    return NextResponse.json(
      { error: 'Failed to send enquiry' },
      { status: 500 }
    );
  }
}
