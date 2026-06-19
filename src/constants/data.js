// data.js


// ==========================================
// 1. STATIC NOTIFICATIONS DATA OBJECT
// ==========================================
// export const notifications = [
//     { id: 1, text: "New Industrial Course added!", time: "2m ago" },
//     { id: 2, text: "Placement drive starts next week.", time: "1h ago" },
//     { id: 3, text: "Welcome to JITM Skills!", time: "3h ago" },
// ];


// import videos homepage
import logisticsVideo from "../assets/video/it-assets.mp4";
import skillIndiaMissionVideo from "../assets/video/skillIndiaMissionVideo.mp4";
import skillIndiaMission from "../assets/video/Skill India Mission.mp4";
import infrastructureWellnessVideo from "../assets/video/infrastructureWellness.mp4";

// Home page Slider data
export const SLIDE_DATA = [
    {
        id: 1, // Aapke layout pattern ke matching order sequence ke hisab se setup kiya hai
        tag: "Social Infrastructure Development",
        title: "Empowering Communities Through Multi-Sectoral",
        highlight: "Franchise Hubs",
        description: "JITM Skills is rapidly scaling ground-level operational frameworks across core wellness and social support ecosystems. We provide end-to-end management, certified branding, and institutional execution blueprints for visionary partners.",
        points: [
            "Yoga & Wellness Training",
            "Diagnostic Labs Setup",
            "Old Age Healthcare",
            "Child Care Ecosystems"
        ],
        // Is video reference variable ko aap upar import karke call kar sakte hain
        bgVideo: infrastructureWellnessVideo,
    },
    {
        id: 2,
        tag: "Infrastructure Excellence",
        title: "We Deliver Desktops UPS & IT Assets",
        highlight: "All Over India",
        description: "JITM provides end-to-end technology solutions, managing large-scale procurement and deployment of high-performance IT hardware. We ensure seamless logistics and installation support for major corporate giants across the nation.",
        points: ["20+ Leading Companies", "Seamless Logistics", "Pan-India Installation"],
        bgVideo: logisticsVideo,
    },
    {
        id: 3,
        tag: "National Presence",
        title: "Creating Opportunities & Changing Lives",
        highlight: "Across India",
        description: "With a massive network of 150+ training centres, we bridge the gap between education and employment. Our 5-star rated NSDC centres have successfully transformed over 10 lakh youth into industry-ready professionals.",
        points: ["150+ Training Centres", "75+ NSDC 5-Star Centres", "10L+ Youth Placed"],
        bgVideo: skillIndiaMissionVideo,
    },
    {
        id: 4,
        tag: "Skill India Mission",
        title: "Delivering Skill India Mission on the",
        highlight: "Ground Level",
        description: "We are at the forefront of national development, executing flagship government schemes like PMKVY and DDU-GKY. Our mission is to empower 2 lakh+ beneficiaries through inclusive and large-scale skill initiatives.",
        points: ["PMKVY | DDU-GKY | NULM", "2L+ Beneficiaries", "Govt. Skill Projects"],
        bgVideo: skillIndiaMission,
    },
];

// Home page section2 JITM Ecosystem data


export const SECTOR_DATA = [
    {
        id: "healthcare",
        title: "Healthcare & Caregivers",
        desc: "Specialized training in Geriatric (Old Age) Care, Home Health Aides (HHM), Radiology tech, and emergency medical support ecosystems.",
        tag: "High Demand",
        iconName: "Stethoscope"
    },
    {
        id: "it",
        title: "IT & Digital Industry",
        desc: "Advanced training in next-gen software engineering, AI deployment, full-stack technologies, and complete digital literacy solutions across youth network.",
        tag: "Core Sector",
        iconName: "Monitor"
    },
    {
        id: "construction",
        title: "Construction & Infra",
        desc: "Vocational expertise in heavy civil engineering works, smart infrastructure blueprints, safety management, and industrial construction operations.",
        tag: "Industrial",
        iconName: "HardHat"
    },
    {
        id: "logistics",
        title: "IT Logistics & Delivery",
        desc: "End-to-end supply chain management specializing in pan-India tracking, rollout, and delivery of massive Desktops, Laptops, and corporate UPS systems.",
        tag: "Logistics",
        iconName: "Truck"
    }
];

export const JITM_SERVICES = [
    {
        label: "Free Govt. Courses",
        desc: "State & central skill ecosystem setups (PMKVY, DDU-GKY) with complete fee waiver.",
        iconName: "GraduationCap"
    },
    {
        label: "Healthcare & Caregiving", // 🚀 Injected Healthcare here
        desc: "Certified training modules in Geriatric (Old Age) care, HHM, and specialized radiology support.",
        iconName: "Stethoscope"
    },
    {
        label: "100% Placement Support",
        desc: "Direct recruitment tracks, dynamic interview prep, and corporate tie-up placements.",
        iconName: "Briefcase"
    },
    {
        label: "Global IT Asset Delivery",
        desc: "Pan-India operational tracking, massive corporate desktop rollouts, and logistics solutions.",
        iconName: "Truck"
    }
];

// Home Page Our Latest Govt & CSR Programs section 3 data
import logo1 from "../assets/images/Projects/dduugky.webp";
import logo2 from "../assets/images/Projects/pmkvy logo.webp";
import logo3 from "../assets/images/Projects/nulm (1).webp";
import logo4 from "../assets/images/Projects/maulana azad logo.webp";
import logo5 from "../assets/images/Projects/esdp logo.webp";
import logo6 from "../assets/images/Projects/csr logo.webp";

export const GOVT_PROGRAMS = [
    {
        id: 1,
        title: "DDU-GKY – Rural Employment Mission",
        subtitle: "42,000+ Youth Trained • 28,000+ Placed",
        desc: "Empowering rural youth through multi-state livelihood programs with end-to-end skilling, counselling, and placement support.",
        iconName: "Globe",
        logoUrl: logo1,
        highlights: [
            "Multi-state livelihood interventions",
            "End-to-end skilling and career guidance",
            "Large-scale capacity building",
            "High placement success rate"
        ],
        longDesc: "Large-scale interventions transforming underserved rural communities. Empowering rural youth through multi-state livelihood programs with end-to-end skilling, counselling, and placement support."
    },
    {
        id: 2,
        title: "PMKVY / PMKK – Skill India",
        subtitle: "1,00,000+ Youth Skilled • 46 PMKK Centres Nationwide",
        desc: "Delivering industry-aligned training using NSDC-approved labs, assessments, and placement linkages.",
        iconName: "Award",
        logoUrl: logo2,
        highlights: [
            "46 PMKK Centres across India",
            "NSDC-approved labs and courses",
            "Sector-wise skilling programs",
            "Assessment & placement support"
        ],
        longDesc: "Delivering industry-aligned training using NSDC-approved labs, assessments, and placement linkages."
    },
    {
        id: 3,
        title: "NULM – Jharkhand / Gujarat / Haryana",
        subtitle: "32,000+ Trained • 21,000+ Placements",
        desc: "Job-linked training for urban poor households with a focus on youth, women, and vulnerable families.",
        iconName: "Building2",
        logoUrl: logo3,
        highlights: [
            "Urban employability skills",
            "Entrepreneurship support",
            "Women inclusion programs",
            "City-level job readiness"
        ],
        longDesc: "Job-linked training for urban poor households with a focus on youth, women, and vulnerable families."
    },
    {
        id: 4,
        title: "MAEF – Minority Empowerment",
        subtitle: "6,000+ Beneficiaries Trained",
        desc: "Training that leads to livelihood, self-reliance, and dignity for minority communities.",
        iconName: "Users",
        logoUrl: logo4,
        highlights: [
            "Minority-focused development",
            "Digital and technical training",
            "Career counselling & placement"
        ],
        longDesc: "Training that leads to livelihood, self-reliance, and dignity for minority communities."
    },
    {
        id: 5,
        title: "ESDP / EDP – (Entrepreneurship)",
        subtitle: "10,000+ Youth Trained • 4,000+ Businesses Launched",
        desc: "Entrepreneurship bootcamps, mentoring, business setup support & market linkages.",
        iconName: "Zap",
        logoUrl: logo5,
        highlights: [
            "Entrepreneurship bootcamps",
            "Mentoring & business setup support",
            "Financial literacy training",
            "Market linkage support"
        ],
        longDesc: "Entrepreneurship bootcamps, mentoring, business setup support & market linkages."
    },
    {
        id: 6,
        title: "CSR & Industry Partnerships",
        subtitle: "300+ Employer Partners",
        desc: "CSR projects with NTPC, NHPC, IOCL, SJVN, Hero MotoCorp enabling employment in rural and tribal communities.",
        iconName: "Briefcase",
        logoUrl: logo6,
        highlights: [
            "CSR skilling for rural & tribal youth",
            "Pan-India placement partners",
            "PSU collaborations (NTPC, IOCL, NHPC, SJVN)",
            "Industry-focused job roles"
        ],
        longDesc: "CSR projects with NTPC, NHPC, IOCL, SJVN, Hero MotoCorp enabling employment in rural and tribal communities."
    }
];


// Home page Logo slider data section 4
export const PROJECT_LOGOS = [
    { id: 1, img: logo1, alt: "DDU-GKY" },
    { id: 2, img: logo2, alt: "PMKVY" },
    { id: 3, img: logo3, alt: "NULM" },
    { id: 4, img: logo4, alt: "MAEF" },
    { id: 5, img: logo5, alt: "ESDP" },
    { id: 6, img: logo6, alt: "CSR" },
];

// Home Page Our Services section 5 data
import SkillServices1 from "../assets/images/Skill Training Programs.webp";
import SkillServices2 from "../assets/images/Placement Support.webp";
import SkillServices3 from "../assets/images/Entrepreneurship Development.webp";
import SkillServices4 from "../assets/images/Government & CSR Projects.webp";
export const SERVICE_HIGHLIGHTS = [
    {
        id: "training",
        title: "Skill Training Programs",
        // 🚀 Healthcare keywords ko hata kar aapke saare customized professional fields ko perfectly line-up kar diya hai
        desc: "Free, job-oriented training in Geriatric Care, Childcare/Early Child Development, Home-based Respite care, Community Based care, Disability support, Retail, Apparel, Electronics, and IT — aligned with Government missions.",
        img: SkillServices1,
        icon: "GraduationCap"
    },
    {
        id: "placement",
        title: "Placement & Apprenticeship Support",
        desc: "Direct employment pipelines driven by 300+ corporate tie-ups offering jobs, structured apprenticeships, and strategic career guidance across India.",
        img: SkillServices2,
        icon: "Briefcase"
    },
    {
        id: "entrepreneurship",
        title: "Entrepreneurship Development",
        desc: "Structured EDP/ESDP programs helping modern youth start scalable micro-businesses with dedicated mentoring, financial literacy, and active market linkages.",
        img: SkillServices3,
        icon: "Zap"
    },
    {
        id: "govt-projects",
        title: "Government & CSR Projects",
        desc: "National scale implementation of flagship schemes including PMKVY, PMKK, DDU-GKY, NULM, MAEF, and corporate CSR-funded vocational frameworks nationwide.",
        img: SkillServices4,
        icon: "Award"
    }
];


// home page section 6 Certification Logos 
import Cert1 from "../assets/images/Certification/partner-logo-1 (1).webp";
import Cert2 from "../assets/images/Certification/partner-logo-1 (2).webp";
import Cert3 from "../assets/images/Certification/partner-logo-1 (3).webp";
import Cert4 from "../assets/images/Certification/partner-logo-1 (4).webp";
import Cert5 from "../assets/images/Certification/partner-logo-1 (5).webp";
import Cert6 from "../assets/images/Certification/partner-logo-1 (6).webp";
import Cert7 from "../assets/images/Certification/partner-logo-1 (7).webp";
import Cert8 from "../assets/images/Certification/partner-logo-1 (8).webp";
import Cert9 from "../assets/images/Certification/partner-logo-1 (9).webp";
import Cert10 from "../assets/images/Certification/partner-logo-1 (10).webp";
import Cert11 from "../assets/images/Certification/partner-logo-1 (11).webp";
import Cert12 from "../assets/images/Certification/partner-logo-1 (12).webp";
import Cert13 from "../assets/images/Certification/partner-logo-1 (13).webp";
import Cert14 from "../assets/images/Certification/partner-logo-1 (14).webp";
import Cert15 from "../assets/images/Certification/partner-logo-1 (15).webp";
import Cert16 from "../assets/images/Certification/partner-logo-1 (16).webp";
import Cert17 from "../assets/images/Certification/partner-logo-1 (17).webp";
import Cert18 from "../assets/images/Certification/partner-logo-1 (18).webp";
import Cert19 from "../assets/images/Certification/partner-logo-1 (19).webp";

// --- Global Certification Logos (20 Array) ---
export const CERTIFICATION_LOGOS = [
    { id: 1, img: Cert1 }, { id: 2, img: Cert2 }, { id: 3, img: Cert3 }, { id: 4, img: Cert4 },
    { id: 5, img: Cert5 }, { id: 6, img: Cert6 }, { id: 7, img: Cert7 }, { id: 8, img: Cert8 },
    { id: 9, img: Cert9 }, { id: 10, img: Cert10 }, { id: 11, img: Cert11 }, { id: 12, img: Cert12 },
    { id: 13, img: Cert13 }, { id: 14, img: Cert14 }, { id: 15, img: Cert15 }, { id: 16, img: Cert16 },
    { id: 17, img: Cert17 }, { id: 18, img: Cert18 }, { id: 19, img: Cert19 }
];



// Home page section 7 Placement Partner Logos 
import Partner1 from "../assets/images/placement/company (1).webp";
import Partner2 from "../assets/images/placement/company (2).webp";
import Partner3 from "../assets/images/placement/company (3).webp";
import Partner4 from "../assets/images/placement/company (4).webp";
import Partner5 from "../assets/images/placement/company (5).webp";
import Partner6 from "../assets/images/placement/company (6).webp";
import Partner7 from "../assets/images/placement/company (7).webp";
import Partner8 from "../assets/images/placement/company (8).webp";
import Partner9 from "../assets/images/placement/company (9).webp";
import Partner10 from "../assets/images/placement/company (10).webp";
import Partner11 from "../assets/images/placement/company (11).webp";
import Partner12 from "../assets/images/placement/company (12).webp";
import Partner13 from "../assets/images/placement/company (13).webp";
import Partner14 from "../assets/images/placement/company (14).webp";
import Partner15 from "../assets/images/placement/company (15).webp";
import Partner16 from "../assets/images/placement/company (16).webp";
import Partner17 from "../assets/images/placement/company (17).webp";

export const PLACEMENT_PARTNERS = [
    { id: 1, img: Partner1 },
    { id: 2, img: Partner2 },
    { id: 3, img: Partner3 },
    { id: 4, img: Partner4 },
    { id: 5, img: Partner5 },
    { id: 6, img: Partner6 },
    { id: 7, img: Partner7 },
    { id: 8, img: Partner8 },
    { id: 9, img: Partner9 },
    { id: 10, img: Partner10 },
    { id: 11, img: Partner11 },
    { id: 12, img: Partner12 },
    { id: 13, img: Partner13 },
    { id: 14, img: Partner14 },
    { id: 15, img: Partner15 },
    { id: 16, img: Partner16 },
    { id: 17, img: Partner17 }
];


// Home page section 8 Testimonials data
export const TESTIMONIALS = [
    { id: 1, name: "Rahul Sharma", role: "Graduate Trainee", text: "JITM Skills transformed my career. The hands-on training in electronics was exactly what industry needs.", size: "large" },
    { id: 2, name: "Priya Verma", role: "Retail Associate", text: "The placement support is amazing! I got hired by a top brand right after my certification.", size: "small" },
    { id: 3, name: "Amit Patel", role: "Entrepreneur", text: "The EDP program gave me the confidence to start my own mobile repair shop. Truly thankful!", size: "medium" },
    { id: 4, name: "Sneha Reddy", role: "Healthcare Assistant", text: "Certified trainers and modern labs. Best place for skill development.", size: "small" },
    { id: 5, name: "Vikram Singh", role: "IT Technician", text: "Industry-aligned courses that actually matter in the real world.", size: "medium" },
    { id: 6, name: "Anjali Gupta", role: "Apparel Designer", text: "From basics to advanced techniques, the faculty here is very supportive.", size: "large" },
    { id: 7, name: "Mohd. Zaid", role: "Logistics Coordinator", text: "Great infrastructure and professional environment.", size: "small" },
    { id: 8, name: "Pooja Das", role: "Solar Technician", text: "The government-sponsored programs are a boon for students like us.", size: "medium" },
    { id: 9, name: "Karan Mehra", role: "Customer Support", text: "Got soft skills and technical training both in one place.", size: "small" },
    { id: 10, name: "Riya Kapoor", role: "Placement Head (Partner)", text: "We consistently hire from JITM because their students are exceptionally job-ready.", size: "medium" },
];



// About Us Page data

// LEADERS
import yogesh from "../assets/images/yogesh-2.webp";
import manav from "../assets/images/Mr_manav.webp";
export const LEADERS = [
    {
        id: 1,
        name: "Prof. Yogesh Kumar",
        role: "Director & Founder",
        quote: "Skill development is not just training — it is dignity, opportunity & empowerment.",
        image: yogesh, // Actual path check kar lena
        brief: "A visionary leader with decades of experience, Prof. Yogesh Kumar established JITM Skills with a clear vision: no youth in India should ever be denied access to quality training.",
        details: {
            focus: ["Quality-driven training", "Technology-enabled learning", "Inclusive skilling", "Transparent tracking"],
            vision: "To become a national leader in skill development, empowering youth for global competitiveness.",
            programs: ["DDU-GKY", "PMKVY & PMKK", "NULM", "Seekho Aur Kamao", "ISDS", "State Missions"]
        }
    },
    {
        id: 2,
        name: "Mr. Manav Chauhan",
        role: "COO & Group Head",
        quote: "Integrating modern approaches to build a sustainable and high-impact training ecosystem.",
        image: manav, // Actual path check kar lena
        brief: "A dynamic next-generation entrepreneur leading JITM’s operations and modernizing the organization's training ecosystem through innovation.",
        details: {
            verticals: ["JITM Retail Ventures", "Online Content Channel", "Training Centre Excellence", "Coaching Institutes"],
            programs: ["DDU-GKY", "PMKK/PMKVY", "MANAS", "ISDS", "NULM", "State Missions"],
            expertise: "Institution building, sustainability planning, and operational excellence."
        }
    }
];

// WHY_CHOOSE_DATA

export const WHY_CHOOSE_DATA = [
    {
        id: 1,
        iconName: "Globe2",
        title: "Proven National Impact",
        shortDesc: "Over 1,00,000+ youth trained and placed across India.",
        bullets: ["150+ Training Centres", "NSDC Aligned", "Placement Support"],
        fullDetail: {
            longDesc: "JITM Skills ensures every program is outcome-oriented, transforming lives through high-quality skill development.",
            list: [
                "Partnerships with 150+ training centres across India",
                "Programs aligned with NSDC, PMKVY, and other national schemes",
                "Dedicated placement support and career guidance",
                "Hands-on, industry-relevant training modules",
                "Support for women & underserved communities"
            ]
        }
    },
    {
        id: 2,
        iconName: "ShieldCheck",
        title: "Govt & CSR Expertise",
        shortDesc: "Executing projects under DDU-GKY, PMKVY, and PSU CSR.",
        bullets: ["End-to-end Execution", "PSU Collaborations", "Compliance"],
        fullDetail: {
            longDesc: "Our teams ensure compliance, operational excellence, and measurable impact in skill development programs.",
            list: [
                "Successfully trained thousands of youth under government programs",
                "End-to-end project execution with national guidelines",
                "Collaboration with PSUs like NTPC, IOCL, NHPC & SJVN",
                "Monitoring, evaluation, and reporting for outcomes",
                "Focus on inclusive programs for women and rural youth"
            ]
        }
    },
    {
        id: 3,
        iconName: "Cpu",
        title: "Tech-Enabled & Inclusive",
        shortDesc: "Smart classrooms, LMS, and online simulations.",
        bullets: ["Digital LMS Tools", "Mentorship", "Tracking"],
        fullDetail: {
            longDesc: "We provide end-to-end support from mobilization to post-placement tracking.",
            list: [
                "Smart classrooms with interactive modules",
                "Personalized mentorship and progress tracking",
                "Online assessments & simulations",
                "Inclusive programs for women, minorities, and rural youth",
                "Post-placement follow-up and career guidance"
            ]
        }
    }
];

// centersData.js
export const centersData = [
    { "state": "Arunachal Pradesh", "name": "PMKK JITM EAST SIANG", "address": "First & Second Floor, LICI Building, P.O & P.S Pasighat, East Siang, Arunachal Pradesh 791102" },
    { "state": "Arunachal Pradesh", "name": "PMKK JITM LOWERSIANG", "address": "Near Forest Gate Lipu Po+P.S Likabali District Lower Siang, Arunachal Pradesh 791125" },
    { "state": "Arunachal Pradesh", "name": "PMKK JITM TIRAP", "address": "Near Traffic Police Point, Main Bus Stand, Upper Market, Khonsa District Tirap, Arunachal Pradesh 792130" },
    { "state": "Assam", "name": "PMKK JITM BARPETA", "address": "Barpeta Road, Simlaguri, Near Assam Oil Petrol Pump, NH 31, Barpeta, Assam 781313" },
    { "state": "Assam", "name": "PMKK JITM NALBARI", "address": "Udaypur ward no 10 near railway station Milanpur Nalbari Assam 781337" },
    { "state": "Bihar", "name": "PMKK JITM BANKA", "address": "Maha-Laxmi Tower, Dhaka Mod, Banka, Bihar 813102" },
    { "state": "Bihar", "name": "PMKK JITM KHAGARIA", "address": "Yashoda Nagar Khagaria U Khagaria Bihar-851204" },
    { "state": "Bihar", "name": "PMKK JITM Madhepura", "address": "BMPS educational building, in front of agriculture research center Jai Najrang Fuels, Madhepura Bihar 852113" },
    { "state": "Bihar", "name": "PMKK JITM SAHARSA", "address": "Hemalata complex polytechnic bye pass road ward no 32 Saharsa Bihar 852201" },
    { "state": "Jharkhand", "name": "DDUKK JITM KODERMA", "address": "KHATA NO 36A, AT-P.G COMPLEX, KODERMA Ranchi Patna By-Pass Road, Jhumri Tilaiya, Koderma, Jharkhand 825409" },
    { "state": "Jharkhand", "name": "DDUKK JITM HAZARIBAGH", "address": "JABRA ROAD, K5C7 KORRAH CHOWK, KORRA, HAZARIBAGH, Jharkhand 825301" },
    { "state": "Jharkhand", "name": "DDUKK JITM JAMSHEDHPUR", "address": "RD No 15, SHEYAN INTERNATIONAL SCHOOL, P MANGO, Opposite Big Bazaar, JAMSHEDPUR, Jharkhand 831012" },
    { "state": "Jharkhand", "name": "JITM Skills SARAIKELA", "address": "157 & 158, Tata Kandra Road, Adityapur, Seraikela Kharsawan, Meghraj Tower Floor 2,3,4,5, Near Srivastava Building, Jharkhand 832109" },
    { "state": "Jharkhand", "name": "DDUKK JITM DHANBAD", "address": "K No 65A Bhuli Hiram Road, Near Binod Bihari Chowk, Nawadih, Dhanbad, Jharkhand 828104" },
    { "state": "Jharkhand", "name": "DDUKK JITM DEOGHAR", "address": "Plot 309, DUMKA ROAD, JHOUSGARHI, GAJANAND COMPLEX, Near Goushala, DEOGHAR, Jharkhand 814112" },
    { "state": "Jharkhand", "name": "JITM MEGA GODDA", "address": "K24 Sarvangin Vikas Parishad, Village - Gudiya (Dakaita - Karanu Road), P.O + P.S Thana - Mahagama, District Godda, Jharkhand 814154" },
    { "state": "Jharkhand", "name": "BIRSA JITM KHUTPANI", "address": "Utkramit Madhya Vidyalaya, Bacchomahato, Dopai, Khutpani, Chaibasa, West Singhbhum, Jharkhand 829118" },
    { "state": "Jharkhand", "name": "BIRSA JITM JAGANNATHPUR", "address": "Utkramit High School, Siyaljora, Jagannathpur, Chaibasa, West Singhbhum, Jharkhand 833214" },
    { "state": "Jharkhand", "name": "JITM MEGA LOHARDAGA", "address": "2445 Mission Chowk, Lohardaga, Near One India Family Mart, Lohardaga, Jharkhand 835302" },
    { "state": "Jharkhand", "name": "DDUKK JITM CHAIBASA", "address": "DPS PUBLIC SCHOOL AND COLLEGE, MATKAMHATU, BLOCK OFFICE MORE, CHAIBASA (WEST SINGHBHUM), Jharkhand 833201" },
    { "state": "Jharkhand", "name": "PMKK JITM KODERMA", "address": "At- Jhumri PO Karma Dist Koderma Jharkhand 825409" },
    { "state": "Uttarakhand", "name": "PMKK ALMORA", "address": "Pawar Market, Dharanaula Road, Maruti Suzuki Service Centre, Almora 263601" },
    { "state": "Uttarakhand", "name": "PMKK Bageshwar", "address": "Countrywide Public School, Pindari Glacier Road, Kathayatbara, Bageshwar, Uttarakhand 263642" },
    { "state": "Uttarakhand", "name": "PMKK Champawat", "address": "Kakraligate Tanakpur, Near Chand Petrol Pump, Uttarakhand 262309" },
    { "state": "Uttarakhand", "name": "PMKK HALDWANI", "address": "Bhagwati Tower, Tilak Market, Near Sardar Ji Ki Kothi, Haldwani, Uttarakhand 263139" },
    { "state": "Uttarakhand", "name": "PMKK JITM Udham Singh Nagar", "address": "Pagia Building Mata Mandir Road near Punjabi Sabha Kashipur Udham Singh Nagar Uttarakhand 244713" },
    { "state": "Uttarakhand", "name": "PMKK PITHORAGARH", "address": "Near Uttrakhand Gramin Bank, Inderalila Bhawan Kumour, Police line road, Pithoragarh, Uttarakhand 262501" },
    { "state": "Uttar Pradesh", "name": "PMKK JITM BALLIA", "address": "Khopri Pakar, Ballia, Uttar Pradesh 277001" },
    { "state": "Uttar Pradesh", "name": "PMKK JITM Gautam Budh Nagar", "address": "Greater Noida Authority Plot No. 29D, Knowledge Park-1, Greater Noida 201310" },
    { "state": "Uttar Pradesh", "name": "PMKK JITM KUSHINAGAR", "address": "N.H. 28 Hansraj Hospital Kushinagar 274402" },
    { "state": "Uttar Pradesh", "name": "PMKK JITM MAU", "address": "Sahadatpura, Maunath Bhanjan (MAU) 275101" },
    { "state": "Mizoram", "name": "PMKK JITM CHAMPAI", "address": "CHP 61, Village Vaihmun, Police Station Champhai, Mizoram 796321" },
    { "state": "Manipur", "name": "PMKK JITM Chandel", "address": "Plot No. 45/2, Village Panchai, P.O & P.S Chandel, Manipur 795127" },
    { "state": "Manipur", "name": "PMKK JITM CHURCHANDPUR", "address": "Patta No 104/45, Tipaimukh Road Junction, Thangzam Road, New Bazar Area, Churchandpur, Manipur 795128" },
    { "state": "Manipur", "name": "PMKK JITM JIRIBAM", "address": "Babupara Ward No. 4, JT Road, Opp Kastoorba Girls High School, Jiribam, Manipur 795116" },
    { "state": "Manipur", "name": "PMKK JITM KAMJONG", "address": "Bungpa Khullen, Kamjong Bazar, Post Office Chassad, Police Station Kamjong, Manipur 795145" },
    { "state": "Manipur", "name": "PMKK JITM NONEY", "address": "Namdunlong stadium Road Imphal East Noney Manipur 795132" },
    { "state": "Manipur", "name": "PMKK JITM PHERZAWAL", "address": "SDO/BDO Complex, Village+post+police station- Thanlon District-Pherzawl Manipur 795143" },
    { "state": "Manipur", "name": "PMKK JITM TENGOUNPAL", "address": "House number T-225 Tarung Happy Valley Imphal West Tengnoupal Manipur 795004" },
    { "state": "Manipur", "name": "PMKK JITM Ukhurul", "address": "UKHRUL, Manipur" },
    { "state": "Himachal Pradesh", "name": "PMKK JITM HAMIRPUR", "address": "Near Kangra Central Cooperative Bank, Doshadha, Opp Police Line, Hamirpur 177001" },
    { "state": "Himachal Pradesh", "name": "PMKK JITM Kinnaur", "address": "First floor of Near HP PWD rest house, Reckong Peo, Distt: Kinnaur, Himachal Pradesh 172107" },
    { "state": "Himachal Pradesh", "name": "PMKK JITM KULLU", "address": "Kullu, Himachal Pradesh-175126" },
    { "state": "Punjab", "name": "PMKK JITM HOSHIARPUR", "address": "Maharaja Complex, Jalandhar Road, Hoshiarpur, Punjab 146001" },
    { "state": "Punjab", "name": "PMKK JITM KAPURTHALA", "address": "Aman Nagar, Kapurthala, Punjab 144601" },
    { "state": "Punjab", "name": "PMKK JITM PATHANKOT", "address": "Dhangu Road Ptk Veer Bhan 25790 Pathankot-145001" },
    { "state": "Rajasthan", "name": "PMKK JITM JALORE", "address": "Above Maruti Showroom, RIICO Industrial Area, 3rd Phase, Jalore, Rajasthan" },
    { "state": "Rajasthan", "name": "PMKK JITM PALI", "address": "DEV KUNG PALI, NAYA GAON, PALI, RAJASTHAN-306401" },
    { "state": "Gujarat", "name": "PMKK JITM JUNAGADH", "address": "Merry Gold-4, 4th Floor, Shop No-4, Gandhari Vadi, Joshipura, Junagadh, Gujarat 362001" },
    { "state": "Kerala", "name": "PMKK JITM Kannur", "address": "Pilathattathil, Avilora P.O, Koduvaly, Kerala 673572" },
    { "state": "Kerala", "name": "PMKK JITM KASARAGOD", "address": "Sy No R.S.No 82/1B2A 5A 5C 5B1 Of Kasaragod Village in Kasaragod Taluk Dis Kerala 560025" },
    { "state": "Kerala", "name": "PMKK JITM KOZHIKODE", "address": "pilathattathil avilora P.O koduvaly kerala 673572" },
    { "state": "Kerala", "name": "PMKK JITM Vadakara", "address": "Bldg No 17/489-B & 17/489-C Kannan Arcade Puthiyatheru Kannur 670011" },
    { "state": "Kerala", "name": "PMKK JITM Wayanad", "address": "Royal Centre Near New Bus Stand Kalpetta Wayanad, Kerala" },
    { "state": "Delhi", "name": "PMKK JITM Meethapur", "address": "Plot No 3 Lal Kiran Bhawan Meethapur Chowk Meethapur Badarpur New Delhi 110044" },
    { "state": "Nagaland", "name": "PMKK JITM Peren Nagaland", "address": "Old Market Colony House No 100 P.O & P.S Jalikie Town District Peren Nagaland 797110" },
    { "state": "Sikkim", "name": "PMKK JITM GEYZING", "address": "Sari Building, Near Geyzing Court, West Sikkim, Sikkim 737111" }
]

// presenceData.js
export const presenceContent = {
    title: "Our",
    subtitle: "Presence",
    description: "With a massive network across India, we are committed to bridging the gap between industry and talent. Our strategic presence in diverse regions allows us to empower thousands of students through world-class vocational training and skill development programs, ensuring a brighter future for the nation's workforce.",
    points: [
        { title: "56 PMKK Centres", desc: "Pradhan Mantri Kaushal Kendra" },
        { title: "UPSDM Centres", desc: "Presence across Uttar Pradesh" },
        { title: "12 WCD Centres", desc: "Women & Child Development (Bihar)" },
        { title: "700+ Schools", desc: "Vocational Training in Jharkhand" },
        { title: "Mega Skill Centres", desc: "High-capacity industrial hubs" },
        { title: "20+ States", desc: "Pan-India Training Footprint" },
    ],
    stats: {
        primary: "20+",
        primaryLabel: "States Covered",
        secondary: "56",
        secondaryLabel: "PMKK Centres"
    },
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
};


// our VERTICALS

// Image imports
import ConstructionTraining from "../assets/images/Verticals/Construction-Training.webp";
import CareEconomy from "../assets/images/Verticals/Care Economy.webp";
import Counseling from "../assets/images/Verticals/Counseling of Students & Trainers.webp";
import JalJeevanMission from "../assets/images/Verticals/Jal Jeevan Mission.webp";
import ITSupply from "../assets/images/Verticals/Supply of IT & Essential Equipment.webp";
import GovtSchemes from "../assets/images/Verticals/Govt. Schemes.webp";
import CSRPartnerships from "../assets/images/Verticals/CSR Projects.webp";
import EDPESDP from "../assets/images/Verticals/Entrepreneurship-training.webp";
import PlacementSupport from "../assets/images/Verticals/Placement & Apprenticeship Support.webp";

export const PROGRAMS_DATA = {
    header: {
        superTitle: "WHO WE ARE",
        title: "Our Comprehensive",
        subtitle: "Programs",
        description: "JITM Skills offers a wide range of skill development initiatives designed to empower youth, women, and marginalized communities with sustainable livelihoods."
    },
    programs: [
        // --- PEHLE WALE 3 PROGRAMS (RETAINED) ---
        {
            id: "01",
            title: "Construction & Infrastructure Training",
            tag: "MH & DL Certified",
            shortDesc: "We specialize in transforming the infrastructure workforce through advanced training modules and strategic partnerships with State Welfare Boards.",
            image: ConstructionTraining,
            fullDetails: {
                stats: [{ label: "MH Certified", value: "50,000+" }, { label: "DL Certified", value: "17,000+" }],
                points: [
                    "Maharashtra (MBOCW): Executing large-scale skill certification focusing on advanced masonry, bar-bending, and structural safety.",
                    "Delhi (DBOCWWB): Upgrading the workforce in the Delhi region aligned with high-rise and metro project standards.",
                    "Advanced Masonry & Bar-bending, Structural Safety Training, High-rise & Metro Projects Alignment",
                    "Zero Accident Site Protocols"
                ],
                medical: "Mandatory Medical Screening: Physical fitness is our first step toward a 'Zero Accident' site. Every trainee undergoes comprehensive health screening before certification."
            }
        },
        {
            id: "02",
            title: "Care Economy Skilling",
            tag: "Professional Certification", // Tag ko bhi clean aur corporate kar diya hai
            shortDesc: "Empowering caregivers with globally aligned healthcare protocols to bridge the gap between medical demand and a professionally trained workforce.",
            image: CareEconomy,
            fullDetails: {
                // 🔥 Government and NSQF tags ko poori tarah se clear kar diya hai
                stats: [{ label: "Certification", value: "Professional" }, { label: "Focus", value: "Holistic Care" }],
                points: [
                    "Core Care Verticals: Comprehensive expertise in Geriatric Care, Childcare / Early Child Development, and specialized Home-based Respite care.",
                    "Community Support Ecosystems: Integrated protocols focusing on Community Based care and structured Disability support modules.",
                    "Specialized Job Roles: Dedicated career training pipelines for Geriatric Care Assistant, Associate-cum-Coordinator, and Home Health Aide profiles.",
                    "Frontline Healthcare Delivery: Extensive operational skill development for Frontline Healthcare Giving and General Duty Assistant (GDA) teams.",
                    "Technical Electives: Advanced clinical training covering Vital Monitoring, Geriatric Nutrition, Patient Ethics, and Emergency Response protocols."
                ],
                medical: "Geriatric Care, Childcare, Respite & Community Care, Disability Support, GDA Protocols."
            }
        },
        {
            id: "03",
            title: "Counseling of Students & Trainers",
            tag: "2 Lakh+ Counseled",
            shortDesc: "JITM Skills has successfully counseled more than 200,000 (2 Lakh+) students and trainers under various Government, CSR, and Skill Development projects.",
            image: Counseling,
            fullDetails: {
                stats: [{ label: "Counseled", value: "200,000+" }, { label: "Standards", value: "NSQF" }],
                points: [
                    "Pre-training & post-training career counseling.",
                    "Career orientation aligned with NSQF & industry standards.",
                    "Trainer counseling for pedagogy improvement & delivery excellence.",
                    "Student motivation, retention & dropout reduction support.",
                    "Guidance for placement readiness & long-term career growth."
                ],
                medical: "Our structured counseling approach ensures participants clearly understand career opportunities and employability pathways."
            }
        },
        // --- ABHI WALE 6 PROGRAMS (EXACT CONTENT) ---
        {
            id: "04",
            title: "Jal Jeevan Mission",
            tag: "SWSM UP",
            shortDesc: "Engaged in Information, Education and Communication (IEC) activities for the State Water and Sanitation Mission (SWSM), Uttar Pradesh.",
            image: JalJeevanMission,
            fullDetails: {
                stats: [{ label: "Level", value: "GP/Block" }, { label: "Mission", value: "JJM" }],
                points: [
                    "IEC activities at State, District, Block & Gram Panchayat levels.",
                    "Outdoor media including hoardings, wall writings & banners.",
                    "LED vans, digital campaigns & audio-visual content.",
                    "Production of video films, signboards & awareness creatives.",
                    "Community engagement through innovative & localized IEC tools."
                ],
                medical: "Focuses on creating large-scale awareness about safe drinking water, water conservation, sanitation, and community participation."
            }
        },
        {
            id: "05",
            title: "Supply of IT & Essential Equipment",
            tag: "Govt. Logistics",
            shortDesc: "Successfully supplied a wide range of IT and essential infrastructure equipment to various government and institutional organizations.",
            image: ITSupply,
            fullDetails: {
                stats: [{ label: "Supply", value: "IT/Essential" }, { label: "Standards", value: "Quality" }],
                points: [
                    "Supply to organizations including Hartron & Amtron.",
                    "Equipment supply under PMKK skill development projects.",
                    "Associated with JSDM (Jharkhand), BSDM (Bihar) & UPSDM (Uttar Pradesh).",
                    "Compliance with quality standards, warranty & installation support.",
                    "Supplies include desktops, laptops, digital learning devices, vending machines, and sanitary napkin machines."
                ],
                medical: "Supporting large-scale skill development and welfare initiatives while strengthening digital infrastructure & hygiene."
            }
        },
        {
            id: "06",
            title: "Govt. Schemes",
            tag: "Pan-India",
            shortDesc: "Partners with multiple Central and State Government ministries to deliver flagship skill development missions across India.",
            image: GovtSchemes,
            fullDetails: {
                stats: [{ label: "Status", value: "NSQF Aligned" }, { label: "Impact", value: "Certified" }],
                points: [
                    "Pan-India implementation capability.",
                    "NSQF-compliant, industry-aligned curriculum.",
                    "Technology-enabled training approach.",
                    "Strong industry placement support.",
                    "Focus on women & minority participation."
                ],
                medical: "Empowering youth from rural, urban, and marginalized communities with industry-relevant skills and employment pathways."
            }
        },
        {
            id: "07",
            title: "CSR Projects",
            tag: "Corporate Pillar",
            shortDesc: "Collaborate with top Indian companies to design and implement customized skill development initiatives focused on sustainable livelihood.",
            image: CSRPartnerships,
            fullDetails: {
                stats: [{ label: "Model", value: "Impact" }, { label: "Focus", value: "Livelihood" }],
                points: [
                    "Skill training for unemployed youth.",
                    "Women empowerment & self-help group capacity building.",
                    "Digital literacy initiatives.",
                    "Vocational training aligned to local industry demand.",
                    "Placement, apprenticeship & micro-entrepreneurship support."
                ],
                medical: "Built around principles of impact, scalability, transparency, and long-term socio-economic development."
            }
        },
        {
            id: "08",
            title: "Entrepreneurship Training (EDP/ESDP)",
            tag: "Start & Grow",
            shortDesc: "Empowering youth to start and grow their own businesses with confidence and practical skills.",
            image: EDPESDP,
            fullDetails: {
                stats: [{ label: "Mentoring", value: "Industry" }, { label: "Focus", value: "Business" }],
                points: [
                    "Business idea development & validation.",
                    "Financial planning, budgeting & market assessment.",
                    "Hands-on mentoring from industry professionals.",
                    "Training in branding, digital marketing & customer engagement.",
                    "Guidance on government schemes & startup support frameworks."
                ],
                medical: "Helping aspiring entrepreneurs convert their ideas into sustainable and profitable ventures."
            }
        },
        {
            id: "09",
            title: "Placement & Apprenticeship Support",
            tag: "Employment Support",
            shortDesc: "Connecting skilled candidates with meaningful employment opportunities and dedicated support from training to placement.",
            image: PlacementSupport,
            fullDetails: {
                stats: [{ label: "Network", value: "Strong" }, { label: "Career", value: "Long-term" }],
                points: [
                    "Job readiness training (interviews, communication, grooming).",
                    "Industry-aligned assessments & certification.",
                    "Apprenticeship opportunities under national apprenticeship programs.",
                    "Partnerships with leading employers across multiple sectors.",
                    "Job fairs, recruitment drives & personalized career counselling."
                ],
                medical: "Our strong employer network enables candidates to secure stable jobs and build long-term careers."
            }
        }
    ]
};

export const SKILL_INITIATIVES = {
    superTitle: "SKILL DEVELOPMENT INITIATIVES",
    title: "Building India’s Future Workforce",
    description: "JITM Skills runs large-scale sector-based skilling projects catering to youth, women, school dropouts, and unemployed individuals across various states.",
    features: [
        "National Skill Qualification Framework (NSQF) standards",
        "Practical, job-oriented classroom & lab sessions",
        "Industry exposure & on-the-job training",
        "Soft skills, workplace readiness & English communication",
        "Certification from NSDC/SSC or State Skill Missions"
    ],
    mission: "Our mission is to ensure every trained candidate progresses toward a sustainable livelihood."
};



// image imports for schemes section

import ddugkyImage from "../assets/images/Verticals/DDU-GKY – Deen Dayal Upadhyaya Grameen Kaushalya Yojana.webp";
import pmkvyImage from "../assets/images/Verticals/PMKVY – Pradhan Mantri Kaushal Vikas Yojana.webp";
import pmkkImage from "../assets/images/Verticals/Pradhan-Mantri-Kaushal-Kendra.webp";
import nulmImage from "../assets/images/Verticals/NULM – National Urban Livelihoods Mission.webp";
import manasImage from "../assets/images/Verticals/MANAS – Seekho Aur Kamao.webp";
import stateMissionsImage from "../assets/images/Verticals/State Skill Development Missions (SSDMs) in India Structure, Role, and Opportunities for Stakeholders.webp";

export const SCHEMES_SECTION_DATA = {
    header: {
        superTitle: "GOVERNMENT SKILL MISSIONS",
        title: "Empowering Rural & Urban",
        subtitle: "Youth Through Skill Missions",
        description: "JITM Skills works under major national schemes like DDU-GKY, PMKVY, and PMKK, delivering high-quality vocational training. These flagship programs focus on job-ready skills, certifications, and guaranteed placements for India’s youth."
    },
    schemes: [
        {
            id: "ddugky",
            title: "DDU-GKY – Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
            tag: "Flagship Program",
            image: ddugkyImage,
            intro: "DDU-GKY is the flagship rural livelihood program of the Ministry of Rural Development (MoRD). JITM Skills is a proud Project Implementing Agency (PIA) under this mission.",
            benefits: [
                "Free residential training",
                "Uniforms, study material, meals & accommodation",
                "Guaranteed placement for at least 70% of certified candidates",
                "Strong focus on rural poverty alleviation"
            ],
            impact: { trained: "18,000+", placed: "12,500+" } //
        },
        {
            id: "pmkvy",
            title: "PMKVY – Pradhan Mantri Kaushal Vikas Yojana",
            tag: "Skill Certification",
            image: pmkvyImage,
            intro: "PMKVY is India's largest skill certification scheme aimed at empowering youth through short-term skill training.",
            benefits: [
                "Training aligned to SSC-approved job roles",
                "Free skill certification under Skill India Mission",
                "Both new entrants & RPL candidates eligible",
                "Placement & entrepreneurship support"
            ],
            impact: { trained: "50,000+", placed: "18+ States" } //
        },
        {
            id: "pmkk",
            title: "PMKK – Pradhan Mantri Kaushal Kendra",
            tag: "Model Skill Centres",
            image: pmkkImage,
            intro: "PMKK centres are model skill centres that showcase the highest standard of quality in training and infrastructure. JITM manages multiple PMKK facilities across India.",
            benefits: [
                "World-class labs & digital classrooms",
                "Industry-powered training delivery",
                "Multi-sector training capabilities",
                "Placement guarantee & tracking"
            ],
            impact: { trained: "High-Quality", placed: "Model Centres" } //
        },
        {
            id: "nulm",
            title: "NULM – National Urban Livelihoods Mission",
            tag: "Urban Livelihood",
            image: nulmImage,
            intro: "NULM focuses on improving the livelihoods of the urban poor through skill training and job placement programs.",
            benefits: [
                "Training for youth aged 18–35",
                "Soft skills & life skills development",
                "City-level placement linkages",
                "Programs for women, slum communities & migrants"
            ],
            impact: { trained: "8,500+", placed: "6,200+" } //
        },
        {
            id: "manas",
            title: "MANAS – Seekho Aur Kamao",
            tag: "Minority Empowerment",
            image: manasImage,
            intro: "This minority-focused program provides vocational training and sustainable employment opportunities to underrepresented communities.",
            benefits: [
                "Free training, certification & placement support",
                "Courses in high-growth sectors",
                "Special focus on minority youth & women"
            ],
            impact: { trained: "Focused", placed: "Sustainable" } //
        },
        {
            id: "state-missions",
            title: "State Skill Missions (UKSDM, JSDM, RSLDC, etc.)",
            tag: "Localized Skilling",
            image: stateMissionsImage,
            intro: "We partner with various State Skill Development Missions to implement customized training programs for local industry needs across 20+ states.",
            benefits: [
                "State-specific job demand mapping",
                "Localized training curriculum",
                "District-level implementation",
                "Public-private collaboration for placement"
            ],
            impact: { trained: "20+ States", placed: "Regional Reach" } //
        }
    ]
};


// Key Training Sectors
import retailImage from '../assets/images/Retail Training.webp';
import tailoringImage from '../assets/images/Apparel & Tailoring Training.webp';
import electronicsImage from '../assets/images/Skill Progression.webp';
import healthcareImage from '../assets/images/healthcare.webp';
import DigitalSkills from '../assets/images/it-digital-img.webp';
import hospitalityImage from '../assets/images/Hospitality-trenning.webp';
import Agriculture from '../assets/images/Agriculture Training.webp';
import beautyImage from '../assets/images/Beauty Wellness Training.webp';
import corporateTraining from '../assets/images/Corporate Training.webp';
import Construction from '../assets/images/Construction & Infra.webp';
import careEconomySector from '../assets/images/Home-Care-Services.webp';

// Paid Courses Images Import 
import frontendImage from '../assets/images/Frontend Developer.webp';
import webDesign from '../assets/images/Web Design.webp';
import WordPressCMS from '../assets/images/WordPress.webp';
import digitalMarketing from '../assets/images/Digital Marketing.webp';
import basicComputer from '../assets/images/Computer Basics.webp';
import CustomerCallImage from '../assets/images/Customer Care Executive.webp';
import SalesTelecalling from '../assets/images/Sales & Telecalling Training.webp';
import officeMisExecutive from '../assets/images/Office MIS Executive.webp';
import HRTraining from '../assets/images/HR Recruiter Training.webp'
import HotelManagement from '../assets/images/Hotel Management Basics.webp';
import FrontExecutive from '../assets/images/Front Office Executive.webp';
import TravelTourismExecutive from '../assets/images/Travel & Tourism Executive.webp';
import GraphicDesign from '../assets/images/Graphic Design.webp';
import VideoEditing from '../assets/images/Video Editing.webp';
import FilmProduction from '../assets/images/Film Production Basics.webp';
import ContentCreationSocialMedia from '../assets/images/Content Creation & Social Media.webp';
import PhotographyTraining from '../assets/images/Photography Basics.webp';
import ARVRDevelopment from '../assets/images/ARVR Development.webp';
import ArtificialIntelligenceTools from '../assets/images/Artificial Intelligence & Tools.webp';
import DataAnalytics from '../assets/images/Data Analytics.webp';
import LabAsstTraining from '../assets/images/Lab Assistant Training.webp';
import PhlebotomistTch from '../assets/images/Phlebotomis.webp';
import MedicalLabTechnician from '../assets/images/Medical Lab Technician.webp';
import FrontDeskExecutive from '../assets/images/Front Desk Executive (Medical).webp';
import MedicalEquipment from '../assets/images/Medical Equipment Handling.webp';
import RadiologyAssistant from '../assets/images/Radiology Assistant.webp';
import OTAssistant from '../assets/images/OT Assistant (Operation Theatre).webp';
import MedicalCoding from '../assets/images/Medical Billing & Coding.webp';

export const trainingSectors = [
    {
        id: 1,
        title: "Retail Sector Development",
        category: "Government", // Category as per your logic
        duration: "3 Months",
        image: retailImage,
        description: "India’s retail industry is evolving rapidly, creating consistent demand for skilled frontline and operational staff. JITM Skills’ Retail programs are designed to produce industry-ready retail professionals.",
        subContent: "Focuses on building a strong customer-first mindset, operational efficiency, and workplace professionalism.",
        // Full content for Modal
        keyAreas: [
            "Customer Engagement: Communication skills and handling queries.",
            "POS & Digital Billing: POS operations and digital payments.",
            "Sales & Merchandising: Upselling and visual merchandising.",
            "Inventory Management: Stock tracking and storage methods.",
            "Professional Behaviour: Ethics, grooming, and teamwork."
        ],
        outcomes: [
            "Supermarkets & Hypermarkets",
            "Branded Retail Chains & Malls",
            "E-commerce Fulfilment Centres",
            "Lifestyle & Specialty Stores"
        ],
        features: ["Hands-on Training", "Pan-India Placement", "Real-world Simulations"]
    },
    {
        id: 2, // Id check kar lena sequence ke hisab se
        title: "Apparel & Tailoring",
        category: "Government",
        duration: "3 Months", // Default rakha hai, change kar sakte ho
        image: tailoringImage,
        description: "The apparel and garment sector is one of India’s largest employment generators, offering opportunities across factories, export houses, boutiques, and home-based tailoring units. JITM Skills delivers hands-on, job-ready apparel training that mirrors real production environments.",
        subContent: "Practical, production-oriented skill development designed for India’s fast-growing garment, fashion, and tailoring ecosystem.",

        // Skill Development Process steps ko keyAreas mein convert kiya hai
        keyAreas: [
            "Step 1: Drafting, accurate measurements, cutting layouts, and garment finishing fundamentals.",
            "Step 2: Operation of industrial sewing machines with focus on speed, safety, and stitch quality.",
            "Step 3: Fabric understanding, basic pattern making, and apparel customisation skills.",
            "Step 4: Production efficiency, quality inspection, defect control, and industry standards."
        ],

        // Career Pathways ko outcomes mein convert kiya hai
        outcomes: [
            "Export Houses & Garment Factories",
            "Fashion Studios & Boutiques",
            "Home-based Tailoring & Custom Services",
            "Independent Fashion Work"
        ],

        // Features tags
        features: ["Hands-on", "Industry Aligned", "Outcome Driven"]
    },
    {
        id: 3,
        title: "Electronics & Mobile Repair",
        category: "Government",
        duration: "3 Months",
        image: electronicsImage, // Technical repair image
        description: "India is the world’s second-largest smartphone market, creating continuous demand for skilled technicians. Our program focuses on real-device exposure, practical fault detection, and service-centre readiness. We bridge the gap between theoretical knowledge and professional field expertise.",
        subContent: "Hands-on technical skilling for India’s fast-growing smartphone and electronics repair ecosystem.",

        // Skill Progression ko keyAreas mein convert kiya hai (Step by Step)
        keyAreas: [
            "Step 1: Diagnostics & Troubleshooting - Identifying hardware and software faults using systematic techniques.",
            "Step 2: Component-Level Repair - Soldering, micro-soldering, IC handling, and motherboard fault correction.",
            "Step 3: Part Replacement - Battery, display, charging port, speaker, and camera module installation.",
            "Step 4: Software Services - OS flashing, data backup, recovery, and advanced software reinstallations."
        ],

        // Career Opportunities ko outcomes mein convert kiya hai
        outcomes: [
            "Authorized Service Centres (Apple, Samsung, Mi, etc.)",
            "Mobile Repair Chains & Retail Outlets",
            "Self-Employment: Own Repair Shop Setup",
            "Freelance Technician & Home-Based Services"
        ],

        // Features tags
        features: ["Practical Training", "Job-Oriented", "Industry Aligned"]
    },
    {
        id: 4,
        title: "Healthcare & Nursing Assistant",
        category: "Government",
        duration: "3 Months",
        image: healthcareImage,
        description: "A strong and compassionate workforce is vital to India’s healthcare system. JITM Skills prepares Nursing Assistants who combine technical healthcare support with empathy, ethical responsibility, and patient-focused care. Our training ensures that assistants are ready to support patients across hospitals, clinics, and home-care environments with professional excellence.",
        subContent: "Supporting India’s healthcare system with compassionate, ethically responsible, and professionally trained nursing assistants.",
        keyAreas: [
            "Patient Care & Hygiene: Assistance with mobility, daily support, and bed care protocols.",
            "Vitals & Medical Assistance: Monitoring vital signs, charting, and assisting in medical procedures.",
            "Infection Control: Sterilization processes, infection prevention, and hospital safety standards.",
            "Emergency & Elderly Care: Emergency response readiness and specialized protocols for elderly patients.",
            "Ethics & Communication: Confidentiality, empathy, and professional patient interaction."
        ],
        outcomes: [
            "Hospitals & Nursing Homes",
            "Diagnostic & Rehabilitation Centres",
            "Home-Care & Elderly Support Agencies",
            "Community Health & Wellness Programs"
        ],
        features: ["Care Driven", "Safety Focused", "Professionally Trained"]
    },
    {
        id: 5,
        title: "IT & Digital Skills",
        category: "Free",
        duration: "3 Months",
        image: DigitalSkills,
        description: "Digital proficiency is no longer optional — it is essential for modern workplaces. JITM Skills equips learners with practical computer tools, communication software, and digital awareness required for office and IT-enabled service environments. From basic system navigation to professional documentation, we build workplace-ready digital foundations.",
        subContent: "Essential digital proficiency for modern workplaces, covering office productivity, data handling, and online communication.",
        keyAreas: [
            "Computer Basics: System navigation, folder structuring, and professional file management.",
            "MS Office Suite: Advanced Word, Excel, and PowerPoint usage for workplace reporting.",
            "Professional Communication: Email writing, online etiquette, and formal workplace coordination.",
            "Data & Digital Records: Data entry accuracy, CRM basics, and digital record maintenance.",
            "Digital Awareness: Introduction to social media content and safe online presence."
        ],
        outcomes: [
            "Office Administration & Clerical Roles",
            "Customer Support & Service Desks",
            "IT-Enabled Services (ITES) Operations",
            "Data Entry & CRM Management Firms"
        ],
        features: ["Workplace Ready", "Productivity Focused", "Digital Foundation"]
    },
    {
        id: 6,
        title: "Hospitality & Tourism Skills",
        category: "Government",
        duration: "3 Months",
        image: hospitalityImage,
        description: "Build a global hospitality career with industry-ready service excellence. Our training focuses on practical exposure, service standards, and professional etiquette required by leading hotels, resorts, and tourism organizations worldwide. We prepare learners for multicultural exposure and international hospitality standards.",
        subContent: "Global service excellence training covering front office, housekeeping, and F&B operations for international standards.",
        keyAreas: [
            "Step 01: Front Office & Guest Handling - Reception operations and reservation systems.",
            "Step 02: Housekeeping & Hygiene - Cleanliness protocols and room service quality checks.",
            "Step 03: Food & Beverage Service - Restaurant service, banquet setup, and table etiquette.",
            "Step 04: Kitchen Basics & Safety - Culinary foundations and food safety preparation methods.",
            "Step 05: Professional Grooming - Communication standards and professional hospitality etiquette."
        ],
        outcomes: [
            "Luxury Hotels & International Resorts",
            "Restaurants & QSR (Quick Service) Chains",
            "Cruise Lines & International Hospitality",
            "Event Management & Coordination Teams"
        ],
        features: ["Global Readiness", "Professional Etiquette", "Industry Exposure"]
    },
    {
        id: 7,
        title: "Agriculture & Allied Skills",
        category: "Government",
        duration: "3 Months",
        image: Agriculture,
        description: "For millions of rural households, agriculture remains the core livelihood. JITM Skills provides modern, sustainable, and profitable agricultural training to empower farmers and rural youth. Our program integrates scientific cultivation technologies with agri-business planning to ensure long-term rural development and economic stability.",
        subContent: "Sustainable farming and livestock management training to empower rural youth with profitable agricultural knowledge.",
        keyAreas: [
            "Scientific Crop Production: Modern farming technologies and scientific cultivation practices.",
            "Soil & Irrigation: Health improvement, seed treatment, and efficient irrigation methods.",
            "Organic Farming: Natural resource conservation and organic cultivation techniques.",
            "Allied Sectors: Livestock, poultry, goatery, and fisheries management skills.",
            "Agri-Business: Post-harvest techniques, value addition, and market linkage planning."
        ],
        outcomes: [
            "Improved Farm Productivity & Higher Yields",
            "Agri-Allied Livestock Enterprises",
            "FPOs (Farmer Producer Organizations) & Cooperatives",
            "Agri-Entrepreneurship & Rural Ventures"
        ],
        features: ["Sustainable Income", "Modern Technology", "Rural Empowerment"]
    },
    {
        id: 8,
        title: "Beauty & Wellness",
        category: "Free",
        duration: "3 Months",
        image: beautyImage,
        description: "As grooming trends grow rapidly, trained professionals are finding opportunity-rich careers. This program focuses on building strong practical skills, professional confidence, and client-handling expertise required in modern salons, spas, and wellness centres. We ensure our learners are career-ready for both employment and independent ventures.",
        subContent: "Industry-focused beauty and wellness training designed for real salon and spa environments.",
        keyAreas: [
            "Skin & Wellness Care: Facials, cleanups, massage basics, and spa wellness principles.",
            "Hair Styling & Care: Cutting, coloring, professional styling, and modern hair care routines.",
            "Makeup Artistry: Daily, bridal, and professional makeup techniques for studio excellence.",
            "Client Etiquette: Salon hygiene, professional consultation, and service quality standards."
        ],
        outcomes: [
            "Professional Beauty & Hair Salons",
            "Wellness Centres & Luxury Spas",
            "Bridal Makeup & Styling Studios",
            "Freelance Beauty Services & Salon Ownership"
        ],
        features: ["Hands-on Practice", "Salon Hygiene", "Self-Employment Ready"]
    },
    {
        id: 9,
        title: "Custom Corporate Training",
        category: "Free",
        duration: "Flexible",
        image: corporateTraining,
        description: "JITM Skills collaborates with leading organisations to design customised workforce development programs. Our solutions are structured to enhance employee capability, improve productivity, and align skills with evolving operational demands. We serve Corporates, MSMEs, and Government/NGOs for large-scale capacity building.",
        subContent: "Industry-aligned training frameworks, role-based modules, and skill-gap analysis for enterprise excellence.",
        keyAreas: [
            "Soft Skills & Communication: Workplace behaviour, teamwork, and leadership essentials.",
            "Customer Service & Sales: Service excellence and client retention strategies.",
            "Digital Tools & MIS: Productivity software, reporting systems, and MIS training.",
            "Operational Excellence: Process improvement and workflow optimization.",
            "Safety & Compliance: Regulatory compliance and professional ethics training."
        ],
        outcomes: [
            "Measurable Performance-Driven Learning",
            "Scalable Programs for Small to Large Teams",
            "Blended Delivery (Classroom & Digital)",
            "Detailed Performance Reporting & Analysis"
        ],
        features: ["Industry Aligned", "Scalable Solutions", "Performance Driven"]
    },
    {
        id: 10,
        title: "Construction Industry 4.0",
        category: "Government",
        duration: "3 Months",
        image: Construction,
        description: "Mastering the craft since 2013. We are bridging the gap between traditional craftsmanship and Industry 4.0. By integrating AI-driven simulations, IoT-enabled safety ecosystems, and AR/VR training, we transform labor into certified infrastructure professionals.",
        subContent: "Building India's foundations through advanced masonry, steel fixing, and IoT-enabled safety protocols.",
        keyAreas: [
            "AR/VR Simulations: Virtual reality modules to operate heavy machinery in 100% safe environments.",
            "IoT Safety Kits: Smart helmets with fall detection and wearable sensors for vitals monitoring.",
            "AI Video Analytics: Real-time assessment of precision in masonry and bar bending (85% Accuracy).",
            "Advanced Masonry & Steel Fixing: Mastering precision brickwork and structural integrity.",
            "Digital Skill Passports: QR-based verifiable records of certifications and medical fitness."
        ],
        outcomes: [
            "50,000+ Certified Professionals (MBOCW)",
            "17,000+ Certified Professionals (DBOCWWB)",
            "100% Health Screening & Medical Resilience",
            "Doorstep Training via Mobile Diagnostic Units"
        ],
        features: ["AR/VR Ready", "Safety 2.0", "AI Assessments"]
    },
    {
        id: 11,
        title: "Care Economy & Healthcare",
        category: "Free",
        duration: "6 Months",
        image: careEconomySector,
        description: "Empowering caregivers with globally aligned geriatric protocols. Our curriculum is built on four pillars: Vital Monitoring, Geriatric Nutrition, Patient Ethics, and Emergency Response. We bridge the gap between healthcare demand and an empathetic workforce.",
        subContent: "Holistic healthcare skilling integrating Yoga, Geriatric care, and Palliative assistance.",
        keyAreas: [
            "Geriatric Caregiver: Supporting elderly dignity and Activities of Daily Living (ADLs).",
            "Palliative Care Assistant: Pain management and emotional companionship for chronic illness.",
            "Home Health Aide (HHA): Clinical-grade monitoring directly at the patient’s home.",
            "General Duty Assistant (GDA): Core patient handling and hospital hygiene maintenance.",
            "Yoga Therapy & Wellness: Integrating therapeutic practices for holistic patient healing."
        ],
        outcomes: [
            "Certified Institutional & Homecare Staff",
            "Emergency & Critical Hospital Care Specialists",
            "Diabetes Care & Nutritional Coaching Experts",
            "Skill India & NSQF Aligned Certification"
        ],
        features: ["Empathy Driven", "NSQF Aligned", "Skill India Recognized"]
    },

    // Paid Courses 

    // IT AND DIGITAL SKILLS SECTOR
    {
        id: 13,
        title: "Frontend Developer",
        sector: "IT & Digital",
        category: "Paid",
        duration: "3 Months",
        image: frontendImage,
        description: "Learn HTML, CSS, JavaScript, and React to build modern websites and web applications. High-demand skill with job and freelance opportunities. We provide deep technical expertise combined with real-world project experience.",
        subContent: "Master modern web development with React and build industry-standard applications.",
        keyAreas: [
            "Core Tech: Mastering HTML5, CSS3, and Modern JavaScript (ES6+).",
            "Framework Excellence: In-depth React.js training with Hooks and State Management.",
            "Responsive Design: Building fluid layouts for mobile, tablet, and desktop.",
            "Project Deployment: Version control with Git and live hosting via Netlify/Vercel.",
            "UI/UX Implementation: Converting Figma/Adobe XD designs into pixel-perfect code."
        ],
        outcomes: [
            "1000% Guaranteed Placement in Top IT Firms",
            "Free Government Certification Assistance",
            "Life-Time Placement Support & Career Mentoring",
            "Freelancing Mastery & Client Acquisition Training"
        ],
        features: ["Project Based", "Life-time Support", "Job Ready"]
    },
    {
        id: 14,
        title: "Web Design",
        category: "Paid",
        sector: "IT & Digital",
        duration: "3 Months",
        image: webDesign,
        description: "Learn how to design modern and responsive websites using HTML, CSS, and design principles. Strong design foundation with job and freelance opportunities. Focus on visual aesthetics and user psychology.",
        subContent: "Bridge the gap between creativity and technology with professional web design skills.",
        keyAreas: [
            "Visual Hierarchy: Mastering layout, typography, and color theory.",
            "Coding Foundation: Semantic HTML and CSS for structural perfection.",
            "Design Principles: Understanding User Experience (UX) and User Interface (UI).",
            "Responsive Frameworks: Mastering Bootstrap and Tailwind CSS.",
            "Portfolio Building: Creating a professional showcase of your design work."
        ],
        outcomes: [
            "Placement in Leading Creative Agencies",
            "Certified Government Skill Recognition",
            "Unlimited Placement Support Access",
            "Freelance Design Business Setup Guide"
        ],
        features: ["Creative Focus", "Industry Standards", "Design Foundation"]
    },
    {
        id: 15,
        title: "WordPress & CMS Platforms",
        category: "Paid",
        sector: "IT & Digital",
        duration: "3 Months",
        image: WordPressCMS,
        description: "Learn to create and manage websites using WordPress and other CMS tools without coding. Quick website creation with freelance and client earning opportunities. Ideal for business owners and aspiring freelancers.",
        subContent: "Build professional, scalable websites quickly without writing a single line of code.",
        keyAreas: [
            "CMS Mastery: Complete WordPress dashboard and configuration setup.",
            "Page Builders: Professional design using Elementor and Divi.",
            "E-commerce Setup: Building online stores with WooCommerce integration.",
            "Plugin Management: Security, SEO, and Performance optimization tools.",
            "Maintenance: Site migration, backup management, and troubleshooting."
        ],
        outcomes: [
            "E-commerce Specialist Job Roles",
            "Free Government Vocational Certification",
            "Life-Time Career & Placement Support",
            "Independent Web Agency Ownership Path"
        ],
        features: ["No-Code Development", "Fast Earning", "CMS Expert"]
    },
    {
        id: 16,
        title: "Digital Marketing",
        category: "Paid",
        sector: "IT & Digital",
        duration: "3 Months",
        image: digitalMarketing,
        description: "Learn SEO, social media marketing, paid ads, content strategy, and analytics tools. Career in marketing or grow your own business online. We cover the entire digital ecosystem from traffic to conversion.",
        subContent: "Master the art of online growth and data-driven marketing strategies.",
        keyAreas: [
            "SEO & Content: On-page, Off-page, and Technical SEO strategies.",
            "Performance Marketing: Mastering Google Ads and Meta Ads Manager.",
            "SMM Mastery: Advanced Social Media Marketing and Branding.",
            "Analytics: Data tracking with Google Analytics 4 and GTM.",
            "Strategy: Funnel building and email marketing automation."
        ],
        outcomes: [
            "1000% Placement in Multi-National Agencies",
            "Free Govt Digital Literacy Certificate",
            "Life-Time Business Growth Mentoring",
            "Freelance Consultant Career Blueprint"
        ],
        features: ["ROI Focused", "Real Ad Spends", "Marketing Expert"]
    },
    {
        id: 17,
        title: "Computer Basics + Advanced Excel",
        category: "Paid",
        sector: "IT & Digital",
        duration: "3 Months",
        image: basicComputer,
        description: "Learn computer fundamentals, MS Office, advanced Excel tools, data analysis, and reporting. Useful for office jobs and daily professional work. Transition from basic user to data-driven professional.",
        subContent: "The essential foundation for any professional office or administrative career.",
        keyAreas: [
            "MS Office Suite: Professional Word, PowerPoint, and Outlook usage.",
            "Advanced Excel: Pivot tables, VLOOKUP, Macros, and Data Visualization.",
            "Data Analysis: Using Excel for business insights and automated reporting.",
            "Office Ops: Typing speed, file management, and professional email etiquette.",
            "System Basics: Windows OS, internet safety, and hardware fundamentals."
        ],
        outcomes: [
            "Guaranteed Office Administration Placement",
            "Free State/Central Govt Certification",
            "Life-Time Job Assistance Support",
            "Data Analyst Entry-Level Readiness"
        ],
        features: ["Office Essentials", "Data Analysis", "100% Practical"]
    },

    // jOB-ORIENTED COURSES

    {
        id: 18,
        title: "Customer Care Executive",
        category: "Paid",
        sector: "Job-Oriented",
        duration: "3 Months",
        image: CustomerCallImage,
        description: "Learn communication skills, call handling, customer support techniques, and professional conversation methods. This course offers easy entry into BPO and customer service jobs with stable career growth.",
        subContent: "Master the art of professional communication and customer relationship management.",
        keyAreas: [
            "Communication Skills: Verbal and non-verbal professional interaction.",
            "Call Handling: Managing inbound and outbound calls with standard protocols.",
            "Support Techniques: Query resolution and customer satisfaction metrics.",
            "BPO Industry Training: Understanding BPO, KPO, and international work culture.",
            "Soft Skills: Empathy, active listening, and conflict resolution."
        ],
        outcomes: [
            "1000% Placement in International & Domestic BPOs",
            "Life-time Career Growth & Salary Hike Support",
            "Free Government Certification Assistance",
            "Stable Career Path in Customer Service Excellence"
        ],
        features: ["BPO Ready", "Communication Focused", "Life-time Support"]
    },
    {
        id: 19,
        title: "Sales & Telecalling Training",
        category: "Paid",
        sector: "Job-Oriented",
        duration: "3 Months",
        image: SalesTelecalling,
        description: "Understand sales techniques, communication, client handling, negotiation, and closing strategies effectively. Open doors to jobs in sales, telecalling, and business development with performance-based growth.",
        subContent: "Turn your communication skills into revenue with professional sales training.",
        keyAreas: [
            "Sales Cycle: Understanding lead generation to deal closure.",
            "Negotiation Mastery: Closing deals and handling customer objections.",
            "Telecalling Etiquette: Professional tone and script management.",
            "Client Relationship: Building long-term business-to-consumer trust.",
            "Target Achievement: Time management and performance tracking."
        ],
        outcomes: [
            "Placement in Top Sales & Real Estate Firms",
            "Free Govt Certification & Skill Recognition",
            "Incentive-Based High Growth Career Support",
            "Life-time Access to Sales Workshops & Mentoring"
        ],
        features: ["ROI Driven", "Negotiation Expert", "Incentive Ready"]
    },
    {
        id: 20,
        title: "Office Admin / MIS Executive",
        category: "Paid",
        sector: "Job-Oriented",
        duration: "3 Months",
        image: officeMisExecutive,
        description: "Learn data handling, reporting, office management skills, documentation, and basic coordination tasks. Perfect for opportunities in corporate offices, admin roles, and back-office operations.",
        subContent: "Become the operational backbone of any professional organization.",
        keyAreas: [
            "MIS Reporting: Daily, weekly, and monthly data reporting using Excel.",
            "Documentation: Managing official records, filing, and digital storage.",
            "Office Coordination: Handling front-desk, vendors, and internal teams.",
            "Admin Operations: Inventory management and workplace logistics.",
            "Data Handling: Accuracy in record-keeping and database management."
        ],
        outcomes: [
            "Guaranteed Placement in Corporate Admin Roles",
            "Government-Aligned Office Skill Certification",
            "Life-time Placement Assistance in MNCs",
            "Entry-level readiness for Back-Office Operations"
        ],
        features: ["Corporate Ready", "MIS Expert", "Documentation Focused"]
    },
    {
        id: 21,
        title: "HR Recruiter Training",
        category: "Paid",
        sector: "Job-Oriented",
        duration: "3 Months",
        image: HRTraining,
        description: "Learn the hiring process, interview handling, candidate management, screening, and recruitment coordination techniques. Career opportunities in HR, recruitment agencies, and corporate HR departments.",
        subContent: "Learn the art of finding and hiring the right talent for the modern world.",
        keyAreas: [
            "Sourcing Talent: Using Job portals (Naukri, LinkedIn, Indeed) for hiring.",
            "Screening: Resume shortlisting and initial telephonic screening.",
            "Interview Coordination: Scheduling and managing the selection process.",
            "Candidate Management: Relationship building and offer negotiation.",
            "HR Documentation: Offer letters, onboarding, and payroll basics."
        ],
        outcomes: [
            "1000% Placement in HR Consultancies & Corporates",
            "Life-time Support for Career Advancement in HR",
            "Free Government Certification in HR Operations",
            "Expert Training in Recruitment Technology & ATS"
        ],
        features: ["Hiring Specialist", "Portal Mastery", "Corporate HR Ready"]
    },

    // Hospitality & Tourism

    {
        id: 22,
        title: "Hotel Management Basics",
        category: "Paid",
        sector: "Hospitality",
        duration: "3 Months",
        image: HotelManagement,
        description: "Learn hotel operations, guest handling, service skills, hospitality standards, and customer experience management. Benefit from high-growth opportunities in hotels, resorts, and the broader hospitality industry.",
        subContent: "Master the fundamentals of world-class hotel operations and service excellence.",
        keyAreas: [
            "Hotel Operations: Understanding departments, workflow, and management.",
            "Guest Handling: Professional interaction and conflict resolution.",
            "Service Skills: Table etiquette, F&B service, and banquet management.",
            "Hospitality Standards: Global hygiene and service quality protocols.",
            "Customer Experience: Personalizing guest stays for maximum satisfaction."
        ],
        outcomes: [
            "1000% Placement in Luxury Hotels & Global Resorts",
            "Free Government Skill Certification & Recognition",
            "Life-time Career Support & International Placement Leads",
            "Fast-track Growth Path into Hospitality Management"
        ],
        features: ["Industry Aligned", "Service Focused", "Life-time Support"]
    },
    {
        id: 23,
        title: "Front Office Executive",
        category: "Paid",
        sector: "Hospitality",
        duration: "3 Months",
        image: FrontExecutive,
        description: "Specialized training in reception handling, communication, customer service, front desk operations, and client interaction skills. Open doors to jobs in hotels, corporate offices, hospitals, and various service sectors.",
        subContent: "Become the professional face of premium organizations with front-desk mastery.",
        keyAreas: [
            "Reception Mastery: Handling check-ins, check-outs, and walk-in queries.",
            "Communication: Fluent professional interaction and telephone etiquette.",
            "Front Desk Ops: Managing reservations, billing, and guest records.",
            "Client Interaction: Building rapport and managing service expectations.",
            "Corporate Readiness: Professional grooming and workplace discipline."
        ],
        outcomes: [
            "Guaranteed Placement in High-End Hotels & Corporate Offices",
            "Government-Backed Professional Skill Certification",
            "Life-time Access to Job Portals & Recruitment Drives",
            "Opportunities in Healthcare, Aviation, and Luxury Retail"
        ],
        features: ["Guest First", "Corporate Ready", "100% Practical"]
    },
    {
        id: 24,
        title: "Travel & Tourism Executive",
        category: "Paid",
        sector: "Hospitality",
        duration: "3 Months",
        image: TravelTourismExecutive,
        description: "Learn travel planning, booking systems, tourism management, itinerary creation, and customer handling. Unlock career opportunities in travel agencies, tourism companies, and airline support services.",
        subContent: "Explore a global career in travel planning and tourism management.",
        keyAreas: [
            "Travel Planning: Creating domestic and international tour packages.",
            "Booking Systems: Learning GDS, flight, and hotel reservation tools.",
            "Tourism Management: Understanding destination marketing and logistics.",
            "Itinerary Creation: Crafting personalized and efficient travel schedules.",
            "Customer Handling: Managing travel queries, visas, and post-tour feedback."
        ],
        outcomes: [
            "Placement in Leading Travel Agencies & Airline Hubs",
            "Free Government Certification for Tourism Professionals",
            "Life-time Support for Freelance Travel Consultancy",
            "Access to Global Tourism Networks & Placement Support"
        ],
        features: ["Global Vision", "Tech-Savvy Training", "Outcome Driven"]
    },

    // Creative & Media Courses

    {
        id: 25,
        title: "Graphic Design",
        category: "Paid",
        sector: "Creative & Media",
        duration: "3 Months",
        image: GraphicDesign,
        description: "Learn Canva, Photoshop, design principles, branding basics, and creative content development skills. Unlock freelance work, creative jobs, and design-based earning opportunities.",
        subContent: "Master the visual language of branding and creative communication.",
        keyAreas: [
            "Software Mastery: In-depth Photoshop, Illustrator, and Canva training.",
            "Design Principles: Typography, color theory, and layout composition.",
            "Branding Basics: Logo design and visual identity creation.",
            "Creative Content: Designing for social media, print, and digital ads.",
            "Portfolio Mastery: Building a professional design showcase."
        ],
        outcomes: [
            "1000% Placement in Creative Agencies & Design Studios",
            "Free Government Certification in Digital Arts",
            "Life-time Career Support & Freelance Client Leads",
            "Expertise in High-Value Visual Branding"
        ],
        features: ["Creative Focus", "Freelance Ready", "Life-time Support"]
    },
    {
        id: 26,
        title: "Video Editing",
        category: "Paid",
        sector: "Creative & Media",
        duration: "3 Months",
        image: VideoEditing,
        description: "Learn video editing using modern tools, transitions, effects, storytelling, and content creation techniques. Build a career in media, YouTube, and freelance video projects.",
        subContent: "Transform raw footage into compelling cinematic stories.",
        keyAreas: [
            "Software Training: Mastering Premiere Pro and After Effects basics.",
            "Storytelling: Understanding pacing, rhythm, and narrative flow.",
            "Visual Effects: Using transitions, motion graphics, and color grading.",
            "Audio Syncing: Sound design and professional background music mixing.",
            "Platform Optimization: Exporting high-quality videos for YouTube & Reels."
        ],
        outcomes: [
            "Placement in Media Houses & Production Agencies",
            "Government-Aligned Certification in Post-Production",
            "Life-time Support for Content Creator Career",
            "Freelancing Opportunities in Global Video Markets"
        ],
        features: ["Cinematic Skills", "YouTube Mastery", "Tech Focused"]
    },
    {
        id: 27,
        title: "Film Production Basics",
        category: "Paid",
        sector: "Creative & Media",
        duration: "3 Months",
        image: FilmProduction,
        description: "Understand video production, shooting, editing process, scripting, and basic direction techniques. Perfect entry into media, production houses, and creative industry roles.",
        subContent: "Learn the end-to-end process of bringing scripts to life on screen.",
        keyAreas: [
            "Cinematography: Camera angles, lighting setups, and shot composition.",
            "Scripting: Fundamentals of screenwriting and storyboard creation.",
            "Direction: Basic techniques for managing actors and site production.",
            "Production Design: Understanding sets, props, and visual continuity.",
            "Post-Production: Overview of sound, color, and final cut assembly."
        ],
        outcomes: [
            "1000% Placement Assistance in Production Houses",
            "Free Govt Certification for Media Professionals",
            "Life-time Mentoring from Industry Experts",
            "Entry-level Readiness for Film & TV Industry"
        ],
        features: ["On-Set Ready", "Industry Experts", "Life-time Support"]
    },
    {
        id: 28,
        title: "Content Creation & Social Media",
        category: "Paid",
        sector: "Creative & Media",
        duration: "3 Months",
        image: ContentCreationSocialMedia,
        description: "Learn content creation, social media strategy, reels making, and audience engagement techniques. Career as a content creator, influencer, or social media manager.",
        subContent: "Build and scale your digital presence with viral content strategies.",
        keyAreas: [
            "Strategy: Developing viral content ideas and audience personas.",
            "Reels & Shorts: Mastering short-form video creation and trends.",
            "Engagement: Techniques for community building and follower growth.",
            "Platform Analytics: Understanding Instagram, TikTok, and YouTube data.",
            "Influencer Basics: Personal branding and brand collaboration tips."
        ],
        outcomes: [
            "Placement in Digital Marketing Agencies & Brands",
            "Government-Backed Digital Literacy Certification",
            "Life-time Support for Growing Your Personal Brand",
            "Career as a Professional Social Media Manager"
        ],
        features: ["Trend Focused", "Brand Building", "Direct Impact"]
    },
    {
        id: 29,
        title: "Photography Basics",
        category: "Paid",
        sector: "Creative & Media",
        duration: "3 Months",
        image: PhotographyTraining,
        description: "Learn camera handling, lighting, composition, and photo editing basics. Opportunities in photography, freelancing, and the media industry.",
        subContent: "Capture the world with professional technical and creative precision.",
        keyAreas: [
            "Camera Handling: Mastering ISO, Aperture, and Shutter Speed.",
            "Composition: Rule of thirds, framing, and creative perspective.",
            "Lighting: Natural and studio lighting setups for different moods.",
            "Photo Editing: Basic retouching using Lightroom and Photoshop.",
            "Niche Exploration: Introduction to Portrait, Product, and Event photography."
        ],
        outcomes: [
            "Placement in Photo Studios & Fashion Houses",
            "Free State/Central Govt Certification for Photographers",
            "Life-time Access to Freelance Photography Gigs",
            "Expert Training in Commercial & Studio Photography"
        ],
        features: ["100% Practical", "Studio Exposure", "Creative Career"]
    },

    // Emerging Technology

    {
        id: 30,
        title: "AR/VR Development",
        category: "Paid",
        sector: "Emerging Tech",
        duration: "3 Months",
        image: ARVRDevelopment,
        description: "Introduction to Augmented Reality, Virtual Reality tools, basic development concepts, and interactive experiences. Gain future-ready skills with opportunities in emerging tech industries and metaverse development.",
        subContent: "Step into the future of immersive technology and digital world building.",
        keyAreas: [
            "Core Concepts: Understanding AR vs VR and Mixed Reality (MR) ecosystems.",
            "Tool Mastery: Introduction to Unity 3D and Unreal Engine fundamentals.",
            "Interactive Design: Creating 3D assets and immersive user interfaces.",
            "Development: Basic C# scripting for interactive VR/AR experiences.",
            "Platform Deployment: Building for Oculus, mobile AR (ARCore/ARKit), and headsets."
        ],
        outcomes: [
            "1000% Placement in Gaming & Tech Innovation Labs",
            "Free Government Certification in Emerging Technologies",
            "Life-time Access to Immersive Tech Workshops",
            "Career Paths in Metaverse & Industrial Simulation Design"
        ],
        features: ["Metaverse Ready", "Future Tech", "Life-time Support"]
    },
    {
        id: 31,
        title: "Artificial Intelligence (AI) & Tools",
        category: "Paid",
        sector: "Emerging Tech",
        duration: "3 Months",
        image: ArtificialIntelligenceTools,
        description: "Learn basics of Artificial Intelligence, AI tools, automation, and real-world applications. High-demand skill with opportunities across multiple industries from healthcare to finance.",
        subContent: "Master the power of AI to automate, innovate, and lead the digital revolution.",
        keyAreas: [
            "AI Fundamentals: Understanding Machine Learning and Neural Networks basics.",
            "Tool Integration: Mastering ChatGPT, Midjourney, and Productivity AI tools.",
            "Automation: Building no-code AI workflows and task automation.",
            "Prompt Engineering: Crafting high-level prompts for business efficiency.",
            "Ethics & Applications: Implementing AI responsibly in real-world projects."
        ],
        outcomes: [
            "Placement in AI-Driven Corporates & Startups",
            "Government-Aligned Certification in AI Literacy",
            "Life-time Support for AI Tool Integration & Mastery",
            "Roles in AI Operations, Content Automation, and Tech Strategy"
        ],
        features: ["AI Powered", "Automation Expert", "High Demand"]
    },
    {
        id: 32,
        title: "Data Analytics",
        category: "Paid",
        sector: "Emerging Tech",
        duration: "3 Months",
        image: DataAnalytics,
        description: "Learn data handling, basic analytics, Excel tools, and data interpretation techniques. Highly useful skill for IT, business, and decision-making roles in the modern data-driven economy.",
        subContent: "Transform raw data into powerful business insights and strategic decisions.",
        keyAreas: [
            "Data Handling: Managing large datasets with accuracy and integrity.",
            "Advanced Tools: Mastering Excel for Data Analysis and Pivot reporting.",
            "Visualization: Introduction to Power BI or Tableau for visual storytelling.",
            "Statistical Basics: Understanding trends, averages, and predictive patterns.",
            "Reporting: Creating professional dashboards for business stakeholders."
        ],
        outcomes: [
            "1000% Placement in Business Intelligence & Analyst Roles",
            "Free Government Certification for Data Professionals",
            "Life-time Mentorship for Career Advancement in Big Data",
            "Readiness for MNC Back-Office & Strategy Departments"
        ],
        features: ["Data Driven", "Insight Focus", "Life-time Support"]
    },

    // Medical Diagnostic & Equipment Courses

    {
        id: 33,
        title: "Lab Assistant Training",
        category: "Paid",
        sector: "Medical Diagnostic",
        duration: "3 Months",
        image: LabAsstTraining,
        description: "Learn lab operations, sample handling, reporting, equipment usage, and diagnostic testing procedures. Ideal for jobs in labs, diagnostic centers, and healthcare facilities.",
        subContent: "Master the technical foundations of modern diagnostic laboratory operations.",
        keyAreas: [
            "Lab Operations: Understanding workflow and safety protocols in a lab setting.",
            "Sample Handling: Techniques for collecting and preserving medical samples.",
            "Diagnostic Procedures: Basic testing methods and report generation.",
            "Equipment Usage: Handling centrifuges, microscopes, and automated analyzers.",
            "Medical Reporting: Data entry and accuracy in diagnostic documentation."
        ],
        outcomes: [
            "1000% Guaranteed Placement in Premium Diagnostic Chains",
            "Free Government Certification for Healthcare Professionals",
            "Life-time Career Support & Placement Assistance",
            "Career Growth in Private & Government Hospital Labs"
        ],
        features: ["Clinical Ready", "Lab Expert", "Life-time Support"]
    },
    {
        id: 34,
        title: "Phlebotomist",
        category: "Paid",
        sector: "Medical Diagnostic",
        duration: "3 Months",
        image: PhlebotomistTch,
        description: "Specialized training in blood sample collection, patient handling, safety procedures, and clinical practices. Essential for work in hospitals, clinics, and diagnostic labs.",
        subContent: "Expert-level blood collection and patient care training for clinical settings.",
        keyAreas: [
            "Collection Techniques: Mastering venipuncture and capillary collection.",
            "Patient Handling: Communication and comfort during sample collection.",
            "Safety Protocols: Understanding infection control and biohazard disposal.",
            "Anatomy & Physiology: Detailed study of the circulatory system.",
            "Clinical Accuracy: Proper labeling and transportation of samples."
        ],
        outcomes: [
            "Placement in Leading Multispecialty Hospitals",
            "Government-Aligned Professional Phlebotomy Certification",
            "Life-time Job Assistance & Recruitment Access",
            "Readiness for Diagnostic Centers & Home Collection Services"
        ],
        features: ["Safety Focused", "Clinical Expert", "Job Ready"]
    },
    {
        id: 35,
        title: "Medical Lab Technician",
        category: "Paid",
        sector: "Medical Diagnostic",
        duration: "3 Months",
        image: MedicalLabTechnician,
        description: "Training in lab testing, equipment handling, sample analysis, and reporting techniques. Unlocks career opportunities in healthcare labs and diagnostic centers.",
        subContent: "Advanced technical training for high-precision medical laboratory analysis.",
        keyAreas: [
            "Advanced Testing: Biochemistry, Hematology, and Microbiology basics.",
            "Equipment Maintenance: Handling high-end diagnostic machinery.",
            "Sample Analysis: Interpreting results and quality control protocols.",
            "Data Management: Professional reporting and medical record keeping.",
            "Lab Safety: Maintaining a sterile and compliant work environment."
        ],
        outcomes: [
            "1000% Placement in Government-Approved Labs",
            "Free Government Skill Certification Assistance",
            "Life-time Access to Healthcare Career Workshops",
            "Opportunities in Research Labs & Pharmaceutical Units"
        ],
        features: ["Analytical Skills", "Equipment Master", "Life-time Support"]
    },
    {
        id: 36,
        title: "Front Desk Executive (Medical)",
        category: "Paid",
        sector: "Medical Diagnostic",
        duration: "3 Months",
        image: FrontDeskExecutive,
        description: "Learn patient handling, clinic management, appointment scheduling, billing, and front desk operations. Perfect for jobs in hospitals, clinics, and healthcare reception roles.",
        subContent: "Become the professional face of modern healthcare organizations.",
        keyAreas: [
            "Clinic Management: Coordinating patient flow and front-office duties.",
            "Scheduling: Mastering medical appointment systems and follow-ups.",
            "Medical Billing: Basic insurance claims and payment processing.",
            "Patient Relation: Communication skills for a compassionate healthcare environment.",
            "Documentation: Managing patient files and digital healthcare records."
        ],
        outcomes: [
            "Placement in Top Private Hospitals & Specialized Clinics",
            "Certified Government Healthcare Admin Recognition",
            "Life-time Support for Corporate Healthcare Roles",
            "Career Path into Hospital Administration & Operations"
        ],
        features: ["Patient First", "Admin Expert", "Corporate Ready"]
    },
    {
        id: 37,
        title: "Medical Equipment Handling Support",
        category: "Paid",
        sector: "Medical Diagnostic",
        duration: "3 Months",
        image: MedicalEquipment,
        description: "Learn usage, basic maintenance, and understanding of medical and diagnostic equipment. Opportunities in hospitals, labs, and medical equipment-related roles.",
        subContent: "Master the technology that powers modern life-saving healthcare.",
        keyAreas: [
            "Equipment Literacy: Understanding ICU, OT, and Diagnostic machinery.",
            "Operational Training: Setting up and operating medical devices.",
            "Basic Maintenance: Troubleshooting and preventive care of equipment.",
            "Safety Standards: Electrical safety and sterile handling protocols.",
            "Asset Management: Tracking and inventory of medical technology."
        ],
        outcomes: [
            "1000% Placement in Biomedical & Hospital Tech Teams",
            "Free Government Certification in Equipment Handling",
            "Life-time Career Support in the Med-Tech Industry",
            "Roles in Equipment Sales, Support, and Maintenance"
        ],
        features: ["Tech Focused", "Safety Standards", "Life-time Support"]
    },
    {
        id: 38,
        title: "Radiology Assistant",
        category: "Paid",
        sector: "Medical Diagnostic",
        duration: "3 Months",
        image: RadiologyAssistant,
        description: "Learn basics of X-ray, imaging support, patient positioning, and safety procedures. Essential for jobs in diagnostic centers, hospitals, and radiology departments.",
        subContent: "Support life-saving diagnostics through professional imaging assistance.",
        keyAreas: [
            "Imaging Support: Assisting in X-ray, CT, and MRI procedures.",
            "Patient Positioning: Precise handling for accurate diagnostic results.",
            "Radiation Safety: Protecting self and patient through safety protocols.",
            "Equipment Prep: Readying radiology rooms and imaging devices.",
            "Image Processing: Basic digital handling of diagnostic images."
        ],
        outcomes: [
            "Guaranteed Placement in Radiology & Imaging Centers",
            "Government-Backed Technical Skill Certification",
            "Life-time Access to Global Healthcare Job Drives",
            "Advanced Growth Path into Professional Radiography"
        ],
        features: ["Imaging Support", "Safety Focused", "Job Ready"]
    },
    {
        id: 39,
        title: "OT Assistant (Operation Theatre)",
        category: "Paid",
        sector: "Medical Diagnostic",
        duration: "3 Months",
        image: OTAssistant,
        description: "Learn operation theatre setup, equipment handling, sterilization, and surgical assistance basics. Opportunities in hospitals and surgical departments.",
        subContent: "Critical training for seamless operation theatre support and safety.",
        keyAreas: [
            "OT Setup: Preparing the theatre for various surgical procedures.",
            "Sterilization: Mastering autoclave and infection control standards.",
            "Surgical Assistance: Supporting surgeons with instruments and equipment.",
            "Patient Safety: Maintaining a sterile field during surgeries.",
            "Recovery Support: Assisting in post-operative patient movement."
        ],
        outcomes: [
            "1000% Placement in Private & Government Hospital OTs",
            "Free Government Certification for Surgical Technicians",
            "Life-time Placement Support for Global OT Roles",
            "Critical Care Ready Career Opportunities"
        ],
        features: ["Critical Care", "Sterilization Expert", "Life-time Support"]
    },
    {
        id: 40,
        title: "Medical Billing & Coding",
        category: "Paid",
        sector: "Medical Diagnostic",
        duration: "3 Months",
        image: MedicalCoding,
        description: "Learn hospital billing process, insurance claims, coding basics, and patient data management. Unlocks jobs in hospitals, clinics, and healthcare back-office roles.",
        subContent: "Become an expert in the financial and administrative heart of healthcare.",
        keyAreas: [
            "Billing Process: Understanding inpatient and outpatient billing cycles.",
            "Medical Coding: Introduction to ICD-10 and CPT coding standards.",
            "Insurance Claims: Processing and managing insurance documentation.",
            "Data Management: Maintaining accurate and confidential medical records.",
            "Revenue Cycle: Understanding the healthcare financial workflow."
        ],
        outcomes: [
            "Placement in Healthcare MNCs & Corporate Hospitals",
            "Free Government Professional Certification Assistance",
            "Life-time Remote & Office-based Career Support",
            "Stable Career in Healthcare Back-Office & Administration"
        ],
        features: ["Back-Office Ready", "Coding Expert", "High Demand"]
    }
];


import { Users, GraduationCap, Award, Building2 } from "lucide-react";
export const statstraining = [
    { id: 1, label: "Trained Professionals", value: "50,000+", icon: Users, desc: "Across various state & central initiatives" },
    { id: 2, label: "Training Sectors", value: "15+", icon: GraduationCap, desc: "From tech specializations to core industry trades" },
    { id: 3, label: "Govt Certifications", value: "100%", icon: Award, desc: "Skill India, NSDC & board aligned certificates" },
    { id: 4, label: "Placement Network", value: "Pan-India", icon: Building2, desc: "Connected with top corporate & industrial partners" },
];


// Student Testimonials
// image Import Students
// goverment and free students images
import Student1 from "../assets/images/studentTestimonials/SUCCESS1 (1).webp";
import Student2 from "../assets/images/studentTestimonials/SUCCESS1 (2).webp";
import Student3 from "../assets/images/studentTestimonials/SUCCESS1 (3).webp";
import Student4 from "../assets/images/studentTestimonials/SUCCESS1 (4).webp";
import Student5 from "../assets/images/studentTestimonials/SUCCESS1 (5).webp";
import Student6 from "../assets/images/studentTestimonials/SUCCESS1 (6).webp";
import Student7 from "../assets/images/studentTestimonials/SUCCESS1 (7).webp";
import Student8 from "../assets/images/studentTestimonials/SUCCESS1 (8).webp";
import Student9 from "../assets/images/studentTestimonials/SUCCESS1 (9).webp";
import Student10 from "../assets/images/studentTestimonials/SUCCESS1 (10).webp";
import Student11 from "../assets/images/studentTestimonials/SUCCESS1 (11).webp";
import Student12 from "../assets/images/studentTestimonials/SUCCESS1 (12).webp";
import Student13 from "../assets/images/studentTestimonials/SUCCESS1 (13).webp";
import Student14 from "../assets/images/studentTestimonials/SUCCESS1 (14).webp";
import Student15 from "../assets/images/studentTestimonials/SUCCESS1 (15).webp";

// Paid students images


export const alumniData = [
    { id: 1, name: "Anil", sector: "Technical Sector", company: "Industrial Plant", location: "Noida", category: "Government", scheme: "PMKVY", role: "Field Technician", package: "4.50 LPA", desc: "Placed after completing industry-oriented technical training.", image: Student1, },
    { id: 2, name: "Hanif", sector: "Operations", company: "Skill Mission Project", location: "Delhi", category: "Free", role: "Mobilizer", package: "3.20 LPA", desc: "Successfully employed through professional skill development.", image: Student2, },
    { id: 3, name: "Naaz Ahamad", sector: "Beauty & Wellness", company: "Trends Salon", location: "Lucknow", category: "Free", role: "Hair Stylist", package: "3.60 LPA", desc: "Built a career in beauty after hands-on salon training.", image: Student14, },
    { id: 4, name: "Pinki", sector: "Apparel & Garment", company: "Knits Manufacturing", location: "Kanpur", category: "Government", scheme: "UPSDM", role: "SMO Knits", package: "2.80 LPA", desc: "Secured placement through structured vocational learning.", image: Student15, },
    { id: 5, name: "Sankar Singh", sector: "Electronics Repair", company: "Digital Services Hub", location: "Dehradun", category: "Government", scheme: "PMKVY", role: "Mobile Repair Technician", package: "4.20 LPA", desc: "Now earning independently with technical repair skills.", image: Student13, },
    { id: 6, name: "Mamta", sector: "Apparel & Garment", company: "Export House India", location: "Noida", category: "Government", scheme: "PMKVY", role: "SMO Knits", package: "3.00 LPA", desc: "Career growth achieved through skill-based employment.", image: Student12, },
    { id: 7, name: "Shivani Kumari", sector: "Healthcare Supports", company: "Medanta Care Network", location: "Gurugram", category: "Government", scheme: "UPSDM", role: "Pharmacy Assistant", package: "3.50 LPA", desc: "Placed in healthcare after professional pharma training.", image: Student10, },
    { id: 8, name: "Ku. Sapna", sector: "Beauty & Wellness", company: "Oasis Spa Center", location: "Ghaziabad", category: "Free", role: "Beauty Associate", package: "2.40 LPA", desc: "Started a successful career in beauty & wellness.", image: Student9, },
    { id: 9, name: "Nillu Prajapathi", sector: "Healthcare Supports", company: "Apollo Clinics", location: "Varanasi", category: "Government", scheme: "PMKVY", role: "Healthcare Executive", package: "3.40 LPA", desc: "Placed after completing industry-focused healthcare training.", image: Student8, },
    { id: 10, name: "Kajal Kushwaha", sector: "Healthcare Supports", company: "Diagnostics Lab Group", location: "Agra", category: "Government", scheme: "UPSDM", role: "Health Care Tech", package: "3.10 LPA", desc: "Successfully started her career in the healthcare sector.", image: Student7, },
    { id: 11, name: "Lalit Chauhan", sector: "Renewable Energy", company: "Solar Infrastructure Co.", location: "Meerut", category: "Government", scheme: "PMKVY", role: "Solar Panel Technician", package: "4.00 LPA", desc: "Placed in the renewable energy sector with hands-on skills.", image: Student6, },
    { id: 12, name: "Sneha Rai", sector: "Healthcare Supports", company: "Max Hospital Allied", location: "Delhi NCR", category: "Government", scheme: "PMKVY", role: "Health Care Intern", package: "3.25 LPA", desc: "Achieved placement through structured healthcare training.", image: Student5, },
    { id: 13, "name": "Shailendra Kumar", "sector": "Healthcare Support", "company": "JITM Skills Center", "location": "Banka, Bihar", "category": "Government", "scheme": "GDA Certified", "role": "General Duty Assistant Trainer", "package": "4.00 LPA", "desc": "Empowering students through vocational training and shaping a skilled healthcare workforce across India.", image: Student11, },
    { id: 14, name: "Yashoda", sector: "Apparel & Garment", company: "Vocational Academy center", location: "Bareilly", category: "Government", scheme: "UPSDM", role: "SMO Trainer", package: "3.80 LPA", desc: "Currently working as a trainer after advanced SMO training.", image: Student4, },
    { "id": 15, "name": "Ekta Nigam", "sector": "Skill Development", "company": "Verified Placement Hub", "location": "Khagaria", "category": "Government", "scheme": "WCDC & BSDM", "role": "Certified Trainee", "package": "3.10 LPA", "desc": "Transformed her life through completely free certified training, accommodation, and fooding streams under state initiatives.", "image": Student3, },
];

// Corporate Connect Section
import {
    ShoppingBag, Cpu,
    HeartPulse, Hotel, Monitor, Sparkles, Briefcase,
    Target,
    ShieldCheck,

} from 'lucide-react';
export const industrySectors = [
    {
        title: "Retail & Sales",
        desc: "Customer-facing roles across retail stores, showrooms, and sales networks focusing on communication.",
        icon: ShoppingBag, // Pass reference directly
        iconColor: "text-[#D32F2F]",
        bgColor: "bg-red-50/60",
        badge: "Sales Excellence"
    },
    {
        title: "Manufacturing & Electronics",
        desc: "Skilled manpower for manufacturing units, electronics assembly, quality control, and technical operations.",
        icon: Cpu,
        iconColor: "text-amber-500",
        bgColor: "bg-amber-50/60",
        badge: "Industry 4.0 ready"
    },
    {
        title: "Healthcare & Support Services",
        desc: "Trained professionals for hospitals, clinics, diagnostic centers, and patient care services.",
        icon: HeartPulse,
        iconColor: "text-emerald-500",
        bgColor: "bg-emerald-50/60",
        badge: "Clinical Care"
    },
    {
        title: "Hospitality & Facilities Management",
        desc: "Professional workforce for hotels, housekeeping, facility services, and customer operations.",
        icon: Hotel,
        iconColor: "text-blue-500",
        bgColor: "bg-blue-50/60",
        badge: "Guest Management"
    },
    {
        title: "IT & Office Administration",
        desc: "Entry-level to mid-level professionals for office operations, IT support, and administrative roles.",
        icon: Monitor,
        iconColor: "text-indigo-500",
        bgColor: "bg-indigo-50/60",
        badge: "Digital Operations"
    },
    {
        title: "Beauty, Wellness & Care",
        desc: "Certified professionals for salons, wellness centers, spa services, and personal grooming industries.",
        icon: Sparkles,
        iconColor: "text-purple-500",
        bgColor: "bg-purple-50/60",
        badge: "Grooming Experts"
    }
];

export const enablementFeatures = [
    {
        title: "Placement-Linked Training",
        desc: "Job-oriented programs aligned with employer needs.",
        icon: Target, // Pure component reference
    },
    {
        title: "Campus Hiring Drives",
        desc: "Interviews, mega job fairs, and direct employer interactions.",
        icon: Users,
    },
    {
        title: "Career Progression Opportunities",
        desc: "Entry-level to mid-level sustainable employment roles.",
        icon: Briefcase,
    },
    {
        title: "Pan-India Hiring Network",
        desc: "Local, regional, and national centralized placement support.",
        icon: ShieldCheck,
    },
];

export const jobReadyPoints = [
    "Industry-aligned curriculum designed strictly with employer inputs",
    "Hands-on practical training with mock modules and real-world exposure",
    "Direct interaction with core employers through dedicated interview panels",
    "Ongoing placement mapping and long-term post-placement track support",
];



import { BookOpenText, Clapperboard, BriefcaseBusiness, TrendingUp, UserCheck, LineChart, Sliders } from 'lucide-react';

export const tieUpCards = [
    {
        title: "Industry-Aligned Curriculum",
        desc: "Content matched strictly to current corporate needs.",
        icon: BookOpenText,
        color: "from-blue-500 to-blue-600",
    },
    {
        title: "Workplace-Oriented Programs",
        desc: "Designed around real employer expectations and KPIs.",
        icon: Clapperboard,
        color: "from-emerald-500 to-emerald-600",
    },
    {
        title: "Hands-on Exposure",
        desc: "Practical modules, internships, and on-site visits.",
        icon: BriefcaseBusiness,
        color: "from-amber-500 to-amber-600",
    },
    {
        title: "Future-Ready Skills",
        desc: "Upgrades synced with emerging technology trends.",
        icon: TrendingUp,
        color: "from-purple-500 to-purple-600",
    }
];


export const featuresList = [
    {
        title: "Pre-Screened Candidates",
        desc: "Access skill-certified, evaluated candidates ready to deliver output from day one.",
        icon: UserCheck,
        badge: "Zero Filtering"
    },
    {
        title: "Lower Hiring Costs",
        desc: "Significantly minimize recruitment, active sourcing, and initial training expenses.",
        icon: LineChart,
        badge: "Cost Optimized"
    },
    {
        title: "Customized Hiring Support",
        desc: "Tailored strategic solutions aligned with your unique business plans and bulk volume shifts.",
        icon: Sliders,
        badge: "Flexible"
    }
];

// strategic Awards section mock dataset


import award1 from '../assets/images/Award/1 award.webp';
import award2 from '../assets/images/Award/2 award.webp';
import award3 from '../assets/images/Award/3 award.webp';
import award4 from '../assets/images/Award/4 award.webp';
import award5 from '../assets/images/Award/5 award.webp';
import award6 from '../assets/images/Award/6 award.webp';
import award7 from '../assets/images/Award/7 award.webp';
import award8 from '../assets/images/Award/8 award.webp';
import award9 from '../assets/images/Award/9 award.webp';
import award10 from '../assets/images/Award/10 award.webp';
import award11 from '../assets/images/Award/11 award.webp';
import award12 from '../assets/images/Award/12 award.webp';
import award13 from '../assets/images/Award/12 award.webp';

export const strategicAwards = [
    {
        id: 1,
        type: "National",
        title: { en: "Best Skill Partner", hi: "सर्वश्रेष्ठ कौशल भागीदार" },
        authority: "NSDC India",
        image: award1,
    },
    {
        id: 2,
        type: "Compliance",
        title: { en: "ISO 9001:2015", hi: "आईएस校 9001:2015" },
        authority: "IQCB Board",
        image: award2,
    },
    {
        id: 3,
        type: "Government",
        title: { en: "MSDE Excellence", hi: "एमएसडीई उत्कृष्टता" },
        authority: "Govt of India",
        image: award3,
    },
    {
        id: 4,
        type: "Placement",
        title: { en: "Top Recruiter Link", hi: "शीर्ष रिक्रूटर लिंक" },
        authority: "Corporate Sector",
        image: award4,
    },
    {
        id: 5,
        type: "Regional",
        title: { en: "Uttarakhand Impact", hi: "उत्तराखंड इम्पैक्ट" },
        authority: "State Center",
        image: award5,
    },
    {
        id: 6,
        type: "Vocation",
        title: { en: "Garment Segment", hi: "गारमेंट सेगमेंट" },
        authority: "Sector Council",
        image: award6,
    },
    // Row 2 starts here on desktop layout
    {
        id: 7,
        type: "Legacy",
        title: { en: "Decade Milestone", hi: "दशक मील का पत्थर" },
        authority: "Management Desk",
        image: award7,
    },
    {
        id: 8,
        type: "Global",
        title: { en: "Tech Training Scope", hi: "टेक ट्रेनिंग स्कोप" },
        authority: "Global Skill Audit",
        image: award8,
    },
    {
        id: 9,
        type: "National",
        title: { en: "PMKVY Training Hub", hi: "पीएमकेवीवाई ट्रेनिंग हब" },
        authority: "NSDC Partner",
        image: award9,
    },
    {
        id: 10,
        type: "Corporate",
        title: { en: "Industrial Connect", hi: "औद्योगिक संपर्क" },
        authority: "Skill Ministry",
        image: award10,
    },
    {
        id: 11,
        type: "Ecosystem",
        title: { en: "Smart Labs Setup", hi: "स्मार्ट लैब्स सेटअप" },
        authority: "Technical Board",
        image: award11,
    },
    {
        id: 12,
        type: "Excellence",
        title: { en: "Visionary Training", hi: "विदूरदर्शी प्रशिक्षण" },
        authority: "Director Desk",
        image: award12,
    },
    // Next page mock dataset elements
    {
        id: 13,
        type: "Future",
        title: { en: "Next-Gen Skills", hi: "नेक्स्ट-जेन स्किल्स" },
        authority: "Strategic Cell",
        image: award13,
    },
];




// Ai CHATBOOT CODE

// ====================================================================================
// 🚀 MASTER JITM AI BRAIN MAP (Paste this at the absolute bottom of your data.js)
// ====================================================================================
export const WEBSITE_AI_KNOWLEDGE = {
    companyName: "JITM Skills Pvt. Ltd.",
    contactEmail: "info@jitmskills.com",
    supportPhone: "+91 9971545133",

    // 1. Core Structural Layouts & Sliders
    heroSlides: SLIDE_DATA || [],
    coreSectors: SECTOR_DATA || [],
    keyServices: JITM_SERVICES || [],
    whyChooseUsReasons: WHY_CHOOSE_DATA || [],
    serviceHighlightsList: SERVICE_HIGHLIGHTS || [],

    // 2. Government Schemes & Initiatives (PMKVY, DDU-GKY, etc.)
    govtProgramsAndSchemes: GOVT_PROGRAMS || [],
    skillIndiaInitiatives: SKILL_INITIATIVES || [],
    schemesSectionDeepData: SCHEMES_SECTION_DATA || [],

    // 3. Infrastructure, Centers & Presence Metrics
    centersList: centersData || [],
    nationalPresenceContent: presenceContent || [],
    liveTrainingStats: statstraining || [],

    // 4. Sector-Specific Training & Operations
    trainingSectorsData: trainingSectors || [],
    industrySectorsData: industrySectors || [],
    educationalPrograms: PROGRAMS_DATA || [],

    // 5. Placements, Alumni & Strategic Network
    placementPartnersList: PLACEMENT_PARTNERS || [],
    alumniSuccessRecords: alumniData || [],
    corporateTieUpCards: tieUpCards || [],
    strategicAwardsAndRecognitions: strategicAwards || [],

    // 6. Branding, Trust Elements & Visual Assets
    projectLogosList: PROJECT_LOGOS || [],
    certificationLogosList: CERTIFICATION_LOGOS || [],
    userTestimonials: TESTIMONIALS || [],

    // 7. Leadership, Features & Enablement Modules
    managementLeaders: LEADERS || [],
    enablementFeaturesList: enablementFeatures || [],
    jobReadyTrainingPoints: jobReadyPoints || [],
    generalFeaturesList: featuresList || [],

    // 8. Global Internal Navigation Paths (To guide users where to click)
    navigationPaths: {
        home: "/",
        applyFranchise: "/ApplyFranchise",
        contactUs: "/ContactUs",
        aboutUs: "/AboutUs",
        courses: "/Courses",
        placements: "/Placements",
    },

    // 9. Recent Source Code Upgrades & Compliance Fixes
    recentUIUpdates: [
        "Popup notification notification banner has an automatic 7-second auto-close timer active.",
        "Hiring Partner registration action buttons now perform a straight clean redirect to the /ContactUs page instead of scrolling down.",
        "Franchise vertical application modal popup dynamically grabs the exact sector name (e.g., Yoga, Diagnostic Labs) and targets info@jitmskills.com pipeline."
    ]
};
