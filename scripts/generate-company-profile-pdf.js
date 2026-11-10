const fs = require('fs');
const path = require('path');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

async function generateCompanyProfilePDF() {
  console.log('Generating official Asanti Shores Limited Company Profile PDF...');

  const pdfDoc = await PDFDocument.create();

  // Load fonts
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette
  const navy = rgb(0.043, 0.122, 0.2); // #0B1F33
  const darkNavy = rgb(0.027, 0.082, 0.141); // #071524
  const gold = rgb(0.851, 0.643, 0.255); // #D9A441
  const teal = rgb(0.086, 0.490, 0.569); // #167D91
  const lightBg = rgb(0.953, 0.965, 0.973); // #F3F6F8
  const cardBorder = rgb(0.85, 0.88, 0.91);
  const textDark = rgb(0.07, 0.13, 0.2);
  const textMuted = rgb(0.35, 0.41, 0.47);
  const white = rgb(1, 1, 1);
  const emerald = rgb(0.05, 0.6, 0.35);

  // Load images
  const logoShipBytes = fs.readFileSync('public/images/brand/logo-ship.png');
  const logoShip = await pdfDoc.embedPng(logoShipBytes);

  const logoAnchorBytes = fs.readFileSync('public/images/brand/logo-anchor.png');
  const logoAnchor = await pdfDoc.embedPng(logoAnchorBytes);

  const team1Bytes = fs.readFileSync('public/images/team/team-1.png');
  const team1 = await pdfDoc.embedPng(team1Bytes);

  const team3Bytes = fs.readFileSync('public/images/team/team-3.png');
  const team3 = await pdfDoc.embedPng(team3Bytes);

  const proj3Bytes = fs.readFileSync('public/images/projects/project-3.png');
  const proj3 = await pdfDoc.embedPng(proj3Bytes);

  const proj11Bytes = fs.readFileSync('public/images/projects/project-11.png');
  const proj11 = await pdfDoc.embedPng(proj11Bytes);

  const proj10Bytes = fs.readFileSync('public/images/projects/project-10.png');
  const proj10 = await pdfDoc.embedPng(proj10Bytes);

  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const marginX = 40;
  const contentWidth = pageWidth - marginX * 2; // 515.28

  function drawHeaderFooter(page, pageNum, totalPages) {
    // Top banner strip
    page.drawRectangle({
      x: 0,
      y: pageHeight - 32,
      width: pageWidth,
      height: 32,
      color: darkNavy,
    });
    page.drawRectangle({
      x: 0,
      y: pageHeight - 34,
      width: pageWidth,
      height: 2,
      color: gold,
    });

    // Header text
    page.drawText('ASANTI SHORES LIMITED', {
      x: marginX,
      y: pageHeight - 21,
      size: 9,
      font: fontBold,
      color: white,
    });
    page.drawText('RC: 2018901  |  INTEGRATED MARINE SERVICES  |  OFFICIAL CORPORATE PROFILE', {
      x: marginX + 130,
      y: pageHeight - 20,
      size: 7.5,
      font: fontRegular,
      color: gold,
    });

    // Footer bar
    page.drawRectangle({
      x: 0,
      y: 0,
      width: pageWidth,
      height: 28,
      color: lightBg,
    });
    page.drawRectangle({
      x: 0,
      y: 28,
      width: pageWidth,
      height: 1,
      color: cardBorder,
    });

    page.drawText('Safe operations. Dependable delivery. Open communication.', {
      x: marginX,
      y: 10,
      size: 7.5,
      font: fontOblique,
      color: textMuted,
    });

    page.drawText('operations desk: +234 916 259 9586  |  asantishores@gmail.com', {
      x: 230,
      y: 10,
      size: 7.5,
      font: fontRegular,
      color: textMuted,
    });

    const pageStr = `Page ${pageNum} of ${totalPages}`;
    const pageStrWidth = fontBold.widthOfTextAtSize(pageStr, 8);
    page.drawText(pageStr, {
      x: pageWidth - marginX - pageStrWidth,
      y: 10,
      size: 8,
      font: fontBold,
      color: navy,
    });
  }

  // ==========================================
  // PAGE 1: COVER & EXECUTIVE OVERVIEW
  // ==========================================
  const page1 = pdfDoc.addPage([pageWidth, pageHeight]);

  // Decorative top hero block
  page1.drawRectangle({
    x: marginX,
    y: pageHeight - 195,
    width: contentWidth,
    height: 150,
    color: darkNavy,
  });
  page1.drawRectangle({
    x: marginX,
    y: pageHeight - 198,
    width: contentWidth,
    height: 3,
    color: gold,
  });

  // Logos in header block
  page1.drawImage(logoShip, {
    x: marginX + 16,
    y: pageHeight - 175,
    width: 68,
    height: 64,
  });
  page1.drawImage(logoAnchor, {
    x: marginX + 90,
    y: pageHeight - 165,
    width: 46,
    height: 44,
  });

  // Title text in hero block
  page1.drawText('ASANTI SHORES LIMITED', {
    x: marginX + 150,
    y: pageHeight - 90,
    size: 20,
    font: fontBold,
    color: white,
  });
  page1.drawText('COMPANY PROFILE & CORPORATE DOSSIER', {
    x: marginX + 150,
    y: pageHeight - 108,
    size: 11,
    font: fontBold,
    color: gold,
  });
  page1.drawText('RC: 2018901  •  INCORPORATED: 12 JANUARY 2023  •  TIN: 31273907-0001', {
    x: marginX + 150,
    y: pageHeight - 124,
    size: 8,
    font: fontRegular,
    color: rgb(0.8, 0.85, 0.9),
  });
  page1.drawText('Vessels | Crews | Provisions | Fuel | Equipment | Underwater Support', {
    x: marginX + 150,
    y: pageHeight - 144,
    size: 9.5,
    font: fontBold,
    color: white,
  });
  page1.drawText('“Safe operations. Dependable delivery. Open communication.”', {
    x: marginX + 150,
    y: pageHeight - 162,
    size: 8.5,
    font: fontOblique,
    color: gold,
  });

  // Contact Information Ribbon Card
  page1.drawRectangle({
    x: marginX,
    y: pageHeight - 250,
    width: contentWidth,
    height: 46,
    color: lightBg,
    borderColor: cardBorder,
    borderWidth: 1,
  });
  page1.drawText('CONTACT & OPERATIONAL BASES', {
    x: marginX + 12,
    y: pageHeight - 216,
    size: 8,
    font: fontBold,
    color: navy,
  });
  page1.drawText('Headquarters: Shop 04, Prowa Shopping Complex, Opp. Kirikiri Police Station, Kirikiri Town, Lagos, Nigeria', {
    x: marginX + 12,
    y: pageHeight - 228,
    size: 7.5,
    font: fontRegular,
    color: textDark,
  });
  page1.drawText('Site & Field Jetty: Defense Jetty, Marina, Lagos  |  Phones: +234 916 259 9586  /  0817 684 0868  /  0814 646 3163', {
    x: marginX + 12,
    y: pageHeight - 240,
    size: 7.5,
    font: fontRegular,
    color: textMuted,
  });

  // About Us Narrative (Left Column) + Photo / Highlights (Right Column)
  const colY = pageHeight - 268;
  const colWidthLeft = 320;
  const colWidthRight = 185;

  page1.drawText('ABOUT ASANTI SHORES LIMITED', {
    x: marginX,
    y: colY,
    size: 12,
    font: fontBold,
    color: navy,
  });
  page1.drawRectangle({
    x: marginX,
    y: colY - 4,
    width: 45,
    height: 2,
    color: gold,
  });

  const aboutParagraphs = [
    'ASANTI SHORES LIMITED is an incorporated Nigerian marine services company that supplies vessels, crews, provisions, fuel, equipment and underwater support to ship owners, commercial operators and the oil and gas industry from a single point of contact.',
    'The company was incorporated on 12 January 2023 as a private company limited by shares under the Companies and Allied Matters Act 2020 (RC 2018901), and is registered with the Corporate Affairs Commission of the Federal Republic of Nigeria.',
    'Our offering covers seven connected service lines. Clients deal with one company for the full vessel support chain, which cuts coordination time, eliminates middle-layer friction, and keeps operational accountability clear.',
    'We work to a simple standard: safe operations, dependable delivery and open communication from the first enquiry to the final invoice.',
  ];

  let pY = colY - 18;
  for (const para of aboutParagraphs) {
    const lines = splitText(para, colWidthLeft - 10, fontRegular, 8.5);
    for (const l of lines) {
      page1.drawText(l, { x: marginX, y: pY, size: 8.5, font: fontRegular, color: textDark });
      pY -= 12;
    }
    pY -= 5;
  }

  // Right Column: Image of MD & Operations Staff at entrance
  page1.drawImage(team3, {
    x: marginX + colWidthLeft + 10,
    y: colY - 170,
    width: colWidthRight,
    height: 175,
  });
  page1.drawRectangle({
    x: marginX + colWidthLeft + 10,
    y: colY - 170,
    width: colWidthRight,
    height: 175,
    borderColor: cardBorder,
    borderWidth: 1,
  });
  page1.drawRectangle({
    x: marginX + colWidthLeft + 10,
    y: colY - 170,
    width: colWidthRight,
    height: 24,
    color: darkNavy,
  });
  page1.drawText('Executive Field Leadership', {
    x: marginX + colWidthLeft + 16,
    y: colY - 158,
    size: 7.5,
    font: fontBold,
    color: gold,
  });
  page1.drawText('At Corporate Facility Entrance', {
    x: marginX + colWidthLeft + 16,
    y: colY - 167,
    size: 6.5,
    font: fontRegular,
    color: white,
  });

  // Core Strengths Box (Bottom Half)
  const strengthY = pY - 8;
  page1.drawRectangle({
    x: marginX,
    y: strengthY - 150,
    width: contentWidth,
    height: 155,
    color: lightBg,
    borderColor: cardBorder,
    borderWidth: 1,
  });
  page1.drawRectangle({
    x: marginX,
    y: strengthY + 1,
    width: contentWidth,
    height: 4,
    color: navy,
  });

  page1.drawText('OUR CORE OPERATIONAL STRENGTHS', {
    x: marginX + 16,
    y: strengthY - 16,
    size: 11,
    font: fontBold,
    color: navy,
  });

  const strengthsCol1 = [
    '• Safety first on every job: Zero-accident and zero-spill commitment.',
    '• Honest pricing and accurate reporting from quotation to invoicing.',
    '• Guaranteed delivery: Provisions, fuel, vessels and crew on schedule.',
    '• Round-the-clock coordination: 24/7 dedicated marine operations desk.',
  ];
  const strengthsCol2 = [
    '• One point of contact: Unified accountability for the full support chain.',
    '• Responsible environmental stewardship: Strict fuel, water and waste handling.',
    '• Continual improvement: Client feedback actively incorporated into standard procedures.',
    '• Strategic base locations: Direct quayside deployment at Kirikiri and Defense Jetty, Marina.',
  ];

  let sY = strengthY - 36;
  for (const s of strengthsCol1) {
    page1.drawText(s, { x: marginX + 16, y: sY, size: 8, font: fontRegular, color: textDark });
    sY -= 26;
  }
  sY = strengthY - 36;
  for (const s of strengthsCol2) {
    page1.drawText(s, { x: marginX + 265, y: sY, size: 8, font: fontRegular, color: textDark });
    sY -= 26;
  }

  // Full Crew photo strip at bottom of Page 1
  page1.drawImage(team1, {
    x: marginX,
    y: 38,
    width: contentWidth,
    height: 98,
  });
  page1.drawRectangle({
    x: marginX,
    y: 38,
    width: contentWidth,
    height: 98,
    borderColor: cardBorder,
    borderWidth: 1,
  });
  page1.drawRectangle({
    x: marginX,
    y: 38,
    width: contentWidth,
    height: 18,
    color: darkNavy,
  });
  page1.drawText('Asanti Shores Limited Operations Crew & Field Supervisors in Branded Company PPE', {
    x: marginX + 12,
    y: 44,
    size: 7.5,
    font: fontBold,
    color: white,
  });

  drawHeaderFooter(page1, 1, 5);

  // ==========================================
  // PAGE 2: VISION, MISSION, VALUES & QHSE
  // ==========================================
  const page2 = pdfDoc.addPage([pageWidth, pageHeight]);

  let curY = pageHeight - 55;

  page2.drawText('VISION, MISSION, VALUES & QHSE FRAMEWORK', {
    x: marginX,
    y: curY,
    size: 14,
    font: fontBold,
    color: navy,
  });
  page2.drawRectangle({
    x: marginX,
    y: curY - 4,
    width: 60,
    height: 2,
    color: gold,
  });
  curY -= 28;

  // Vision Box
  page2.drawRectangle({
    x: marginX,
    y: curY - 42,
    width: contentWidth,
    height: 44,
    color: lightBg,
    borderColor: teal,
    borderWidth: 1,
  });
  page2.drawText('OUR VISION', {
    x: marginX + 14,
    y: curY - 14,
    size: 9,
    font: fontBold,
    color: teal,
  });
  page2.drawText('“To be the most trusted indigenous partner for integrated marine services in Nigeria and the wider region.”', {
    x: marginX + 14,
    y: curY - 30,
    size: 9.5,
    font: fontBold,
    color: navy,
  });
  curY -= 54;

  // Mission Box
  page2.drawRectangle({
    x: marginX,
    y: curY - 84,
    width: contentWidth,
    height: 86,
    color: lightBg,
    borderColor: navy,
    borderWidth: 1,
  });
  page2.drawText('OUR MISSION', {
    x: marginX + 14,
    y: curY - 14,
    size: 9,
    font: fontBold,
    color: navy,
  });
  const missionItems = [
    '• To deliver reliable, cost-effective marine support to ship owners, operators and energy companies, from crewing and provisions to fuel, vessels and underwater work.',
    '• To protect people, vessels and the environment by working to recognised international safety and quality practice.',
    '• To keep every client informed, with fast response and clear reporting at each stage of a job.',
    '• To build lasting relationships with clients, suppliers and host communities.',
  ];
  let mY = curY - 28;
  for (const m of missionItems) {
    page2.drawText(m, { x: marginX + 14, y: mY, size: 7.5, font: fontRegular, color: textDark });
    mY -= 14;
  }
  curY -= 96;

  // Core Values Grid (5 cards)
  page2.drawText('OUR CORE VALUES', {
    x: marginX,
    y: curY,
    size: 11,
    font: fontBold,
    color: navy,
  });
  curY -= 16;

  const coreValues = [
    { title: 'Safety First', desc: 'No job is worth an injury or a spill. Mandatory PPE and risk review on every task.' },
    { title: 'Integrity', desc: 'Honest pricing, accurate reporting, and commercial commitments kept at all times.' },
    { title: 'Reliability', desc: 'Supplies, vessels and crews delivered strictly on schedule to prevent demurrage.' },
    { title: 'Responsiveness', desc: 'Quick answers and 24/7 coordination from first contact through job completion.' },
    { title: 'Environmental Care', desc: 'Responsible handling of waste, marine fuel and fresh water with zero discharge.' },
  ];

  const cardW = (contentWidth - 16) / 2; // 249.64
  let cX = marginX;
  let cY = curY;
  coreValues.forEach((val, idx) => {
    if (idx === 4) {
      // Span full width for 5th value
      page2.drawRectangle({
        x: marginX,
        y: cY - 34,
        width: contentWidth,
        height: 34,
        color: lightBg,
        borderColor: cardBorder,
        borderWidth: 1,
      });
      page2.drawText(val.title, { x: marginX + 12, y: cY - 14, size: 8.5, font: fontBold, color: navy });
      page2.drawText(val.desc, { x: marginX + 120, y: cY - 14, size: 8, font: fontRegular, color: textDark });
      cY -= 42;
    } else {
      const colX = idx % 2 === 0 ? marginX : marginX + cardW + 16;
      const rowY = cY - 38;
      page2.drawRectangle({
        x: colX,
        y: rowY,
        width: cardW,
        height: 38,
        color: lightBg,
        borderColor: cardBorder,
        borderWidth: 1,
      });
      page2.drawText(val.title, { x: colX + 10, y: rowY + 24, size: 8.5, font: fontBold, color: navy });
      page2.drawText(val.desc, { x: colX + 10, y: rowY + 11, size: 7.5, font: fontRegular, color: textDark });
      if (idx % 2 === 1) cY -= 44;
    }
  });

  curY = cY - 6;

  // Quality, Health, Safety & Environment (QHSE) Section
  page2.drawText('QUALITY, HEALTH, SAFETY AND ENVIRONMENT (QHSE)', {
    x: marginX,
    y: curY,
    size: 11,
    font: fontBold,
    color: navy,
  });
  page2.drawText('Safety and quality come before schedule on every Asanti Shores job.', {
    x: marginX,
    y: curY - 12,
    size: 8,
    font: fontOblique,
    color: textMuted,
  });
  curY -= 26;

  const qhseSteps = [
    { num: '1', title: 'Planning', desc: 'Each job starts with a structured pre-job review of scope, risks, sea state, and operational responsibilities.' },
    { num: '2', title: 'People', desc: 'Crews and contractors are briefed on safe working practices and empowered with Stop Work Authority before deployment.' },
    { num: '3', title: 'Equipment', desc: 'Vessels, diving spreads, compressors and gear are verified for condition and class certification before mobilization.' },
    { num: '4', title: 'Environment', desc: 'Fuel, potable water and waste handling follow regulatory MARPOL requirements, with spill prevention built into all delivery procedures.' },
    { num: '5', title: 'Continuous Improvement', desc: 'Client operational feedback and post-job reviews feed directly back into our standard operating procedures.' },
  ];

  qhseSteps.forEach((step) => {
    page2.drawRectangle({
      x: marginX,
      y: curY - 26,
      width: contentWidth,
      height: 26,
      color: lightBg,
      borderColor: cardBorder,
      borderWidth: 0.5,
    });
    page2.drawRectangle({
      x: marginX,
      y: curY - 26,
      width: 24,
      height: 26,
      color: navy,
    });
    page2.drawText(step.num, {
      x: marginX + 8,
      y: curY - 18,
      size: 9,
      font: fontBold,
      color: gold,
    });
    page2.drawText(step.title + ':', {
      x: marginX + 32,
      y: curY - 17,
      size: 8,
      font: fontBold,
      color: navy,
    });
    page2.drawText(step.desc, {
      x: marginX + 110,
      y: curY - 17,
      size: 7.5,
      font: fontRegular,
      color: textDark,
    });
    curY -= 30;
  });

  curY -= 4;

  // Our People & Safety in Practice
  page2.drawRectangle({
    x: marginX,
    y: 38,
    width: contentWidth,
    height: curY - 38,
    color: darkNavy,
  });
  page2.drawRectangle({
    x: marginX,
    y: curY - 2,
    width: contentWidth,
    height: 2,
    color: gold,
  });

  page2.drawText('OUR PEOPLE: HOW WE PREPARE FOR FIELD WORK', {
    x: marginX + 16,
    y: curY - 18,
    size: 10,
    font: fontBold,
    color: gold,
  });

  page2.drawText('• Pre-job review: Scope, risks and responsibilities are reviewed with all operational leads before work commences.', {
    x: marginX + 16,
    y: curY - 32,
    size: 7.5,
    font: fontRegular,
    color: white,
  });
  page2.drawText('• Crew briefing: Crews, vessel masters and riggers are briefed on site-specific safety and communication protocols.', {
    x: marginX + 16,
    y: curY - 44,
    size: 7.5,
    font: fontRegular,
    color: white,
  });
  page2.drawText('• Mandatory PPE in Practice: Industrial hard hats, reflective branded safety vests, and marine flotation work vests.', {
    x: marginX + 16,
    y: curY - 56,
    size: 7.5,
    font: fontRegular,
    color: white,
  });
  page2.drawText('“No job is worth an injury or a spill. Our people are briefed, equipped and accountable from enquiry to final invoice.”', {
    x: marginX + 16,
    y: curY - 72,
    size: 8,
    font: fontOblique,
    color: gold,
  });

  drawHeaderFooter(page2, 2, 5);

  // ==========================================
  // PAGE 3: SEVEN CONNECTED SERVICE LINES
  // ==========================================
  const page3 = pdfDoc.addPage([pageWidth, pageHeight]);

  curY = pageHeight - 55;

  page3.drawText('OUR SEVEN CONNECTED SERVICE LINES', {
    x: marginX,
    y: curY,
    size: 14,
    font: fontBold,
    color: navy,
  });
  page3.drawRectangle({
    x: marginX,
    y: curY - 4,
    width: 60,
    height: 2,
    color: gold,
  });
  page3.drawText('Available individually or integrated into one seamless vessel support package.', {
    x: marginX + 70,
    y: curY - 2,
    size: 8.5,
    font: fontOblique,
    color: textMuted,
  });
  curY -= 26;

  const services = [
    {
      no: '1',
      title: 'Ship and Crew Management',
      core: 'Crewing, vessel operations support and statutory compliance',
      bullets: [
        'Recruitment, placement and rotation of certified STCW vessel crews',
        'Crew documentation, certification checks and local travel coordination',
        'Support for vessel technical operations, statutory audits, and flag state compliance',
      ],
    },
    {
      no: '2',
      title: 'Ship Chandler',
      core: 'Provisions, stores and consumables delivered to the vessel',
      bullets: [
        'Fresh/frozen provisions, dry bonded stores, cabin supplies, deck & engine consumables',
        'Rapid delivery to vessels at anchorage or alongside quays in Lagos, Onne and Warri',
        'Consolidated ordering, itemized commercial pricing, and documented receipts',
      ],
    },
    {
      no: '3',
      title: 'Marine Equipment Sales and Supply',
      core: 'Equipment and certified spares for vessels and marine operations',
      bullets: [
        'Supply of certified lifesaving appliances (SOLAS), mooring ropes, valves, pumps and hardware',
        'Sourcing to client specifications from vetted local and international manufacturers',
        'Consolidated delivery coordination directly to port jetty or vessel deck',
      ],
    },
    {
      no: '4',
      title: 'Bunker Supply and Fresh Water',
      core: 'Marine fuel and certified potable water supply',
      bullets: [
        'ISO 8217 compliant Marine Gas Oil (MGO) and VLSFO delivered via dedicated barge',
        'Fresh potable water for vessel operational, cooling and crew consumption',
        'Precise delivery scheduling, sealed MARPOL sampling, and quantity documentation',
      ],
    },
    {
      no: '5',
      title: 'Underwater Services',
      core: 'Inspection and support work below the waterline',
      bullets: [
        'Class In-Water Surveys (IWS / UWILD) with CCTV video recording and reporting',
        'Hydraulic rotary brush hull cleaning, sea chest de-fouling, and propeller polishing',
        'Underwater oxy-arc cutting, minor underwater repair, and subsea maintenance support',
      ],
    },
    {
      no: '6',
      title: 'Tug Boats and Barges Hire',
      core: 'Towage and cargo-carrying vessels on commercial charter',
      bullets: [
        'Harbor and ocean tugs for towage, berthing assistance, rig moves, and positioning',
        'Flat-top deck cargo and ramp barges for heavy equipment, pipes, aggregate, and scrap transport',
        'Flexible charter agreements on spot-hire, short-term, or project contract basis',
      ],
    },
    {
      no: '7',
      title: 'Service Boats Hire and Logistics',
      core: 'Crew, personnel and materials transfer across coastal waters',
      bullets: [
        'High-speed craft for crew rotation, superintendent transfer, and security liaison',
        'Waterborne logistics supporting coastal oil terminals, anchorages, and rigs',
        'Flexible hire periods to match project schedules with verified vessel maintenance',
      ],
    },
  ];

  services.forEach((svc) => {
    page3.drawRectangle({
      x: marginX,
      y: curY - 58,
      width: contentWidth,
      height: 58,
      color: lightBg,
      borderColor: cardBorder,
      borderWidth: 0.8,
    });
    // Left number tag
    page3.drawRectangle({
      x: marginX,
      y: curY - 58,
      width: 22,
      height: 58,
      color: navy,
    });
    page3.drawText(svc.no, {
      x: marginX + 7,
      y: curY - 34,
      size: 11,
      font: fontBold,
      color: gold,
    });

    // Title & Core offer
    page3.drawText(svc.title, {
      x: marginX + 30,
      y: curY - 14,
      size: 9.5,
      font: fontBold,
      color: navy,
    });
    page3.drawText('Core Offer: ' + svc.core, {
      x: marginX + 210,
      y: curY - 14,
      size: 7.5,
      font: fontOblique,
      color: teal,
    });

    // Bullets
    let bY = curY - 26;
    for (const b of svc.bullets) {
      page3.drawText('• ' + b, {
        x: marginX + 30,
        y: bY,
        size: 7.2,
        font: fontRegular,
        color: textDark,
      });
      bY -= 10;
    }

    curY -= 64;
  });

  curY -= 6;

  // "One Coordinated Package" Banner Box
  page3.drawRectangle({
    x: marginX,
    y: 38,
    width: contentWidth,
    height: curY - 38,
    color: darkNavy,
  });
  page3.drawRectangle({
    x: marginX,
    y: curY - 2,
    width: contentWidth,
    height: 2,
    color: gold,
  });

  page3.drawText('ONE COORDINATED PACKAGE: THE FULL VESSEL SUPPORT CHAIN', {
    x: marginX + 16,
    y: curY - 18,
    size: 10,
    font: fontBold,
    color: gold,
  });

  page3.drawText('Clients deal with one company for the full vessel support chain. Whether an incoming tanker requires STCW crew facilitation, fresh chandling provisions, bunkering, hull cleaning, and tugboat escort, our operations desk coordinates every element simultaneously.', {
    x: marginX + 16,
    y: curY - 32,
    size: 7.5,
    font: fontRegular,
    color: white,
  });

  page3.drawText('Benefits for Fleet Managers & Charterers:', {
    x: marginX + 16,
    y: curY - 46,
    size: 8,
    font: fontBold,
    color: white,
  });

  page3.drawText('1. Single Point of Contact (reduces vendor liaison time by up to 60%)', {
    x: marginX + 24,
    y: curY - 58,
    size: 7.5,
    font: fontRegular,
    color: rgb(0.9, 0.92, 0.95),
  });
  page3.drawText('2. Synchronized Deliveries (eliminates multiple port delays and demurrage costs)', {
    x: marginX + 24,
    y: curY - 70,
    size: 7.5,
    font: fontRegular,
    color: rgb(0.9, 0.92, 0.95),
  });
  page3.drawText('3. Transparent Itemized Proposals (clear accountability from arrival notice to final departure invoice)', {
    x: marginX + 24,
    y: curY - 82,
    size: 7.5,
    font: fontRegular,
    color: rgb(0.9, 0.92, 0.95),
  });

  drawHeaderFooter(page3, 3, 5);

  // ==========================================
  // PAGE 4: FLEET, EQUIPMENT & CERTIFIED VESSELS
  // ==========================================
  const page4 = pdfDoc.addPage([pageWidth, pageHeight]);

  curY = pageHeight - 55;

  page4.drawText('FLEET, EQUIPMENT & CERTIFIED VESSEL OPERATIONS', {
    x: marginX,
    y: curY,
    size: 14,
    font: fontBold,
    color: navy,
  });
  page4.drawRectangle({
    x: marginX,
    y: curY - 4,
    width: 60,
    height: 2,
    color: gold,
  });
  curY -= 26;

  // Overview paragraph
  page4.drawText('The vessels and equipment supporting Asanti Shores Limited hire and supply operations include fit-for-purpose maritime assets deployed across commercial ports and oil/gas fields in Nigeria.', {
    x: marginX,
    y: curY,
    size: 8,
    font: fontRegular,
    color: textDark,
  });
  curY -= 18;

  // Primary Fleet Assets Box
  page4.drawRectangle({
    x: marginX,
    y: curY - 76,
    width: contentWidth,
    height: 76,
    color: lightBg,
    borderColor: cardBorder,
    borderWidth: 1,
  });
  page4.drawText('PRIMARY FLEET & MARINE EQUIPMENT DIRECTORY', {
    x: marginX + 12,
    y: curY - 14,
    size: 9,
    font: fontBold,
    color: navy,
  });

  const fleetListCol1 = [
    '1. Tug Boats (Harbor & Ocean Towage, up to 4,000+ BHP)',
    '2. Deck Cargo & Ramp Barges (1,000 to 5,000 DWT capacities)',
    '3. Service & Fast Crew Transfer Boats (CTV, 12 - 40 pax)',
  ];
  const fleetListCol2 = [
    '4. Bunker & Fresh Water Delivery Barges with certified meters',
    '5. Commercial Diving Spreads & Underwater CCTV Inspection Panels',
    '6. Auxiliary Machinery: Heavy-duty pulling winches & power generators',
  ];

  let fY = curY - 30;
  fleetListCol1.forEach((f) => {
    page4.drawText('• ' + f, { x: marginX + 12, y: fY, size: 7.5, font: fontRegular, color: textDark });
    fY -= 13;
  });
  fY = curY - 30;
  fleetListCol2.forEach((f) => {
    page4.drawText('• ' + f, { x: marginX + 265, y: fY, size: 7.5, font: fontRegular, color: textDark });
    fY -= 13;
  });

  curY -= 88;

  // Highlight Box: MV JAS & GOLD (Vessel WAR-6353-QZ) - NIWA Certified!
  page4.drawRectangle({
    x: marginX,
    y: curY - 110,
    width: contentWidth,
    height: 110,
    color: darkNavy,
  });
  page4.drawRectangle({
    x: marginX,
    y: curY + 1,
    width: contentWidth,
    height: 3,
    color: gold,
  });

  page4.drawText('CERTIFIED VESSEL PROFILE: MV JAS & GOLD (WAR-6353-QZ)', {
    x: marginX + 16,
    y: curY - 18,
    size: 11,
    font: fontBold,
    color: gold,
  });

  page4.drawText('Asanti Shores Limited holds the National Inland Waterways Authority (NIWA) Operational Certificate and Operator’s Permit for MV JAS & GOLD, confirming full statutory compliance for waterborne logistics and maritime support operations.', {
    x: marginX + 16,
    y: curY - 34,
    size: 8,
    font: fontRegular,
    color: white,
  });

  // Certificate details in 2 columns
  page4.drawRectangle({
    x: marginX + 16,
    y: curY - 96,
    width: 235,
    height: 52,
    color: rgb(0.06, 0.16, 0.26),
    borderColor: rgb(0.15, 0.3, 0.45),
    borderWidth: 1,
  });
  page4.drawText('NIWA OPERATIONAL CERTIFICATE', {
    x: marginX + 24,
    y: curY - 56,
    size: 7.5,
    font: fontBold,
    color: gold,
  });
  page4.drawText('Certificate No: 20250800002846', {
    x: marginX + 24,
    y: curY - 68,
    size: 7.5,
    font: fontRegular,
    color: white,
  });
  page4.drawText('Vessel Number: WAR-6353-QZ', {
    x: marginX + 24,
    y: curY - 78,
    size: 7.5,
    font: fontRegular,
    color: white,
  });
  page4.drawText('Issued: 04 November 2026 by NIWA', {
    x: marginX + 24,
    y: curY - 88,
    size: 7,
    font: fontRegular,
    color: rgb(0.7, 0.8, 0.9),
  });

  page4.drawRectangle({
    x: marginX + 265,
    y: curY - 96,
    width: 235,
    height: 52,
    color: rgb(0.06, 0.16, 0.26),
    borderColor: rgb(0.15, 0.3, 0.45),
    borderWidth: 1,
  });
  page4.drawText('NIWA OPERATOR’S PERMIT', {
    x: marginX + 273,
    y: curY - 56,
    size: 7.5,
    font: fontBold,
    color: gold,
  });
  page4.drawText('Issuing Body: National Inland Waterways Authority', {
    x: marginX + 273,
    y: curY - 68,
    size: 7.5,
    font: fontRegular,
    color: white,
  });
  page4.drawText('Validity Period: November 2026 – November 2027', {
    x: marginX + 273,
    y: curY - 78,
    size: 7.5,
    font: fontBold,
    color: emerald,
  });
  page4.drawText('Authorized Operating Waters: Inland Waterways of Nigeria', {
    x: marginX + 273,
    y: curY - 88,
    size: 7,
    font: fontRegular,
    color: rgb(0.7, 0.8, 0.9),
  });

  curY -= 124;

  // Tug Boats and Barges Charter Details
  page4.drawText('TUG BOATS AND CARGO BARGES CHARTER OPERATIONS', {
    x: marginX,
    y: curY,
    size: 10,
    font: fontBold,
    color: navy,
  });
  curY -= 14;

  const bargeParagraphs = [
    'Our tug and barge services support harbor towage, berthing assistance, positioning, rig moves, and the safe movement of heavy machinery, pipes, scrap metals, and bulk cargo on water corridors across Lagos, Onne, Port Harcourt, and Delta waterways.',
    'A deck cargo and ramp barge is available for charter. Documented photographic records show the barge hauled up for dry-dock maintenance, moored alongside quays, and demonstrating bow ramp deployment at jetties for direct RoRo equipment loading.',
  ];
  for (const bp of bargeParagraphs) {
    const lines = splitText(bp, contentWidth, fontRegular, 8);
    for (const l of lines) {
      page4.drawText(l, { x: marginX, y: curY, size: 8, font: fontRegular, color: textDark });
      curY -= 11;
    }
    curY -= 4;
  }

  // Vessel note
  page4.drawRectangle({
    x: marginX,
    y: curY - 24,
    width: contentWidth,
    height: 24,
    color: lightBg,
    borderColor: cardBorder,
    borderWidth: 0.5,
  });
  page4.drawText('Vessel Photograph Note: Vessel names are as painted on hulls. Photographs illustrate the types of tug and barge available in the hire service line; chartered vessels conform to class inspections and statutory permits.', {
    x: marginX + 8,
    y: curY - 16,
    size: 6.8,
    font: fontOblique,
    color: textMuted,
  });
  curY -= 36;

  // Two Photos: Tugboat and Cargo Barge
  const imgW = (contentWidth - 12) / 2;
  page4.drawImage(proj3, {
    x: marginX,
    y: 38,
    width: imgW,
    height: curY - 38,
  });
  page4.drawRectangle({
    x: marginX,
    y: 38,
    width: imgW,
    height: curY - 38,
    borderColor: cardBorder,
    borderWidth: 1,
  });
  page4.drawRectangle({
    x: marginX,
    y: 38,
    width: imgW,
    height: 18,
    color: darkNavy,
  });
  page4.drawText('Harbor Towage & Berthing Support Tugboat', {
    x: marginX + 8,
    y: 44,
    size: 7,
    font: fontBold,
    color: white,
  });

  page4.drawImage(proj11, {
    x: marginX + imgW + 12,
    y: 38,
    width: imgW,
    height: curY - 38,
  });
  page4.drawRectangle({
    x: marginX + imgW + 12,
    y: 38,
    width: imgW,
    height: curY - 38,
    borderColor: cardBorder,
    borderWidth: 1,
  });
  page4.drawRectangle({
    x: marginX + imgW + 12,
    y: 38,
    width: imgW,
    height: 18,
    color: darkNavy,
  });
  page4.drawText('Deck Cargo Barge Transporting Materials', {
    x: marginX + imgW + 20,
    y: 44,
    size: 7,
    font: fontBold,
    color: white,
  });

  drawHeaderFooter(page4, 4, 5);

  // ==========================================
  // PAGE 5: CREDENTIALS, COMPLIANCE & CONTACTS
  // ==========================================
  const page5 = pdfDoc.addPage([pageWidth, pageHeight]);

  curY = pageHeight - 55;

  page5.drawText('STATUTORY CREDENTIALS, COMPLIANCE & COMMERCIAL CONTACT', {
    x: marginX,
    y: curY,
    size: 13,
    font: fontBold,
    color: navy,
  });
  page5.drawRectangle({
    x: marginX,
    y: curY - 4,
    width: 60,
    height: 2,
    color: gold,
  });
  curY -= 24;

  page5.drawText('Asanti Shores Limited maintains verified corporate registrations, operational permits, and statutory anti-money laundering certifications:', {
    x: marginX,
    y: curY,
    size: 8,
    font: fontRegular,
    color: textDark,
  });
  curY -= 16;

  // Complete Credentials & Compliance Table
  const tableData = [
    { no: '1', doc: 'CAC Certificate of Incorporation', body: 'Corporate Affairs Commission (CAC)', ref: 'RC 2018901; Inc. 12 Jan 2023; TIN: 31273907-0001' },
    { no: '2', doc: 'CAC Status Report', body: 'Corporate Affairs Commission (CAC)', ref: 'Generated 13 Jan 2023; Status: ACTIVE' },
    { no: '3', doc: 'Memorandum & Articles of Association (MEMART)', body: 'Corporate Affairs Commission (CAC)', ref: 'RC 2018901; Certified True Extract, 13 Jan 2023' },
    { no: '4', doc: 'SCUML Certificate of Registration', body: 'EFCC / Special Control Unit against Money Laundering', ref: 'RN: SC 251825806; Issued 27 June 2023' },
    { no: '5', doc: 'NIWA Operational Certificate (MV JAS & GOLD)', body: 'National Inland Waterways Authority', ref: 'Certificate No: 20250800002846; Vessel: WAR-6353-QZ' },
    { no: '6', doc: 'NIWA Operator’s Permit (MV JAS & GOLD)', body: 'National Inland Waterways Authority', ref: 'Vessel WAR-6353-QZ; Valid Nov 2026 – Nov 2027' },
    { no: '7', doc: 'Membership Certificate', body: 'Nigeria Association of Auctioneers', ref: 'Cert No: 003697; Valid 28 Oct 2026 – 31 Oct 2027' },
  ];

  // Table header
  page5.drawRectangle({
    x: marginX,
    y: curY - 20,
    width: contentWidth,
    height: 20,
    color: darkNavy,
  });
  page5.drawText('No.', { x: marginX + 6, y: curY - 14, size: 7.5, font: fontBold, color: gold });
  page5.drawText('Document Name', { x: marginX + 28, y: curY - 14, size: 7.5, font: fontBold, color: white });
  page5.drawText('Issuing Regulatory Body', { x: marginX + 195, y: curY - 14, size: 7.5, font: fontBold, color: white });
  page5.drawText('Reference / Official Validity', { x: marginX + 345, y: curY - 14, size: 7.5, font: fontBold, color: white });
  curY -= 20;

  tableData.forEach((row, i) => {
    const rowH = 19;
    page5.drawRectangle({
      x: marginX,
      y: curY - rowH,
      width: contentWidth,
      height: rowH,
      color: i % 2 === 0 ? lightBg : white,
      borderColor: cardBorder,
      borderWidth: 0.5,
    });
    page5.drawText(row.no, { x: marginX + 8, y: curY - 13, size: 7, font: fontBold, color: navy });
    page5.drawText(row.doc, { x: marginX + 28, y: curY - 13, size: 7, font: fontBold, color: textDark });
    page5.drawText(row.body, { x: marginX + 195, y: curY - 13, size: 6.8, font: fontRegular, color: textDark });
    page5.drawText(row.ref, { x: marginX + 345, y: curY - 13, size: 6.8, font: fontRegular, color: navy });
    curY -= rowH;
  });

  curY -= 12;

  // SCUML Statutory Highlight Box
  page5.drawRectangle({
    x: marginX,
    y: curY - 48,
    width: contentWidth,
    height: 48,
    color: lightBg,
    borderColor: navy,
    borderWidth: 1,
  });
  page5.drawText('SPECIAL CONTROL UNIT AGAINST MONEY LAUNDERING (SCUML) REGISTRATION', {
    x: marginX + 12,
    y: curY - 14,
    size: 8,
    font: fontBold,
    color: navy,
  });
  page5.drawText('Asanti Shores Limited is duly registered with the Special Control Unit against Money Laundering (SCUML) under the Economic and Financial Crimes Commission (EFCC) in accordance with Section 17(2)(a) of the Money Laundering (Prevention and Prohibition) Act, 2022.', {
    x: marginX + 12,
    y: curY - 26,
    size: 7,
    font: fontRegular,
    color: textDark,
  });
  page5.drawText('Registration Number: SC 251825806  |  Issuing Body: EFCC SCUML  |  Date of Issuance: 27 June 2023  |  Status: Fully Compliant', {
    x: marginX + 12,
    y: curY - 38,
    size: 7,
    font: fontBold,
    color: teal,
  });

  curY -= 60;

  // Photo of Project 10 (On-site Marine Operations)
  page5.drawImage(proj10, {
    x: marginX,
    y: curY - 95,
    width: 170,
    height: 95,
  });
  page5.drawRectangle({
    x: marginX,
    y: curY - 95,
    width: 170,
    height: 95,
    borderColor: cardBorder,
    borderWidth: 1,
  });

  // Commercial Coordination Box (Next to photo)
  const coordBoxX = marginX + 180;
  const coordBoxW = contentWidth - 180;
  page5.drawRectangle({
    x: coordBoxX,
    y: curY - 95,
    width: coordBoxW,
    height: 95,
    color: lightBg,
    borderColor: cardBorder,
    borderWidth: 1,
  });
  page5.drawText('24/7 COORDINATION & CLIENT LIAISON', {
    x: coordBoxX + 12,
    y: curY - 16,
    size: 8.5,
    font: fontBold,
    color: navy,
  });
  page5.drawText('• Quick Answers: Rapid technical proposal dispatch within 2-4 hours.', {
    x: coordBoxX + 12,
    y: curY - 30,
    size: 7.2,
    font: fontRegular,
    color: textDark,
  });
  page5.drawText('• One Point of Contact: Single-window operations desk for port agents & masters.', {
    x: coordBoxX + 12,
    y: curY - 42,
    size: 7.2,
    font: fontRegular,
    color: textDark,
  });
  page5.drawText('• Clear Status Reporting: Daily position, fuel telemetry, and milestone tracking.', {
    x: coordBoxX + 12,
    y: curY - 54,
    size: 7.2,
    font: fontRegular,
    color: textDark,
  });
  page5.drawText('• Direct Jetty Mobilization: Bases at Defense Jetty, Marina & Kirikiri Town.', {
    x: coordBoxX + 12,
    y: curY - 66,
    size: 7.2,
    font: fontRegular,
    color: textDark,
  });
  page5.drawText('“From first enquiry to final departure clearance invoice.”', {
    x: coordBoxX + 12,
    y: curY - 82,
    size: 7.5,
    font: fontOblique,
    color: gold,
  });

  curY -= 108;

  // Bottom Commercial Callout Box: Work With Asanti Shores Limited
  page5.drawRectangle({
    x: marginX,
    y: 38,
    width: contentWidth,
    height: curY - 38,
    color: darkNavy,
  });
  page5.drawRectangle({
    x: marginX,
    y: curY - 2,
    width: contentWidth,
    height: 2,
    color: gold,
  });

  page5.drawText('WORK WITH ASANTI SHORES LIMITED', {
    x: marginX + 16,
    y: curY - 20,
    size: 11,
    font: fontBold,
    color: gold,
  });

  page5.drawText('We welcome the opportunity to support your vessels, seafaring crews and offshore marine operations across Nigerian territorial waters.', {
    x: marginX + 16,
    y: curY - 34,
    size: 7.5,
    font: fontRegular,
    color: white,
  });

  const contactLeft = [
    'Corporate Headquarters:',
    'Shop 04, Prowa International Shopping Complex,',
    'Opp. Kirikiri Police Station, Kirikiri Town, Lagos, Nigeria',
    'Marine Field Base: Defense Jetty, Marina, Lagos',
  ];
  const contactRight = [
    '24/7 Hotline: +234 916 259 9586',
    'Alternative Lines: 0817 684 0868  /  0814 646 3163',
    'Email: asantishores@gmail.com',
    'Website: www.asantishores.com',
  ];

  let cY2 = curY - 50;
  contactLeft.forEach((cl) => {
    page5.drawText(cl, { x: marginX + 16, y: cY2, size: 7, font: fontRegular, color: rgb(0.85, 0.9, 0.95) });
    cY2 -= 10;
  });

  cY2 = curY - 50;
  contactRight.forEach((cr) => {
    page5.drawText(cr, { x: marginX + 270, y: cY2, size: 7, font: fontBold, color: white });
    cY2 -= 10;
  });

  drawHeaderFooter(page5, 5, 5);

  // Helper text wrap function
  function splitText(text, maxWidth, font, size) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const width = font.widthOfTextAtSize(testLine, size);
      if (width <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(process.cwd(), 'public', 'downloads', 'asanti-shores-company-profile.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`PDF successfully generated and saved to: ${outputPath} (${pdfBytes.length} bytes)`);
}

generateCompanyProfilePDF().catch(console.error);
