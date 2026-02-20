// Correct asset mapping based on actual SVG content inspection
const base = import.meta.env.BASE_URL;

// === ICONS ===
// Shopify bag / install icon (15.9x18 viewBox)
export const imgInstallIcon = `${base}assets/0240ad95dbfcd24a46dd0da75aad8214c96592ae.svg`;
// Small triangle indicator pointing up, coral (#F85C48)
export const imgTriangle = `${base}assets/162cd5ed6bb7f1fd08a61a975f67d8c6f5aabc8b.svg`;
// Dropdown chevron ↓ stroke (path id "Vector 113")
export const imgChevronDown = `${base}assets/4925d57f495d63ba8e07e26bac9f08bf867902d2.svg`;
// Chevron ↑ stroke
export const imgChevronUp = `${base}assets/5d7f955460fb991245e0823607566ae786c5832b.svg`;
// Calendar / map-fold icon (streamline:map-fold)
export const imgCalendar = `${base}assets/44687cc160d7fafaecc15b03e45e3ddfdaaa9a57.svg`;
// Standalone delivery truck (carbon:delivery-truck)
export const imgTruck = `${base}assets/a2fe13c8d1d0e4718b293976362a5f92f997796b.svg`;
// Fast delivery: truck + lightning bolt in rounded box (Frame 23)
export const imgFastDelivery = `${base}assets/95dfcfdfa720b718937a6b94d430bfe70b91d133.svg`;
// Orange concentric circles / bullseye (#FF6753)
export const imgBullseye = `${base}assets/849e8ed11ae490db96af7e03903929f091ee8ef6.svg`;
// Unselected radio circle (#FFE6E2 stroke, #FFC9C1 fill)
export const imgRadioCircle = `${base}assets/bfa66ca19a15ef848f4f6baed5bfff6d254325b5.svg`;

// === CONNECTOR LINES (curves between cards in hero) ===
// Right connector curves (Group 1000011137, 111x198)
export const imgConnectorRight = `${base}assets/b59da0545a10965177521f8584497621859d3742.svg`;
// Left connector curves (Group 1000011138, 111x198)
export const imgConnectorLeft = `${base}assets/cdc83f906e1fc60659a70cbadb925415ca1c2ba1.svg`;

// === BACKGROUNDS ===
// Large background with concentric circles + gradient blurs (2245x1186)
export const imgBgCircles = `${base}assets/249459e654d753e2202c64bae1540661276a59f6.svg`;
// Blurred glow ellipse (#FFBC78, 1249x1043)
export const imgBgGlow = `${base}assets/ee85534ab50710cbb4d2ec06feca25f97d607504.svg`;

// === CALENDAR ICON VARIANTS ===
export const imgCalendarAlt1 = `${base}assets/24781363bc3626c967abce71a447f1956ae68bcf.svg`;
export const imgCalendarAlt2 = `${base}assets/85777fe9d3d2a4c352d1f862daad66ca0f687f6e.svg`;
export const imgCalendarAlt3 = `${base}assets/a02eee898541345d94f3c294537521d5b7f98278.svg`;
export const imgCalendarAlt4 = `${base}assets/c4e63d5a1b2c18e77df35309cc38a0557d38b9e8.svg`;

// === DECORATIVE ===
export const imgDecoPill = `${base}assets/bc13ee4f44ab46ec409e57a0abe79e85c855cf33.svg`;

// === BACKWARD-COMPATIBLE ALIASES ===
export const imgGroup3 = imgInstallIcon;
export const imgFrame = imgTriangle;
export const imgVector113 = imgChevronDown;
export const imgVector = imgBgCircles;
export const imgGroup1000011133 = imgBgCircles;
export const imgGroup1000011137 = imgConnectorRight;
export const imgGroup1000011138 = imgConnectorLeft;
export const imgVector1 = imgBullseye;
export const imgVector2 = imgCalendarAlt2;
export const imgVector3 = imgFastDelivery;
export const imgStreamlineMapFold = imgCalendar;
export const imgVector4 = imgTruck;
export const imgCarbonDeliveryTruck = imgTruck;
export const imgVector5 = imgDecoPill;
export const imgFrame23 = imgFastDelivery;
export const imgFrame2147226045 = imgRadioCircle;
export const imgVector6 = imgConnectorLeft;
export const imgVector7 = imgBgGlow;
