import { useState, useEffect } from 'react';
import {
  Calendar,
  BarChart3,
  Newspaper,
  BookOpen,
  Plus,
  House,
  Home,
  ListTodo,
  Bell,
  User,
  Wifi,
  Signal,
  BatteryFull,
  Clock3,
  ChevronRight,
  History,
  MapPin,
  X,
  LogIn,
  LogOut,
  Sun,
  Moon,
  Target,
  ChevronDown,
  FileText,
  ClipboardCheck,
  ListChecks,
  GraduationCap,
  Globe,
  ChevronLeft,
  Play,
  Pause,
  Square,
  Eye,
  Pencil,
  Hourglass,
  CheckCircle2,
  Download,
  Share2,
  Trash2,
  Printer,
  Layers,
  Star,
  Shield,
  Zap,
  TrendingDown,
  Activity,
  Upload,
  Search,
  Building2,
  UserPlus,
  Mail,
  StickyNote,
} from 'lucide-react';
import logo from './assets/logo.png';
import colorLogo from './assets/color.png';
import profile from './assets/profile.jpeg';
import cuLogo from './assets/cu.png';
import windowsLogo from './assets/windows.png';
import backgroundImg from './assets/background.png';
import { usePwaInstall } from './usePwaInstall';

const ACCENT = '#1b1e42';

const SERVICE_PILLARS = [
  {
    key: 'testing',
    label: 'Testing',
    services: [
      {
        key: 'environmental-monitoring',
        label: 'Environmental Monitoring',
        programs: ['Water testing', 'Environmental monitoring'],
      },
      {
        key: 'chemical-lab',
        label: 'Chemical Lab',
        programs: ['Food analysis', 'Fisheries analysis'],
      },
      {
        key: 'microbiology-lab',
        label: 'Microbiology lab',
        programs: ['Pathogen testing', 'Hygiene swabs'],
      },
      {
        key: 'pesticide-lab',
        label: 'Pesticide Lab',
        programs: ['Residue analysis', 'Multi-residue screening'],
      },
    ],
  },
  {
    key: 'inspection',
    label: 'Inspection',
    services: [],
  },
  {
    key: 'certification',
    label: 'Certification',
    services: [
      {
        key: 'agriculture',
        label: 'Agriculture',
        programs: [
          'GLOBALG.A.P.',
          'RA Farm',
          'RA Supply Chain',
          'Regenagri Farm',
          'Singapore GAP',
        ],
      },
      {
        key: 'textile',
        label: 'Textile',
        programs: ['OCS', 'GOTS', 'GRS', 'RCS'],
      },
    ],
  },
  {
    key: 'academy',
    label: 'Academy',
    services: [
      {
        key: 'implementer-trainings',
        label: 'Implementer Trainings',
        programs: ['Basic Implementer', 'Advanced Implementer'],
      },
      {
        key: 'general-awareness',
        label: 'General Awareness Training (Other)',
        programs: ['Awareness Session', 'Custom Awareness'],
      },
      {
        key: 'lead-auditor',
        label: 'Lead Auditor Trainings',
        programs: ['Lead Auditor Core', 'Lead Auditor Refresh'],
      },
      {
        key: 'internal-auditor',
        label: 'Internal Auditor Trainings',
        programs: ['Internal Auditor Core', 'Internal Auditor Refresh'],
      },
      {
        key: 'inhouse-trainings',
        label: 'Inhouse Trainings',
        programs: ['Onsite Workshop', 'Team Coaching'],
      },
      {
        key: 'transition-trainings',
        label: 'Transition Trainings',
        programs: ['Standard Transition', 'Version Upgrade'],
      },
    ],
  },
];

const NEWS_SLIDES = [
  {
    image: backgroundImg,
    title: 'Office culture refresh this quarter',
    tag: 'Culture',
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80',
    title: 'New collaboration guidelines',
    tag: 'Culture',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
    title: 'Product roadmap update',
    tag: 'Product',
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
    title: 'Q3 all-hands highlights',
    tag: 'Company',
  },
];

const FEATURES = [
  {
    key: 'journal',
    label: 'Day Journal',
    sub: 'Capture today',
    icon: BookOpen,
  },
  {
    key: 'calendar',
    label: 'Calendar',
    icon: Calendar,
    events: [
      { time: '11:30', title: 'SOE Progress Meeting', shortTitle: 'SOE Progress' },
      { time: '15:00', title: 'Design review' },
    ],
  },
  {
    key: 'performance',
    label: 'Performance',
    sub: '25.23% · Low',
    icon: BarChart3,
  },
  {
    key: 'wfh',
    label: 'WFH & Leave',
    sub: 'Request time off',
    icon: House,
  },
  {
    key: 'news',
    label: 'News',
    sub: '4 new updates',
    icon: Newspaper,
    wide: true,
    slideshow: true,
  },
];

const PERFORMANCE_LEVELS = [
  { key: 'exceptional', label: 'Exceptional', color: '#1b1e42', gradient: ['#4a4f8a', '#1b1e42', '#0d0f24'] },
  { key: 'expected', label: 'Expected', color: '#2eb87a', gradient: ['#69db9b', '#2eb87a', '#1a7a52'] },
  { key: 'medium', label: 'Medium', color: '#e6b422', gradient: ['#ffd666', '#e6b422', '#a87b0f'] },
  { key: 'low', label: 'Low', color: '#e54848', gradient: ['#ff8a8a', '#e54848', '#a61e1e'] },
];

const PERFORMANCE_DATA = {
  employee: 'Nisal Amarasekara',
  initials: 'NA',
  period: '2028: August - August',
  department: 'IT',
  finalScore: 25.23,
  level: 'low',
  delta: -74.77,
  metrics: [
    { key: 'timeliness', label: 'Timeliness', value: 0, level: 'low', icon: Clock3 },
    { key: 'workload', label: 'Workload', value: 3.3, level: 'low', icon: Layers },
    { key: 'quality', label: 'Quality', value: 0, level: 'low', icon: Star },
    { key: 'integrity', label: 'Integrity', value: 100, level: 'expected', icon: Shield },
  ],
  contributions: [
    {
      key: 'department',
      title: 'Department Contribution',
      color: '#e54848',
      gradient: ['#ff8a8a', '#e54848', '#a61e1e'],
      items: [{ label: 'IT', value: 100 }],
    },
    {
      key: 'task-group',
      title: 'Task Group Contribution',
      color: '#3b5bdb',
      gradient: ['#748ffc', '#3b5bdb', '#1c3d99'],
      items: [{ label: 'IT - SOE Development', value: 100 }],
    },
    {
      key: 'project',
      title: 'Project Contribution',
      color: '#22b8cf',
      gradient: ['#66d9e8', '#22b8cf', '#0b7285'],
      items: [{ label: 'CU Sri Lanka - SOE V2', value: 100 }],
    },
  ],
  trends: [
    { month: 'Jan', value: 0, level: 'low' },
    { month: 'Feb', value: 0, level: 'low' },
    { month: 'Mar', value: 0, level: 'low' },
    { month: 'Apr', value: 0, level: 'low' },
    { month: 'May', value: 0, level: 'low' },
    { month: 'Jun', value: 0, level: 'low' },
    { month: 'Jul', value: 101.49, level: 'exceptional' },
    { month: 'Aug', value: 25.23, level: 'low' },
    { month: 'Sep', value: 0, level: 'low' },
    { month: 'Oct', value: 0, level: 'low' },
    { month: 'Nov', value: 0, level: 'low' },
    { month: 'Dec', value: 0, level: 'low' },
  ],
};

function getPerformanceLevelMeta(level) {
  return PERFORMANCE_LEVELS.find((item) => item.key === level) || PERFORMANCE_LEVELS[3];
}

function PerformanceRing({
  value,
  size = 88,
  stroke = 8,
  color = '#e54848',
  gradient,
  track,
  id = 'ring',
}) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(value, 100));
  const progress = (clamped / 100) * circumference;
  const [light, mid, dark] = gradient?.length === 3
    ? gradient
    : [color, color, color];
  const uid = `perf-ring-${id}`;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="perf-ring" aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={light} />
          <stop offset="50%" stopColor={mid} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
      </defs>
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        strokeWidth={stroke}
        className="perf-ring__track"
        style={track ? { stroke: track } : undefined}
      />
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke={`url(#${uid}-grad)`}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${progress} ${circumference - progress}`}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
    </svg>
  );
}

function PerformanceDonut({ color, gradient, value = 100, size = 112, id = 'donut' }) {
  const stroke = 14;
  const cx = size / 2;
  const cy = size / 2;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(value, 100));
  const progress = (clamped / 100) * circumference;
  const [light, mid, dark] = gradient?.length === 3
    ? gradient
    : [color, color, color];
  const uid = `perf-donut-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="perf-donut"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${uid}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={light} />
          <stop offset="50%" stopColor={mid} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
      </defs>
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        strokeWidth={stroke}
        className="perf-donut__track"
      />
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke={`url(#${uid}-grad)`}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${progress} ${circumference - progress}`}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
    </svg>
  );
}

function PerformanceTrendChart({ trends }) {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const byMonth = Object.fromEntries(
    (trends || []).map((item) => [item.month, item])
  );
  const series = MONTHS.map((month) => {
    const item = byMonth[month];
    const value = item?.value == null ? 0 : Number(item.value);
    return {
      month,
      value,
      level: item?.level || 'low',
    };
  });

  // Compact viewBox sized for phone widths so all 12 months stay on-screen.
  const width = 340;
  const height = 200;
  const pad = { top: 20, right: 10, bottom: 26, left: 24 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const yMax = 200;
  const yTicks = [0, 40, 80, 120, 160, 200];
  const points = series.map((item, index) => {
    const x = pad.left + (index / (series.length - 1)) * plotW;
    const y = pad.top + plotH - (item.value / yMax) * plotH;
    return { ...item, x, y, index };
  });

  const path = points.map((point, index) => (
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  )).join(' ');

  const targetY = pad.top + plotH - (100 / yMax) * plotH;

  return (
    <div className="perf-trend__scroll">
      <svg
        className="perf-trend__svg"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Performance trends chart for January through December"
      >
        {yTicks.map((tick) => {
          const y = pad.top + plotH - (tick / yMax) * plotH;
          return (
            <g key={tick}>
              <line
                x1={pad.left}
                y1={y}
                x2={width - pad.right}
                y2={y}
                className="perf-trend__grid"
              />
              <text
                x={pad.left - 4}
                y={y + 2.5}
                textAnchor="end"
                className="perf-trend__axis"
                fontSize="7"
              >
                {tick}
              </text>
            </g>
          );
        })}

        <line
          x1={pad.left}
          y1={targetY}
          x2={width - pad.right}
          y2={targetY}
          className="perf-trend__target"
        />
        <text
          x={width - pad.right}
          y={targetY - 4}
          textAnchor="end"
          className="perf-trend__target-text"
          fontSize="6.5"
        >
          TARGET 100%
        </text>

        <path d={path} className="perf-trend__line" fill="none" />

        {points.map((point) => {
          const level = getPerformanceLevelMeta(point.level);
          return (
            <g key={point.month}>
              <circle cx={point.x} cy={point.y} r={2.6} fill={level.color} />
              {point.value > 0 && (
                <text
                  x={point.x}
                  y={point.y - 6}
                  textAnchor="middle"
                  className="perf-trend__value"
                  fontSize="6.5"
                >
                  {point.value}%
                </text>
              )}
            </g>
          );
        })}

        {points.map((point) => (
          <text
            key={`${point.month}-label`}
            x={point.x}
            y={height - 8}
            textAnchor="middle"
            className="perf-trend__axis perf-trend__month"
            fontSize="6.5"
          >
            {point.month}
          </text>
        ))}
      </svg>
    </div>
  );
}

const NAV_ITEMS = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'journal', label: 'Journal', icon: BookOpen },
  { key: 'leads', label: 'Leads', icon: User },
  { key: 'opportunity', label: 'Opportunity', icon: Target },
  { key: 'notifications', label: 'Alerts', icon: Bell },
];

const NOTIFICATIONS_SEED = [
  {
    id: 'n1',
    title: 'Task assigned',
    body: 'Application Review was assigned to you by Sales Ops.',
    time: '10 min ago',
    unread: true,
  },
  {
    id: 'n2',
    title: 'AR approval requested',
    body: 'CU Sri Lanka · Approval requested for certification task.',
    time: '1 hr ago',
    unread: true,
  },
  {
    id: 'n3',
    title: 'Follow-up reminder',
    body: 'Last follow-up date is due today for Textile inquiry.',
    time: 'Yesterday',
    unread: false,
  },
];

const LEAVE_BALANCES = [
  { key: 'annual', label: 'Annual Leave', used: 0, total: 14 },
  { key: 'casual', label: 'Casual Leave', used: 5, total: 7 },
  { key: 'sick', label: 'Sick Leave', used: 0, total: 21 },
  { key: 'paid', label: 'Paid Leave', used: 0, total: 10 },
];

const LEAVE_RECORDS = [
  {
    id: 'lv1',
    appliedDate: '2026-07-07',
    mode: 'Full Day',
    type: 'Casual',
    status: 'pending',
    approvedBy: 'Thilina Gunathilake',
    reason: 'Personal appointment',
    from: '2026-07-10',
    to: '2026-07-10',
  },
  {
    id: 'lv2',
    appliedDate: '2026-06-09',
    mode: 'Full Day',
    type: 'Casual',
    status: 'approved',
    approvedBy: 'Thilina Gunathilake',
    reason: 'Family commitment',
    from: '2026-06-12',
    to: '2026-06-12',
  },
  {
    id: 'lv3',
    appliedDate: '2026-05-18',
    mode: 'Full Day',
    type: 'Casual',
    status: 'approved',
    approvedBy: 'Thilina Gunathilake',
    reason: 'Personal errand',
    from: '2026-05-20',
    to: '2026-05-20',
  },
  {
    id: 'lv5',
    appliedDate: '2026-03-11',
    mode: 'Full Day',
    type: 'Sick',
    status: 'rejected',
    approvedBy: 'Thilina Gunathilake',
    reason: 'Medical rest',
    from: '2026-03-12',
    to: '2026-03-13',
  },
];

const WFH_RECORDS = [
  {
    id: 'wfh1',
    appliedDate: '2026-07-28',
    mode: 'Full Day',
    type: 'WFH',
    status: 'approved',
    approvedBy: 'Thilina Gunathilake',
    reason: 'Home office setup day',
    from: '2026-07-30',
    to: '2026-07-30',
  },
  {
    id: 'wfh2',
    appliedDate: '2026-07-15',
    mode: 'Full Day',
    type: 'WFH',
    status: 'pending',
    approvedBy: 'Thilina Gunathilake',
    reason: 'Contractor visit at home',
    from: '2026-07-18',
    to: '2026-07-18',
  },
  {
    id: 'wfh3',
    appliedDate: '2026-06-20',
    mode: 'Full Day',
    type: 'WFH',
    status: 'approved',
    approvedBy: 'Thilina Gunathilake',
    reason: 'Deep work focus day',
    from: '2026-06-24',
    to: '2026-06-24',
  },
];

const JOURNAL_PAGE_SIZE = 10;

const TASK_TITLE_OPTIONS = [
  'Bug triage',
  'Client follow-up',
  'Course outline',
  'Documentation',
  'Email digest',
  'Meeting',
  'Priority sort',
  'Prompt Engineering',
  'Sample review',
  'Send COR',
  'Standup notes',
  'Timesheet check',
  'Training prep',
  'UI polish',
];

const JOURNAL_SEED = [
  {
    id: 'j1',
    client: 'CU Asia Region',
    salesRef: 'CU Asia Communication',
    title: 'Meeting',
    assignedBy: 'Dilan Perera',
    due: 'Jul 31, 2026',
    department: 'IT / Project Management',
    description: 'Weekly sync on SOE progress, blockers, and next sprint priorities for the mobile rollout.',
    workload: 1,
    note: '',
    status: 'done',
    accent: 'green',
    seconds: 3600,
    tab: 'day',
  },
  {
    id: 'j2',
    client: 'CU Asia Region',
    salesRef: 'CU Asia Communication',
    title: 'Documentation',
    assignedBy: 'Self',
    due: 'Jul 31, 2026',
    department: 'IT / Project Management',
    description: 'Document API contracts, screen flows, and acceptance criteria for Day Journal and attendance modules.',
    workload: 2,
    note: 'SOE Mobile Application UI/UX',
    status: 'pending',
    accent: 'orange',
    seconds: 2700,
    tab: 'day',
  },
  {
    id: 'j3',
    client: 'CU Asia Region',
    salesRef: 'CU Asia Communication',
    title: 'Prompt Engineering',
    assignedBy: 'Self',
    due: 'Jul 31, 2026',
    department: 'IT / Project Management',
    description: 'Refine AI prompts for form generation, journaling summaries, and task drafting workflows.',
    workload: 0.5,
    note: '',
    status: 'active',
    accent: 'green',
    seconds: 13492,
    tab: 'day',
  },
  {
    id: 'j6',
    client: 'PCU Colombo',
    salesRef: 'Ops Support',
    title: 'Client follow-up',
    assignedBy: 'Self',
    due: 'Jul 31, 2026',
    department: 'Sales / Operations',
    description: 'Call client regarding pending quotation and confirm site visit availability.',
    workload: 0.5,
    note: '',
    status: 'new',
    accent: 'green',
    seconds: 0,
    tab: 'day',
  },
  {
    id: 'j7',
    client: 'CU Asia Region',
    salesRef: 'Internal Tools',
    title: 'Bug triage',
    assignedBy: 'Dilan Perera',
    due: 'Jul 31, 2026',
    department: 'IT / Engineering',
    description: 'Review reported issues from QA and prioritize fixes for the next release.',
    workload: 1,
    note: '',
    status: 'pending',
    accent: 'orange',
    seconds: 1800,
    tab: 'day',
  },
  {
    id: 'j8',
    client: 'Control Union LK',
    salesRef: 'HR Sync',
    title: 'Standup notes',
    assignedBy: 'Self',
    due: 'Jul 31, 2026',
    department: 'IT / Project Management',
    description: 'Capture action items from morning standup and share with the team channel.',
    workload: 0.25,
    note: '',
    status: 'done',
    accent: 'green',
    seconds: 900,
    tab: 'day',
  },
  {
    id: 'j9',
    client: '3S REAL DECOR',
    salesRef: 'Textile Audit',
    title: 'Sample review',
    assignedBy: 'Self',
    due: 'Jul 31, 2026',
    department: 'Inspection / Lab',
    description: 'Review fabric sample photos and annotate findings for the inspection report.',
    workload: 1.5,
    note: '',
    status: 'pending',
    accent: 'orange',
    seconds: 2400,
    tab: 'day',
  },
  {
    id: 'j10',
    client: 'PCU Colombo',
    salesRef: 'Academy',
    title: 'Course outline',
    assignedBy: 'Self',
    due: 'Jul 31, 2026',
    department: 'Academy / Support',
    description: 'Draft module outline for next week’s certification academy session.',
    workload: 1,
    note: '',
    status: 'pending',
    accent: 'green',
    seconds: 1500,
    tab: 'day',
  },
  {
    id: 'j11',
    client: 'CU Asia Region',
    salesRef: 'SOE Mobile',
    title: 'UI polish',
    assignedBy: 'Self',
    due: 'Jul 31, 2026',
    department: 'IT / Design',
    description: 'Tighten spacing and interaction states across journal and attendance screens.',
    workload: 2,
    note: 'Focus on collapsed cards',
    status: 'pending',
    accent: 'green',
    seconds: 3900,
    tab: 'day',
  },
  {
    id: 'j12',
    client: 'Control Union LK',
    salesRef: 'Finance',
    title: 'Timesheet check',
    assignedBy: 'Dilan Perera',
    due: 'Jul 31, 2026',
    department: 'Finance / Ops',
    description: 'Validate logged hours against assigned workload before weekly close.',
    workload: 0.5,
    note: '',
    status: 'pending',
    accent: 'orange',
    seconds: 720,
    tab: 'day',
  },
  {
    id: 'j13',
    client: 'CU Asia Region',
    salesRef: 'CU Asia Communication',
    title: 'Email digest',
    assignedBy: 'Self',
    due: 'Jul 31, 2026',
    department: 'IT / Project Management',
    description: 'Send end-of-day summary covering completed tasks and blockers.',
    workload: 0.25,
    note: '',
    status: 'pending',
    accent: 'green',
    seconds: 300,
    tab: 'day',
  },
  {
    id: 'j14',
    client: 'PCU Colombo',
    salesRef: 'Lab Queue',
    title: 'Priority sort',
    assignedBy: 'Self',
    due: 'Jul 31, 2026',
    department: 'Testing / Lab',
    description: 'Reorder today’s lab queue based on SLA and client urgency.',
    workload: 0.75,
    note: '',
    status: 'pending',
    accent: 'orange',
    seconds: 480,
    tab: 'day',
  },
  {
    id: 'j4',
    client: '3S REAL DECOR',
    salesRef: 'Textile COR',
    title: 'Send COR',
    assignedBy: 'Nisal Amarasekara',
    assignee: 'Sanduni Fernando',
    due: 'Aug 1, 2026',
    department: 'Certification / Contracting',
    description: 'Prepare and send certificate of registration draft for client review.',
    workload: 1.5,
    note: 'Waiting on client logo',
    status: 'pending',
    accent: 'orange',
    seconds: 1800,
    tab: 'delegated',
  },
  {
    id: 'j5',
    client: 'Control Union LK',
    salesRef: 'Academy Support',
    title: 'Training prep',
    assignedBy: 'Nisal Amarasekara',
    assignee: 'Kasun Jayawardena',
    due: 'Aug 2, 2026',
    department: 'Academy / Support',
    description: 'Assemble slide deck and sample exercises for next academy session.',
    workload: 2,
    note: '',
    status: 'pending',
    accent: 'green',
    seconds: 420,
    tab: 'delegated',
  },
];

const LEADS_SEED = [
  {
    id: 'lead-1',
    accountName: '3S REAL DECOR',
    locatedCountry: 'Sri Lanka',
    createdBy: 'Nisal Amarasekara',
    manageOffice: 'Colombo Head Office',
    leadOwner: 'Thilina Gunathilake',
    services: ['Certification · GOTS', 'Inspection · Social compliance'],
    status: 'new',
    createdAt: 'Aug 1, 2026',
  },
  {
    id: 'lead-2',
    accountName: 'GreenLeaf Textiles',
    locatedCountry: 'India',
    createdBy: 'Dilan Perera',
    manageOffice: 'Regional Office',
    leadOwner: 'Nisal Amarasekara',
    services: ['Testing · Chemical Lab'],
    status: 'contacted',
    createdAt: 'Jul 28, 2026',
  },
  {
    id: 'lead-3',
    accountName: 'OceanFresh Fisheries',
    locatedCountry: 'Maldives',
    createdBy: 'Nisal Amarasekara',
    manageOffice: 'Client Site Visit',
    leadOwner: 'Nisal Amarasekara',
    services: ['Testing · Microbiology lab', 'Certification · MSC Chain of Custody'],
    status: 'qualified',
    createdAt: 'Jul 22, 2026',
  },
  {
    id: 'lead-4',
    accountName: 'PCU Apparel Group',
    locatedCountry: 'Bangladesh',
    createdBy: 'Thilina Gunathilake',
    manageOffice: 'Colombo Head Office',
    leadOwner: 'Dilan Perera',
    services: ['Academy · Textile basics'],
    status: 'new',
    createdAt: 'Jul 18, 2026',
  },
  {
    id: 'lead-5',
    accountName: 'Summit Foods Pvt Ltd',
    locatedCountry: 'Sri Lanka',
    createdBy: 'Nisal Amarasekara',
    manageOffice: 'Remote — Work From Home',
    leadOwner: 'Nisal Amarasekara',
    services: ['Testing · Food analysis', 'Inspection · Facility audit'],
    status: 'contacted',
    createdAt: 'Jul 12, 2026',
  },
];

const OPPORTUNITIES_SEED = [
  {
    id: 'opp-1',
    accountName: '3S REAL DECOR',
    leadSource: 'Referral',
    oppType: 'New Business',
    opportunityStatus: 'Proposal',
    probability: 60,
    createdBy: 'Nisal Amarasekara',
    opportunityOwner: 'Thilina Gunathilake',
    services: ['Certification · GOTS', 'Inspection · Social compliance'],
    createdAt: 'Aug 2, 2026',
  },
  {
    id: 'opp-2',
    accountName: 'GreenLeaf Textiles',
    leadSource: 'Website',
    oppType: 'Existing Business',
    opportunityStatus: 'Negotiation',
    probability: 75,
    createdBy: 'Dilan Perera',
    opportunityOwner: 'Nisal Amarasekara',
    services: ['Testing · Chemical Lab'],
    createdAt: 'Jul 30, 2026',
  },
  {
    id: 'opp-3',
    accountName: 'OceanFresh Fisheries',
    leadSource: 'Trade Show',
    oppType: 'New Business',
    opportunityStatus: 'Qualification',
    probability: 25,
    createdBy: 'Nisal Amarasekara',
    opportunityOwner: 'Nisal Amarasekara',
    services: ['Testing · Microbiology lab'],
    createdAt: 'Jul 25, 2026',
  },
  {
    id: 'opp-4',
    accountName: 'PCU Apparel Group',
    leadSource: 'Partner',
    oppType: 'Renewal',
    opportunityStatus: 'Closed Won',
    probability: 100,
    createdBy: 'Thilina Gunathilake',
    opportunityOwner: 'Dilan Perera',
    services: ['Academy · Textile basics', 'Certification · GOTS'],
    createdAt: 'Jul 20, 2026',
  },
];

function formatJournalHours(totalSeconds) {
  const hours = Math.max(0, Number(totalSeconds) || 0) / 3600;
  const rounded = Math.round(hours * 100) / 100;
  const text = Number.isInteger(rounded)
    ? String(rounded)
    : String(rounded).replace(/(\.\d*?[1-9])0+$/, '$1');
  return `${text} hr`;
}

function formatJournalHoursDraft(totalSeconds) {
  const hours = Math.max(0, Number(totalSeconds) || 0) / 3600;
  const rounded = Math.round(hours * 100) / 100;
  return Number.isInteger(rounded)
    ? String(rounded)
    : String(rounded).replace(/(\.\d*?[1-9])0+$/, '$1');
}

function formatJournalElapsed(totalSeconds) {
  const safe = Math.max(0, Math.floor(Number(totalSeconds) || 0));
  const h = Math.floor(safe / 3600);
  const m = Math.floor((safe % 3600) / 60);
  const s = safe % 60;
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':');
}

function parseJournalHours(value) {
  const cleaned = String(value || '')
    .trim()
    .toLowerCase()
    .replace(/\s*hrs?\.?$/, '')
    .trim();
  if (!cleaned) return null;
  const hours = Number(cleaned);
  if (!Number.isFinite(hours) || hours < 0) return null;
  return Math.round(hours * 3600);
}

function shiftDate(base, offsetDays) {
  const d = new Date(base);
  d.setDate(d.getDate() + offsetDays);
  return d;
}

function formatJournalDateLabel(date) {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    weekday: 'long',
  });
}

function toKeyDate(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function buildMonthCells(viewDate) {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const first = new Date(year, month, 1);
  const offset = (first.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();
  const cells = [];

  for (let i = offset - 1; i >= 0; i -= 1) {
    const day = prevMonthDays - i;
    const date = new Date(year, month - 1, day);
    cells.push({ key: toKeyDate(date), day, inMonth: false, weekend: date.getDay() === 0 || date.getDay() === 6 });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    cells.push({ key: toKeyDate(date), day, inMonth: true, weekend: date.getDay() === 0 || date.getDay() === 6 });
  }

  let nextDay = 1;
  while (cells.length % 7 !== 0) {
    const date = new Date(year, month + 1, nextDay);
    cells.push({ key: toKeyDate(date), day: nextDay, inMonth: false, weekend: date.getDay() === 0 || date.getDay() === 6 });
    nextDay += 1;
  }

  return cells;
}

const CALENDAR_WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const CALENDAR_EVENTS = [
  {
    id: 'ev-standup-canceled',
    date: '2026-08-27',
    time: '12:00 PM',
    title: 'Canceled: SOE Daily Stand-Up',
    status: 'canceled',
    canJoin: false,
    location: 'Teams · SOE Room',
    hasDocument: true,
    document: {
      title: 'SOE Daily Stand-Up — Notes',
      type: 'PDF',
      pages: 2,
      size: '248 KB',
      author: 'Dilan Perera',
      updated: 'Aug 26, 2026',
      summary: 'Meeting was canceled. Attached notes cover carry-over actions and agenda for the next stand-up.',
      sections: [
        {
          heading: 'Status',
          body: 'This stand-up was canceled due to a regional holiday overlap. All blockers should be posted in the SOE channel before 10:00 AM.',
        },
        {
          heading: 'Carry-over agenda',
          body: '1. Mobile Day Journal timer sync\n2. Calendar document preview flow\n3. Attendance history edge cases\n4. Lead form service selection QA',
        },
        {
          heading: 'Action items',
          body: '• Nisal — share UI screenshots for calendar cards\n• Dilan — confirm next stand-up slot\n• Team — update task statuses in SOE before EOD',
        },
      ],
    },
  },
  {
    id: 'ev-progress',
    date: '2026-08-01',
    time: '11:30 AM',
    title: 'SOE Progress Meeting',
    status: 'scheduled',
    canJoin: true,
    location: 'Meeting Room A',
    hasDocument: true,
    document: {
      title: 'SOE Progress Meeting — Agenda',
      type: 'PDF',
      pages: 3,
      size: '512 KB',
      author: 'Nisal Amarasekara',
      updated: 'Jul 31, 2026',
      summary: 'Weekly progress review for SOE mobile rollout, delivery milestones, and open risks.',
      sections: [
        {
          heading: 'Objectives',
          body: 'Align on sprint progress, unblock delivery items, and confirm demo readiness for stakeholder review.',
        },
        {
          heading: 'Discussion points',
          body: '1. Attendance & Day Journal polish\n2. Add New flows (Task / Lead / Opportunity)\n3. Calendar attachments experience\n4. Release checklist for pilot users',
        },
        {
          heading: 'Attachments',
          body: 'Includes the latest sprint board export, UI walkthrough notes, and risk register snapshot.',
        },
      ],
    },
  },
  {
    id: 'ev-design',
    date: '2026-08-03',
    time: '03:00 PM',
    title: 'Design review',
    status: 'scheduled',
    canJoin: true,
    location: 'Figma · Shared',
    hasDocument: true,
    document: {
      title: 'Design Review Pack',
      type: 'PDF',
      pages: 5,
      size: '1.2 MB',
      author: 'Design Team',
      updated: 'Aug 2, 2026',
      summary: 'Visual QA checklist and interaction specs for Calendar, Journal, and workspace cards.',
      sections: [
        {
          heading: 'Review focus',
          body: 'Validate spacing, sticky headers, document page transitions, and dark-mode contrast on key screens.',
        },
        {
          heading: 'Decisions needed',
          body: 'Confirm whether canceled meetings should still expose Join as disabled, and whether document open should use full-page or sheet presentation.',
        },
      ],
    },
  },
  {
    id: 'ev-client',
    date: '2026-08-03',
    time: '10:00 AM',
    title: 'Client sync — Textile COR',
    status: 'scheduled',
    canJoin: true,
    location: 'Zoom',
    hasDocument: true,
    document: {
      title: 'Textile COR Brief',
      type: 'DOCX',
      pages: 4,
      size: '340 KB',
      author: 'Sales Ops',
      updated: 'Aug 1, 2026',
      summary: 'Client background, certification scope, and talking points for today’s sync.',
      sections: [
        {
          heading: 'Client context',
          body: '3S REAL DECOR is awaiting COR draft confirmation. Logo asset is still pending from the client side.',
        },
        {
          heading: 'Talking points',
          body: '• Confirm document package contents\n• Align on submission timeline\n• Capture open questions for Certification',
        },
      ],
    },
  },
  {
    id: 'ev-training',
    date: '2026-08-12',
    time: '09:30 AM',
    title: 'Academy training prep',
    status: 'scheduled',
    canJoin: false,
    location: 'Colombo Head Office',
    hasDocument: true,
    document: {
      title: 'Academy Session Outline',
      type: 'PDF',
      pages: 6,
      size: '890 KB',
      author: 'Academy Support',
      updated: 'Aug 10, 2026',
      summary: 'Session flow, sample exercises, and facilitator checklist for the certification academy.',
      sections: [
        {
          heading: 'Session flow',
          body: 'Welcome → Standard overview → Hands-on exercise → Q&A → Feedback form.',
        },
        {
          heading: 'Materials',
          body: 'Slide deck, exercise worksheets, and attendance sheet are included in this pack.',
        },
      ],
    },
  },
];

function NewsSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % NEWS_SLIDES.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const slide = NEWS_SLIDES[index];

  return (
    <div className="news-slideshow">
      <div className="news-slideshow__track">
        {NEWS_SLIDES.map((item, i) => (
          <div
            key={item.title}
            className={`news-slideshow__slide ${i === index ? 'is-active' : ''}`}
          >
            <img src={item.image} alt={item.title} />
            <div className="news-slideshow__overlay">
              <span className="news-slideshow__tag">{item.tag}</span>
              <div className="news-slideshow__title">{item.title}</div>
            </div>
          </div>
        ))}
        <div className="news-slideshow__dots">
          {NEWS_SLIDES.map((item, i) => (
            <button
              key={item.title}
              type="button"
              className={`news-slideshow__dot ${i === index ? 'is-active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="news-slideshow__caption">
        <Newspaper className="w-3.5 h-3.5" style={{ color: ACCENT }} strokeWidth={2.2} />
        <span style={{ color: '#8B90A0' }}>{slide.tag} · {NEWS_SLIDES.length} updates</span>
      </div>
    </div>
  );
}

function StatusBar({ now, light = false }) {
  const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
  const color = light ? '#ffffff' : 'var(--ink)';
  return (
    <div className="status-bar-mock shrink-0 flex items-center justify-between px-7 pt-4 pb-1 relative z-10">
      <span className="font-semibold text-[13px]" style={{ color }}>{time}</span>
      <div className="flex items-center gap-1.5" style={{ color }}>
        <Signal className="w-3.5 h-3.5" strokeWidth={2.2} />
        <Wifi className="w-3.5 h-3.5" strokeWidth={2.2} />
        <BatteryFull className="w-4 h-4" strokeWidth={2.2} />
      </div>
    </div>
  );
}

function PhoneFrame({ children, backgroundImage, darkMode = false }) {
  return (
    <div className="phone-frame-outer">
      <div
        className={`phone-frame-inner relative w-full flex flex-col overflow-hidden ${backgroundImage ? '' : 'phone-shell'}`}
        data-theme={darkMode ? 'dark' : 'light'}
        style={{ fontFamily: 'var(--font)' }}
      >
        {backgroundImage && (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'left center',
                backgroundRepeat: 'no-repeat',
                filter: 'contrast(1.08) saturate(1.15)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'rgba(255, 255, 255, 0.08)' }}
            />
          </>
        )}
        <div className="relative z-[1] flex flex-col flex-1 min-h-0">{children}</div>
      </div>
    </div>
  );
}

function LoginScreen({ onLogin, now }) {
  const {
    canNativeInstall,
    needsIosInstallHelp,
    isStandalone,
    isInAppBrowser,
    isIosChrome,
    promptInstall,
  } = usePwaInstall();
  const [showInstallHelp, setShowInstallHelp] = useState(false);

  // Same Download App CTA on Android + iPhone (when not already installed)
  const showDownloadButton = !isStandalone;

  const handleDownloadApp = async () => {
    // Android Chrome: native install dialog
    if (canNativeInstall) {
      await promptInstall();
      return;
    }
    // iPhone / other: guided install (Apple has no download API)
    setShowInstallHelp(true);
  };

  return (
    <PhoneFrame backgroundImage={backgroundImg}>
      <StatusBar now={now} />
      <div className="relative flex-1 flex flex-col px-6 pb-10 pt-2">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {/* Hero logo */}
          <div className="fade-up mb-8">
            <div
              className="flex items-center justify-center"
              style={{
                width: 120,
                height: 120,
                borderRadius: 28,
                background: 'rgba(255,255,255,0.92)',
                boxShadow: '0 18px 40px rgba(27, 30, 66, 0.14), 0 2px 8px rgba(27, 30, 66, 0.06)',
                border: '1px solid rgba(255,255,255,0.95)',
                padding: 14,
              }}
            >
              <div
                className="flex items-center justify-center overflow-hidden w-full h-full"
                style={{
                  borderRadius: 18,
                  background: '#000',
                  boxShadow: '0 8px 20px rgba(27,30,66,0.28)',
                }}
              >
                <img
                  src={logo}
                  alt="SOE"
                  style={{
                    width: '88%',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Welcome — Material typography scale */}
          <h1
            className="fade-up fade-up-delay-1 mat-headline"
            style={{ color: ACCENT, textShadow: '0 1px 12px rgba(255,255,255,0.85)' }}
          >
            Welcome to SOE
          </h1>
          <p
            className="fade-up fade-up-delay-2 mat-body mt-3 max-w-[290px]"
            style={{ color: '#3f4558', fontStyle: 'italic', textShadow: '0 1px 10px rgba(255,255,255,0.8)' }}
          >
            Sales • Operations • Employees
          </p>
        </div>

        {/* Login CTA + branding pinned to bottom */}
        <div className="fade-up fade-up-delay-3 w-full shrink-0">
          <button
            onClick={onLogin}
            className="pressable login-glass-btn w-full flex items-center justify-center gap-3"
          >
            <span className="login-glass-btn__shine" aria-hidden="true" />
            <img
              src={windowsLogo}
              alt=""
              aria-hidden="true"
              className="login-glass-btn__icon"
            />
            <span className="login-glass-btn__label">Log in as a PCU Member</span>
          </button>

          {showDownloadButton && (
            <button
              type="button"
              onClick={handleDownloadApp}
              className="pressable login-install-btn mt-3 w-full flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" strokeWidth={2.2} />
              <span>Download App</span>
            </button>
          )}

          {showInstallHelp && (
            <div
              className="login-safari-help"
              role="dialog"
              aria-modal="true"
              aria-label="Download SOE App"
              onClick={() => setShowInstallHelp(false)}
            >
              <div
                className="login-safari-help__card"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="login-safari-help__icon-wrap">
                  <img src={logo} alt="" className="login-safari-help__logo" />
                </div>
                <p className="login-safari-help__title">Download SOE App</p>

                {needsIosInstallHelp ? (
                  <>
                    <p className="login-safari-help__note">
                      On iPhone, apps cannot be downloaded like on Android. Use the steps below to
                      install SOE on your Home Screen — it opens full screen like an app.
                    </p>
                    {(isInAppBrowser || isIosChrome) && (
                      <p className="login-safari-help__warn">
                        {isIosChrome
                          ? 'Open this page in Safari first (Chrome on iPhone cannot install PWAs).'
                          : 'If you opened this from WhatsApp, tap … and choose Open in Safari, then continue.'}
                      </p>
                    )}
                    <ol className="login-safari-help__steps">
                      <li>
                        Tap the <strong>Share</strong> button at the bottom of Safari (square with ↑)
                      </li>
                      <li>
                        Scroll down and tap <strong>Add to Home Screen</strong>
                      </li>
                      <li>
                        Tap <strong>Add</strong> — SOE appears on your Home Screen with the app icon
                      </li>
                    </ol>
                  </>
                ) : (
                  <>
                    <p className="login-safari-help__note">
                      Install SOE from your browser menu so it opens like an app.
                    </p>
                    <ol className="login-safari-help__steps">
                      <li>Open the browser menu (⋮)</li>
                      <li>
                        Choose <strong>Install app</strong> or <strong>Add to Home screen</strong>
                      </li>
                    </ol>
                  </>
                )}

                <button
                  type="button"
                  className="pressable login-safari-help__close"
                  onClick={() => setShowInstallHelp(false)}
                >
                  Got it
                </button>
              </div>
            </div>
          )}

          <div className="pt-6 flex flex-col items-center gap-2.5">
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#9AA1B5',
              }}
            >
              Powered by
            </span>
            <img
              src={cuLogo}
              alt="Control Union"
              style={{
                height: 26,
                width: 'auto',
                maxWidth: 210,
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

const JULY_LOCATIONS = [
  'Colombo Head Office',
  'Remote — Work From Home',
  'Client Site Visit',
  'Regional Office',
];

function pad2(n) {
  return String(n).padStart(2, '0');
}

function buildJulyAttendanceHistory(year = 2026) {
  const entries = [];
  for (let day = 1; day <= 31; day += 1) {
    const date = new Date(year, 6, day);
    if (date.getMonth() !== 6) break;
    const weekday = date.getDay();
    if (weekday === 0 || weekday === 6) continue; // skip weekends

    const iso = `${year}-07-${pad2(day)}`;
    const location = JULY_LOCATIONS[day % JULY_LOCATIONS.length];
    const inHour = 8;
    const inMin = 40 + (day % 20);
    const outHour = 17;
    const outMin = 20 + (day % 35);
    const durationHours = outHour - inHour;
    const durationMins = outMin - inMin;
    const totalMins = durationHours * 60 + durationMins;
    const durH = Math.floor(totalMins / 60);
    const durM = totalMins % 60;

    entries.push({
      id: `july-in-${iso}`,
      type: 'in',
      location,
      date: iso,
      time: `${pad2(inHour)}:${pad2(inMin)}`,
    });
    entries.push({
      id: `july-out-${iso}`,
      type: 'out',
      location,
      date: iso,
      time: `${pad2(outHour)}:${pad2(outMin)}`,
      duration: `${pad2(durH)}:${pad2(durM)}:00`,
    });
  }
  // newest first
  return entries.sort((a, b) => {
    if (a.date === b.date) {
      return a.time < b.time ? 1 : -1;
    }
    return a.date < b.date ? 1 : -1;
  });
}

function clusterHistoryByDate(history) {
  const groups = [];
  const map = new Map();

  history.forEach((entry) => {
    if (!map.has(entry.date)) {
      const group = {
        date: entry.date,
        location: entry.location,
        clockIn: null,
        clockOut: null,
      };
      map.set(entry.date, group);
      groups.push(group);
    }
    const group = map.get(entry.date);
    if (entry.type === 'in') {
      group.clockIn = entry;
      group.location = entry.location || group.location;
    } else {
      group.clockOut = entry;
      group.location = entry.location || group.location;
    }
  });

  return groups;
}

function HomeDashboard({ onSignOut, now }) {
  const [clockedIn, setClockedIn] = useState(false);
  const [onLeave, setOnLeave] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [activeTab, setActiveTab] = useState('home');
  const [showClockInModal, setShowClockInModal] = useState(false);
  const [showClockOutModal, setShowClockOutModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
  const [showLeads, setShowLeads] = useState(false);
  const [leadsList, setLeadsList] = useState(LEADS_SEED);
  const [leadSearch, setLeadSearch] = useState('');
  const [expandedLeadId, setExpandedLeadId] = useState(null);
  const [showOpportunities, setShowOpportunities] = useState(false);
  const [opportunitiesList, setOpportunitiesList] = useState(OPPORTUNITIES_SEED);
  const [opportunitySearch, setOpportunitySearch] = useState('');
  const [expandedOpportunityId, setExpandedOpportunityId] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationsList, setNotificationsList] = useState(NOTIFICATIONS_SEED);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showLeave, setShowLeave] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [profilePhotoOpen, setProfilePhotoOpen] = useState(false);
  const [perfTab, setPerfTab] = useState('overview');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestType, setRequestType] = useState('');
  const [expandedWfhRowId, setExpandedWfhRowId] = useState(null);
  const [expandedLeaveRowId, setExpandedLeaveRowId] = useState(null);
  const [leaveTab, setLeaveTab] = useState('leaves');
  const [expandedLeaveId, setExpandedLeaveId] = useState(null);
  const [leaveRecordsList, setLeaveRecordsList] = useState(LEAVE_RECORDS);
  const [leaveBalances, setLeaveBalances] = useState(LEAVE_BALANCES);
  const [leaveFormError, setLeaveFormError] = useState('');
  const [wfhRecords, setWfhRecords] = useState(WFH_RECORDS);
  const [wfhFormRows, setWfhFormRows] = useState([
    { id: 'wfh-row-1', date: '', type: 'Work From Home', mode: '' },
  ]);
  const [leaveForm, setLeaveForm] = useState({
    reason: '',
    actingArrangement: '',
  });
  const [leaveFormRows, setLeaveFormRows] = useState([
    { id: 'leave-row-1', date: '', type: 'Annual', mode: 'Full Day' },
  ]);
  const leaveReportsTo = 'Thilina Gunathilake';
  const leaveTypeOptions = ['Annual', 'Casual', 'Sick', 'Paid'];
  const leaveModeOptions = ['Full Day', 'Half Day'];
  const leaveTypeToBalanceKey = {
    Annual: 'annual',
    Casual: 'casual',
    Sick: 'sick',
    Paid: 'paid',
  };
  const wfhReportsTo = 'Thilina Gunathilake';
  const wfhModeOptions = ['Full Day', 'Half Day'];
  const [calendarMonth, setCalendarMonth] = useState(() => new Date(now.getFullYear(), now.getMonth(), 1));
  const [selectedCalDate, setSelectedCalDate] = useState(() => toKeyDate(now));
  const [activeCalendarDoc, setActiveCalendarDoc] = useState(null);
  const [journalTab, setJournalTab] = useState('day');
  const [journalDayOffset, setJournalDayOffset] = useState(0);
  const [journalPage, setJournalPage] = useState(1);
  const [journalTasks, setJournalTasks] = useState(JOURNAL_SEED);
  const [runningTaskId, setRunningTaskId] = useState('j3');
  const [journalTimeDrafts, setJournalTimeDrafts] = useState({});
  const [noteTaskId, setNoteTaskId] = useState(null);
  const [noteDraft, setNoteDraft] = useState('');
  const [addType, setAddType] = useState('task');
  const [taskWizardStep, setTaskWizardStep] = useState(1);
  const [assigneeQuery, setAssigneeQuery] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [addForm, setAddForm] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium',
    company: '',
    contact: '',
    email: '',
    phone: '',
    value: '',
    stage: 'Qualification',
    source: 'Referral',
    accountName: '',
    locatedCountry: '',
    createdBy: 'Nisal Amarasekara',
    manageOffice: '',
    leadOwner: '',
    leadSource: '',
    oppType: '',
    opportunityStatus: '',
    probability: '0',
    opportunityOwner: '',
    assignDate: '',
    inquiryType: 'INQUIRY',
    activity: 'Certification',
    category: 'Textile',
    client: '',
    salesRef: 'SOE V2',
    taskGroup: 'Contracting',
    assignTo: 'Nisal Amarasekara',
    department: 'IT',
    applicationReceivedDate: '',
    arCompletedDate: '',
    arApprovalRequestedDate: '',
    propertyRemarks: '',
    visitingCardFront: null,
    visitingCardBack: null,
    nextTasks: [],
  });

  const TASK_WIZARD_STEPS = [
    { id: 1, label: 'Task Details' },
    { id: 2, label: 'Property Details' },
    { id: 3, label: 'Next Task' },
  ];

  const makeEmptyNextTaskRow = () => ({
    id: `nt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    task: '',
    assignee: '',
  });
  const [workLocation, setWorkLocation] = useState('Colombo Head Office');
  const [clockDate, setClockDate] = useState('');
  const [clockTime, setClockTime] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [expandedServices, setExpandedServices] = useState([]);
  const [expandedPillars, setExpandedPillars] = useState([]);
  const [attendanceHistory, setAttendanceHistory] = useState(() => buildJulyAttendanceHistory());

  const historyGroups = clusterHistoryByDate(attendanceHistory);

  const locations = [
    'Colombo Head Office',
    'Remote — Work From Home',
    'Client Site Visit',
    'Regional Office',
  ];

  const toDateInput = (d) => {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const toTimeInput = (d) => {
    const hh = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    return `${hh}:${min}`;
  };

  const formatHistoryDate = (isoDate) => {
    const d = new Date(`${isoDate}T12:00:00`);
    return d.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed((prev) => (clockedIn ? prev + 1 : prev));
    }, 1000);
    return () => clearInterval(id);
  }, [clockedIn]);

  useEffect(() => {
    if (!runningTaskId) return undefined;
    const id = setInterval(() => {
      setJournalTasks((prev) => prev.map((task) => (
        task.id === runningTaskId
          ? { ...task, seconds: task.seconds + 1, status: 'active' }
          : task
      )));
    }, 1000);
    return () => clearInterval(id);
  }, [runningTaskId]);

  const openJournal = () => {
    setShowCalendar(false);
    setShowLeave(false);
    setShowPerformance(false);
    setShowProfile(false);
    setShowLeads(false);
    setShowOpportunities(false);
    setShowNotifications(false);
    setActiveCalendarDoc(null);
    setShowJournal(true);
    setActiveTab('journal');
    setJournalTab('day');
    setJournalDayOffset(0);
    setJournalPage(1);
  };

  const closeJournal = () => {
    setShowJournal(false);
    setActiveTab('home');
  };

  const openLeads = () => {
    setShowJournal(false);
    setShowCalendar(false);
    setShowLeave(false);
    setShowPerformance(false);
    setShowProfile(false);
    setShowOpportunities(false);
    setShowNotifications(false);
    setActiveCalendarDoc(null);
    setShowLeads(true);
    setActiveTab('leads');
    setLeadSearch('');
    setExpandedLeadId(null);
  };

  const closeLeads = () => {
    setShowLeads(false);
    setExpandedLeadId(null);
    setActiveTab('home');
  };

  const openOpportunities = () => {
    setShowJournal(false);
    setShowLeads(false);
    setShowCalendar(false);
    setShowLeave(false);
    setShowPerformance(false);
    setShowProfile(false);
    setShowNotifications(false);
    setActiveCalendarDoc(null);
    setShowOpportunities(true);
    setActiveTab('opportunity');
    setOpportunitySearch('');
    setExpandedOpportunityId(null);
  };

  const closeOpportunities = () => {
    setShowOpportunities(false);
    setExpandedOpportunityId(null);
    setActiveTab('home');
  };

  const openNotifications = () => {
    setShowJournal(false);
    setShowLeads(false);
    setShowOpportunities(false);
    setShowCalendar(false);
    setShowLeave(false);
    setShowPerformance(false);
    setShowProfile(false);
    setActiveCalendarDoc(null);
    setShowNotifications(true);
    setActiveTab('notifications');
  };

  const closeNotifications = () => {
    setShowNotifications(false);
    setActiveTab('home');
  };

  const markNotificationRead = (id) => {
    setNotificationsList((prev) => prev.map((item) => (
      item.id === id ? { ...item, unread: false } : item
    )));
  };

  const openCalendar = () => {
    setShowJournal(false);
    setShowLeads(false);
    setShowOpportunities(false);
    setShowNotifications(false);
    setShowLeave(false);
    setShowPerformance(false);
    setShowProfile(false);
    setActiveCalendarDoc(null);
    setShowCalendar(true);
    setActiveTab('home');
    setCalendarMonth(new Date(now.getFullYear(), now.getMonth(), 1));
    setSelectedCalDate(toKeyDate(now));
  };

  const closeCalendar = () => {
    setActiveCalendarDoc(null);
    setShowCalendar(false);
    setActiveTab('home');
  };

  const openLeave = () => {
    setShowJournal(false);
    setShowLeads(false);
    setShowOpportunities(false);
    setShowNotifications(false);
    setShowCalendar(false);
    setShowPerformance(false);
    setShowProfile(false);
    setActiveCalendarDoc(null);
    setShowLeave(true);
    setLeaveTab('leaves');
    setExpandedLeaveId(null);
    setActiveTab('home');
  };

  const closeLeave = () => {
    setShowLeave(false);
    setShowRequestModal(false);
    setRequestType('');
    setExpandedLeaveId(null);
    setActiveTab('home');
  };

  const openPerformance = () => {
    setShowJournal(false);
    setShowLeads(false);
    setShowOpportunities(false);
    setShowNotifications(false);
    setShowCalendar(false);
    setShowLeave(false);
    setShowProfile(false);
    setActiveCalendarDoc(null);
    setShowPerformance(true);
    setPerfTab('overview');
    setActiveTab('home');
  };

  const closePerformance = () => {
    setShowPerformance(false);
    setActiveTab('home');
  };

  const openProfile = () => {
    setShowJournal(false);
    setShowLeads(false);
    setShowOpportunities(false);
    setShowNotifications(false);
    setShowCalendar(false);
    setShowLeave(false);
    setShowPerformance(false);
    setActiveCalendarDoc(null);
    setProfilePhotoOpen(false);
    setShowProfile(true);
    setActiveTab('home');
  };

  const closeProfile = () => {
    setProfilePhotoOpen(false);
    setShowProfile(false);
    setActiveTab('home');
  };

  const createWfhFormRow = () => ({
    id: `wfh-row-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    date: '',
    type: 'Work From Home',
    mode: '',
  });

  const createLeaveFormRow = () => ({
    id: `leave-row-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    date: toDateInput(now),
    type: 'Annual',
    mode: 'Full Day',
  });

  const resetWfhForm = () => {
    const firstRow = createWfhFormRow();
    setWfhFormRows([firstRow]);
    setExpandedWfhRowId(firstRow.id);
  };

  const resetLeaveForm = () => {
    const firstRow = createLeaveFormRow();
    setLeaveForm({ reason: '', actingArrangement: '' });
    setLeaveFormRows([firstRow]);
    setExpandedLeaveRowId(firstRow.id);
    setLeaveFormError('');
  };

  const openRequestModal = () => {
    setRequestType('');
    resetWfhForm();
    resetLeaveForm();
    setShowRequestModal(true);
  };

  const closeRequestModal = () => {
    setShowRequestModal(false);
    setRequestType('');
    setExpandedWfhRowId(null);
    setExpandedLeaveRowId(null);
    setLeaveFormError('');
  };

  const selectRequestType = (type) => {
    if (type === 'wfh') {
      resetWfhForm();
    } else if (type === 'leave') {
      resetLeaveForm();
    }
    setRequestType(type);
  };

  const updateWfhFormRow = (id, field, value) => {
    setWfhFormRows((prev) => prev.map((row) => (
      row.id === id ? { ...row, [field]: value } : row
    )));
  };

  const addWfhFormRow = () => {
    const nextRow = createWfhFormRow();
    setWfhFormRows((prev) => [...prev, nextRow]);
    setExpandedWfhRowId(nextRow.id);
  };

  const removeWfhFormRow = (id) => {
    setWfhFormRows((prev) => {
      if (prev.length <= 1) {
        const resetRow = createWfhFormRow();
        setExpandedWfhRowId(resetRow.id);
        return [resetRow];
      }
      const next = prev.filter((row) => row.id !== id);
      setExpandedWfhRowId((current) => (
        current === id ? next[0]?.id || null : current
      ));
      return next;
    });
  };

  const toggleWfhRow = (id) => {
    setExpandedWfhRowId((current) => (current === id ? null : id));
  };

  const formatScheduleDate = (value) => {
    if (!value) return 'Date not set';
    return new Date(`${value}T12:00:00`).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const saveWfhRequest = () => {
    const validRows = wfhFormRows.filter((row) => row.date && row.mode);
    if (validRows.length === 0) return;

    const appliedDate = toDateInput(now);
    const nextRecords = validRows.map((row, index) => ({
      id: `wfh-${Date.now()}-${index}`,
      appliedDate,
      mode: row.mode,
      type: 'WFH',
      status: 'pending',
      approvedBy: wfhReportsTo,
      reason: 'Work from home request',
      from: row.date,
      to: row.date,
    }));

    setWfhRecords((prev) => [...nextRecords, ...prev]);
    setLeaveTab('wfh');
    setExpandedLeaveId(null);
    closeRequestModal();
  };

  const updateLeaveForm = (field, value) => {
    setLeaveForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateLeaveFormRow = (id, field, value) => {
    setLeaveFormError('');
    setLeaveFormRows((prev) => prev.map((row) => (
      row.id === id ? { ...row, [field]: value } : row
    )));
  };

  const addLeaveFormRow = () => {
    const nextRow = createLeaveFormRow();
    setLeaveFormRows((prev) => [...prev, nextRow]);
    setExpandedLeaveRowId(nextRow.id);
  };

  const removeLeaveFormRow = (id) => {
    setLeaveFormRows((prev) => {
      if (prev.length <= 1) {
        const resetRow = createLeaveFormRow();
        setExpandedLeaveRowId(resetRow.id);
        return [resetRow];
      }
      const next = prev.filter((row) => row.id !== id);
      setExpandedLeaveRowId((current) => (
        current === id ? next[0]?.id || null : current
      ));
      return next;
    });
  };

  const toggleLeaveRow = (id) => {
    setExpandedLeaveRowId((current) => (current === id ? null : id));
  };

  const leaveDayValue = (mode) => (mode === 'Half Day' ? 0.5 : 1);

  const saveLeaveRequest = () => {
    const validRows = leaveFormRows.filter((row) => row.date && row.type && row.mode);
    const reason = leaveForm.reason.trim() || 'Leave request';

    if (validRows.length === 0) {
      setLeaveFormError('Add at least one leave day with date, type, and mode.');
      return;
    }

    const usageByType = validRows.reduce((acc, row) => {
      const key = leaveTypeToBalanceKey[row.type];
      if (!key) return acc;
      acc[key] = (acc[key] || 0) + leaveDayValue(row.mode);
      return acc;
    }, {});

    const insufficient = Object.entries(usageByType).find(([key, days]) => {
      const balance = leaveBalances.find((item) => item.key === key);
      if (!balance) return true;
      return (balance.total - balance.used) < days;
    });

    if (insufficient) {
      const [key] = insufficient;
      const balance = leaveBalances.find((item) => item.key === key);
      setLeaveFormError(
        `Not enough ${balance?.label || 'leave'} balance for this request.`
      );
      return;
    }

    const appliedDate = toDateInput(now);
    const nextRecords = validRows.map((row, index) => ({
      id: `lv-${Date.now()}-${index}`,
      appliedDate,
      mode: row.mode,
      type: row.type,
      status: 'pending',
      approvedBy: leaveReportsTo,
      reason,
      from: row.date,
      to: row.date,
      actingArrangement: leaveForm.actingArrangement.trim(),
      days: leaveDayValue(row.mode),
    }));

    if (clockedIn) {
      setAttendanceHistory((prev) => [
        {
          id: `out-leave-${Date.now()}`,
          type: 'out',
          location: workLocation,
          date: appliedDate,
          time: toTimeInput(now),
          duration: fmt(elapsed),
        },
        ...prev,
      ]);
    }

    setLeaveBalances((prev) => prev.map((balance) => (
      usageByType[balance.key]
        ? { ...balance, used: Number((balance.used + usageByType[balance.key]).toFixed(1)) }
        : balance
    )));
    setLeaveRecordsList((prev) => [...nextRecords, ...prev]);
    setLeaveTab('leaves');
    setExpandedLeaveId(nextRecords[0]?.id || null);
    setShowLeave(true);
    setClockedIn(false);
    setOnLeave(true);
    setLeaveFormError('');
    closeRequestModal();
  };

  const leaveRecords = leaveTab === 'leaves' ? leaveRecordsList : wfhRecords;

  const openCalendarDocument = (event) => {
    if (!event?.hasDocument || !event.document) return;
    setActiveCalendarDoc(event);
  };

  const closeCalendarDocument = () => {
    setActiveCalendarDoc(null);
  };

  const shiftCalendarMonth = (delta) => {
    setCalendarMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
  };

  const calendarCells = buildMonthCells(calendarMonth);
  const todayKey = toKeyDate(now);
  const eventsByDate = CALENDAR_EVENTS.reduce((map, event) => {
    if (!map[event.date]) map[event.date] = [];
    map[event.date].push(event);
    return map;
  }, {});
  const selectedDayEvents = eventsByDate[selectedCalDate] || [];
  const selectedDayLabel = new Date(`${selectedCalDate}T12:00:00`).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
  const calendarMonthLabel = calendarMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const journalDate = shiftDate(now, journalDayOffset);
  const filteredJournalTasks = journalDayOffset === 0
    ? journalTasks.filter((task) => (
      journalTab === 'day' ? task.tab === 'day' : task.tab === 'delegated'
    ))
    : [];
  const journalTotalPages = Math.max(1, Math.ceil(filteredJournalTasks.length / JOURNAL_PAGE_SIZE));
  const safeJournalPage = Math.min(journalPage, journalTotalPages);
  const journalPageStart = (safeJournalPage - 1) * JOURNAL_PAGE_SIZE;
  const visibleJournalTasks = filteredJournalTasks.slice(
    journalPageStart,
    journalPageStart + JOURNAL_PAGE_SIZE,
  );
  const journalHoursTotal = filteredJournalTasks.reduce((sum, task) => sum + Number(task.workload || 0), 0);

  const leadQuery = leadSearch.trim().toLowerCase();
  const filteredLeads = leadQuery
    ? leadsList.filter((lead) => (
      [lead.accountName, lead.locatedCountry, lead.leadOwner, lead.manageOffice, lead.createdBy]
        .join(' ')
        .toLowerCase()
        .includes(leadQuery)
    ))
    : leadsList;

  const opportunityQuery = opportunitySearch.trim().toLowerCase();
  const filteredOpportunities = opportunityQuery
    ? opportunitiesList.filter((opp) => (
      [
        opp.accountName,
        opp.leadSource,
        opp.oppType,
        opp.opportunityStatus,
        opp.opportunityOwner,
        opp.createdBy,
      ]
        .join(' ')
        .toLowerCase()
        .includes(opportunityQuery)
    ))
    : opportunitiesList;

  const unreadNotificationCount = notificationsList.filter((item) => item.unread).length;

  const setJournalTabSafe = (tab) => {
    setJournalTab(tab);
    setJournalPage(1);
  };

  const openEditTask = (taskId) => {
    const task = journalTasks.find((item) => item.id === taskId);
    if (!task) return;
    let assignDateValue = '';
    let dueDateObj = null;
    if (task.due && task.due !== 'TBD') {
      const parsed = new Date(task.due);
      if (!Number.isNaN(parsed.getTime())) {
        assignDateValue = toDateInput(parsed);
        dueDateObj = parsed;
      }
    }
    const shiftedDate = (days) => {
      if (!dueDateObj) return '';
      const d = new Date(dueDateObj);
      d.setDate(d.getDate() + days);
      return toDateInput(d);
    };
    setAddForm((prev) => ({
      ...prev,
      title: task.title || '',
      client: task.client || '',
      salesRef: task.salesRef || '',
      department: task.department || 'IT',
      assignTo: task.assignedBy || 'Nisal Amarasekara',
      assignDate: assignDateValue,
      description: task.description || '',
      applicationReceivedDate: task.applicationReceivedDate || shiftedDate(-10),
      arCompletedDate: task.arCompletedDate || shiftedDate(-3),
      arApprovalRequestedDate: task.arApprovalRequestedDate || shiftedDate(-5),
      propertyRemarks: task.propertyRemarks || (task.client ? `Reviewed and processed as part of the ${task.client} engagement.` : ''),
      nextTasks: task.nextTasks && task.nextTasks.length
        ? task.nextTasks.map((row) => ({ ...row }))
        : [makeEmptyNextTaskRow(), makeEmptyNextTaskRow()],
    }));
    setAddType('task');
    setEditingTaskId(taskId);
    setTaskWizardStep(1);
    setShowAddModal(true);
  };

  const startJournalTimer = (taskId) => {
    const target = journalTasks.find((task) => task.id === taskId);
    if (!target || target.status === 'done') return;
    setJournalTimeDrafts((prev) => {
      if (!(taskId in prev)) return prev;
      const next = { ...prev };
      delete next[taskId];
      return next;
    });
    setRunningTaskId(taskId);
    setJournalTasks((prev) => prev.map((task) => (
      task.id === taskId
        ? { ...task, status: 'active' }
        : task.status === 'active'
          ? { ...task, status: 'pending' }
          : task
    )));
  };

  const pauseJournalTimer = () => {
    setRunningTaskId(null);
    setJournalTasks((prev) => prev.map((task) => (
      task.status === 'active' ? { ...task, status: 'pending' } : task
    )));
  };

  const stopJournalTimer = (taskId) => {
    setRunningTaskId((prev) => (prev === taskId ? null : prev));
    setJournalTimeDrafts((prev) => {
      if (!(taskId in prev)) return prev;
      const next = { ...prev };
      delete next[taskId];
      return next;
    });
    setJournalTasks((prev) => prev.map((task) => (
      task.id === taskId ? { ...task, status: 'done' } : task
    )));
  };

  const deleteJournalTask = (taskId) => {
    setJournalTasks((prev) => prev.filter((task) => task.id !== taskId));
    setRunningTaskId((prev) => (prev === taskId ? null : prev));
    setJournalTimeDrafts((prev) => {
      if (!(taskId in prev)) return prev;
      const next = { ...prev };
      delete next[taskId];
      return next;
    });
  };

  const openNoteSheet = (taskId) => {
    const task = journalTasks.find((item) => item.id === taskId);
    setNoteDraft(task?.note || '');
    setNoteTaskId(taskId);
  };

  const closeNoteSheet = () => {
    setNoteTaskId(null);
    setNoteDraft('');
  };

  const saveNoteSheet = () => {
    setJournalTasks((prev) => prev.map((task) => (
      task.id === noteTaskId ? { ...task, note: noteDraft } : task
    )));
    closeNoteSheet();
  };

  const resetJournalTimer = (taskId) => {
    setRunningTaskId((prev) => (prev === taskId ? null : prev));
    setJournalTimeDrafts((prev) => ({ ...prev, [taskId]: '0' }));
    setJournalTasks((prev) => prev.map((task) => (
      task.id === taskId ? { ...task, seconds: 0, status: 'pending' } : task
    )));
  };

  const beginJournalTimeEdit = (task) => {
    if (task.status === 'done' || runningTaskId === task.id) return;
    setJournalTimeDrafts((prev) => ({
      ...prev,
      [task.id]: formatJournalHoursDraft(task.seconds),
    }));
  };

  const changeJournalTimeDraft = (taskId, value) => {
    const sanitized = value
      .replace(/[^\d.]/g, '')
      .replace(/(\..*)\./g, '$1')
      .slice(0, 6);
    setJournalTimeDrafts((prev) => ({ ...prev, [taskId]: sanitized }));
  };

  const commitJournalTimeDraft = (taskId) => {
    const draft = journalTimeDrafts[taskId];
    if (draft === undefined) return;
    const parsed = parseJournalHours(draft);
    setJournalTimeDrafts((prev) => {
      const next = { ...prev };
      delete next[taskId];
      return next;
    });
    if (parsed === null) return;
    setJournalTasks((prev) => prev.map((task) => (
      task.id === taskId && task.status !== 'done'
        ? { ...task, seconds: parsed }
        : task
    )));
  };

  const fmt = (total) => {
    const h = String(Math.floor(total / 3600)).padStart(2, '0');
    const m = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
    const s = String(total % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const hour = now.getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  const handleClockButton = () => {
    if (clockedIn) {
      setClockDate(toDateInput(now));
      setClockTime(toTimeInput(now));
      setShowClockOutModal(true);
      return;
    }
    setClockDate(toDateInput(now));
    setClockTime(toTimeInput(now));
    setShowClockInModal(true);
  };

  const confirmClockIn = () => {
    const inEntry = {
      id: `in-${Date.now()}`,
      type: 'in',
      location: workLocation,
      date: clockDate || toDateInput(now),
      time: clockTime || toTimeInput(now),
    };
    setAttendanceHistory((prev) => [inEntry, ...prev]);
    setElapsed(0);
    setOnLeave(false);
    setClockedIn(true);
    setShowClockInModal(false);
  };

  const confirmClockOut = () => {
    const outEntry = {
      id: `out-${Date.now()}`,
      type: 'out',
      location: workLocation,
      date: clockDate || toDateInput(now),
      time: clockTime || toTimeInput(now),
      duration: fmt(elapsed),
    };
    setAttendanceHistory((prev) => [outEntry, ...prev]);
    setClockedIn(false);
    setShowClockOutModal(false);
  };

  const openAddModal = (type = 'task') => {
    const nextType = ['task', 'lead', 'opportunity'].includes(type) ? type : 'task';
    setAddType(nextType);
    setTaskWizardStep(1);
    setEditingTaskId(null);
    setAddForm({
      title: '',
      description: '',
      dueDate: toDateInput(now),
      priority: 'Medium',
      company: '',
      contact: '',
      email: '',
      phone: '',
      value: '',
      stage: 'Qualification',
      source: 'Referral',
      accountName: '',
      locatedCountry: '',
      createdBy: 'Nisal Amarasekara',
      manageOffice: '',
      leadOwner: '',
      leadSource: '',
      oppType: '',
      opportunityStatus: '',
      probability: '0',
      opportunityOwner: '',
      assignDate: toDateInput(now),
      inquiryType: '',
      activity: '',
      category: '',
      client: '',
      salesRef: '',
      taskGroup: '',
      assignTo: 'Nisal Amarasekara',
      department: 'IT',
      applicationReceivedDate: '',
      arCompletedDate: '',
      arApprovalRequestedDate: '',
      propertyRemarks: '',
      visitingCardFront: null,
      visitingCardBack: null,
      nextTasks: [makeEmptyNextTaskRow(), makeEmptyNextTaskRow()],
    });
    setAssigneeQuery('');
    setSelectedServices([]);
    setExpandedServices([]);
    setExpandedPillars([]);
    setShowAddModal(true);
  };

  const togglePillarExpand = (pillarKey) => {
    setExpandedPillars((prev) => (
      prev.includes(pillarKey)
        ? prev.filter((key) => key !== pillarKey)
        : [...prev, pillarKey]
    ));
  };

  const toggleServiceExpand = (serviceKey) => {
    setExpandedServices((prev) => (
      prev.includes(serviceKey)
        ? prev.filter((key) => key !== serviceKey)
        : [...prev, serviceKey]
    ));
  };

  const toggleProgram = (serviceKey, program) => {
    const id = `${serviceKey}::${program}`;
    setSelectedServices((prev) => (
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    ));
  };

  const renderSelectServices = () => (
    <div className="services-panel">
      <div className="services-panel__header">
        <span>Select Services</span>
      </div>
      <div className="services-panel__body">
        {SERVICE_PILLARS.map((pillar) => {
          const PillarIcon = {
            testing: FileText,
            inspection: ClipboardCheck,
            certification: ListChecks,
            academy: GraduationCap,
          }[pillar.key];
          const pillarExpanded = expandedPillars.includes(pillar.key);
          const pillarSelectedCount = pillar.services.reduce((sum, service) => (
            sum + service.programs.filter((program) => (
              selectedServices.includes(`${service.key}::${program}`)
            )).length
          ), 0);

          return (
            <div
              key={pillar.key}
              className={`services-pillar ${pillarExpanded ? 'is-expanded' : 'is-collapsed'}`}
            >
              <button
                type="button"
                className={`services-pillar__title ${pillarExpanded ? 'is-open' : ''}`}
                onClick={() => togglePillarExpand(pillar.key)}
                aria-expanded={pillarExpanded}
              >
                <span className="services-pillar__title-left">
                  <span className="services-pillar__icon">
                    <PillarIcon className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </span>
                  <span>{pillar.label}</span>
                  {pillarSelectedCount > 0 && (
                    <span className="services-pillar__count">{pillarSelectedCount}</span>
                  )}
                </span>
                <ChevronDown
                  className={`services-pillar__chevron ${pillarExpanded ? 'is-open' : ''}`}
                  strokeWidth={2.3}
                />
              </button>

              {pillarExpanded && (
                <div className="services-pillar__details">
                  {pillar.services.length === 0 ? (
                    <div className="services-pillar__empty">
                      No services offered yet. Services will appear here once they are added.
                    </div>
                  ) : (
                    <div className="services-pillar__list">
                      {pillar.services.map((service) => {
                        const expanded = expandedServices.includes(service.key);
                        const selectedCount = service.programs.filter((program) => (
                          selectedServices.includes(`${service.key}::${program}`)
                        )).length;
                        return (
                          <div
                            key={service.key}
                            className={`service-accordion ${expanded ? 'is-expanded' : 'is-collapsed'}`}
                          >
                            <button
                              type="button"
                              className={`service-accordion__trigger ${expanded ? 'is-open' : ''}`}
                              onClick={() => toggleServiceExpand(service.key)}
                              aria-expanded={expanded}
                            >
                              <span className="service-accordion__label">{service.label}</span>
                              <span className="service-accordion__meta">
                                {selectedCount > 0 && (
                                  <span className="service-accordion__count">{selectedCount}</span>
                                )}
                                <ChevronDown
                                  className={`service-accordion__chevron ${expanded ? 'is-open' : ''}`}
                                  strokeWidth={2.3}
                                />
                              </span>
                            </button>
                            {expanded && (
                              <div className="service-accordion__programs">
                                {service.programs.map((program) => {
                                  const id = `${service.key}::${program}`;
                                  const checked = selectedServices.includes(id);
                                  return (
                                    <label key={id} className="program-row">
                                      <span className="program-row__label">{program}</span>
                                      <input
                                        type="checkbox"
                                        checked={checked}
                                        onChange={() => toggleProgram(service.key, program)}
                                      />
                                    </label>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="services-panel__footer">
        <span className="services-panel__count">
          {selectedServices.length} program{selectedServices.length === 1 ? '' : 's'} selected
        </span>
        {selectedServices.length > 0 && (
          <button
            type="button"
            className="services-panel__clear"
            onClick={() => setSelectedServices([])}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );

  const updateAddForm = (field, value) => {
    setAddForm((prev) => ({ ...prev, [field]: value }));
  };

  const addNextTaskRow = () => {
    setAddForm((prev) => ({ ...prev, nextTasks: [...prev.nextTasks, makeEmptyNextTaskRow()] }));
  };

  const removeNextTaskRow = (rowId) => {
    setAddForm((prev) => ({ ...prev, nextTasks: prev.nextTasks.filter((row) => row.id !== rowId) }));
  };

  const updateNextTaskRow = (rowId, field, value) => {
    setAddForm((prev) => ({
      ...prev,
      nextTasks: prev.nextTasks.map((row) => (row.id === rowId ? { ...row, [field]: value } : row)),
    }));
  };

  const captureVisitingCardImage = (field, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => updateAddForm(field, reader.result);
    reader.readAsDataURL(file);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
    setTaskWizardStep(1);
    setAssigneeQuery('');
    setEditingTaskId(null);
  };

  const handleAddTypeChange = (type) => {
    setAddType(type);
    setTaskWizardStep(1);
    setAssigneeQuery('');
    setEditingTaskId(null);
  };

  const addAssigneeFromQuery = () => {
    const name = assigneeQuery.trim();
    if (!name) return;
    updateAddForm('assignTo', name);
    setAssigneeQuery('');
  };

  const createJournalTaskFromForm = (form, extras = {}) => {
    const dueLabel = form.assignDate
      ? new Date(`${form.assignDate}T12:00:00`).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
      : 'TBD';

    return {
      id: `j-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      client: form.client || 'New Client',
      salesRef: form.salesRef || 'N/A',
      title: form.title || 'Untitled Task',
      assignedBy: form.assignTo || 'Self',
      due: dueLabel,
      department: form.department || 'IT',
      description: form.description || [form.activity, form.category].filter(Boolean).join(' · '),
      workload: 1,
      status: 'new',
      accent: 'orange',
      seconds: 0,
      tab: 'day',
      applicationReceivedDate: form.applicationReceivedDate || '',
      arCompletedDate: form.arCompletedDate || '',
      arApprovalRequestedDate: form.arApprovalRequestedDate || '',
      propertyRemarks: form.propertyRemarks || '',
      nextTasks: (form.nextTasks || []).filter((row) => row.task.trim() || row.assignee.trim()),
      ...extras,
    };
  };

  const submitAddForm = ({ complete = false } = {}) => {
    if (addType === 'lead') {
      const serviceLabels = selectedServices.map((id) => {
        const [serviceKey, program] = id.split('::');
        const service = SERVICE_PILLARS
          .flatMap((pillar) => pillar.services)
          .find((item) => item.key === serviceKey);
        return service ? `${service.label} · ${program}` : program;
      });

      const newLead = {
        id: `lead-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        accountName: addForm.accountName.trim() || 'Untitled Account',
        locatedCountry: addForm.locatedCountry.trim() || '—',
        createdBy: addForm.createdBy.trim() || 'Nisal Amarasekara',
        manageOffice: addForm.manageOffice || 'Colombo Head Office',
        leadOwner: addForm.leadOwner.trim() || 'Unassigned',
        services: serviceLabels,
        visitingCardFront: addForm.visitingCardFront,
        visitingCardBack: addForm.visitingCardBack,
        status: 'new',
        createdAt: now.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };

      setLeadsList((prev) => [newLead, ...prev]);
      setShowOpportunities(false);
      setShowNotifications(false);
      setShowLeads(true);
      setActiveTab('leads');
      setExpandedLeadId(newLead.id);
      closeAddModal();
      return;
    }

    if (addType === 'opportunity') {
      const serviceLabels = selectedServices.map((id) => {
        const [serviceKey, program] = id.split('::');
        const service = SERVICE_PILLARS
          .flatMap((pillar) => pillar.services)
          .find((item) => item.key === serviceKey);
        return service ? `${service.label} · ${program}` : program;
      });

      const newOpportunity = {
        id: `opp-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        accountName: addForm.accountName.trim() || 'Untitled Account',
        leadSource: addForm.leadSource || '—',
        oppType: addForm.oppType || '—',
        opportunityStatus: addForm.opportunityStatus || 'Qualification',
        probability: Number(addForm.probability) || 0,
        createdBy: addForm.createdBy.trim() || 'Nisal Amarasekara',
        opportunityOwner: addForm.opportunityOwner.trim() || 'Unassigned',
        services: serviceLabels,
        createdAt: now.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };

      setOpportunitiesList((prev) => [newOpportunity, ...prev]);
      setShowLeads(false);
      setShowNotifications(false);
      setShowOpportunities(true);
      setActiveTab('opportunity');
      setExpandedOpportunityId(newOpportunity.id);
      closeAddModal();
      return;
    }

    if (addType !== 'task') {
      closeAddModal();
      return;
    }

    const primary = createJournalTaskFromForm(addForm);

    if (editingTaskId) {
      setJournalTasks((prev) => prev.map((task) => (
        task.id === editingTaskId
          ? {
            ...task,
            title: primary.title,
            client: primary.client,
            salesRef: primary.salesRef,
            assignedBy: primary.assignedBy,
            due: primary.due,
            department: primary.department,
            description: primary.description,
            applicationReceivedDate: primary.applicationReceivedDate,
            arCompletedDate: primary.arCompletedDate,
            arApprovalRequestedDate: primary.arApprovalRequestedDate,
            propertyRemarks: primary.propertyRemarks,
            nextTasks: primary.nextTasks,
            status: complete ? 'done' : task.status,
          }
          : task
      )));
    } else {
      setJournalTasks((prev) => [
        { ...primary, status: complete ? 'done' : primary.status },
        ...prev,
      ]);
    }
    setJournalTab('day');
    setJournalDayOffset(0);
    setJournalPage(1);
    setShowLeads(false);
    setShowOpportunities(false);
    setShowNotifications(false);
    setShowJournal(true);
    setActiveTab('journal');
    closeAddModal();
  };

  const goTaskWizardNext = () => {
    setTaskWizardStep((prev) => Math.min(3, prev + 1));
  };

  const addTypeMeta = {
    task: { label: 'Task', icon: ListTodo, title: 'Add New Task' },
    lead: { label: 'Lead', icon: User, title: 'New Lead' },
    opportunity: { label: 'Opportunity', icon: Target, title: 'New Opportunity' },
  };

  const isTaskReadOnly = Boolean(
    editingTaskId
    && journalTasks.find((task) => task.id === editingTaskId)?.status === 'done'
  );

  return (
    <PhoneFrame darkMode={darkMode}>
      <StatusBar now={now} />

      {activeCalendarDoc ? (
        <div className="doc-view fade-up">
          <div className="doc-view__top">
            <div className="doc-view__header">
              <button
                type="button"
                className="journal-view__icon-btn pressable"
                onClick={closeCalendarDocument}
                aria-label="Back to calendar"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.3} />
              </button>
              <div className="min-w-0 flex-1">
                <h1 className="journal-view__title">Document</h1>
                <p className="journal-view__subtitle">Page view</p>
              </div>
              <div className="doc-view__actions">
                <button type="button" className="doc-view__icon-btn" aria-label="Share document">
                  <Share2 className="w-4 h-4" strokeWidth={2.2} />
                </button>
                <button type="button" className="doc-view__icon-btn" aria-label="Download document">
                  <Download className="w-4 h-4" strokeWidth={2.2} />
                </button>
              </div>
            </div>
          </div>

          <div className="doc-view__scroll scroll-hide">
            <div className="doc-page">
              <div className="doc-page__badge-row">
                <span className="doc-page__badge">{activeCalendarDoc.document.type}</span>
                <span className="doc-page__badge">{activeCalendarDoc.document.pages} pages</span>
                <span className="doc-page__badge">{activeCalendarDoc.document.size}</span>
              </div>
              <h2 className="doc-page__title">{activeCalendarDoc.document.title}</h2>
              <div className="doc-page__meta">
                <span>{activeCalendarDoc.document.author}</span>
                <span className="journal-card__dot">·</span>
                <span>Updated {activeCalendarDoc.document.updated}</span>
              </div>
              <p className="doc-page__summary">{activeCalendarDoc.document.summary}</p>
              <div className="doc-page__divider" />
              {activeCalendarDoc.document.sections.map((section) => (
                <section key={section.heading} className="doc-page__section">
                  <h3 className="doc-page__heading">{section.heading}</h3>
                  <p className="doc-page__body">{section.body}</p>
                </section>
              ))}
              <div className="doc-page__footer">
                Linked to: {activeCalendarDoc.title}
              </div>
            </div>
          </div>
        </div>
      ) : showCalendar ? (
        <div className="calendar-view fade-up">
          <div className="calendar-view__top">
            <div className="calendar-view__header">
              <button
                type="button"
                className="journal-view__icon-btn pressable"
                onClick={closeCalendar}
                aria-label="Back to home"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.3} />
              </button>
              <div className="min-w-0 flex-1">
                <h1 className="journal-view__title">Calendar</h1>
                <p className="journal-view__subtitle">Meetings & attachments</p>
              </div>
            </div>
          </div>

          <div className="calendar-view__scroll scroll-hide">
            <div className="cal-month">
              <div className="cal-month__nav">
                <button
                  type="button"
                  className="cal-month__chev pressable"
                  onClick={() => shiftCalendarMonth(-1)}
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-4 h-4" strokeWidth={2.4} />
                </button>
                <div className="cal-month__label">{calendarMonthLabel}</div>
                <button
                  type="button"
                  className="cal-month__chev pressable"
                  onClick={() => shiftCalendarMonth(1)}
                  aria-label="Next month"
                >
                  <ChevronRight className="w-4 h-4" strokeWidth={2.4} />
                </button>
              </div>

              <div className="cal-weekdays">
                {CALENDAR_WEEKDAYS.map((day) => (
                  <span key={day} className="cal-weekdays__item">{day}</span>
                ))}
              </div>

              <div className="cal-grid">
                {calendarCells.map((cell) => {
                  const hasEvents = Boolean(eventsByDate[cell.key]?.length);
                  const selected = cell.key === selectedCalDate;
                  const isToday = cell.key === todayKey;
                  return (
                    <button
                      key={cell.key}
                      type="button"
                      className={[
                        'cal-day',
                        cell.inMonth ? '' : 'is-outside',
                        cell.weekend ? 'is-weekend' : '',
                        selected ? 'is-selected' : '',
                        isToday ? 'is-today' : '',
                      ].filter(Boolean).join(' ')}
                      onClick={() => setSelectedCalDate(cell.key)}
                    >
                      <span>{cell.day}</span>
                      {hasEvents && <span className="cal-day__dot" />}
                    </button>
                  );
                })}
              </div>

              {selectedCalDate !== todayKey && (
                <button
                  type="button"
                  className="cal-today-jump pressable"
                  onClick={() => {
                    setCalendarMonth(new Date(now.getFullYear(), now.getMonth(), 1));
                    setSelectedCalDate(todayKey);
                  }}
                >
                  Jump to today
                </button>
              )}
            </div>

            <div className="cal-events">
              <div className="cal-events__header">
                <div>
                  <div className="cal-events__title">{selectedDayLabel}</div>
                  <div className="cal-events__count">
                    {selectedDayEvents.length} event{selectedDayEvents.length === 1 ? '' : 's'}
                  </div>
                </div>
              </div>

              {selectedDayEvents.length === 0 ? (
                <div className="cal-events__empty">
                  No meetings on this day. Pick another date or add a new event.
                </div>
              ) : (
                selectedDayEvents.map((event) => (
                  <button
                    key={event.id}
                    type="button"
                    className={`cal-card ${event.status === 'canceled' ? 'is-canceled' : ''} pressable`}
                    onClick={() => openCalendarDocument(event)}
                  >
                    <div className="cal-card__top">
                      <span className="cal-card__time">
                        <span className="cal-card__pulse" />
                        {event.time}
                      </span>
                      <span
                        className={`cal-card__join ${event.canJoin ? '' : 'is-disabled'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        onKeyDown={(e) => e.stopPropagation()}
                        role="button"
                        tabIndex={0}
                        aria-disabled={!event.canJoin}
                      >
                        Join
                      </span>
                    </div>
                    <div className="cal-card__title">{event.title}</div>
                    <div className="cal-card__meta">{event.location}</div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      ) : showPerformance ? (
        <div className="performance-view fade-up">
          <div className="performance-view__top">
            <div className="leave-view__header">
              <button
                type="button"
                className="journal-view__icon-btn pressable"
                onClick={closePerformance}
                aria-label="Back to home"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.3} />
              </button>
              <div className="leave-view__title-block min-w-0">
                <h1 className="journal-view__title">Performance</h1>
                <p className="journal-view__subtitle">Score & contribution</p>
              </div>
              <button
                type="button"
                className="performance-view__print pressable"
                aria-label="Print Journal"
                title="Print Journal"
              >
                <Printer className="w-4 h-4" strokeWidth={2.2} />
              </button>
            </div>
          </div>

          <div className="performance-view__scroll scroll-hide">
            <section className="performance-view__hero">
              <div className="performance-view__hero-gauge">
                <PerformanceRing
                  id="final-score"
                  value={PERFORMANCE_DATA.finalScore}
                  size={96}
                  stroke={10}
                  color={getPerformanceLevelMeta(PERFORMANCE_DATA.level).color}
                  gradient={getPerformanceLevelMeta(PERFORMANCE_DATA.level).gradient}
                  track="rgba(255,255,255,0.18)"
                />
                <div className="performance-view__hero-score">
                  {PERFORMANCE_DATA.finalScore.toFixed(2)}%
                </div>
              </div>
              <div className="performance-view__hero-copy min-w-0">
                <div className="performance-view__hero-label">Final Performance Score</div>
                <div className={`performance-view__hero-level performance-view__status--${PERFORMANCE_DATA.level}`}>
                  {getPerformanceLevelMeta(PERFORMANCE_DATA.level).label}
                </div>
                <div className="performance-view__hero-period">{PERFORMANCE_DATA.period}</div>
              </div>
              <div className="performance-view__hero-delta">
                <span className="performance-view__delta-icon" aria-hidden="true">
                  <TrendingDown className="w-4 h-4" strokeWidth={2.3} />
                </span>
                <div className="performance-view__delta-text">
                  <strong>{PERFORMANCE_DATA.delta}</strong>
                  <span>Below Benchmark</span>
                </div>
              </div>
            </section>

            <div className="performance-view__tabs" role="tablist" aria-label="Performance sections">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'contribution', label: 'Contribution' },
                { key: 'trends', label: 'Trends' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={perfTab === tab.key}
                  className={`performance-view__tab ${perfTab === tab.key ? 'is-active' : ''}`}
                  onClick={() => setPerfTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {perfTab === 'overview' && (
              <section className="performance-view__section">
                <div className="performance-view__section-head">
                  <h2 className="performance-view__section-title">Performance Overview</h2>
                </div>
                <div className="performance-view__legend" aria-label="Performance levels">
                  {PERFORMANCE_LEVELS.map((level) => (
                    <span key={level.key} className="performance-view__legend-item">
                      <span className="performance-view__legend-dot" style={{ background: level.color }} />
                      {level.label}
                    </span>
                  ))}
                </div>
                <div className="performance-view__metrics">
                  {PERFORMANCE_DATA.metrics.map((metric) => {
                    const Icon = metric.icon;
                    const level = getPerformanceLevelMeta(metric.level);
                    return (
                      <article key={metric.key} className="performance-view__metric-card">
                        <div className="performance-view__metric-top">
                          <span className="performance-view__metric-icon" aria-hidden="true">
                            <Icon className="w-4 h-4" strokeWidth={2.1} />
                          </span>
                          <span className="performance-view__metric-label">{metric.label}</span>
                        </div>
                        <div className="performance-view__metric-gauge">
                          <PerformanceRing
                            id={metric.key}
                            value={metric.value}
                            size={78}
                            stroke={10}
                            color={level.color}
                            gradient={level.gradient}
                          />
                          <div className="performance-view__metric-value">
                            {Number.isInteger(metric.value) ? metric.value : metric.value.toFixed(1)}%
                          </div>
                        </div>
                        <span
                          className={`performance-view__badge performance-view__badge--${metric.level}`}
                        >
                          {level.label}
                        </span>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {perfTab === 'contribution' && (
              <section className="performance-view__section">
                <div className="performance-view__section-head">
                  <h2 className="performance-view__section-title">
                    <Zap className="w-4 h-4" strokeWidth={2.2} />
                    Contribution Profile
                  </h2>
                  <span className="performance-view__section-meta">
                    Allocation · {PERFORMANCE_DATA.period}
                  </span>
                </div>
                <div className="performance-view__contributions">
                  {PERFORMANCE_DATA.contributions.map((item) => (
                    <article key={item.key} className="performance-view__contrib-card">
                      <h3 className="performance-view__contrib-title">{item.title}</h3>
                      <div className="performance-view__contrib-body">
                        <PerformanceDonut
                          id={item.key}
                          color={item.color}
                          gradient={item.gradient}
                          value={item.items.reduce((sum, slice) => sum + slice.value, 0)}
                        />
                        <div className="performance-view__contrib-legend">
                          {item.items.map((slice) => (
                            <div key={slice.label} className="performance-view__contrib-row">
                              <span
                                className="performance-view__legend-dot"
                                style={{
                                  background: `linear-gradient(135deg, ${item.gradient[0]}, ${item.gradient[2]})`,
                                }}
                              />
                              <span className="truncate">{slice.label}</span>
                              <strong>{slice.value}%</strong>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {perfTab === 'trends' && (
              <section className="performance-view__section">
                <div className="performance-view__section-head">
                  <h2 className="performance-view__section-title">
                    <Activity className="w-4 h-4" strokeWidth={2.2} />
                    Performance Trends
                  </h2>
                </div>
                <div className="performance-view__legend" aria-label="Trend levels">
                  {PERFORMANCE_LEVELS.map((level) => (
                    <span key={level.key} className="performance-view__legend-item">
                      <span className="performance-view__legend-dot" style={{ background: level.color }} />
                      {level.label}
                    </span>
                  ))}
                </div>
                <div className="performance-view__trend-card">
                  <PerformanceTrendChart trends={PERFORMANCE_DATA.trends} />
                </div>
              </section>
            )}
          </div>
        </div>
      ) : showLeave ? (
        <div className="leave-view fade-up">
          <div className="leave-view__top">
            <div className="leave-view__header">
              <button
                type="button"
                className="journal-view__icon-btn pressable"
                onClick={closeLeave}
                aria-label="Back to home"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.3} />
              </button>
              <div className="leave-view__title-block min-w-0">
                <h1 className="journal-view__title">WFH & Leave</h1>
                <p className="journal-view__subtitle">Balances & requests</p>
              </div>
              <div className="leave-view__actions">
                <button
                  type="button"
                  className="leave-view__action pressable"
                  title="New Request"
                  aria-label="New Request"
                  onClick={openRequestModal}
                >
                  <Plus strokeWidth={2.8} />
                  <span>Request</span>
                </button>
              </div>
            </div>
          </div>

          <div className="leave-view__scroll scroll-hide">
            <div className="leave-balances">
              {leaveBalances.map((balance) => {
                const remaining = Number((balance.total - balance.used).toFixed(1));
                const pct = Math.round((remaining / balance.total) * 100);
                return (
                  <div key={balance.key} className="leave-balance-card">
                    <div className="leave-balance-card__value">
                      {remaining} <span>/ {balance.total}</span>
                    </div>
                    <div className="leave-balance-card__label">{balance.label}</div>
                    <div className="leave-balance-card__bar">
                      <span style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="leave-tabs" role="tablist" aria-label="Leave views">
              <button
                type="button"
                role="tab"
                aria-selected={leaveTab === 'leaves'}
                className={`leave-tabs__btn ${leaveTab === 'leaves' ? 'is-active' : ''}`}
                onClick={() => {
                  setLeaveTab('leaves');
                  setExpandedLeaveId(null);
                }}
              >
                Leaves
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={leaveTab === 'wfh'}
                className={`leave-tabs__btn ${leaveTab === 'wfh' ? 'is-active' : ''}`}
                onClick={() => {
                  setLeaveTab('wfh');
                  setExpandedLeaveId(null);
                }}
              >
                Work From Home
              </button>
            </div>

            <div className="leave-list">
              {leaveRecords.length === 0 ? (
                <div className="leave-empty">No records yet for this view.</div>
              ) : (
                leaveRecords.map((record) => {
                  const expanded = expandedLeaveId === record.id;
                  return (
                    <article
                      key={record.id}
                      className={`leave-card ${expanded ? 'is-expanded' : ''}`}
                    >
                      <button
                        type="button"
                        className="leave-card__main"
                        onClick={() => setExpandedLeaveId(expanded ? null : record.id)}
                        aria-expanded={expanded}
                      >
                        <div className="leave-card__row">
                          <div>
                            <div className="leave-card__date">{record.appliedDate}</div>
                            <div className="leave-card__type">
                              {record.type} · {record.mode}
                            </div>
                          </div>
                          <span className={`leave-status leave-status--${record.status}`}>
                            {record.status}
                          </span>
                        </div>
                        <div className="leave-card__approver">
                          {record.status === 'approved' ? 'Approved by' : record.status === 'rejected' ? 'Reviewed by' : 'Pending with'}{' '}
                          <span>{record.approvedBy}</span>
                        </div>
                      </button>

                      {expanded && (
                        <div className="leave-card__details">
                          <div className="leave-card__detail-grid">
                            <div>
                              <span className="leave-card__detail-label">From</span>
                              <span className="leave-card__detail-value">{record.from}</span>
                            </div>
                            <div>
                              <span className="leave-card__detail-label">To</span>
                              <span className="leave-card__detail-value">{record.to}</span>
                            </div>
                          </div>
                          <div className="leave-card__reason">
                            <span className="leave-card__detail-label">Reason</span>
                            <p>{record.reason}</p>
                          </div>
                          <div className="leave-card__actions">
                            <button type="button" className="leave-card__action" aria-label="View details">
                              <Eye className="w-4 h-4" strokeWidth={2.1} />
                              View
                            </button>
                            <button type="button" className="leave-card__action leave-card__action--danger" aria-label="Delete request">
                              <Trash2 className="w-4 h-4" strokeWidth={2.1} />
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })
              )}
            </div>
          </div>
        </div>
      ) : showJournal ? (
        <div className="journal-view fade-up">
          <div className="journal-view__top">
            <div className="journal-view__header">
              <button
                type="button"
                className="journal-view__icon-btn pressable"
                onClick={closeJournal}
                aria-label="Back to home"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.3} />
              </button>
              <div className="min-w-0 flex-1">
                <h1 className="journal-view__title">Day Journal</h1>
                <p className="journal-view__subtitle">Track time & daily work</p>
              </div>
              <button
                type="button"
                className="journal-view__add pressable"
                onClick={() => openAddModal('task')}
              >
                <Plus className="w-3.5 h-3.5" strokeWidth={2.6} />
                Add New
              </button>
            </div>

            <div className="journal-tabs" role="tablist" aria-label="Journal views">
              <button
                type="button"
                role="tab"
                aria-selected={journalTab === 'day'}
                className={`journal-tabs__btn ${journalTab === 'day' ? 'is-active' : ''}`}
                onClick={() => setJournalTabSafe('day')}
              >
                Day Journal
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={journalTab === 'delegated'}
                className={`journal-tabs__btn ${journalTab === 'delegated' ? 'is-active' : ''}`}
                onClick={() => setJournalTabSafe('delegated')}
              >
                Delegated Tasks
              </button>
            </div>

            <div className="journal-datebar">
              <div className="journal-datebar__nav">
                <button
                  type="button"
                  className="journal-datebar__chev pressable"
                  onClick={() => {
                    setJournalDayOffset((prev) => prev - 1);
                    setJournalPage(1);
                  }}
                  aria-label="Previous day"
                >
                  <ChevronLeft className="w-4 h-4" strokeWidth={2.4} />
                </button>
                <button
                  type="button"
                  className="journal-datebar__chev pressable"
                  onClick={() => {
                    setJournalDayOffset((prev) => prev + 1);
                    setJournalPage(1);
                  }}
                  aria-label="Next day"
                >
                  <ChevronRight className="w-4 h-4" strokeWidth={2.4} />
                </button>
              </div>
              <div className="journal-datebar__center">
                <div className="journal-datebar__date">{formatJournalDateLabel(journalDate)}</div>
                <div className="journal-datebar__hours">{journalHoursTotal} Hours</div>
              </div>
              <div className="journal-datebar__actions">
                <button
                  type="button"
                  className={`journal-datebar__today pressable ${journalDayOffset === 0 ? 'is-active' : ''}`}
                  onClick={() => {
                    setJournalDayOffset(0);
                    setJournalPage(1);
                  }}
                >
                  Today
                </button>
                <button
                  type="button"
                  className="journal-datebar__cal pressable"
                  aria-label="Pick date"
                  onClick={() => {
                    setJournalDayOffset(0);
                    setJournalPage(1);
                  }}
                >
                  <Calendar className="w-4 h-4" strokeWidth={2.2} />
                </button>
              </div>
            </div>
          </div>

          <div className="journal-list scroll-hide">
            {visibleJournalTasks.length === 0 ? (
              <div className="journal-empty">
                <BookOpen className="w-8 h-8" strokeWidth={1.8} />
                <div className="journal-empty__title">
                  {journalDayOffset === 0 ? 'No tasks for this view' : 'No journal entries'}
                </div>
                <p className="journal-empty__text">
                  {journalDayOffset === 0
                    ? 'Add a task to start tracking your day.'
                    : 'Jump back to Today to continue your active journal.'}
                </p>
              </div>
            ) : (
              <>
                {visibleJournalTasks.map((task) => {
                  const running = runningTaskId === task.id;
                  return (
                    <article
                      key={task.id}
                      className={`journal-card journal-card--${
                        task.status === 'done' ? 'green' : task.status === 'new' ? 'blue' : 'orange'
                      } is-collapsed`}
                    >
                      <div className="journal-card__rail" />
                      <div className="journal-card__body">
                        <div className="journal-card__header">
                          <div className="journal-card__lead" aria-hidden="true">
                            <span
                              className={`journal-card__status journal-card__status--${running ? 'active' : task.status}`}
                              title={running ? 'active' : task.status}
                            >
                              {task.status === 'done' && !running ? (
                                <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.2} />
                              ) : task.status === 'new' && !running ? (
                                <span className="journal-card__new-dot" />
                              ) : (
                                <Hourglass className="w-3 h-3" strokeWidth={2.2} />
                              )}
                            </span>
                          </div>

                          <span className="journal-card__sep" aria-hidden="true" />

                          <div className="journal-card__detail-row">
                            <div className="journal-card__main">
                              <h2 className="journal-card__title">{task.title}</h2>
                            </div>

                            {task.tab !== 'delegated' && (
                            <div
                              className={[
                                'journal-timer',
                                running ? 'is-running' : '',
                                task.status === 'done' ? 'is-locked' : '',
                              ].filter(Boolean).join(' ')}
                              onClick={(e) => e.stopPropagation()}
                              onKeyDown={(e) => e.stopPropagation()}
                            >
                              {running ? (
                                <>
                                  <span
                                    className="journal-timer__elapsed tabular-nums"
                                    aria-live="polite"
                                    aria-label={`Elapsed ${formatJournalElapsed(task.seconds)}`}
                                  >
                                    {formatJournalElapsed(task.seconds)}
                                  </span>
                                  <div className="journal-timer__controls">
                                    <button
                                      type="button"
                                      className="journal-timer__pause"
                                      onClick={pauseJournalTimer}
                                      aria-label="Pause timer"
                                      title="Pause"
                                    >
                                      <Pause className="w-3.5 h-3.5" strokeWidth={2.4} />
                                    </button>
                                    <button
                                      type="button"
                                      className="journal-timer__pause journal-timer__stop"
                                      onClick={() => stopJournalTimer(task.id)}
                                      aria-label="Stop and complete task"
                                      title="Stop"
                                    >
                                      <Square className="w-3.5 h-3.5" strokeWidth={2.4} />
                                    </button>
                                    <button
                                      type="button"
                                      className="journal-timer__pause journal-timer__cancel"
                                      onClick={() => resetJournalTimer(task.id)}
                                      aria-label="Cancel and reset timer"
                                      title="Cancel"
                                    >
                                      <X className="w-3.5 h-3.5" strokeWidth={2.4} />
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <input
                                    className="journal-timer__value tabular-nums"
                                    type="text"
                                    inputMode="decimal"
                                    aria-label={`Hours spent on ${task.title}`}
                                    value={
                                      journalTimeDrafts[task.id] !== undefined
                                        ? journalTimeDrafts[task.id]
                                        : formatJournalHours(task.seconds)
                                    }
                                    readOnly={task.status === 'done'}
                                    disabled={task.status === 'done'}
                                    onFocus={() => beginJournalTimeEdit(task)}
                                    onChange={(e) => changeJournalTimeDraft(task.id, e.target.value)}
                                    onBlur={() => commitJournalTimeDraft(task.id)}
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter') {
                                        e.currentTarget.blur();
                                      }
                                    }}
                                    placeholder="0 hr"
                                    title={
                                      task.status === 'done'
                                        ? 'Completed — time locked'
                                        : 'Enter hours spent (e.g. 1.5)'
                                    }
                                  />
                                  <div className="journal-timer__controls">
                                    <button
                                      type="button"
                                      className="journal-timer__play"
                                      onClick={() => startJournalTimer(task.id)}
                                      aria-label="Start timer"
                                      disabled={task.status === 'done'}
                                      title={
                                        task.status === 'done'
                                          ? 'Completed — timer locked'
                                          : 'Start clock'
                                      }
                                    >
                                      <Play className="w-3.5 h-3.5" strokeWidth={2.4} />
                                    </button>
                                  </div>
                                </>
                              )}
                            </div>
                            )}
                          </div>
                        </div>

                        <div className="journal-card__quickmeta">
                          <span className="journal-card__quickmeta-item">
                            <span className="journal-card__quickmeta-label">Client</span>
                            <span className="journal-card__quickmeta-value">{task.client}</span>
                          </span>
                          <span className="journal-card__quickmeta-item">
                            <span className="journal-card__quickmeta-label">Sales Ref</span>
                            <span className="journal-card__quickmeta-value">{task.salesRef}</span>
                          </span>
                          <span className="journal-card__quickmeta-item">
                            <span className="journal-card__quickmeta-label">Due</span>
                            <span className="journal-card__quickmeta-value">{task.due}</span>
                          </span>
                          {task.tab === 'delegated' && (
                            <span className="journal-card__quickmeta-item">
                              <span className="journal-card__quickmeta-label">Assignee</span>
                              <span className="journal-card__quickmeta-value">{task.assignee || task.assignedBy}</span>
                            </span>
                          )}
                        </div>

                        <div
                          className="journal-card__actions"
                          onClick={(e) => e.stopPropagation()}
                          onKeyDown={(e) => e.stopPropagation()}
                        >
                          {(() => {
                            const hasNote = Boolean(task.note && task.note.trim());
                            return (
                              <button
                                type="button"
                                className={`journal-card__action journal-card__note-btn ${hasNote ? 'has-note' : ''}`}
                                onClick={() => openNoteSheet(task.id)}
                                aria-label={hasNote ? `View note for ${task.title}` : `Add note for ${task.title}`}
                                title={hasNote ? 'View note' : 'Add note'}
                              >
                                <span className="journal-card__note-icon">
                                  {hasNote ? (
                                    <StickyNote className="w-3.5 h-3.5" strokeWidth={2.2} />
                                  ) : (
                                    <Plus className="w-3.5 h-3.5" strokeWidth={2.4} />
                                  )}
                                  {hasNote && <span className="journal-card__note-dot" aria-hidden="true" />}
                                </span>
                                <span>{hasNote ? 'Note' : 'Add Note'}</span>
                              </button>
                            );
                          })()}

                          <div className="journal-card__actions-right">
                            <button
                              type="button"
                              className="journal-card__action journal-card__action--icon-only"
                              onClick={() => openEditTask(task.id)}
                              aria-label={task.status === 'done' ? `View ${task.title}` : `Edit ${task.title}`}
                              title={task.status === 'done' ? 'View' : 'Edit'}
                            >
                              {task.status === 'done' ? (
                                <Eye className="w-3.5 h-3.5" strokeWidth={2.2} />
                              ) : (
                                <Pencil className="w-3.5 h-3.5" strokeWidth={2.2} />
                              )}
                            </button>
                            <button
                              type="button"
                              className="journal-card__action journal-card__action--icon-only journal-card__action--delete"
                              onClick={() => {
                                if (window.confirm(`Delete "${task.title}"? This can't be undone.`)) {
                                  deleteJournalTask(task.id);
                                }
                              }}
                              aria-label={`Delete ${task.title}`}
                              title="Delete"
                            >
                              <Trash2 className="w-3.5 h-3.5" strokeWidth={2.2} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}

                {filteredJournalTasks.length > JOURNAL_PAGE_SIZE && (
                  <div className="journal-pagination">
                    <button
                      type="button"
                      className="journal-pagination__btn pressable"
                      disabled={safeJournalPage <= 1}
                      onClick={() => setJournalPage((prev) => Math.max(1, prev - 1))}
                    >
                      <ChevronLeft className="w-4 h-4" strokeWidth={2.4} />
                      Prev
                    </button>
                    <div className="journal-pagination__meta">
                      <span className="journal-pagination__page">
                        Page {safeJournalPage} / {journalTotalPages}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="journal-pagination__btn pressable"
                      disabled={safeJournalPage >= journalTotalPages}
                      onClick={() => setJournalPage((prev) => Math.min(journalTotalPages, prev + 1))}
                    >
                      Next
                      <ChevronRight className="w-4 h-4" strokeWidth={2.4} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

        </div>
      ) : showOpportunities ? (
        <div className="leads-view fade-up">
          <div className="leads-view__top">
            <div className="journal-view__header">
              <button
                type="button"
                className="journal-view__icon-btn pressable"
                onClick={closeOpportunities}
                aria-label="Back to home"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.3} />
              </button>
              <div className="min-w-0 flex-1">
                <h1 className="journal-view__title">Opportunities</h1>
                <p className="journal-view__subtitle">
                  {filteredOpportunities.length === 1
                    ? '1 opportunity'
                    : `${filteredOpportunities.length} opportunities`}
                </p>
              </div>
              <button
                type="button"
                className="journal-view__add pressable"
                onClick={() => openAddModal('opportunity')}
              >
                <Plus className="w-3.5 h-3.5" strokeWidth={2.6} />
                Add New
              </button>
            </div>

            <label className="leads-search" htmlFor="opportunities-search-input">
              <Search className="leads-search__icon" strokeWidth={2.2} />
              <input
                id="opportunities-search-input"
                className="leads-search__input"
                type="search"
                placeholder="Search account, owner, status…"
                value={opportunitySearch}
                onChange={(e) => setOpportunitySearch(e.target.value)}
              />
            </label>
          </div>

          <div className="leads-list scroll-hide">
            {filteredOpportunities.length === 0 ? (
              <div className="journal-empty">
                <Target className="w-8 h-8" strokeWidth={1.8} />
                <div className="journal-empty__title">
                  {opportunityQuery ? 'No matching opportunities' : 'No opportunities yet'}
                </div>
                <p className="journal-empty__text">
                  {opportunityQuery
                    ? 'Try a different search term.'
                    : 'Tap Add New to create your first opportunity.'}
                </p>
              </div>
            ) : (
              filteredOpportunities.map((opp) => {
                const expanded = expandedOpportunityId === opp.id;
                const statusClass = String(opp.opportunityStatus || '')
                  .toLowerCase()
                  .replace(/\s+/g, '-');
                return (
                  <article
                    key={opp.id}
                    className={`lead-card ${expanded ? 'is-expanded' : ''}`}
                  >
                    <button
                      type="button"
                      className="lead-card__main pressable"
                      onClick={() => setExpandedOpportunityId(expanded ? null : opp.id)}
                      aria-expanded={expanded}
                    >
                      <div className="lead-card__avatar lead-card__avatar--opp" aria-hidden="true">
                        {(opp.accountName || '?').charAt(0).toUpperCase()}
                      </div>
                      <div className="lead-card__content min-w-0">
                        <div className="lead-card__row">
                          <h2 className="lead-card__title">{opp.accountName}</h2>
                          <span className={`lead-card__status lead-card__status--${statusClass}`}>
                            {opp.opportunityStatus}
                          </span>
                        </div>
                        <div className="lead-card__meta">
                          <Target className="w-3 h-3" strokeWidth={2.4} />
                          <span>{opp.probability}%</span>
                          <span className="lead-card__dot">·</span>
                          <span>{opp.opportunityOwner}</span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`lead-card__chevron ${expanded ? 'is-open' : ''}`}
                        strokeWidth={2.3}
                      />
                    </button>

                    {expanded && (
                      <div className="lead-card__details">
                        <div className="lead-card__detail-grid">
                          <div>
                            <div className="lead-card__label">Lead source</div>
                            <div className="lead-card__value">{opp.leadSource}</div>
                          </div>
                          <div>
                            <div className="lead-card__label">Type</div>
                            <div className="lead-card__value">{opp.oppType}</div>
                          </div>
                          <div>
                            <div className="lead-card__label">Created by</div>
                            <div className="lead-card__value">{opp.createdBy}</div>
                          </div>
                          <div>
                            <div className="lead-card__label">Created</div>
                            <div className="lead-card__value">{opp.createdAt}</div>
                          </div>
                          <div>
                            <div className="lead-card__label">Probability</div>
                            <div className="lead-card__value">{opp.probability}%</div>
                          </div>
                          <div>
                            <div className="lead-card__label">Owner</div>
                            <div className="lead-card__value">{opp.opportunityOwner}</div>
                          </div>
                        </div>
                        {opp.services?.length > 0 && (
                          <div className="lead-card__services">
                            <div className="lead-card__label">Services</div>
                            <div className="lead-card__chips">
                              {opp.services.map((service) => (
                                <span key={service} className="lead-card__chip">{service}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </article>
                );
              })
            )}
          </div>
        </div>
      ) : showLeads ? (
        <div className="leads-view fade-up">
          <div className="leads-view__top">
            <div className="journal-view__header">
              <button
                type="button"
                className="journal-view__icon-btn pressable"
                onClick={closeLeads}
                aria-label="Back to home"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.3} />
              </button>
              <div className="min-w-0 flex-1">
                <h1 className="journal-view__title">Leads</h1>
                <p className="journal-view__subtitle">
                  {filteredLeads.length} account{filteredLeads.length === 1 ? '' : 's'}
                </p>
              </div>
              <button
                type="button"
                className="journal-view__add pressable"
                onClick={() => openAddModal('lead')}
              >
                <Plus className="w-3.5 h-3.5" strokeWidth={2.6} />
                Add New
              </button>
            </div>

            <label className="leads-search" htmlFor="leads-search-input">
              <Search className="leads-search__icon" strokeWidth={2.2} />
              <input
                id="leads-search-input"
                className="leads-search__input"
                type="search"
                placeholder="Search account, owner, country…"
                value={leadSearch}
                onChange={(e) => setLeadSearch(e.target.value)}
              />
            </label>
          </div>

          <div className="leads-list scroll-hide">
            {filteredLeads.length === 0 ? (
              <div className="journal-empty">
                <Building2 className="w-8 h-8" strokeWidth={1.8} />
                <div className="journal-empty__title">
                  {leadQuery ? 'No matching leads' : 'No leads yet'}
                </div>
                <p className="journal-empty__text">
                  {leadQuery
                    ? 'Try a different search term.'
                    : 'Tap Add New to create your first account lead.'}
                </p>
              </div>
            ) : (
              filteredLeads.map((lead) => {
                const expanded = expandedLeadId === lead.id;
                return (
                  <article
                    key={lead.id}
                    className={`lead-card ${expanded ? 'is-expanded' : ''}`}
                  >
                    <button
                      type="button"
                      className="lead-card__main pressable"
                      onClick={() => setExpandedLeadId(expanded ? null : lead.id)}
                      aria-expanded={expanded}
                    >
                      <div className="lead-card__avatar" aria-hidden="true">
                        {(lead.accountName || '?').charAt(0).toUpperCase()}
                      </div>
                      <div className="lead-card__content min-w-0">
                        <div className="lead-card__row">
                          <h2 className="lead-card__title">{lead.accountName}</h2>
                          <span className={`lead-card__status lead-card__status--${lead.status}`}>
                            {lead.status}
                          </span>
                        </div>
                        <div className="lead-card__meta">
                          <MapPin className="w-3 h-3" strokeWidth={2.4} />
                          <span>{lead.locatedCountry}</span>
                          <span className="lead-card__dot">·</span>
                          <span>{lead.leadOwner}</span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`lead-card__chevron ${expanded ? 'is-open' : ''}`}
                        strokeWidth={2.3}
                      />
                    </button>

                    {expanded && (
                      <div className="lead-card__details">
                        <div className="lead-card__detail-grid">
                          <div>
                            <div className="lead-card__label">Created by</div>
                            <div className="lead-card__value">{lead.createdBy}</div>
                          </div>
                          <div>
                            <div className="lead-card__label">Created</div>
                            <div className="lead-card__value">{lead.createdAt}</div>
                          </div>
                          <div>
                            <div className="lead-card__label">Manage office</div>
                            <div className="lead-card__value">{lead.manageOffice}</div>
                          </div>
                          <div>
                            <div className="lead-card__label">Lead owner</div>
                            <div className="lead-card__value">{lead.leadOwner}</div>
                          </div>
                        </div>
                        {lead.services?.length > 0 && (
                          <div className="lead-card__services">
                            <div className="lead-card__label">Services</div>
                            <div className="lead-card__chips">
                              {lead.services.map((service) => (
                                <span key={service} className="lead-card__chip">{service}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </article>
                );
              })
            )}
          </div>
        </div>
      ) : showNotifications ? (
        <div className="notif-view fade-up">
          <div className="leads-view__top">
            <div className="journal-view__header">
              <button
                type="button"
                className="journal-view__icon-btn pressable"
                onClick={closeNotifications}
                aria-label="Back to home"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.3} />
              </button>
              <div className="min-w-0 flex-1">
                <h1 className="journal-view__title">Notifications</h1>
                <p className="journal-view__subtitle">
                  {unreadNotificationCount > 0
                    ? `${unreadNotificationCount} unread`
                    : 'All caught up'}
                </p>
              </div>
              {unreadNotificationCount > 0 ? (
                <button
                  type="button"
                  className="notif-view__mark-all pressable"
                  onClick={() => setNotificationsList((prev) => prev.map((n) => ({ ...n, unread: false })))}
                >
                  Mark all
                </button>
              ) : null}
            </div>
          </div>

          <div className="notif-view__scroll scroll-hide">
            {notificationsList.length === 0 ? (
              <div className="notif-view__empty">
                <Bell className="w-8 h-8" strokeWidth={1.8} />
                <p>No notifications</p>
                <span>New alerts will show up here.</span>
              </div>
            ) : (
              notificationsList.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`notif-card pressable ${item.unread ? 'is-unread' : ''}`}
                  onClick={() => markNotificationRead(item.id)}
                >
                  <div className="notif-card__icon" aria-hidden="true">
                    <Bell className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <div className="notif-card__body min-w-0">
                    <div className="notif-card__top">
                      <h2 className="notif-card__title">{item.title}</h2>
                      {item.unread ? <span className="notif-card__dot" aria-label="Unread" /> : null}
                      <span className="notif-card__time">{item.time}</span>
                    </div>
                    <p className="notif-card__meta">{item.body}</p>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      ) : showProfile ? (
        <div className="profile-view fade-up">
          <div className="profile-view__top">
            <div className="profile-view__header">
              <button
                type="button"
                className="journal-view__icon-btn pressable"
                onClick={closeProfile}
                aria-label="Back to home"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.3} />
              </button>
              <div className="min-w-0 flex-1">
                <h1 className="journal-view__title">My Profile</h1>
                <p className="journal-view__subtitle">Account & details</p>
              </div>
            </div>
          </div>

          <div className="profile-view__scroll scroll-hide">
            <div className="profile-view__hero">
              <button
                type="button"
                className="profile-view__avatar pressable"
                onClick={() => setProfilePhotoOpen(true)}
                aria-label="View profile photo"
              >
                <img src={profile} alt="Nisal Amarasekara" />
              </button>
              <h2 className="profile-view__name">
                Nisal Amarasekara <span aria-hidden="true">🇱🇰</span>
              </h2>
              <p className="profile-view__dept">IT Department</p>
              <p className="profile-view__roles">Contractor, Developer</p>
              <a className="profile-view__email" href="mailto:namarasekara@pcugroup.com">
                <Mail className="w-3.5 h-3.5" strokeWidth={2.2} aria-hidden="true" />
                namarasekara@pcugroup.com
              </a>
            </div>

            <div className="profile-view__card">
              <div className="profile-view__row">
                <span className="profile-view__label">Years in Control Union</span>
                <span className="profile-view__value">3 years 4 months</span>
              </div>
            </div>

            <div className="profile-view__card">
              <div className="profile-view__row">
                <span className="profile-view__label">Emergency Contact</span>
                <span className="profile-view__value">+94 77 123 4567</span>
              </div>
              <div className="profile-view__divider" />
              <div className="profile-view__row">
                <span className="profile-view__label">Highest Education</span>
                <span className="profile-view__value">BSc in IT</span>
              </div>
            </div>

            <button
              type="button"
              className="profile-view__logout pressable"
              onClick={onSignOut}
            >
              <LogOut className="w-4 h-4" strokeWidth={2.2} />
              Logout
            </button>
          </div>

          {profilePhotoOpen && (
            <div className="profile-photo-modal" role="dialog" aria-modal="true" aria-label="Profile photo">
              <button
                type="button"
                className="profile-photo-modal__backdrop"
                aria-label="Close photo"
                onClick={() => setProfilePhotoOpen(false)}
              />
              <div className="profile-photo-modal__sheet fade-up">
                <button
                  type="button"
                  className="profile-photo-modal__close pressable"
                  onClick={() => setProfilePhotoOpen(false)}
                  aria-label="Close photo"
                >
                  <X className="w-5 h-5" strokeWidth={2.3} />
                </button>
                <img src={profile} alt="Nisal Amarasekara" className="profile-photo-modal__img" />
              </div>
            </div>
          )}
        </div>
      ) : (
      <>
      <div className="home-topbar">
        <img
          src={darkMode ? logo : colorLogo}
          alt="SOE"
          className="home-brand-logo"
        />
        <div className="home-topbar__actions">
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            className="pressable theme-toggle"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <Sun className="w-4 h-4" strokeWidth={2.2} />
            ) : (
              <Moon className="w-4 h-4" strokeWidth={2.2} />
            )}
          </button>
          <button
            type="button"
            onClick={openProfile}
            className="pressable theme-toggle overflow-hidden"
            style={{ padding: 3 }}
            aria-label="Open profile"
          >
            <img
              src={profile}
              alt="Nisal"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 12,
                display: 'block',
              }}
            />
          </button>
        </div>
      </div>

      <div className="home-scroll scroll-hide">
        <div className="home-scroll__stack">
        <div className="home-greeting fade-up">
          {greeting},{' '}
          <span className="home-greeting__name">Nisal</span>
        </div>

        <div
          className="fade-up fade-up-delay-1 glass-strong relative overflow-hidden"
          style={{ borderRadius: 24, padding: 'clamp(16px, 2.4vh, 22px) clamp(16px, 4vw, 20px)' }}
        >
          <div
            className="absolute -top-16 -right-10 w-44 h-44 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(90,140,255,0.22), transparent 70%)' }}
          />
          <div
            className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(27,30,66,0.1), transparent 70%)' }}
          />

          <div className="relative flex items-center justify-between" style={{ marginBottom: 'clamp(12px, 2vh, 20px)' }}>
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'var(--muted)' }}>
                Attendance
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${clockedIn && !onLeave ? 'status-dot-live' : ''}`}
                  style={{
                    background: onLeave
                      ? '#e54848'
                      : clockedIn
                        ? '#2eb87a'
                        : '#A0A7B8',
                  }}
                />
                <span className="text-[15px] font-semibold" style={{ color: 'var(--ink)' }}>
                  {onLeave ? 'Not Working' : clockedIn ? 'Working' : 'Not Clocked In'}
                </span>
              </div>
              {clockedIn && !onLeave && (
                <div className="mt-2.5 inline-flex items-center gap-1.5 max-w-full">
                  <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--ink)' }} strokeWidth={2.2} />
                  <span className="text-[12px] font-medium truncate" style={{ color: 'var(--muted)' }}>
                    {workLocation}
                  </span>
                </div>
              )}
              {onLeave && (
                <div className="mt-2.5 text-[12px] font-medium" style={{ color: 'var(--muted)' }}>
                  On approved leave
                </div>
              )}
            </div>
            <div
              className="glass flex items-center justify-center"
              style={{ width: 42, height: 42, borderRadius: 14 }}
            >
              <Clock3 className="w-[18px] h-[18px] icon-bob" style={{ color: 'var(--ink)' }} strokeWidth={2.2} />
            </div>
          </div>

          <div className="relative text-center" style={{ marginBottom: 'clamp(12px, 2vh, 20px)' }}>
            <div
              className="tabular-nums tracking-tight font-semibold"
              style={{ fontSize: 'clamp(36px, 5.5dvh, 44px)', color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1 }}
            >
              {fmt(elapsed)}
            </div>
            <div className="mt-2 text-[13px] font-medium" style={{ color: 'var(--muted)' }}>
              {onLeave
                ? 'Session paused — on leave'
                : clockedIn
                  ? 'Live session timer'
                  : 'Ready when you are'}
            </div>
          </div>

          <button
            onClick={handleClockButton}
            className="pressable relative w-full text-white font-semibold text-[15px]"
            style={{
              height: 'clamp(46px, 6.2dvh, 52px)',
              borderRadius: 16,
              background: clockedIn
                ? 'linear-gradient(135deg, #3d4578 0%, #1b1e42 55%, #101228 100%)'
                : `linear-gradient(135deg, #3a6cff 0%, ${ACCENT} 70%)`,
              boxShadow: '0 12px 28px rgba(27, 30, 66, 0.28)',
            }}
          >
            {clockedIn ? 'Clock Out' : 'Clock In'}
          </button>

          <button
            type="button"
            onClick={() => setShowHistoryModal(true)}
            className="relative mt-3 w-full flex items-center justify-center gap-1.5 text-[13px] font-medium pressable"
            style={{ color: 'var(--muted)' }}
          >
            <History className="w-3.5 h-3.5" />
            View History
          </button>
        </div>

        <section className="workspace-section fade-up fade-up-delay-2">
          <div className="workspace-section__header">
            <div>
              <h2 className="text-[20px] font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>
                Workspace
              </h2>
              <p className="text-[12px] mt-1 font-medium" style={{ color: 'var(--muted)' }}>
                Everything you need today
              </p>
            </div>
            <button className="workspace-today-pill pressable" type="button" onClick={() => openAddModal('task')}>
              <Plus className="w-3.5 h-3.5" strokeWidth={2.6} />
              Add New
            </button>
          </div>

          <div className="fade-up fade-up-delay-3 workspace-grid">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              const isWide = feature.wide;
              const isSlideshow = feature.slideshow;

              if (isSlideshow) {
                return (
                  <div
                    key={feature.key}
                    className="workspace-card workspace-card--news text-left"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="workspace-card__icon">
                          <Icon className="w-[18px] h-[18px]" style={{ color: '#fff' }} strokeWidth={2.25} />
                        </div>
                        <div>
                          <div className="text-[14px] font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>
                            {feature.label}
                          </div>
                          <div className="text-[12px] mt-0.5 font-medium" style={{ color: 'var(--muted)' }}>
                            {feature.sub}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4" style={{ color: 'var(--muted)' }} strokeWidth={2.2} />
                    </div>
                    <NewsSlideshow />
                  </div>
                );
              }

              return (
                <button
                  key={feature.key}
                  type="button"
                  onClick={() => {
                    if (feature.key === 'journal') openJournal();
                    if (feature.key === 'calendar') openCalendar();
                    if (feature.key === 'wfh') openLeave();
                    if (feature.key === 'performance') openPerformance();
                  }}
                  className={[
                    'workspace-card pressable text-left',
                    isWide ? 'workspace-card--wide' : '',
                  ].filter(Boolean).join(' ')}
                >
                  <div className={`flex h-full ${isWide ? 'flex-row items-center gap-3.5' : 'flex-col justify-between gap-3'}`}>
                    <div className={`flex ${isWide ? 'items-center gap-3.5 flex-1 min-w-0' : 'flex-col gap-3'}`}>
                      <div className="workspace-card__icon">
                        <Icon
                          className="w-[18px] h-[18px]"
                          style={{ color: '#fff' }}
                          strokeWidth={2.25}
                        />
                      </div>
                      <div className="min-w-0">
                        <div
                          className="text-[14px] font-semibold tracking-tight"
                          style={{ color: 'var(--ink)' }}
                        >
                          {feature.label}
                        </div>
                        <div
                          className="text-[12px] mt-0.5 font-medium truncate"
                          style={{ color: 'var(--muted)' }}
                        >
                          {feature.events
                            ? `${feature.events[0].shortTitle || feature.events[0].title} · ${feature.events[0].time}`
                            : feature.sub}
                        </div>
                        {feature.preview && (
                          <div className="workspace-card__chip mt-3">
                            <span className="workspace-card__dot" />
                            <span className="truncate">{feature.preview}</span>
                            <ChevronRight className="w-3 h-3 shrink-0" strokeWidth={2.4} />
                          </div>
                        )}
                      </div>
                    </div>
                    {isWide && (
                      <div className="workspace-card__arrow">
                        <ChevronRight className="w-4 h-4" style={{ color: 'var(--ink)' }} strokeWidth={2.2} />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
        </div>
      </div>
      </>
      )}

      {!activeCalendarDoc && !showCalendar && !showPerformance && !showLeave && !showProfile && (
      <div className="home-bottom-nav">
        <div className="glass-strong home-bottom-nav__bar">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  if (item.key === 'journal') {
                    openJournal();
                    return;
                  }
                  if (item.key === 'leads') {
                    openLeads();
                    return;
                  }
                  if (item.key === 'opportunity') {
                    openOpportunities();
                    return;
                  }
                  if (item.key === 'notifications') {
                    openNotifications();
                    return;
                  }
                  if (item.key === 'home') {
                    setShowJournal(false);
                    setShowLeads(false);
                    setShowOpportunities(false);
                    setShowNotifications(false);
                    setShowCalendar(false);
                    setShowLeave(false);
                    setShowPerformance(false);
                    setShowProfile(false);
                    setProfilePhotoOpen(false);
                    setActiveCalendarDoc(null);
                  }
                  setActiveTab(item.key);
                }}
                className="nav-item flex flex-col items-center gap-1 flex-1"
              >
                <div
                  className="flex items-center justify-center transition-all duration-200 relative"
                  style={{
                    width: 40,
                    height: 32,
                    borderRadius: 12,
                    background: active ? 'rgba(27, 30, 66, 0.1)' : 'transparent',
                  }}
                >
                  <Icon
                    className="w-[20px] h-[20px]"
                    strokeWidth={active ? 2.4 : 2}
                    style={{ color: active ? 'var(--ink)' : 'var(--muted)' }}
                  />
                  {item.key === 'notifications' && unreadNotificationCount > 0 ? (
                    <span className="nav-item__badge" aria-hidden="true" />
                  ) : null}
                </div>
                <span
                  className="text-[10px] font-semibold"
                  style={{ color: active ? 'var(--ink)' : 'var(--muted)' }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      )}

      {noteTaskId && (
        <div className="clock-modal" role="dialog" aria-modal="true" aria-labelledby="task-note-title">
          <button
            type="button"
            className="clock-modal__backdrop"
            aria-label="Close"
            onClick={closeNoteSheet}
          />
          <div className="clock-modal__sheet fade-up">
            <div className="clock-modal__handle" />
            <div className="clock-modal__header">
              <div>
                <div id="task-note-title" className="clock-modal__title">Add Note</div>
                <div className="clock-modal__subtitle">
                  {journalTasks.find((task) => task.id === noteTaskId)?.title || 'Task'}
                </div>
              </div>
              <button
                type="button"
                className="clock-modal__close pressable"
                onClick={closeNoteSheet}
                aria-label="Close popup"
              >
                <X className="w-4 h-4" strokeWidth={2.3} />
              </button>
            </div>

            <div className="clock-modal__field">
              <label className="clock-modal__label" htmlFor="task-note-input">
                Note
              </label>
              <textarea
                id="task-note-input"
                className="add-form__input add-form__textarea task-note-textarea"
                rows={8}
                placeholder="Add a note for this task..."
                value={noteDraft}
                onChange={(e) => setNoteDraft(e.target.value)}
                autoFocus
              />
            </div>

            <button
              type="button"
              className="clock-modal__confirm pressable"
              onClick={saveNoteSheet}
            >
              Save Note
            </button>
          </div>
        </div>
      )}

      {showClockInModal && (
        <div className="clock-modal" role="dialog" aria-modal="true" aria-labelledby="clock-in-title">
          <button
            type="button"
            className="clock-modal__backdrop"
            aria-label="Close"
            onClick={() => setShowClockInModal(false)}
          />
          <div className="clock-modal__sheet fade-up">
            <div className="clock-modal__handle" />
            <div className="clock-modal__header">
              <div>
                <div id="clock-in-title" className="clock-modal__title">Clock In</div>
                <div className="clock-modal__subtitle">Confirm your attendance details</div>
              </div>
              <button
                type="button"
                className="clock-modal__close pressable"
                onClick={() => setShowClockInModal(false)}
                aria-label="Close popup"
              >
                <X className="w-4 h-4" strokeWidth={2.3} />
              </button>
            </div>

            <div className="clock-modal__field">
              <label className="clock-modal__label" htmlFor="work-location">
                Work location
              </label>
              <div className="clock-modal__input-wrap">
                <MapPin className="w-4 h-4 clock-modal__input-icon" strokeWidth={2.2} />
                <select
                  id="work-location"
                  className="clock-modal__select"
                  value={workLocation}
                  onChange={(e) => setWorkLocation(e.target.value)}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="clock-modal__grid">
              <div className="clock-modal__field">
                <label className="clock-modal__label" htmlFor="clock-date">Date</label>
                <input
                  id="clock-date"
                  type="date"
                  className="clock-modal__datetime"
                  value={clockDate}
                  onChange={(e) => setClockDate(e.target.value)}
                />
              </div>
              <div className="clock-modal__field">
                <label className="clock-modal__label" htmlFor="clock-time">Time</label>
                <input
                  id="clock-time"
                  type="time"
                  className="clock-modal__datetime"
                  value={clockTime}
                  onChange={(e) => setClockTime(e.target.value)}
                />
              </div>
            </div>

            <button
              type="button"
              className="clock-modal__confirm pressable"
              onClick={confirmClockIn}
            >
              Confirm Clock In
            </button>
          </div>
        </div>
      )}

      {showClockOutModal && (
        <div className="clock-modal" role="dialog" aria-modal="true" aria-labelledby="clock-out-title">
          <button
            type="button"
            className="clock-modal__backdrop"
            aria-label="Close"
            onClick={() => setShowClockOutModal(false)}
          />
          <div className="clock-modal__sheet fade-up">
            <div className="clock-modal__handle" />
            <div className="clock-modal__header">
              <div>
                <div id="clock-out-title" className="clock-modal__title">Clock Out</div>
                <div className="clock-modal__subtitle">Confirm your attendance details</div>
              </div>
              <button
                type="button"
                className="clock-modal__close pressable"
                onClick={() => setShowClockOutModal(false)}
                aria-label="Close popup"
              >
                <X className="w-4 h-4" strokeWidth={2.3} />
              </button>
            </div>

            <div className="clock-modal__field">
              <label className="clock-modal__label" htmlFor="work-location-out">
                Work location
              </label>
              <div className="clock-modal__input-wrap">
                <MapPin className="w-4 h-4 clock-modal__input-icon" strokeWidth={2.2} />
                <select
                  id="work-location-out"
                  className="clock-modal__select"
                  value={workLocation}
                  onChange={(e) => setWorkLocation(e.target.value)}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="clock-modal__grid">
              <div className="clock-modal__field">
                <label className="clock-modal__label" htmlFor="clock-date-out">Date</label>
                <input
                  id="clock-date-out"
                  type="date"
                  className="clock-modal__datetime"
                  value={clockDate}
                  onChange={(e) => setClockDate(e.target.value)}
                />
              </div>
              <div className="clock-modal__field">
                <label className="clock-modal__label" htmlFor="clock-time-out">Time</label>
                <input
                  id="clock-time-out"
                  type="time"
                  className="clock-modal__datetime"
                  value={clockTime}
                  onChange={(e) => setClockTime(e.target.value)}
                />
              </div>
            </div>

            <div className="clock-modal__field">
              <span className="clock-modal__label">Time worked today</span>
              <div className="clock-modal__readout tabular-nums">{fmt(elapsed)}</div>
            </div>

            <button
              type="button"
              className="clock-modal__confirm pressable"
              onClick={confirmClockOut}
            >
              Confirm Clock Out
            </button>
          </div>
        </div>
      )}

      {showRequestModal && (
        <div
          className={`clock-modal ${requestType === 'leave' ? 'leave-drawer' : 'wfh-drawer'}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="request-modal-title"
        >
          <button
            type="button"
            className="clock-modal__backdrop"
            aria-label="Close"
            onClick={closeRequestModal}
          />
          <div className={`clock-modal__sheet wfh-drawer__sheet fade-up ${requestType === 'leave' ? 'leave-drawer__sheet' : ''}`}>
            <div className="clock-modal__handle" />
            <div className="wfh-drawer__header">
              <div className="min-w-0">
                <div id="request-modal-title" className="clock-modal__title">
                  {!requestType
                    ? 'New Request'
                    : requestType === 'wfh'
                      ? 'WFH Request'
                      : 'Leave Request'}
                </div>
                {!requestType ? (
                  <div className="clock-modal__subtitle">Choose a request type to continue</div>
                ) : (
                  <button
                    type="button"
                    className="request-type-picker__change pressable"
                    onClick={() => setRequestType('')}
                  >
                    Change request type
                  </button>
                )}
              </div>
              <button
                type="button"
                className="clock-modal__close pressable"
                onClick={closeRequestModal}
                aria-label="Close request"
              >
                <X className="w-4 h-4" strokeWidth={2.3} />
              </button>
            </div>

            <div className="wfh-drawer__body scroll-hide">
              <div className="wfh-drawer__panel">
                {!requestType ? (
                  <>
                    <section className="request-type-picker" aria-label="Request type">
                      <div className="wfh-drawer__label">Request type</div>
                      <div className="request-type-picker__options" role="radiogroup" aria-label="Request type">
                        <button
                          type="button"
                          role="radio"
                          aria-checked={false}
                          className="request-type-picker__option pressable"
                          onClick={() => selectRequestType('wfh')}
                        >
                          <span className="request-type-picker__icon" aria-hidden="true">
                            <House className="w-4 h-4" strokeWidth={2.2} />
                          </span>
                          <span className="request-type-picker__copy">
                            <strong>Work From Home</strong>
                            <span>Schedule remote work days</span>
                          </span>
                        </button>
                        <button
                          type="button"
                          role="radio"
                          aria-checked={false}
                          className="request-type-picker__option pressable"
                          onClick={() => selectRequestType('leave')}
                        >
                          <span className="request-type-picker__icon" aria-hidden="true">
                            <Calendar className="w-4 h-4" strokeWidth={2.2} />
                          </span>
                          <span className="request-type-picker__copy">
                            <strong>Leave</strong>
                            <span>Apply annual, casual, or sick leave</span>
                          </span>
                        </button>
                      </div>
                    </section>

                    <div className="request-type-picker__hint">
                      Select Work From Home or Leave to load the matching form.
                    </div>
                  </>
                ) : null}

                {requestType === 'wfh' ? (
                  <>
                    <section className="wfh-drawer__card">
                      <div className="wfh-drawer__card-head">
                        <h3 className="wfh-drawer__card-title">Manager</h3>
                      </div>
                      <div className="wfh-drawer__manager">
                        <span className="wfh-drawer__avatar" aria-hidden="true">
                          <User className="w-4 h-4" strokeWidth={2.1} />
                        </span>
                        <div className="min-w-0">
                          <div className="wfh-drawer__manager-name">{wfhReportsTo}</div>
                          <div className="wfh-drawer__manager-meta">Approving manager</div>
                        </div>
                      </div>
                    </section>

                    <div className="wfh-drawer__days-head">
                      <h3 className="wfh-drawer__card-title">Scheduled days</h3>
                      <span className="wfh-drawer__hint">Tap a day to expand</span>
                    </div>

                    <div className="wfh-drawer__accordion">
                      {wfhFormRows.map((row, index) => {
                        const expanded = expandedWfhRowId === row.id;
                        const complete = Boolean(row.date && row.mode);
                        return (
                          <article
                            key={row.id}
                            className={`wfh-drawer__day ${expanded ? 'is-expanded' : ''} ${complete ? 'is-complete' : ''}`}
                          >
                            <button
                              type="button"
                              className="wfh-drawer__day-toggle"
                              onClick={() => toggleWfhRow(row.id)}
                              aria-expanded={expanded}
                            >
                              <span className="wfh-drawer__day-index">{index + 1}</span>
                              <span className="wfh-drawer__day-summary min-w-0">
                                <span className="wfh-drawer__day-title truncate">
                                  {formatScheduleDate(row.date)}
                                </span>
                                <span className="wfh-drawer__day-meta truncate">
                                  Work From Home · {row.mode || 'Mode not set'}
                                </span>
                              </span>
                              <ChevronDown
                                className={`wfh-drawer__chevron ${expanded ? 'is-open' : ''}`}
                                strokeWidth={2.3}
                              />
                            </button>

                            {expanded && (
                              <div className="wfh-drawer__day-body">
                                <div className="wfh-drawer__field">
                                  <label className="wfh-drawer__label" htmlFor={`wfh-date-${row.id}`}>
                                    Date
                                  </label>
                                  <div className="wfh-drawer__date-wrap">
                                    <input
                                      id={`wfh-date-${row.id}`}
                                      type="date"
                                      className="wfh-drawer__input wfh-drawer__date"
                                      value={row.date}
                                      onChange={(e) => updateWfhFormRow(row.id, 'date', e.target.value)}
                                    />
                                    <span className="wfh-drawer__date-icon" aria-hidden="true">
                                      <Calendar className="w-4 h-4" strokeWidth={2.1} />
                                    </span>
                                  </div>
                                </div>

                                <div className="wfh-drawer__field">
                                  <span className="wfh-drawer__label">Type</span>
                                  <div className="wfh-drawer__type">
                                    <House className="w-4 h-4 shrink-0" strokeWidth={2.1} />
                                    Work From Home
                                  </div>
                                </div>

                                <div className="wfh-drawer__field">
                                  <span className="wfh-drawer__label">Mode</span>
                                  <div
                                    className="wfh-drawer__modes"
                                    role="group"
                                    aria-label={`Mode for day ${index + 1}`}
                                  >
                                    {wfhModeOptions.map((mode) => {
                                      const selected = row.mode === mode;
                                      return (
                                        <button
                                          key={mode}
                                          type="button"
                                          className={`wfh-drawer__mode ${selected ? 'is-selected' : ''}`}
                                          aria-pressed={selected}
                                          onMouseDown={(e) => e.preventDefault()}
                                          onClick={() => updateWfhFormRow(row.id, 'mode', mode)}
                                        >
                                          {mode}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>

                                {wfhFormRows.length > 1 && (
                                  <button
                                    type="button"
                                    className="wfh-drawer__remove pressable"
                                    onClick={() => removeWfhFormRow(row.id)}
                                  >
                                    <Trash2 className="w-4 h-4" strokeWidth={2.1} />
                                    Remove day
                                  </button>
                                )}
                              </div>
                            )}
                          </article>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      className="wfh-drawer__add pressable"
                      onClick={addWfhFormRow}
                    >
                      <Plus className="w-4 h-4" strokeWidth={2.4} />
                      Add another day
                    </button>
                  </>
                ) : null}

                {requestType === 'leave' ? (
                  <>
                    <div className="leave-drawer__balances">
                      {leaveBalances.map((balance) => {
                        const remaining = balance.total - balance.used;
                        return (
                          <div key={balance.key} className="leave-drawer__balance-card">
                            <div className="leave-drawer__balance-label">{balance.label}</div>
                            <div className="leave-drawer__balance-value">
                              Remaining: <span>{Number(remaining.toFixed(1))}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <section className="wfh-drawer__card leave-drawer__form-card">
                      <div className="wfh-drawer__field">
                        <label className="wfh-drawer__label" htmlFor="leave-reason">
                          Reason for Leave
                        </label>
                        <textarea
                          id="leave-reason"
                          className="leave-drawer__textarea"
                          placeholder="Enter Reason for leave"
                          rows={3}
                          value={leaveForm.reason}
                          onChange={(e) => {
                            setLeaveFormError('');
                            updateLeaveForm('reason', e.target.value);
                          }}
                        />
                      </div>

                      <div className="wfh-drawer__field">
                        <label className="wfh-drawer__label" htmlFor="leave-acting">
                          Acting Arrangement
                        </label>
                        <input
                          id="leave-acting"
                          type="text"
                          className="wfh-drawer__input"
                          placeholder="Enter Acting Arrangement"
                          value={leaveForm.actingArrangement}
                          onChange={(e) => updateLeaveForm('actingArrangement', e.target.value)}
                        />
                      </div>

                      <div className="wfh-drawer__field">
                        <label className="wfh-drawer__label" htmlFor="leave-reports-to">
                          Reports To
                        </label>
                        <input
                          id="leave-reports-to"
                          type="text"
                          className="wfh-drawer__input leave-drawer__readonly"
                          value={leaveReportsTo}
                          readOnly
                          tabIndex={-1}
                        />
                      </div>
                    </section>

                    <div className="wfh-drawer__days-head">
                      <h3 className="wfh-drawer__card-title">Leave schedule</h3>
                      <button
                        type="button"
                        className="leave-drawer__add pressable"
                        onClick={addLeaveFormRow}
                        aria-label="Add Leave"
                        title="Add Leave"
                      >
                        <Plus className="w-4 h-4" strokeWidth={2.6} />
                      </button>
                    </div>

                    <div className="wfh-drawer__accordion">
                      {leaveFormRows.map((row, index) => {
                        const expanded = expandedLeaveRowId === row.id;
                        const complete = Boolean(row.date && row.type && row.mode);
                        return (
                          <article
                            key={row.id}
                            className={`wfh-drawer__day ${expanded ? 'is-expanded' : ''} ${complete ? 'is-complete' : ''}`}
                          >
                            <div className="leave-drawer__day-bar">
                              <button
                                type="button"
                                className="wfh-drawer__day-toggle"
                                onClick={() => toggleLeaveRow(row.id)}
                                aria-expanded={expanded}
                              >
                                <span className="wfh-drawer__day-index">{index + 1}</span>
                                <span className="wfh-drawer__day-summary min-w-0">
                                  <span className="wfh-drawer__day-title truncate">
                                    {formatScheduleDate(row.date)}
                                  </span>
                                  <span className="wfh-drawer__day-meta truncate">
                                    {row.type || 'Type not set'} · {row.mode || 'Mode not set'}
                                  </span>
                                </span>
                                <ChevronDown
                                  className={`wfh-drawer__chevron ${expanded ? 'is-open' : ''}`}
                                  strokeWidth={2.3}
                                />
                              </button>
                              {leaveFormRows.length > 1 && (
                                <button
                                  type="button"
                                  className="leave-drawer__row-trash pressable"
                                  aria-label={`Remove leave day ${index + 1}`}
                                  onClick={() => removeLeaveFormRow(row.id)}
                                >
                                  <Trash2 className="w-4 h-4" strokeWidth={2.1} />
                                </button>
                              )}
                            </div>

                            {expanded && (
                              <div className="wfh-drawer__day-body">
                                <div className="wfh-drawer__field">
                                  <label className="wfh-drawer__label" htmlFor={`leave-date-${row.id}`}>
                                    Date
                                  </label>
                                  <div className="wfh-drawer__date-wrap">
                                    <input
                                      id={`leave-date-${row.id}`}
                                      type="date"
                                      className="wfh-drawer__input wfh-drawer__date"
                                      value={row.date}
                                      onChange={(e) => updateLeaveFormRow(row.id, 'date', e.target.value)}
                                    />
                                    <span className="wfh-drawer__date-icon" aria-hidden="true">
                                      <Calendar className="w-4 h-4" strokeWidth={2.1} />
                                    </span>
                                  </div>
                                </div>

                                <div className="wfh-drawer__field">
                                  <label className="wfh-drawer__label" htmlFor={`leave-type-${row.id}`}>
                                    Type
                                  </label>
                                  <select
                                    id={`leave-type-${row.id}`}
                                    className="wfh-drawer__input leave-drawer__select"
                                    value={row.type}
                                    onChange={(e) => updateLeaveFormRow(row.id, 'type', e.target.value)}
                                  >
                                    <option value="">Select type</option>
                                    {leaveTypeOptions.map((type) => (
                                      <option key={type} value={type}>{type}</option>
                                    ))}
                                  </select>
                                </div>

                                <div className="wfh-drawer__field">
                                  <span className="wfh-drawer__label">Mode</span>
                                  <div
                                    className="wfh-drawer__modes"
                                    role="group"
                                    aria-label={`Mode for leave day ${index + 1}`}
                                  >
                                    {leaveModeOptions.map((mode) => {
                                      const selected = row.mode === mode;
                                      return (
                                        <button
                                          key={mode}
                                          type="button"
                                          className={`wfh-drawer__mode ${selected ? 'is-selected' : ''}`}
                                          aria-pressed={selected}
                                          onMouseDown={(e) => e.preventDefault()}
                                          onClick={() => updateLeaveFormRow(row.id, 'mode', mode)}
                                        >
                                          {mode}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            )}
                          </article>
                        );
                      })}
                    </div>
                  </>
                ) : null}
              </div>
            </div>

            {requestType ? (
              <div className="wfh-drawer__footer">
                {requestType === 'leave' && leaveFormError ? (
                  <div className="leave-drawer__error" role="alert">
                    {leaveFormError}
                  </div>
                ) : null}
                <button
                  type="button"
                  className="wfh-drawer__save pressable"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (requestType === 'wfh') {
                      saveWfhRequest();
                      return;
                    }
                    saveLeaveRequest();
                  }}
                >
                  Save
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}


      {showHistoryModal && (
        <div className="clock-modal" role="dialog" aria-modal="true" aria-labelledby="history-title">
          <button
            type="button"
            className="clock-modal__backdrop"
            aria-label="Close"
            onClick={() => setShowHistoryModal(false)}
          />
          <div className="clock-modal__sheet clock-modal__sheet--history fade-up">
            <div className="clock-modal__handle" />
            <div className="clock-modal__header">
              <div>
                <div id="history-title" className="clock-modal__title">Attendance History</div>
                <div className="clock-modal__subtitle">
                  {historyGroups.length} day{historyGroups.length === 1 ? '' : 's'} in July
                </div>
              </div>
              <button
                type="button"
                className="clock-modal__close pressable"
                onClick={() => setShowHistoryModal(false)}
                aria-label="Close history"
              >
                <X className="w-4 h-4" strokeWidth={2.3} />
              </button>
            </div>

            <div className="history-list">
              {historyGroups.length === 0 ? (
                <div className="history-empty">No attendance records yet.</div>
              ) : (
                historyGroups.map((group) => (
                  <div key={group.date} className="history-day-card">
                    <div className="history-day-card__header">
                      <div className="history-day-card__left">
                        <span className="history-day-card__date">{formatHistoryDate(group.date)}</span>
                        <span className="history-day-card__sep">·</span>
                        <span className="history-day-card__location truncate">
                          <MapPin className="w-3 h-3 shrink-0" strokeWidth={2.2} />
                          {group.location}
                        </span>
                      </div>
                      {group.clockOut?.duration && (
                        <div className="history-day-card__duration">{group.clockOut.duration}</div>
                      )}
                    </div>

                    <div className="history-day-card__times">
                      <div className="history-day-card__time-block">
                        <LogIn className="w-3.5 h-3.5 shrink-0" strokeWidth={2.2} />
                        <span className="history-day-card__label">In</span>
                        <span className="history-day-card__value tabular-nums">
                          {group.clockIn?.time || '--:--'}
                        </span>
                      </div>
                      <div className="history-day-card__divider" />
                      <div className="history-day-card__time-block">
                        <LogOut className="w-3.5 h-3.5 shrink-0" strokeWidth={2.2} />
                        <span className="history-day-card__label">Out</span>
                        <span className="history-day-card__value tabular-nums">
                          {group.clockOut?.time || '--:--'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="clock-modal" role="dialog" aria-modal="true" aria-labelledby="add-new-title">
          <button
            type="button"
            className="clock-modal__backdrop"
            aria-label="Close"
            onClick={closeAddModal}
          />
          <div className="clock-modal__sheet clock-modal__sheet--add fade-up">
            <div className="clock-modal__handle" />
            <div className="clock-modal__header">
              <div>
                <div id="add-new-title" className="clock-modal__title">
                  {addType === 'task'
                    ? (editingTaskId ? (isTaskReadOnly ? 'View Task' : 'Edit Task') : 'Add New Task')
                    : 'Add New'}
                </div>
                <div className="clock-modal__subtitle">
                  {addType === 'task'
                    ? `Step ${taskWizardStep} of ${TASK_WIZARD_STEPS.length}`
                    : 'Choose what you want to create'}
                </div>
              </div>
              <button
                type="button"
                className="clock-modal__close pressable"
                onClick={closeAddModal}
                aria-label="Close add new"
              >
                <X className="w-4 h-4" strokeWidth={2.3} />
              </button>
            </div>

            {!editingTaskId && (
            <div className="add-type-options" role="radiogroup" aria-label="Record type">
              {(['task', 'lead', 'opportunity']).map((type) => {
                const meta = addTypeMeta[type];
                const Icon = meta.icon;
                const selected = addType === type;
                return (
                  <label
                    key={type}
                    className={`add-type-option ${selected ? 'is-selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="add-type"
                      value={type}
                      checked={selected}
                      onChange={() => handleAddTypeChange(type)}
                    />
                    <span className="add-type-option__icon">
                      <Icon className="w-4 h-4" strokeWidth={2.2} />
                    </span>
                    <span className="add-type-option__label">{meta.label}</span>
                  </label>
                );
              })}
            </div>
            )}

            {addType === 'task' && (
              <div className="task-stepper" aria-label="Create task steps">
                {TASK_WIZARD_STEPS.map((step, index) => {
                  const isActive = taskWizardStep === step.id;
                  const isDone = taskWizardStep > step.id;
                  return (
                    <div key={step.id} className={`task-stepper__item ${isActive ? 'is-active' : ''}`}>
                      {index > 0 && (
                        <span className={`task-stepper__line ${isDone || isActive ? 'is-active' : ''}`} />
                      )}
                      <button
                        type="button"
                        className={`task-stepper__node ${isActive ? 'is-active' : ''} ${isDone ? 'is-done' : ''}`}
                        onClick={() => {
                          if (isTaskReadOnly || step.id <= taskWizardStep) setTaskWizardStep(step.id);
                        }}
                        aria-current={isActive ? 'step' : undefined}
                      >
                        <span className="task-stepper__circle">
                          {isDone ? <Pencil className="w-3.5 h-3.5" strokeWidth={2.3} /> : step.id}
                        </span>
                        <span className="task-stepper__label">{step.label}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="add-form">
              {addType !== 'task' && (
                <div className="add-form__heading">{addTypeMeta[addType]?.title}</div>
              )}

              {addType === 'task' && taskWizardStep === 1 && (
                <fieldset className="task-form" disabled={isTaskReadOnly}>
                  <div className="task-form__row">
                    <label className="task-form__label" htmlFor="task-assign-date">
                      Assign Date <span className="required-star">*</span>
                    </label>
                    <input
                      id="task-assign-date"
                      type="date"
                      className="task-form__control"
                      value={addForm.assignDate}
                      onChange={(e) => updateAddForm('assignDate', e.target.value)}
                      required
                    />
                  </div>

                  <div className="task-form__row">
                    <span className="task-form__label">
                      Inquiry Type <span className="required-star">*</span>
                    </span>
                    <div className="task-form__radios" role="radiogroup" aria-label="Inquiry type">
                      {['INQUIRY', 'COMPLAINT'].map((type) => (
                        <label
                          key={type}
                          className={`task-form__radio ${addForm.inquiryType === type ? 'is-selected' : ''}`}
                        >
                          <input
                            type="radio"
                            name="inquiry-type"
                            checked={addForm.inquiryType === type}
                            onChange={() => updateAddForm('inquiryType', type)}
                          />
                          <span>{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="task-form__row">
                    <span className="task-form__label">
                      Activity <span className="required-star">*</span>
                    </span>
                    <div className="task-form__radios task-form__radios--activity" role="radiogroup" aria-label="Activity">
                      {['Testing', 'Inspection', 'Certification', 'Academy', 'Supportive / Other'].map((activity) => (
                        <label
                          key={activity}
                          className={`task-form__radio ${addForm.activity === activity ? 'is-selected' : ''}`}
                        >
                          <input
                            type="radio"
                            name="task-activity"
                            checked={addForm.activity === activity}
                            onChange={() => updateAddForm('activity', activity)}
                          />
                          <span>{activity}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="task-form__row">
                    <label className="task-form__label" htmlFor="task-category">
                      Category <span className="required-star">*</span>
                    </label>
                    <select
                      id="task-category"
                      className="task-form__control"
                      value={addForm.category}
                      onChange={(e) => updateAddForm('category', e.target.value)}
                      required
                    >
                      <option value="">Select category</option>
                      <option>Textile</option>
                      <option>Food</option>
                      <option>Agriculture</option>
                      <option>Industrial</option>
                      <option>Consumer Goods</option>
                    </select>
                  </div>

                  <div className="task-form__row">
                    <label className="task-form__label" htmlFor="task-client">
                      Client <span className="required-star">*</span>
                    </label>
                    <input
                      id="task-client"
                      className="task-form__control"
                      placeholder="Enter client name"
                      value={addForm.client}
                      onChange={(e) => updateAddForm('client', e.target.value)}
                      required
                    />
                  </div>

                  <div className="task-form__row">
                    <label className="task-form__label" htmlFor="task-sales-ref">
                      Sales Ref <span className="required-star">*</span>
                    </label>
                    <select
                      id="task-sales-ref"
                      className="task-form__control"
                      value={addForm.salesRef}
                      onChange={(e) => updateAddForm('salesRef', e.target.value)}
                      required
                    >
                      <option value="">Select sales ref</option>
                      <option>SOE V2</option>
                      <option>TerRaX</option>
                      <option>SustainScan</option>
                      {addForm.salesRef && !['SOE V2', 'TerRaX', 'SustainScan'].includes(addForm.salesRef) && (
                        <option value={addForm.salesRef}>{addForm.salesRef}</option>
                      )}
                    </select>
                  </div>

                  <div className="task-form__row">
                    <label className="task-form__label" htmlFor="task-group">
                      Task Group <span className="required-star">*</span>
                    </label>
                    <select
                      id="task-group"
                      className="task-form__control"
                      value={addForm.taskGroup}
                      onChange={(e) => updateAddForm('taskGroup', e.target.value)}
                      required
                    >
                      <option value="">Select task group</option>
                      <option>Contracting</option>
                      <option>Operations</option>
                      <option>Follow-up</option>
                      <option>Internal</option>
                    </select>
                  </div>

                  <div className="task-form__row">
                    <label className="task-form__label" htmlFor="task-title">
                      Task <span className="required-star">*</span>
                    </label>
                    <select
                      id="task-title"
                      className="task-form__control"
                      value={addForm.title}
                      onChange={(e) => updateAddForm('title', e.target.value)}
                      required
                    >
                      <option value="">Select task</option>
                      {TASK_TITLE_OPTIONS.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                      {addForm.title && !TASK_TITLE_OPTIONS.includes(addForm.title) && (
                        <option value={addForm.title}>{addForm.title}</option>
                      )}
                    </select>
                  </div>

                  <div className="task-form__row">
                    <label className="task-form__label" htmlFor="task-desc">Description</label>
                    <textarea
                      id="task-desc"
                      className="task-form__control task-form__textarea"
                      rows={3}
                      placeholder="Enter Description"
                      value={addForm.description}
                      onChange={(e) => updateAddForm('description', e.target.value)}
                    />
                  </div>

                  <div className="task-form__row">
                    <label className="task-form__label" htmlFor="task-assign-to">
                      Assign To <span className="required-star">*</span>
                    </label>
                    <div className="task-form__with-action">
                      <input
                        id="task-assign-to"
                        className="task-form__control"
                        placeholder="Search or type name"
                        value={assigneeQuery}
                        onChange={(e) => setAssigneeQuery(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            addAssigneeFromQuery();
                          }
                        }}
                      />
                      <button
                        type="button"
                        className="task-form__action-btn"
                        aria-label="Add assignee"
                        onClick={addAssigneeFromQuery}
                      >
                        <UserPlus className="w-4 h-4" strokeWidth={2.2} />
                      </button>
                    </div>
                    {addForm.assignTo ? (
                      <div className="task-form__chips">
                        <span className="task-form__chip">
                          {addForm.assignTo}
                          <button
                            type="button"
                            className="task-form__chip-remove"
                            aria-label={`Remove ${addForm.assignTo}`}
                            onClick={() => updateAddForm('assignTo', '')}
                          >
                            <X className="w-3 h-3" strokeWidth={2.4} />
                          </button>
                        </span>
                      </div>
                    ) : null}
                  </div>

                  <div className="task-form__row">
                    <label className="task-form__label" htmlFor="task-department">
                      Department
                    </label>
                    <div className="task-form__with-action">
                      <select
                        id="task-department"
                        className="task-form__control"
                        value={addForm.department}
                        onChange={(e) => updateAddForm('department', e.target.value)}
                      >
                        <option>IT</option>
                        <option>Sales</option>
                        <option>Operations</option>
                        <option>Certification</option>
                        <option>HR</option>
                      </select>
                      <button type="button" className="task-form__action-btn" aria-label="Department lookup">
                        <Globe className="w-4 h-4" strokeWidth={2.2} />
                      </button>
                    </div>
                  </div>
                </fieldset>
              )}

              {addType === 'task' && taskWizardStep === 2 && (
                <fieldset className="task-form" disabled={isTaskReadOnly}>
                  <div className="task-form__row">
                    <label className="task-form__label" htmlFor="application-received-date">
                      Application Received Date / Last Follows Up Date{' '}
                      <span className="required-star">*</span>
                    </label>
                    <input
                      id="application-received-date"
                      type="date"
                      className="task-form__control"
                      value={addForm.applicationReceivedDate}
                      onChange={(e) => updateAddForm('applicationReceivedDate', e.target.value)}
                      required
                    />
                  </div>
                  <div className="task-form__row">
                    <label className="task-form__label" htmlFor="ar-completed-date">
                      Ar Completed / Approved Date <span className="required-star">*</span>
                    </label>
                    <input
                      id="ar-completed-date"
                      type="date"
                      className="task-form__control"
                      value={addForm.arCompletedDate}
                      onChange={(e) => updateAddForm('arCompletedDate', e.target.value)}
                      required
                    />
                  </div>
                  <div className="task-form__row">
                    <label className="task-form__label" htmlFor="ar-approval-requested-date">
                      Ar Approval Requested Date
                    </label>
                    <input
                      id="ar-approval-requested-date"
                      type="date"
                      className="task-form__control"
                      value={addForm.arApprovalRequestedDate}
                      onChange={(e) => updateAddForm('arApprovalRequestedDate', e.target.value)}
                    />
                  </div>
                  <div className="task-form__row">
                    <label className="task-form__label" htmlFor="property-remarks">
                      Remarks
                    </label>
                    <textarea
                      id="property-remarks"
                      className="task-form__control task-form__textarea"
                      rows={3}
                      placeholder="Enter remarks"
                      value={addForm.propertyRemarks}
                      onChange={(e) => updateAddForm('propertyRemarks', e.target.value)}
                    />
                  </div>
                </fieldset>
              )}

              {addType === 'task' && taskWizardStep === 3 && (
                <fieldset className="task-form" disabled={isTaskReadOnly}>
                  <div className="next-task-table" role="table" aria-label="Next tasks">
                    <div className="next-task-table__thead" role="row">
                      <span role="columnheader">Task</span>
                      <span role="columnheader">Assignee</span>
                      <span role="columnheader">Action</span>
                    </div>
                    {addForm.nextTasks.map((row) => (
                      <div key={row.id} className="next-task-table__row" role="row">
                        <input
                          className="next-task-table__input"
                          placeholder="Select task"
                          value={row.task}
                          onChange={(e) => updateNextTaskRow(row.id, 'task', e.target.value)}
                        />
                        <input
                          className="next-task-table__input"
                          placeholder="Select assignee"
                          value={row.assignee}
                          onChange={(e) => updateNextTaskRow(row.id, 'assignee', e.target.value)}
                        />
                        <div className="next-task-table__actions">
                          <button
                            type="button"
                            className="next-task-table__icon-btn"
                            onClick={() => updateNextTaskRow(row.id, 'assignee', 'Nisal Amarasekara')}
                            aria-label="Assign to me"
                            title="Assign to me"
                          >
                            <UserPlus className="w-3.5 h-3.5" strokeWidth={2.1} />
                          </button>
                          <button
                            type="button"
                            className="next-task-table__icon-btn next-task-table__icon-btn--delete"
                            onClick={() => removeNextTaskRow(row.id)}
                            aria-label="Remove next task row"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" strokeWidth={2.1} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="next-task-table__add pressable"
                    onClick={addNextTaskRow}
                  >
                    <Plus className="w-4 h-4" strokeWidth={2.3} />
                    Add Next Task
                  </button>
                </fieldset>
              )}

              {addType === 'lead' && (
                <>
                  <div className="clock-modal__field">
                    <label className="clock-modal__label" htmlFor="lead-account">
                      Account Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="lead-account"
                      className="add-form__input"
                      placeholder="Enter account name"
                      value={addForm.accountName}
                      onChange={(e) => updateAddForm('accountName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="clock-modal__field">
                    <label className="clock-modal__label" htmlFor="lead-country">
                      Located Country <span className="required-star">*</span>
                    </label>
                    <input
                      id="lead-country"
                      className="add-form__input"
                      placeholder="Enter country"
                      value={addForm.locatedCountry}
                      onChange={(e) => updateAddForm('locatedCountry', e.target.value)}
                      required
                    />
                  </div>
                  <div className="clock-modal__field">
                    <label className="clock-modal__label" htmlFor="lead-created-by">
                      Created By <span className="required-star">*</span>
                    </label>
                    <input
                      id="lead-created-by"
                      className="add-form__input"
                      value={addForm.createdBy}
                      onChange={(e) => updateAddForm('createdBy', e.target.value)}
                      required
                    />
                  </div>
                  <div className="clock-modal__field">
                    <label className="clock-modal__label" htmlFor="lead-office">
                      Manage Offices <span className="required-star">*</span>
                    </label>
                    <select
                      id="lead-office"
                      className="add-form__input"
                      value={addForm.manageOffice}
                      onChange={(e) => updateAddForm('manageOffice', e.target.value)}
                      required
                    >
                      <option value="">Select office</option>
                      <option>Colombo Head Office</option>
                      <option>Regional Office</option>
                      <option>Remote — Work From Home</option>
                      <option>Client Site Visit</option>
                    </select>
                  </div>
                  <div className="clock-modal__field">
                    <label className="clock-modal__label" htmlFor="lead-owner">
                      Lead Owner <span className="required-star">*</span>
                    </label>
                    <input
                      id="lead-owner"
                      className="add-form__input"
                      placeholder="Enter lead owner"
                      value={addForm.leadOwner}
                      onChange={(e) => updateAddForm('leadOwner', e.target.value)}
                      required
                    />
                  </div>
                  {renderSelectServices()}

                  <div className="visiting-card-section">
                    <div className="visiting-card-section__heading">Visiting Card</div>
                    <div className="visiting-card-section__grid">
                      <div className="visiting-card__field">
                        <label className="clock-modal__label" htmlFor="visiting-card-front">
                          Visiting Card Front
                        </label>
                        <label className="task-attach__picker pressable" htmlFor="visiting-card-front">
                          <Upload className="w-4 h-4" strokeWidth={2.2} />
                          <span>Take / Upload Photo</span>
                          <input
                            id="visiting-card-front"
                            type="file"
                            accept="image/*"
                            capture="environment"
                            className="task-attach__input"
                            onChange={(e) => {
                              captureVisitingCardImage('visitingCardFront', e.target.files?.[0]);
                              e.target.value = '';
                            }}
                          />
                        </label>
                        {addForm.visitingCardFront && (
                          <div className="visiting-card__preview">
                            <img src={addForm.visitingCardFront} alt="Visiting card front preview" />
                            <button
                              type="button"
                              className="visiting-card__remove pressable"
                              onClick={() => updateAddForm('visitingCardFront', null)}
                              aria-label="Remove visiting card front image"
                            >
                              <Trash2 className="w-3.5 h-3.5" strokeWidth={2.1} />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="visiting-card__field">
                        <label className="clock-modal__label" htmlFor="visiting-card-back">
                          Visiting Card Back
                        </label>
                        <label className="task-attach__picker pressable" htmlFor="visiting-card-back">
                          <Upload className="w-4 h-4" strokeWidth={2.2} />
                          <span>Take / Upload Photo</span>
                          <input
                            id="visiting-card-back"
                            type="file"
                            accept="image/*"
                            capture="environment"
                            className="task-attach__input"
                            onChange={(e) => {
                              captureVisitingCardImage('visitingCardBack', e.target.files?.[0]);
                              e.target.value = '';
                            }}
                          />
                        </label>
                        {addForm.visitingCardBack && (
                          <div className="visiting-card__preview">
                            <img src={addForm.visitingCardBack} alt="Visiting card back preview" />
                            <button
                              type="button"
                              className="visiting-card__remove pressable"
                              onClick={() => updateAddForm('visitingCardBack', null)}
                              aria-label="Remove visiting card back image"
                            >
                              <Trash2 className="w-3.5 h-3.5" strokeWidth={2.1} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {addType === 'opportunity' && (
                <>
                  <div className="clock-modal__field">
                    <label className="clock-modal__label" htmlFor="opp-account">
                      Account Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="opp-account"
                      className="add-form__input"
                      placeholder="Enter Account Name"
                      value={addForm.accountName}
                      onChange={(e) => updateAddForm('accountName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="clock-modal__field">
                    <label className="clock-modal__label" htmlFor="opp-lead-source">
                      Lead Source <span className="required-star">*</span>
                    </label>
                    <select
                      id="opp-lead-source"
                      className="add-form__input"
                      value={addForm.leadSource}
                      onChange={(e) => updateAddForm('leadSource', e.target.value)}
                      required
                    >
                      <option value="">Select lead source</option>
                      <option>Website</option>
                      <option>Referral</option>
                      <option>Cold Call</option>
                      <option>Trade Show</option>
                      <option>Partner</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="clock-modal__field">
                    <label className="clock-modal__label" htmlFor="opp-type">
                      Type <span className="required-star">*</span>
                    </label>
                    <select
                      id="opp-type"
                      className="add-form__input"
                      value={addForm.oppType}
                      onChange={(e) => updateAddForm('oppType', e.target.value)}
                      required
                    >
                      <option value="">Select type</option>
                      <option>New Business</option>
                      <option>Existing Business</option>
                      <option>Renewal</option>
                    </select>
                  </div>
                  <div className="clock-modal__field">
                    <label className="clock-modal__label" htmlFor="opp-status">
                      Opportunity Status <span className="required-star">*</span>
                    </label>
                    <select
                      id="opp-status"
                      className="add-form__input"
                      value={addForm.opportunityStatus}
                      onChange={(e) => updateAddForm('opportunityStatus', e.target.value)}
                      required
                    >
                      <option value="">Select status</option>
                      <option>Qualification</option>
                      <option>Proposal</option>
                      <option>Negotiation</option>
                      <option>Closed Won</option>
                      <option>Closed Lost</option>
                    </select>
                  </div>
                  <div className="clock-modal__field">
                    <label className="clock-modal__label" htmlFor="opp-probability">
                      Probability (%) <span className="required-star">*</span>
                    </label>
                    <input
                      id="opp-probability"
                      className="add-form__input"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="0"
                      value={addForm.probability}
                      onChange={(e) => updateAddForm('probability', e.target.value)}
                      required
                    />
                  </div>
                  <div className="clock-modal__field">
                    <label className="clock-modal__label" htmlFor="opp-created-by">
                      Created By <span className="required-star">*</span>
                    </label>
                    <input
                      id="opp-created-by"
                      className="add-form__input"
                      value={addForm.createdBy}
                      onChange={(e) => updateAddForm('createdBy', e.target.value)}
                      required
                    />
                  </div>
                  <div className="clock-modal__field">
                    <label className="clock-modal__label" htmlFor="opp-owner">
                      Opportunity Owner <span className="required-star">*</span>
                    </label>
                    <input
                      id="opp-owner"
                      className="add-form__input"
                      placeholder="Select opportunity owner"
                      value={addForm.opportunityOwner}
                      onChange={(e) => updateAddForm('opportunityOwner', e.target.value)}
                      required
                    />
                  </div>
                  {renderSelectServices()}
                </>
              )}
            </div>

            {addType === 'task' ? (
              <div className="task-wizard__footer">
                {isTaskReadOnly ? (
                  <button
                    type="button"
                    className="task-wizard__next pressable"
                    onClick={closeAddModal}
                  >
                    Close
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      className="task-wizard__update pressable"
                      onClick={() => submitAddForm({ complete: false })}
                    >
                      Update Task without complete
                    </button>
                    {taskWizardStep === 3 ? (
                      <button
                        type="button"
                        className="task-wizard__complete pressable"
                        onClick={() => submitAddForm({ complete: true })}
                      >
                        Complete Task
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="task-wizard__next pressable"
                        onClick={goTaskWizardNext}
                      >
                        Next
                      </button>
                    )}
                  </>
                )}
              </div>
            ) : (
              <button
                type="button"
                className="clock-modal__confirm pressable"
                onClick={() => submitAddForm()}
              >
                Create {addTypeMeta[addType]?.label || 'Record'}
              </button>
            )}
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}

const AUTH_STORAGE_KEY = 'soe.auth.session';

function readStoredAuth() {
  try {
    return localStorage.getItem(AUTH_STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function writeStoredAuth(isAuthed) {
  try {
    if (isAuthed) {
      localStorage.setItem(AUTH_STORAGE_KEY, '1');
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  } catch {
    // Ignore storage failures (private mode, quota, etc.)
  }
}

export default function SOEHomePage() {
  const [authed, setAuthed] = useState(readStoredAuth);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleLogin = () => {
    writeStoredAuth(true);
    setAuthed(true);
  };

  const handleSignOut = () => {
    writeStoredAuth(false);
    setAuthed(false);
  };

  if (!authed) {
    return <LoginScreen onLogin={handleLogin} now={now} />;
  }

  return <HomeDashboard onSignOut={handleSignOut} now={now} />;
}
