const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message, consent } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message || !consent) {
    return res.status(400).json({
      success: false,
      message: 'Wszystkie wymagane pola muszą być wypełnione.'
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Nieprawidłowy format adresu email.'
    });
  }

  // Log the contact form submission (in production, this would send an email)
  console.log('=== Nowa wiadomość z formularza kontaktowego ===');
  console.log('Imię i nazwisko:', name);
  console.log('Email:', email);
  console.log('Telefon:', phone || 'Nie podano');
  console.log('Temat:', subject);
  console.log('Wiadomość:', message);
  console.log('Zgoda RODO:', consent);
  console.log('Czas:', new Date().toISOString());
  console.log('=============================================\n');

  // In production, here you would:
  // 1. Send an email to the library
  // 2. Save to database
  // 3. Send confirmation email to user

  res.json({
    success: true,
    message: 'Wiadomość została wysłana pomyślnie!'
  });
});

// Newsletter subscription endpoint
app.post('/api/newsletter', (req, res) => {
  const { email, consent } = req.body;

  if (!email || !consent) {
    return res.status(400).json({
      success: false,
      message: 'Email i zgoda są wymagane.'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Nieprawidłowy format adresu email.'
    });
  }

  console.log('=== Nowy zapis do newslettera ===');
  console.log('Email:', email);
  console.log('Czas:', new Date().toISOString());
  console.log('=================================\n');

  res.json({
    success: true,
    message: 'Dziękujemy za zapisanie się do newslettera!'
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server Biblioteki Narol działa prawidłowo',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server Express uruchomiony na porcie ${PORT}`);
  console.log(`📧 Endpoint kontaktowy: http://localhost:${PORT}/api/contact`);
  console.log(`📰 Endpoint newsletter: http://localhost:${PORT}/api/newsletter`);
  console.log(`❤️  Health check: http://localhost:${PORT}/api/health\n`);
});

module.exports = app;