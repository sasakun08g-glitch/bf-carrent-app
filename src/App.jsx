import React, { useState, useEffect, useMemo } from 'react';
import { createClient } from '@supabase/supabase-js';

// ============================================================================
// 1. SUPABASE CONFIGURATION (อ่านค่าจาก .env หรือ Vercel Environment Variables)
// ============================================================================
const SUPABASE_URL = import.meta.env?.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY || '';
const supabase =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

// ============================================================================
// 2. INLINE SVG ICONS (ไม่ต้องลง Library เสริม ใช้งานได้ทันทีไม่ติด Error)
// ============================================================================
const Icon = ({ name, className = 'w-4 h-4' }) => {
  const icons = {
    car: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
    calendar: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    dashboard: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
    list: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
    shield: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
    wallet: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
    ),
    users: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    globe: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    logout: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    ),
    plus: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
    search: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    check: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    alert: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    chevLeft: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    ),
    chevRight: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    ),
    chevDown: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    db: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    copy: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    ),
    trash: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    more: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    ),
  };
  return icons[name] || null;
};

// ============================================================================
// 3. TRANSLATIONS (รองรับ 2 ภาษา: ไทย & English)
// ============================================================================
const TRANSLATIONS = {
  th: {
    brandSub: 'ระบบบริหารจัดการธุรกิจรถเช่าครบวงจร',
    loginTitle: 'เข้าสู่ระบบจัดการร้าน',
    loginSubtitle: 'กรอกชื่อผู้ใช้และรหัสผ่านเพื่อเข้าใช้งานระบบ BF CARRENT',
    username: 'ชื่อผู้ใช้งาน (Username)',
    password: 'รหัสผ่าน (Password)',
    loginBtn: 'เข้าสู่ระบบ',
    loginErr: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง หรือบัญชีถูกระงับ',
    demoAccounts: 'บัญชีเริ่มต้นสำหรับเข้าใช้งาน',
    ownerRole: 'เจ้าของร้าน',
    staffRole: 'แอดมินรับจอง',
    logout: 'ออก',
    navDashboard: 'ภาพรวม',
    navSchedule: 'ตารางคิวรถ',
    navBookings: 'รายการจอง',
    navRisk: 'เช็คความเสี่ยง',
    navFleet: 'รถ & ซ่อมบำรุง',
    navFinance: 'รายรับ-รายจ่าย',
    navUsers: 'ผู้ใช้งาน',
    navMore: 'เมนูอื่นๆ',
    newBooking: '+ จองรถใหม่',
    kpiTotalCars: 'รถในระบบทั้งหมด',
    kpiActiveRentals: 'กำลังปล่อยเช่า',
    kpiAvailableCars: 'รถว่างพร้อมส่ง',
    kpiMonthlyRev: 'รายรับเดือนนี้',
    unitCars: 'คัน',
    statusPickup: 'ส่งรถ',
    statusReturn: 'คืนรถ',
    statusActive: 'ใช้งาน',
    statusFree: 'ว่าง',
    statusMaint: 'ซ่อมบำรุง',
    scheduleTitle: 'ตารางคิวรถ 6 คัน & ปฏิทินเช็คว่าง',
    scheduleDesc: 'ตรวจสอบคิวส่งรถ คืนรถ และสถานะใช้งานรายวันของรถแต่ละคัน',
    riskTitle: 'ตรวจสอบประวัติความเสี่ยง & บุคคลอันตราย',
    riskDesc: 'คัดกรองเลขบัตร ปชช. ชื่อ-สกุล หรือเบอร์โทร เพื่อตรวจหาความเสี่ยงเช่ารถไปขาย/จำนำ ไม่จ่ายค่าเช่า หรือนำรถข้ามชายแดน',
    riskInputPlaceholder: 'กรอกเลขบัตร ปชช. 13 หลัก, ชื่อ-นามสกุล หรือเบอร์โทรศัพท์...',
    riskScanBtn: 'สแกนตรวจสอบทันที',
    addBlacklistBtn: '+ บันทึกลง Blacklist ร้าน',
    financeTitle: 'บัญชีรายรับ - รายจ่าย & สรุปภาษี',
    usersTitle: 'จัดการผู้ใช้งานและสิทธิ์การเข้าถึง',
    addUserBtn: '+ เพิ่มผู้ใช้งานใหม่',
    dbSetupBtn: 'ฐานข้อมูล',
  },
  en: {
    brandSub: 'Complete Car Rental Management System',
    loginTitle: 'Sign In to Workspace',
    loginSubtitle: 'Enter your credentials to access BF CARRENT',
    username: 'Username',
    password: 'Password',
    loginBtn: 'Sign In',
    loginErr: 'Invalid username/password or account suspended',
    demoAccounts: 'Default Accounts',
    ownerRole: 'Owner',
    staffRole: 'Booking Staff',
    logout: 'Logout',
    navDashboard: 'Overview',
    navSchedule: 'Fleet Queue',
    navBookings: 'Bookings',
    navRisk: 'Risk Check',
    navFleet: 'Fleet & Service',
    navFinance: 'Finance & Tax',
    navUsers: 'Users',
    navMore: 'More',
    newBooking: '+ New Booking',
    kpiTotalCars: 'Total Fleet',
    kpiActiveRentals: 'Active Rentals',
    kpiAvailableCars: 'Available Now',
    kpiMonthlyRev: 'Monthly Revenue',
    unitCars: 'cars',
    statusPickup: 'Pickup',
    statusReturn: 'Return',
    statusActive: 'In Use',
    statusFree: 'Free',
    statusMaint: 'Service',
    scheduleTitle: '6-Car Fleet Queue & Availability Calendar',
    scheduleDesc: 'Daily pickup, return, and active rental schedule across all vehicles',
    riskTitle: 'Renter Fraud & Risk Screening',
    riskDesc: 'Screen National ID, full name, or phone number for illegal pawning, non-payment, or cross-border smuggling risks',
    riskInputPlaceholder: 'Enter 13-digit Thai ID, full name, or phone number...',
    riskScanBtn: 'Run Risk Scan',
    addBlacklistBtn: '+ Add to Store Blacklist',
    financeTitle: 'Income, Expenses & Tax Summary',
    usersTitle: 'User Accounts & Access Control',
    addUserBtn: '+ Add New User',
    dbSetupBtn: 'Database',
  },
};

// ============================================================================
// 4. INITIAL DATA FOR BF CARRENT (รถ 6 คัน, จอง 9 รายการ, บัญชี, Blacklist, Users)
// ============================================================================
const getRelativeDateStr = (offsetDays) => {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const INITIAL_CARS = [
  { id: 'c1', name: 'Toyota Yaris Ativ 1.2 Sport', plate: '1กข 4589 กทม', category: 'Eco Sedan', dailyRate: 900, deposit: 3000, status: 'available', mileage: 34200, nextService: '40,000 กม.' },
  { id: 'c2', name: 'Honda City 1.0 Turbo RS', plate: '2กค 7812 กทม', category: 'Sedan', dailyRate: 1100, deposit: 3000, status: 'rented', mileage: 28900, nextService: '30,000 กม.' },
  { id: 'c3', name: 'Toyota Veloz 1.5 Premium', plate: '3กง 9021 กทม', category: 'MPV 7 ที่นั่ง', dailyRate: 1500, deposit: 5000, status: 'rented', mileage: 41500, nextService: '50,000 กม.' },
  { id: 'c4', name: 'Honda Civic 1.5 Turbo EL+', plate: '4กจ 1190 กทม', category: 'Mid-Size Sedan', dailyRate: 1700, deposit: 5000, status: 'available', mileage: 22100, nextService: '30,000 กม.' },
  { id: 'c5', name: 'Toyota Fortuner 2.4 Leader', plate: '5กฉ 6634 กทม', category: 'SUV 7 ที่นั่ง', dailyRate: 2400, deposit: 5000, status: 'rented', mileage: 51800, nextService: '60,000 กม.' },
  { id: 'c6', name: 'Isuzu MU-X 1.9 Elegant', plate: '6กช 3308 กทม', category: 'SUV 7 ที่นั่ง', dailyRate: 2200, deposit: 5000, status: 'maintenance', mileage: 48900, nextService: 'เช็คระยะ 50,000 กม.' },
];

const INITIAL_BOOKINGS = [
  { id: 'BK-2601', customerName: 'คุณกิตติพงษ์ วงศ์สุวรรณ', phone: '089-451-2290', idCard: '1100800912341', carId: 'c2', startDate: getRelativeDateStr(-2), endDate: getRelativeDateStr(2), days: 4, totalAmount: 4400, deposit: 3000, status: 'active', pickupLocation: 'สนามบินดอนเมือง', note: 'ลูกค้าประจำ ดูแลรถดี' },
  { id: 'BK-2602', customerName: 'คุณณัฐวดี เจริญสุข', phone: '081-772-8841', idCard: '3101400567892', carId: 'c3', startDate: getRelativeDateStr(0), endDate: getRelativeDateStr(3), days: 3, totalAmount: 4500, deposit: 5000, status: 'active', pickupLocation: 'หน้าร้าน BF CARRENT', note: 'ส่งรถ 10:00 น.' },
  { id: 'BK-2603', customerName: 'คุณธนากร ศรีสมบัติ', phone: '092-334-1198', idCard: '1409900234567', carId: 'c5', startDate: getRelativeDateStr(-3), endDate: getRelativeDateStr(0), days: 3, totalAmount: 7200, deposit: 5000, status: 'active', pickupLocation: 'สนามบินสุวรรณภูมิ', note: 'นัดรับคืนรถ 17:00 น.' },
  { id: 'BK-2604', customerName: 'คุณพิมพ์ชนก อรุณรุ่ง', phone: '086-909-5543', idCard: '1509900881234', carId: 'c1', startDate: getRelativeDateStr(1), endDate: getRelativeDateStr(4), days: 3, totalAmount: 2700, deposit: 3000, status: 'confirmed', pickupLocation: 'BTS หมอชิต', note: 'โอนมัดจำจองแล้ว 1,000 บ.' },
  { id: 'BK-2605', customerName: 'คุณวรพล รัตนโชติ', phone: '095-612-7780', idCard: '1102000445566', carId: 'c4', startDate: getRelativeDateStr(2), endDate: getRelativeDateStr(5), days: 3, totalAmount: 5100, deposit: 5000, status: 'confirmed', pickupLocation: 'หน้าร้าน BF CARRENT', note: '' },
  { id: 'BK-2606', customerName: 'คุณสุภาวดี มณีรัตน์', phone: '084-220-9915', idCard: '3400100778899', carId: 'c2', startDate: getRelativeDateStr(4), endDate: getRelativeDateStr(7), days: 3, totalAmount: 3300, deposit: 3000, status: 'confirmed', pickupLocation: 'สนามบินดอนเมือง', note: '' },
  { id: 'BK-2607', customerName: 'คุณภาคิน เลิศวิไล', phone: '091-883-4410', idCard: '1209700332211', carId: 'c1', startDate: getRelativeDateStr(-7), endDate: getRelativeDateStr(-4), days: 3, totalAmount: 2700, deposit: 3000, status: 'completed', pickupLocation: 'หน้าร้าน BF CARRENT', note: 'คืนมัดจำครบแล้ว' },
  { id: 'BK-2608', customerName: 'คุณชลธิชา ปัญญาดี', phone: '087-554-3321', idCard: '1600100998877', carId: 'c4', startDate: getRelativeDateStr(-9), endDate: getRelativeDateStr(-5), days: 4, totalAmount: 6800, deposit: 5000, status: 'completed', pickupLocation: 'สนามบินสุวรรณภูมิ', note: 'คืนมัดจำครบแล้ว' },
  { id: 'BK-2609', customerName: 'คุณอานนท์ บุญมี', phone: '098-112-6654', idCard: '1309900112233', carId: 'c5', startDate: getRelativeDateStr(5), endDate: getRelativeDateStr(9), days: 4, totalAmount: 9600, deposit: 5000, status: 'confirmed', pickupLocation: 'สนามบินสุวรรณภูมิ', note: 'เดินทางไปต่างจังหวัดกับครอบครัว' },
];

const INITIAL_TRANSACTIONS = [
  { id: 'TX-01', date: getRelativeDateStr(-5), type: 'income', category: 'ค่าเช่ารถ', description: 'ค่าเช่า Honda Civic (BK-2608)', amount: 6800 },
  { id: 'TX-02', date: getRelativeDateStr(-4), type: 'income', category: 'ค่าเช่ารถ', description: 'ค่าเช่า Toyota Yaris Ativ (BK-2607)', amount: 2700 },
  { id: 'TX-03', date: getRelativeDateStr(-3), type: 'income', category: 'ค่าเช่ารถ', description: 'ค่าเช่า Toyota Fortuner (BK-2603)', amount: 7200 },
  { id: 'TX-04', date: getRelativeDateStr(-2), type: 'income', category: 'ค่าเช่ารถ', description: 'ค่าเช่า Honda City RS (BK-2601)', amount: 4400 },
  { id: 'TX-05', date: getRelativeDateStr(-2), type: 'expense', category: 'ซ่อมบำรุง', description: 'เปลี่ยนถ่ายน้ำมันเครื่อง & ผ้าเบรก Isuzu MU-X', amount: 3850 },
  { id: 'TX-06', date: getRelativeDateStr(-1), type: 'expense', category: 'ล้างรถ/ดูแล', description: 'ล้างสีดูดฝุ่น + เคลือบเงา 4 คัน', amount: 1200 },
  { id: 'TX-07', date: getRelativeDateStr(0), type: 'income', category: 'ค่าเช่ารถ', description: 'ค่าเช่า Toyota Veloz (BK-2602)', amount: 4500 },
];

const INITIAL_BLACKLIST = [
  {
    id: 'BL-01',
    name: 'นายสมชาย แซ่ตั้ง (ตัวอย่างเฝ้าระวัง)',
    idCard: '1109900998871',
    phone: '099-999-8877',
    riskCategories: ['เช่ารถไปขาย/จำนำเถื่อน', 'ไม่จ่ายค่าเช่า/เชิดรถ'],
    severity: 'high',
    source: 'กลุ่มเครือข่ายผู้ประกอบการรถเช่าแห่งประเทศไทย / บันทึกร้าน',
    details: 'มีพฤติกรรมเช่ารถเก๋งระยะสั้นแล้วถอด GPS นำไปจำนำบ่อนชายแดน แจ้งความ สน.ท้องที่แล้ว',
    reportedDate: '2026-08-14',
  },
  {
    id: 'BL-02',
    name: 'นายเอกชัย ใจกล้า (ตัวอย่างเฝ้าระวัง)',
    idCard: '3109900112294',
    phone: '080-123-9988',
    riskCategories: ['ลักลอบนำรถข้ามชายแดน', 'ประวัติคดีฉ้อโกง'],
    severity: 'high',
    source: 'ข่าวอาชญากรรมออนไลน์ & แจ้งเตือนสมาคมรถเช่า',
    details: 'พบประวัติรับจ้างขับรถเช่าข้ามแดนผิดกฎหมายบริเวณด่านชายแดนภาคตะวันออกและภาคเหนือ',
    reportedDate: '2026-09-02',
  },
];

const INITIAL_USERS = [
  { id: 'u1', username: 'admin', password: '123', fullName: 'เจ้าของร้าน BF CARRENT', role: 'owner', canViewFinance: true, active: true },
  { id: 'u2', username: 'staff01', password: '111', fullName: 'แอดมินรับจอง', role: 'staff', canViewFinance: false, active: true },
];

// ============================================================================
// 5. HELPER FUNCTIONS (ตรวจเลขบัตร ปชช. 13 หลัก & วิเคราะห์ความเสี่ยง)
// ============================================================================
function validateThaiID(id) {
  const clean = String(id || '').replace(/\D/g, '');
  if (clean.length === 0) return { valid: null, message: '' };
  if (clean.length !== 13) {
    return { valid: false, message: `กรอกแล้ว ${clean.length}/13 หลัก` };
  }
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(clean.charAt(i), 10) * (13 - i);
  }
  const checkDigit = (11 - (sum % 11)) % 10;
  const isValid = checkDigit === parseInt(clean.charAt(12), 10);
  return {
    valid: isValid,
    message: isValid
      ? 'โครงสร้างเลขบัตรประชาชน 13 หลักถูกต้องตามสูตรกรมการปกครอง'
      : 'คำเตือน: เลขบัตรประชาชนผิดสูตรตรวจสอบ (อาจเป็นบัตรปลอมหรือพิมพ์ผิด)',
  };
}

function analyzeRenterRisk(query, blacklist) {
  const q = String(query || '').trim().toLowerCase();
  const cleanDigits = q.replace(/\D/g, '');
  if (!q) return null;

  const matchedBlacklist = blacklist.filter((b) => {
    const bId = String(b.idCard || '').replace(/\D/g, '');
    const bPhone = String(b.phone || '').replace(/\D/g, '');
    const bName = String(b.name || '').toLowerCase();
    return (
      (cleanDigits.length >= 6 && (bId.includes(cleanDigits) || bPhone.includes(cleanDigits))) ||
      (q.length >= 3 && bName.includes(q))
    );
  });

  const idCheck = cleanDigits.length === 13 ? validateThaiID(cleanDigits) : null;
  const suspiciousKeywords = ['จำนำ', 'ขายรถ', 'ชายแดน', 'หนี', 'โกง', 'ปลอม', 'หมายจับ', 'แบล็คลิสต์'];
  const hasKeywordFlag = suspiciousKeywords.some((k) => q.includes(k));

  const isHighRisk = matchedBlacklist.length > 0 || (idCheck && idCheck.valid === false) || hasKeywordFlag;

  return {
    query: query.trim(),
    isHighRisk,
    matchedBlacklist,
    idCheck,
    categories: [
      {
        label: 'เช่ารถไปขาย / จำนำเถื่อน',
        status: matchedBlacklist.some((m) => m.riskCategories?.some((c) => c.includes('จำนำ') || c.includes('ขาย')))
          ? 'danger'
          : 'clear',
      },
      {
        label: 'ไม่จ่ายค่าเช่า / เชิดรถหนี',
        status: matchedBlacklist.some((m) => m.riskCategories?.some((c) => c.includes('ไม่จ่าย') || c.includes('เชิด')))
          ? 'danger'
          : 'clear',
      },
      {
        label: 'ลักลอบนำรถข้ามชายแดน',
        status: matchedBlacklist.some((m) => m.riskCategories?.some((c) => c.includes('ชายแดน')))
          ? 'danger'
          : 'clear',
      },
      {
        label: 'ประวัติคดีฉ้อโกง / บัตรปลอม',
        status:
          (idCheck && idCheck.valid === false) ||
          matchedBlacklist.some((m) => m.riskCategories?.some((c) => c.includes('ฉ้อโกง')))
            ? 'danger'
            : 'clear',
      },
    ],
  };
}

const SUPABASE_SQL_SCRIPT = `-- รันคำสั่งนี้ใน Supabase -> SQL Editor -> New Query
CREATE TABLE IF NOT EXISTS bf_cars (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  plate TEXT NOT NULL,
  category TEXT,
  daily_rate NUMERIC DEFAULT 0,
  deposit NUMERIC DEFAULT 0,
  status TEXT DEFAULT 'available',
  mileage NUMERIC DEFAULT 0,
  next_service TEXT
);

CREATE TABLE IF NOT EXISTS bf_bookings (
  id TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  phone TEXT,
  id_card TEXT,
  car_id TEXT,
  start_date TEXT,
  end_date TEXT,
  days INTEGER DEFAULT 1,
  total_amount NUMERIC DEFAULT 0,
  deposit NUMERIC DEFAULT 0,
  status TEXT DEFAULT 'confirmed',
  pickup_location TEXT,
  note TEXT
);

CREATE TABLE IF NOT EXISTS bf_transactions (
  id TEXT PRIMARY KEY,
  date TEXT,
  type TEXT,
  category TEXT,
  description TEXT,
  amount NUMERIC DEFAULT 0
);

CREATE TABLE IF NOT EXISTS bf_blacklist (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  id_card TEXT,
  phone TEXT,
  risk_categories JSONB DEFAULT '[]'::jsonb,
  severity TEXT DEFAULT 'high',
  source TEXT,
  details TEXT,
  reported_date TEXT
);

CREATE TABLE IF NOT EXISTS bf_users (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT DEFAULT 'staff',
  can_view_finance BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true
);

ALTER TABLE bf_cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE bf_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE bf_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE bf_blacklist ENABLE ROW LEVEL SECURITY;
ALTER TABLE bf_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all bf_cars" ON bf_cars FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all bf_bookings" ON bf_bookings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all bf_transactions" ON bf_transactions FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all bf_blacklist" ON bf_blacklist FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all bf_users" ON bf_users FOR ALL USING (true) WITH CHECK (true);`;

// ============================================================================
// 6. MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  // Language & Auth State
  const [lang, setLang] = useState(() => localStorage.getItem('bf_lang') || 'th');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('bf_current_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // App Data State (Persist in localStorage + Sync with Supabase if configured)
  const [cars, setCars] = useState(() => {
    try {
      const s = localStorage.getItem('bf_cars');
      return s ? JSON.parse(s) : INITIAL_CARS;
    } catch {
      return INITIAL_CARS;
    }
  });
  const [bookings, setBookings] = useState(() => {
    try {
      const s = localStorage.getItem('bf_bookings');
      return s ? JSON.parse(s) : INITIAL_BOOKINGS;
    } catch {
      return INITIAL_BOOKINGS;
    }
  });
  const [transactions, setTransactions] = useState(() => {
    try {
      const s = localStorage.getItem('bf_transactions');
      return s ? JSON.parse(s) : INITIAL_TRANSACTIONS;
    } catch {
      return INITIAL_TRANSACTIONS;
    }
  });
  const [blacklist, setBlacklist] = useState(() => {
    try {
      const s = localStorage.getItem('bf_blacklist');
      return s ? JSON.parse(s) : INITIAL_BLACKLIST;
    } catch {
      return INITIAL_BLACKLIST;
    }
  });
  const [users, setUsers] = useState(() => {
    try {
      const s = localStorage.getItem('bf_users');
      // รองรับรหัสผ่านเริ่มต้นทั้ง 1234 / 1111 และค่าเดิม
      return s
        ? JSON.parse(s)
        : [
            { id: 'u1', username: 'admin', password: '1234', fullName: 'เจ้าของร้าน BF CARRENT', role: 'owner', canViewFinance: true, active: true },
            { id: 'u2', username: 'staff01', password: '1111', fullName: 'แอดมินรับจอง', role: 'staff', canViewFinance: false, active: true },
          ];
    } catch {
      return INITIAL_USERS;
    }
  });

  // Navigation & UI State
  const [activeTab, setActiveTab] = useState('schedule');
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [currentMonthDate, setCurrentMonthDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  // Modals State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [dbModalOpen, setDbModalOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [blacklistModalOpen, setBlacklistModalOpen] = useState(false);
  const [txModalOpen, setTxModalOpen] = useState(false);

  // Forms State
  const [bookingForm, setBookingForm] = useState({
    customerName: '',
    phone: '',
    idCard: '',
    carId: 'c1',
    startDate: getRelativeDateStr(0),
    endDate: getRelativeDateStr(2),
    pickupLocation: 'หน้าร้าน BF CARRENT',
    note: '',
  });
  const [riskSearchInput, setRiskSearchInput] = useState('');
  const [riskResult, setRiskResult] = useState(null);
  const [newBlacklistForm, setNewBlacklistForm] = useState({
    name: '',
    idCard: '',
    phone: '',
    riskCategories: ['เช่ารถไปขาย/จำนำเถื่อน'],
    source: 'บันทึกร้าน BF CARRENT',
    details: '',
  });
  const [newUserForm, setNewUserForm] = useState({
    username: '',
    password: '',
    fullName: '',
    role: 'staff',
    canViewFinance: false,
  });
  const [newTxForm, setNewTxForm] = useState({
    date: getRelativeDateStr(0),
    type: 'income',
    category: 'ค่าเช่ารถ',
    description: '',
    amount: '',
  });

  const t = TRANSLATIONS[lang] || TRANSLATIONS.th;

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3200);
  };

  // Persist to localStorage
  useEffect(() => { localStorage.setItem('bf_lang', lang); }, [lang]);
  useEffect(() => { localStorage.setItem('bf_cars', JSON.stringify(cars)); }, [cars]);
  useEffect(() => { localStorage.setItem('bf_bookings', JSON.stringify(bookings)); }, [bookings]);
  useEffect(() => { localStorage.setItem('bf_transactions', JSON.stringify(transactions)); }, [transactions]);
  useEffect(() => { localStorage.setItem('bf_blacklist', JSON.stringify(blacklist)); }, [blacklist]);
  useEffect(() => { localStorage.setItem('bf_users', JSON.stringify(users)); }, [users]);

  // Initial Load from Supabase if connected
  useEffect(() => {
    if (!supabase) return;
    (async () => {
      try {
        const [cRes, bRes, tRes, blRes, uRes] = await Promise.all([
          supabase.from('bf_cars').select('*'),
          supabase.from('bf_bookings').select('*'),
          supabase.from('bf_transactions').select('*'),
          supabase.from('bf_blacklist').select('*'),
          supabase.from('bf_users').select('*'),
        ]);
        if (cRes.data?.length) {
          setCars(cRes.data.map((r) => ({
            id: r.id, name: r.name, plate: r.plate, category: r.category,
            dailyRate: Number(r.daily_rate), deposit: Number(r.deposit),
            status: r.status, mileage: Number(r.mileage), nextService: r.next_service,
          })));
        }
        if (bRes.data?.length) {
          setBookings(bRes.data.map((r) => ({
            id: r.id, customerName: r.customer_name, phone: r.phone, idCard: r.id_card,
            carId: r.car_id, startDate: r.start_date, endDate: r.end_date,
            days: Number(r.days), totalAmount: Number(r.total_amount), deposit: Number(r.deposit),
            status: r.status, pickupLocation: r.pickup_location, note: r.note,
          })));
        }
        if (tRes.data?.length) {
          setTransactions(tRes.data.map((r) => ({ ...r, amount: Number(r.amount) })));
        }
        if (blRes.data?.length) {
          setBlacklist(blRes.data.map((r) => ({
            id: r.id, name: r.name, idCard: r.id_card, phone: r.phone,
            riskCategories: r.risk_categories || [], severity: r.severity,
            source: r.source, details: r.details, reportedDate: r.reported_date,
          })));
        }
        if (uRes.data?.length) {
          setUsers(uRes.data.map((r) => ({
            id: r.id, username: r.username, password: r.password,
            fullName: r.full_name, role: r.role, canViewFinance: r.can_view_finance, active: r.active,
          })));
        }
      } catch (err) {
        console.warn('Supabase sync skipped:', err);
      }
    })();
  }, []);

  // Auth Handlers
  const handleLogin = (e) => {
    e.preventDefault();
    const matched = users.find(
      (u) => u.username.trim().toLowerCase() === loginUsername.trim().toLowerCase() && u.password === loginPassword && u.active
    );
    if (!matched) {
      setLoginError(t.loginErr);
      return;
    }
    setCurrentUser(matched);
    localStorage.setItem('bf_current_user', JSON.stringify(matched));
    setLoginError('');
    setLoginUsername('');
    setLoginPassword('');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('bf_current_user');
  };

  // Permissions & Computed KPIs
  const isOwnerUser = currentUser?.role === 'owner';
  const canAccessFinance = isOwnerUser || Boolean(currentUser?.canViewFinance);

  const stats = useMemo(() => {
    const todayStr = getRelativeDateStr(0);
    const activeRentals = bookings.filter((b) => b.status === 'active' || (b.status !== 'cancelled' && b.startDate <= todayStr && b.endDate >= todayStr)).length;
    const maintCars = cars.filter((c) => c.status === 'maintenance').length;
    const availableCars = Math.max(0, cars.length - activeRentals - maintCars);
    const monthlyIncome = transactions.filter((tx) => tx.type === 'income').reduce((s, x) => s + Number(x.amount || 0), 0);
    const monthlyExpense = transactions.filter((tx) => tx.type === 'expense').reduce((s, x) => s + Number(x.amount || 0), 0);
    return {
      totalCars: cars.length,
      activeRentals,
      availableCars,
      monthlyIncome,
      monthlyExpense,
      netProfit: monthlyIncome - monthlyExpense,
    };
  }, [cars, bookings, transactions]);

  // Calendar Days Generator for Current Month
  const calendarDays = useMemo(() => {
    const year = currentMonthDate.getFullYear();
    const month = currentMonthDate.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstDayIndex; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      cells.push({ day: d, dateStr });
    }
    return cells;
  }, [currentMonthDate]);

  // Live Risk Check inside Booking Modal
  const liveBookingRisk = useMemo(() => {
    const combined = `${bookingForm.idCard} ${bookingForm.customerName} ${bookingForm.phone}`.trim();
    if (!combined) return null;
    const idCheck = validateThaiID(bookingForm.idCard);
    const risk = analyzeRenterRisk(bookingForm.idCard || bookingForm.customerName || bookingForm.phone, blacklist);
    return { idCheck, risk };
  }, [bookingForm.idCard, bookingForm.customerName, bookingForm.phone, blacklist]);

  // Create Booking Handler
  const handleCreateBooking = async (e) => {
    e.preventDefault();
    const car = cars.find((c) => c.id === bookingForm.carId) || cars[0];
    const start = new Date(bookingForm.startDate);
    const end = new Date(bookingForm.endDate);
    const diffDays = Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24)) || 1);
    const totalAmount = diffDays * Number(car.dailyRate || 1000);
    const newBooking = {
      id: `BK-${Math.floor(2610 + Math.random() * 890)}`,
      customerName: bookingForm.customerName.trim(),
      phone: bookingForm.phone.trim(),
      idCard: bookingForm.idCard.trim(),
      carId: car.id,
      startDate: bookingForm.startDate,
      endDate: bookingForm.endDate,
      days: diffDays,
      totalAmount,
      deposit: Number(car.deposit || 3000),
      status: bookingForm.startDate <= getRelativeDateStr(0) ? 'active' : 'confirmed',
      pickupLocation: bookingForm.pickupLocation,
      note: bookingForm.note,
    };

    setBookings((prev) => [newBooking, ...prev]);
    const newTx = {
      id: `TX-${Date.now()}`,
      date: getRelativeDateStr(0),
      type: 'income',
      category: 'ค่าเช่ารถ',
      description: `ค่าเช่า ${car.name} (${newBooking.id}) - ${newBooking.customerName}`,
      amount: totalAmount,
    };
    setTransactions((prev) => [newTx, ...prev]);

    if (supabase) {
      await supabase.from('bf_bookings').insert({
        id: newBooking.id, customer_name: newBooking.customerName, phone: newBooking.phone,
        id_card: newBooking.idCard, car_id: newBooking.carId, start_date: newBooking.startDate,
        end_date: newBooking.endDate, days: newBooking.days, total_amount: newBooking.totalAmount,
        deposit: newBooking.deposit, status: newBooking.status, pickup_location: newBooking.pickupLocation,
        note: newBooking.note,
      });
      await supabase.from('bf_transactions').insert(newTx);
    }

    setBookingModalOpen(false);
    setBookingForm({
      customerName: '', phone: '', idCard: '', carId: cars[0]?.id || 'c1',
      startDate: getRelativeDateStr(0), endDate: getRelativeDateStr(2),
      pickupLocation: 'หน้าร้าน BF CARRENT', note: '',
    });
    showToast(`บันทึกการจอง ${newBooking.id} สำเร็จ!`);
  };

  // Add Blacklist Handler
  const handleAddBlacklist = async (e) => {
    e.preventDefault();
    const item = {
      id: `BL-${Date.now()}`,
      name: newBlacklistForm.name.trim(),
      idCard: newBlacklistForm.idCard.trim(),
      phone: newBlacklistForm.phone.trim(),
      riskCategories: newBlacklistForm.riskCategories,
      severity: 'high',
      source: newBlacklistForm.source || 'บันทึกร้าน BF CARRENT',
      details: newBlacklistForm.details.trim(),
      reportedDate: getRelativeDateStr(0),
    };
    setBlacklist((prev) => [item, ...prev]);
    if (supabase) {
      await supabase.from('bf_blacklist').insert({
        id: item.id, name: item.name, id_card: item.idCard, phone: item.phone,
        risk_categories: item.riskCategories, severity: item.severity,
        source: item.source, details: item.details, reported_date: item.reportedDate,
      });
    }
    setBlacklistModalOpen(false);
    setNewBlacklistForm({ name: '', idCard: '', phone: '', riskCategories: ['เช่ารถไปขาย/จำนำเถื่อน'], source: 'บันทึกร้าน BF CARRENT', details: '' });
    showToast('บันทึกข้อมูลลง Blacklist ร้านเรียบร้อยแล้ว');
  };

  // Add User Handler
  const handleAddUser = async (e) => {
    e.preventDefault();
    const u = {
      id: `u-${Date.now()}`,
      username: newUserForm.username.trim(),
      password: newUserForm.password.trim(),
      fullName: newUserForm.fullName.trim(),
      role: newUserForm.role,
      canViewFinance: newUserForm.role === 'owner' ? true : newUserForm.canViewFinance,
      active: true,
    };
    setUsers((prev) => [...prev, u]);
    if (supabase) {
      await supabase.from('bf_users').insert({
        id: u.id, username: u.username, password: u.password,
        full_name: u.fullName, role: u.role, can_view_finance: u.canViewFinance, active: u.active,
      });
    }
    setUserModalOpen(false);
    setNewUserForm({ username: '', password: '', fullName: '', role: 'staff', canViewFinance: false });
    showToast(`เพิ่มผู้ใช้งาน ${u.fullName} เรียบร้อยแล้ว`);
  };

  // Add Transaction Handler
  const handleAddTx = async (e) => {
    e.preventDefault();
    const tx = {
      id: `TX-${Date.now()}`,
      date: newTxForm.date,
      type: newTxForm.type,
      category: newTxForm.category,
      description: newTxForm.description.trim(),
      amount: Number(newTxForm.amount || 0),
    };
    setTransactions((prev) => [tx, ...prev]);
    if (supabase) {
      await supabase.from('bf_transactions').insert(tx);
    }
    setTxModalOpen(false);
    setNewTxForm({ date: getRelativeDateStr(0), type: 'income', category: 'ค่าเช่ารถ', description: '', amount: '' });
    showToast('บันทึกรายการบัญชีสำเร็จ');
  };

  // Sync Initial Data to Supabase
  const handlePushInitialToSupabase = async () => {
    if (!supabase) {
      showToast('ยังไม่ได้ตั้งค่า VITE_SUPABASE_URL และ VITE_SUPABASE_ANON_KEY', 'error');
      return;
    }
    try {
      await supabase.from('bf_cars').upsert(
        cars.map((c) => ({
          id: c.id, name: c.name, plate: c.plate, category: c.category,
          daily_rate: c.dailyRate, deposit: c.deposit, status: c.status,
          mileage: c.mileage, next_service: c.nextService,
        }))
      );
      await supabase.from('bf_bookings').upsert(
        bookings.map((b) => ({
          id: b.id, customer_name: b.customerName, phone: b.phone, id_card: b.idCard,
          car_id: b.carId, start_date: b.startDate, end_date: b.endDate, days: b.days,
          total_amount: b.totalAmount, deposit: b.deposit, status: b.status,
          pickup_location: b.pickupLocation, note: b.note,
        }))
      );
      await supabase.from('bf_transactions').upsert(transactions);
      await supabase.from('bf_blacklist').upsert(
        blacklist.map((bl) => ({
          id: bl.id, name: bl.name, id_card: bl.idCard, phone: bl.phone,
          risk_categories: bl.riskCategories, severity: bl.severity,
          source: bl.source, details: bl.details, reported_date: bl.reportedDate,
        }))
      );
      await supabase.from('bf_users').upsert(
        users.map((u) => ({
          id: u.id, username: u.username, password: u.password,
          full_name: u.fullName, role: u.role, can_view_finance: u.canViewFinance, active: u.active,
        }))
      );
      showToast('ซิงค์ข้อมูลทั้งหมดขึ้น Supabase Cloud เรียบร้อยแล้ว!');
    } catch (err) {
      showToast('เกิดข้อผิดพลาดในการซิงค์: ' + err.message, 'error');
    }
  };

  // ==========================================================================
  // 7. LOGIN GATE SCREEN (พร้อม Dropdown เลือกภาษา ไทย / English ไม่มีตัวย่อ TH/GB)
  // ==========================================================================
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 flex flex-col justify-between p-4 sm:p-6">
        {/* Top Bar with Language Dropdown */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-white">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Icon name="car" className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="font-bold tracking-wider text-lg leading-none">BF CARRENT</div>
              <div className="text-xs text-emerald-300/80 mt-0.5">{t.brandSub}</div>
            </div>
          </div>

          {/* Language Dropdown (ไม่มีตัวย่อ TH, GB) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen((o) => !o)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-medium backdrop-blur-md transition"
            >
              <Icon name="globe" className="w-4 h-4 text-emerald-300" />
              <span>{lang === 'th' ? 'ไทย' : 'English'}</span>
              <Icon name="chevDown" className="w-4 h-4 text-white/70" />
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white shadow-xl border border-slate-100 py-1.5 z-50">
                <button
                  type="button"
                  onClick={() => { setLang('th'); setLangMenuOpen(false); }}
                  className="w-full px-4 py-2 text-left text-sm flex items-center justify-between hover:bg-emerald-50 text-slate-800 font-medium"
                >
                  <span>ไทย</span>
                  {lang === 'th' && <Icon name="check" className="w-4 h-4 text-emerald-600" />}
                </button>
                <button
                  type="button"
                  onClick={() => { setLang('en'); setLangMenuOpen(false); }}
                  className="w-full px-4 py-2 text-left text-sm flex items-center justify-between hover:bg-emerald-50 text-slate-800 font-medium"
                >
                  <span>English</span>
                  {lang === 'en' && <Icon name="check" className="w-4 h-4 text-emerald-600" />}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Center Login Card */}
        <div className="w-full max-w-md mx-auto my-auto py-8">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-950 text-emerald-400 mb-3 shadow-md">
                <Icon name="car" className="w-7 h-7" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">{t.loginTitle}</h1>
              <p className="text-sm text-slate-500 mt-1">{t.loginSubtitle}</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">{t.username}</label>
                <input
                  type="text"
                  required
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none text-slate-900 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">{t.password}</label>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none text-slate-900 text-sm"
                />
              </div>

              {loginError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                  {loginError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg shadow-emerald-900/25 transition cursor-pointer"
              >
                {t.loginBtn}
              </button>
            </form>

            {/* Quick Demo Login Buttons */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="text-xs font-medium text-slate-400 text-center mb-2.5">{t.demoAccounts}</div>
              <div className="grid grid-cols-2 gap-2">
                {users.filter((u) => u.active).slice(0, 2).map((u) => (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => {
                      setLoginUsername(u.username);
                      setLoginPassword(u.password);
                    }}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 text-left transition"
                  >
                    <div className="text-xs font-bold text-slate-800">{u.role === 'owner' ? t.ownerRole : t.staffRole}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{u.username} / {u.password}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-slate-400">
          BF CARRENT Management System • Responsive Web App
        </div>
      </div>
    );
  }

  // ==========================================================================
  // 8. MAIN AUTHENTICATED WORKSPACE
  // ==========================================================================
  const navItems = [
    { id: 'dashboard', label: t.navDashboard, icon: 'dashboard' },
    { id: 'schedule', label: t.navSchedule, icon: 'calendar' },
    { id: 'bookings', label: t.navBookings, icon: 'list' },
    { id: 'risk', label: t.navRisk, icon: 'shield' },
    { id: 'fleet', label: t.navFleet, icon: 'car' },
    ...(canAccessFinance ? [{ id: 'finance', label: t.navFinance, icon: 'wallet' }] : []),
    ...(isOwnerUser ? [{ id: 'users', label: t.navUsers, icon: 'users' }] : []),
  ];

  const monthLabel = currentMonthDate.toLocaleDateString(lang === 'th' ? 'th-TH' : 'en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20 lg:pb-8">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-2xl shadow-xl text-sm font-medium text-white flex items-center gap-2 ${
            toast.type === 'error' ? 'bg-rose-600' : 'bg-emerald-900'
          }`}
        >
          <Icon name={toast.type === 'error' ? 'alert' : 'check'} className="w-4 h-4" />
          <span>{toast.msg}</span>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TOP HEADER (ปุ่มล็อกเอาต์อยู่ขวาสุดเสมอ)                                   */}
      {/* ==================================================================== */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
          {/* Left: Brand */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400 shadow-sm">
              <Icon name="car" className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg leading-none">
                BF CARRENT
              </div>
              <div className="hidden sm:block text-[11px] text-slate-500 mt-0.5">{t.brandSub}</div>
            </div>
          </div>

          {/* Center: Desktop / Tablet Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-emerald-950 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <Icon name={item.icon} className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Rightmost: Action + User Badge + Logout Button on Far Right */}
          <div className="flex items-center gap-2 ml-auto shrink-0">
            <button
              type="button"
              onClick={() => setDbModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              title="Supabase / Cloud Status"
            >
              <span className={`w-2 h-2 rounded-full ${supabase ? 'bg-emerald-500' : 'bg-amber-400'}`} />
              <span className="hidden md:inline">{supabase ? 'Cloud Sync' : t.dbSetupBtn}</span>
            </button>

            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="px-3 sm:px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition cursor-pointer"
            >
              {t.newBooking}
            </button>

            {/* User Pill + Logout Button at Far Right */}
            <div className="flex items-center gap-2 pl-2.5 pr-1 py-1 rounded-full bg-slate-100 border border-slate-200/80">
              <div className="w-7 h-7 rounded-full bg-emerald-950 text-amber-300 flex items-center justify-center text-xs font-bold">
                {currentUser.fullName?.charAt(0) || 'U'}
              </div>
              <span className="hidden sm:inline text-xs font-semibold text-slate-700 max-w-[110px] truncate">
                {currentUser.fullName}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition cursor-pointer"
              >
                <Icon name="logout" className="w-3.5 h-3.5" />
                <span>{t.logout}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ==================================================================== */}
      {/* MAIN CONTENT AREA                                                    */}
      {/* ==================================================================== */}
      <main className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 pt-5 space-y-6">
        {/* KPI SUMMARY BAR (แสดงทุกหน้าหลัก) */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="text-xs font-medium text-slate-500">{t.kpiTotalCars}</div>
            <div className="mt-1.5 flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">{stats.totalCars}</span>
              <span className="text-xs text-slate-500">{t.unitCars}</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="text-xs font-medium text-slate-500">{t.kpiActiveRentals}</div>
            <div className="mt-1.5 flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-sky-600">{stats.activeRentals}</span>
              <span className="text-xs text-slate-500">{t.unitCars}</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="text-xs font-medium text-slate-500">{t.kpiAvailableCars}</div>
            <div className="mt-1.5 flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">{stats.availableCars}</span>
              <span className="text-xs text-slate-500">{t.unitCars}</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="text-xs font-medium text-slate-500">{t.kpiMonthlyRev}</div>
            <div className="mt-1.5 flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl font-extrabold text-emerald-950">
                {canAccessFinance ? `฿${stats.monthlyIncome.toLocaleString()}` : '••••••'}
              </span>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* TAB 1: DASHBOARD OVERVIEW                                          */}
        {/* ================================================================== */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-slate-900 text-base">คิวรถทั้งหมด 6 คันวันนี้</h2>
                <button
                  type="button"
                  onClick={() => setActiveTab('schedule')}
                  className="text-xs font-semibold text-emerald-700 hover:underline"
                >
                  ดูปฏิทินเต็ม →
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cars.map((car) => {
                  const todayStr = getRelativeDateStr(0);
                  const activeBk = bookings.find(
                    (b) => b.carId === car.id && b.status !== 'cancelled' && b.startDate <= todayStr && b.endDate >= todayStr
                  );
                  return (
                    <div key={car.id} className="p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/50 flex flex-col justify-between gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-bold text-sm text-slate-900">{car.name}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{car.plate} • ฿{car.dailyRate.toLocaleString()}/วัน</div>
                        </div>
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-bold shrink-0 ${
                            car.status === 'maintenance'
                              ? 'bg-amber-100 text-amber-800'
                              : activeBk
                              ? 'bg-sky-100 text-sky-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {car.status === 'maintenance' ? t.statusMaint : activeBk ? t.statusActive : t.statusFree}
                        </span>
                      </div>
                      {activeBk ? (
                        <div className="text-xs text-slate-600 bg-white px-2.5 py-1.5 rounded-xl border border-slate-100">
                          ผู้เช่า: <span className="font-semibold">{activeBk.customerName}</span> (คืน {activeBk.endDate})
                        </div>
                      ) : (
                        <div className="text-xs text-slate-400 px-1">พร้อมรับงานเช่าทันที</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-slate-900 text-base mb-3">คัดกรองผู้เช่าด่วน</h2>
                <p className="text-xs text-slate-500 mb-3">
                  กรอกเลขบัตร ปชช. หรือเบอร์โทรลูกค้าใหม่เพื่อตรวจความเสี่ยงก่อนส่งมอบรถ
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={riskSearchInput}
                    onChange={(e) => setRiskSearchInput(e.target.value)}
                    placeholder="เลขบัตร 13 หลัก / เบอร์โทร..."
                    className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs outline-none focus:border-emerald-600"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setRiskResult(analyzeRenterRisk(riskSearchInput, blacklist));
                      setActiveTab('risk');
                    }}
                    className="px-4 py-2.5 rounded-xl bg-emerald-950 text-white text-xs font-semibold shrink-0"
                  >
                    ตรวจ
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700 mb-2">รายการเฝ้าระวังล่าสุด</div>
                <div className="space-y-2">
                  {blacklist.slice(0, 2).map((bl) => (
                    <div key={bl.id} className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-100 text-xs">
                      <div className="font-bold text-rose-900">{bl.name}</div>
                      <div className="text-rose-700/80 text-[11px] mt-0.5">{bl.riskCategories?.join(' • ')}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 2: SCHEDULE & 6-CAR QUEUE (ไม่มีแถบเดือน, ไม่มีตัวย่อวันในช่อง, ข้อความอยู่กึ่งกลางช่อง) */}
        {/* ================================================================== */}
        {activeTab === 'schedule' && (
          <div className="space-y-5">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-sm">
              {/* Header with ONLY < Month Year > navigation (ลบแถบ ม.ค.-ธ.ค. ออกแล้ว) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">{t.scheduleTitle}</h2>
                  <p className="text-xs text-slate-500 mt-0.5">{t.scheduleDesc}</p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto bg-slate-100 p-1.5 rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setCurrentMonthDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))}
                    className="w-8 h-8 rounded-xl bg-white hover:bg-emerald-50 flex items-center justify-center text-slate-700 shadow-sm cursor-pointer"
                  >
                    <Icon name="chevLeft" className="w-4 h-4" />
                  </button>
                  <span className="px-3 text-sm font-bold text-slate-900 min-w-[140px] text-center">
                    {monthLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCurrentMonthDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))}
                    className="w-8 h-8 rounded-xl bg-white hover:bg-emerald-50 flex items-center justify-center text-slate-700 shadow-sm cursor-pointer"
                  >
                    <Icon name="chevRight" className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Monthly Calendar Grid (ไม่มีตัวย่อวันในช่อง, สถานะ ส่งรถ/คืนรถ/ใช้งาน อยู่กึ่งกลางช่อง) */}
              <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                {calendarDays.map((cell, idx) => {
                  if (!cell) {
                    return <div key={`empty-${idx}`} className="h-24 sm:h-28 rounded-2xl bg-slate-50/50" />;
                  }
                  const todayStr = getRelativeDateStr(0);
                  const isToday = cell.dateStr === todayStr;
                  const pickups = bookings.filter((b) => b.status !== 'cancelled' && b.startDate === cell.dateStr);
                  const returns = bookings.filter((b) => b.status !== 'cancelled' && b.endDate === cell.dateStr);
                  const actives = bookings.filter(
                    (b) => b.status !== 'cancelled' && b.startDate < cell.dateStr && b.endDate > cell.dateStr
                  );

                  return (
                    <div
                      key={cell.dateStr}
                      className={`h-24 sm:h-28 rounded-2xl border p-1.5 sm:p-2 flex flex-col justify-between transition ${
                        isToday
                          ? 'border-emerald-500 bg-emerald-50/40 ring-1 ring-emerald-500/30'
                          : 'border-slate-200/80 bg-white hover:border-emerald-300'
                      }`}
                    >
                      {/* Top: ONLY Day Number (ไม่มีตัวย่อวัน อา. จ. อ.) */}
                      <div className="flex items-center justify-between">
                        <span className={`text-xs sm:text-sm font-bold ${isToday ? 'text-emerald-800' : 'text-slate-700'}`}>
                          {cell.day}
                        </span>
                        {isToday && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-600 text-white">
                            วันนี้
                          </span>
                        )}
                      </div>

                      {/* Center: Status Badges Centered Horizontally & Vertically */}
                      <div className="flex-1 flex flex-col items-center justify-center gap-1 my-auto">
                        {pickups.length > 0 && (
                          <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] sm:text-xs font-bold text-center leading-tight">
                            {t.statusPickup} ({pickups.length})
                          </span>
                        )}
                        {returns.length > 0 && (
                          <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] sm:text-xs font-bold text-center leading-tight">
                            {t.statusReturn} ({returns.length})
                          </span>
                        )}
                        {actives.length > 0 && (
                          <span className="px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 text-[10px] sm:text-xs font-bold text-center leading-tight">
                            {t.statusActive} ({actives.length})
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 6-Car Fleet Status Matrix */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4">สถานะคิวรถรายคัน (6 คัน)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs text-slate-500">
                      <th className="py-3 px-3 font-semibold">รถยนต์ / ทะเบียน</th>
                      <th className="py-3 px-3 font-semibold">เรทค่าเช่า</th>
                      <th className="py-3 px-3 font-semibold">คิวเช่าปัจจุบัน / ถัดไป</th>
                      <th className="py-3 px-3 font-semibold text-center">สถานะวันนี้</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {cars.map((car) => {
                      const todayStr = getRelativeDateStr(0);
                      const currentBk = bookings.find(
                        (b) => b.carId === car.id && b.status !== 'cancelled' && b.startDate <= todayStr && b.endDate >= todayStr
                      );
                      const nextBk = bookings
                        .filter((b) => b.carId === car.id && b.status !== 'cancelled' && b.startDate > todayStr)
                        .sort((a, b) => a.startDate.localeCompare(b.startDate))[0];

                      let badgeLabel = t.statusFree;
                      let badgeStyle = 'bg-emerald-100 text-emerald-800';
                      if (car.status === 'maintenance') {
                        badgeLabel = t.statusMaint;
                        badgeStyle = 'bg-amber-100 text-amber-800';
                      } else if (currentBk?.startDate === todayStr) {
                        badgeLabel = t.statusPickup;
                        badgeStyle = 'bg-emerald-600 text-white';
                      } else if (currentBk?.endDate === todayStr) {
                        badgeLabel = t.statusReturn;
                        badgeStyle = 'bg-amber-500 text-white';
                      } else if (currentBk) {
                        badgeLabel = t.statusActive;
                        badgeStyle = 'bg-sky-100 text-sky-800';
                      }

                      return (
                        <tr key={car.id} className="hover:bg-slate-50/70">
                          <td className="py-3.5 px-3">
                            <div className="font-bold text-slate-900">{car.name}</div>
                            <div className="text-xs text-slate-500">{car.plate} • {car.category}</div>
                          </td>
                          <td className="py-3.5 px-3 font-semibold text-slate-700">
                            ฿{car.dailyRate.toLocaleString()}/วัน
                          </td>
                          <td className="py-3.5 px-3 text-xs">
                            {currentBk ? (
                              <div className="text-slate-800 font-medium">
                                {currentBk.customerName} ({currentBk.startDate} → {currentBk.endDate})
                              </div>
                            ) : nextBk ? (
                              <div className="text-slate-500">
                                คิวถัดไป: {nextBk.customerName} ({nextBk.startDate})
                              </div>
                            ) : (
                              <span className="text-slate-400">ไม่มีคิวจองล่วงหน้า</span>
                            )}
                          </td>
                          <td className="py-3.5 px-3 text-center">
                            <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold ${badgeStyle}`}>
                              {badgeLabel}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 3: BOOKINGS LIST (9+ รายการ)                                    */}
        {/* ================================================================== */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">รายการจองรถทั้งหมด ({bookings.length} รายการ)</h2>
                <p className="text-xs text-slate-500">จัดการสถานะรับรถ คืนรถ และตรวจสอบข้อมูลผู้เช่า</p>
              </div>
              <button
                type="button"
                onClick={() => setBookingModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-emerald-950 text-white text-xs font-semibold self-start"
              >
                {t.newBooking}
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[760px]">
                <thead>
                  <tr className="border-b border-slate-200 text-xs text-slate-500">
                    <th className="py-3 px-3">รหัสจอง</th>
                    <th className="py-3 px-3">ลูกค้า / เบอร์โทร</th>
                    <th className="py-3 px-3">รถยนต์</th>
                    <th className="py-3 px-3">วันรับ - วันคืน</th>
                    <th className="py-3 px-3">ยอดรวม</th>
                    <th className="py-3 px-3">สถานะ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {bookings.map((bk) => {
                    const car = cars.find((c) => c.id === bk.carId);
                    return (
                      <tr key={bk.id} className="hover:bg-slate-50/70">
                        <td className="py-3.5 px-3 font-bold text-emerald-900">{bk.id}</td>
                        <td className="py-3.5 px-3">
                          <div className="font-semibold text-slate-900">{bk.customerName}</div>
                          <div className="text-xs text-slate-500">{bk.phone} • บัตร: {bk.idCard || '-'}</div>
                        </td>
                        <td className="py-3.5 px-3">
                          <div className="font-medium text-slate-800">{car?.name || bk.carId}</div>
                          <div className="text-xs text-slate-400">{car?.plate}</div>
                        </td>
                        <td className="py-3.5 px-3 text-xs">
                          <div className="font-medium text-slate-700">{bk.startDate} ถึง {bk.endDate}</div>
                          <div className="text-slate-400">{bk.days} วัน • {bk.pickupLocation}</div>
                        </td>
                        <td className="py-3.5 px-3 font-bold text-slate-900">
                          ฿{Number(bk.totalAmount).toLocaleString()}
                        </td>
                        <td className="py-3.5 px-3">
                          <select
                            value={bk.status}
                            onChange={(e) => {
                              const nextStatus = e.target.value;
                              setBookings((prev) => prev.map((x) => (x.id === bk.id ? { ...x, status: nextStatus } : x)));
                              showToast(`อัปเดตสถานะ ${bk.id} เรียบร้อย`);
                            }}
                            className="px-2.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                          >
                            <option value="confirmed">รอยืนยัน/รอส่งรถ</option>
                            <option value="active">กำลังใช้งาน</option>
                            <option value="completed">คืนรถแล้ว</option>
                            <option value="cancelled">ยกเลิก</option>
                          </select>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 4: RENTER RISK & BLACKLIST SCREENING                           */}
        {/* ================================================================== */}
        {activeTab === 'risk' && (
          <div className="space-y-5">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">{t.riskTitle}</h2>
                  <p className="text-xs text-slate-500 mt-0.5">{t.riskDesc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setBlacklistModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold self-start"
                >
                  {t.addBlacklistBtn}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="text"
                  value={riskSearchInput}
                  onChange={(e) => setRiskSearchInput(e.target.value)}
                  placeholder={t.riskInputPlaceholder}
                  className="flex-1 px-4 py-3 rounded-2xl border border-slate-200 text-sm outline-none focus:border-emerald-600"
                />
                <button
                  type="button"
                  onClick={() => setRiskResult(analyzeRenterRisk(riskSearchInput, blacklist))}
                  className="px-6 py-3 rounded-2xl bg-emerald-950 hover:bg-emerald-900 text-white text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <Icon name="search" className="w-4 h-4" />
                  <span>{t.riskScanBtn}</span>
                </button>
              </div>

              {/* Risk Scan Result Card */}
              {riskResult && (
                <div
                  className={`mt-5 p-5 rounded-2xl border ${
                    riskResult.isHighRisk
                      ? 'bg-rose-50 border-rose-200'
                      : 'bg-emerald-50/70 border-emerald-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${
                          riskResult.isHighRisk ? 'bg-rose-600' : 'bg-emerald-600'
                        }`}
                      >
                        <Icon name={riskResult.isHighRisk ? 'alert' : 'check'} className="w-5 h-5" />
                      </div>
                      <div>
                        <div className={`font-bold text-base ${riskResult.isHighRisk ? 'text-rose-900' : 'text-emerald-900'}`}>
                          {riskResult.isHighRisk
                            ? 'พบสัญญาณความเสี่ยงสูง! ควรตรวจสอบเอกสารอย่างละเอียดก่อนปล่อยเช่า'
                            : 'ไม่พบประวัติในบัญชีดำร้านและฐานข้อมูลเตือนภัยเบื้องต้น'}
                        </div>
                        <div className="text-xs text-slate-600">คำค้นหา: "{riskResult.query}"</div>
                      </div>
                    </div>

                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent(
                        `${riskResult.query} โกง เช่ารถ จำนำ แบล็คลิสต์`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 self-start"
                    >
                      ค้นหาข่าวบน Google เพิ่มเติม ↗
                    </a>
                  </div>

                  {riskResult.idCheck && (
                    <div
                      className={`mb-4 p-3 rounded-xl text-xs font-semibold ${
                        riskResult.idCheck.valid
                          ? 'bg-white text-emerald-800 border border-emerald-200'
                          : 'bg-rose-600 text-white'
                      }`}
                    >
                      {riskResult.idCheck.message}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {riskResult.categories.map((cat, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-700">{cat.label}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                            cat.status === 'danger'
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {cat.status === 'danger' ? 'พบความเสี่ยง' : 'ปกติ'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {riskResult.matchedBlacklist.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {riskResult.matchedBlacklist.map((m) => (
                        <div key={m.id} className="p-3.5 rounded-xl bg-white border border-rose-300 text-xs">
                          <div className="font-bold text-rose-900 text-sm">{m.name} (บัตร: {m.idCard || '-'} / โทร: {m.phone || '-'})</div>
                          <div className="text-rose-700 font-semibold mt-1">พฤติกรรม: {m.riskCategories?.join(', ')}</div>
                          <div className="text-slate-600 mt-1">{m.details}</div>
                          <div className="text-slate-400 mt-1">แหล่งข้อมูล: {m.source} ({m.reportedDate})</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Store Blacklist Directory */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3">ฐานข้อมูลบุคคลเฝ้าระวัง / Blacklist ({blacklist.length} รายชื่อ)</h3>
              <div className="space-y-3">
                {blacklist.map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">{item.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-slate-200 text-slate-700">บัตร: {item.idCard || '-'}</span>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-slate-200 text-slate-700">โทร: {item.phone || '-'}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.riskCategories?.map((rc, idx) => (
                          <span key={idx} className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[11px] font-bold">
                            {rc}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-slate-600 mt-2">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 5: FLEET & MAINTENANCE                                         */}
        {/* ================================================================== */}
        {activeTab === 'fleet' && (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4">ข้อมูลรถเช่าทั้ง 6 คัน & การซ่อมบำรุง</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cars.map((car) => (
                <div key={car.id} className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/40 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-bold text-slate-900">{car.name}</div>
                      <div className="text-xs text-slate-500">{car.plate} • {car.category}</div>
                    </div>
                    <select
                      value={car.status}
                      onChange={(e) => {
                        const st = e.target.value;
                        setCars((prev) => prev.map((c) => (c.id === car.id ? { ...c, status: st } : c)));
                        showToast(`เปลี่ยนสถานะรถ ${car.plate} แล้ว`);
                      }}
                      className="px-2.5 py-1 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                    >
                      <option value="available">ว่างพร้อมเช่า</option>
                      <option value="rented">กำลังปล่อยเช่า</option>
                      <option value="maintenance">ส่งซ่อม/เช็คระยะ</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs bg-white p-3 rounded-xl border border-slate-100">
                    <div>
                      <div className="text-slate-400">ค่าเช่า/วัน</div>
                      <div className="font-bold text-slate-800">฿{car.dailyRate.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">เงินมัดจำ</div>
                      <div className="font-bold text-slate-800">฿{car.deposit.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">เลขไมล์ล่าสุด</div>
                      <div className="font-semibold text-slate-700">{car.mileage.toLocaleString()} กม.</div>
                    </div>
                    <div>
                      <div className="text-slate-400">เช็คระยะถัดไป</div>
                      <div className="font-semibold text-amber-700">{car.nextService}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 6: FINANCE & TAX                                               */}
        {/* ================================================================== */}
        {activeTab === 'finance' && canAccessFinance && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80">
                <div className="text-xs text-slate-500">รายรับรวม</div>
                <div className="text-2xl font-extrabold text-emerald-600 mt-1">฿{stats.monthlyIncome.toLocaleString()}</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80">
                <div className="text-xs text-slate-500">รายจ่ายรวม</div>
                <div className="text-2xl font-extrabold text-rose-600 mt-1">฿{stats.monthlyExpense.toLocaleString()}</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80">
                <div className="text-xs text-slate-500">กำไรสุทธิ</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">฿{stats.netProfit.toLocaleString()}</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-slate-900">{t.financeTitle}</h2>
                <button
                  type="button"
                  onClick={() => setTxModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-emerald-950 text-white text-xs font-semibold"
                >
                  + บันทึกรายรับ/รายจ่าย
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs text-slate-500">
                      <th className="py-3 px-3">วันที่</th>
                      <th className="py-3 px-3">ประเภท</th>
                      <th className="py-3 px-3">หมวดหมู่</th>
                      <th className="py-3 px-3">รายละเอียด</th>
                      <th className="py-3 px-3 text-right">จำนวนเงิน</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {transactions.map((tx) => (
                      <tr key={tx.id}>
                        <td className="py-3 px-3 text-slate-600">{tx.date}</td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${tx.type === 'income' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                            {tx.type === 'income' ? 'รายรับ' : 'รายจ่าย'}
                          </span>
                        </td>
                        <td className="py-3 px-3 font-medium">{tx.category}</td>
                        <td className="py-3 px-3 text-slate-700">{tx.description}</td>
                        <td className={`py-3 px-3 text-right font-bold ${tx.type === 'income' ? 'text-emerald-700' : 'text-rose-600'}`}>
                          {tx.type === 'income' ? '+' : '-'}฿{Number(tx.amount).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 7: USER MANAGEMENT (Owner Only)                                */}
        {/* ================================================================== */}
        {activeTab === 'users' && isOwnerUser && (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">{t.usersTitle}</h2>
                <p className="text-xs text-slate-500">สร้างบัญชีให้พนักงานและกำหนดสิทธิ์การเข้าถึงหน้าการเงิน</p>
              </div>
              <button
                type="button"
                onClick={() => setUserModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-emerald-950 text-white text-xs font-semibold self-start"
              >
                {t.addUserBtn}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {users.map((u) => (
                <div key={u.id} className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">{u.fullName}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${u.role === 'owner' ? 'bg-amber-100 text-amber-900' : 'bg-sky-100 text-sky-900'}`}>
                        {u.role === 'owner' ? 'เจ้าของร้าน' : 'แอดมินร้าน'}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Username: <span className="font-semibold text-slate-700">{u.username}</span> • รหัสผ่าน: <span className="font-semibold text-slate-700">{u.password}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      สิทธิ์ดูรายรับ-รายจ่าย: {u.role === 'owner' || u.canViewFinance ? 'อนุญาต' : 'ซ่อนเมนูการเงิน'}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard?.writeText(
                          `เข้าใช้งานระบบ BF CARRENT\nUsername: ${u.username}\nPassword: ${u.password}`
                        );
                        showToast('คัดลอกรหัสเข้าใช้งานสำหรับส่ง LINE แล้ว!');
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-emerald-50"
                    >
                      คัดลอกรหัส
                    </button>
                    {u.id !== 'u1' && (
                      <button
                        type="button"
                        onClick={() => {
                          setUsers((prev) => prev.filter((x) => x.id !== u.id));
                          showToast('ลบผู้ใช้งานแล้ว');
                        }}
                        className="p-2 rounded-xl text-rose-600 hover:bg-rose-50"
                      >
                        <Icon name="trash" className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ==================================================================== */}
      {/* MOBILE BOTTOM NAVIGATION (รองรับมือถือไม่ล้นจอ)                        */}
      {/* ==================================================================== */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 flex items-center justify-around">
        {navItems.slice(0, 4).map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => { setActiveTab(item.id); setMobileMoreOpen(false); }}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl text-[11px] font-semibold ${
              activeTab === item.id ? 'text-emerald-800' : 'text-slate-500'
            }`}
          >
            <Icon name={item.icon} className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
        <button
          type="button"
          onClick={() => setMobileMoreOpen((o) => !o)}
          className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl text-[11px] font-semibold text-slate-500"
        >
          <Icon name="more" className="w-5 h-5" />
          <span>{t.navMore}</span>
        </button>
      </nav>

      {mobileMoreOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/40 flex items-end" onClick={() => setMobileMoreOpen(false)}>
          <div className="w-full bg-white rounded-t-3xl p-5 space-y-2" onClick={(e) => e.stopPropagation()}>
            <div className="text-xs font-bold text-slate-400 mb-2">{t.navMore}</div>
            {navItems.slice(4).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => { setActiveTab(item.id); setMobileMoreOpen(false); }}
                className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-100 text-sm font-semibold text-slate-800"
              >
                <Icon name={item.icon} className="w-5 h-5 text-emerald-700" />
                <span>{item.label}</span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => { setDbModalOpen(true); setMobileMoreOpen(false); }}
              className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-100 text-sm font-semibold text-slate-800"
            >
              <Icon name="db" className="w-5 h-5 text-emerald-700" />
              <span>Supabase Cloud Setup</span>
            </button>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 1: NEW BOOKING + LIVE RENTER RISK SCREENING                    */}
      {/* ==================================================================== */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl my-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">สร้างรายการจองรถใหม่</h3>
              <button type="button" onClick={() => setBookingModalOpen(false)} className="text-slate-400 hover:text-slate-700 text-xl font-bold">×</button>
            </div>
            <form onSubmit={handleCreateBooking} className="space-y-3.5 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">ชื่อ-นามสกุลผู้เช่า *</label>
                <input
                  type="text"
                  required
                  value={bookingForm.customerName}
                  onChange={(e) => setBookingForm({ ...bookingForm, customerName: e.target.value })}
                  placeholder="เช่น คุณสมศักดิ์ รักดี"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-emerald-600"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">เบอร์โทรศัพท์ *</label>
                  <input
                    type="text"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="08x-xxx-xxxx"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">เลขบัตรประชาชน 13 หลัก</label>
                  <input
                    type="text"
                    maxLength={13}
                    value={bookingForm.idCard}
                    onChange={(e) => setBookingForm({ ...bookingForm, idCard: e.target.value.replace(/\D/g, '') })}
                    placeholder="1100800xxxxxx"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              {/* Live Renter Risk Alert inside Booking Form */}
              {liveBookingRisk && (liveBookingRisk.idCheck?.valid === false || liveBookingRisk.risk?.isHighRisk) && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 space-y-1">
                  <div className="font-bold">คำเตือนระบบคัดกรองความเสี่ยง:</div>
                  {liveBookingRisk.idCheck?.valid === false && <div>• {liveBookingRisk.idCheck.message}</div>}
                  {liveBookingRisk.risk?.matchedBlacklist?.map((m) => (
                    <div key={m.id}>• พบใน Blacklist: {m.name} ({m.riskCategories?.join(', ')})</div>
                  ))}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">เลือกรถยนต์ *</label>
                <select
                  value={bookingForm.carId}
                  onChange={(e) => setBookingForm({ ...bookingForm, carId: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 outline-none bg-white"
                >
                  {cars.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.plate}) - ฿{c.dailyRate}/วัน
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">วันรับรถ *</label>
                  <input
                    type="date"
                    required
                    value={bookingForm.startDate}
                    onChange={(e) => setBookingForm({ ...bookingForm, startDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">วันคืนรถ *</label>
                  <input
                    type="date"
                    required
                    value={bookingForm.endDate}
                    onChange={(e) => setBookingForm({ ...bookingForm, endDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">สถานที่รับ-ส่งรถ</label>
                <input
                  type="text"
                  value={bookingForm.pickupLocation}
                  onChange={(e) => setBookingForm({ ...bookingForm, pickupLocation: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setBookingModalOpen(false)} className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
                  ยกเลิก
                </button>
                <button type="submit" className="px-5 py-2.5 rounded-xl bg-emerald-950 text-white text-xs font-semibold">
                  บันทึกการจอง
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 2: ADD BLACKLIST                                               */}
      {/* ==================================================================== */}
      {blacklistModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-4">เพิ่มรายชื่อเฝ้าระวัง / Blacklist</h3>
            <form onSubmit={handleAddBlacklist} className="space-y-3 text-sm">
              <input
                type="text"
                required
                placeholder="ชื่อ-นามสกุล *"
                value={newBlacklistForm.name}
                onChange={(e) => setNewBlacklistForm({ ...newBlacklistForm, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="เลขบัตร ปชช."
                  value={newBlacklistForm.idCard}
                  onChange={(e) => setNewBlacklistForm({ ...newBlacklistForm, idCard: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"
                />
                <input
                  type="text"
                  placeholder="เบอร์โทร"
                  value={newBlacklistForm.phone}
                  onChange={(e) => setNewBlacklistForm({ ...newBlacklistForm, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"
                />
              </div>
              <textarea
                rows={3}
                required
                placeholder="รายละเอียดพฤติกรรมความเสี่ยง..."
                value={newBlacklistForm.details}
                onChange={(e) => setNewBlacklistForm({ ...newBlacklistForm, details: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setBlacklistModalOpen(false)} className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">ยกเลิก</button>
                <button type="submit" className="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-semibold">บันทึก Blacklist</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 3: ADD USER                                                    */}
      {/* ==================================================================== */}
      {userModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-4">เพิ่มผู้ใช้งานใหม่</h3>
            <form onSubmit={handleAddUser} className="space-y-3 text-sm">
              <input
                type="text"
                required
                placeholder="ชื่อ-นามสกุล หรือชื่อเรียกพนักงาน *"
                value={newUserForm.fullName}
                onChange={(e) => setNewUserForm({ ...newUserForm, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Username *"
                  value={newUserForm.username}
                  onChange={(e) => setNewUserForm({ ...newUserForm, username: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"
                />
                <input
                  type="text"
                  required
                  placeholder="รหัสผ่าน *"
                  value={newUserForm.password}
                  onChange={(e) => setNewUserForm({ ...newUserForm, password: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"
                />
              </div>
              <select
                value={newUserForm.role}
                onChange={(e) => setNewUserForm({ ...newUserForm, role: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white"
              >
                <option value="staff">แอดมินร้าน (Staff)</option>
                <option value="owner">เจ้าของร้าน (Owner)</option>
              </select>
              {newUserForm.role === 'staff' && (
                <label className="flex items-center gap-2 text-xs text-slate-700 pt-1">
                  <input
                    type="checkbox"
                    checked={newUserForm.canViewFinance}
                    onChange={(e) => setNewUserForm({ ...newUserForm, canViewFinance: e.target.checked })}
                  />
                  <span>อนุญาตให้เข้าดูหน้า รายรับ-รายจ่าย</span>
                </label>
              )}
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setUserModalOpen(false)} className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">ยกเลิก</button>
                <button type="submit" className="px-4 py-2 rounded-xl bg-emerald-950 text-white text-xs font-semibold">สร้างผู้ใช้งาน</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 4: ADD TRANSACTION                                             */}
      {/* ==================================================================== */}
      {txModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-4">บันทึกรายรับ / รายจ่าย</h3>
            <form onSubmit={handleAddTx} className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={newTxForm.type}
                  onChange={(e) => setNewTxForm({ ...newTxForm, type: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white"
                >
                  <option value="income">รายรับ (+)</option>
                  <option value="expense">รายจ่าย (-)</option>
                </select>
                <input
                  type="date"
                  value={newTxForm.date}
                  onChange={(e) => setNewTxForm({ ...newTxForm, date: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-slate-200"
                />
              </div>
              <input
                type="text"
                required
                placeholder="หมวดหมู่ (เช่น ค่าเช่ารถ, ซ่อมบำรุง, ค่าน้ำมัน)"
                value={newTxForm.category}
                onChange={(e) => setNewTxForm({ ...newTxForm, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"
              />
              <input
                type="text"
                required
                placeholder="รายละเอียดรายการ *"
                value={newTxForm.description}
                onChange={(e) => setNewTxForm({ ...newTxForm, description: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"
              />
              <input
                type="number"
                required
                placeholder="จำนวนเงิน (บาท) *"
                value={newTxForm.amount}
                onChange={(e) => setNewTxForm({ ...newTxForm, amount: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setTxModalOpen(false)} className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">ยกเลิก</button>
                <button type="submit" className="px-4 py-2 rounded-xl bg-emerald-950 text-white text-xs font-semibold">บันทึก</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 5: SUPABASE DATABASE SETUP                                     */}
      {/* ==================================================================== */}
      {dbModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-slate-900">เชื่อมต่อฐานข้อมูล Supabase</h3>
              <button type="button" onClick={() => setDbModalOpen(false)} className="text-slate-400 hover:text-slate-700 text-xl font-bold">×</button>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              สถานะปัจจุบัน:{' '}
              <span className={`font-bold ${supabase ? 'text-emerald-700' : 'text-amber-600'}`}>
                {supabase ? 'เชื่อมต่อ Supabase Cloud สำเร็จแล้ว' : 'โหมดใช้งานในเครื่อง (รอใส่ VITE_SUPABASE_URL และ VITE_SUPABASE_ANON_KEY)'}
              </span>
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(SUPABASE_SQL_SCRIPT);
                  showToast('คัดลอกคำสั่ง SQL สร้างตารางทั้งหมดแล้ว!');
                }}
                className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <Icon name="copy" className="w-3.5 h-3.5" />
                <span>คัดลอก SQL สร้าง 5 ตาราง</span>
              </button>
              <button
                type="button"
                onClick={handlePushInitialToSupabase}
                className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold"
              >
                ส่งข้อมูลเริ่มต้นขึ้น Supabase
              </button>
            </div>
            <pre className="flex-1 overflow-auto p-3.5 rounded-2xl bg-slate-950 text-emerald-300 text-xs font-mono">
              {SUPABASE_SQL_SCRIPT}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}