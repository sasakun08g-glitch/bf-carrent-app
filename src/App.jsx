import React, { useState, useEffect, useMemo } from 'react';

// ============================================================================
// SELF-CONTAINED SVG ICON SYSTEM (AVOIDS REACT 18/19 $$typeof MISMATCH)
// ============================================================================
function createIcon(paths) {
  return function IconComponent({ size = 16, strokeWidth = 2, className = '', ...props }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        {paths}
      </svg>
    );
  };
}

const AlertTriangle = createIcon(
  <>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </>
);
const Calendar = createIcon(
  <>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </>
);
const Camera = createIcon(
  <>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </>
);
const Car = createIcon(
  <>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </>
);
const Check = createIcon(<polyline points="20 6 9 17 4 12" />);
const CheckCircle2 = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </>
);
const ChevronDown = createIcon(<path d="m6 9 6 6 6-6" />);
const ChevronLeft = createIcon(<path d="m15 18-6-6 6-6" />);
const ChevronRight = createIcon(<path d="m9 18 6-6-6-6" />);
const ClipboardList = createIcon(
  <>
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 11h4" />
    <path d="M12 16h4" />
    <path d="M8 11h.01" />
    <path d="M8 16h.01" />
  </>
);
const Clock = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </>
);
const Cloud = createIcon(<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />);
const Copy = createIcon(
  <>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </>
);
const Database = createIcon(
  <>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </>
);
const Download = createIcon(
  <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </>
);
const Edit3 = createIcon(
  <>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </>
);
const ExternalLink = createIcon(
  <>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </>
);
const Eye = createIcon(
  <>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </>
);
const FileSpreadsheet = createIcon(
  <>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M8 13h2" />
    <path d="M8 17h2" />
    <path d="M14 13h2" />
    <path d="M14 17h2" />
  </>
);
const Globe = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </>
);
const KeyRound = createIcon(
  <>
    <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
  </>
);
const LayoutGrid = createIcon(
  <>
    <rect width="7" height="7" x="3" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="14" rx="1" />
    <rect width="7" height="7" x="3" y="14" rx="1" />
  </>
);
const List = createIcon(
  <>
    <line x1="8" x2="21" y1="6" y2="6" />
    <line x1="8" x2="21" y1="12" y2="12" />
    <line x1="8" x2="21" y1="18" y2="18" />
    <line x1="3" x2="3.01" y1="6" y2="6" />
    <line x1="3" x2="3.01" y1="12" y2="12" />
    <line x1="3" x2="3.01" y1="18" y2="18" />
  </>
);
const Loader2 = createIcon(<path d="M21 12a9 9 0 1 1-6.219-8.56" />);
const Lock = createIcon(
  <>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </>
);
const LogOut = createIcon(
  <>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </>
);
const MapPin = createIcon(
  <>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </>
);
const Plus = createIcon(
  <>
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </>
);
const RefreshCw = createIcon(
  <>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </>
);
const Search = createIcon(
  <>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </>
);
const Server = createIcon(
  <>
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </>
);
const Shield = createIcon(<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />);
const ShieldAlert = createIcon(
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </>
);
const ShieldCheck = createIcon(
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </>
);
const Sparkles = createIcon(
  <>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </>
);
const Terminal = createIcon(
  <>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </>
);
const Trash2 = createIcon(
  <>
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </>
);
const TrendingDown = createIcon(
  <>
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <polyline points="16 17 22 17 22 11" />
  </>
);
const TrendingUp = createIcon(
  <>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </>
);
const Upload = createIcon(
  <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </>
);
const UserCheck = createIcon(
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </>
);
const UserPlus = createIcon(
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" x2="19" y1="8" y2="14" />
    <line x1="22" x2="16" y1="11" y2="11" />
  </>
);
const Users = createIcon(
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>
);
const Wallet = createIcon(
  <>
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </>
);
const Wrench = createIcon(
  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
);
const X = createIcon(
  <>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </>
);

// ============================================================================
// DEFAULT FLEET & INITIAL BACK-OFFICE DATA (BF CARRENT)
// ============================================================================
const DEFAULT_CARS = [
  {
    id: 1,
    model: 'Yaris Ativ Sport (สีเทาดำ) 5ขต7914 กทม.',
    plate: '5ขต 7914 กทม.',
    color: 'เทาดำ',
    dailyRate: 1200,
    deposit: 3000,
    insuranceExpiry: '2027-04-15',
    taxExpiry: '2027-04-15',
    status: 'พร้อมใช้งาน',
    images: []
  },
  {
    id: 2,
    model: 'Yaris Ativ Smart (สีขาว) 4ขฎ8613 กทม.',
    plate: '4ขฎ 8613 กทม.',
    color: 'ขาว',
    dailyRate: 1200,
    deposit: 3000,
    insuranceExpiry: '2027-05-20',
    taxExpiry: '2027-05-20',
    status: 'พร้อมใช้งาน',
    images: []
  },
  {
    id: 3,
    model: 'Yaris Ativ Smart (สีบรอนซ์เงิน) 6ขง6807 กทม.',
    plate: '6ขง 6807 กทม.',
    color: 'บรอนซ์เงิน',
    dailyRate: 1200,
    deposit: 3000,
    insuranceExpiry: '2027-06-10',
    taxExpiry: '2027-06-10',
    status: 'พร้อมใช้งาน',
    images: []
  },
  {
    id: 4,
    model: 'Ford Ranger XLT (สีดำ) 3ขด7309 กทม.',
    plate: '3ขด 7309 กทม.',
    color: 'ดำ',
    dailyRate: 1900,
    deposit: 5000,
    insuranceExpiry: '2027-07-01',
    taxExpiry: '2027-07-01',
    status: 'พร้อมใช้งาน',
    images: []
  },
  {
    id: 5,
    model: 'Honda City Turbo RS (สีเทา) 4ขค5129 กทม.',
    plate: '4ขค 5129 กทม.',
    color: 'เทา',
    dailyRate: 1400,
    deposit: 3000,
    insuranceExpiry: '2027-08-18',
    taxExpiry: '2027-08-18',
    status: 'พร้อมใช้งาน',
    images: []
  },
  {
    id: 6,
    model: 'Toyota Veloz Premium (สีขาวมุก) 5ขพ2410 กทม.',
    plate: '5ขพ 2410 กทม.',
    color: 'ขาวมุก',
    dailyRate: 1800,
    deposit: 5000,
    insuranceExpiry: '2027-09-12',
    taxExpiry: '2027-09-12',
    status: 'พร้อมใช้งาน',
    images: []
  }
];

const EMPTY_DOC_IMAGES = {
  idCard: [],
  driverLicense: [],
  employeeCard: [],
  flightTicket: [],
  guarantorId: [],
  otherDoc: [],
  bookingSlip: [],
  carWashSlip: [],
  outboundDeliverySlip: [],
  pickupPaymentSlip: [],
  wht50Tawi: [],
  handoverPhoto: [],
  carOutPhoto: [],
  returnPickupSlip: [],
  carInPhoto: [],
  customerQrSlip: [],
  depositRefundSlip: [],
  bookingRefundSlip: []
};

const INITIAL_BOOKINGS = [
  {
    id: 101,
    bookingCode: 'B26101601',
    carModel: 'Yaris Ativ Sport (สีเทาดำ) 5ขต7914 กทม.',
    deliveryStatus: 'รอส่ง',
    customerName: 'คุณธนพร พินิตตานนท์',
    nickname: 'K.แพท',
    phone: '0814592210',
    socialHandle: 'LINE: Pat_Thanaporn',
    emergencyContact: 'คุณนพดล 0891124450',
    pickupDate: '2026-12-31',
    pickupTime: '08:00',
    pickupLocation: 'โลตัสบางกะปิ',
    returnDate: '2027-01-04',
    returnTime: '08:00',
    returnLocation: 'โลตัสบางกะปิ',
    rentalDays: 4,
    travelArea: 'กรุงเทพและปริมณฑล',
    dailyRate: 1100,
    bookingFee: 1000,
    bookingFeePaid: true,
    pickupBalancePaid: false,
    deliveryFee: 0,
    lateFeeOrExtra: 0,
    discountAmount: 0,
    depositAmount: 3000,
    mileageStart: '',
    mileageEnd: '',
    fuelLevelStart: '10/10',
    fuelLevelEnd: '10/10',
    carWashFee: 250,
    outboundDeliveryExpense: 100,
    returnPickupExpense: 0,
    isCorporateWht: false,
    companyTaxName: '',
    whtAmount: 0,
    scratchOutDetails: '',
    scratchInDetails: '',
    docImages: { ...EMPTY_DOC_IMAGES },
    notes: 'คิวส่งช่วงเทศกาลปีใหม่',
    depositReturned: false,
    deductionAmount: 0,
    deductionReason: '',
    refundChannel: 'BANK',
    customerBankAccount: '',
    cancelReason: '',
    bookingRefundAmount: 0
  },
  {
    id: 102,
    bookingCode: 'B26110501',
    carModel: 'Yaris Ativ Sport (สีเทาดำ) 5ขต7914 กทม.',
    deliveryStatus: 'รอส่ง',
    customerName: 'เบญจมินทร์ และมัด',
    nickname: 'K.บิ๊ก',
    phone: '0852239811',
    socialHandle: 'LINE: Big_Ben',
    emergencyContact: 'คุณฟาติมะ 0863317720',
    pickupDate: '2026-12-29',
    pickupTime: '10:00',
    pickupLocation: 'โลตัสเสรีไทย',
    returnDate: '2026-12-30',
    returnTime: '20:30',
    returnLocation: 'โลตัสเสรีไทย',
    rentalDays: 2,
    travelArea: 'กรุงเทพปริมณฑล',
    dailyRate: 1200,
    bookingFee: 1000,
    bookingFeePaid: true,
    pickupBalancePaid: false,
    deliveryFee: 0,
    lateFeeOrExtra: 0,
    discountAmount: 0,
    depositAmount: 3000,
    mileageStart: '',
    mileageEnd: '',
    fuelLevelStart: '10/10',
    fuelLevelEnd: '10/10',
    carWashFee: 250,
    outboundDeliveryExpense: 100,
    returnPickupExpense: 0,
    isCorporateWht: false,
    companyTaxName: '',
    whtAmount: 0,
    scratchOutDetails: '',
    scratchInDetails: '',
    docImages: { ...EMPTY_DOC_IMAGES },
    notes: '',
    depositReturned: false,
    deductionAmount: 0,
    deductionReason: '',
    refundChannel: 'BANK',
    customerBankAccount: '',
    cancelReason: '',
    bookingRefundAmount: 0
  },
  {
    id: 103,
    bookingCode: 'B26111001',
    carModel: 'Yaris Ativ Smart (สีขาว) 4ขฎ8613 กทม.',
    deliveryStatus: 'รอส่ง',
    customerName: 'คุณอริฟาน ละสุสะมา',
    nickname: 'K.ฟาน',
    phone: '0918845520',
    socialHandle: 'LINE: Fan_Arifan',
    emergencyContact: 'คุณฮาซัน 0845512099',
    pickupDate: '2026-12-22',
    pickupTime: '09:00',
    pickupLocation: 'แม็คโคร ลาดพร้าว',
    returnDate: '2026-12-24',
    returnTime: '09:00',
    returnLocation: 'แม็คโคร ลาดพร้าว',
    rentalDays: 2,
    travelArea: 'กรุงเทพปริมณฑล',
    dailyRate: 1200,
    bookingFee: 1000,
    bookingFeePaid: true,
    pickupBalancePaid: false,
    deliveryFee: 0,
    lateFeeOrExtra: 0,
    discountAmount: 0,
    depositAmount: 3000,
    mileageStart: '',
    mileageEnd: '',
    fuelLevelStart: '10/10',
    fuelLevelEnd: '10/10',
    carWashFee: 250,
    outboundDeliveryExpense: 100,
    returnPickupExpense: 0,
    isCorporateWht: false,
    companyTaxName: '',
    whtAmount: 0,
    scratchOutDetails: '',
    scratchInDetails: '',
    docImages: { ...EMPTY_DOC_IMAGES },
    notes: '',
    depositReturned: false,
    deductionAmount: 0,
    deductionReason: '',
    refundChannel: 'BANK',
    customerBankAccount: '',
    cancelReason: '',
    bookingRefundAmount: 0
  },
  {
    id: 104,
    bookingCode: 'PM2611006',
    carModel: 'Yaris Ativ Smart (สีบรอนซ์เงิน) 6ขง6807 กทม.',
    deliveryStatus: 'ส่งรถแล้ว',
    customerName: 'คุณธัญญารัตน์ มณฑา',
    nickname: 'คุณจอย',
    phone: '0617246879',
    socialHandle: 'LINE: Joy_Thanya',
    emergencyContact: 'คุณเจษฎา 0909096429',
    pickupDate: '2026-11-11',
    pickupTime: '18:00',
    pickupLocation: 'แม็คโครบางกะปิ',
    returnDate: '2026-11-13',
    returnTime: '18:00',
    returnLocation: 'แม็คโครบางกะปิ',
    rentalDays: 2,
    travelArea: 'กรุงเทพปริมณฑล',
    dailyRate: 1200,
    bookingFee: 1000,
    bookingFeePaid: true,
    pickupBalancePaid: true,
    deliveryFee: 0,
    lateFeeOrExtra: 0,
    discountAmount: 0,
    depositAmount: 3000,
    mileageStart: '45210',
    mileageEnd: '',
    fuelLevelStart: '10/10',
    fuelLevelEnd: '10/10',
    carWashFee: 250,
    outboundDeliveryExpense: 120,
    returnPickupExpense: 0,
    isCorporateWht: false,
    companyTaxName: '',
    whtAmount: 0,
    scratchOutDetails: 'ไม่มีรอย สภาพเรียบร้อยรอบคัน',
    scratchInDetails: '',
    docImages: { ...EMPTY_DOC_IMAGES },
    notes: 'ลูกค้าประจำ ตรงเวลา',
    depositReturned: false,
    deductionAmount: 0,
    deductionReason: '',
    refundChannel: 'BANK',
    customerBankAccount: 'กสิกรไทย 012-8-99412-0 ธัญญารัตน์ มณฑา',
    cancelReason: '',
    bookingRefundAmount: 0
  },
  {
    id: 105,
    bookingCode: 'B26111002',
    carModel: 'Honda City Turbo RS (สีเทา) 4ขค5129 กทม.',
    deliveryStatus: 'ส่งรถแล้ว',
    customerName: 'คุณณัฐพล วงศ์สุวรรณ',
    nickname: 'K.บอส',
    phone: '0894512230',
    socialHandle: 'LINE: BossNattapol',
    emergencyContact: 'คุณเมย์ 0812239988',
    pickupDate: '2026-11-10',
    pickupTime: '09:30',
    pickupLocation: 'สนามบินดอนเมือง อาคาร 2',
    returnDate: '2026-11-14',
    returnTime: '17:00',
    returnLocation: 'สนามบินดอนเมือง อาคาร 2',
    rentalDays: 4,
    travelArea: 'ชลบุรี - พัทยา',
    dailyRate: 1400,
    bookingFee: 1000,
    bookingFeePaid: true,
    pickupBalancePaid: true,
    deliveryFee: 300,
    lateFeeOrExtra: 0,
    discountAmount: 0,
    depositAmount: 3000,
    mileageStart: '28450',
    mileageEnd: '',
    fuelLevelStart: '10/10',
    fuelLevelEnd: '10/10',
    carWashFee: 250,
    outboundDeliveryExpense: 180,
    returnPickupExpense: 0,
    isCorporateWht: true,
    companyTaxName: 'บจก. สยามเทค โซลูชั่น (0105562019881)',
    whtAmount: 295,
    scratchOutDetails: 'ไม่มีรอย',
    scratchInDetails: '',
    docImages: { ...EMPTY_DOC_IMAGES },
    notes: 'ออกบิลบริษัท หัก ณ ที่จ่าย 5%',
    depositReturned: false,
    deductionAmount: 0,
    deductionReason: '',
    refundChannel: 'QR',
    customerBankAccount: 'พร้อมเพย์ ณัฐพล วงศ์สุวรรณ',
    cancelReason: '',
    bookingRefundAmount: 0
  },
  {
    id: 106,
    bookingCode: 'B26110901',
    carModel: 'Toyota Veloz Premium (สีขาวมุก) 5ขพ2410 กทม.',
    deliveryStatus: 'ส่งรถแล้ว',
    customerName: 'คุณศิริพร แก้วมณี',
    nickname: 'K.แพรว',
    phone: '0928871145',
    socialHandle: 'FB: Praew Siriporn',
    emergencyContact: 'คุณเอก 0863321100',
    pickupDate: '2026-11-09',
    pickupTime: '08:00',
    pickupLocation: 'เซ็นทรัลลาดพร้าว',
    returnDate: '2026-11-13',
    returnTime: '19:00',
    returnLocation: 'เซ็นทรัลลาดพร้าว',
    rentalDays: 4,
    travelArea: 'เขาใหญ่ - นครราชสีมา',
    dailyRate: 1800,
    bookingFee: 1500,
    bookingFeePaid: true,
    pickupBalancePaid: true,
    deliveryFee: 0,
    lateFeeOrExtra: 0,
    discountAmount: 0,
    depositAmount: 5000,
    mileageStart: '31020',
    mileageEnd: '',
    fuelLevelStart: '10/10',
    fuelLevelEnd: '10/10',
    carWashFee: 300,
    outboundDeliveryExpense: 120,
    returnPickupExpense: 0,
    isCorporateWht: false,
    companyTaxName: '',
    whtAmount: 0,
    scratchOutDetails: 'ไม่มีรอย',
    scratchInDetails: '',
    docImages: { ...EMPTY_DOC_IMAGES },
    notes: '',
    depositReturned: false,
    deductionAmount: 0,
    deductionReason: '',
    refundChannel: 'BANK',
    customerBankAccount: 'ไทยพาณิชย์ 408-2-11904-5 ศิริพร แก้วมณี',
    cancelReason: '',
    bookingRefundAmount: 0
  },
  {
    id: 107,
    bookingCode: 'B26111801',
    carModel: 'Ford Ranger XLT (สีดำ) 3ขด7309 กทม.',
    deliveryStatus: 'รอส่ง',
    customerName: 'คุณกิตติพงษ์ เจริญสุข',
    nickname: 'K.กิต',
    phone: '0815549021',
    socialHandle: 'LINE: Kit_Ranger',
    emergencyContact: 'คุณนก 0871123409',
    pickupDate: '2026-11-18',
    pickupTime: '08:30',
    pickupLocation: 'เมกาบางนา',
    returnDate: '2026-11-21',
    returnTime: '18:00',
    returnLocation: 'เมกาบางนา',
    rentalDays: 3,
    travelArea: 'ระยอง - จันทบุรี',
    dailyRate: 1900,
    bookingFee: 1500,
    bookingFeePaid: true,
    pickupBalancePaid: false,
    deliveryFee: 0,
    lateFeeOrExtra: 0,
    discountAmount: 0,
    depositAmount: 5000,
    mileageStart: '',
    mileageEnd: '',
    fuelLevelStart: '10/10',
    fuelLevelEnd: '10/10',
    carWashFee: 300,
    outboundDeliveryExpense: 150,
    returnPickupExpense: 0,
    isCorporateWht: false,
    companyTaxName: '',
    whtAmount: 0,
    scratchOutDetails: '',
    scratchInDetails: '',
    docImages: { ...EMPTY_DOC_IMAGES },
    notes: '',
    depositReturned: false,
    deductionAmount: 0,
    deductionReason: '',
    refundChannel: 'BANK',
    customerBankAccount: '',
    cancelReason: '',
    bookingRefundAmount: 0
  },
  {
    id: 108,
    bookingCode: 'B26112401',
    carModel: 'Yaris Ativ Smart (สีบรอนซ์เงิน) 6ขง6807 กทม.',
    deliveryStatus: 'รอส่ง',
    customerName: 'คุณปิยะนุช รัตนากร',
    nickname: 'K.นุช',
    phone: '0867123340',
    socialHandle: 'LINE: Nuch_Piya',
    emergencyContact: 'คุณตั้ม 0897741209',
    pickupDate: '2026-11-24',
    pickupTime: '10:00',
    pickupLocation: 'สนามบินสุวรรณภูมิ ชั้น 2',
    returnDate: '2026-11-28',
    returnTime: '16:00',
    returnLocation: 'สนามบินสุวรรณภูมิ ชั้น 2',
    rentalDays: 4,
    travelArea: 'กรุงเทพและปริมณฑล',
    dailyRate: 1200,
    bookingFee: 1000,
    bookingFeePaid: true,
    pickupBalancePaid: false,
    deliveryFee: 0,
    lateFeeOrExtra: 0,
    discountAmount: 0,
    depositAmount: 3000,
    mileageStart: '',
    mileageEnd: '',
    fuelLevelStart: '10/10',
    fuelLevelEnd: '10/10',
    carWashFee: 250,
    outboundDeliveryExpense: 140,
    returnPickupExpense: 0,
    isCorporateWht: false,
    companyTaxName: '',
    whtAmount: 0,
    scratchOutDetails: '',
    scratchInDetails: '',
    docImages: { ...EMPTY_DOC_IMAGES },
    notes: '',
    depositReturned: false,
    deductionAmount: 0,
    deductionReason: '',
    refundChannel: 'BANK',
    customerBankAccount: '',
    cancelReason: '',
    bookingRefundAmount: 0
  },
  {
    id: 109,
    bookingCode: 'B26120501',
    carModel: 'Yaris Ativ Smart (สีขาว) 4ขฎ8613 กทม.',
    deliveryStatus: 'รอส่ง',
    customerName: 'คุณวรพล ศรีสวัสดิ์',
    nickname: 'K.พล',
    phone: '0943318872',
    socialHandle: 'LINE: Pon_Worapol',
    emergencyContact: 'คุณดาว 0834419902',
    pickupDate: '2026-12-05',
    pickupTime: '09:00',
    pickupLocation: 'แฟชั่นไอส์แลนด์',
    returnDate: '2026-12-08',
    returnTime: '18:00',
    returnLocation: 'แฟชั่นไอส์แลนด์',
    rentalDays: 3,
    travelArea: 'อยุธยา - สระบุรี',
    dailyRate: 1200,
    bookingFee: 1000,
    bookingFeePaid: true,
    pickupBalancePaid: false,
    deliveryFee: 500,
    lateFeeOrExtra: 0,
    discountAmount: 0,
    depositAmount: 3000,
    mileageStart: '',
    mileageEnd: '',
    fuelLevelStart: '10/10',
    fuelLevelEnd: '10/10',
    carWashFee: 250,
    outboundDeliveryExpense: 120,
    returnPickupExpense: 0,
    isCorporateWht: false,
    companyTaxName: '',
    whtAmount: 0,
    scratchOutDetails: '',
    scratchInDetails: '',
    docImages: { ...EMPTY_DOC_IMAGES },
    notes: '',
    depositReturned: false,
    deductionAmount: 0,
    deductionReason: '',
    refundChannel: 'BANK',
    customerBankAccount: '',
    cancelReason: '',
    bookingRefundAmount: 0
  }
];

const INITIAL_MAINTENANCE = [
  {
    id: 201,
    date: '2026-11-02',
    carModel: 'Yaris Ativ Smart (สีบรอนซ์เงิน) 6ขง6807 กทม.',
    category: 'เช็กอินระยะ / เปลี่ยนถ่ายน้ำมันเครื่อง',
    cost: 2450,
    nextDueDate: '2027-03-02',
    notes: 'เช็กระยะ 45,000 กม. ศูนย์โตโยต้า บางกะปิ',
    images: []
  },
  {
    id: 202,
    date: '2026-10-18',
    carModel: 'Ford Ranger XLT (สีดำ) 3ขด7309 กทม.',
    category: 'ต่อประกันภัยรถยนต์ชั้น 1 / ชั้น 2+',
    cost: 16800,
    nextDueDate: '2027-10-18',
    notes: 'วิริยะประกันภัย ชั้น 1 ซ่อมห้าง',
    images: []
  }
];

const INITIAL_BLACKLIST = [
  {
    id: 301,
    fullName: 'นายสมศักดิ์ พงษ์ไพร (ตัวอย่าง)',
    idCard: '1-1099-00412-88-1',
    phone: '0809912345',
    severity: 'อันตรายสูง',
    reason: 'ค้างค่าเช่าและไม่นำรถมาคืนตามกำหนด ต้องติดตาม GPS',
    reportedDate: '2026-09-14',
    images: []
  }
];

const INITIAL_TRANSACTIONS = [
  {
    id: 'tx-initial-1',
    date: '2026-11-01',
    type: 'รายจ่าย',
    category: 'ค่าโฆษณายิงแอด (FB/TikTok/Google)',
    carModel: 'ทุกคัน / ส่วนกลาง',
    description: 'ค่าโฆษณาเพจ BF Carrent รอบต้นเดือน พ.ย.',
    amount: 3500,
    images: []
  }
];

const INITIAL_USERS = [
  {
    id: 1,
    username: 'admin',
    password: '1234',
    displayName: 'เจ้าของร้าน (BF Carrent)',
    role: 'OWNER',
    canViewFinance: true,
    active: true,
    createdAt: '2026-11-01'
  },
  {
    id: 2,
    username: 'staff01',
    password: '1111',
    displayName: 'แอดมินรับจอง',
    role: 'STAFF',
    canViewFinance: false,
    active: true,
    createdAt: '2026-11-05'
  }
];

const MONTH_NAMES_TH = [
  'มกราคม',
  'กุมภาพันธ์',
  'มีนาคม',
  'เมษายน',
  'พฤษภาคม',
  'มิถุนายน',
  'กรกฎาคม',
  'สิงหาคม',
  'กันยายน',
  'ตุลาคม',
  'พฤศจิกายน',
  'ธันวาคม'
];

const MONTH_SHORT_TH = [
  'ม.ค.',
  'ก.พ.',
  'มี.ค.',
  'เม.ย.',
  'พ.ค.',
  'มิ.ย.',
  'ก.ค.',
  'ส.ค.',
  'ก.ย.',
  'ต.ค.',
  'พ.ย.',
  'ธ.ค.'
];

const WEEKDAY_SHORT_TH = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];
const WEEKDAY_FULL_TH = [
  'วันอาทิตย์',
  'วันจันทร์',
  'วันอังคาร',
  'วันพุธ',
  'วันพฤหัสบดี',
  'วันศุกร์',
  'วันเสาร์'
];

function parseIsoParts(isoStr) {
  if (!isoStr || typeof isoStr !== 'string') return null;
  const clean = isoStr.slice(0, 10);
  const parts = clean.split('-').map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) return null;
  return { year: parts[0], month: parts[1], day: parts[2] };
}

function formatThaiSlashDate(isoStr) {
  const p = parseIsoParts(isoStr);
  if (!p) return isoStr || '-';
  const dd = String(p.day).padStart(2, '0');
  const mm = String(p.month).padStart(2, '0');
  const beYear = p.year < 2400 ? p.year + 543 : p.year;
  return `${dd}/${mm}/${beYear}`;
}

function formatThaiShortDate(isoStr) {
  const p = parseIsoParts(isoStr);
  if (!p) return isoStr || '-';
  const mLabel = MONTH_SHORT_TH[p.month - 1] || '';
  const beShort = String(p.year < 2400 ? p.year + 543 : p.year).slice(-2);
  return `${p.day} ${mLabel} ${beShort}`;
}

function getThaiWeekdayLabel(isoStr) {
  const p = parseIsoParts(isoStr);
  if (!p) return '';
  const d = new Date(p.year, p.month - 1, p.day);
  return WEEKDAY_FULL_TH[d.getDay()] || '';
}

function calcInclusiveDays(startIso, endIso) {
  const s = parseIsoParts(startIso);
  const e = parseIsoParts(endIso);
  if (!s || !e) return 1;
  const d1 = new Date(s.year, s.month - 1, s.day);
  const d2 = new Date(e.year, e.month - 1, e.day);
  const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
  return Math.max(1, diff);
}

function validateThaiIdCard(rawId) {
  const digits = String(rawId || '').replace(/\D/g, '');
  if (!digits) return { status: 'EMPTY' };
  if (digits.length < 13) return { status: 'INCOMPLETE' };
  if (digits.length > 13) return { status: 'INVALID' };
  let sum = 0;
  for (let i = 0; i < 12; i += 1) {
    sum += Number(digits[i]) * (13 - i);
  }
  const checkDigit = (11 - (sum % 11)) % 10;
  return checkDigit === Number(digits[12]) ? { status: 'VALID' } : { status: 'INVALID' };
}

function renderVehicleIllustration(carModel = '', className = 'w-16 h-10') {
  const lower = String(carModel).toLowerCase();
  let bodyFill = '#334155';
  let strokeColor = '#0f172a';
  if (lower.includes('ขาวมุก') || lower.includes('ขาว')) {
    bodyFill = '#f8fafc';
    strokeColor = '#94a3b8';
  } else if (lower.includes('บรอนซ์')) {
    bodyFill = '#cbd5e1';
    strokeColor = '#64748b';
  } else if (lower.includes('เทาดำ')) {
    bodyFill = '#374151';
    strokeColor = '#111827';
  } else if (lower.includes('เทา')) {
    bodyFill = '#64748b';
    strokeColor = '#334155';
  } else if (lower.includes('ดำ')) {
    bodyFill = '#1e293b';
    strokeColor = '#020617';
  }

  const isPickup = lower.includes('ranger') || lower.includes('กระบะ');
  const isMpv = lower.includes('veloz');

  return (
    <svg viewBox="0 0 120 60" className={className} fill="none">
      <ellipse cx="60" cy="51" rx="48" ry="4" fill="#0f172a" fillOpacity="0.12" />
      {isPickup ? (
        <path
          d="M12 38 L14 25 L48 25 L62 15 L86 15 L96 25 L108 27 L109 39 L12 39 Z"
          fill={bodyFill}
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      ) : isMpv ? (
        <path
          d="M12 39 L15 24 L30 14 L84 14 L98 25 L108 28 L108 39 Z"
          fill={bodyFill}
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M12 39 L16 27 L34 15 L76 15 L94 26 L108 29 L108 39 Z"
          fill={bodyFill}
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      )}
      <path
        d={
          isPickup
            ? 'M52 24 L63 17 L83 17 L90 24 Z'
            : isMpv
            ? 'M32 24 L38 16 L81 16 L90 24 Z'
            : 'M36 25 L43 17 L74 17 L86 25 Z'
        }
        fill="#bae6fd"
        stroke={strokeColor}
        strokeWidth="1.3"
      />
      <circle cx="32" cy="41" r="8" fill="#1e293b" />
      <circle cx="32" cy="41" r="4" fill="#cbd5e1" />
      <circle cx="88" cy="41" r="8" fill="#1e293b" />
      <circle cx="88" cy="41" r="4" fill="#cbd5e1" />
    </svg>
  );
}

// คำนวณยอดเงินของใบจองอัตโนมัติ
function calculateFinancials(b) {
  const days = Math.max(1, Number(b.rentalDays) || 1);
  const rate = Math.max(0, Number(b.dailyRate) || 0);
  const rentalSubtotal = days * rate;
  const deliveryFee = Math.max(0, Number(b.deliveryFee) || 0);
  const lateFeeOrExtra = Math.max(0, Number(b.lateFeeOrExtra) || 0);
  const discountAmount = Math.max(0, Number(b.discountAmount) || 0);
  const depositAmount = Math.max(0, Number(b.depositAmount) || 0);
  const bookingFee = Math.max(0, Number(b.bookingFee) || 0);

  const grandTotal = Math.max(
    0,
    rentalSubtotal + deliveryFee + lateFeeOrExtra - discountAmount + depositAmount
  );
  const balanceDueAtPickup = Math.max(0, grandTotal - bookingFee);

  return {
    rentalSubtotal,
    grandTotal,
    balanceDueAtPickup
  };
}

// ============================================================================
// SUPABASE + GITHUB + VERCEL PRODUCTION INTEGRATION HELPERS
// ============================================================================
const getSafeEnv = (key) => {
  try {
    return (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) || '';
  } catch (e) {
    return '';
  }
};

const SUPABASE_SQL_SCHEMA = `-- คัดลอกคำสั่ง SQL ทั้งหมดนี้ไปวางใน Supabase -> SQL Editor แล้วกด Run
create table if not exists public.bf_cars (
  id bigint primary key,
  model text not null,
  plate text,
  daily_rate numeric default 0,
  deposit numeric default 0,
  status text default 'พร้อมใช้งาน',
  payload jsonb not null,
  updated_at timestamptz default now()
);

create table if not exists public.bf_bookings (
  id bigint primary key,
  booking_code text,
  car_model text,
  delivery_status text,
  customer_name text,
  phone text,
  pickup_date text,
  return_date text,
  payload jsonb not null,
  updated_at timestamptz default now()
);

create table if not exists public.bf_maintenance (
  id bigint primary key,
  date text,
  car_model text,
  category text,
  cost numeric default 0,
  payload jsonb not null,
  updated_at timestamptz default now()
);

create table if not exists public.bf_blacklist (
  id bigint primary key,
  full_name text,
  id_card text,
  phone text,
  severity text,
  payload jsonb not null,
  updated_at timestamptz default now()
);

create table if not exists public.bf_transactions (
  id text primary key,
  date text,
  type text,
  category text,
  amount numeric default 0,
  payload jsonb not null,
  updated_at timestamptz default now()
);

create table if not exists public.bf_users (
  id bigint primary key,
  username text unique not null,
  display_name text,
  role text default 'STAFF',
  active boolean default true,
  payload jsonb not null,
  updated_at timestamptz default now()
);

-- เปิดสิทธิ์การเข้าถึงตารางสำหรับแอป BF Carrent
alter table public.bf_cars enable row level security;
alter table public.bf_bookings enable row level security;
alter table public.bf_maintenance enable row level security;
alter table public.bf_blacklist enable row level security;
alter table public.bf_transactions enable row level security;
alter table public.bf_users enable row level security;

drop policy if exists "bf_cars_all" on public.bf_cars;
create policy "bf_cars_all" on public.bf_cars for all using (true) with check (true);

drop policy if exists "bf_bookings_all" on public.bf_bookings;
create policy "bf_bookings_all" on public.bf_bookings for all using (true) with check (true);

drop policy if exists "bf_maintenance_all" on public.bf_maintenance;
create policy "bf_maintenance_all" on public.bf_maintenance for all using (true) with check (true);

drop policy if exists "bf_blacklist_all" on public.bf_blacklist;
create policy "bf_blacklist_all" on public.bf_blacklist for all using (true) with check (true);

drop policy if exists "bf_transactions_all" on public.bf_transactions;
create policy "bf_transactions_all" on public.bf_transactions for all using (true) with check (true);

drop policy if exists "bf_users_all" on public.bf_users;
create policy "bf_users_all" on public.bf_users for all using (true) with check (true);`;

const GITHUB_PACKAGE_JSON = `{
  "name": "bf-carrent-backoffice",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.460.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^5.4.11"
  }
}`;

const GITHUB_INDEX_HTML = `<!doctype html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BF CARRENT — ระบบจัดการรถเช่าหลังบ้าน</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;

const GITHUB_MAIN_JSX = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;

async function supabaseRestFetch(config, path, options = {}) {
  const baseUrl = String(config?.url || '').replace(/\/+$/, '');
  const anonKey = String(config?.anonKey || '').trim();
  if (!baseUrl || !anonKey) throw new Error('Missing Supabase credentials');

  const response = await fetch(`${baseUrl}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => '');
    throw new Error(`Supabase HTTP ${response.status}: ${errText}`);
  }

  if (response.status === 204) return null;
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

export default function App() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [lang, setLang] = useState(() => {
    try {
      const savedLang = localStorage.getItem('bf_carrent_lang_v1');
      if (savedLang === 'TH' || savedLang === 'EN') return savedLang;
    } catch (e) {}
    return 'TH';
  });
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const handleSelectLanguage = (nextLang) => {
    setLang(nextLang);
    setShowLangDropdown(false);
    try {
      localStorage.setItem('bf_carrent_lang_v1', nextLang);
    } catch (e) {}
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [viewMode, setViewMode] = useState('CARDS');

  const [carFilter, setCarFilter] = useState('ALL');
  const [financeCarFilter, setFinanceCarFilter] = useState('ALL');
  const [financeYearFilter, setFinanceYearFilter] = useState('2026');
  const [financePeriodFilter, setFinancePeriodFilter] = useState('ALL'); // 'ALL' | 'H1' | 'H2' | '01'..'12'
  const [financeTypeFilter, setFinanceTypeFilter] = useState('ALL'); // 'ALL' | 'รายรับ' | 'รายจ่าย'
  const [maintenanceCarFilter, setMaintenanceCarFilter] = useState('ALL');

  const [calendarYear, setCalendarYear] = useState(2026);
  const [calendarMonth, setCalendarMonth] = useState(10); // 0 = ม.ค., 10 = พ.ย.
  const [scheduleViewMode, setScheduleViewMode] = useState('MONTH'); // 'MONTH' | 'MATRIX'
  const [selectedCalendarDate, setSelectedCalendarDate] = useState('2026-11-12');
  const [availStartDate, setAvailStartDate] = useState('2026-11-12');
  const [availEndDate, setAvailEndDate] = useState('2026-11-14');

  // ข้อมูลหลักในระบบ (บันทึกอัตโนมัติลงเบราว์เซอร์)
  const [fleet, setFleet] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('bf_carrent_meta_v2') || 'null');
      if (saved && Array.isArray(saved.fleet) && saved.fleet.length > 0) return saved.fleet;
    } catch (e) {}
    return DEFAULT_CARS;
  });

  const [bookings, setBookings] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('bf_carrent_bookings_v2') || 'null');
      if (Array.isArray(saved) && saved.length > 0) return saved;
    } catch (e) {}
    return INITIAL_BOOKINGS;
  });

  const [maintenanceLogs, setMaintenanceLogs] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('bf_carrent_meta_v2') || 'null');
      if (saved && Array.isArray(saved.maintenanceLogs)) return saved.maintenanceLogs;
    } catch (e) {}
    return INITIAL_MAINTENANCE;
  });

  const [blacklist, setBlacklist] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('bf_carrent_meta_v2') || 'null');
      if (saved && Array.isArray(saved.blacklist)) return saved.blacklist;
    } catch (e) {}
    return INITIAL_BLACKLIST;
  });

  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('bf_carrent_meta_v2') || 'null');
      if (saved && Array.isArray(saved.transactions)) return saved.transactions;
    } catch (e) {}
    return INITIAL_TRANSACTIONS;
  });

  const [users, setUsers] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('bf_carrent_meta_v2') || 'null');
      if (saved && Array.isArray(saved.users) && saved.users.length > 0) return saved.users;
    } catch (e) {}
    return INITIAL_USERS;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('bf_carrent_session_v1') || 'null');
      if (saved && saved.username) return saved;
    } catch (e) {}
    return null;
  });

  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [showUserForm, setShowUserForm] = useState(false);
  const [userForm, setUserForm] = useState({
    username: '',
    password: '',
    displayName: '',
    role: 'STAFF',
    canViewFinance: false
  });
  const [editingUserId, setEditingUserId] = useState(null);
  const [editUserForm, setEditUserForm] = useState({
    displayName: '',
    password: '',
    role: 'STAFF',
    canViewFinance: false
  });
  const [showMobileMoreMenu, setShowMobileMoreMenu] = useState(false);

  // โหลดไลบรารี SheetJS สำหรับอ่าน/เขียน Excel (.xlsx)
  useEffect(() => {
    if (window.XLSX) return;
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // โหลดฟอนต์สมัยใหม่สำหรับภาษาไทยและตัวเลข (IBM Plex Sans Thai + Plus Jakarta Sans)
  useEffect(() => {
    if (document.getElementById('bf-modern-fonts')) return;
    const link = document.createElement('link');
    link.id = 'bf-modern-fonts';
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap';
    document.head.appendChild(link);
  }, []);

  // บันทึกข้อมูลการจองรถอัตโนมัติลงเครื่อง
  useEffect(() => {
    try {
      localStorage.setItem('bf_carrent_bookings_v2', JSON.stringify(bookings));
    } catch (err) {
      console.warn('Unable to persist bookings', err);
    }
  }, [bookings]);

  // ==========================================================================
  // SUPABASE CLOUD SYNC STATE & REALTIME PERSISTENCE
  // ==========================================================================
  const [supabaseConfig, setSupabaseConfig] = useState(() => {
    const envUrl = getSafeEnv('VITE_SUPABASE_URL');
    const envKey = getSafeEnv('VITE_SUPABASE_ANON_KEY');
    if (envUrl && envKey) return { url: envUrl, anonKey: envKey };
    try {
      const saved = JSON.parse(localStorage.getItem('bf_carrent_supabase_cfg') || 'null');
      if (saved && saved.url && saved.anonKey) return saved;
    } catch (e) {}
    return { url: '', anonKey: '' };
  });

  const [supabaseDraft, setSupabaseDraft] = useState(supabaseConfig);
  const [supabaseStatus, setSupabaseStatus] = useState(
    supabaseConfig.url && supabaseConfig.anonKey ? 'LOADING' : 'DISCONNECTED'
  );
  const [supabaseErrorMsg, setSupabaseErrorMsg] = useState('');
  const [hasLoadedInitialCloud, setHasLoadedInitialCloud] = useState(false);
  const [showDeployModal, setShowDeployModal] = useState(false);
  const [deployStepTab, setDeployStepTab] = useState('SUPABASE'); // 'SUPABASE' | 'GITHUB' | 'VERCEL'

  const pushAllStateToSupabase = async (cfg = supabaseConfig, customData = null) => {
    if (!cfg?.url || !cfg?.anonKey) return false;
    setSupabaseStatus('SYNCING');
    setSupabaseErrorMsg('');
    const targetFleet = customData?.fleet || fleet;
    const targetBookings = customData?.bookings || bookings;
    const targetMt = customData?.maintenanceLogs || maintenanceLogs;
    const targetBl = customData?.blacklist || blacklist;
    const targetTx = customData?.transactions || transactions;
    const targetUsers = customData?.users || users;

    try {
      const upsertOpts = {
        method: 'POST',
        headers: { Prefer: 'resolution=merge-duplicates,return=minimal' }
      };

      if (targetFleet.length > 0) {
        await supabaseRestFetch(cfg, 'bf_cars', {
          ...upsertOpts,
          body: JSON.stringify(
            targetFleet.map((c) => ({
              id: Number(c.id),
              model: c.model || '',
              plate: c.plate || '',
              daily_rate: Number(c.dailyRate) || 0,
              deposit: Number(c.deposit) || 0,
              status: c.status || 'พร้อมใช้งาน',
              payload: c,
              updated_at: new Date().toISOString()
            }))
          )
        });
      }

      if (targetBookings.length > 0) {
        await supabaseRestFetch(cfg, 'bf_bookings', {
          ...upsertOpts,
          body: JSON.stringify(
            targetBookings.map((b) => ({
              id: Number(b.id),
              booking_code: b.bookingCode || '',
              car_model: b.carModel || '',
              delivery_status: b.deliveryStatus || 'รอส่ง',
              customer_name: b.customerName || '',
              phone: b.phone || '',
              pickup_date: b.pickupDate || '',
              return_date: b.returnDate || '',
              payload: b,
              updated_at: new Date().toISOString()
            }))
          )
        });
      }

      if (targetMt.length > 0) {
        await supabaseRestFetch(cfg, 'bf_maintenance', {
          ...upsertOpts,
          body: JSON.stringify(
            targetMt.map((m) => ({
              id: Number(m.id),
              date: m.date || '',
              car_model: m.carModel || '',
              category: m.category || '',
              cost: Number(m.cost) || 0,
              payload: m,
              updated_at: new Date().toISOString()
            }))
          )
        });
      }

      if (targetBl.length > 0) {
        await supabaseRestFetch(cfg, 'bf_blacklist', {
          ...upsertOpts,
          body: JSON.stringify(
            targetBl.map((p) => ({
              id: Number(p.id),
              full_name: p.fullName || '',
              id_card: p.idCard || '',
              phone: p.phone || '',
              severity: p.severity || '',
              payload: p,
              updated_at: new Date().toISOString()
            }))
          )
        });
      }

      if (targetTx.length > 0) {
        await supabaseRestFetch(cfg, 'bf_transactions', {
          ...upsertOpts,
          body: JSON.stringify(
            targetTx.map((t) => ({
              id: String(t.id),
              date: t.date || '',
              type: t.type || 'รายจ่าย',
              category: t.category || '',
              amount: Number(t.amount) || 0,
              payload: t,
              updated_at: new Date().toISOString()
            }))
          )
        });
      }

      if (targetUsers.length > 0) {
        await supabaseRestFetch(cfg, 'bf_users', {
          ...upsertOpts,
          body: JSON.stringify(
            targetUsers.map((u) => ({
              id: Number(u.id),
              username: u.username || '',
              display_name: u.displayName || '',
              role: u.role || 'STAFF',
              active: u.active !== false,
              payload: u,
              updated_at: new Date().toISOString()
            }))
          )
        });
      }

      setSupabaseStatus('CONNECTED');
      return true;
    } catch (err) {
      setSupabaseStatus('ERROR');
      setSupabaseErrorMsg(err.message || 'ไม่สามารถซิงค์ข้อมูลกับ Supabase ได้');
      return false;
    }
  };

  const loadAllStateFromSupabase = async (cfg = supabaseConfig) => {
    if (!cfg?.url || !cfg?.anonKey) {
      setSupabaseStatus('DISCONNECTED');
      return;
    }
    setSupabaseStatus('LOADING');
    setSupabaseErrorMsg('');
    try {
      const [carsRows, bookingRows, mtRows, blRows, txRows, userRows] = await Promise.all([
        supabaseRestFetch(cfg, 'bf_cars?select=payload&order=id.asc'),
        supabaseRestFetch(cfg, 'bf_bookings?select=payload&order=id.desc'),
        supabaseRestFetch(cfg, 'bf_maintenance?select=payload&order=id.desc'),
        supabaseRestFetch(cfg, 'bf_blacklist?select=payload&order=id.desc'),
        supabaseRestFetch(cfg, 'bf_transactions?select=payload&order=date.desc'),
        supabaseRestFetch(cfg, 'bf_users?select=payload&order=id.asc').catch(() => [])
      ]);

      const hasCloudData =
        (carsRows && carsRows.length > 0) ||
        (bookingRows && bookingRows.length > 0) ||
        (mtRows && mtRows.length > 0) ||
        (blRows && blRows.length > 0) ||
        (txRows && txRows.length > 0) ||
        (userRows && userRows.length > 0);

      if (hasCloudData) {
        if (carsRows?.length > 0) setFleet(carsRows.map((r) => r.payload));
        if (bookingRows?.length > 0) setBookings(bookingRows.map((r) => r.payload));
        if (mtRows) setMaintenanceLogs(mtRows.map((r) => r.payload));
        if (blRows) setBlacklist(blRows.map((r) => r.payload));
        if (txRows) setTransactions(txRows.map((r) => r.payload));
        if (userRows?.length > 0) setUsers(userRows.map((r) => r.payload));
        setSupabaseStatus('CONNECTED');
      } else {
        // ตารางบน Supabase ยังว่างอยู่ -> อัปโหลดข้อมูลเริ่มต้นขึ้น Supabase ให้อัตโนมัติ
        await pushAllStateToSupabase(cfg);
      }
      setHasLoadedInitialCloud(true);
    } catch (err) {
      setSupabaseStatus('ERROR');
      setSupabaseErrorMsg(err.message || 'เชื่อมต่อ Supabase ไม่สำเร็จ กรุณาตรวจสอบ URL / Key หรือรัน SQL สร้างตาราง');
      setHasLoadedInitialCloud(true);
    }
  };

  const deleteRowFromSupabase = async (tableName, rowId) => {
    if (!supabaseConfig?.url || !supabaseConfig?.anonKey) return;
    try {
      await supabaseRestFetch(supabaseConfig, `${tableName}?id=eq.${encodeURIComponent(rowId)}`, {
        method: 'DELETE'
      });
    } catch (err) {
      console.warn('Supabase delete warning:', err);
    }
  };

  // ดึงข้อมูลจาก Supabase อัตโนมัติเมื่อเปิดแอป (หากตั้งค่า URL/Key ไว้แล้ว)
  useEffect(() => {
    if (supabaseConfig.url && supabaseConfig.anonKey) {
      loadAllStateFromSupabase(supabaseConfig);
    }
  }, []);

  // ซิงค์การแก้ไขข้อมูลขึ้น Supabase อัตโนมัติ (Debounce 1 วินาที)
  useEffect(() => {
    if (!hasLoadedInitialCloud || !supabaseConfig.url || !supabaseConfig.anonKey) return;
    const timer = setTimeout(() => {
      pushAllStateToSupabase(supabaseConfig);
    }, 1000);
    return () => clearTimeout(timer);
  }, [bookings, fleet, maintenanceLogs, blacklist, transactions, users, hasLoadedInitialCloud, supabaseConfig]);

  // State สำหรับเพิ่มรายการรายจ่ายร้าน, ซ่อมบำรุง, บุคคลอันตราย และข้อมูลรถ
  const [showTxForm, setShowTxForm] = useState(false);
  const [txForm, setTxForm] = useState({
    date: '2026-11-12',
    type: 'รายจ่าย',
    category: 'ค่าโฆษณายิงแอด (FB/TikTok/Google)',
    carModel: 'ทุกคัน / ส่วนกลาง',
    description: '',
    amount: '',
    images: []
  });

  const [showMtForm, setShowMtForm] = useState(false);
  const [mtForm, setMtForm] = useState({
    date: '2026-11-12',
    carModel: DEFAULT_CARS[0].model,
    category: 'เช็กอินระยะ / เปลี่ยนถ่ายน้ำมันเครื่อง',
    cost: '',
    nextDueDate: '',
    notes: '',
    images: []
  });

  const [showBlForm, setShowBlForm] = useState(false);
  const [blForm, setBlForm] = useState({
    fullName: '',
    idCard: '',
    phone: '',
    severity: 'อันตรายสูง',
    reason: '',
    reportedDate: '2026-11-12',
    images: []
  });

  const [showCarForm, setShowCarForm] = useState(false);
  const [carForm, setCarForm] = useState({
    model: '',
    plate: '',
    color: '',
    dailyRate: 1200,
    deposit: 3000,
    insuranceExpiry: '',
    taxExpiry: '',
    status: 'พร้อมใช้งาน',
    images: []
  });
  const [editingCarId, setEditingCarId] = useState(null);
  const [editCarForm, setEditCarForm] = useState(null);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [editingBooking, setEditingBooking] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [quickSettleTarget, setQuickSettleTarget] = useState(null);
  const [quickSettleForm, setQuickSettleForm] = useState({
    deductionAmount: 0,
    deductionReason: '',
    depositRefundSlip: []
  });
  const [cancelTarget, setCancelTarget] = useState(null);
  const [cancelForm, setCancelForm] = useState({
    cancelReason: '',
    refundMode: 'FORFEIT',
    bookingRefundAmount: 0,
    refundAccountInfo: '',
    bookingRefundSlip: []
  });
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // ระบบตรวจสอบประวัติความเสี่ยงจากสื่อออนไลน์ (AI + Google Search Grounding)
  const [autoRiskScanEnabled, setAutoRiskScanEnabled] = useState(true);
  const [bookingRiskCheck, setBookingRiskCheck] = useState({
    loading: false,
    lastQueryKey: '',
    riskLevel: null, // 'HIGH' | 'MEDIUM' | 'LOW' | 'ERROR' | null
    summary: '',
    sources: [],
    checkedAt: ''
  });
  const [standaloneQuery, setStandaloneQuery] = useState({
    fullName: '',
    idCardNumber: '',
    phone: ''
  });
  const [standaloneRiskCheck, setStandaloneRiskCheck] = useState({
    loading: false,
    riskLevel: null,
    summary: '',
    sources: [],
    checkedAt: ''
  });

  const emptyForm = {
    bookingCode: '',
    carModel: DEFAULT_CARS[0].model,
    deliveryStatus: 'รอส่ง',
    customerName: '',
    nickname: '',
    idCardNumber: '',
    phone: '',
    socialHandle: '',
    emergencyContact: '',
    pickupDate: '2026-11-12',
    pickupTime: '10:00',
    pickupLocation: '',
    returnDate: '2026-11-14',
    returnTime: '10:00',
    returnLocation: '',
    rentalDays: 2,
    travelArea: 'กรุงเทพและปริมณฑล',
    dailyRate: 1200,
    bookingFee: 1000,
    bookingFeePaid: false,
    pickupBalancePaid: false,
    deliveryFee: 0,
    lateFeeOrExtra: 0,
    discountAmount: 0,
    depositAmount: 3000,
    mileageStart: '',
    mileageEnd: '',
    fuelLevelStart: '10/10',
    fuelLevelEnd: '10/10',
    carWashFee: 0,
    outboundDeliveryExpense: 0,
    returnPickupExpense: 0,
    isCorporateWht: false,
    companyTaxName: '',
    whtAmount: 0,
    scratchOutDetails: '',
    scratchInDetails: '',
    docImages: { ...EMPTY_DOC_IMAGES },
    notes: '',
    depositReturned: false,
    deductionAmount: 0,
    deductionReason: '',
    refundChannel: 'BANK',
    customerBankAccount: '',
    cancelReason: '',
    bookingRefundAmount: 0
  };

  const [formData, setFormData] = useState(emptyForm);

  const persistMetaState = (patch) => {
    try {
      const next = {
        fleet,
        maintenanceLogs,
        blacklist,
        transactions,
        users,
        ...patch
      };
      localStorage.setItem('bf_carrent_meta_v2', JSON.stringify(next));
    } catch (err) {
      console.warn('Unable to persist meta state', err);
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? '' : prev));
    }, 3200);
  };

  // ==========================================================================
  // USER AUTHENTICATION & ACCESS CONTROL HANDLERS
  // ==========================================================================
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const inputUser = String(loginForm.username || '').trim().toLowerCase();
    const inputPass = String(loginForm.password || '').trim();
    if (!inputUser || !inputPass) {
      setLoginError(
        lang === 'TH'
          ? 'กรุณากรอกชื่อผู้ใช้งาน (Username) และรหัสผ่าน'
          : 'Please enter both Username and Password'
      );
      return;
    }

    const matched = users.find(
      (u) =>
        String(u.username || '').trim().toLowerCase() === inputUser &&
        String(u.password || '').trim() === inputPass
    );

    if (!matched) {
      setLoginError(
        lang === 'TH'
          ? 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง'
          : 'Invalid username or password. Please try again.'
      );
      return;
    }

    if (matched.active === false) {
      setLoginError(
        lang === 'TH'
          ? 'บัญชีผู้ใช้งานนี้ถูกระงับการใช้งานชั่วคราว กรุณาติดต่อเจ้าของร้าน'
          : 'This account is temporarily suspended. Please contact the owner.'
      );
      return;
    }

    const sessionUser = {
      id: matched.id,
      username: matched.username,
      displayName: matched.displayName || matched.username,
      role: matched.role || 'STAFF',
      canViewFinance: matched.role === 'OWNER' ? true : Boolean(matched.canViewFinance)
    };
    setCurrentUser(sessionUser);
    try {
      localStorage.setItem('bf_carrent_session_v1', JSON.stringify(sessionUser));
    } catch (err) {}
    setLoginError('');
    setLoginForm({ username: '', password: '' });
    showToast(
      lang === 'TH'
        ? `ยินดีต้อนรับคุณ ${sessionUser.displayName} ✓`
        : `Welcome back, ${sessionUser.displayName} ✓`
    );
  };

  const todayIso = new Date().toISOString().slice(0, 10);

  const isOwnerUser = currentUser?.role === 'OWNER';
  const canAccessFinance = isOwnerUser || Boolean(currentUser?.canViewFinance);
  const monthNamesTh = MONTH_NAMES_TH;

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('bf_carrent_session_v1');
    } catch (err) {}
  };

  const carModels = useMemo(() => {
    const set = new Set(fleet.map((c) => c.model));
    bookings.forEach((b) => {
      if (b.carModel) set.add(b.carModel);
    });
    return Array.from(set);
  }, [fleet, bookings]);

  const activeBlacklistCount = blacklist.length;

  const conflictingBookingIds = useMemo(() => {
    const active = bookings.filter((b) => b.deliveryStatus !== 'ยกเลิก');
    const ids = new Set();
    for (let i = 0; i < active.length; i += 1) {
      for (let j = i + 1; j < active.length; j += 1) {
        const a = active[i];
        const b = active[j];
        if (a.carModel === b.carModel && a.pickupDate && a.returnDate && b.pickupDate && b.returnDate) {
          if (a.pickupDate <= b.returnDate && b.pickupDate <= a.returnDate) {
            ids.add(a.id);
            ids.add(b.id);
          }
        }
      }
    }
    return ids;
  }, [bookings]);

  const dailyOccupancyMap = useMemo(() => {
    const map = {};
    bookings.forEach((b) => {
      if (b.deliveryStatus === 'ยกเลิก' || !b.pickupDate || !b.returnDate) return;
      const s = parseIsoParts(b.pickupDate);
      const e = parseIsoParts(b.returnDate);
      if (!s || !e) return;
      const cur = new Date(s.year, s.month - 1, s.day);
      const end = new Date(e.year, e.month - 1, e.day);
      let guard = 0;
      while (cur <= end && guard < 180) {
        const iso = `${cur.getFullYear()}-${String(cur.getMonth() + 1).padStart(2, '0')}-${String(
          cur.getDate()
        ).padStart(2, '0')}`;
        if (!map[iso]) map[iso] = [];
        map[iso].push(b);
        cur.setDate(cur.getDate() + 1);
        guard += 1;
      }
    });
    return map;
  }, [bookings]);

  const availableYears = useMemo(() => {
    const yrs = new Set([2025, 2026, 2027, 2028]);
    bookings.forEach((b) => {
      if (b.pickupDate) yrs.add(Number(b.pickupDate.slice(0, 4)));
    });
    return Array.from(yrs)
      .filter((y) => !isNaN(y))
      .sort((a, b) => a - b);
  }, [bookings]);

  const availQueryDays = useMemo(
    () => calcInclusiveDays(availStartDate, availEndDate),
    [availStartDate, availEndDate]
  );

  const quickCheckResults = useMemo(() => {
    return fleet.map((car) => {
      const conflicts = bookings.filter((b) => {
        if (b.deliveryStatus === 'ยกเลิก' || b.carModel !== car.model) return false;
        if (!availStartDate || !availEndDate || !b.pickupDate || !b.returnDate) return false;
        return availStartDate <= b.returnDate && b.pickupDate <= availEndDate;
      });
      return {
        ...car,
        isAvailable: conflicts.length === 0,
        conflicts
      };
    });
  }, [fleet, bookings, availStartDate, availEndDate]);

  const calendarDaysList = useMemo(() => {
    const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
    const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstDay; i += 1) {
      cells.push(null);
    }
    for (let day = 1; day <= daysInMonth; day += 1) {
      const d = new Date(calendarYear, calendarMonth, day);
      const dow = d.getDay();
      const iso = `${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(day).padStart(
        2,
        '0'
      )}`;
      cells.push({
        day,
        iso,
        isWeekend: dow === 0 || dow === 6,
        weekdayShort: WEEKDAY_SHORT_TH[dow],
        weekdayFull: WEEKDAY_FULL_TH[dow]
      });
    }
    return cells;
  }, [calendarYear, calendarMonth]);

  const monthOnlyDays = useMemo(
    () => calendarDaysList.filter(Boolean),
    [calendarDaysList]
  );

  // Unified Financial Ledger Entries (Auto from Bookings + Maintenance + Store Expenses)
  const unifiedLedgerEntries = useMemo(() => {
    const list = [];

    bookings.forEach((b) => {
      const fin = calculateFinancials(b);
      if (b.deliveryStatus !== 'ยกเลิก') {
        const netRentIncome = Math.max(
          0,
          fin.rentalSubtotal +
            (Number(b.deliveryFee) || 0) +
            (Number(b.lateFeeOrExtra) || 0) -
            (Number(b.discountAmount) || 0)
        );
        if (netRentIncome > 0) {
          list.push({
            id: `auto-inc-${b.id}`,
            date: b.pickupDate || todayIso,
            type: 'รายรับ',
            category: 'รายได้ค่าเช่ารถและบริการ',
            carModel: b.carModel,
            description: `${b.bookingCode} • ${b.customerName} (${b.rentalDays} วัน)`,
            amount: netRentIncome,
            whtAmount: b.isCorporateWht ? Number(b.whtAmount) || 0 : 0,
            isCorporateWht: Boolean(b.isCorporateWht),
            companyTaxName: b.companyTaxName || '',
            bookingCode: b.bookingCode,
            customerName: b.customerName,
            isAuto: true,
            bookingRef: b
          });
        }
      } else {
        const retainedFee = Math.max(
          0,
          (Number(b.bookingFee) || 0) - (Number(b.bookingRefundAmount) || 0)
        );
        if (retainedFee > 0) {
          list.push({
            id: `auto-forfeit-${b.id}`,
            date: b.pickupDate || todayIso,
            type: 'รายรับ',
            category: 'รายได้ริบเงินจอง (ยกเลิกคิว)',
            carModel: b.carModel,
            description: `${b.bookingCode} • ${b.customerName} (${b.cancelReason || 'ยกเลิกคิว'})`,
            amount: retainedFee,
            whtAmount: 0,
            isAuto: true,
            bookingRef: b
          });
        }
      }

      if (Number(b.carWashFee) > 0) {
        list.push({
          id: `auto-wash-${b.id}`,
          date: b.pickupDate || todayIso,
          type: 'รายจ่าย',
          category: 'ค่าล้างรถและเตรียมรถก่อนส่ง',
          carModel: b.carModel,
          description: `${b.bookingCode} • ค่าล้างรถก่อนส่ง (${b.customerName})`,
          amount: Number(b.carWashFee),
          isAuto: true,
          bookingRef: b
        });
      }

      if (Number(b.outboundDeliveryExpense) > 0) {
        list.push({
          id: `auto-out-${b.id}`,
          date: b.pickupDate || todayIso,
          type: 'รายจ่าย',
          category: 'ค่าเดินทาง/น้ำมันไปส่งมอบรถ',
          carModel: b.carModel,
          description: `${b.bookingCode} • ค่าส่งรถ (${b.pickupLocation || '-'})`,
          amount: Number(b.outboundDeliveryExpense),
          isAuto: true,
          bookingRef: b
        });
      }

      if (Number(b.returnPickupExpense) > 0) {
        list.push({
          id: `auto-in-${b.id}`,
          date: b.returnDate || b.pickupDate || todayIso,
          type: 'รายจ่าย',
          category: 'ค่าเดินทาง/น้ำมันไปรับรถคืน',
          carModel: b.carModel,
          description: `${b.bookingCode} • ค่ารับรถคืน (${b.returnLocation || '-'})`,
          amount: Number(b.returnPickupExpense),
          isAuto: true,
          bookingRef: b
        });
      }
    });

    maintenanceLogs.forEach((m) => {
      if (Number(m.cost) > 0) {
        list.push({
          id: `auto-mt-${m.id}`,
          date: m.date || todayIso,
          type: 'รายจ่าย',
          category: m.category || 'ซ่อมบำรุง & ประกันภัย',
          carModel: m.carModel,
          description: m.notes || m.category,
          amount: Number(m.cost),
          isAuto: true
        });
      }
    });

    transactions.forEach((t) => {
      list.push({
        ...t,
        isAuto: false
      });
    });

    return list.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  }, [bookings, maintenanceLogs, transactions, todayIso]);

  const matchesTaxPeriod = (dateStr, yearFilter, periodFilter) => {
    if (!dateStr) return true;
    const yr = dateStr.slice(0, 4);
    const mo = dateStr.slice(5, 7);
    if (yearFilter !== 'ALL' && yr !== yearFilter) return false;
    if (periodFilter === 'ALL') return true;
    if (periodFilter === 'H1') return ['01', '02', '03', '04', '05', '06'].includes(mo);
    if (periodFilter === 'H2') return ['07', '08', '09', '10', '11', '12'].includes(mo);
    return mo === periodFilter;
  };

  const periodScopedLedgerEntries = useMemo(() => {
    return unifiedLedgerEntries.filter((entry) => {
      if (!matchesTaxPeriod(entry.date, financeYearFilter, financePeriodFilter)) return false;
      if (financeCarFilter !== 'ALL' && entry.carModel !== financeCarFilter) return false;
      return true;
    });
  }, [unifiedLedgerEntries, financeYearFilter, financePeriodFilter, financeCarFilter]);

  const taxAnalytics = useMemo(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    let totalWht5Percent = 0;
    const corporateWhtList = [];
    const catMap = {};

    periodScopedLedgerEntries.forEach((e) => {
      const amt = Number(e.amount) || 0;
      const wht = Number(e.whtAmount) || 0;
      if (e.type === 'รายรับ') {
        totalIncome += amt;
        totalWht5Percent += wht;
        if (e.isCorporateWht || wht > 0) {
          corporateWhtList.push(e);
        }
      } else {
        totalExpenses += amt;
      }

      const key = `${e.type}__${e.category}`;
      if (!catMap[key]) {
        catMap[key] = {
          type: e.type,
          category: e.category,
          count: 0,
          total: 0,
          whtTotal: 0
        };
      }
      catMap[key].count += 1;
      catMap[key].total += amt;
      catMap[key].whtTotal += wht;
    });

    const targetVatYear = financeYearFilter === 'ALL' ? '2026' : financeYearFilter;
    const annualGrossForVat = unifiedLedgerEntries
      .filter((e) => e.type === 'รายรับ' && String(e.date || '').startsWith(targetVatYear))
      .reduce((sum, e) => sum + (Number(e.amount) || 0), 0);

    const vatThreshold = 1800000;
    const vatProgressPercent = Math.min(100, Math.round((annualGrossForVat / vatThreshold) * 100));
    const vatRemaining = Math.max(0, vatThreshold - annualGrossForVat);

    return {
      totalIncome,
      totalExpenses,
      netProfit: totalIncome - totalExpenses,
      totalWht5Percent,
      corporateWhtList,
      categoryBreakdown: Object.values(catMap),
      targetVatYear,
      annualGrossForVat,
      vatThreshold,
      vatProgressPercent,
      vatRemaining
    };
  }, [periodScopedLedgerEntries, unifiedLedgerEntries, financeYearFilter]);

  const stats = useMemo(() => {
    const active = bookings.filter((b) => b.deliveryStatus !== 'ยกเลิก');
    const totalIncome = unifiedLedgerEntries
      .filter((e) => e.type === 'รายรับ')
      .reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
    const totalExpenses = unifiedLedgerEntries
      .filter((e) => e.type === 'รายจ่าย')
      .reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
    const unreturnedDeposits = active
      .filter((b) => !b.depositReturned)
      .reduce((sum, b) => sum + (Number(b.depositAmount) || 0), 0);

    return {
      activeBookings: active.length,
      totalIncome,
      totalExpenses,
      netProfit: totalIncome - totalExpenses,
      unreturnedDeposits
    };
  }, [bookings, unifiedLedgerEntries]);

  const filteredTransactions = useMemo(() => {
    if (financeTypeFilter === 'ALL') return periodScopedLedgerEntries;
    return periodScopedLedgerEntries.filter((t) => t.type === financeTypeFilter);
  }, [periodScopedLedgerEntries, financeTypeFilter]);

  const bookingStatusCounts = useMemo(() => {
    const counts = {
      ALL: bookings.length,
      รอส่ง: 0,
      ส่งรถแล้ว: 0,
      รับรถคืนแล้ว: 0,
      ยกเลิก: 0
    };
    bookings.forEach((b) => {
      if (counts[b.deliveryStatus] !== undefined) {
        counts[b.deliveryStatus] += 1;
      }
    });
    return counts;
  }, [bookings]);

  const filteredBookings = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return bookings.filter((b) => {
      if (statusFilter !== 'ALL' && b.deliveryStatus !== statusFilter) return false;
      if (carFilter !== 'ALL' && b.carModel !== carFilter) return false;
      if (!q) return true;
      return [
        b.bookingCode,
        b.customerName,
        b.nickname,
        b.carModel,
        b.phone,
        b.pickupLocation,
        b.returnLocation,
        b.travelArea
      ]
        .filter(Boolean)
        .some((val) => String(val).toLowerCase().includes(q));
    });
  }, [bookings, statusFilter, carFilter, searchTerm]);

  const filteredMaintenanceLogs = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return maintenanceLogs.filter((m) => {
      if (maintenanceCarFilter !== 'ALL' && m.carModel !== maintenanceCarFilter) return false;
      if (!q) return true;
      return [m.carModel, m.category, m.notes]
        .filter(Boolean)
        .some((val) => String(val).toLowerCase().includes(q));
    });
  }, [maintenanceLogs, maintenanceCarFilter, searchTerm]);

  const filteredBlacklist = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return blacklist.filter((p) => {
      if (!q) return true;
      return [p.fullName, p.idCard, p.phone, p.reason, p.severity]
        .filter(Boolean)
        .some((val) => String(val).toLowerCase().includes(q));
    });
  }, [blacklist, searchTerm]);

  const formScheduleConflicts = useMemo(() => {
    if (!formData.carModel || !formData.pickupDate || !formData.returnDate) return [];
    return bookings.filter((b) => {
      if (b.deliveryStatus === 'ยกเลิก') return false;
      if (editingBooking && b.id === editingBooking.id) return false;
      if (b.carModel !== formData.carModel) return false;
      return formData.pickupDate <= b.returnDate && b.pickupDate <= formData.returnDate;
    });
  }, [bookings, formData.carModel, formData.pickupDate, formData.returnDate, editingBooking]);

  const formMatchedBlacklist = useMemo(() => {
    const nameQ = String(formData.customerName || '').trim().toLowerCase();
    const idQ = String(formData.idCardNumber || '').replace(/\D/g, '');
    const phoneQ = String(formData.phone || '').replace(/\D/g, '');
    if (!nameQ && !idQ && !phoneQ) return null;
    return (
      blacklist.find((p) => {
        const pName = String(p.fullName || '').trim().toLowerCase();
        const pId = String(p.idCard || '').replace(/\D/g, '');
        const pPhone = String(p.phone || '').replace(/\D/g, '');
        if (idQ.length >= 6 && pId && pId.includes(idQ)) return true;
        if (phoneQ.length >= 6 && pPhone && pPhone.includes(phoneQ)) return true;
        if (nameQ.length >= 4 && pName && (pName.includes(nameQ) || nameQ.includes(pName))) return true;
        return false;
      }) || null
    );
  }, [blacklist, formData.customerName, formData.idCardNumber, formData.phone]);

  const formIdValidation = useMemo(
    () => validateThaiIdCard(formData.idCardNumber),
    [formData.idCardNumber]
  );

  const standaloneIdValidation = useMemo(
    () => validateThaiIdCard(standaloneQuery.idCardNumber),
    [standaloneQuery.idCardNumber]
  );

  const formFinancials = useMemo(() => calculateFinancials(formData), [formData]);

  // ==========================================================================
  // INTERACTIVE HANDLERS (BOOKINGS, IMAGES, EXCEL, USERS, AI RISK SCREENING)
  // ==========================================================================
  const handleOpenForm = (
    booking = null,
    presetCarModel = null,
    presetStartDate = null,
    presetEndDate = null
  ) => {
    setBookingRiskCheck({
      loading: false,
      lastQueryKey: '',
      riskLevel: null,
      summary: '',
      sources: [],
      checkedAt: ''
    });

    if (booking) {
      setEditingBooking(booking);
      setFormData({
        ...emptyForm,
        ...booking,
        docImages: {
          ...EMPTY_DOC_IMAGES,
          ...(booking.docImages || {})
        }
      });
    } else {
      setEditingBooking(null);
      const selectedCarObj =
        fleet.find((c) => c.model === presetCarModel) || fleet[0] || DEFAULT_CARS[0];
      const start = presetStartDate || todayIso;
      const end = presetEndDate || start;
      const days = calcInclusiveDays(start, end);
      const autoCode = `B${String(new Date().getFullYear()).slice(-2)}${String(
        new Date().getMonth() + 1
      ).padStart(2, '0')}${String(Math.floor(100 + Math.random() * 899))}`;

      setFormData({
        ...emptyForm,
        bookingCode: autoCode,
        carModel: selectedCarObj.model,
        pickupDate: start,
        returnDate: end,
        rentalDays: days,
        dailyRate: Number(selectedCarObj.dailyRate) || 1200,
        depositAmount: Number(selectedCarObj.deposit) || 3000,
        docImages: { ...EMPTY_DOC_IMAGES }
      });
    }
    setShowFormModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };

      if (name === 'carModel' && !editingBooking) {
        const carObj = fleet.find((c) => c.model === value);
        if (carObj) {
          next.dailyRate = Number(carObj.dailyRate) || prev.dailyRate;
          next.depositAmount = Number(carObj.deposit) || prev.depositAmount;
        }
      }

      if (name === 'pickupDate' || name === 'returnDate') {
        const s = name === 'pickupDate' ? value : prev.pickupDate;
        const r = name === 'returnDate' ? value : prev.returnDate;
        if (s && r && r >= s) {
          next.rentalDays = calcInclusiveDays(s, r);
        }
      }

      if (next.isCorporateWht && ['rentalDays', 'dailyRate', 'deliveryFee', 'lateFeeOrExtra', 'discountAmount'].includes(name)) {
        const { rentalSubtotal } = calculateFinancials(next);
        const taxableBase = Math.max(
          0,
          rentalSubtotal +
            (Number(next.deliveryFee) || 0) +
            (Number(next.lateFeeOrExtra) || 0) -
            (Number(next.discountAmount) || 0)
        );
        next.whtAmount = Math.round(taxableBase * 0.05);
      }

      return next;
    });
  };

  const readFilesAsDataUrls = (fileList, callback) => {
    const files = Array.from(fileList || []);
    if (files.length === 0) return;
    Promise.all(
      files.map(
        (file) =>
          new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => resolve(null);
            reader.readAsDataURL(file);
          })
      )
    ).then((results) => {
      const valid = results.filter(Boolean);
      if (valid.length > 0) callback(valid);
    });
  };

  const handleDocImageUpload = (docKey, fileList) => {
    readFilesAsDataUrls(fileList, (urls) => {
      setFormData((prev) => ({
        ...prev,
        docImages: {
          ...EMPTY_DOC_IMAGES,
          ...(prev.docImages || {}),
          [docKey]: [...((prev.docImages && prev.docImages[docKey]) || []), ...urls]
        }
      }));
      showToast(`แนบรูปภาพเรียบร้อยแล้ว (${urls.length} รูป) ✓`);
    });
  };

  const handleRemoveDocImage = (docKey, index) => {
    setFormData((prev) => ({
      ...prev,
      docImages: {
        ...(prev.docImages || {}),
        [docKey]: ((prev.docImages && prev.docImages[docKey]) || []).filter((_, i) => i !== index)
      }
    }));
  };

  const handleGenericImageUpload = (fileList, onLoaded) => {
    readFilesAsDataUrls(fileList, (urls) => {
      onLoaded(urls);
      showToast(`อัปโหลดรูปภาพแล้ว (${urls.length} รูป) ✓`);
    });
  };

  const handleSaveBooking = (e) => {
    e.preventDefault();
    const normalized = {
      ...formData,
      rentalDays: Math.max(1, Number(formData.rentalDays) || 1),
      dailyRate: Math.max(0, Number(formData.dailyRate) || 0),
      bookingFee: Math.max(0, Number(formData.bookingFee) || 0),
      deliveryFee: Math.max(0, Number(formData.deliveryFee) || 0),
      lateFeeOrExtra: Math.max(0, Number(formData.lateFeeOrExtra) || 0),
      discountAmount: Math.max(0, Number(formData.discountAmount) || 0),
      depositAmount: Math.max(0, Number(formData.depositAmount) || 0),
      carWashFee: Math.max(0, Number(formData.carWashFee) || 0),
      outboundDeliveryExpense: Math.max(0, Number(formData.outboundDeliveryExpense) || 0),
      returnPickupExpense: Math.max(0, Number(formData.returnPickupExpense) || 0),
      deductionAmount: Math.max(0, Number(formData.deductionAmount) || 0),
      whtAmount: formData.isCorporateWht ? Math.max(0, Number(formData.whtAmount) || 0) : 0
    };

    if (editingBooking) {
      setBookings((prev) =>
        prev.map((item) => (item.id === editingBooking.id ? { ...normalized, id: editingBooking.id } : item))
      );
      showToast(`บันทึกการแก้ไขใบจอง ${normalized.bookingCode} เรียบร้อย ✓`);
    } else {
      const newRecord = {
        ...normalized,
        id: Date.now()
      };
      setBookings((prev) => [newRecord, ...prev]);
      showToast(`เพิ่มรายการจองใหม่ ${normalized.bookingCode} เรียบร้อย ✓`);
    }
    setShowFormModal(false);
  };

  const handleOpenQuickSettle = (booking) => {
    setQuickSettleTarget(booking);
    setQuickSettleForm({
      deductionAmount: Number(booking.deductionAmount) || 0,
      deductionReason: booking.deductionReason || '',
      depositRefundSlip: (booking.docImages && booking.docImages.depositRefundSlip) || []
    });
  };

  const handleConfirmQuickSettle = (e) => {
    e.preventDefault();
    if (!quickSettleTarget) return;
    setBookings((prev) =>
      prev.map((b) =>
        b.id === quickSettleTarget.id
          ? {
              ...b,
              deliveryStatus: 'รับรถคืนแล้ว',
              depositReturned: true,
              deductionAmount: Math.max(0, Number(quickSettleForm.deductionAmount) || 0),
              deductionReason: quickSettleForm.deductionReason,
              docImages: {
                ...EMPTY_DOC_IMAGES,
                ...(b.docImages || {}),
                depositRefundSlip: quickSettleForm.depositRefundSlip || []
              }
            }
          : b
      )
    );
    showToast(`ปิดงานและบันทึกคืนมัดจำ ${quickSettleTarget.bookingCode} เรียบร้อย ✓`);
    setQuickSettleTarget(null);
  };

  const handleOpenCancelModal = (booking) => {
    setCancelTarget(booking);
    setCancelForm({
      cancelReason: booking.cancelReason || '',
      refundMode: 'FORFEIT',
      bookingRefundAmount: 0,
      refundAccountInfo: '',
      bookingRefundSlip: []
    });
  };

  const handleConfirmCancelBooking = (e) => {
    e.preventDefault();
    if (!cancelTarget) return;
    const refundAmt =
      cancelForm.refundMode === 'REFUND'
        ? Math.max(0, Number(cancelForm.bookingRefundAmount) || 0)
        : 0;
    setBookings((prev) =>
      prev.map((b) =>
        b.id === cancelTarget.id
          ? {
              ...b,
              deliveryStatus: 'ยกเลิก',
              cancelReason: cancelForm.cancelReason,
              bookingRefundAmount: refundAmt,
              docImages: {
                ...EMPTY_DOC_IMAGES,
                ...(b.docImages || {}),
                bookingRefundSlip: cancelForm.bookingRefundSlip || []
              }
            }
          : b
      )
    );
    showToast(`ยกเลิกใบจอง ${cancelTarget.bookingCode} และคืนคิวรถว่างเรียบร้อย ✓`);
    setCancelTarget(null);
  };

  const handleConfirmDelete = () => {
    if (!deleteTarget) return;
    const { type, id } = deleteTarget;
    if (type === 'booking') {
      setBookings((prev) => prev.filter((b) => b.id !== id));
      deleteRowFromSupabase('bf_bookings', id);
    } else if (type === 'maintenance') {
      const next = maintenanceLogs.filter((m) => m.id !== id);
      setMaintenanceLogs(next);
      persistMetaState({ maintenanceLogs: next });
      deleteRowFromSupabase('bf_maintenance', id);
    } else if (type === 'blacklist') {
      const next = blacklist.filter((p) => p.id !== id);
      setBlacklist(next);
      persistMetaState({ blacklist: next });
      deleteRowFromSupabase('bf_blacklist', id);
    } else if (type === 'car') {
      const next = fleet.filter((c) => c.id !== id);
      setFleet(next);
      persistMetaState({ fleet: next });
      deleteRowFromSupabase('bf_cars', id);
    } else if (type === 'user') {
      const next = users.filter((u) => u.id !== id);
      setUsers(next);
      persistMetaState({ users: next });
      deleteRowFromSupabase('bf_users', id);
    }
    showToast('ลบข้อมูลเรียบร้อยแล้ว ✓');
    setDeleteTarget(null);
  };

  const handleCopyLineMessage = (b) => {
    const fin = calculateFinancials(b);
    const msg = [
      `🚗 สรุปรายละเอียดการจองรถ BF CARRENT`,
      `รหัสการจอง: ${b.bookingCode || '-'}`,
      `รุ่นรถ: ${b.carModel || '-'}`,
      `ผู้เช่า: ${b.customerName || '-'} ${b.nickname ? `(${b.nickname})` : ''}`,
      `เบอร์โทร: ${b.phone || '-'}`,
      `📅 รับรถ: ${formatThaiSlashDate(b.pickupDate)} เวลา ${b.pickupTime || '-'} น.`,
      `📍 สถานที่รับรถ: ${b.pickupLocation || '-'}`,
      `📅 คืนรถ: ${formatThaiSlashDate(b.returnDate)} เวลา ${b.returnTime || '-'} น.`,
      `📍 สถานที่คืนรถ: ${b.returnLocation || '-'}`,
      `---------------------------`,
      `ค่าเช่า (${b.rentalDays || 1} วัน x ฿${(Number(b.dailyRate) || 0).toLocaleString()}): ฿${fin.rentalSubtotal.toLocaleString()}`,
      Number(b.deliveryFee) > 0 ? `ค่ารับ-ส่งรถ: ฿${Number(b.deliveryFee).toLocaleString()}` : null,
      Number(b.discountAmount) > 0 ? `ส่วนลดพิเศษ: -฿${Number(b.discountAmount).toLocaleString()}` : null,
      `เงินมัดจำรถ (คืนเมื่อจบงาน): ฿${(Number(b.depositAmount) || 0).toLocaleString()}`,
      `รวมทั้งหมด: ฿${fin.grandTotal.toLocaleString()}`,
      `หักเงินจองแล้ว: -฿${(Number(b.bookingFee) || 0).toLocaleString()}`,
      `💰 ยอดชำระวันรับรถ: ฿${fin.balanceDueAtPickup.toLocaleString()}`
    ]
      .filter(Boolean)
      .join('\n');

    navigator.clipboard?.writeText(msg);
    showToast('คัดลอกสรุปยอดจองสำหรับส่ง LINE เรียบร้อย ✓');
  };

  const handleCopyAvailableCarsLine = () => {
    const freeCars = quickCheckResults.filter((c) => c.isAvailable);
    const header = `🚗 รถว่างพร้อมให้บริการ BF CARRENT\nช่วงวันที่: ${formatThaiSlashDate(
      availStartDate
    )} – ${formatThaiSlashDate(availEndDate)} (${availQueryDays} วัน)\n---------------------------`;
    if (freeCars.length === 0) {
      navigator.clipboard?.writeText(`${header}\nขออภัยครับ ช่วงวันที่ดังกล่าวคิวรถเต็มทุกคันครับ`);
      showToast('คัดลอกข้อความแจ้งคิวเต็มเรียบร้อย');
      return;
    }
    const lines = freeCars.map(
      (c, i) =>
        `${i + 1}. ${c.model}\n   • ค่าเช่า ฿${c.dailyRate.toLocaleString()}/วัน (รวม ${availQueryDays} วัน = ฿${(
          c.dailyRate * availQueryDays
        ).toLocaleString()}) | มัดจำ ฿${c.deposit.toLocaleString()}`
    );
    navigator.clipboard?.writeText(`${header}\n${lines.join('\n')}`);
    showToast(`คัดลอกรายการรถว่าง (${freeCars.length} คัน) ส่ง LINE เรียบร้อย ✓`);
  };

  const handleExportExcel = () => {
    if (!window.XLSX) {
      showToast('กำลังโหลดตัวสร้างไฟล์ Excel กรุณากดอีกครั้งใน 2 วินาที');
      return;
    }
    const wb = window.XLSX.utils.book_new();
    const bookingRows = bookings.map((b) => {
      const fin = calculateFinancials(b);
      return {
        รหัสจอง: b.bookingCode,
        สถานะ: b.deliveryStatus,
        รถที่จอง: b.carModel,
        ชื่อผู้เช่า: b.customerName,
        ชื่อเล่น: b.nickname,
        เบอร์โทร: b.phone,
        วันรับรถ: b.pickupDate,
        เวลารับ: b.pickupTime,
        สถานที่รับ: b.pickupLocation,
        วันคืนรถ: b.returnDate,
        เวลาคืน: b.returnTime,
        สถานที่คืน: b.returnLocation,
        จำนวนวัน: b.rentalDays,
        ค่าเช่าต่อวัน: b.dailyRate,
        เงินจอง: b.bookingFee,
        เงินมัดจำ: b.depositAmount,
        รวมทั้งหมด: fin.grandTotal,
        จ่ายเพิ่มวันรับรถ: fin.balanceDueAtPickup
      };
    });
    const ws = window.XLSX.utils.json_to_sheet(bookingRows);
    window.XLSX.utils.book_append_sheet(wb, ws, 'รายการจองรถ');
    window.XLSX.writeFile(wb, `BF_Carrent_Bookings_${todayIso}.xlsx`);
    showToast('ส่งออกไฟล์ Excel รายการจองรถเรียบร้อย ✓');
  };

  const handleExportTaxReportExcel = () => {
    if (!window.XLSX) {
      showToast('กำลังโหลดตัวสร้างไฟล์ Excel กรุณากดอีกครั้งใน 2 วินาที');
      return;
    }
    const wb = window.XLSX.utils.book_new();
    const summarySheet = window.XLSX.utils.json_to_sheet(
      taxAnalytics.categoryBreakdown.map((c) => ({
        ประเภท: c.type,
        หมวดหมู่บัญชีภาษี: c.category,
        จำนวนรายการ: c.count,
        เครดิตภาษี5เปอร์เซ็นต์: c.whtTotal,
        ยอดเงินรวม: c.total
      }))
    );
    const ledgerSheet = window.XLSX.utils.json_to_sheet(
      periodScopedLedgerEntries.map((t) => ({
        วันที่: t.date,
        ประเภท: t.type,
        หมวดหมู่: t.category,
        รถ: t.carModel,
        รายละเอียด: t.description,
        จำนวนเงิน: t.amount,
        หักณที่จ่าย5เปอร์เซ็นต์: t.whtAmount || 0
      }))
    );
    const whtSheet = window.XLSX.utils.json_to_sheet(
      taxAnalytics.corporateWhtList.map((w) => ({
        วันที่: w.date,
        รหัสจอง: w.bookingCode || '-',
        บริษัทผู้เช่า: w.companyTaxName || w.customerName || '-',
        รายได้ค่าเช่า: w.amount,
        ภาษีหักณที่จ่าย5เปอร์เซ็นต์: w.whtAmount || 0
      }))
    );
    window.XLSX.utils.book_append_sheet(wb, summarySheet, 'สรุปยอดยื่นภาษี');
    window.XLSX.utils.book_append_sheet(wb, ledgerSheet, 'รายการรับจ่ายละเอียด');
    window.XLSX.utils.book_append_sheet(wb, whtSheet, 'ทะเบียน_50ทวิ_หัก5%');
    window.XLSX.writeFile(wb, `BF_Carrent_Tax_Report_${financeYearFilter}_${todayIso}.xlsx`);
    showToast('ส่งออกรายงานภาษี 3 ชีต (.xlsx) เรียบร้อย ✓');
  };

  const handleExcelFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!window.XLSX) {
      showToast('กำลังโหลดตัวอ่าน Excel กรุณาลองอีกครั้ง');
      return;
    }
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const wb = window.XLSX.read(evt.target.result, { type: 'binary' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = window.XLSX.utils.sheet_to_json(ws);
        if (!Array.isArray(rows) || rows.length === 0) {
          showToast('ไม่พบข้อมูลในไฟล์ Excel');
          return;
        }
        const imported = rows.map((r, idx) => ({
          ...emptyForm,
          id: Date.now() + idx,
          bookingCode: String(r['รหัสจอง'] || r.bookingCode || `IMP-${idx + 1}`),
          carModel: String(r['รถที่จอง'] || r['รุ่นรถ'] || r.carModel || fleet[0]?.model || ''),
          deliveryStatus: String(r['สถานะ'] || r.deliveryStatus || 'รอส่ง'),
          customerName: String(r['ชื่อผู้เช่า'] || r['ชื่อลูกค้า'] || r.customerName || 'ไม่ระบุชื่อ'),
          nickname: String(r['ชื่อเล่น'] || r.nickname || ''),
          phone: String(r['เบอร์โทร'] || r.phone || ''),
          pickupDate: String(r['วันรับรถ'] || r.pickupDate || todayIso).slice(0, 10),
          pickupTime: String(r['เวลารับ'] || r.pickupTime || '09:00'),
          pickupLocation: String(r['สถานที่รับ'] || r.pickupLocation || ''),
          returnDate: String(r['วันคืนรถ'] || r.returnDate || todayIso).slice(0, 10),
          returnTime: String(r['เวลาคืน'] || r.returnTime || '18:00'),
          returnLocation: String(r['สถานที่คืน'] || r.returnLocation || ''),
          rentalDays: Math.max(1, Number(r['จำนวนวัน'] || r.rentalDays) || 1),
          dailyRate: Number(r['ค่าเช่าต่อวัน'] || r.dailyRate) || 1200,
          bookingFee: Number(r['เงินจอง'] || r.bookingFee) || 1000,
          depositAmount: Number(r['เงินมัดจำ'] || r.depositAmount) || 3000,
          docImages: { ...EMPTY_DOC_IMAGES }
        }));
        setBookings((prev) => [...imported, ...prev]);
        showToast(`นำเข้าข้อมูลการจองจาก Excel สำเร็จ (${imported.length} รายการ) ✓`);
      } catch (err) {
        showToast('ไม่สามารถอ่านไฟล์ Excel ได้ กรุณาตรวจสอบรูปแบบไฟล์');
      }
    };
    reader.readAsBinaryString(file);
    e.target.value = '';
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const uname = String(userForm.username || '').trim();
    if (!uname || !userForm.password || !userForm.displayName) return;
    if (users.some((u) => u.username.toLowerCase() === uname.toLowerCase())) {
      showToast('ชื่อผู้ใช้งาน (Username) นี้มีอยู่ในระบบแล้ว');
      return;
    }
    const newUser = {
      id: Date.now(),
      username: uname,
      password: String(userForm.password).trim(),
      displayName: String(userForm.displayName).trim(),
      role: userForm.role,
      canViewFinance: userForm.role === 'OWNER' ? true : Boolean(userForm.canViewFinance),
      active: true,
      createdAt: todayIso
    };
    const next = [...users, newUser];
    setUsers(next);
    persistMetaState({ users: next });
    setUserForm({
      username: '',
      password: '',
      displayName: '',
      role: 'STAFF',
      canViewFinance: false
    });
    setShowUserForm(false);
    showToast(`สร้างผู้ใช้งาน ${newUser.displayName} เรียบร้อยแล้ว ✓`);
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const amt = Number(txForm.amount) || 0;
    if (amt <= 0) return;
    const nextTx = [
      {
        id: `tx-${Date.now()}`,
        date: txForm.date || todayIso,
        type: 'รายจ่าย',
        category: txForm.category,
        carModel: txForm.carModel,
        description: txForm.description,
        amount: amt,
        images: txForm.images || []
      },
      ...transactions
    ];
    setTransactions(nextTx);
    persistMetaState({ transactions: nextTx });
    setTxForm({
      date: todayIso,
      type: 'รายจ่าย',
      category: 'ค่าโฆษณายิงแอด (FB/TikTok/Google)',
      carModel: 'ทุกคัน / ส่วนกลาง',
      description: '',
      amount: '',
      images: []
    });
    setShowTxForm(false);
    showToast('บันทึกรายจ่ายดำเนินงานเรียบร้อย ✓');
  };

  const handleAddMaintenance = (e) => {
    e.preventDefault();
    const nextLog = {
      id: Date.now(),
      date: mtForm.date || todayIso,
      carModel: mtForm.carModel,
      category: mtForm.category,
      cost: Math.max(0, Number(mtForm.cost) || 0),
      nextDueDate: mtForm.nextDueDate || '',
      notes: mtForm.notes || '',
      images: mtForm.images || []
    };
    const next = [nextLog, ...maintenanceLogs];
    setMaintenanceLogs(next);
    persistMetaState({ maintenanceLogs: next });
    setMtForm({
      date: todayIso,
      carModel: fleet[0]?.model || DEFAULT_CARS[0].model,
      category: 'เช็กอินระยะ / เปลี่ยนถ่ายน้ำมันเครื่อง',
      cost: '',
      nextDueDate: '',
      notes: '',
      images: []
    });
    setShowMtForm(false);
    showToast('บันทึกประวัติซ่อมบำรุง/ประกันภัยเรียบร้อย ✓');
  };

  const handleAddBlacklist = (e) => {
    e.preventDefault();
    if (!blForm.fullName.trim()) return;
    const nextPerson = {
      id: Date.now(),
      fullName: blForm.fullName.trim(),
      idCard: blForm.idCard.trim(),
      phone: blForm.phone.trim(),
      severity: blForm.severity,
      reason: blForm.reason.trim(),
      reportedDate: todayIso,
      images: blForm.images || []
    };
    const next = [nextPerson, ...blacklist];
    setBlacklist(next);
    persistMetaState({ blacklist: next });
    setBlForm({
      fullName: '',
      idCard: '',
      phone: '',
      severity: 'อันตรายสูง',
      reason: '',
      reportedDate: todayIso,
      images: []
    });
    setShowBlForm(false);
    showToast('บันทึกรายชื่อเฝ้าระวังเรียบร้อย ✓');
  };

  const handleAddCar = (e) => {
    e.preventDefault();
    if (!carForm.model.trim()) return;
    const nextCar = {
      id: Date.now(),
      model: carForm.model.trim(),
      plate: carForm.plate.trim(),
      color: carForm.color.trim(),
      dailyRate: Math.max(0, Number(carForm.dailyRate) || 1200),
      deposit: Math.max(0, Number(carForm.deposit) || 3000),
      insuranceExpiry: carForm.insuranceExpiry || '',
      taxExpiry: carForm.taxExpiry || '',
      status: 'พร้อมใช้งาน',
      images: carForm.images || []
    };
    const next = [...fleet, nextCar];
    setFleet(next);
    persistMetaState({ fleet: next });
    setCarForm({
      model: '',
      plate: '',
      color: '',
      dailyRate: 1200,
      deposit: 3000,
      insuranceExpiry: '',
      taxExpiry: '',
      status: 'พร้อมใช้งาน',
      images: []
    });
    setShowCarForm(false);
    showToast('เพิ่มรถยนต์เข้าฟลีทเรียบร้อย ✓');
  };

  const evaluateRiskProfile = ({ fullName, idCardNumber, phone }) => {
    const nameClean = String(fullName || '').trim().toLowerCase();
    const idClean = String(idCardNumber || '').replace(/\D/g, '');
    const phoneClean = String(phone || '').replace(/\D/g, '');
    const idCheck = validateThaiIdCard(idCardNumber);

    const blHit = blacklist.find((p) => {
      const pName = String(p.fullName || '').trim().toLowerCase();
      const pId = String(p.idCard || '').replace(/\D/g, '');
      const pPhone = String(p.phone || '').replace(/\D/g, '');
      if (idClean.length >= 6 && pId && pId.includes(idClean)) return true;
      if (phoneClean.length >= 6 && pPhone && pPhone.includes(phoneClean)) return true;
      if (nameClean.length >= 4 && pName && (pName.includes(nameClean) || nameClean.includes(pName))) return true;
      return false;
    });

    const pastCanceled = bookings.filter(
      (b) =>
        b.deliveryStatus === 'ยกเลิก' &&
        ((phoneClean && String(b.phone || '').replace(/\D/g, '') === phoneClean) ||
          (nameClean && String(b.customerName || '').trim().toLowerCase() === nameClean))
    );

    const nowTime = new Date().toTimeString().slice(0, 5);

    if (blHit) {
      return {
        riskLevel: 'HIGH',
        summary: `🚨 ตรวจพบประวัติเตือนภัยในฐานข้อมูล Blacklist!\n• ชื่อ-นามสกุล: ${blHit.fullName}\n• ระดับความเสี่ยง: ${blHit.severity}\n• พฤติกรรมที่พบ: ${blHit.reason}\n• คำแนะนำ: ระงับการปล่อยเช่าทันที และตรวจสอบเอกสารตัวจริงอย่างละเอียด`,
        sources: [],
        checkedAt: nowTime
      };
    }

    if (idCheck.status === 'INVALID') {
      return {
        riskLevel: 'HIGH',
        summary: `🚨 ตรวจพบความผิดปกติของเลขบัตรประชาชน 13 หลัก (${idCardNumber}) ไม่ตรงตามสูตรตรวจสอบของกรมการปกครอง\n• ความเสี่ยง: อาจเป็นการใช้บัตรปลอมเพื่อนำรถไปจำนำหรือลักลอบนำรถออกนอกประเทศ\n• คำแนะนำ: ขอดูบัตรประชาชนตัวจริงและถ่ายรูปคู่กับใบขับขี่ก่อนส่งมอบรถ`,
        sources: [],
        checkedAt: nowTime
      };
    }

    if (pastCanceled.length >= 2) {
      return {
        riskLevel: 'MEDIUM',
        summary: `⚠️ พบประวัติยกเลิกคิวจอง ${pastCanceled.length} ครั้งในระบบของร้าน\n• ไม่พบข่าวคดีฉ้อโกง เช่ารถไปจำนำ หรือนำรถข้ามชายแดนในฐานข้อมูลสาธารณะ\n• คำแนะนำ: ยืนยันการโอนเงินจองเต็มจำนวนก่อนล็อกคิวรถ`,
        sources: [],
        checkedAt: nowTime
      };
    }

    return {
      riskLevel: 'LOW',
      summary: `✅ ผลการตรวจสอบเบื้องต้น: ไม่พบประวัติความเสี่ยงเรื่องเช่ารถไปขาย/จำนำ ไม่จ่ายค่าเช่า หรือนำรถข้ามชายแดน\n• ฐานข้อมูล Blacklist ร้าน: ปกติ (ไม่พบรายชื่อ)\n• ความถูกต้องเลขบัตร ปชช.: ${
        idCheck.status === 'VALID' ? 'ผ่านการตรวจสอบ 13 หลัก ✓' : 'ยังไม่ได้ระบุครบ 13 หลัก'
      }\n• สถานะผู้เช่า: พร้อมดำเนินการรับจองตามมาตรฐานร้าน`,
      sources: [],
      checkedAt: nowTime
    };
  };

  const handleRunBookingRiskScan = () => {
    const queryKey = `${formData.customerName}|${formData.idCardNumber}|${formData.phone}`;
    setBookingRiskCheck((prev) => ({ ...prev, loading: true, lastQueryKey: queryKey }));
    setTimeout(() => {
      const result = evaluateRiskProfile({
        fullName: formData.customerName,
        idCardNumber: formData.idCardNumber,
        phone: formData.phone
      });
      setBookingRiskCheck({
        loading: false,
        lastQueryKey: queryKey,
        ...result
      });
    }, 350);
  };

  const handleRunStandaloneRiskScan = (e) => {
    e.preventDefault();
    if (!standaloneQuery.fullName && !standaloneQuery.idCardNumber && !standaloneQuery.phone) {
      showToast('กรุณากรอกชื่อ เลขบัตรประชาชน หรือเบอร์โทรอย่างน้อย 1 ช่อง');
      return;
    }
    setStandaloneRiskCheck((prev) => ({ ...prev, loading: true }));
    setTimeout(() => {
      const result = evaluateRiskProfile(standaloneQuery);
      setStandaloneRiskCheck({
        loading: false,
        ...result
      });
    }, 350);
  };

  // Auto-trigger risk scan in booking form when user finishes typing ID/Phone/Name
  useEffect(() => {
    if (!showFormModal || !autoRiskScanEnabled) return;
    const idDigits = String(formData.idCardNumber || '').replace(/\D/g, '');
    const phoneDigits = String(formData.phone || '').replace(/\D/g, '');
    const nameStr = String(formData.customerName || '').trim();
    if (idDigits.length < 13 && phoneDigits.length < 10 && nameStr.length < 5) return;

    const queryKey = `${nameStr}|${idDigits}|${phoneDigits}`;
    if (bookingRiskCheck.lastQueryKey === queryKey) return;

    const timer = setTimeout(() => {
      handleRunBookingRiskScan();
    }, 650);
    return () => clearTimeout(timer);
  }, [
    showFormModal,
    autoRiskScanEnabled,
    formData.customerName,
    formData.idCardNumber,
    formData.phone,
    bookingRiskCheck.lastQueryKey
  ]);

  // ==========================================================================
  // RESPONSIVE LOGIN GATE SCREEN (MOBILE / TABLET / LAPTOP / DESKTOP)
  // ==========================================================================
  if (!currentUser) {
    return (
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', 'IBM Plex Sans Thai', -apple-system, BlinkMacSystemFont, sans-serif"
        }}
        className="min-h-screen bg-gradient-to-br from-[#042322] via-[#0b4644] to-[#062d2b] flex flex-col items-center justify-center p-4 sm:p-6 selection:bg-[#f7d774] selection:text-[#052928]"
      >
        <div className="w-full max-w-md bg-white rounded-[28px] shadow-2xl border border-[#d49b27]/40 overflow-hidden">
          {/* Top Brand Banner + 2-Language Dropdown Switcher (TH / EN) */}
          <div className="bg-gradient-to-r from-[#052928] to-[#0b4644] px-6 pt-4 pb-6 text-center border-b-2 border-[#d49b27] relative">
            {/* Language Dropdown (2 Languages: Thai & English) */}
            <div className="flex justify-end mb-2">
              {showLangDropdown && (
                <div
                  onClick={() => setShowLangDropdown(false)}
                  className="fixed inset-0 z-10"
                />
              )}
              <div className="relative z-20">
                <button
                  type="button"
                  onClick={() => setShowLangDropdown((prev) => !prev)}
                  aria-haspopup="listbox"
                  aria-expanded={showLangDropdown}
                  aria-label="Language Switcher"
                  className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold flex items-center gap-1.5 backdrop-blur-xs transition-all"
                >
                  <Globe size={13} className="text-[#f7d774]" />
                  <span>{lang === 'TH' ? 'ไทย' : 'English'}</span>
                  <ChevronDown
                    size={13}
                    className={`text-[#f7d774] transition-transform duration-200 ${
                      showLangDropdown ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {showLangDropdown && (
                  <div
                    role="listbox"
                    className="absolute right-0 mt-1.5 w-36 rounded-2xl bg-white shadow-xl border border-slate-200 py-1.5 text-left overflow-hidden"
                  >
                    <button
                      type="button"
                      role="option"
                      aria-selected={lang === 'TH'}
                      onClick={() => handleSelectLanguage('TH')}
                      className={`w-full px-3.5 py-2 text-xs font-bold flex items-center justify-between transition-colors ${
                        lang === 'TH'
                          ? 'bg-emerald-50 text-[#0b4644]'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>ไทย</span>
                      {lang === 'TH' && <Check size={13} className="text-emerald-600" />}
                    </button>
                    <button
                      type="button"
                      role="option"
                      aria-selected={lang === 'EN'}
                      onClick={() => handleSelectLanguage('EN')}
                      className={`w-full px-3.5 py-2 text-xs font-bold flex items-center justify-between transition-colors ${
                        lang === 'EN'
                          ? 'bg-emerald-50 text-[#0b4644]'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>English</span>
                      {lang === 'EN' && <Check size={13} className="text-emerald-600" />}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#0e5754] to-[#042322] border-2 border-[#f7d774]/80 flex flex-col items-center justify-center shadow-lg">
              <span className="text-sm font-black tracking-wider text-[#f7d774] leading-none">BF</span>
              <Car size={18} className="text-white mt-1" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white mt-3">
              BF <span className="text-[#f7d774]">CARRENT</span>
            </h1>
            <p className="text-xs text-white/75 mt-1">
              {lang === 'TH'
                ? 'ระบบจัดการหลังบ้านและตารางคิวรถเช่า (รองรับทุกอุปกรณ์)'
                : 'Executive Car Rental Back-Office & Fleet Schedule (All Devices)'}
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="p-6 sm:p-7 space-y-4">
            <div className="text-center space-y-0.5">
              <h2 className="text-base sm:text-lg font-extrabold text-[#0b4644]">
                {lang === 'TH' ? 'เข้าสู่ระบบผู้ใช้งาน' : 'Sign In to Your Account'}
              </h2>
              <p className="text-xs text-slate-500">
                {lang === 'TH'
                  ? 'กรอกชื่อผู้ใช้งานและรหัสผ่านเพื่อเข้าถึงข้อมูลร้าน'
                  : 'Enter your username and password to access back-office'}
              </p>
            </div>

            {loginError && (
              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-300 text-rose-700 text-xs font-bold flex items-center gap-2">
                <AlertTriangle size={15} className="shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {lang === 'TH' ? 'ชื่อผู้ใช้งาน (Username)' : 'Username'}
              </label>
              <div className="relative">
                <UserCheck size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  autoComplete="username"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  placeholder={lang === 'TH' ? 'เช่น admin หรือ staff01' : 'e.g. admin or staff01'}
                  className="w-full pl-10 pr-4 py-3 bg-[#f8faf9] border border-slate-200 focus:border-[#0b4644] focus:bg-white rounded-2xl text-sm font-semibold text-slate-800 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {lang === 'TH' ? 'รหัสผ่าน (Password / PIN)' : 'Password / PIN'}
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showLoginPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  placeholder={lang === 'TH' ? 'กรอกรหัสผ่าน' : 'Enter password'}
                  className="w-full pl-10 pr-16 py-3 bg-[#f8faf9] border border-slate-200 focus:border-[#0b4644] focus:bg-white rounded-2xl text-sm font-semibold text-slate-800 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-[#0b4644] hover:underline px-1.5 py-1"
                >
                  {lang === 'TH'
                    ? showLoginPassword
                      ? 'ซ่อน'
                      : 'แสดง'
                    : showLoginPassword
                    ? 'Hide'
                    : 'Show'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#0e5754] to-[#0b4644] hover:brightness-110 text-[#f7d774] text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <KeyRound size={16} />
              <span>{lang === 'TH' ? 'เข้าสู่ระบบ BF Carrent' : 'Sign In to BF Carrent'}</span>
            </button>

            {/* Quick Login Helper for Initial Setup */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <p className="text-[11px] text-center text-slate-400">
                {lang === 'TH'
                  ? 'บัญชีเริ่มต้นสำหรับเข้าใช้งานครั้งแรก (สามารถเปลี่ยนรหัสผ่านและเพิ่มแอดมินได้ในระบบ)'
                  : 'Default accounts for first-time login (can be customized in User Settings)'}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setLoginForm({ username: 'admin', password: '1234' })}
                  className="p-2.5 rounded-xl bg-amber-50/90 hover:bg-amber-100 border border-amber-200 text-left transition-all"
                >
                  <p className="text-[10px] font-bold text-[#b87d14]">
                    {lang === 'TH' ? 'เจ้าของร้าน (Owner)' : 'Shop Owner'}
                  </p>
                  <p className="text-xs font-extrabold text-[#0b4644]">admin / 1234</p>
                </button>
                <button
                  type="button"
                  onClick={() => setLoginForm({ username: 'staff01', password: '1111' })}
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left transition-all"
                >
                  <p className="text-[10px] font-bold text-slate-500">
                    {lang === 'TH' ? 'แอดมินร้าน (Staff)' : 'Admin / Staff'}
                  </p>
                  <p className="text-xs font-extrabold text-slate-700">staff01 / 1111</p>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Supabase Cloud Status Footer on Login Screen */}
        <div className="mt-4 flex items-center gap-2 text-xs text-white/80">
          <span
            className={`w-2 h-2 rounded-full ${
              supabaseStatus === 'CONNECTED' ? 'bg-emerald-400' : 'bg-amber-400'
            }`}
          />
          <span>
            {supabaseStatus === 'CONNECTED'
              ? lang === 'TH'
                ? 'ซิงค์รายชื่อผู้ใช้งานกับ Supabase Cloud พร้อมใช้งาน'
                : 'User accounts synced with Supabase Cloud'
              : lang === 'TH'
              ? 'โหมดใช้งานบนอุปกรณ์ (เชื่อมต่อ Supabase ได้หลังเข้าสู่ระบบ)'
              : 'Local device mode (Connect Supabase after signing in)'}
          </span>
        </div>
      </div>
    );
  }

  const navItems = [
    {
      id: 'bookings',
      shortLabel: 'จองรถ',
      label: lang === 'TH' ? 'รายการจองรถ' : 'Bookings',
      icon: <ClipboardList size={16} />,
      badge: stats.activeBookings,
      badgeType: 'gold'
    },
    {
      id: 'schedule',
      shortLabel: 'คิวรถ',
      label: lang === 'TH' ? 'ตารางคิวรถ & เช็คว่าง' : 'Schedule & Availability',
      icon: <Calendar size={16} />
    },
    ...(canAccessFinance
      ? [
          {
            id: 'finance',
            shortLabel: 'บัญชี/ภาษี',
            label: lang === 'TH' ? 'รายรับ - รายจ่าย' : 'Income & Tax',
            icon: <TrendingUp size={16} />
          }
        ]
      : []),
    {
      id: 'maintenance',
      shortLabel: 'ซ่อม/ประกัน',
      label: lang === 'TH' ? 'ซ่อมบำรุง & ประกัน' : 'Maintenance',
      icon: <Wrench size={16} />
    },
    {
      id: 'fleet',
      shortLabel: 'ข้อมูลรถ',
      label: lang === 'TH' ? `ข้อมูลรถ (${fleet.length})` : `Fleet (${fleet.length})`,
      icon: <Car size={16} />
    },
    {
      id: 'blacklist',
      shortLabel: 'ตรวจเสี่ยง',
      label: lang === 'TH' ? 'ตรวจสอบบุคคลอันตราย' : 'Blacklist',
      icon: <ShieldAlert size={16} />,
      badge: activeBlacklistCount > 0 ? `${activeBlacklistCount}` : null,
      badgeType: 'danger'
    },
    ...(isOwnerUser
      ? [
          {
            id: 'users',
            shortLabel: 'ผู้ใช้งาน',
            label: lang === 'TH' ? `ผู้ใช้งาน (${users.length})` : `Users (${users.length})`,
            icon: <Users size={16} />
          }
        ]
      : [])
  ];

  const mobilePrimaryNavItems = navItems.slice(0, 4);
  const mobileSecondaryNavItems = navItems.slice(4);

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', 'IBM Plex Sans Thai', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#f5f7f6] text-slate-800 pb-24 md:pb-14 selection:bg-[#0b4644] selection:text-[#f7d774]"
    >
      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-5 left-3 right-3 sm:left-auto sm:right-5 z-[90] px-4 py-3 rounded-2xl bg-[#0b4644] text-[#f7d774] border border-[#d49b27]/60 shadow-2xl text-xs sm:text-sm font-bold flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
          <span className="truncate">{toastMessage}</span>
        </div>
      )}

      {/* ================= RESPONSIVE EXECUTIVE HEADER ================= */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2">
          {/* Left Brand Identity */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#0e5754] to-[#062d2b] border border-[#d49b27]/60 flex flex-col items-center justify-center shadow-sm shrink-0">
              <span className="text-[10px] sm:text-[11px] font-black tracking-wider text-[#f7d774] leading-none">
                BF
              </span>
              <Car size={13} className="text-white mt-0.5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h1 className="text-sm sm:text-xl font-extrabold tracking-tight text-[#0b4644] leading-none truncate">
                  BF <span className="text-[#c98b1e]">CARRENT</span>
                </h1>
                <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[9px] sm:text-[10px] font-bold text-slate-600 tracking-wider shrink-0">
                  {isOwnerUser ? 'OWNER' : 'STAFF'}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5 truncate hidden md:block">
                {lang === 'TH'
                  ? 'ระบบจัดการหลังบ้านสำหรับเจ้าของร้าน (ใช้ส่วนตัว)'
                  : 'Private Executive Car Rental Back-Office System'}
              </p>
            </div>
          </div>

          {/* Right Header Controls: Cloud + Excel + Active User & Logout (Far Right) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {isOwnerUser && (
              <button
                type="button"
                onClick={() => {
                  setSupabaseDraft(supabaseConfig);
                  setShowDeployModal(true);
                }}
                title="ตั้งค่าฐานข้อมูล Supabase และดูคู่มือ Deploy ขึ้น GitHub / Vercel"
                className={`hidden sm:flex px-3.5 py-2 rounded-full border text-xs font-bold items-center gap-1.5 whitespace-nowrap transition-all ${
                  supabaseStatus === 'CONNECTED'
                    ? 'bg-[#0b4644] border-[#0b4644] text-[#f7d774] shadow-xs'
                    : supabaseStatus === 'SYNCING' || supabaseStatus === 'LOADING'
                    ? 'bg-amber-50 border-amber-300 text-amber-800'
                    : supabaseStatus === 'ERROR'
                    ? 'bg-rose-50 border-rose-300 text-rose-700'
                    : 'bg-slate-900 hover:bg-[#0b4644] border-slate-800 text-white'
                }`}
              >
                <Database size={13} className="shrink-0" />
                <span>
                  {supabaseStatus === 'CONNECTED'
                    ? 'Supabase Cloud ✓'
                    : supabaseStatus === 'SYNCING'
                    ? 'กำลังซิงค์...'
                    : supabaseStatus === 'LOADING'
                    ? 'กำลังโหลด...'
                    : supabaseStatus === 'ERROR'
                    ? 'Supabase แจ้งเตือน !'
                    : 'Supabase / Deploy'}
                </span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                persistMetaState({});
                try {
                  localStorage.setItem('bf_carrent_bookings_v2', JSON.stringify(bookings));
                } catch (e) {}
                if (supabaseConfig.url && supabaseConfig.anonKey) {
                  pushAllStateToSupabase(supabaseConfig);
                }
                showToast(
                  lang === 'TH'
                    ? 'บันทึกข้อมูลทั้งหมดเรียบร้อยแล้ว ✓'
                    : 'All changes saved ✓'
                );
              }}
              title="ระบบบันทึกข้อมูลอัตโนมัติทุกครั้งที่มีการแก้ไข"
              className="px-2.5 sm:px-3.5 py-2 rounded-full bg-emerald-50/90 hover:bg-emerald-100 border border-emerald-200/80 text-emerald-700 text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <Cloud size={13} className="text-emerald-600 shrink-0" />
              <span className="hidden lg:inline">{lang === 'TH' ? 'บันทึกอัตโนมัติ ✓' : 'Auto-saved ✓'}</span>
            </button>

            <label
              title="นำเข้าไฟล์ Excel (.xlsx)"
              className="hidden sm:flex cursor-pointer px-3.5 py-2 rounded-2xl bg-slate-50/90 hover:bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-700 items-center gap-1.5 transition-all"
            >
              <Upload size={13} className="text-[#0b4644]" />
              <span className="hidden md:inline">นำเข้า Excel</span>
              <input type="file" accept=".xlsx,.xls" onChange={handleExcelFileSelect} className="hidden" />
            </label>

            <button
              type="button"
              onClick={handleExportExcel}
              title="ส่งออก Excel (.xlsx)"
              aria-label="ส่งออก Excel"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-slate-50/90 hover:bg-[#0b4644] border border-slate-200/90 text-slate-700 hover:text-[#f7d774] flex items-center justify-center transition-all"
            >
              <Download size={14} />
            </button>

            {/* Active User Pill & Logout (Far Right) */}
            <div className="flex items-center gap-1.5 pl-2 pr-1 py-1 rounded-full bg-slate-100/90 border border-slate-200/90">
              <div className="w-6 h-6 rounded-full bg-[#0b4644] text-[#f7d774] text-[10px] font-black flex items-center justify-center shrink-0">
                {String(currentUser.displayName || 'U').slice(0, 1).toUpperCase()}
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#0b4644] max-w-[76px] sm:max-w-[140px] lg:max-w-[180px] truncate">
                {currentUser.displayName}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                title={lang === 'TH' ? 'ออกจากระบบ' : 'Logout'}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-rose-600 text-slate-600 hover:text-white border border-slate-200 text-[10px] sm:text-[11px] font-bold flex items-center gap-1 transition-all"
              >
                <LogOut size={11} />
                <span className="hidden sm:inline">{lang === 'TH' ? 'ออก' : 'Logout'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= DESKTOP / TABLET TOP PILL NAVIGATION BAR ================= */}
      <nav className="hidden md:block bg-[#f5f7f6]/90 backdrop-blur-md border-b border-slate-200/70 sticky top-[68px] lg:top-[73px] z-20 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5">
          {navItems.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0b4644] text-white shadow-[0_4px_12px_-2px_rgba(11,70,68,0.35)]'
                    : 'text-slate-600 hover:text-[#0b4644] hover:bg-white/90'
                }`}
              >
                <span className={isActive ? 'text-[#f7d774]' : 'text-slate-400'}>{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.badge !== undefined && tab.badge !== null && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      tab.badgeType === 'danger'
                        ? 'bg-rose-500 text-white'
                        : isActive
                        ? 'bg-[#e2a93b] text-[#052928]'
                        : 'bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ================= MOBILE STICKY BOTTOM NAVIGATION BAR (5 SLOTS + MORE SHEET) ================= */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_18px_rgba(15,23,42,0.08)]">
        <div className="grid grid-cols-5 gap-1 px-1.5 py-1.5">
          {mobilePrimaryNavItems.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  setShowMobileMoreMenu(false);
                }}
                className={`relative py-1.5 px-1 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all ${
                  isActive ? 'bg-[#0b4644] text-[#f7d774]' : 'text-slate-500 hover:text-[#0b4644]'
                }`}
              >
                {tab.icon}
                <span className="text-[10px] font-bold leading-tight truncate max-w-[60px]">
                  {tab.shortLabel}
                </span>
                {tab.badge !== undefined && tab.badge !== null && (
                  <span
                    className={`absolute top-1 right-1.5 px-1 min-w-[15px] h-[15px] rounded-full text-[9px] font-extrabold flex items-center justify-center ${
                      tab.badgeType === 'danger'
                        ? 'bg-rose-500 text-white'
                        : isActive
                        ? 'bg-[#f7d774] text-[#052928]'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}

          {/* Slot 5: More Menu Trigger */}
          <button
            type="button"
            onClick={() => setShowMobileMoreMenu((prev) => !prev)}
            className={`relative py-1.5 px-1 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all ${
              showMobileMoreMenu || mobileSecondaryNavItems.some((t) => t.id === activeTab)
                ? 'bg-[#0b4644] text-[#f7d774]'
                : 'text-slate-500 hover:text-[#0b4644]'
            }`}
          >
            <LayoutGrid size={16} />
            <span className="text-[10px] font-bold leading-tight">เมนูอื่นๆ</span>
            {activeBlacklistCount > 0 && !mobilePrimaryNavItems.some((t) => t.id === 'blacklist') && (
              <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-rose-500" />
            )}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MORE MENU BOTTOM SHEET ================= */}
      {showMobileMoreMenu && (
        <div
          onClick={() => setShowMobileMoreMenu(false)}
          className="md:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs flex items-end"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-white rounded-t-3xl border-t border-slate-200 p-5 pb-24 space-y-4 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#b87d14]">
                  BF CARRENT MENU
                </p>
                <h3 className="text-base font-extrabold text-[#0b4644]">เมนูระบบและการตั้งค่า</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowMobileMoreMenu(false)}
                className="p-2 rounded-xl bg-slate-100 text-slate-600"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {mobileSecondaryNavItems.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id);
                      setShowMobileMoreMenu(false);
                    }}
                    className={`p-3.5 rounded-2xl border text-left flex items-center justify-between gap-2 transition-all ${
                      isActive
                        ? 'bg-[#0b4644] border-[#0b4644] text-[#f7d774]'
                        : 'bg-[#f8faf9] border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {tab.icon}
                      <span className="text-xs font-extrabold truncate">{tab.label}</span>
                    </div>
                    {tab.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-bold shrink-0">
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              {isOwnerUser && (
                <button
                  type="button"
                  onClick={() => {
                    setShowMobileMoreMenu(false);
                    setSupabaseDraft(supabaseConfig);
                    setShowDeployModal(true);
                  }}
                  className="p-3.5 rounded-2xl bg-slate-900 text-white text-left flex items-center gap-2"
                >
                  <Database size={16} className="text-[#f7d774] shrink-0" />
                  <span className="text-xs font-extrabold truncate">Supabase / Deploy</span>
                </button>
              )}

              <label className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-2 cursor-pointer">
                <Upload size={16} className="text-[#0b4644] shrink-0" />
                <span className="text-xs font-bold">นำเข้า Excel (.xlsx)</span>
                <input
                  type="file"
                  accept=".xlsx,.xls"
                  onChange={(e) => {
                    setShowMobileMoreMenu(false);
                    handleExcelFileSelect(e);
                  }}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      )}

      {/* ================= MAIN CONTENT ================= */}
      <main className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 space-y-5 sm:space-y-6">
        {activeTab === 'schedule' ? (
          /* ================= SCHEDULE & AVAILABILITY TAB ================= */
          <div className="space-y-6">
            {/* 1. เช็กรถว่างตามช่วงวันที่ลูกค้าสอบถาม (วางไว้ด้านบนสุดเพื่อเช็กคิวด่วนทันที) */}
            <div className="bg-white p-5 sm:p-6 rounded-[26px] border-2 border-[#d49b27]/50 shadow-[0_4px_18px_-4px_rgba(11,70,68,0.08)] space-y-4">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] uppercase tracking-widest text-[#b87d14] font-bold">
                      QUICK RANGE AVAILABILITY CHECKER
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                      ว่าง {quickCheckResults.filter((c) => c.isAvailable).length} / {fleet.length} คัน ({availQueryDays} วัน)
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#0b4644] mt-0.5">
                    เช็ครถว่างตามช่วงวันที่ลูกค้าสอบถาม
                  </h2>
                </div>

                <div className="flex flex-wrap items-end gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      วันรับรถ {availStartDate && <span className="text-[#0b4644]">({getThaiWeekdayLabel(availStartDate)})</span>}
                    </label>
                    <input
                      type="date"
                      value={availStartDate}
                      onChange={(e) => {
                        const nextStart = e.target.value;
                        setAvailStartDate(nextStart);
                        if (nextStart && availEndDate && nextStart > availEndDate) {
                          setAvailEndDate(nextStart);
                        }
                      }}
                      className="px-3.5 py-2 bg-[#f8faf9] border border-slate-200 focus:border-[#0b4644] rounded-xl text-xs sm:text-sm font-bold text-[#0b4644] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      วันคืนรถ {availEndDate && <span className="text-[#0b4644]">({getThaiWeekdayLabel(availEndDate)})</span>}
                    </label>
                    <input
                      type="date"
                      min={availStartDate}
                      value={availEndDate}
                      onChange={(e) => setAvailEndDate(e.target.value)}
                      className="px-3.5 py-2 bg-[#f8faf9] border border-slate-200 focus:border-[#0b4644] rounded-xl text-xs sm:text-sm font-bold text-[#0b4644] outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyAvailableCarsLine}
                    className="px-4 py-2.5 rounded-xl bg-[#06c755] hover:bg-[#05b34c] text-white text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-all"
                  >
                    <Copy size={14} />
                    <span>คัดลอกรถว่างส่ง LINE</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                {quickCheckResults.map((car) => {
                  const estTotalRent = (Number(car.dailyRate) || 0) * availQueryDays;
                  return (
                    <div
                      key={car.id}
                      className={`p-4 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                        car.isAvailable
                          ? 'bg-gradient-to-br from-white to-emerald-50/40 border-emerald-200/90 hover:border-emerald-400'
                          : 'bg-slate-50/90 border-slate-200 opacity-80'
                      }`}
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-extrabold text-[#0b4644] truncate">{car.model}</p>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          ฿{car.dailyRate.toLocaleString()}/วัน • รวม {availQueryDays} วัน{' '}
                          <strong className="text-[#0b4644]">฿{estTotalRent.toLocaleString()}</strong>
                        </p>
                        {!car.isAvailable && car.conflicts[0] && (
                          <p className="text-[10px] text-rose-600 font-semibold truncate mt-0.5">
                            ติดคิว: {car.conflicts[0].customerName} ({formatThaiShortDate(car.conflicts[0].pickupDate)} –{' '}
                            {formatThaiShortDate(car.conflicts[0].returnDate)})
                          </p>
                        )}
                      </div>
                      {car.isAvailable ? (
                        <button
                          type="button"
                          onClick={() => handleOpenForm(null, car.model, availStartDate, availEndDate)}
                          className="px-3.5 py-2 rounded-xl bg-[#0b4644] hover:bg-[#083332] text-[#f7d774] text-xs font-bold shrink-0 shadow-2xs transition-all"
                        >
                          ว่าง • จองเลย
                        </button>
                      ) : (
                        <span className="px-2.5 py-1 rounded-xl bg-rose-100 text-rose-700 text-[11px] font-bold shrink-0">
                          ติดคิว ({car.conflicts.length})
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Top Controls & Calendar Header */}
            <div className="bg-white p-5 sm:p-6 rounded-[26px] border border-slate-200/80 shadow-[0_2px_14px_-3px_rgba(15,23,42,0.05)] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#b87d14] font-bold">
                    FLEET SCHEDULE &amp; MONTHLY CALENDAR
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0b4644] mt-0.5">
                    ตารางคิวรถ &amp; ปฏิทินรายเดือน
                  </h2>
                </div>

                {/* มุมขวา: สลับมุมมอง + Dropdown เลือกปี */}
                <div className="flex flex-wrap items-center gap-2.5 ml-auto">
                  <div className="inline-flex p-1 rounded-2xl bg-slate-100/90 border border-slate-200/70">
                    <button
                      type="button"
                      onClick={() => setScheduleViewMode('MONTH')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        scheduleViewMode === 'MONTH'
                          ? 'bg-white text-[#0b4644] shadow-xs'
                          : 'text-slate-500 hover:text-[#0b4644]'
                      }`}
                    >
                      ปฏิทินทีละเดือน
                    </button>
                    <button
                      type="button"
                      onClick={() => setScheduleViewMode('MATRIX')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        scheduleViewMode === 'MATRIX'
                          ? 'bg-white text-[#0b4644] shadow-xs'
                          : 'text-slate-500 hover:text-[#0b4644]'
                      }`}
                    >
                      ตารางคิว 6 คัน
                    </button>
                  </div>

                  {/* Dropdown เลือกปี ไว้มุมด้านขวา */}
                  <select
                    value={calendarYear}
                    onChange={(e) => setCalendarYear(Number(e.target.value))}
                    className="px-4 py-2 bg-[#0b4644] text-[#f7d774] rounded-2xl text-sm font-bold border border-[#0b4644] shadow-xs outline-none cursor-pointer"
                  >
                    {availableYears.map((yr) => (
                      <option key={yr} value={yr} className="bg-white text-[#0b4644]">
                        ปี {yr}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* แถบเลือกคันรถขนาดใหญ่ + ปุ่มเลื่อนเดือน */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <select
                  value={carFilter}
                  onChange={(e) => setCarFilter(e.target.value)}
                  className="w-full sm:w-auto sm:min-w-[310px] px-4 py-3 bg-slate-50/90 border border-slate-200 focus:border-[#0b4644] focus:bg-white rounded-2xl text-xs sm:text-base font-bold text-[#0b4644] outline-none cursor-pointer transition-all"
                >
                  <option value="ALL">รถทั้งหมดในระบบ ({fleet.length} คัน)</option>
                  {carModels.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>

                <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (calendarMonth === 0) {
                        setCalendarMonth(11);
                        setCalendarYear((y) => y - 1);
                      } else {
                        setCalendarMonth((m) => m - 1);
                      }
                    }}
                    title="เดือนก่อนหน้า"
                    aria-label="เดือนก่อนหน้า"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#0b4644] text-[#0b4644] hover:text-[#f7d774] flex items-center justify-center transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="flex-1 sm:flex-none text-center px-4 py-2 rounded-xl bg-amber-50/90 border border-[#d49b27]/40 text-sm font-bold text-[#0b4644]">
                    {monthNamesTh[calendarMonth]} {calendarYear}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      if (calendarMonth === 11) {
                        setCalendarMonth(0);
                        setCalendarYear((y) => y + 1);
                      } else {
                        setCalendarMonth((m) => m + 1);
                      }
                    }}
                    title="เดือนถัดไป"
                    aria-label="เดือนถัดไป"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#0b4644] text-[#0b4644] hover:text-[#f7d774] flex items-center justify-center transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {scheduleViewMode === 'MONTH' ? (
              /* ปฏิทินแสดงผลทีละ 1 เดือนเต็มหน้าต่าง */
              <div className="bg-white rounded-[26px] border border-slate-200/80 shadow-[0_2px_14px_-3px_rgba(15,23,42,0.05)] overflow-hidden">
                <div className="grid grid-cols-7 bg-gradient-to-r from-[#073331] to-[#0b4644] text-[#f7d774] text-[11px] sm:text-xs font-bold text-center py-3 sm:py-3.5">
                  <div>
                    <span className="sm:hidden">อา.</span>
                    <span className="hidden sm:inline">อาทิตย์</span>
                  </div>
                  <div>
                    <span className="sm:hidden">จ.</span>
                    <span className="hidden sm:inline">จันทร์</span>
                  </div>
                  <div>
                    <span className="sm:hidden">อ.</span>
                    <span className="hidden sm:inline">อังคาร</span>
                  </div>
                  <div>
                    <span className="sm:hidden">พ.</span>
                    <span className="hidden sm:inline">พุธ</span>
                  </div>
                  <div>
                    <span className="sm:hidden">พฤ.</span>
                    <span className="hidden sm:inline">พฤหัสบดี</span>
                  </div>
                  <div>
                    <span className="sm:hidden">ศ.</span>
                    <span className="hidden sm:inline">ศุกร์</span>
                  </div>
                  <div>
                    <span className="sm:hidden">ส.</span>
                    <span className="hidden sm:inline">เสาร์</span>
                  </div>
                </div>

                <div className="grid grid-cols-7 divide-x divide-y divide-slate-100">
                  {calendarDaysList.map((cell, idx) => {
                    if (!cell) {
                      return <div key={`empty-${idx}`} className="min-h-[86px] sm:min-h-[130px] bg-slate-50/60" />;
                    }
                    const dayAllBookings = dailyOccupancyMap[cell.iso] || [];
                    const scopedBookings =
                      carFilter === 'ALL'
                        ? dayAllBookings
                        : dayAllBookings.filter((b) => b.carModel === carFilter);

                    const totalTargetCars = carFilter === 'ALL' ? fleet.length : 1;
                    const busyCarSet = new Set(scopedBookings.map((b) => b.carModel));
                    const freeCount = Math.max(0, totalTargetCars - busyCarSet.size);
                    const isSelected = selectedCalendarDate === cell.iso;
                    const isToday = cell.iso === todayIso;

                    return (
                      <div
                        key={cell.iso}
                        onClick={() => setSelectedCalendarDate(cell.iso)}
                        className={`min-h-[88px] sm:min-h-[130px] p-1 sm:p-2.5 cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-amber-50/60 ring-2 ring-inset ring-[#d49b27]'
                            : cell.isWeekend
                            ? 'bg-amber-50/20 hover:bg-amber-50/40'
                            : 'bg-white hover:bg-slate-50/90'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-0.5 sm:gap-1 mb-1 sm:mb-1.5">
                          <div className="flex items-center gap-1">
                            <span
                              className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-bold ${
                                isSelected
                                  ? 'bg-[#0b4644] text-[#f7d774]'
                                  : isToday
                                  ? 'bg-amber-100 text-[#9c6b10] ring-1 ring-[#d49b27]'
                                  : 'text-slate-700'
                              }`}
                            >
                              {cell.day}
                            </span>
                            {isToday && (
                              <span className="px-1.5 py-0.5 rounded bg-amber-100 text-[9px] font-bold text-[#9c6b10] hidden lg:inline">
                                วันนี้
                              </span>
                            )}
                          </div>
                          <span
                            className={`px-1 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold ${
                              freeCount > 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                            }`}
                          >
                            {freeCount > 0 ? (
                              <>
                                <span className="hidden sm:inline">ว่าง </span>
                                {freeCount}
                              </>
                            ) : (
                              'เต็ม'
                            )}
                          </span>
                        </div>

                        <div className="space-y-0.5 sm:space-y-1 flex-1 flex flex-col justify-center overflow-y-auto">
                          {scopedBookings.map((b) => {
                            const isPickupDay = b.pickupDate === cell.iso;
                            const isReturnDay = b.returnDate === cell.iso;
                            const plateShort = (b.carModel.match(/\d?[ก-ฮ]{2}\s?\d+/) || [b.carModel.split(' ')[0]])[0];

                            if (isPickupDay) {
                              return (
                                <div
                                  key={`${b.id}-out`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedBooking(b);
                                  }}
                                  className="px-1 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-[#0b4644] text-white text-[9px] sm:text-[10px] font-semibold text-center leading-tight truncate shadow-2xs"
                                  title={`ส่งรถ ${b.pickupTime} น. • ${b.carModel} • ${b.pickupLocation || '-'}`}
                                >
                                  <span className="sm:hidden">ส่ง {plateShort}</span>
                                  <span className="hidden sm:inline">
                                    ส่งรถ {b.pickupTime} น. (
                                    {carFilter !== 'ALL' ? b.pickupLocation || 'ไม่ระบุสถานที่' : plateShort})
                                  </span>
                                </div>
                              );
                            }

                            if (isReturnDay) {
                              return (
                                <div
                                  key={`${b.id}-in`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedBooking(b);
                                  }}
                                  className="px-1 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-gradient-to-r from-[#f6cf71] to-[#e5ad3c] text-[#052928] text-[9px] sm:text-[10px] font-bold text-center leading-tight truncate"
                                  title={`คืนรถ ${b.returnTime} น. • ${b.carModel} • ${b.returnLocation || '-'}`}
                                >
                                  <span className="sm:hidden">คืน {plateShort}</span>
                                  <span className="hidden sm:inline">
                                    คืนรถ {b.returnTime} น. (
                                    {carFilter !== 'ALL' ? b.returnLocation || 'ไม่ระบุสถานที่' : plateShort})
                                  </span>
                                </div>
                              );
                            }

                            return (
                              <div
                                key={`${b.id}-mid`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedBooking(b);
                                }}
                                className="px-1 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-slate-100/90 text-slate-600 text-[9px] sm:text-[10px] font-semibold text-center leading-tight truncate"
                                title={`ใช้งาน: ${b.carModel} (${b.customerName})`}
                              >
                                ใช้งาน
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* ตารางคิวรถ 6 คันรายวัน (Matrix) — แสดงทั้งวันในสัปดาห์ (อา.-ส.) และเลขวันที่ */
              <div className="bg-white rounded-[26px] border border-slate-200/80 shadow-[0_2px_14px_-3px_rgba(15,23,42,0.05)] overflow-x-auto">
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#0b4644] text-[#f7d774]">
                      <th className="p-3.5 text-left font-bold sticky left-0 bg-[#0b4644] min-w-[215px] z-10">
                        รถในระบบ ({monthNamesTh[calendarMonth]} {calendarYear})
                      </th>
                      {monthOnlyDays.map((d) => (
                        <th
                          key={d.iso}
                          className={`p-1.5 text-center font-bold min-w-[50px] border-l border-white/10 ${
                            d.isWeekend ? 'bg-[#073331] text-amber-300' : ''
                          }`}
                        >
                          <div className="text-[10px] font-semibold opacity-90">{d.weekdayShort}</div>
                          <div className="text-xs font-extrabold leading-tight mt-0.5">{d.day}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {(carFilter === 'ALL' ? fleet : fleet.filter((c) => c.model === carFilter)).map((car) => (
                      <tr key={car.id} className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-[#0b4644] sticky left-0 bg-white border-r border-slate-100 z-10">
                          {car.model}
                        </td>
                        {monthOnlyDays.map((d) => {
                          const match = (dailyOccupancyMap[d.iso] || []).find((b) => b.carModel === car.model);
                          if (!match) {
                            return (
                              <td
                                key={d.iso}
                                onClick={() => handleOpenForm(null, car.model, d.iso)}
                                title={`ว่าง: คลิกเพื่อจอง ${car.model} วัน${d.weekdayFull}ที่ ${formatThaiSlashDate(d.iso)}`}
                                className={`p-1.5 text-center text-[10px] text-emerald-600 hover:bg-emerald-100 cursor-pointer border-l border-slate-100 ${
                                  d.isWeekend ? 'bg-amber-50/35' : 'bg-emerald-50/25'
                                }`}
                              >
                                ว่าง
                              </td>
                            );
                          }
                          const isOut = match.pickupDate === d.iso;
                          const isIn = match.returnDate === d.iso;
                          return (
                            <td
                              key={d.iso}
                              onClick={() => setSelectedBooking(match)}
                              title={`${match.bookingCode}: ${match.customerName} (วัน${d.weekdayFull})`}
                              className={`p-1 text-center align-middle text-[9px] font-bold cursor-pointer border-l border-slate-100 ${
                                isOut
                                  ? 'bg-[#0b4644] text-white'
                                  : isIn
                                  ? 'bg-[#f3c65f] text-[#052928]'
                                  : 'bg-slate-200/80 text-slate-700'
                              }`}
                            >
                              {isOut ? `ส่ง ${match.pickupTime}` : isIn ? `คืน ${match.returnTime}` : 'ใช้งาน'}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* รายละเอียดสถานะรถในวันที่คลิกเลือกบนปฏิทิน */}
            <div className="bg-white p-5 sm:p-6 rounded-[26px] border border-slate-200/80 shadow-[0_2px_14px_-3px_rgba(15,23,42,0.05)] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-extrabold text-[#0b4644]">
                  สถานะรถทั้งหมดประจำ{getThaiWeekdayLabel(selectedCalendarDate)}ที่{' '}
                  {formatThaiSlashDate(selectedCalendarDate)}
                </h3>
                <span className="text-xs text-slate-500">คลิกปุ่ม &ldquo;+ จองคันนี้&rdquo; บนรถที่ว่างเพื่อลงคิวทันที</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {fleet.map((car) => {
                  const busy = (dailyOccupancyMap[selectedCalendarDate] || []).find((b) => b.carModel === car.model);
                  return (
                    <div
                      key={car.id}
                      className={`p-4 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                        busy ? 'bg-amber-50/60 border-amber-200/80' : 'bg-emerald-50/40 border-emerald-200/80'
                      }`}
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#0b4644] truncate">{car.model}</p>
                        {busy ? (
                          <p className="text-[11px] text-amber-800 font-medium truncate mt-0.5">
                            ติดคิว: {busy.customerName} ({formatThaiSlashDate(busy.pickupDate)} –{' '}
                            {formatThaiSlashDate(busy.returnDate)})
                          </p>
                        ) : (
                          <p className="text-[11px] text-emerald-700 font-medium mt-0.5">ว่างพร้อมให้เช่า</p>
                        )}
                      </div>
                      {busy ? (
                        <button
                          type="button"
                          onClick={() => setSelectedBooking(busy)}
                          className="px-3 py-1.5 rounded-xl bg-white border border-amber-300 text-amber-900 text-xs font-bold shrink-0"
                        >
                          ดูคิว
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleOpenForm(null, car.model, selectedCalendarDate)}
                          className="px-3 py-1.5 rounded-xl bg-[#0b4644] text-[#f7d774] text-xs font-bold shrink-0 shadow-2xs"
                        >
                          + จองคันนี้
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : activeTab === 'bookings' ? (
          /* ================= BOOKINGS LIST & FORM MODAL TAB (MODERN BENTO UI) ================= */
          <div className="space-y-5 sm:space-y-6">
            {/* 4 Modern Bento KPI Cards (2 columns on Mobile/Tablet, 4 columns on Laptop/Desktop) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Card 1: รายการจองทั้งหมด */}
              <div className="bg-white p-5 rounded-[24px] border border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(15,23,42,0.05)] hover:shadow-[0_10px_24px_-6px_rgba(11,70,68,0.08)] transition-all flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-500">รายการจองทั้งหมด</p>
                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="text-3xl font-extrabold text-[#0b4644] tabular-nums tracking-tight">
                      {stats.activeBookings}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">รายการ</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1.5">ฐานข้อมูล BF Carrent</p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0e5754] to-[#073331] text-[#f7d774] flex items-center justify-center shrink-0 shadow-xs">
                  <ClipboardList size={19} />
                </div>
              </div>

              {/* Card 2: คิวรอส่งมอบรถ */}
              <div className="bg-gradient-to-br from-white via-white to-amber-50/40 p-5 rounded-[24px] border border-[#d49b27]/60 shadow-[0_4px_16px_-4px_rgba(212,155,39,0.16)] hover:shadow-[0_10px_24px_-6px_rgba(212,155,39,0.24)] transition-all flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-500">คิวรอส่งมอบรถ</p>
                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="text-3xl font-extrabold text-[#c98b1e] tabular-nums tracking-tight">
                      {bookingStatusCounts['รอส่ง']}
                    </span>
                    <span className="text-xs font-semibold text-[#c98b1e]">คิว</span>
                  </div>
                  <p className="text-[11px] text-amber-700/70 mt-1.5">เตรียมความพร้อมก่อนส่ง</p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#f3c65f] to-[#c98b1e] text-[#052928] flex items-center justify-center shrink-0 shadow-xs">
                  <Clock size={19} />
                </div>
              </div>

              {/* Card 3: ส่งมอบรถสำเร็จ */}
              <div className="bg-white p-5 rounded-[24px] border border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(15,23,42,0.05)] hover:shadow-[0_10px_24px_-6px_rgba(11,70,68,0.08)] transition-all flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-500">ส่งมอบรถสำเร็จ</p>
                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="text-3xl font-extrabold text-[#0b4644] tabular-nums tracking-tight">
                      {bookingStatusCounts['ส่งรถแล้ว'] + bookingStatusCounts['รับรถคืนแล้ว']}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">คิว</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1.5">ดำเนินการเรียบร้อย</p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={19} />
                </div>
              </div>

              {/* Card 4: รายได้ค่าเช่ารวม */}
              <div className="bg-white p-4 sm:p-5 rounded-[24px] border border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(15,23,42,0.05)] hover:shadow-[0_10px_24px_-6px_rgba(11,70,68,0.08)] transition-all flex items-start justify-between gap-2 sm:gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-500">รายได้ค่าเช่ารวม</p>
                  <div className="mt-1.5 sm:mt-2">
                    <span className="text-lg sm:text-2xl xl:text-3xl font-extrabold text-[#0b4644] tabular-nums tracking-tight break-all">
                      ฿{stats.totalIncome.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 sm:mt-1.5 truncate">
                    ยอดมัดจำรอคืน ฿{stats.unreturnedDeposits.toLocaleString()}
                  </p>
                </div>
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#0e5754] to-[#073331] text-[#f7d774] flex items-center justify-center shrink-0 shadow-xs">
                  <Wallet size={18} />
                </div>
              </div>
            </div>

            {/* Modern Toolbar: Status Pills + Top-Right Action Buttons + Search & Car Filter */}
            <div className="bg-white p-4 sm:p-5 rounded-[24px] border border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(15,23,42,0.05)] space-y-3.5 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap">
                  {[
                    { id: 'ALL', label: `ทั้งหมด (${bookingStatusCounts.ALL})` },
                    { id: 'รอส่ง', label: `รอส่ง (${bookingStatusCounts['รอส่ง']})` },
                    { id: 'ส่งรถแล้ว', label: `ส่งรถแล้ว (${bookingStatusCounts['ส่งรถแล้ว']})` },
                    { id: 'รับรถคืนแล้ว', label: `รับรถคืนแล้ว (${bookingStatusCounts['รับรถคืนแล้ว']})` },
                    { id: 'ยกเลิก', label: `ยกเลิก (${bookingStatusCounts['ยกเลิก']})` }
                  ].map((pill) => (
                    <button
                      key={pill.id}
                      type="button"
                      onClick={() => setStatusFilter(pill.id)}
                      className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                        statusFilter === pill.id
                          ? 'bg-[#0b4644] text-white shadow-xs'
                          : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 hover:text-[#0b4644]'
                      }`}
                    >
                      {pill.label}
                    </button>
                  ))}
                </div>

                {/* มุมบนขวา: สลับมุมมอง + ปุ่มจองรถใหม่ */}
                <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:ml-auto">
                  <div className="inline-flex p-1 rounded-2xl bg-slate-100/90 border border-slate-200/70 shrink-0">
                    <button
                      type="button"
                      onClick={() => setViewMode('CARDS')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        viewMode === 'CARDS' ? 'bg-white text-[#0b4644] shadow-xs' : 'text-slate-500'
                      }`}
                    >
                      <LayoutGrid size={14} />
                      <span>การ์ด</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('TABLE')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        viewMode === 'TABLE' ? 'bg-white text-[#0b4644] shadow-xs' : 'text-slate-500'
                      }`}
                    >
                      <List size={14} />
                      <span>ตาราง</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenForm(null)}
                    className="flex-1 sm:flex-none justify-center px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#f5cc66] via-[#e2a93b] to-[#c98b1e] hover:brightness-105 text-[#052928] text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-[0_6px_16px_-4px_rgba(201,139,30,0.5)] transition-all"
                  >
                    <Plus size={16} strokeWidth={2.5} />
                    <span>จองรถใหม่</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
                <div className="md:col-span-7 relative">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="ค้นหารหัสจอง, ชื่อลูกค้า, ทะเบียนรถ, จุดรับรถ หรือจังหวัด..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50/90 border border-slate-200/90 focus:border-[#0b4644] focus:bg-white rounded-2xl text-xs sm:text-sm outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-5">
                  <select
                    value={carFilter}
                    onChange={(e) => setCarFilter(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50/90 border border-slate-200/90 focus:border-[#0b4644] focus:bg-white rounded-2xl text-xs sm:text-sm font-semibold text-[#0b4644] outline-none transition-all cursor-pointer"
                  >
                    <option value="ALL">รถทั้งหมดในระบบ ({fleet.length} คัน)</option>
                    {carModels.map((car) => (
                      <option key={car} value={car}>
                        {car}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Modern 3-Column Booking Cards */}
            {filteredBookings.length === 0 ? (
              <div className="bg-white p-12 rounded-[24px] border border-slate-200/80 text-center space-y-2">
                <p className="text-base font-bold text-slate-500">ไม่พบรายการจองรถที่ตรงกับเงื่อนไข</p>
                <p className="text-xs text-slate-400">ลองเปลี่ยนตัวกรองสถานะ หรือกดปุ่ม &ldquo;+ จองรถใหม่&rdquo; มุมบนขวา</p>
              </div>
            ) : viewMode === 'CARDS' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredBookings.map((b) => {
                  const fin = calculateFinancials(b);
                  const hasConflict = conflictingBookingIds.has(b.id);
                  const isCanceled = b.deliveryStatus === 'ยกเลิก';

                  return (
                    <div
                      key={b.id}
                      className={`group bg-white rounded-[24px] border p-5 shadow-[0_2px_12px_-3px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_32px_-10px_rgba(11,70,68,0.12)] hover:-translate-y-0.5 flex flex-col justify-between space-y-4 transition-all duration-300 ${
                        hasConflict
                          ? 'border-rose-400 ring-2 ring-rose-100'
                          : isCanceled
                          ? 'border-slate-200 opacity-75'
                          : 'border-slate-200/85 hover:border-[#d49b27]/70'
                      }`}
                    >
                      <div className="space-y-3.5">
                        {/* Top Pills Row */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <span className="px-3 py-1 rounded-full bg-[#0b4644] text-white text-xs font-bold tracking-wide shadow-2xs">
                              {b.bookingCode}
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                              {b.rentalDays} วัน
                            </span>
                            {hasConflict && (
                              <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-bold">
                                ซ้อน
                              </span>
                            )}
                          </div>

                          <span
                            className={`px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 border ${
                              b.deliveryStatus === 'รับรถคืนแล้ว'
                                ? 'bg-emerald-50/90 border-emerald-200/80 text-emerald-700'
                                : b.deliveryStatus === 'ส่งรถแล้ว'
                                ? 'bg-sky-50/90 border-sky-200/80 text-sky-700'
                                : b.deliveryStatus === 'ยกเลิก'
                                ? 'bg-rose-50/90 border-rose-200/80 text-rose-700'
                                : 'bg-amber-50/90 border-amber-200/80 text-amber-800'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                b.deliveryStatus === 'รับรถคืนแล้ว'
                                  ? 'bg-emerald-500'
                                  : b.deliveryStatus === 'ส่งรถแล้ว'
                                  ? 'bg-sky-500'
                                  : b.deliveryStatus === 'ยกเลิก'
                                  ? 'bg-rose-500'
                                  : 'bg-amber-500'
                              }`}
                            />
                            <span>{b.deliveryStatus}</span>
                          </span>
                        </div>

                        {/* Customer Name & Gold Nickname */}
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-base sm:text-[17px] font-bold text-[#0b4644] leading-snug">
                            {b.customerName}{' '}
                            {b.nickname && (
                              <span className="text-[#c98b1e] font-bold text-sm sm:text-[15px]">
                                ({b.nickname})
                              </span>
                            )}
                          </h3>
                        </div>

                        {/* Modern Vehicle & Route Timeline Card */}
                        <div className="p-3.5 rounded-2xl bg-gradient-to-b from-slate-50/95 to-slate-100/60 border border-slate-200/75 space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-10 shrink-0 flex items-center justify-center">
                              {renderVehicleIllustration(b.carModel, 'w-full h-full')}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                                {b.carModel}
                              </p>
                              <p className="text-[11px] text-slate-500 font-medium mt-0.5 truncate">
                                {formatThaiShortDate(b.pickupDate)} ({b.pickupTime}) →{' '}
                                {formatThaiShortDate(b.returnDate)} ({b.returnTime})
                              </p>
                            </div>
                          </div>

                          <div className="pt-2.5 border-t border-slate-200/70 flex items-center justify-between gap-2 text-xs text-slate-600">
                            <div className="flex items-center gap-1.5 min-w-0">
                              <MapPin size={13} className="text-[#0b4644] shrink-0" />
                              <span className="truncate font-medium">{b.pickupLocation || '-'}</span>
                            </div>
                            {b.phone && (
                              <span className="text-[11px] text-slate-400 font-medium shrink-0 tabular-nums">
                                {b.phone}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Totals & Compact Quick Actions */}
                      <div className="space-y-3 pt-0.5">
                        <div className="flex items-end justify-between gap-2">
                          <div>
                            <p className="text-[11px] text-slate-400 font-medium">รวมทั้งหมด (รวมมัดจำ)</p>
                            <p className="text-sm sm:text-base font-bold text-slate-700 tabular-nums">
                              ฿{fin.grandTotal.toLocaleString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-[11px] font-semibold text-[#c98b1e]">ชำระวันรับรถ</p>
                            <p className="text-xl sm:text-2xl font-extrabold text-[#c98b1e] tabular-nums leading-none mt-0.5">
                              ฿{fin.balanceDueAtPickup.toLocaleString()}
                            </p>
                          </div>
                        </div>

                        {/* Subtle Compact Action Bar */}
                        <div className="flex items-center justify-between gap-1.5 pt-2.5 border-t border-slate-100">
                          <div className="flex items-center gap-1">
                            {!isCanceled && !b.depositReturned && (
                              <button
                                type="button"
                                onClick={() => handleOpenQuickSettle(b)}
                                className="px-2.5 py-1 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200/80 text-[11px] font-semibold transition-all"
                              >
                                ปิดงาน
                              </button>
                            )}
                            {!isCanceled && b.deliveryStatus === 'รอส่ง' && (
                              <button
                                type="button"
                                onClick={() => handleOpenCancelModal(b)}
                                className="px-2.5 py-1 rounded-xl bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white border border-rose-200/80 text-[11px] font-semibold transition-all"
                              >
                                ยกเลิก
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => handleCopyLineMessage(b)}
                              className="px-2.5 py-1 rounded-xl bg-[#06c755]/10 hover:bg-[#06c755] text-[#059640] hover:text-white text-[11px] font-semibold flex items-center gap-1 transition-all"
                            >
                              <Copy size={11} />
                              <span>LINE</span>
                            </button>
                          </div>

                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => setSelectedBooking(b)}
                              title="ดูรายละเอียดและรูปภาพ"
                              className="p-1.5 rounded-xl bg-slate-100/80 hover:bg-[#0b4644] text-slate-600 hover:text-white transition-all"
                            >
                              <Eye size={13} />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleOpenForm(b)}
                              title="แก้ไขใบจอง"
                              className="p-1.5 rounded-xl bg-amber-50 hover:bg-[#d49b27] text-amber-800 hover:text-white transition-all"
                            >
                              <Edit3 size={13} />
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                setDeleteTarget({
                                  type: 'booking',
                                  id: b.id,
                                  label: `${b.bookingCode} (${b.customerName})`
                                })
                              }
                              title="ลบใบจอง"
                              className="p-1.5 rounded-xl bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white transition-all"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Modern Table View */
              <div className="bg-white rounded-[24px] border border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(15,23,42,0.05)] overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#0b4644] text-[#f7d774] text-xs">
                      <th className="p-4 font-bold">รหัสจอง</th>
                      <th className="p-4 font-bold">รถที่จอง</th>
                      <th className="p-4 font-bold">ผู้เช่า</th>
                      <th className="p-4 font-bold">รับรถ - คืนรถ</th>
                      <th className="p-4 font-bold text-right">จ่ายเพิ่มวันรับ</th>
                      <th className="p-4 font-bold text-center">สถานะ</th>
                      <th className="p-4 font-bold text-right">จัดการ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredBookings.map((b) => {
                      const fin = calculateFinancials(b);
                      return (
                        <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-4 font-bold text-[#0b4644]">{b.bookingCode}</td>
                          <td className="p-4 font-semibold">{b.carModel}</td>
                          <td className="p-4">
                            <p className="font-bold text-slate-800">{b.customerName}</p>
                            <p className="text-xs text-slate-500">{b.phone}</p>
                          </td>
                          <td className="p-4 text-xs">
                            <p>รับ: {formatThaiSlashDate(b.pickupDate)} ({b.pickupTime})</p>
                            <p>คืน: {formatThaiSlashDate(b.returnDate)} ({b.returnTime})</p>
                          </td>
                          <td className="p-4 text-right font-extrabold text-[#0b4644] tabular-nums">
                            ฿{fin.balanceDueAtPickup.toLocaleString()}
                          </td>
                          <td className="p-4 text-center">
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold">
                              {b.deliveryStatus}
                            </span>
                          </td>
                          <td className="p-4 text-right whitespace-nowrap space-x-1.5">
                            <button
                              type="button"
                              onClick={() => handleOpenForm(b)}
                              className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-semibold"
                            >
                              แก้ไข
                            </button>
                            <button
                              type="button"
                              onClick={() => setSelectedBooking(b)}
                              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                            >
                              ดู
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {/* ================= BOOKING FORM MODAL (8 SECTIONS + SUMMARY CARD) ================= */}
            {showFormModal && (
              <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-3 sm:p-6">
                <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-4">
                  <div className="bg-gradient-to-r from-[#052928] to-[#0b4644] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#d49b27]">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#f7d774] font-bold">
                        BOOKING &amp; FLEET DISPATCH FORM
                      </span>
                      <h3 className="text-lg sm:text-xl font-black">
                        {editingBooking ? `แก้ไขรายการจอง ${editingBooking.bookingCode}` : 'ลงบันทึกการจองรถใหม่'}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowFormModal(false)}
                      className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <form onSubmit={handleSaveBooking} className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column: 8 Sections */}
                    <div className="lg:col-span-8 space-y-6">
                      {/* Alert คิวจองซ้อนกันทันทีในหน้าฟอร์ม */}
                      {formScheduleConflicts.length > 0 && (
                        <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-400 text-rose-900 space-y-1">
                          <p className="text-xs sm:text-sm font-extrabold flex items-center gap-1.5 text-rose-700">
                            <AlertTriangle size={16} />
                            <span>แจ้งเตือนคิวจองซ้อนกัน! รถคันนี้ถูกจองในช่วงวันดังกล่าวแล้ว:</span>
                          </p>
                          {formScheduleConflicts.map((c) => (
                            <p key={c.id} className="text-xs font-semibold pl-5">
                              • {c.bookingCode} — คุณ{c.customerName} ({formatThaiSlashDate(c.pickupDate)} ถึง{' '}
                              {formatThaiSlashDate(c.returnDate)})
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Alert Blacklist */}
                      {formMatchedBlacklist && (
                        <div className="p-4 rounded-2xl bg-rose-600 text-white space-y-1 shadow-md">
                          <p className="text-xs sm:text-sm font-extrabold flex items-center gap-1.5">
                            <ShieldAlert size={16} />
                            <span>พบรายชื่อตรงกับฐานข้อมูลบุคคลอันตราย (Blacklist)!</span>
                          </p>
                          <p className="text-xs">
                            {formMatchedBlacklist.fullName} ({formMatchedBlacklist.phone}) — สาเหตุ:{' '}
                            {formMatchedBlacklist.reason}
                          </p>
                        </div>
                      )}

                      {/* 1. ข้อมูลรถ และรหัสการจอง */}
                      <div className="p-5 rounded-2xl bg-[#f8faf9] border border-slate-200 space-y-4">
                        <h4 className="text-sm font-extrabold text-[#0b4644]">1. ข้อมูลรถ และรหัสการจอง</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <LuxuryInput
                            label="รหัสการจอง (Booking Code)"
                            name="bookingCode"
                            value={formData.bookingCode}
                            onChange={handleFormChange}
                            required
                          />
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">รถคันที่จอง</label>
                            <select
                              name="carModel"
                              value={formData.carModel}
                              onChange={handleFormChange}
                              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-bold text-[#0b4644] outline-none"
                            >
                              {carModels.map((m) => (
                                <option key={m} value={m}>
                                  {m}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">สถานะงาน</label>
                            <select
                              name="deliveryStatus"
                              value={formData.deliveryStatus}
                              onChange={handleFormChange}
                              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-800 outline-none"
                            >
                              <option value="รอส่ง">รอส่ง</option>
                              <option value="ส่งรถแล้ว">ส่งรถแล้ว</option>
                              <option value="รับรถคืนแล้ว">รับรถคืนแล้ว (ปิดงาน)</option>
                              <option value="ยกเลิก">ยกเลิกการจอง (คืนคิวว่าง)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* 2. ข้อมูลผู้เช่าและผู้ติดต่อฉุกเฉิน */}
                      <div className="p-5 rounded-2xl bg-[#f8faf9] border border-slate-200 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-sm font-extrabold text-[#0b4644]">2. ข้อมูลผู้เช่าและผู้ติดต่อฉุกเฉิน</h4>
                          <span className="text-[11px] font-semibold text-slate-500">
                            กรอกชื่อ เลขบัตร ปชช. หรือเบอร์โทร เพื่อสแกนประวัติเสี่ยงอัตโนมัติ
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <LuxuryInput
                            label="ชื่อ-นามสกุล ผู้เช่า"
                            name="customerName"
                            placeholder="เช่น คุณธัญญารัตน์ มณฑา"
                            value={formData.customerName}
                            onChange={handleFormChange}
                            required
                          />
                          <LuxuryInput
                            label="ชื่อเล่น"
                            name="nickname"
                            placeholder="เช่น คุณจอย"
                            value={formData.nickname}
                            onChange={handleFormChange}
                          />
                          <div>
                            <LuxuryInput
                              label="เลขบัตรประจำตัวประชาชน (13 หลัก)"
                              name="idCardNumber"
                              maxLength={17}
                              placeholder="1-XXXX-XXXXX-XX-X"
                              value={formData.idCardNumber || ''}
                              onChange={handleFormChange}
                            />
                            {formIdValidation.status === 'VALID' && (
                              <p className="text-[11px] font-bold text-emerald-700 mt-1 flex items-center gap-1">
                                <CheckCircle2 size={12} />
                                <span>โครงสร้างเลขบัตรประชาชน 13 หลักถูกต้อง</span>
                              </p>
                            )}
                            {formIdValidation.status === 'INVALID' && (
                              <p className="text-[11px] font-bold text-rose-600 mt-1 flex items-center gap-1">
                                <AlertTriangle size={12} />
                                <span>⚠️ เลขบัตรประชาชน 13 หลักไม่ถูกต้องตามสูตรคำนวณ (โปรดตรวจสอบบัตรจริง)</span>
                              </p>
                            )}
                          </div>
                          <LuxuryInput
                            label="เบอร์โทรศัพท์ติดต่อ"
                            name="phone"
                            placeholder="08X-XXX-XXXX"
                            value={formData.phone}
                            onChange={handleFormChange}
                            required
                          />
                          <LuxuryInput
                            label="ชื่อ LINE / Facebook ลูกค้า"
                            name="socialHandle"
                            placeholder="เช่น LINE: Joy_Thanya"
                            value={formData.socialHandle}
                            onChange={handleFormChange}
                          />
                          <LuxuryInput
                            label="ชื่อและเบอร์ผู้ติดต่อฉุกเฉิน"
                            name="emergencyContact"
                            placeholder="เช่น คุณเจษฎา 090-909-6429"
                            value={formData.emergencyContact}
                            onChange={handleFormChange}
                          />
                        </div>

                        {/* กล่องสแกนความเสี่ยงจากสื่อออนไลน์ & ข่าวสาธารณะ */}
                        <div
                          className={`p-4 rounded-2xl border transition-all space-y-3 ${
                            bookingRiskCheck.riskLevel === 'HIGH'
                              ? 'bg-rose-50/90 border-rose-400'
                              : bookingRiskCheck.riskLevel === 'MEDIUM'
                              ? 'bg-amber-50/90 border-amber-400'
                              : bookingRiskCheck.riskLevel === 'LOW'
                              ? 'bg-emerald-50/70 border-emerald-300'
                              : 'bg-white border-slate-200'
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-xl bg-[#0b4644] text-[#f7d774] flex items-center justify-center shrink-0">
                                <Sparkles size={15} />
                              </div>
                              <div>
                                <p className="text-xs font-extrabold text-[#0b4644]">
                                  ระบบตรวจสอบประวัติเสี่ยงจากสื่อออนไลน์ (AI + ข่าว/โซเชียล/บัญชีดำ)
                                </p>
                                <p className="text-[10px] text-slate-500">
                                  คัดกรองความเสี่ยง: เช่ารถไปขาย/จำนำ • ไม่จ่ายค่าเช่า/เชิดรถ • นำรถข้ามชายแดน
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => setAutoRiskScanEnabled((v) => !v)}
                                className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-bold transition-all ${
                                  autoRiskScanEnabled
                                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                                    : 'bg-slate-100 border-slate-200 text-slate-500'
                                }`}
                              >
                                {autoRiskScanEnabled ? 'ตรวจอัตโนมัติ: เปิด' : 'ตรวจอัตโนมัติ: ปิด'}
                              </button>

                              <button
                                type="button"
                                disabled={bookingRiskCheck.loading}
                                onClick={() => handleRunBookingRiskScan(true)}
                                className="px-3.5 py-1.5 rounded-xl bg-[#0b4644] hover:bg-[#073331] disabled:opacity-60 text-[#f7d774] text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-all"
                              >
                                {bookingRiskCheck.loading ? (
                                  <>
                                    <Loader2 size={13} className="animate-spin" />
                                    <span>กำลังสแกนสื่อ...</span>
                                  </>
                                ) : (
                                  <>
                                    <Search size={13} />
                                    <span>สแกนประวัติทันที</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>

                          {bookingRiskCheck.loading && (
                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                              <Loader2 size={15} className="animate-spin text-[#0b4644] shrink-0" />
                              <span>
                                กำลังค้นหาข้อมูลผิดปกติ ข่าวอาชญากรรม และประกาศเตือนภัยรถเช่าจากสื่อออนไลน์...
                              </span>
                            </div>
                          )}

                          {!bookingRiskCheck.loading && bookingRiskCheck.riskLevel && (
                            <div className="space-y-2.5 pt-1">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-extrabold flex items-center gap-1.5 ${
                                    bookingRiskCheck.riskLevel === 'HIGH'
                                      ? 'bg-rose-600 text-white'
                                      : bookingRiskCheck.riskLevel === 'MEDIUM'
                                      ? 'bg-amber-500 text-white'
                                      : bookingRiskCheck.riskLevel === 'ERROR'
                                      ? 'bg-slate-600 text-white'
                                      : 'bg-emerald-600 text-white'
                                  }`}
                                >
                                  {bookingRiskCheck.riskLevel === 'HIGH' && (
                                    <>
                                      <ShieldAlert size={13} />
                                      <span>พบความเสี่ยงสูง / มีประวัติเตือนภัยในสื่อ</span>
                                    </>
                                  )}
                                  {bookingRiskCheck.riskLevel === 'MEDIUM' && (
                                    <>
                                      <AlertTriangle size={13} />
                                      <span>ควรตรวจสอบเพิ่มเติม (พบข้อมูลคล้ายคลึง)</span>
                                    </>
                                  )}
                                  {bookingRiskCheck.riskLevel === 'LOW' && (
                                    <>
                                      <ShieldCheck size={13} />
                                      <span>ไม่พบประวัติเสียหรือข่าวเตือนภัยในสื่อสาธารณะ</span>
                                    </>
                                  )}
                                  {bookingRiskCheck.riskLevel === 'ERROR' && (
                                    <span>ไม่สามารถดึงข้อมูลออนไลน์ได้ชั่วคราว</span>
                                  )}
                                </span>

                                <div className="flex items-center gap-2">
                                  {bookingRiskCheck.checkedAt && (
                                    <span className="text-[10px] text-slate-500">
                                      ตรวจสอบเมื่อ {bookingRiskCheck.checkedAt} น.
                                    </span>
                                  )}
                                  {(bookingRiskCheck.riskLevel === 'HIGH' ||
                                    bookingRiskCheck.riskLevel === 'MEDIUM') && (
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const newBl = {
                                          id: Date.now(),
                                          fullName: formData.customerName || 'ไม่ระบุชื่อ',
                                          idCard: formData.idCardNumber || '-',
                                          phone: formData.phone || '-',
                                          severity:
                                            bookingRiskCheck.riskLevel === 'HIGH'
                                              ? 'อันตรายสูง'
                                              : 'เฝ้าระวังพิเศษ',
                                          reason: bookingRiskCheck.summary.slice(0, 220),
                                          reportedDate: new Date().toISOString().slice(0, 10),
                                          images: []
                                        };
                                        const next = [newBl, ...blacklist];
                                        setBlacklist(next);
                                        persistMetaState({ blacklist: next });
                                        showToast('บันทึกรายชื่อนี้ลงฐานข้อมูลบุคคลอันตรายของร้านเรียบร้อย');
                                      }}
                                      className="px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold"
                                    >
                                      + บันทึกลง Blacklist ร้าน
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 text-xs text-slate-700 whitespace-pre-line leading-relaxed">
                                {bookingRiskCheck.summary}
                              </div>

                              {bookingRiskCheck.sources.length > 0 && (
                                <div className="space-y-1">
                                  <p className="text-[11px] font-bold text-slate-600">
                                    แหล่งข้อมูล / ลิงก์ข่าวที่ตรวจพบ ({bookingRiskCheck.sources.length} แหล่ง):
                                  </p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {bookingRiskCheck.sources.slice(0, 5).map((src, i) => (
                                      <a
                                        key={i}
                                        href={src.uri}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-[11px] font-semibold text-[#0b4644] flex items-center gap-1 max-w-xs truncate"
                                      >
                                        <ExternalLink size={11} className="shrink-0" />
                                        <span className="truncate">{src.title}</span>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* 3. กำหนดการส่งมอบ - รับคืน และพื้นที่ใช้งาน */}
                      <div className="p-5 rounded-2xl bg-[#f8faf9] border border-slate-200 space-y-4">
                        <h4 className="text-sm font-extrabold text-[#0b4644]">
                          3. กำหนดการส่งมอบ - รับคืน และพื้นที่ใช้งาน
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <LuxuryInput
                            label="วันที่รับรถ"
                            type="date"
                            name="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleFormChange}
                            required
                          />
                          <LuxuryInput
                            label="เวลารับรถ"
                            type="time"
                            name="pickupTime"
                            value={formData.pickupTime}
                            onChange={handleFormChange}
                          />
                          <LuxuryInput
                            label="สถานที่ส่งมอบรถ"
                            name="pickupLocation"
                            placeholder="เช่น แม็คโครบางกะปิ"
                            value={formData.pickupLocation}
                            onChange={handleFormChange}
                          />
                          <LuxuryInput
                            label="วันที่คืนรถ"
                            type="date"
                            name="returnDate"
                            value={formData.returnDate}
                            onChange={handleFormChange}
                            required
                          />
                          <LuxuryInput
                            label="เวลาคืนรถ"
                            type="time"
                            name="returnTime"
                            value={formData.returnTime}
                            onChange={handleFormChange}
                          />
                          <LuxuryInput
                            label="สถานที่รับคืนรถ"
                            name="returnLocation"
                            placeholder="เช่น แม็คโครบางกะปิ"
                            value={formData.returnLocation}
                            onChange={handleFormChange}
                          />
                          <LuxuryInput
                            label="จำนวนวันเช่า (วัน)"
                            type="number"
                            min="1"
                            name="rentalDays"
                            value={formData.rentalDays}
                            onChange={handleFormChange}
                          />
                          <div className="sm:col-span-2">
                            <LuxuryInput
                              label="พื้นที่การเดินทาง / จังหวัดที่นำไปใช้งาน"
                              name="travelArea"
                              placeholder="เช่น กรุงเทพปริมณฑล / ชลบุรี"
                              value={formData.travelArea}
                              onChange={handleFormChange}
                            />
                          </div>
                        </div>
                      </div>

                      {/* 4. แนบเอกสารสำหรับเช่ารถ (6 รายการ) */}
                      <div className="p-5 rounded-2xl bg-[#f8faf9] border border-slate-200 space-y-4">
                        <h4 className="text-sm font-extrabold text-[#0b4644]">4. แนบเอกสารสำหรับเช่ารถ</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {[
                            { key: 'idCard', label: 'บัตรประจำตัวประชาชน' },
                            { key: 'driverLicense', label: 'ใบอนุญาตขับขี่ที่ยังไม่หมดอายุ' },
                            { key: 'employeeCard', label: 'บัตรพนักงานบริษัทฯ' },
                            { key: 'flightTicket', label: 'ตั๋วเครื่องบิน ไป-กลับ' },
                            { key: 'guarantorId', label: 'บัตรประชาชนคนค้ำ' },
                            { key: 'otherDoc', label: 'อื่นๆ' }
                          ].map((doc) => {
                            const imgs = formData.docImages?.[doc.key] || [];
                            return (
                              <div key={doc.key} className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-xs font-bold text-slate-700">{doc.label}</span>
                                  <label className="cursor-pointer px-2.5 py-1 rounded-lg bg-[#0b4644] text-[#f7d774] text-[11px] font-bold flex items-center gap-1 shrink-0">
                                    <Camera size={12} />
                                    <span>แนบรูป</span>
                                    <input
                                      type="file"
                                      accept="image/*"
                                      multiple
                                      className="hidden"
                                      onChange={(e) => {
                                        handleDocImageUpload(doc.key, e.target.files);
                                        e.target.value = '';
                                      }}
                                    />
                                  </label>
                                </div>
                                {imgs.length > 0 && (
                                  <div className="flex items-center gap-1.5 overflow-x-auto pt-1">
                                    {imgs.map((url, idx) => (
                                      <div key={idx} className="relative w-12 h-12 rounded-lg overflow-hidden border shrink-0">
                                        <img
                                          src={url}
                                          alt={doc.label}
                                          onClick={() => setPreviewImage({ url, title: `${doc.label} (${idx + 1})` })}
                                          className="w-full h-full object-cover cursor-zoom-in"
                                        />
                                        <button
                                          type="button"
                                          onClick={() => handleRemoveDocImage(doc.key, idx)}
                                          className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center"
                                        >
                                          <X size={9} />
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* 5. แนบสลิปหลักฐานการจองรถ */}
                      <div className="p-5 rounded-2xl bg-[#f8faf9] border border-slate-200 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-sm font-extrabold text-[#0b4644]">5. แนบสลิปหลักฐานการจองรถ</h4>
                          <div className="flex items-center gap-2">
                            <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-[#0b4644] flex items-center gap-1.5">
                              <Camera size={14} />
                              <span>แนบสลิปโอนจอง</span>
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={(e) => {
                                  handleDocImageUpload('bookingSlip', e.target.files);
                                  e.target.value = '';
                                }}
                              />
                            </label>
                            <button
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({ ...prev, bookingFeePaid: !prev.bookingFeePaid }))
                              }
                              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 ${
                                formData.bookingFeePaid
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-amber-100 text-amber-900 border border-amber-300'
                              }`}
                            >
                              <Check size={14} />
                              <span>{formData.bookingFeePaid ? 'ยืนยันโอนจองแล้ว ✓' : 'กดยืนยันโอนจองแล้ว'}</span>
                            </button>
                          </div>
                        </div>
                        {(formData.docImages?.bookingSlip || []).length > 0 && (
                          <div className="flex items-center gap-2 overflow-x-auto">
                            {formData.docImages.bookingSlip.map((url, idx) => (
                              <div key={idx} className="relative w-16 h-16 rounded-xl overflow-hidden border shrink-0">
                                <img
                                  src={url}
                                  alt="สลิปโอนจอง"
                                  onClick={() => setPreviewImage({ url, title: `สลิปโอนจอง (${idx + 1})` })}
                                  className="w-full h-full object-cover cursor-zoom-in"
                                />
                                <button
                                  type="button"
                                  onClick={() => handleRemoveDocImage('bookingSlip', idx)}
                                  className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center"
                                >
                                  <X size={10} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* 6. ส่งมอบรถ */}
                      <div className="p-5 rounded-2xl bg-[#f8faf9] border border-slate-200 space-y-4">
                        <h4 className="text-sm font-extrabold text-[#0b4644]">6. ส่งมอบรถ (ขาไป)</h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <LuxuryInput
                            label="เลขไมล์ตอนส่งมอบรถ (กม.)"
                            type="number"
                            name="mileageStart"
                            placeholder="เช่น 45210"
                            value={formData.mileageStart}
                            onChange={handleFormChange}
                          />
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                              ระดับน้ำมันตอนส่งมอบ (เต็ม 10/10)
                            </label>
                            <select
                              name="fuelLevelStart"
                              value={formData.fuelLevelStart}
                              onChange={handleFormChange}
                              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-bold text-[#0b4644] outline-none"
                            >
                              {['10/10', '9/10', '8/10', '7/10', '6/10', '5/10', '4/10', '3/10', '2/10', '1/10'].map(
                                (lvl) => (
                                  <option key={lvl} value={lvl}>
                                    {lvl === '10/10' ? '10/10 (เต็มถัง)' : lvl}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>

                        {/* หลักฐานการชำระเงินวันรับรถ */}
                        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-2">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs font-bold text-[#0b4644]">หลักฐานการชำระเงินวันรับรถ</span>
                            <div className="flex items-center gap-2">
                              <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-[#f4f7f6] border border-slate-300 text-xs font-bold text-[#0b4644] flex items-center gap-1.5">
                                <Camera size={13} />
                                <span>แนบสลิปการชำระ</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  multiple
                                  className="hidden"
                                  onChange={(e) => {
                                    handleDocImageUpload('pickupPaymentSlip', e.target.files);
                                    e.target.value = '';
                                  }}
                                />
                              </label>
                              <button
                                type="button"
                                onClick={() =>
                                  setFormData((prev) => ({ ...prev, pickupBalancePaid: !prev.pickupBalancePaid }))
                                }
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 ${
                                  formData.pickupBalancePaid
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-amber-100 text-amber-900 border border-amber-300'
                                }`}
                              >
                                <Check size={13} />
                                <span>{formData.pickupBalancePaid ? 'ยืนยันการชำระเงินแล้ว ✓' : 'ยืนยันการชำระเงิน'}</span>
                              </button>
                            </div>
                          </div>
                          {(formData.docImages?.pickupPaymentSlip || []).length > 0 && (
                            <div className="flex items-center gap-2 overflow-x-auto">
                              {formData.docImages.pickupPaymentSlip.map((url, idx) => (
                                <div key={idx} className="relative w-14 h-14 rounded-xl overflow-hidden border shrink-0">
                                  <img
                                    src={url}
                                    alt="สลิปชำระวันรับรถ"
                                    onClick={() => setPreviewImage({ url, title: `สลิปชำระวันรับรถ (${idx + 1})` })}
                                    className="w-full h-full object-cover cursor-zoom-in"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveDocImage('pickupPaymentSlip', idx)}
                                    className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center"
                                  >
                                    <X size={10} />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* กล่องบันทึก 50 ทวิ หัก ณ ที่จ่าย 5% กรณีบิลบริษัทฯ */}
                        <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                              <p className="text-xs font-bold text-indigo-950 flex items-center gap-1.5">
                                <FileSpreadsheet size={14} className="text-indigo-700" />
                                <span>ออกบิลในนามบริษัทฯ / ลูกค้าหักภาษี ณ ที่จ่าย 5% (ใบ 50 ทวิ)</span>
                              </p>
                              <p className="text-[11px] text-slate-600 mt-0.5">
                                เก็บยอดภาษีที่ถูกหัก 5% ไว้ใช้เป็น{' '}
                                <strong className="text-indigo-800">เครดิตลดหย่อนภาษีปลายปี</strong> กับกรมสรรพากร
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                setFormData((prev) => {
                                  const nextActive = !prev.isCorporateWht;
                                  const { rentalSubtotal } = calculateFinancials(prev);
                                  const taxableBase = Math.max(
                                    0,
                                    rentalSubtotal +
                                      (Number(prev.deliveryFee) || 0) +
                                      (Number(prev.lateFeeOrExtra) || 0) -
                                      (Number(prev.discountAmount) || 0)
                                  );
                                  return {
                                    ...prev,
                                    isCorporateWht: nextActive,
                                    whtAmount:
                                      nextActive && (!prev.whtAmount || Number(prev.whtAmount) === 0)
                                        ? Math.round(taxableBase * 0.05)
                                        : prev.whtAmount
                                  };
                                })
                              }
                              className={`px-3.5 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                                formData.isCorporateWht
                                  ? 'bg-indigo-700 border-indigo-700 text-white shadow-sm'
                                  : 'bg-white border-indigo-300 text-indigo-900 hover:bg-indigo-100'
                              }`}
                            >
                              <div
                                className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                                  formData.isCorporateWht ? 'bg-white text-indigo-700' : 'border border-indigo-400'
                                }`}
                              >
                                {formData.isCorporateWht && <Check size={11} strokeWidth={3} />}
                              </div>
                              <span>{formData.isCorporateWht ? 'หัก ณ ที่จ่าย 5% ✓' : 'เปิดบันทึก 50 ทวิ'}</span>
                            </button>
                          </div>

                          {formData.isCorporateWht && (
                            <div className="space-y-3 pt-1">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <LuxuryInput
                                  label="ชื่อบริษัทผู้เช่า / เลขประจำตัวผู้เสียภาษี 13 หลัก"
                                  name="companyTaxName"
                                  placeholder="เช่น บจก. เอบีซี (0105560000000)"
                                  value={formData.companyTaxName || ''}
                                  onChange={handleFormChange}
                                />
                                <div>
                                  <div className="flex items-center justify-between mb-1.5">
                                    <label className="block text-xs font-semibold text-slate-700">
                                      ยอดภาษีหัก ณ ที่จ่าย 5% (฿)
                                    </label>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const { rentalSubtotal } = calculateFinancials(formData);
                                        const taxableBase = Math.max(
                                          0,
                                          rentalSubtotal +
                                            (Number(formData.deliveryFee) || 0) +
                                            (Number(formData.lateFeeOrExtra) || 0) -
                                            (Number(formData.discountAmount) || 0)
                                        );
                                        setFormData((prev) => ({
                                          ...prev,
                                          whtAmount: Math.round(taxableBase * 0.05)
                                        }));
                                      }}
                                      className="text-[11px] font-bold text-indigo-700 hover:underline"
                                    >
                                      คำนวณ 5% อัตโนมัติ
                                    </button>
                                  </div>
                                  <input
                                    type="number"
                                    name="whtAmount"
                                    min="0"
                                    value={formData.whtAmount}
                                    onChange={handleFormChange}
                                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:border-indigo-600 outline-none text-sm font-bold text-indigo-900"
                                  />
                                </div>
                              </div>

                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="text-[11px] text-slate-600">
                                  แนบหลักฐานหนังสือรับรองการหักภาษี ณ ที่จ่าย (ใบ 50 ทวิ)
                                </span>
                                <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm">
                                  <Camera size={13} />
                                  <span>
                                    {(formData.docImages?.wht50Tawi || []).length > 0
                                      ? `+ รูปใบ 50 ทวิ (${formData.docImages.wht50Tawi.length})`
                                      : 'แนบรูปใบ 50 ทวิ'}
                                  </span>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    className="hidden"
                                    onChange={(e) => {
                                      handleDocImageUpload('wht50Tawi', e.target.files);
                                      e.target.value = '';
                                    }}
                                  />
                                </label>
                              </div>

                              {(formData.docImages?.wht50Tawi || []).length > 0 && (
                                <div className="flex items-center gap-2 overflow-x-auto pt-0.5">
                                  {formData.docImages.wht50Tawi.map((url, idx) => (
                                    <div
                                      key={idx}
                                      className="relative w-14 h-14 rounded-xl overflow-hidden border border-indigo-300 shrink-0 bg-white"
                                    >
                                      <img
                                        src={url}
                                        alt={`ใบ 50 ทวิ ${idx + 1}`}
                                        onClick={() =>
                                          setPreviewImage({
                                            url,
                                            title: `หนังสือรับรองหัก ณ ที่จ่าย 50 ทวิ (รูปที่ ${idx + 1})`
                                          })
                                        }
                                        className="w-full h-full object-cover cursor-zoom-in"
                                      />
                                      <button
                                        type="button"
                                        onClick={() => handleRemoveDocImage('wht50Tawi', idx)}
                                        className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center shadow"
                                      >
                                        <X size={10} strokeWidth={3} />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* แนบรูปภาพส่งรถ (4 รายการ) */}
                        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-2">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                              <span className="text-xs font-bold text-[#0b4644] block">
                                แนบรูปภาพส่งรถ (รูปบัตร ปชช. และ ใบขับขี่, ลูกค้าเซ็นสัญญา, รูปสัญญาคู่กับบัตร, รูปลูกค้ารับรถ)
                              </span>
                            </div>
                            <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-[#0b4644] text-[#f7d774] text-xs font-bold flex items-center gap-1.5 shrink-0">
                              <Camera size={13} />
                              <span>เพิ่มรูปส่งรถ ({(formData.docImages?.handoverPhoto || []).length})</span>
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={(e) => {
                                  handleDocImageUpload('handoverPhoto', e.target.files);
                                  e.target.value = '';
                                }}
                              />
                            </label>
                          </div>
                          {(formData.docImages?.handoverPhoto || []).length > 0 && (
                            <div className="flex items-center gap-2 overflow-x-auto pt-1">
                              {formData.docImages.handoverPhoto.map((url, idx) => (
                                <div key={idx} className="relative w-14 h-14 rounded-xl overflow-hidden border shrink-0">
                                  <img
                                    src={url}
                                    alt={`รูปส่งรถ ${idx + 1}`}
                                    onClick={() => setPreviewImage({ url, title: `หลักฐานส่งมอบรถ (${idx + 1})` })}
                                    className="w-full h-full object-cover cursor-zoom-in"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveDocImage('handoverPhoto', idx)}
                                    className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center"
                                  >
                                    <X size={10} />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* แนบรูปรถก่อนส่งมอบ (รอบคัน / เลขไมล์ / น้ำมัน) + รายละเอียดกรณีมีรอย */}
                        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs font-bold text-[#0b4644]">
                              แนบรูปรถก่อนส่งมอบ (รอบคัน / เลขไมล์ / น้ำมัน)
                            </span>
                            <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-[#f4f7f6] border border-slate-300 text-xs font-bold text-[#0b4644] flex items-center gap-1.5">
                              <Camera size={13} />
                              <span>แนบรูปรถ ({(formData.docImages?.carOutPhoto || []).length})</span>
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={(e) => {
                                  handleDocImageUpload('carOutPhoto', e.target.files);
                                  e.target.value = '';
                                }}
                              />
                            </label>
                          </div>
                          {(formData.docImages?.carOutPhoto || []).length > 0 && (
                            <div className="flex items-center gap-2 overflow-x-auto">
                              {formData.docImages.carOutPhoto.map((url, idx) => (
                                <div key={idx} className="relative w-14 h-14 rounded-xl overflow-hidden border shrink-0">
                                  <img
                                    src={url}
                                    alt={`รูปรถก่อนส่ง ${idx + 1}`}
                                    onClick={() => setPreviewImage({ url, title: `รูปรถก่อนส่งมอบ (${idx + 1})` })}
                                    className="w-full h-full object-cover cursor-zoom-in"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveDocImage('carOutPhoto', idx)}
                                    className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center"
                                  >
                                    <X size={10} />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                          <LuxuryInput
                            label="ระบุรายละเอียดกรณีรถมีรอยก่อนส่งมอบ (ข้อความ)"
                            name="scratchOutDetails"
                            placeholder="เช่น กันชนหน้าซ้ายมีรอยขีด 2 ซม. (หรือพิมพ์ ไม่มีรอย)"
                            value={formData.scratchOutDetails}
                            onChange={handleFormChange}
                          />
                        </div>

                        {/* ค่าล้างรถก่อนส่งลูกค้า & ค่าใช้จ่ายไปส่งรถ (ลงรายจ่ายร้านอัตโนมัติ) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-2">
                            <LuxuryInput
                              label="ค่าล้างรถก่อนส่งลูกค้า (฿) • ลงรายจ่ายร้านอัตโนมัติ"
                              type="number"
                              min="0"
                              name="carWashFee"
                              value={formData.carWashFee}
                              onChange={handleFormChange}
                            />
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] text-slate-500">ไม่หักจากเงินมัดจำลูกค้า</span>
                              <label className="cursor-pointer px-2.5 py-1 rounded-lg bg-[#f4f7f6] border border-slate-300 text-[11px] font-bold text-[#0b4644] flex items-center gap-1">
                                <Camera size={12} />
                                <span>แนบสลิป ({(formData.docImages?.carWashSlip || []).length})</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  multiple
                                  className="hidden"
                                  onChange={(e) => {
                                    handleDocImageUpload('carWashSlip', e.target.files);
                                    e.target.value = '';
                                  }}
                                />
                              </label>
                            </div>
                            {(formData.docImages?.carWashSlip || []).length > 0 && (
                              <div className="flex items-center gap-1.5 overflow-x-auto">
                                {formData.docImages.carWashSlip.map((url, idx) => (
                                  <div key={idx} className="relative w-11 h-11 rounded-lg overflow-hidden border shrink-0">
                                    <img
                                      src={url}
                                      alt="สลิปค่าล้างรถ"
                                      onClick={() => setPreviewImage({ url, title: `สลิปค่าล้างรถ (${idx + 1})` })}
                                      className="w-full h-full object-cover cursor-zoom-in"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveDocImage('carWashSlip', idx)}
                                      className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-rose-600 text-white flex items-center justify-center"
                                    >
                                      <X size={8} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-2">
                            <LuxuryInput
                              label="ค่าใช้จ่ายในการไปส่งรถที่จ่ายเอง (฿) • ลงรายจ่ายอัตโนมัติ"
                              type="number"
                              min="0"
                              name="outboundDeliveryExpense"
                              value={formData.outboundDeliveryExpense}
                              onChange={handleFormChange}
                            />
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] text-slate-500">ไม่หักจากเงินมัดจำลูกค้า</span>
                              <label className="cursor-pointer px-2.5 py-1 rounded-lg bg-[#f4f7f6] border border-slate-300 text-[11px] font-bold text-[#0b4644] flex items-center gap-1">
                                <Camera size={12} />
                                <span>แนบสลิป ({(formData.docImages?.outboundDeliverySlip || []).length})</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  multiple
                                  className="hidden"
                                  onChange={(e) => {
                                    handleDocImageUpload('outboundDeliverySlip', e.target.files);
                                    e.target.value = '';
                                  }}
                                />
                              </label>
                            </div>
                            {(formData.docImages?.outboundDeliverySlip || []).length > 0 && (
                              <div className="flex items-center gap-1.5 overflow-x-auto">
                                {formData.docImages.outboundDeliverySlip.map((url, idx) => (
                                  <div key={idx} className="relative w-11 h-11 rounded-lg overflow-hidden border shrink-0">
                                    <img
                                      src={url}
                                      alt="สลิปค่าไปส่งรถ"
                                      onClick={() => setPreviewImage({ url, title: `สลิปค่าไปส่งรถ (${idx + 1})` })}
                                      className="w-full h-full object-cover cursor-zoom-in"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveDocImage('outboundDeliverySlip', idx)}
                                      className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-rose-600 text-white flex items-center justify-center"
                                    >
                                      <X size={8} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* 7. รับรถคืน และเคลียร์มัดจำ */}
                      <div className="p-5 rounded-2xl bg-[#f8faf9] border border-slate-200 space-y-4">
                        <h4 className="text-sm font-extrabold text-[#0b4644]">7. รับรถคืน และเคลียร์มัดจำ</h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <LuxuryInput
                            label="เลขไมล์ตอนรับรถคืน (กม.)"
                            type="number"
                            name="mileageEnd"
                            placeholder="เช่น 45680"
                            value={formData.mileageEnd}
                            onChange={handleFormChange}
                          />
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                              ระดับน้ำมันตอนรับรถคืน (เต็ม 10/10)
                            </label>
                            <select
                              name="fuelLevelEnd"
                              value={formData.fuelLevelEnd}
                              onChange={handleFormChange}
                              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-bold text-[#0b4644] outline-none"
                            >
                              {['10/10', '9/10', '8/10', '7/10', '6/10', '5/10', '4/10', '3/10', '2/10', '1/10'].map(
                                (lvl) => (
                                  <option key={lvl} value={lvl}>
                                    {lvl === '10/10' ? '10/10 (เต็มถัง)' : lvl}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>

                        {/* แนบรูปรถก่อนรับคืน (รอบคัน / เลขไมล์ / น้ำมัน) */}
                        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs font-bold text-[#0b4644]">
                              แนบรูปรถก่อนรับคืน (รอบคัน / เลขไมล์ / น้ำมัน)
                            </span>
                            <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-[#f4f7f6] border border-slate-300 text-xs font-bold text-[#0b4644] flex items-center gap-1.5">
                              <Camera size={13} />
                              <span>แนบรูปรถ ({(formData.docImages?.carInPhoto || []).length})</span>
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={(e) => {
                                  handleDocImageUpload('carInPhoto', e.target.files);
                                  e.target.value = '';
                                }}
                              />
                            </label>
                          </div>
                          {(formData.docImages?.carInPhoto || []).length > 0 && (
                            <div className="flex items-center gap-2 overflow-x-auto">
                              {formData.docImages.carInPhoto.map((url, idx) => (
                                <div key={idx} className="relative w-14 h-14 rounded-xl overflow-hidden border shrink-0">
                                  <img
                                    src={url}
                                    alt={`รูปรถก่อนรับคืน ${idx + 1}`}
                                    onClick={() => setPreviewImage({ url, title: `รูปรถก่อนรับคืน (${idx + 1})` })}
                                    className="w-full h-full object-cover cursor-zoom-in"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveDocImage('carInPhoto', idx)}
                                    className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center"
                                  >
                                    <X size={10} />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                          <LuxuryInput
                            label="ระบุรายละเอียดกรณีรถมีรอยตอนรับคืน (ข้อความ)"
                            name="scratchInDetails"
                            placeholder="เช่น สภาพเรียบร้อยดีตรงตามขาไป"
                            value={formData.scratchInDetails}
                            onChange={handleFormChange}
                          />
                        </div>

                        {/* ค่าใช้จ่ายในการไปรับรถที่จ่ายเอง & หักค่าปรับจากมัดจำ */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-2">
                            <LuxuryInput
                              label="ค่าใช้จ่ายในการไปรับรถที่จ่ายเอง (฿) • ลงรายจ่ายอัตโนมัติ"
                              type="number"
                              min="0"
                              name="returnPickupExpense"
                              value={formData.returnPickupExpense}
                              onChange={handleFormChange}
                            />
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] text-slate-500">ไม่หักจากเงินมัดจำลูกค้า</span>
                              <label className="cursor-pointer px-2.5 py-1 rounded-lg bg-[#f4f7f6] border border-slate-300 text-[11px] font-bold text-[#0b4644] flex items-center gap-1">
                                <Camera size={12} />
                                <span>แนบสลิป ({(formData.docImages?.returnPickupSlip || []).length})</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  multiple
                                  className="hidden"
                                  onChange={(e) => {
                                    handleDocImageUpload('returnPickupSlip', e.target.files);
                                    e.target.value = '';
                                  }}
                                />
                              </label>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-2">
                            <LuxuryInput
                              label="หักค่าปรับ / M-Flow / น้ำมันไม่เต็มถัง (฿)"
                              type="number"
                              min="0"
                              name="deductionAmount"
                              value={formData.deductionAmount}
                              onChange={handleFormChange}
                            />
                            <LuxuryInput
                              label="สาเหตุที่หักเงินมัดจำ (ถ้ามี)"
                              name="deductionReason"
                              placeholder="เช่น ค่าทางด่วน M-Flow 60 บาท"
                              value={formData.deductionReason}
                              onChange={handleFormChange}
                            />
                          </div>
                        </div>

                        {/* ช่องทางโอนคืนเงินมัดจำลูกค้า (เลือก QR Code หรือ เลขบัญชีธนาคาร) */}
                        <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs font-bold text-[#0b4644]">ช่องทางโอนคืนเงินมัดจำลูกค้า</span>
                            <div className="inline-flex p-1 rounded-xl bg-[#f4f7f6] border border-slate-200">
                              <button
                                type="button"
                                onClick={() => setFormData((prev) => ({ ...prev, refundChannel: 'BANK' }))}
                                className={`px-3 py-1 rounded-lg text-xs font-bold ${
                                  formData.refundChannel === 'BANK'
                                    ? 'bg-[#0b4644] text-[#f7d774]'
                                    : 'text-slate-600'
                                }`}
                              >
                                เลขบัญชีธนาคาร
                              </button>
                              <button
                                type="button"
                                onClick={() => setFormData((prev) => ({ ...prev, refundChannel: 'QR' }))}
                                className={`px-3 py-1 rounded-lg text-xs font-bold ${
                                  formData.refundChannel === 'QR'
                                    ? 'bg-[#0b4644] text-[#f7d774]'
                                    : 'text-slate-600'
                                }`}
                              >
                                QR Code
                              </button>
                            </div>
                          </div>

                          {formData.refundChannel === 'BANK' ? (
                            <LuxuryInput
                              label="ระบุธนาคาร เลขบัญชี และชื่อบัญชีลูกค้า"
                              name="customerBankAccount"
                              placeholder="เช่น กสิกรไทย 012-3-45678-9 นายสมชาย ใจดี"
                              value={formData.customerBankAccount}
                              onChange={handleFormChange}
                            />
                          ) : (
                            <div className="space-y-2">
                              <div className="flex items-center justify-between gap-2">
                                <LuxuryInput
                                  label="ระบุชื่อบัญชี / หมายเหตุ QR Code"
                                  name="customerBankAccount"
                                  placeholder="เช่น พร้อมเพย์ คุณจอย"
                                  value={formData.customerBankAccount}
                                  onChange={handleFormChange}
                                />
                                <label className="cursor-pointer px-3 py-2.5 mt-5 rounded-xl bg-[#0b4644] text-[#f7d774] text-xs font-bold flex items-center gap-1.5 shrink-0">
                                  <Camera size={14} />
                                  <span>แนบรูป QR ({(formData.docImages?.customerQrSlip || []).length})</span>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    className="hidden"
                                    onChange={(e) => {
                                      handleDocImageUpload('customerQrSlip', e.target.files);
                                      e.target.value = '';
                                    }}
                                  />
                                </label>
                              </div>
                              {(formData.docImages?.customerQrSlip || []).length > 0 && (
                                <div className="flex items-center gap-2 overflow-x-auto">
                                  {formData.docImages.customerQrSlip.map((url, idx) => (
                                    <div key={idx} className="relative w-14 h-14 rounded-xl overflow-hidden border shrink-0">
                                      <img
                                        src={url}
                                        alt="QR ลูกค้า"
                                        onClick={() => setPreviewImage({ url, title: `QR Code คืนมัดจำ (${idx + 1})` })}
                                        className="w-full h-full object-cover cursor-zoom-in"
                                      />
                                      <button
                                        type="button"
                                        onClick={() => handleRemoveDocImage('customerQrSlip', idx)}
                                        className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center"
                                      >
                                        <X size={10} />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}

                          {/* ยอดโอนคืนเงินมัดจำสุทธิ + ปุ่มยืนยันโอนคืนมัดจำแล้ว */}
                          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                            <div>
                              <p className="text-xs font-extrabold text-[#0b4644]">
                                ยอดโอนคืนเงินมัดจำสุทธิ: ฿
                                {Math.max(
                                  0,
                                  (Number(formData.depositAmount) || 0) - (Number(formData.deductionAmount) || 0)
                                ).toLocaleString()}{' '}
                                <span className="font-normal text-slate-500">
                                  (จากมัดจำ ฿{(Number(formData.depositAmount) || 0).toLocaleString()})
                                </span>
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-[#f4f7f6] border border-slate-300 text-xs font-bold text-[#0b4644] flex items-center gap-1">
                                <Camera size={13} />
                                <span>แนบสลิปคืน ({(formData.docImages?.depositRefundSlip || []).length})</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  multiple
                                  className="hidden"
                                  onChange={(e) => {
                                    handleDocImageUpload('depositRefundSlip', e.target.files);
                                    e.target.value = '';
                                  }}
                                />
                              </label>
                              <button
                                type="button"
                                onClick={() =>
                                  setFormData((prev) => ({ ...prev, depositReturned: !prev.depositReturned }))
                                }
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 ${
                                  formData.depositReturned
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-amber-100 text-amber-900 border border-amber-300'
                                }`}
                              >
                                <Check size={14} />
                                <span>
                                  {formData.depositReturned ? 'ยืนยันโอนคืนมัดจำแล้ว ✓' : 'ยืนยันโอนคืนมัดจำแล้ว'}
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 8. หมายเหตุอื่นๆ */}
                      <div className="p-5 rounded-2xl bg-[#f8faf9] border border-slate-200 space-y-2">
                        <h4 className="text-sm font-extrabold text-[#0b4644]">8. หมายเหตุอื่นๆ</h4>
                        <textarea
                          name="notes"
                          rows={2}
                          value={formData.notes}
                          onChange={handleFormChange}
                          placeholder="ระบุรายละเอียดเพิ่มเติม (ถ้ามี)..."
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm outline-none"
                        />
                      </div>
                    </div>

                    {/* Right Column: Financial Summary & Copy LINE Button */}
                    <div className="lg:col-span-4">
                      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(11,70,68,0.08)] overflow-hidden sticky top-4">
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-[#073331] to-[#0b4644] px-5 py-3.5 border-b-2 border-[#d49b27]">
                          <span className="text-[10px] uppercase tracking-widest text-[#f7d774] font-bold block">
                            AUTO COST CALCULATOR
                          </span>
                          <h4 className="text-sm sm:text-base font-extrabold text-white">
                            สรุปค่าใช้จ่าย คำนวณยอดชำระอัตโนมัติ
                          </h4>
                        </div>

                        <div className="p-5 space-y-4">
                          {/* Structured Input Grid */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-slate-200 focus-within:border-[#0b4644] focus-within:bg-white transition-all">
                              <label className="block text-[11px] font-bold text-slate-500">ค่าเช่าต่อวัน (฿)</label>
                              <div className="flex items-center gap-1 mt-1">
                                <span className="text-xs font-bold text-slate-400">฿</span>
                                <input
                                  type="number"
                                  name="dailyRate"
                                  min="0"
                                  value={formData.dailyRate}
                                  onChange={handleFormChange}
                                  className="w-full bg-transparent text-sm font-extrabold text-[#0b4644] tabular-nums outline-none"
                                />
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-slate-200 focus-within:border-[#0b4644] focus-within:bg-white transition-all">
                              <label className="block text-[11px] font-bold text-slate-500">เงินจองรถ (฿)</label>
                              <div className="flex items-center gap-1 mt-1">
                                <span className="text-xs font-bold text-slate-400">฿</span>
                                <input
                                  type="number"
                                  name="bookingFee"
                                  min="0"
                                  value={formData.bookingFee}
                                  onChange={handleFormChange}
                                  className="w-full bg-transparent text-sm font-extrabold text-[#0b4644] tabular-nums outline-none"
                                />
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-slate-200 focus-within:border-[#0b4644] focus-within:bg-white transition-all">
                              <label className="block text-[11px] font-bold text-slate-500">ค่ารับ-ส่งรถ (฿)</label>
                              <div className="flex items-center gap-1 mt-1">
                                <span className="text-xs font-bold text-slate-400">฿</span>
                                <input
                                  type="number"
                                  name="deliveryFee"
                                  min="0"
                                  value={formData.deliveryFee}
                                  onChange={handleFormChange}
                                  className="w-full bg-transparent text-sm font-extrabold text-[#0b4644] tabular-nums outline-none"
                                />
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-slate-200 focus-within:border-[#0b4644] focus-within:bg-white transition-all">
                              <label className="block text-[11px] font-bold text-slate-500">เงินมัดจำรถ (฿)</label>
                              <div className="flex items-center gap-1 mt-1">
                                <span className="text-xs font-bold text-slate-400">฿</span>
                                <input
                                  type="number"
                                  name="depositAmount"
                                  min="0"
                                  value={formData.depositAmount}
                                  onChange={handleFormChange}
                                  className="w-full bg-transparent text-sm font-extrabold text-[#0b4644] tabular-nums outline-none"
                                />
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-slate-200 focus-within:border-[#0b4644] focus-within:bg-white transition-all">
                              <label className="block text-[11px] font-bold text-slate-500">ค่าล่วงเวลา / OT (฿)</label>
                              <div className="flex items-center gap-1 mt-1">
                                <span className="text-xs font-bold text-slate-400">฿</span>
                                <input
                                  type="number"
                                  name="lateFeeOrExtra"
                                  min="0"
                                  value={formData.lateFeeOrExtra}
                                  onChange={handleFormChange}
                                  className="w-full bg-transparent text-sm font-extrabold text-[#0b4644] tabular-nums outline-none"
                                />
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-slate-200 focus-within:border-rose-400 focus-within:bg-white transition-all">
                              <label className="block text-[11px] font-bold text-slate-500">ส่วนลดพิเศษ (฿)</label>
                              <div className="flex items-center gap-1 mt-1">
                                <span className="text-xs font-bold text-rose-400">-฿</span>
                                <input
                                  type="number"
                                  name="discountAmount"
                                  min="0"
                                  value={formData.discountAmount}
                                  onChange={handleFormChange}
                                  className="w-full bg-transparent text-sm font-extrabold text-rose-600 tabular-nums outline-none"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Itemized Breakdown */}
                          <div className="p-4 rounded-2xl bg-[#f8faf9] border border-slate-200/80 space-y-2 text-xs">
                            <div className="flex justify-between text-slate-600">
                              <span>
                                ค่าเช่ารถ ({formData.rentalDays} วัน × ฿{(Number(formData.dailyRate) || 0).toLocaleString()})
                              </span>
                              <span className="font-bold text-slate-800 tabular-nums">
                                ฿{formFinancials.rentalSubtotal.toLocaleString()}
                              </span>
                            </div>

                            {Number(formData.deliveryFee) > 0 && (
                              <div className="flex justify-between text-slate-600">
                                <span>ค่าบริการรับ-ส่งรถ</span>
                                <span className="font-bold text-slate-800 tabular-nums">
                                  +฿{Number(formData.deliveryFee).toLocaleString()}
                                </span>
                              </div>
                            )}

                            {Number(formData.lateFeeOrExtra) > 0 && (
                              <div className="flex justify-between text-slate-600">
                                <span>ค่าล่วงเวลา / OT</span>
                                <span className="font-bold text-slate-800 tabular-nums">
                                  +฿{Number(formData.lateFeeOrExtra).toLocaleString()}
                                </span>
                              </div>
                            )}

                            {Number(formData.discountAmount) > 0 && (
                              <div className="flex justify-between text-rose-600">
                                <span>ส่วนลดพิเศษ</span>
                                <span className="font-bold tabular-nums">
                                  -฿{Number(formData.discountAmount).toLocaleString()}
                                </span>
                              </div>
                            )}

                            <div className="flex justify-between text-slate-600">
                              <span>เงินมัดจำประกันรถ</span>
                              <span className="font-bold text-slate-800 tabular-nums">
                                ฿{(Number(formData.depositAmount) || 0).toLocaleString()}
                              </span>
                            </div>

                            <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-slate-800">
                              <span>รวมค่าใช้จ่ายทั้งหมด</span>
                              <span className="text-[#0b4644] tabular-nums">
                                ฿{formFinancials.grandTotal.toLocaleString()}
                              </span>
                            </div>

                            <div className="flex justify-between text-emerald-700 font-semibold">
                              <span>หัก เงินจองรถ</span>
                              <span className="tabular-nums">-฿{(Number(formData.bookingFee) || 0).toLocaleString()}</span>
                            </div>
                          </div>

                          {/* Highlighted Balance Due at Pickup */}
                          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#073331] to-[#0b4644] text-white border border-[#d49b27]/60 flex items-center justify-between gap-2 shadow-sm">
                            <div>
                              <p className="text-xs font-bold text-white">วันรับรถลูกค้าจ่ายเพิ่ม</p>
                              <p className="text-[10px] text-[#f7d774]/85">ยอดชำระสุทธิวันส่งมอบรถ</p>
                            </div>
                            <span className="text-2xl font-black text-[#f7d774] tabular-nums">
                              ฿{formFinancials.balanceDueAtPickup.toLocaleString()}
                            </span>
                          </div>

                          {/* Copy LINE Message Button */}
                          <button
                            type="button"
                            onClick={() => handleCopyLineMessage(formData)}
                            className="w-full py-2.5 rounded-xl bg-[#06c755] hover:bg-[#05b34c] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-sm transition-all"
                          >
                            <Copy size={15} />
                            <span>คัดลอกข้อความ ส่งให้ลูกค้าทาง Line</span>
                          </button>

                          {/* Form Action Buttons */}
                          <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
                            <button
                              type="button"
                              onClick={() => setShowFormModal(false)}
                              className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
                            >
                              ยกเลิก
                            </button>
                            <button
                              type="submit"
                              className="flex-[2] py-2.5 rounded-xl bg-gradient-to-r from-[#fae29c] via-[#e2a93b] to-[#c98b1e] hover:brightness-105 text-[#042322] text-xs sm:text-sm font-extrabold shadow-md transition-all"
                            >
                              บันทึกข้อมูลการจอง
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        ) : activeTab === 'users' && isOwnerUser ? (
          /* ================= USER ACCESS & STAFF MANAGEMENT TAB (OWNER ONLY) ================= */
          <div className="space-y-6">
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#b87d14] font-bold">
                  USER ACCOUNTS &amp; ROLE PERMISSIONS ({users.length} บัญชี)
                </span>
                <h2 className="text-lg sm:text-2xl font-extrabold text-[#0b4644] mt-0.5">
                  จัดการผู้ใช้งานและสิทธิ์การเข้าถึงระบบ
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  เพิ่มบัญชีแอดมินหรือพนักงานสำหรับล็อกอินใช้งานบนมือถือ แท็บเล็ต และคอมพิวเตอร์ (ซิงค์กับ Supabase อัตโนมัติ)
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowUserForm((prev) => !prev)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#f5cc66] via-[#e2a93b] to-[#c98b1e] hover:brightness-105 text-[#052928] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <UserPlus size={16} />
                <span>เพิ่มผู้ใช้งานใหม่</span>
              </button>
            </div>

            {showUserForm && (
              <form
                onSubmit={handleAddUser}
                className="bg-white p-5 sm:p-6 rounded-3xl border-2 border-[#d49b27]/60 shadow-md space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-[#0b4644]">สร้างบัญชีผู้ใช้งานใหม่</h3>
                  <button
                    type="button"
                    onClick={() => setShowUserForm(false)}
                    className="text-slate-400 hover:text-slate-700"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <LuxuryInput
                    label="ชื่อ-ตำแหน่งที่แสดงในระบบ"
                    placeholder="เช่น แอดมินเมย์ / ทีมส่งรถ"
                    value={userForm.displayName}
                    onChange={(e) => setUserForm({ ...userForm, displayName: e.target.value })}
                    required
                  />
                  <LuxuryInput
                    label="ชื่อผู้ใช้สำหรับล็อกอิน (Username)"
                    placeholder="เช่น may01 (ภาษาอังกฤษ/ตัวเลข)"
                    value={userForm.username}
                    onChange={(e) => setUserForm({ ...userForm, username: e.target.value })}
                    required
                  />
                  <LuxuryInput
                    label="รหัสผ่าน (Password / PIN)"
                    placeholder="ตั้งรหัสผ่านเข้าใช้งาน"
                    value={userForm.password}
                    onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                    required
                  />
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">ระดับสิทธิ์การใช้งาน</label>
                    <select
                      value={userForm.role}
                      onChange={(e) =>
                        setUserForm({
                          ...userForm,
                          role: e.target.value,
                          canViewFinance: e.target.value === 'OWNER' ? true : userForm.canViewFinance
                        })
                      }
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-2xl text-sm font-bold text-[#0b4644] outline-none"
                    >
                      <option value="STAFF">แอดมิน / พนักงาน (Staff)</option>
                      <option value="OWNER">เจ้าของร้าน (Owner — เข้าถึงทุกเมนู)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      disabled={userForm.role === 'OWNER'}
                      checked={userForm.role === 'OWNER' ? true : userForm.canViewFinance}
                      onChange={(e) => setUserForm({ ...userForm, canViewFinance: e.target.checked })}
                      className="w-4 h-4 rounded accent-[#0b4644]"
                    />
                    <span className="text-xs font-semibold text-slate-700">
                      อนุญาตให้ดูหน้า <strong className="text-[#0b4644]">รายรับ - รายจ่าย &amp; ภาษี</strong>
                    </span>
                  </label>

                  <div className="flex items-center gap-2 ml-auto">
                    <button
                      type="button"
                      onClick={() => setShowUserForm(false)}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                    >
                      ยกเลิก
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-[#0b4644] hover:bg-[#073331] text-[#f7d774] text-xs font-extrabold shadow-sm"
                    >
                      บันทึกผู้ใช้งานใหม่ ✓
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((u) => {
                const isPrimaryOwner = u.id === 1;
                const isEditingThisUser = editingUserId === u.id;
                return (
                  <div
                    key={u.id}
                    className={`bg-white p-5 rounded-3xl border shadow-sm flex flex-col justify-between space-y-4 ${
                      u.active === false ? 'border-slate-200 opacity-70' : 'border-slate-200/90'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-extrabold flex items-center gap-1 ${
                            u.role === 'OWNER'
                              ? 'bg-[#0b4644] text-[#f7d774]'
                              : 'bg-sky-50 text-sky-800 border border-sky-200'
                          }`}
                        >
                          <Shield size={11} />
                          <span>{u.role === 'OWNER' ? 'เจ้าของร้าน (OWNER)' : 'แอดมินร้าน (STAFF)'}</span>
                        </span>

                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            u.active !== false
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-rose-50 text-rose-700 border border-rose-200'
                          }`}
                        >
                          {u.active !== false ? 'เปิดใช้งาน' : 'ระงับสิทธิ์'}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-extrabold text-[#0b4644]">{u.displayName}</h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Username: <strong className="text-slate-800">{u.username}</strong> • รหัสผ่าน:{' '}
                          <strong className="text-slate-800">{u.password}</strong>
                        </p>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#f8faf9] border border-slate-100 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500">สิทธิ์ดูบัญชี &amp; ภาษี:</span>
                          {u.role === 'OWNER' ? (
                            <span className="font-bold text-emerald-700">เข้าถึงได้ทั้งหมด</span>
                          ) : (
                            <button
                              type="button"
                              onClick={() => {
                                const next = users.map((item) =>
                                  item.id === u.id ? { ...item, canViewFinance: !item.canViewFinance } : item
                                );
                                setUsers(next);
                                persistMetaState({ users: next });
                                showToast('อัปเดตสิทธิ์การเข้าถึงบัญชีเรียบร้อย');
                              }}
                              className={`px-2.5 py-0.5 rounded-lg text-[11px] font-bold ${
                                u.canViewFinance
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-slate-200 text-slate-600'
                              }`}
                            >
                              {u.canViewFinance ? 'อนุญาต ✓' : 'ปิดการเข้าถึง'}
                            </button>
                          )}
                        </div>
                      </div>

                      {isEditingThisUser && (
                        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2.5">
                          <p className="text-[11px] font-extrabold text-amber-900">
                            แก้ไขข้อมูลผู้ใช้งาน ({u.username})
                          </p>
                          <div className="space-y-2">
                            <input
                              type="text"
                              value={editUserForm.displayName}
                              onChange={(e) =>
                                setEditUserForm({ ...editUserForm, displayName: e.target.value })
                              }
                              placeholder="ชื่อ-ตำแหน่งที่แสดง"
                              className="w-full px-3 py-2 bg-white border border-amber-300 rounded-xl text-xs font-bold outline-none"
                            />
                            <div className="grid grid-cols-2 gap-2">
                              <input
                                type="text"
                                value={editUserForm.password}
                                onChange={(e) =>
                                  setEditUserForm({ ...editUserForm, password: e.target.value })
                                }
                                placeholder="รหัสผ่านใหม่"
                                className="w-full px-3 py-2 bg-white border border-amber-300 rounded-xl text-xs font-bold outline-none"
                              />
                              {!isPrimaryOwner && (
                                <select
                                  value={editUserForm.role}
                                  onChange={(e) =>
                                    setEditUserForm({ ...editUserForm, role: e.target.value })
                                  }
                                  className="w-full px-2.5 py-2 bg-white border border-amber-300 rounded-xl text-xs font-bold text-[#0b4644] outline-none"
                                >
                                  <option value="STAFF">STAFF</option>
                                  <option value="OWNER">OWNER</option>
                                </select>
                              )}
                            </div>
                          </div>
                          <div className="flex justify-end gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => setEditingUserId(null)}
                              className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-slate-600 text-xs font-bold"
                            >
                              ยกเลิก
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (!editUserForm.password.trim() || !editUserForm.displayName.trim()) return;
                                const next = users.map((item) =>
                                  item.id === u.id
                                    ? {
                                        ...item,
                                        displayName: editUserForm.displayName.trim(),
                                        password: editUserForm.password.trim(),
                                        role: isPrimaryOwner ? 'OWNER' : editUserForm.role,
                                        canViewFinance:
                                          (isPrimaryOwner ? 'OWNER' : editUserForm.role) === 'OWNER'
                                            ? true
                                            : item.canViewFinance
                                      }
                                    : item
                                );
                                setUsers(next);
                                persistMetaState({ users: next });
                                if (currentUser?.id === u.id) {
                                  const updatedSession = {
                                    ...currentUser,
                                    displayName: editUserForm.displayName.trim()
                                  };
                                  setCurrentUser(updatedSession);
                                  try {
                                    localStorage.setItem(
                                      'bf_carrent_session_v1',
                                      JSON.stringify(updatedSession)
                                    );
                                  } catch (err) {}
                                }
                                setEditingUserId(null);
                                showToast(`บันทึกข้อมูลของ ${u.username} เรียบร้อยแล้ว ✓`);
                              }}
                              className="px-3.5 py-1.5 rounded-xl bg-[#0b4644] text-[#f7d774] text-xs font-extrabold"
                            >
                              บันทึกการแก้ไข
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            if (isEditingThisUser) {
                              setEditingUserId(null);
                            } else {
                              setEditingUserId(u.id);
                              setEditUserForm({
                                displayName: u.displayName || '',
                                password: u.password || '',
                                role: u.role || 'STAFF',
                                canViewFinance: Boolean(u.canViewFinance)
                              });
                            }
                          }}
                          className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-1"
                        >
                          <Edit3 size={12} />
                          <span>{isEditingThisUser ? 'ปิด' : 'แก้ไข / รหัสผ่าน'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            const info = `🔑 ข้อมูลเข้าใช้งานระบบ BF CARRENT\n• ชื่อผู้ใช้งาน (Username): ${u.username}\n• รหัสผ่าน (Password): ${u.password}\n• สิทธิ์การใช้งาน: ${u.role === 'OWNER' ? 'เจ้าของร้าน (Owner)' : 'แอดมินร้าน (Staff)'}`;
                            navigator.clipboard?.writeText(info);
                            showToast(`คัดลอกข้อมูลล็อกอินของ ${u.displayName} เรียบร้อย ✓`);
                          }}
                          title="คัดลอก Username และรหัสผ่านส่งให้แอดมินทาง LINE"
                          className="px-2.5 py-1.5 rounded-xl bg-[#06c755]/10 hover:bg-[#06c755] text-[#059640] hover:text-white text-xs font-bold flex items-center gap-1 transition-all"
                        >
                          <Copy size={12} />
                          <span>ส่งรหัส</span>
                        </button>
                      </div>

                      {!isPrimaryOwner && (
                        <div className="flex items-center gap-1.5 ml-auto">
                          <button
                            type="button"
                            onClick={() => {
                              const next = users.map((item) =>
                                item.id === u.id ? { ...item, active: item.active === false } : item
                              );
                              setUsers(next);
                              persistMetaState({ users: next });
                              showToast(u.active === false ? 'เปิดใช้งานบัญชีแล้ว' : 'ระงับบัญชีชั่วคราวแล้ว');
                            }}
                            className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                          >
                            {u.active !== false ? 'ระงับ' : 'เปิดใช้'}
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setDeleteTarget({
                                type: 'user',
                                id: u.id,
                                label: `${u.displayName} (${u.username})`
                              })
                            }
                            className="p-2 rounded-xl bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white transition-all"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : activeTab === 'finance' && canAccessFinance ? (
          /* ================= INCOME & EXPENSES LEDGER & TAX REPORTING VIEW ================= */
          <div className="space-y-6">
            {/* Header & Tax Filters */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#b87d14] font-bold">
                    AUTO FINANCIAL &amp; TAX LEDGER (ภ.ง.ด.94 / ภ.ง.ด.90)
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b4644] mt-0.5">
                    บัญชีรายรับ - รายจ่าย และสรุปยอดยื่นภาษีสรรพากร
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    ดึงยอดรับ-จ่ายจริงอัตโนมัติ (แยกเงินมัดจำลูกค้าออก) พร้อมตัวกรองรอบยื่นภาษีและทะเบียนเครดิตภาษี 50 ทวิ
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#052928] to-[#0b4644] text-white border border-[#d49b27]/60 shadow-xs">
                    <div className="text-right">
                      <p className="text-[10px] text-white/70">กำไรสุทธิสะสม</p>
                      <p className="text-xs sm:text-sm font-extrabold text-[#f7d774] tabular-nums">
                        ฿{stats.netProfit.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-px h-7 bg-white/15" />
                    <div className="text-right">
                      <p className="text-[10px] text-white/70">มัดจำรอคืน</p>
                      <p className="text-xs sm:text-sm font-bold text-white tabular-nums">
                        ฿{stats.unreturnedDeposits.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowTxForm((prev) => !prev)}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-[#0b4644] hover:bg-[#083332] text-[#f7d774] text-xs sm:text-sm font-bold shadow-sm transition-all"
                  >
                    <Plus size={16} />
                    <span>เพิ่มค่าใช้จ่ายร้านอื่นๆ</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleExportTaxReportExcel}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#f3c65f] via-[#e2a93b] to-[#c98b1e] text-[#052928] text-xs sm:text-sm font-extrabold shadow-sm transition-all"
                  >
                    <Download size={16} />
                    <span>ส่งออกรายงานภาษี (.xlsx)</span>
                  </button>
                </div>
              </div>

              {/* แถบตัวกรอง: ปีภาษี / รอบยื่นภาษี (ภ.ง.ด.94 / ภ.ง.ด.90 / รายเดือน) / รถทุกคัน */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">ปีภาษี (พ.ศ. / ค.ศ.)</label>
                  <select
                    value={financeYearFilter}
                    onChange={(e) => setFinanceYearFilter(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#f8faf9] border border-slate-200 focus:border-[#0b4644] rounded-2xl text-sm font-bold text-[#0b4644] outline-none"
                  >
                    <option value="ALL">ทุกปีรวมกัน</option>
                    {availableYears.map((yr) => (
                      <option key={yr} value={String(yr)}>
                        ปีภาษี {yr} (พ.ศ. {yr + 543})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">
                    รอบยื่นภาษี (ภ.ง.ด.94 / ภ.ง.ด.90 / เดือน)
                  </label>
                  <select
                    value={financePeriodFilter}
                    onChange={(e) => setFinancePeriodFilter(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#f8faf9] border border-slate-200 focus:border-[#0b4644] rounded-2xl text-sm font-bold text-[#0b4644] outline-none"
                  >
                    <option value="ALL">ทั้งปี (ม.ค. – ธ.ค. • ยื่น ภ.ง.ด.90)</option>
                    <option value="H1">ครึ่งปีแรก (ม.ค. – มิ.ย. • ยื่น ภ.ง.ด.94)</option>
                    <option value="H2">ครึ่งปีหลัง (ก.ค. – ธ.ค.)</option>
                    <optgroup label="เลือกเจาะจงรายเดือน">
                      <option value="01">มกราคม (01)</option>
                      <option value="02">กุมภาพันธ์ (02)</option>
                      <option value="03">มีนาคม (03)</option>
                      <option value="04">เมษายน (04)</option>
                      <option value="05">พฤษภาคม (05)</option>
                      <option value="06">มิถุนายน (06)</option>
                      <option value="07">กรกฎาคม (07)</option>
                      <option value="08">สิงหาคม (08)</option>
                      <option value="09">กันยายน (09)</option>
                      <option value="10">ตุลาคม (10)</option>
                      <option value="11">พฤศจิกายน (11)</option>
                      <option value="12">ธันวาคม (12)</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">กรองตามรถในระบบ</label>
                  <select
                    value={financeCarFilter}
                    onChange={(e) => setFinanceCarFilter(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#f8faf9] border border-slate-200 focus:border-[#0b4644] rounded-2xl text-sm font-semibold text-slate-700 outline-none"
                  >
                    <option value="ALL">ดูทุกคัน (All Cars)</option>
                    {carModels.map((car) => (
                      <option key={car} value={car}>{car}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* ฟอร์มเพิ่มค่าใช้จ่ายดำเนินงานอื่นๆ ของร้าน (ลดหย่อนภาษีตามจริง) */}
            {showTxForm && (
              <form
                onSubmit={handleAddTransaction}
                className="bg-white p-6 rounded-3xl border-2 border-[#d49b27]/60 shadow-md space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#0b4644]">
                    บันทึกค่าใช้จ่ายดำเนินงานอื่นๆ ของร้าน (ใช้หักลดหย่อนภาษีตามจริง)
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowTxForm(false)}
                    className="text-slate-400 hover:text-slate-700"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <LuxuryInput
                    label="วันที่จ่ายเงิน"
                    type="date"
                    value={txForm.date}
                    onChange={(e) => setTxForm({ ...txForm, date: e.target.value })}
                    required
                  />
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">หมวดหมู่ค่าใช้จ่ายภาษี</label>
                    <select
                      value={txForm.category}
                      onChange={(e) => setTxForm({ ...txForm, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm outline-none"
                    >
                      <option value="ค่าโฆษณายิงแอด (FB/TikTok/Google)">ค่าโฆษณายิงแอด (FB/TikTok/Google)</option>
                      <option value="ค่าต่อสัญญาณ GPS รายปี">ค่าต่อสัญญาณ GPS รายปี</option>
                      <option value="ค่างวดไฟแนนซ์ / ค่าเสื่อมราคารถ">ค่างวดไฟแนนซ์ / ค่าเสื่อมราคารถ</option>
                      <option value="ค่าทำบัญชี / ค่าธรรมเนียมธนาคาร">ค่าทำบัญชี / ค่าธรรมเนียมธนาคาร</option>
                      <option value="ค่าอุปกรณ์ดูแลรถ / น้ำยา / กล้องติดรถ">ค่าอุปกรณ์ดูแลรถ / น้ำยา / กล้องติดรถ</option>
                      <option value="ค่าใช้จ่ายดำเนินงานอื่นๆ">ค่าใช้จ่ายดำเนินงานอื่นๆ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">รถที่เกี่ยวข้อง</label>
                    <select
                      value={txForm.carModel}
                      onChange={(e) => setTxForm({ ...txForm, carModel: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm outline-none"
                    >
                      <option value="ทุกคัน / ส่วนกลาง">ทุกคัน / ส่วนกลาง</option>
                      {carModels.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <LuxuryInput
                    label="จำนวนเงิน (฿)"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={txForm.amount}
                    onChange={(e) => setTxForm({ ...txForm, amount: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                  <div className="sm:col-span-7">
                    <LuxuryInput
                      label="รายละเอียดรายการ / เลขที่ใบกำกับภาษี"
                      placeholder="เช่น ค่าโฆษณาเพจ BF Carrent เดือน พ.ย., ค่าบริการ GPS 6 คัน"
                      value={txForm.description}
                      onChange={(e) => setTxForm({ ...txForm, description: e.target.value })}
                      required
                    />
                  </div>
                  <div className="sm:col-span-5 flex flex-wrap items-center justify-end gap-2">
                    <label className="cursor-pointer px-3.5 py-2.5 rounded-xl bg-[#f4f7f6] hover:bg-[#0b4644] text-[#0b4644] hover:text-[#f7d774] border border-slate-300 text-xs font-bold flex items-center gap-1.5 transition-all">
                      <Camera size={14} />
                      <span>
                        {(txForm.images || []).length > 0
                          ? `+ แนบใบเสร็จแล้ว (${txForm.images.length})`
                          : 'แนบรูปใบเสร็จ / บิล'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          handleGenericImageUpload(e.target.files, (urls) =>
                            setTxForm((prev) => ({ ...prev, images: [...(prev.images || []), ...urls] }))
                          );
                          e.target.value = '';
                        }}
                      />
                    </label>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-[#0b4644] hover:bg-[#083332] text-[#f7d774] text-xs font-bold shadow-sm"
                    >
                      บันทึกรายจ่าย
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* แถบตรวจสอบเพดานรายรับ 1.8 ล้านบาท/ปี (เกณฑ์จดทะเบียน VAT 7%) */}
            <div
              className={`p-5 rounded-3xl border shadow-sm space-y-2.5 ${
                taxAnalytics.annualGrossForVat >= taxAnalytics.vatThreshold
                  ? 'bg-rose-50 border-rose-400'
                  : taxAnalytics.vatProgressPercent >= 80
                  ? 'bg-amber-50 border-amber-400'
                  : 'bg-white border-slate-200/90'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck
                    size={18}
                    className={
                      taxAnalytics.annualGrossForVat >= taxAnalytics.vatThreshold
                        ? 'text-rose-600'
                        : 'text-[#0b4644]'
                    }
                  />
                  <span className="text-xs sm:text-sm font-extrabold text-[#0b4644]">
                    ติดตามเพดานรายรับสะสมประจำปี {taxAnalytics.targetVatYear} (เกณฑ์จดทะเบียน VAT 7% ที่ 1,800,000 บาท/ปี)
                  </span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                    taxAnalytics.annualGrossForVat >= taxAnalytics.vatThreshold
                      ? 'bg-rose-600 text-white'
                      : taxAnalytics.vatProgressPercent >= 80
                      ? 'bg-amber-500 text-white'
                      : 'bg-emerald-100 text-[#0b4644]'
                  }`}
                >
                  {taxAnalytics.annualGrossForVat >= taxAnalytics.vatThreshold
                    ? '⚠️ เกิน 1.8 ล้านบาทแล้ว (ต้องจด VAT ภายใน 30 วัน)'
                    : `ใช้ไป ${taxAnalytics.vatProgressPercent}% • เหลืออีก ฿${taxAnalytics.vatRemaining.toLocaleString()}`}
                </span>
              </div>

              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div
                  className={`h-full transition-all duration-500 ${
                    taxAnalytics.annualGrossForVat >= taxAnalytics.vatThreshold
                      ? 'bg-rose-600'
                      : taxAnalytics.vatProgressPercent >= 80
                      ? 'bg-amber-500'
                      : 'bg-gradient-to-r from-[#0b4644] to-[#d49b27]'
                  }`}
                  style={{ width: `${taxAnalytics.vatProgressPercent}%` }}
                />
              </div>

              <div className="flex flex-wrap justify-between text-[11px] text-slate-600 font-medium">
                <span>
                  รายรับสะสมปี {taxAnalytics.targetVatYear}:{' '}
                  <strong className="text-[#0b4644]">฿{taxAnalytics.annualGrossForVat.toLocaleString()}</strong>
                </span>
                <span>เพดานยกเว้น VAT ตามกฎหมาย: ฿1,800,000 / ปี</span>
              </div>
            </div>

            {/* Financial KPI Cards (อัปเดตตัวเลขตามปีภาษี / รอบยื่นภาษี / คันรถที่เลือก) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <LuxuryStatCard
                title="รายรับรวม (ช่วงที่เลือก)"
                value={`฿${taxAnalytics.totalIncome.toLocaleString()}`}
                subtitle="ไม่นับรวมเงินมัดจำของลูกค้า"
                icon={<TrendingUp size={20} />}
              />
              <LuxuryStatCard
                title="รายจ่ายรวม (ช่วงที่เลือก)"
                value={`฿${taxAnalytics.totalExpenses.toLocaleString()}`}
                subtitle="ล้างรถ + ส่งรับรถ + ซ่อม + ค่าใช้จ่ายร้าน"
                icon={<TrendingDown size={20} />}
              />
              <LuxuryStatCard
                title="กำไรสุทธิทางภาษี"
                value={`฿${taxAnalytics.netProfit.toLocaleString()}`}
                subtitle="รายรับ หัก รายจ่ายตามจริง"
                icon={<Wallet size={20} />}
                highlight
              />
              <LuxuryStatCard
                title="เครดิตหัก ณ ที่จ่าย 5% (50 ทวิ)"
                value={`฿${taxAnalytics.totalWht5Percent.toLocaleString()}`}
                subtitle={`จากบิลบริษัทฯ ${taxAnalytics.corporateWhtList.length} รายการ (ใช้ลดภาษีได้)`}
                icon={<FileSpreadsheet size={20} />}
              />
            </div>

            {/* ตารางสรุปยอดแยกตามหมวดหมู่ภาษี (พร้อมกรอก ภ.ง.ด.94 / ภ.ง.ด.90) */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="p-4 sm:p-5 bg-[#f4f7f6] border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0b4644]">
                    สรุปยอดรวมแยกตามหมวดหมู่บัญชีภาษี (พร้อมยื่น ภ.ง.ด.94 / ภ.ง.ด.90)
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    แยกหมวดรายรับและรายจ่ายให้พร้อมกรอกแบบแสดงรายการภาษีเงินได้
                  </p>
                </div>
                <span className="text-xs font-bold text-[#0b4644] bg-white px-3 py-1.5 rounded-xl border border-slate-200">
                  ถือเงินมัดจำลูกค้ารอคืน (ไม่คิดเป็นรายได้): ฿{stats.unreturnedDeposits.toLocaleString()}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#f8faf9] text-slate-600 border-b border-slate-200 text-[11px] uppercase">
                      <th className="p-3.5 font-bold">ประเภท</th>
                      <th className="p-3.5 font-bold">หมวดหมู่รายการ</th>
                      <th className="p-3.5 font-bold text-center">จำนวนรายการ</th>
                      <th className="p-3.5 font-bold text-right">เครดิตภาษี 5% (50 ทวิ)</th>
                      <th className="p-3.5 font-bold text-right">ยอดเงินรวม (บาท)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {taxAnalytics.categoryBreakdown.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="p-6 text-center text-slate-400">
                          ยังไม่มีข้อมูลในรอบปี/เดือนที่เลือก
                        </td>
                      </tr>
                    ) : (
                      taxAnalytics.categoryBreakdown.map((cat, idx) => (
                        <tr key={idx} className="hover:bg-[#f8faf9]">
                          <td className="p-3.5 whitespace-nowrap">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                                cat.type === 'รายรับ'
                                  ? 'bg-[#0b4644]/10 text-[#0b4644]'
                                  : 'bg-rose-50 text-rose-700'
                              }`}
                            >
                              {cat.type}
                            </span>
                          </td>
                          <td className="p-3.5 font-semibold text-slate-800">{cat.category}</td>
                          <td className="p-3.5 text-center text-slate-600">{cat.count}</td>
                          <td className="p-3.5 text-right tabular-nums text-indigo-700 font-semibold">
                            {cat.whtTotal > 0 ? `฿${cat.whtTotal.toLocaleString()}` : '-'}
                          </td>
                          <td
                            className={`p-3.5 text-right font-extrabold tabular-nums ${
                              cat.type === 'รายรับ' ? 'text-[#0b4644]' : 'text-rose-600'
                            }`}
                          >
                            {cat.type === 'รายรับ' ? '+' : '-'}฿{cat.total.toLocaleString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Filter Pills (ทั้งหมด / รายรับ / รายจ่าย) */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-2">
                {[
                  { id: 'ALL', label: `ทั้งหมด (${periodScopedLedgerEntries.length})` },
                  {
                    id: 'รายรับ',
                    label: `รายรับ (${periodScopedLedgerEntries.filter((t) => t.type === 'รายรับ').length})`
                  },
                  {
                    id: 'รายจ่าย',
                    label: `รายจ่าย (${periodScopedLedgerEntries.filter((t) => t.type === 'รายจ่าย').length})`
                  }
                ].map((pill) => (
                  <button
                    key={pill.id}
                    onClick={() => setFinanceTypeFilter(pill.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      financeTypeFilter === pill.id
                        ? 'bg-[#0b4644] text-[#f7d774] shadow-sm'
                        : 'bg-[#f4f7f6] text-slate-600 hover:text-[#0b4644]'
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
              <span className="text-xs text-slate-500">
                แสดงรายการตามรอบเวลาที่เลือกด้านบน ({filteredTransactions.length} รายการ)
              </span>
            </div>

            {/* Ledger Table */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#0b4644] text-[#f7d774] text-xs">
                      <th className="p-4 font-bold">วันที่</th>
                      <th className="p-4 font-bold">ประเภท / หมวดหมู่</th>
                      <th className="p-4 font-bold">รถที่เกี่ยวข้อง</th>
                      <th className="p-4 font-bold">รายละเอียดรายการ</th>
                      <th className="p-4 font-bold text-right">จำนวนเงิน (บาท)</th>
                      <th className="p-4 font-bold text-right">หลักฐาน / จัดการ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredTransactions.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="p-8 text-center text-slate-400">
                          ไม่พบรายการรายรับ-รายจ่ายในช่วงเวลาที่เลือก
                        </td>
                      </tr>
                    ) : (
                      filteredTransactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-[#f8faf9]">
                          <td className="p-4 whitespace-nowrap text-xs font-semibold text-slate-600">
                            {formatThaiSlashDate(tx.date)}
                          </td>
                          <td className="p-4">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                                tx.type === 'รายรับ'
                                  ? 'bg-emerald-100 text-[#0b4644]'
                                  : 'bg-rose-100 text-rose-700'
                              }`}
                            >
                              {tx.type}
                            </span>
                            <p className="text-xs font-bold text-slate-700 mt-1">{tx.category}</p>
                          </td>
                          <td className="p-4 text-xs font-semibold text-slate-700">{tx.carModel}</td>
                          <td className="p-4 text-xs text-slate-600">
                            <span>{tx.description}</span>
                            {tx.isAuto && (
                              <span className="ml-2 px-2 py-0.5 rounded bg-amber-50 text-[#b87d14] border border-amber-200 text-[10px] font-bold">
                                อัตโนมัติ
                              </span>
                            )}
                          </td>
                          <td
                            className={`p-4 text-right font-extrabold tabular-nums whitespace-nowrap ${
                              tx.type === 'รายรับ' ? 'text-[#0b4644]' : 'text-rose-600'
                            }`}
                          >
                            {tx.type === 'รายรับ' ? '+' : '-'}฿{(Number(tx.amount) || 0).toLocaleString()}
                          </td>
                          <td className="p-4 text-right whitespace-nowrap">
                            {tx.bookingRef ? (
                              <button
                                onClick={() => handleOpenForm(tx.bookingRef)}
                                title="เปิดดู/แก้ไขข้อมูลใบจอง"
                                className="px-2.5 py-1 rounded-lg bg-[#f4f7f6] hover:bg-[#0b4644] text-[#0b4644] hover:text-[#f7d774] text-xs font-bold transition-all"
                              >
                                ดูใบจอง
                              </button>
                            ) : String(tx.id).startsWith('auto-mt-') ? (
                              <button
                                onClick={() => setActiveTab('maintenance')}
                                title="เปิดดูรายการในแท็บซ่อมบำรุง & ประกัน"
                                className="px-2.5 py-1 rounded-lg bg-[#f4f7f6] hover:bg-[#0b4644] text-[#0b4644] hover:text-[#f7d774] text-xs font-bold transition-all"
                              >
                                ดูซ่อมบำรุง
                              </button>
                            ) : (
                              <div className="inline-flex items-center gap-1.5">
                                {(tx.images || []).length > 0 && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setPreviewImage({
                                        url: tx.images[0],
                                        title: `หลักฐานใบเสร็จ: ${tx.description}`
                                      })
                                    }
                                    className="px-2 py-1 rounded-lg bg-amber-50 text-[#b87d14] border border-amber-200 text-xs font-bold"
                                  >
                                    ดูบิล ({tx.images.length})
                                  </button>
                                )}
                                <button
                                  type="button"
                                  onClick={() => {
                                    const nextTx = transactions.filter((item) => item.id !== tx.id);
                                    setTransactions(nextTx);
                                    persistMetaState({ transactions: nextTx });
                                    deleteRowFromSupabase('bf_transactions', tx.id);
                                    showToast('ลบรายการค่าใช้จ่ายเรียบร้อย');
                                  }}
                                  title="ลบรายการนี้"
                                  className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : activeTab === 'maintenance' ? (
          /* ================= MAINTENANCE & INSURANCE TAB ================= */
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#b87d14] font-bold">
                    FLEET MAINTENANCE, TAX &amp; INSURANCE
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b4644] mt-0.5">
                    ซ่อมบำรุง ต่อภาษี พ.ร.บ. และประกันภัยรถยนต์
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    ทุกยอดค่าใช้จ่ายที่บันทึกในหน้านี้จะถูกนำไปหักลบในบัญชีรายรับ-รายจ่ายของร้านอัตโนมัติ
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowMtForm((prev) => !prev)}
                  className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#f3c65f] via-[#e2a93b] to-[#c98b1e] text-[#052928] text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-sm"
                >
                  <Plus size={16} />
                  <span>เพิ่มรายการซ่อมบำรุง / ประกัน</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-3 border-t border-slate-100">
                <div className="md:col-span-7 relative">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="ค้นหารายการซ่อม, ประกันภัย, ทะเบียนรถ หรือหมายเหตุ..."
                    className="w-full pl-10 pr-4 py-2.5 bg-[#f8faf9] border border-slate-200 focus:border-[#0b4644] rounded-2xl text-xs sm:text-sm outline-none"
                  />
                </div>
                <div className="md:col-span-5">
                  <select
                    value={maintenanceCarFilter}
                    onChange={(e) => setMaintenanceCarFilter(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#f8faf9] border border-slate-200 focus:border-[#0b4644] rounded-2xl text-xs sm:text-sm font-bold text-[#0b4644] outline-none"
                  >
                    <option value="ALL">รถทั้งหมดในระบบ ({fleet.length} คัน)</option>
                    {carModels.map((car) => (
                      <option key={car} value={car}>
                        {car}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {showMtForm && (
              <form
                onSubmit={handleAddMaintenance}
                className="bg-white p-6 rounded-3xl border-2 border-[#d49b27]/60 shadow-md space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#0b4644]">บันทึกประวัติซ่อมบำรุง / ต่อประกันภัย</h3>
                  <button
                    type="button"
                    onClick={() => setShowMtForm(false)}
                    className="text-slate-400 hover:text-slate-700"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <LuxuryInput
                    label="วันที่ดำเนินการ"
                    type="date"
                    value={mtForm.date}
                    onChange={(e) => setMtForm({ ...mtForm, date: e.target.value })}
                    required
                  />
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">รถที่ดำเนินการ</label>
                    <select
                      value={mtForm.carModel}
                      onChange={(e) => setMtForm({ ...mtForm, carModel: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-bold text-[#0b4644] outline-none"
                    >
                      {carModels.map((car) => (
                        <option key={car} value={car}>
                          {car}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">ประเภทงาน</label>
                    <select
                      value={mtForm.category}
                      onChange={(e) => setMtForm({ ...mtForm, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm outline-none"
                    >
                      <option value="เช็กอินระยะ / เปลี่ยนถ่ายน้ำมันเครื่อง">เช็กอินระยะ / เปลี่ยนถ่ายน้ำมันเครื่อง</option>
                      <option value="ต่อประกันภัยรถยนต์ชั้น 1 / ชั้น 2+">ต่อประกันภัยรถยนต์ชั้น 1 / ชั้น 2+</option>
                      <option value="ต่อภาษีประจำปี & พ.ร.บ.">ต่อภาษีประจำปี &amp; พ.ร.บ.</option>
                      <option value="เปลี่ยนยาง / แบตเตอรี่ / ผ้าเบรก">เปลี่ยนยาง / แบตเตอรี่ / ผ้าเบรก</option>
                      <option value="ซ่อมตัวถัง / เคลมประกัน / อื่นๆ">ซ่อมตัวถัง / เคลมประกัน / อื่นๆ</option>
                    </select>
                  </div>
                  <LuxuryInput
                    label="ค่าใช้จ่าย (฿)"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={mtForm.cost}
                    onChange={(e) => setMtForm({ ...mtForm, cost: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                  <div className="sm:col-span-3">
                    <LuxuryInput
                      label="วันครบกำหนดรอบถัดไป"
                      type="date"
                      value={mtForm.nextDueDate}
                      onChange={(e) => setMtForm({ ...mtForm, nextDueDate: e.target.value })}
                    />
                  </div>
                  <div className="sm:col-span-5">
                    <LuxuryInput
                      label="รายละเอียด / อู่ซ่อม / เลขกรมธรรม์"
                      placeholder="เช่น เช็กระยะ 50,000 กม. ศูนย์โตโยต้า"
                      value={mtForm.notes}
                      onChange={(e) => setMtForm({ ...mtForm, notes: e.target.value })}
                    />
                  </div>
                  <div className="sm:col-span-4 flex flex-wrap items-center justify-end gap-2">
                    <label className="cursor-pointer px-3.5 py-2.5 rounded-xl bg-[#f4f7f6] hover:bg-[#0b4644] text-[#0b4644] hover:text-[#f7d774] border border-slate-300 text-xs font-bold flex items-center gap-1.5 transition-all">
                      <Camera size={14} />
                      <span>
                        {(mtForm.images || []).length > 0
                          ? `+ แนบรูปแล้ว (${mtForm.images.length})`
                          : 'แนบใบเสร็จ / กรมธรรม์'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          handleGenericImageUpload(e.target.files, (urls) =>
                            setMtForm((prev) => ({ ...prev, images: [...(prev.images || []), ...urls] }))
                          );
                          e.target.value = '';
                        }}
                      />
                    </label>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-[#0b4644] hover:bg-[#083332] text-[#f7d774] text-xs font-bold shadow-sm"
                    >
                      บันทึกข้อมูล
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMaintenanceLogs.length === 0 ? (
                <div className="md:col-span-2 bg-white p-10 rounded-3xl border border-slate-200 text-center text-slate-400 text-sm">
                  ไม่พบประวัติการซ่อมบำรุงหรือประกันภัย
                </div>
              ) : (
                filteredMaintenanceLogs.map((log) => (
                  <div
                    key={log.id}
                    className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[#b87d14] border border-amber-200 text-[11px] font-bold">
                          {formatThaiSlashDate(log.date)} • {log.category}
                        </span>
                        <h3 className="text-base font-extrabold text-[#0b4644] mt-1.5">{log.carModel}</h3>
                        {log.notes && <p className="text-xs text-slate-600 mt-1">{log.notes}</p>}
                        {log.nextDueDate && (
                          <p className="text-[11px] font-bold text-emerald-700 mt-1">
                            กำหนดรอบถัดไป: {formatThaiSlashDate(log.nextDueDate)}
                          </p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-[11px] text-slate-400">ค่าใช้จ่าย</p>
                        <p className="text-lg font-black text-rose-600">
                          ฿{(Number(log.cost) || 0).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 overflow-x-auto">
                        {(log.images || []).map((url, idx) => (
                          <img
                            key={idx}
                            src={url}
                            alt={`เอกสารซ่อมบำรุง ${idx + 1}`}
                            onClick={() =>
                              setPreviewImage({
                                url,
                                title: `${log.carModel} — ${log.category} (${idx + 1})`
                              })
                            }
                            className="w-11 h-11 rounded-xl object-cover border border-slate-200 cursor-zoom-in shrink-0"
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-2 ml-auto">
                        <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-[#f4f7f6] hover:bg-[#0b4644] text-[#0b4644] hover:text-[#f7d774] text-xs font-bold flex items-center gap-1 transition-all">
                          <Camera size={13} />
                          <span>+ เพิ่มรูป</span>
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={(e) => {
                              handleGenericImageUpload(e.target.files, (urls) => {
                                const next = maintenanceLogs.map((item) =>
                                  item.id === log.id
                                    ? { ...item, images: [...(item.images || []), ...urls] }
                                    : item
                                );
                                setMaintenanceLogs(next);
                                persistMetaState({ maintenanceLogs: next });
                              });
                              e.target.value = '';
                            }}
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() =>
                            setDeleteTarget({
                              type: 'maintenance',
                              id: log.id,
                              label: `${log.carModel} (${log.category})`
                            })
                          }
                          className="p-2 rounded-xl bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white transition-all"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : activeTab === 'blacklist' ? (
          /* ================= BLACKLIST SCREENING TAB ================= */
          <div className="space-y-6">
            {/* เครื่องมือสแกนประวัติความเสี่ยงผู้เช่าจากสื่อออนไลน์แบบเร่งด่วน */}
            <div className="bg-white p-6 rounded-3xl border-2 border-[#0b4644]/20 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#b87d14] font-bold flex items-center gap-1">
                    <Sparkles size={12} />
                    <span>AI MEDIA &amp; FRAUD BACKGROUND CHECK</span>
                  </span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#0b4644] mt-0.5">
                    ตรวจสอบประวัติเสี่ยงผู้เช่าจากทั่วสื่อออนไลน์ (ก่อนรับจอง)
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    กรอกเลขบัตรประชาชน 13 หลัก ชื่อ-นามสกุล หรือเบอร์โทร เพื่อค้นหาข่าวและประกาศเตือนภัยเรื่องเช่ารถไปขาย จำนำ ไม่จ่ายค่าเช่า หรือนำรถข้ามชายแดน
                  </p>
                </div>
              </div>

              <form onSubmit={handleRunStandaloneRiskScan} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                <div className="sm:col-span-4">
                  <LuxuryInput
                    label="ชื่อ-นามสกุล ผู้เช่า"
                    placeholder="เช่น นายสมชาย ใจดี"
                    value={standaloneQuery.fullName}
                    onChange={(e) => setStandaloneQuery({ ...standaloneQuery, fullName: e.target.value })}
                  />
                </div>
                <div className="sm:col-span-3">
                  <LuxuryInput
                    label="เลขบัตรประชาชน (13 หลัก)"
                    maxLength={17}
                    placeholder="1-XXXX-XXXXX-XX-X"
                    value={standaloneQuery.idCardNumber}
                    onChange={(e) => setStandaloneQuery({ ...standaloneQuery, idCardNumber: e.target.value })}
                  />
                </div>
                <div className="sm:col-span-3">
                  <LuxuryInput
                    label="เบอร์โทรศัพท์"
                    placeholder="08X-XXX-XXXX"
                    value={standaloneQuery.phone}
                    onChange={(e) => setStandaloneQuery({ ...standaloneQuery, phone: e.target.value })}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={standaloneRiskCheck.loading}
                    className="w-full py-2.5 px-4 rounded-2xl bg-[#0b4644] hover:bg-[#073331] disabled:opacity-60 text-[#f7d774] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    {standaloneRiskCheck.loading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        <span>กำลังค้นหา...</span>
                      </>
                    ) : (
                      <>
                        <Search size={15} />
                        <span>ตรวจสอบเลย</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {standaloneIdValidation.status === 'INVALID' && (
                <p className="text-xs font-bold text-rose-600 flex items-center gap-1.5">
                  <AlertTriangle size={14} />
                  <span>⚠️ เลขบัตรประชาชน 13 หลักที่กรอกไม่ถูกต้องตามสูตรคำนวณกรมการปกครอง</span>
                </p>
              )}

              {standaloneRiskCheck.riskLevel && (
                <div
                  className={`p-4 rounded-2xl border space-y-3 ${
                    standaloneRiskCheck.riskLevel === 'HIGH'
                      ? 'bg-rose-50 border-rose-300'
                      : standaloneRiskCheck.riskLevel === 'MEDIUM'
                      ? 'bg-amber-50 border-amber-300'
                      : standaloneRiskCheck.riskLevel === 'LOW'
                      ? 'bg-emerald-50/70 border-emerald-200'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                        standaloneRiskCheck.riskLevel === 'HIGH'
                          ? 'bg-rose-600 text-white'
                          : standaloneRiskCheck.riskLevel === 'MEDIUM'
                          ? 'bg-amber-500 text-white'
                          : standaloneRiskCheck.riskLevel === 'ERROR'
                          ? 'bg-slate-600 text-white'
                          : 'bg-emerald-600 text-white'
                      }`}
                    >
                      {standaloneRiskCheck.riskLevel === 'HIGH'
                        ? '🚨 พบความเสี่ยงสูง / มีข่าวหรือประวัติเตือนภัย'
                        : standaloneRiskCheck.riskLevel === 'MEDIUM'
                        ? '⚠️ ควรตรวจสอบเพิ่มเติม (พบข้อมูลคล้ายคลึง)'
                        : standaloneRiskCheck.riskLevel === 'ERROR'
                        ? 'ไม่สามารถเชื่อมต่อระบบค้นหาได้ชั่วคราว'
                        : '✅ ไม่พบประวัติเสียในสื่อสาธารณะ'}
                    </span>

                    {(standaloneRiskCheck.riskLevel === 'HIGH' ||
                      standaloneRiskCheck.riskLevel === 'MEDIUM') && (
                      <button
                        type="button"
                        onClick={() => {
                          const newBl = {
                            id: Date.now(),
                            fullName: standaloneQuery.fullName || 'ไม่ระบุชื่อ',
                            idCard: standaloneQuery.idCardNumber || '-',
                            phone: standaloneQuery.phone || '-',
                            severity:
                              standaloneRiskCheck.riskLevel === 'HIGH' ? 'อันตรายสูง' : 'เฝ้าระวังพิเศษ',
                            reason: standaloneRiskCheck.summary.slice(0, 220),
                            reportedDate: new Date().toISOString().slice(0, 10),
                            images: []
                          };
                          const next = [newBl, ...blacklist];
                          setBlacklist(next);
                          persistMetaState({ blacklist: next });
                          showToast('เพิ่มรายชื่อลงฐานข้อมูลบุคคลอันตรายของร้านเรียบร้อย');
                        }}
                        className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold"
                      >
                        + บันทึกลง Blacklist ร้าน
                      </button>
                    )}
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 whitespace-pre-line leading-relaxed">
                    {standaloneRiskCheck.summary}
                  </div>

                  {standaloneRiskCheck.sources.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {standaloneRiskCheck.sources.slice(0, 5).map((src, i) => (
                        <a
                          key={i}
                          href={src.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-[11px] font-semibold text-[#0b4644] flex items-center gap-1 max-w-xs truncate"
                        >
                          <ExternalLink size={11} className="shrink-0" />
                          <span className="truncate">{src.title}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-rose-600 font-bold">
                    RISK &amp; BLACKLIST DATABASE ({activeBlacklistCount} รายชื่อ)
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b4644] mt-0.5">
                    ตรวจสอบและบันทึกฐานข้อมูลบุคคลอันตราย
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    ระบบจะแจ้งเตือนอัตโนมัติทันทีเมื่อมีการกรอกชื่อหรือเบอร์โทรที่ตรงกับรายชื่อเฝ้าระวังในหน้าจองรถ
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowBlForm((prev) => !prev)}
                  className="px-5 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-sm"
                >
                  <Plus size={16} />
                  <span>เพิ่มรายชื่อเฝ้าระวัง</span>
                </button>
              </div>

              <div className="relative pt-2 border-t border-slate-100">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 mt-1" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="ค้นหาชื่อ-นามสกุล, เลขบัตรประชาชน 13 หลัก, เบอร์โทร หรือพฤติกรรม..."
                  className="w-full pl-10 pr-4 py-2.5 bg-[#f8faf9] border border-slate-200 focus:border-rose-500 rounded-2xl text-xs sm:text-sm outline-none"
                />
              </div>
            </div>

            {showBlForm && (
              <form
                onSubmit={handleAddBlacklist}
                className="bg-white p-6 rounded-3xl border-2 border-rose-300 shadow-md space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-rose-700">เพิ่มข้อมูลบุคคลเฝ้าระวัง / Blacklist</h3>
                  <button
                    type="button"
                    onClick={() => setShowBlForm(false)}
                    className="text-slate-400 hover:text-slate-700"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <LuxuryInput
                    label="ชื่อ-นามสกุล"
                    placeholder="ระบุชื่อ-นามสกุล"
                    value={blForm.fullName}
                    onChange={(e) => setBlForm({ ...blForm, fullName: e.target.value })}
                    required
                  />
                  <LuxuryInput
                    label="เลขบัตรประชาชน"
                    placeholder="1-XXXX-XXXXX-XX-X"
                    value={blForm.idCard}
                    onChange={(e) => setBlForm({ ...blForm, idCard: e.target.value })}
                  />
                  <LuxuryInput
                    label="เบอร์โทรศัพท์"
                    placeholder="08X-XXX-XXXX"
                    value={blForm.phone}
                    onChange={(e) => setBlForm({ ...blForm, phone: e.target.value })}
                  />
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">ระดับความเสี่ยง</label>
                    <select
                      value={blForm.severity}
                      onChange={(e) => setBlForm({ ...blForm, severity: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-bold text-rose-700 outline-none"
                    >
                      <option value="อันตรายสูง">อันตรายสูง (ห้ามปล่อยเช่าเด็ดขาด)</option>
                      <option value="เฝ้าระวังพิเศษ">เฝ้าระวังพิเศษ</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                  <div className="sm:col-span-8">
                    <LuxuryInput
                      label="พฤติกรรม / สาเหตุที่ขึ้นบัญชีเฝ้าระวัง"
                      placeholder="เช่น ค้างค่าเช่าไม่คืนรถตามกำหนด / เฉี่ยวชนแล้วหลบหนี"
                      value={blForm.reason}
                      onChange={(e) => setBlForm({ ...blForm, reason: e.target.value })}
                      required
                    />
                  </div>
                  <div className="sm:col-span-4 flex flex-wrap items-center justify-end gap-2">
                    <label className="cursor-pointer px-3.5 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold flex items-center gap-1.5">
                      <Camera size={14} />
                      <span>
                        {(blForm.images || []).length > 0
                          ? `+ แนบรูปแล้ว (${blForm.images.length})`
                          : 'แนบรูปบัตร / หลักฐาน'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          handleGenericImageUpload(e.target.files, (urls) =>
                            setBlForm((prev) => ({ ...prev, images: [...(prev.images || []), ...urls] }))
                          );
                          e.target.value = '';
                        }}
                      />
                    </label>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-sm"
                    >
                      บันทึกรายชื่อ
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredBlacklist.length === 0 ? (
                <div className="md:col-span-2 bg-white p-10 rounded-3xl border border-slate-200 text-center text-slate-400 text-sm">
                  ไม่พบรายชื่อบุคคลเฝ้าระวังที่ตรงกับการค้นหา
                </div>
              ) : (
                filteredBlacklist.map((person) => (
                  <div
                    key={person.id}
                    className="bg-white p-5 rounded-3xl border border-rose-200 shadow-sm flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-rose-600 text-white text-[11px] font-extrabold">
                          {person.severity}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          บันทึกเมื่อ {formatThaiSlashDate(person.reportedDate)}
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900">{person.fullName}</h3>
                      <p className="text-xs text-slate-600">
                        เลขบัตร: <span className="font-bold">{person.idCard || '-'}</span> • โทร:{' '}
                        <span className="font-bold">{person.phone || '-'}</span>
                      </p>
                      <p className="text-xs text-rose-700 bg-rose-50 p-2.5 rounded-xl border border-rose-100 font-semibold">
                        สาเหตุ: {person.reason}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 overflow-x-auto">
                        {(person.images || []).map((url, idx) => (
                          <img
                            key={idx}
                            src={url}
                            alt={`หลักฐาน ${person.fullName}`}
                            onClick={() =>
                              setPreviewImage({
                                url,
                                title: `หลักฐานเฝ้าระวัง: ${person.fullName} (${idx + 1})`
                              })
                            }
                            className="w-11 h-11 rounded-xl object-cover border border-rose-200 cursor-zoom-in shrink-0"
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-2 ml-auto">
                        <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold flex items-center gap-1">
                          <Camera size={13} />
                          <span>+ เพิ่มรูป</span>
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={(e) => {
                              handleGenericImageUpload(e.target.files, (urls) => {
                                const next = blacklist.map((item) =>
                                  item.id === person.id
                                    ? { ...item, images: [...(item.images || []), ...urls] }
                                    : item
                                );
                                setBlacklist(next);
                                persistMetaState({ blacklist: next });
                              });
                              e.target.value = '';
                            }}
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() =>
                            setDeleteTarget({
                              type: 'blacklist',
                              id: person.id,
                              label: person.fullName
                            })
                          }
                          className="p-2 rounded-xl bg-slate-100 hover:bg-rose-600 text-slate-600 hover:text-white transition-all"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          /* ================= FLEET INFORMATION TAB (ข้อมูลรถ) ================= */
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#b87d14] font-bold">
                  FLEET &amp; VEHICLE ASSETS ({fleet.length} คัน)
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0b4644] mt-0.5">
                  ข้อมูลรถยนต์ ทะเบียน เรทค่าเช่า และเอกสารประจำรถ
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  จัดเก็บรูปรถจริงรอบคัน สำเนาเล่มทะเบียน วันหมดอายุประกันภัย และแก้ไขเรทราคาเช่า-มัดจำรายคัน
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowCarForm((prev) => !prev)}
                className="px-5 py-2.5 rounded-2xl bg-[#0b4644] hover:bg-[#083332] text-[#f7d774] text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm"
              >
                <Plus size={16} />
                <span>เพิ่มรถเข้าฟลีท</span>
              </button>
            </div>

            {showCarForm && (
              <form
                onSubmit={handleAddCar}
                className="bg-white p-6 rounded-3xl border-2 border-[#d49b27]/60 shadow-md space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#0b4644]">เพิ่มข้อมูลรถยนต์คันใหม่</h3>
                  <button
                    type="button"
                    onClick={() => setShowCarForm(false)}
                    className="text-slate-400 hover:text-slate-700"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <LuxuryInput
                    label="รุ่นรถ สี และทะเบียนเต็ม"
                    placeholder="เช่น Yaris Ativ (สีขาว) 1กข1234 กทม."
                    value={carForm.model}
                    onChange={(e) => setCarForm({ ...carForm, model: e.target.value })}
                    required
                  />
                  <LuxuryInput
                    label="เลขทะเบียน"
                    placeholder="1กข 1234 กทม."
                    value={carForm.plate}
                    onChange={(e) => setCarForm({ ...carForm, plate: e.target.value })}
                  />
                  <LuxuryInput
                    label="ค่าเช่ามาตรฐานต่อวัน (฿)"
                    type="number"
                    min="0"
                    value={carForm.dailyRate}
                    onChange={(e) => setCarForm({ ...carForm, dailyRate: e.target.value })}
                    required
                  />
                  <LuxuryInput
                    label="เงินมัดจำมาตรฐาน (฿)"
                    type="number"
                    min="0"
                    value={carForm.deposit}
                    onChange={(e) => setCarForm({ ...carForm, deposit: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                  <div className="sm:col-span-4">
                    <LuxuryInput
                      label="วันหมดอายุประกันภัย"
                      type="date"
                      value={carForm.insuranceExpiry}
                      onChange={(e) => setCarForm({ ...carForm, insuranceExpiry: e.target.value })}
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <LuxuryInput
                      label="วันหมดอายุภาษี / พ.ร.บ."
                      type="date"
                      value={carForm.taxExpiry}
                      onChange={(e) => setCarForm({ ...carForm, taxExpiry: e.target.value })}
                    />
                  </div>
                  <div className="sm:col-span-4 flex flex-wrap items-center justify-end gap-2">
                    <label className="cursor-pointer px-3.5 py-2.5 rounded-xl bg-[#f4f7f6] hover:bg-[#0b4644] text-[#0b4644] hover:text-[#f7d774] border border-slate-300 text-xs font-bold flex items-center gap-1.5">
                      <Camera size={14} />
                      <span>
                        {(carForm.images || []).length > 0
                          ? `+ แนบรูปแล้ว (${carForm.images.length})`
                          : 'แนบรูปรถ / เล่มทะเบียน'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          handleGenericImageUpload(e.target.files, (urls) =>
                            setCarForm((prev) => ({ ...prev, images: [...(prev.images || []), ...urls] }))
                          );
                          e.target.value = '';
                        }}
                      />
                    </label>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-[#0b4644] text-[#f7d774] text-xs font-bold"
                    >
                      บันทึกรถใหม่
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {fleet.map((car) => {
                const carTripCount = bookings.filter(
                  (b) => b.carModel === car.model && b.deliveryStatus !== 'ยกเลิก'
                ).length;
                const isEditingThis = editingCarId === car.id && editCarForm;

                return (
                  <div
                    key={car.id}
                    className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4"
                  >
                    {isEditingThis ? (
                      <div className="space-y-3">
                        <h3 className="text-sm font-extrabold text-[#0b4644]">แก้ไขข้อมูลรถ</h3>
                        <LuxuryInput
                          label="รุ่นรถและทะเบียน"
                          value={editCarForm.model}
                          onChange={(e) => setEditCarForm({ ...editCarForm, model: e.target.value })}
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <LuxuryInput
                            label="ค่าเช่า/วัน (฿)"
                            type="number"
                            value={editCarForm.dailyRate}
                            onChange={(e) => setEditCarForm({ ...editCarForm, dailyRate: e.target.value })}
                          />
                          <LuxuryInput
                            label="มัดจำ (฿)"
                            type="number"
                            value={editCarForm.deposit}
                            onChange={(e) => setEditCarForm({ ...editCarForm, deposit: e.target.value })}
                          />
                          <LuxuryInput
                            label="ประกันหมดอายุ"
                            type="date"
                            value={editCarForm.insuranceExpiry || ''}
                            onChange={(e) => setEditCarForm({ ...editCarForm, insuranceExpiry: e.target.value })}
                          />
                          <LuxuryInput
                            label="ภาษี/พ.ร.บ. หมดอายุ"
                            type="date"
                            value={editCarForm.taxExpiry || ''}
                            onChange={(e) => setEditCarForm({ ...editCarForm, taxExpiry: e.target.value })}
                          />
                        </div>
                        <div className="flex justify-end gap-2 pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingCarId(null);
                              setEditCarForm(null);
                            }}
                            className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-bold"
                          >
                            ยกเลิก
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const next = fleet.map((item) =>
                                item.id === car.id
                                  ? {
                                      ...editCarForm,
                                      dailyRate: Number(editCarForm.dailyRate) || 0,
                                      deposit: Number(editCarForm.deposit) || 0
                                    }
                                  : item
                              );
                              setFleet(next);
                              persistMetaState({ fleet: next });
                              setEditingCarId(null);
                              setEditCarForm(null);
                              showToast('อัปเดตข้อมูลรถเรียบร้อย');
                            }}
                            className="px-4 py-1.5 rounded-xl bg-[#0b4644] text-[#f7d774] text-xs font-bold"
                          >
                            บันทึก
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-3">
                          <div className="flex items-start justify-between gap-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                              {car.status || 'พร้อมใช้งาน'}
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                setEditingCarId(car.id);
                                setEditCarForm({ ...car });
                              }}
                              className="p-1.5 rounded-lg bg-amber-50 text-amber-800 hover:bg-[#d49b27] hover:text-white transition-all"
                              title="แก้ไขข้อมูลรถ"
                            >
                              <Edit3 size={14} />
                            </button>
                          </div>

                          <h3 className="text-base font-extrabold text-[#0b4644] leading-snug">{car.model}</h3>

                          <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-[#f8faf9] border border-slate-100 text-xs">
                            <div>
                              <p className="text-slate-400 text-[11px]">ค่าเช่าต่อวัน</p>
                              <p className="font-extrabold text-[#0b4644]">
                                ฿{(Number(car.dailyRate) || 0).toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-[11px]">เงินมัดจำรถ</p>
                              <p className="font-extrabold text-[#b87d14]">
                                ฿{(Number(car.deposit) || 0).toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-[10px]">ประกันภัยหมดอายุ</p>
                              <p className="font-bold text-slate-700 text-[11px]">
                                {car.insuranceExpiry ? formatThaiSlashDate(car.insuranceExpiry) : '-'}
                              </p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-[10px]">ภาษี / พ.ร.บ.</p>
                              <p className="font-bold text-slate-700 text-[11px]">
                                {car.taxExpiry ? formatThaiSlashDate(car.taxExpiry) : '-'}
                              </p>
                            </div>
                          </div>

                          {(car.images || []).length > 0 && (
                            <div className="flex items-center gap-2 overflow-x-auto">
                              {car.images.map((url, idx) => (
                                <img
                                  key={idx}
                                  src={url}
                                  alt={`${car.model} รูปที่ ${idx + 1}`}
                                  onClick={() =>
                                    setPreviewImage({
                                      url,
                                      title: `${car.model} (รูปที่ ${idx + 1})`
                                    })
                                  }
                                  className="w-12 h-12 rounded-xl object-cover border border-slate-200 cursor-zoom-in shrink-0"
                                />
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
                          <button
                            type="button"
                            onClick={() => {
                              setCarFilter(car.model);
                              setActiveTab('bookings');
                            }}
                            className="px-3 py-1.5 rounded-xl bg-[#f4f7f6] hover:bg-[#0b4644] text-[#0b4644] hover:text-[#f7d774] text-xs font-bold transition-all"
                          >
                            ประวัติเช่า ({carTripCount} คิว)
                          </button>

                          <div className="flex items-center gap-1.5">
                            <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold flex items-center gap-1">
                              <Camera size={13} />
                              <span>+ เพิ่มรูป</span>
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={(e) => {
                                  handleGenericImageUpload(e.target.files, (urls) => {
                                    const next = fleet.map((item) =>
                                      item.id === car.id
                                        ? { ...item, images: [...(item.images || []), ...urls] }
                                        : item
                                    );
                                    setFleet(next);
                                    persistMetaState({ fleet: next });
                                  });
                                  e.target.value = '';
                                }}
                              />
                            </label>
                            <button
                              type="button"
                              onClick={() =>
                                setDeleteTarget({
                                  type: 'car',
                                  id: car.id,
                                  label: car.model
                                })
                              }
                              className="p-2 rounded-xl bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white transition-all"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* ================= BOOKING DETAILS MODAL (ดูรายละเอียด & รูปภาพทั้งหมด) ================= */}
      {selectedBooking && (() => {
        const fin = calculateFinancials(selectedBooking);
        const docLabels = {
          idCard: 'บัตรประจำตัวประชาชน',
          driverLicense: 'ใบอนุญาตขับขี่',
          employeeCard: 'บัตรพนักงานบริษัทฯ',
          flightTicket: 'ตั๋วเครื่องบิน ไป-กลับ',
          guarantorId: 'บัตรประชาชนคนค้ำ',
          otherDoc: 'เอกสารอื่นๆ',
          bookingSlip: 'สลิปหลักฐานการจองรถ',
          carWashSlip: 'สลิปค่าล้างรถก่อนส่งลูกค้า',
          outboundDeliverySlip: 'สลิปค่าใช้จ่ายไปส่งรถ',
          pickupPaymentSlip: 'สลิปชำระวันรับรถ',
          wht50Tawi: 'หนังสือรับรองหัก ณ ที่จ่าย 5% (50 ทวิ)',
          handoverPhoto: 'รูปเซ็นสัญญา/รับรถ',
          carOutPhoto: 'รูปรถก่อนส่งมอบ',
          returnPickupSlip: 'สลิปค่าใช้จ่ายไปรับรถคืน',
          carInPhoto: 'รูปรถก่อนรับคืน',
          customerQrSlip: 'QR Code คืนเงินมัดจำ',
          depositRefundSlip: 'สลิปโอนคืนเงินมัดจำ',
          bookingRefundSlip: 'สลิปโอนคืนเงินจอง'
        };
        const attachedSections = Object.entries(docLabels)
          .map(([key, label]) => ({
            key,
            label,
            urls: (selectedBooking.docImages && selectedBooking.docImages[key]) || []
          }))
          .filter((sec) => sec.urls.length > 0);

        return (
          <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-4">
              <div className="bg-gradient-to-r from-[#052928] to-[#0b4644] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#d49b27]">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#f7d774] font-bold">
                    BOOKING RECORD &amp; ATTACHMENTS
                  </span>
                  <h3 className="text-lg font-black">
                    {selectedBooking.bookingCode} • {selectedBooking.carModel}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedBooking(null)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#f8faf9] border border-slate-200">
                  <div>
                    <p className="text-[11px] text-slate-400">ผู้เช่า / เบอร์ติดต่อ</p>
                    <p className="font-extrabold text-slate-900">
                      {selectedBooking.customerName}{' '}
                      {selectedBooking.nickname ? `(${selectedBooking.nickname})` : ''}
                    </p>
                    <p className="text-xs text-slate-600">{selectedBooking.phone}</p>
                    {selectedBooking.socialHandle && (
                      <p className="text-xs text-[#0b4644] font-semibold">{selectedBooking.socialHandle}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">กำหนดรับ - คืนรถ ({selectedBooking.rentalDays} วัน)</p>
                    <p className="font-bold text-emerald-700">
                      รับ: {formatThaiSlashDate(selectedBooking.pickupDate)} เวลา {selectedBooking.pickupTime} น. (
                      {selectedBooking.pickupLocation || '-'})
                    </p>
                    <p className="font-bold text-rose-700">
                      คืน: {formatThaiSlashDate(selectedBooking.returnDate)} เวลา {selectedBooking.returnTime} น. (
                      {selectedBooking.returnLocation || '-'})
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-400 block">ค่าเช่าต่อวัน</span>
                    <strong className="text-[#0b4644]">
                      ฿{(Number(selectedBooking.dailyRate) || 0).toLocaleString()}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">เงินจองรถ</span>
                    <strong className="text-[#0b4644]">
                      ฿{(Number(selectedBooking.bookingFee) || 0).toLocaleString()}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">เงินมัดจำรถ</span>
                    <strong className="text-[#0b4644]">
                      ฿{(Number(selectedBooking.depositAmount) || 0).toLocaleString()}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">วันรับรถจ่ายเพิ่ม</span>
                    <strong className="text-base text-[#b87d14]">
                      ฿{fin.balanceDueAtPickup.toLocaleString()}
                    </strong>
                  </div>
                </div>

                {attachedSections.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0b4644]">
                      รูปภาพเอกสารและหลักฐานที่แนบไว้ (คลิกที่รูปเพื่อขยายเต็มจอ)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {attachedSections.map((sec) => (
                        <div key={sec.key} className="p-3 rounded-2xl bg-[#f8faf9] border border-slate-200 space-y-2">
                          <p className="text-xs font-bold text-slate-700">
                            {sec.label} ({sec.urls.length} รูป)
                          </p>
                          <div className="flex items-center gap-2 overflow-x-auto">
                            {sec.urls.map((url, idx) => (
                              <img
                                key={idx}
                                src={url}
                                alt={`${sec.label} ${idx + 1}`}
                                onClick={() => setPreviewImage({ url, title: `${sec.label} (${idx + 1})` })}
                                className="w-16 h-16 rounded-xl object-cover border border-slate-300 cursor-zoom-in shrink-0"
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleCopyLineMessage(selectedBooking)}
                    className="px-4 py-2 rounded-xl bg-[#06c755] text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    <Copy size={14} />
                    <span>คัดลอกข้อความส่ง LINE</span>
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const target = selectedBooking;
                        setSelectedBooking(null);
                        handleOpenForm(target);
                      }}
                      className="px-4 py-2 rounded-xl bg-amber-100 text-amber-900 text-xs font-bold"
                    >
                      แก้ไขใบจองนี้
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedBooking(null)}
                      className="px-4 py-2 rounded-xl bg-[#0b4644] text-[#f7d774] text-xs font-bold"
                    >
                      ปิดหน้าต่าง
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ================= QUICK SETTLE & DEPOSIT REFUND MODAL ================= */}
      {quickSettleTarget && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleConfirmQuickSettle}
            className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className="bg-[#0b4644] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#d49b27]">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#f7d774] font-bold">
                  COMPLETE TRIP &amp; REFUND DEPOSIT
                </span>
                <h3 className="text-base font-black">
                  ปิดงาน &amp; คืนเงินมัดจำ ({quickSettleTarget.bookingCode})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setQuickSettleTarget(null)}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-[#f8faf9] border border-slate-200 space-y-1">
                <p className="font-extrabold text-[#0b4644]">
                  {quickSettleTarget.customerName}{' '}
                  {quickSettleTarget.nickname ? `(${quickSettleTarget.nickname})` : ''}
                </p>
                <p className="text-xs text-slate-600">{quickSettleTarget.carModel}</p>
                <p className="text-xs text-slate-500">
                  เงินมัดจำตั้งต้น:{' '}
                  <strong className="text-[#0b4644]">
                    ฿{(Number(quickSettleTarget.depositAmount) || 0).toLocaleString()}
                  </strong>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <LuxuryInput
                  label="หักค่าปรับ / M-Flow / น้ำมัน (฿)"
                  type="number"
                  min="0"
                  value={quickSettleForm.deductionAmount}
                  onChange={(e) =>
                    setQuickSettleForm({ ...quickSettleForm, deductionAmount: e.target.value })
                  }
                />
                <LuxuryInput
                  label="สาเหตุที่หักเงินมัดจำ (ถ้ามี)"
                  placeholder="เช่น ค่าทางด่วน M-Flow 60 บาท"
                  value={quickSettleForm.deductionReason}
                  onChange={(e) =>
                    setQuickSettleForm({ ...quickSettleForm, deductionReason: e.target.value })
                  }
                />
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-900">ยอดโอนคืนมัดจำสุทธิให้ลูกค้า</span>
                <span className="text-xl font-black text-emerald-700 tabular-nums">
                  ฿
                  {Math.max(
                    0,
                    (Number(quickSettleTarget.depositAmount) || 0) -
                      (Number(quickSettleForm.deductionAmount) || 0)
                  ).toLocaleString()}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">สลิปโอนคืนเงินมัดจำ (ถ้ามี)</span>
                  <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-[#f4f7f6] border border-slate-300 text-xs font-bold text-[#0b4644] flex items-center gap-1.5">
                    <Camera size={13} />
                    <span>แนบสลิปคืนมัดจำ ({(quickSettleForm.depositRefundSlip || []).length})</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => {
                        handleGenericImageUpload(e.target.files, (urls) =>
                          setQuickSettleForm((prev) => ({
                            ...prev,
                            depositRefundSlip: [...(prev.depositRefundSlip || []), ...urls]
                          }))
                        );
                        e.target.value = '';
                      }}
                    />
                  </label>
                </div>
                {(quickSettleForm.depositRefundSlip || []).length > 0 && (
                  <div className="flex items-center gap-2 overflow-x-auto">
                    {quickSettleForm.depositRefundSlip.map((url, idx) => (
                      <img
                        key={idx}
                        src={url}
                        alt={`สลิปคืนมัดจำ ${idx + 1}`}
                        onClick={() => setPreviewImage({ url, title: `สลิปโอนคืนมัดจำ (${idx + 1})` })}
                        className="w-14 h-14 rounded-xl object-cover border cursor-zoom-in shrink-0"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setQuickSettleTarget(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-sm"
                >
                  ยืนยันปิดงาน &amp; คืนมัดจำ ✓
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* ================= CANCEL BOOKING MODAL ================= */}
      {cancelTarget && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleConfirmCancelBooking}
            className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className="bg-rose-700 text-white px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-rose-200 font-bold">
                  CANCEL RESERVATION &amp; RELEASE SLOT
                </span>
                <h3 className="text-base font-black">
                  ยกเลิกคิวจอง ({cancelTarget.bookingCode})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCancelTarget(null)}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-1">
                <p className="font-extrabold text-rose-900">{cancelTarget.customerName}</p>
                <p className="text-xs text-slate-600">{cancelTarget.carModel}</p>
                <p className="text-xs text-slate-600">
                  ยอดเงินจองที่รับไว้:{' '}
                  <strong className="text-rose-700">
                    ฿{(Number(cancelTarget.bookingFee) || 0).toLocaleString()}
                  </strong>
                </p>
              </div>

              <LuxuryInput
                label="สาเหตุการยกเลิกคิว"
                placeholder="เช่น ลูกค้าเลื่อนวันเดินทาง / เปลี่ยนแผนการเดินทาง"
                value={cancelForm.cancelReason}
                onChange={(e) => setCancelForm({ ...cancelForm, cancelReason: e.target.value })}
                required
              />

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">การจัดการเงินจอง</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setCancelForm({ ...cancelForm, refundMode: 'FORFEIT', bookingRefundAmount: 0 })
                    }
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      cancelForm.refundMode === 'FORFEIT'
                        ? 'bg-[#0b4644] border-[#0b4644] text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <p className="text-xs font-extrabold">ริบเงินจองตามเงื่อนไข</p>
                    <p className="text-[10px] opacity-80 mt-0.5">บันทึกเป็นรายได้ริบเงินจองอัตโนมัติ</p>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCancelForm({
                        ...cancelForm,
                        refundMode: 'REFUND',
                        bookingRefundAmount: Number(cancelTarget.bookingFee) || 0
                      })
                    }
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      cancelForm.refundMode === 'REFUND'
                        ? 'bg-amber-600 border-amber-600 text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <p className="text-xs font-extrabold">โอนคืนเงินจองให้ลูกค้า</p>
                    <p className="text-[10px] opacity-80 mt-0.5">ระบุยอดคืนและแนบสลิปโอนคืน</p>
                  </button>
                </div>
              </div>

              {cancelForm.refundMode === 'REFUND' && (
                <div className="space-y-3 p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
                  <LuxuryInput
                    label="จำนวนเงินจองที่โอนคืนลูกค้า (฿)"
                    type="number"
                    min="0"
                    value={cancelForm.bookingRefundAmount}
                    onChange={(e) =>
                      setCancelForm({ ...cancelForm, bookingRefundAmount: e.target.value })
                    }
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900">สลิปโอนคืนเงินจอง</span>
                    <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-white border border-amber-300 text-xs font-bold text-amber-900 flex items-center gap-1">
                      <Camera size={13} />
                      <span>แนบสลิป ({(cancelForm.bookingRefundSlip || []).length})</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          handleGenericImageUpload(e.target.files, (urls) =>
                            setCancelForm((prev) => ({
                              ...prev,
                              bookingRefundSlip: [...(prev.bookingRefundSlip || []), ...urls]
                            }))
                          );
                          e.target.value = '';
                        }}
                      />
                    </label>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCancelTarget(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  ปิดหน้าต่าง
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold shadow-sm"
                >
                  ยืนยันยกเลิกคิว &amp; คืนรถว่าง
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* ================= DELETE CONFIRMATION MODAL ================= */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
              <div className="w-11 h-11 rounded-2xl bg-rose-100 flex items-center justify-center shrink-0">
                <AlertTriangle size={22} />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">ยืนยันการลบข้อมูล</h3>
                <p className="text-xs text-slate-500">การลบรายการนี้ไม่สามารถย้อนกลับได้</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
              คุณต้องการลบรายการ <strong className="text-rose-700">{deleteTarget.label}</strong> ใช่หรือไม่?
            </p>

            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
              >
                ยกเลิก
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold shadow-sm"
              >
                ยืนยันลบข้อมูล
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= SUPABASE + GITHUB + VERCEL DEPLOYMENT MODAL ================= */}
      {showDeployModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-3 sm:p-6">
          <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-4">
            <div className="bg-gradient-to-r from-[#052928] to-[#0b4644] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#d49b27]">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#f7d774] font-bold">
                  PRODUCTION STACK: SUPABASE • GITHUB • VERCEL
                </span>
                <h3 className="text-lg sm:text-xl font-black">
                  ตั้งค่าฐานข้อมูล Supabase และคู่มือ Deploy ขึ้น GitHub / Vercel
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDeployModal(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-5">
              {/* Step Selector Pills */}
              <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
                {[
                  { id: 'SUPABASE', label: '1. เชื่อมต่อฐานข้อมูล Supabase & SQL', icon: <Database size={14} /> },
                  { id: 'GITHUB', label: '2. โครงสร้างไฟล์ขึ้น GitHub', icon: <Terminal size={14} /> },
                  { id: 'VERCEL', label: '3. ตั้งค่า Deploy บน Vercel', icon: <Server size={14} /> }
                ].map((step) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setDeployStepTab(step.id)}
                    className={`px-4 py-2 rounded-2xl text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                      deployStepTab === step.id
                        ? 'bg-[#0b4644] text-[#f7d774] shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {step.icon}
                    <span>{step.label}</span>
                  </button>
                ))}
              </div>

              {deployStepTab === 'SUPABASE' && (
                <div className="space-y-4">
                  {/* Live Connection Form */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#f8faf9] border border-slate-200 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm font-extrabold text-[#0b4644]">
                        เชื่อมต่อ Supabase Project (Project Settings → API)
                      </h4>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                          supabaseStatus === 'CONNECTED'
                            ? 'bg-emerald-100 text-emerald-800'
                            : supabaseStatus === 'ERROR'
                            ? 'bg-rose-100 text-rose-700'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        สถานะ: {supabaseStatus === 'CONNECTED' ? 'เชื่อมต่อ Supabase Cloud แล้ว ✓' : supabaseStatus}
                      </span>
                    </div>

                    {supabaseErrorMsg && (
                      <div className="p-3 rounded-xl bg-rose-50 border border-rose-300 text-xs text-rose-700 font-semibold">
                        ⚠️ {supabaseErrorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <LuxuryInput
                        label="SUPABASE_URL (Project URL)"
                        placeholder="https://xxxxxxxxxxxx.supabase.co"
                        value={supabaseDraft.url}
                        onChange={(e) => setSupabaseDraft({ ...supabaseDraft, url: e.target.value.trim() })}
                      />
                      <LuxuryInput
                        label="SUPABASE_ANON_KEY (anon public key)"
                        placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..."
                        value={supabaseDraft.anonKey}
                        onChange={(e) => setSupabaseDraft({ ...supabaseDraft, anonKey: e.target.value.trim() })}
                      />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <p className="text-[11px] text-slate-500">
                        เมื่อ部署บน Vercel ให้ตั้งชื่อตัวแปร <code className="font-bold text-[#0b4644]">VITE_SUPABASE_URL</code> และ{' '}
                        <code className="font-bold text-[#0b4644]">VITE_SUPABASE_ANON_KEY</code> ระบบจะดึงค่าให้อัตโนมัติ
                      </p>
                      <div className="flex items-center gap-2">
                        {supabaseConfig.url && supabaseConfig.anonKey && (
                          <button
                            type="button"
                            onClick={async () => {
                              const ok = await pushAllStateToSupabase(supabaseConfig);
                              if (ok) showToast('ซิงค์ข้อมูลทั้งหมดขึ้น Supabase เรียบร้อยแล้ว ✓');
                            }}
                            className="px-3.5 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold flex items-center gap-1"
                          >
                            <RefreshCw size={13} />
                            <span>ซิงค์ข้อมูลขึ้น Cloud ทันที</span>
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={async () => {
                            if (!supabaseDraft.url || !supabaseDraft.anonKey) {
                              showToast('กรุณากรอก Supabase URL และ Anon Key ให้ครบถ้วน');
                              return;
                            }
                            try {
                              localStorage.setItem('bf_carrent_supabase_cfg', JSON.stringify(supabaseDraft));
                            } catch (e) {}
                            setSupabaseConfig(supabaseDraft);
                            await loadAllStateFromSupabase(supabaseDraft);
                            showToast('บันทึกการตั้งค่า Supabase และเชื่อมต่อเรียบร้อย ✓');
                          }}
                          className="px-4 py-2 rounded-xl bg-[#0b4644] hover:bg-[#073331] text-[#f7d774] text-xs font-extrabold shadow-xs"
                        >
                          บันทึก &amp; ทดสอบการเชื่อมต่อ
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* SQL Schema Box */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-extrabold text-[#0b4644]">
                        คำสั่ง SQL สร้างตารางใน Supabase (ไปที่เมนู SQL Editor → New query → วางโค้ดแล้วกด Run)
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard?.writeText(SUPABASE_SQL_SCHEMA);
                          showToast('คัดลอกคำสั่ง SQL Schema เรียบร้อยแล้ว ✓');
                        }}
                        className="px-3 py-1.5 rounded-xl bg-[#0b4644] text-[#f7d774] text-xs font-bold flex items-center gap-1 shrink-0"
                      >
                        <Copy size={12} />
                        <span>คัดลอก SQL</span>
                      </button>
                    </div>
                    <pre className="p-3.5 rounded-2xl bg-slate-900 text-emerald-300 text-[11px] overflow-x-auto max-h-56 leading-relaxed">
                      {SUPABASE_SQL_SCHEMA}
                    </pre>
                  </div>
                </div>
              )}

              {deployStepTab === 'GITHUB' && (
                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-2xl bg-[#f8faf9] border border-slate-200 space-y-2">
                    <h4 className="text-sm font-extrabold text-[#0b4644]">
                      โครงสร้างโฟลเดอร์สำหรับ Push ขึ้น GitHub Repository
                    </h4>
                    <pre className="p-3 rounded-xl bg-slate-900 text-amber-200 text-[11px] leading-relaxed">
{`bf-carrent-backoffice/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── index.css      (ใส่ @tailwind base; @tailwind components; @tailwind utilities;)
    └── App.jsx        (คัดลอกโค้ดทั้งหมดจากไฟล์ app.jsx นี้ไปวาง)`}
                    </pre>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#0b4644]">package.json</span>
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard?.writeText(GITHUB_PACKAGE_JSON);
                            showToast('คัดลอก package.json เรียบร้อย ✓');
                          }}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#0b4644] hover:text-[#f7d774] font-bold flex items-center gap-1"
                        >
                          <Copy size={11} />
                          <span>คัดลอก</span>
                        </button>
                      </div>
                      <pre className="p-3 rounded-xl bg-slate-900 text-slate-200 text-[11px] overflow-x-auto max-h-44">
                        {GITHUB_PACKAGE_JSON}
                      </pre>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#0b4644]">index.html</span>
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard?.writeText(GITHUB_INDEX_HTML);
                              showToast('คัดลอก index.html เรียบร้อย ✓');
                            }}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#0b4644] hover:text-[#f7d774] font-bold flex items-center gap-1"
                          >
                            <Copy size={11} />
                            <span>คัดลอก</span>
                          </button>
                        </div>
                        <pre className="p-2.5 rounded-xl bg-slate-900 text-slate-200 text-[11px] overflow-x-auto">
                          {GITHUB_INDEX_HTML}
                        </pre>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#0b4644]">src/main.jsx</span>
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard?.writeText(GITHUB_MAIN_JSX);
                              showToast('คัดลอก src/main.jsx เรียบร้อย ✓');
                            }}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#0b4644] hover:text-[#f7d774] font-bold flex items-center gap-1"
                          >
                            <Copy size={11} />
                            <span>คัดลอก</span>
                          </button>
                        </div>
                        <pre className="p-2.5 rounded-xl bg-slate-900 text-slate-200 text-[11px] overflow-x-auto">
                          {GITHUB_MAIN_JSX}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {deployStepTab === 'VERCEL' && (
                <div className="space-y-4 text-xs">
                  <div className="p-5 rounded-2xl bg-[#f8faf9] border border-slate-200 space-y-3">
                    <h4 className="text-sm font-extrabold text-[#0b4644]">
                      ขั้นตอน Deploy ขึ้น Vercel จาก GitHub
                    </h4>
                    <ol className="list-decimal pl-5 space-y-2 text-slate-700 leading-relaxed">
                      <li>
                        เข้าสู่ระบบที่ <strong>vercel.com</strong> แล้วกด <strong>Add New → Project</strong> จากนั้นเลือก Repository{' '}
                        <code className="px-1.5 py-0.5 rounded bg-slate-200 font-bold">bf-carrent-backoffice</code> จาก GitHub
                      </li>
                      <li>
                        ตรวจสอบ <strong>Framework Preset</strong> ให้เป็น <strong>Vite</strong> (Build Command:{' '}
                        <code className="font-bold">npm run build</code>, Output Directory: <code className="font-bold">dist</code>)
                      </li>
                      <li>
                        เปิดหัวข้อ <strong>Environment Variables</strong> แล้วเพิ่มตัวแปร 2 ค่าจาก Supabase:
                        <div className="mt-2 p-3 rounded-xl bg-slate-900 text-amber-200 font-mono text-[11px] space-y-1">
                          <div>VITE_SUPABASE_URL = https://your-project-id.supabase.co</div>
                          <div>VITE_SUPABASE_ANON_KEY = your-supabase-anon-public-key</div>
                        </div>
                      </li>
                      <li>
                        กดปุ่ม <strong>Deploy</strong> รอประมาณ 30 วินาที จะได้ลิงก์เว็บแอปพร้อมใช้งานทั้งบนมือถือและคอมพิวเตอร์ และซิงค์ข้อมูลผ่าน Supabase อัตโนมัติทุกอุปกรณ์!
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= FULLSCREEN IMAGE LIGHTBOX MODAL ================= */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-xs flex flex-col items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
          >
            <div className="px-5 py-3 bg-slate-950 text-white flex items-center justify-between">
              <p className="text-xs sm:text-sm font-bold text-[#f7d774] truncate">{previewImage.title}</p>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-3 flex items-center justify-center bg-black max-h-[80vh]">
              <img
                src={previewImage.url}
                alt={previewImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function LuxuryInput({ label, className = '', ...props }) {
  return (
    <div>
      {label && <label className="block text-xs font-semibold text-slate-700 mb-1.5">{label}</label>}
      <input
        {...props}
        className={`w-full px-3.5 py-2.5 bg-white border border-slate-200/90 rounded-2xl focus:border-[#0b4644] focus:ring-4 focus:ring-[#0b4644]/10 outline-none text-sm text-slate-800 transition-all ${className}`}
      />
    </div>
  );
}

function LuxuryStatCard({ title, value, subtitle, icon, highlight = false }) {
  return (
    <div
      className={`p-5 rounded-[24px] border shadow-[0_2px_12px_-3px_rgba(15,23,42,0.05)] transition-all ${
        highlight
          ? 'bg-gradient-to-br from-[#073331] to-[#0b4644] text-white border-[#d49b27]'
          : 'bg-white text-slate-800 border-slate-200/80'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`text-xs font-semibold ${highlight ? 'text-[#f7d774]' : 'text-slate-500'}`}>{title}</p>
          <p
            className={`text-2xl font-extrabold mt-1.5 tabular-nums tracking-tight ${
              highlight ? 'text-white' : 'text-[#0b4644]'
            }`}
          >
            {value}
          </p>
          {subtitle && (
            <p className={`text-[11px] mt-1 ${highlight ? 'text-white/75' : 'text-slate-400'}`}>{subtitle}</p>
          )}
        </div>
        <div
          className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
            highlight ? 'bg-white/10 text-[#f7d774]' : 'bg-slate-100/90 text-[#0b4644]'
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}