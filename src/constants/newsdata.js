import { Zap, Briefcase, Award, Star, Newspaper, ShieldCheck, Flame, Users } from 'lucide-react';


export const tickerNewsData = [
    {
        id: 1,
        label: "Inauguration",
        text: "JITM Skills ने उत्तर प्रदेश में 10 नए स्किल सेंटर का उद्घाटन किया...",
        icon: Zap, // Passed as reference just like 'Sliders'
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    },
    {
        id: 2,
        label: "Placements",
        text: "500+ छात्रों को मिला रोज़गार...",
        icon: Briefcase,
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
        id: 3,
        label: "Alliance",
        text: "NSDC के साथ नई साझेदारी की घोषणा...",
        icon: Award,
        badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    }
];

// master News Database - Isme saari news items ka detailed data hoga, jise hum News & Events page par show karenge. Aap isme aur bhi news items add kar sakte hain.
import news1 from "../assets/images/News/Skill India Mission Marks 10 Years.webp";
import news2 from "../assets/images/News/goa-project.webp";
import news3 from "../assets/images/News/PMKVY-Training.webp";
import news4 from "../assets/images/News/Mega Job Fair.webp";
import news5 from "../assets/images/News/New Training Center.webp";
import news6 from "../assets/images/News/JITM-Skill-Training.webp";
export const masterNewsDatabase = [
    {
        id: 1,
        sector: { en: "National Mission", hi: "राष्ट्रीय मिशन" },
        title: {
            en: "Skill India Mission Marks 10 Years of Youth Empowerment",
            hi: "स्किल इंडिया Mission के 10 साल पूरे, युवाओं को मिला नया मंच"
        },
        desc: {
            en: "Under India's skill missions, millions of young people have gained practical, industry-aligned certified expertise.",
            hi: "भारत के कौशल मिशनों के तहत, लाखों युवाओं ने व्यावहारिक और उद्योग-संरेखित प्रमाणित विशेषज्ञता हासिल की है।"
        },
        fullStory: {
            en: "Skill India Mission, led by Prof. Yogesh Kumar, has completed 10 years of empowering youth across India. Under this mission and initiatives like PMKVY, millions of young people have gained practical and industry-aligned skills in sectors including digital, AI, healthcare, agriculture, and green energy. The program focuses on quality training and successful placement opportunities, especially for women and rural youth. Numerous success stories, such as start-ups and employment in green energy projects, showcase the real impact of these skill initiatives.",
            hi: "प्रो. योगेश कुमार के नेतृत्व में स्किल इंडिया मिशन ने भारत भर में युवाओं को सशक्त बनाने के 10 साल पूरे कर लिए हैं। इस मिशन और पीएमकेवीवाई (PMKVY) जैसी पहलों के तहत, लाखों युवाओं ने डिजिटल, एआई (AI), स्वास्थ्य सेवा, कृषि और हरित ऊर्जा सहित विभिन्न क्षेत्रों में व्यावहारिक और उद्योग-अनुकूल कौशल प्राप्त किया है। यह कार्यक्रम विशेष रूप से महिलाओं और ग्रामीण युवाओं के लिए गुणवत्तापूर्ण प्रशिक्षण और सफल प्लेसमेंट के अवसरों पर केंद्रित है। कई सफलता की कहानियां, जैसे कि स्टार्टअप और हरित ऊर्जा परियोजनाओं में रोजगार, इन कौशल पहलों के वास्तविक प्रभाव को प्रदर्शित करती हैं।"
        },
        date: "13 Oct 2025",
        readTime: { en: "3 min read", hi: "3 मिनट पढ़ाई" },
        image: news1,
        icon: Newspaper
    },
    {
        id: 2,
        sector: { en: "MSME Initiative", hi: "एमएसएमई पहल" },
        title: {
            en: "JITM Skills Implements MSME–RAMP Initiative with DITC Goa",
            hi: "JITM Skills ने DITC गोवा के साथ MSME–RAMP योजना लागू की"
        },
        desc: {
            en: "JITM Skills is executing a flagship Ministry of MSME initiative under the Government of Goa to strengthen the local ecosystem.",
            hi: "JITM Skills स्थानीय इकोसिस्टम को मजबूत करने के लिए गोवा सरकार के उद्योग, व्यापार और वाणिज्य निदेशालय (DITC) के तहत एक प्रमुख एमएसएमई पहल को लागू कर रहा है।"
        },
        fullStory: {
            en: "JITM Skills Pvt. Ltd. is executing a flagship initiative of the Ministry of MSME under the Directorate of Industries, Trade & Commerce (DITC), Government of Goa, aimed at strengthening the MSME ecosystem. Under the Raising and Accelerating MSME Performance (RAMP) program, DITC has established two dedicated support mechanisms: Business Facilitation Centers (BFC) and Women Entrepreneurship Facilitation Cell (WEFC). These centres provide structured handholding support to entrepreneurs through improved access to government schemes, compliance assistance, market linkages, and mentoring. Expert teams deputed by JITM Skills comprise professionals from finance, business development, entrepreneurship, legal & compliance, environment, exports, and IT domains, working collectively to mentor MSMEs across the state of Goa.",
            hi: "JITM Skills Pvt. Ltd. गोवा सरकार के उद्योग, व्यापार और वाणिज्य निदेशालय (DITC) के तहत सूक्ष्म, लघु और मध्यम उद्यम (MSME) मंत्रालय की एक प्रमुख पहल को क्रियान्वित कर रहा है, जिसका उद्देश्य एमएसएमई इकोसिस्टम को मजबूत करना है। 'रेज़िंग एंड एक्सेलरेटिंग एमएसएमई परफॉर्मेंस' (RAMP) कार्यक्रम के तहत, DITC ने दो समर्पित सहायता प्रणालियाँ स्थापित की हैं: बिजनेस फैसिलिटेशन सेंटर (BFC) और महिला उद्यमिता सुविधा सेल (WEFC)। ये केंद्र सरकारी योजनाओं तक बेहतर पहुंच, अनुपालन सहायता, बाजार लिंकेज और मेंटरशिप के माध्यम से उद्यमियों को संरचित सहायता प्रदान करते हैं। JITM Skills द्वारा प्रतिनियुक्त विशेषज्ञ टीमों में वित्त, व्यवसाय विकास, उद्यमिता, कानूनी और अनुपालन, पर्यावरण, निर्यात और आईटी क्षेत्रों के पेशेवर शामिल हैं, जो पूरे गोवा राज्य में एमएसएमई को सलाह देने के लिए सामूहिक रूप से काम कर रहे हैं।"
        },
        date: "24 Apr 2025",
        readTime: { en: "4 min read", hi: "4 मिनट पढ़ाई" },
        image: news2,
        icon: Award
    },
    {
        id: 3,
        sector: { en: "Rural Skill", hi: "ग्रामीण कौशल" },
        title: {
            en: "PMKVY Initiative Effectively Empowers Dynamic Rural Youth",
            hi: "ग्रामीण युवाओं को सशक्त बनाने के लिए PMKVY पहल"
        },
        desc: {
            en: "National flagship scheme bridges technical employment gaps across core retail, apparel, and electronics sectors.",
            hi: "राष्ट्रीय प्रमुख योजना खुदरा, परिधान और इलेक्ट्रॉनिक्स क्षेत्रों में तकनीकी रोजगार के अंतर को पाटने का काम करती है।"
        },
        fullStory: {
            en: "The Pradhan Mantri Kaushal Vikas Yojana (PMKVY) is a flagship scheme by the Government of India to promote skill development. JITM Skills Pvt. Ltd. implements this program across multiple states, providing training in Apparel, Retail, Electronics, Healthcare, Agriculture, and Food Processing sectors. The program enables rural youth to gain employable skills and access job opportunities. Our trainers and mentors guide students with hands-on workshops, industry exposure, and placement support to ensure successful career outcomes.",
            hi: "प्रधानमंत्री कौशल विकास योजना (PMKVY) कौशल विकास को बढ़ावा देने के लिए भारत सरकार की एक प्रमुख योजना है। JITM Skills Pvt. Ltd. परिधान, खुदरा, इलेक्ट्रॉनिक्स, स्वास्थ्य सेवा, कृषि और खाद्य प्रसंस्करण क्षेत्रों में प्रशिक्षण प्रदान करते हुए कई राज्यों में इस कार्यक्रम को लागू करता है। यह कार्यक्रम ग्रामीण युवाओं को रोजगार योग्य कौशल हासिल करने और नौकरियों के अवसर प्राप्त करने में सक्षम बनाता है। हमारे प्रशिक्षक और सलाहकार सफल करियर परिणाम सुनिश्चित करने के लिए व्यावहारिक कार्यशालाओं, उद्योग के अनुभवและ प्लेसमेंट सहायता के साथ छात्रों का मार्गदर्शन करते हैं।"
        },
        date: "18 Mar 2025",
        readTime: { en: "3 min read", hi: "3 मिनट पढ़ाई" },
        image: news3,
        icon: Newspaper
    },
    {
        id: 4,
        sector: { en: "Placement Drive", hi: "प्लेसमेंट ड्राइव" },
        title: {
            en: "Mega Job Fair: 500+ Qualified Candidates Placed in Retail Sector",
            hi: "मेगा जॉब फेयर: रिटेल सेक्टर में 500 से अधिक उम्मीदवारों का चयन"
        },
        desc: {
            en: "Strategic industry recruitment drive yields outstanding career conversions with global partner brands.",
            hi: "रणनीतिक उद्योग भर्ती अभियान वैश्विक भागीदार ब्रांडों के साथ उत्कृष्ट करियर परिवर्तन की पेशकश करता है।"
        },
        fullStory: {
            en: "A massive recruitment milestone was achieved during our latest organized Mega Job Fair, resulting in over 500 trained candidates securing direct employment placements within the modern retail sector. This initiative was part of our commitment to provide 100% placement support to trained candidates. Leading industry organizations and major corporate partners like Reliance, Big Bazaar, and Amazon actively participated in checking skill proficiencies.",
            hi: "हमारे नवीनतम आयोजित mega जॉब फेयर के दौरान एक बड़ा भर्ती मील का पत्थर हासिल किया गया, जिसके परिणामस्वरूप 500 से अधिक प्रशिक्षित उम्मीदवारों ने आधुनिक खुदरा (रिटेल) क्षेत्र में सीधे रोजगार प्लेसमेंट सुरक्षित किया। यह पहल प्रशिक्षित उम्मीदवारों को 100% प्लेसमेंट सहायता प्रदान करने की हमारी प्रतिबद्धता का हिस्सा थी। कौशल दक्षता की जांच करने में रिलायंस, बिग बाजार और अमेज़ॅन भागीदारों जैसे अग्रणी उद्योग संगठनों और प्रमुख कॉर्पोरेट भागीदारों ने सक्रिय रूप से भाग लिया।"
        },
        date: "12 Mar 2025",
        readTime: { en: "3 min read", hi: "3 मिनट पढ़ाई" },
        image: news4,
        icon: Star
    },
    {
        id: 5,
        sector: { en: "New Center", hi: "नया केंद्र" },
        title: {
            en: "Grand Launch of Advanced New Vocational Training Center",
            hi: "नए कौशल विकास केंद्र का भव्य शुभारंभ"
        },
        desc: {
            en: "Infrastructure deployed with cutting-edge tech labs and advanced alternative green energy workshops.",
            hi: "बुनियादी ढांचे को अत्याधुनिक तकनीकी प्रयोगशालाओं और उन्नत वैकल्पिक हरित ऊर्जा कार्यशालाओं के साथ तैनात किया गया है।"
        },
        fullStory: {
            en: "In line with our commitment to accessibility, a brand new advanced skill development center has been officially launched. The center is equipped with high-tech computer labs and solar-energy workshops to train 200 students per batch in future-ready skills, preparing them for immediate employment opportunities in modern tech fields.",
            hi: "पहुंच और गुणवत्ता के प्रति हमारी प्रतिबद्धता के अनुरूप, एक नए उन्नत कौशल विकास केंद्र का आधिकारिक तौर पर शुभारंभ किया गया है। यह केंद्र प्रति बैच 200 छात्रों को भविष्य के लिए तैयार कौशल में प्रशिक्षित करने के लिए हाई-टेक कंप्यूटर लैब और सौर-ऊर्जा कार्यशालाओं से लैस है, जो उन्हें आधुनिक तकनीकी क्षेत्रों में तत्काल रोजगार के अवसरों के लिए तैयार करता है।"
        },
        date: "27 Feb 2025",
        readTime: { en: "2 min read", hi: "2 मिनट पढ़ाई" },
        image: news5,
        icon: Star
    },
    {
        id: 6,
        sector: { en: "Strategic MoU", hi: "रणनीतिक समझौता" },
        title: {
            en: "JITM Signs MoU with NSDC for Advanced Logistics Training",
            hi: "JITM ने NSDC के साथ एडवांस्ड लॉजिस्टिक्स ट्रेनिंग के लिए समझौता किया"
        },
        desc: {
            en: "Strategic institutional MoU targets advanced logistics and supply chain training modules to fulfill modern workforce demands.",
            hi: "आधुनिक कार्यबल की मांगों को पूरा करने के लिए रणनीतिक संस्थागत समझौता उन्नत लॉजिस्टिक्स और आपूर्ति श्रृंखला प्रशिक्षण मॉड्यूल को लक्षित करता है।"
        },
        fullStory: {
            en: "JITM Skills Pvt. Ltd. is a pioneer in skill development and has been running training programs across India since 2013. As a NSDC Training Partner with pan-India presence, JITM provides free courses and placement-linked skill training in Apparel, Organized Retail, Electronics, Healthcare, Food Processing, Agriculture, and more. This MoU with NSDC aims to introduce advanced logistics and supply chain training programs aligned with industry demands and standards. JITM has successfully trained over 10,00,000 students, empowering youth for employment and self-employment while serving society.",
            hi: "JITM Skills Pvt. Ltd. कौशल विकास के क्षेत्र में एक अग्रणी संस्थान है और 2013 से पूरे भारत में प्रशिक्षण कार्यक्रम चला रहा है। अखिल भारतीय उपस्थिति के साथ एक NSDC प्रशिक्षण भागीदार के रूप में, JITM परिधान, संगठित खुदरा, इलेक्ट्रॉनिक्स, स्वास्थ्य सेवा, खाद्य प्रसंस्करण, कृषि आदि में मुफ्त पाठ्यक्रम और प्लेसमेंट से जुड़े कौशल प्रशिक्षण प्रदान करता है। एनएसडीसी के साथ इस समझौता ज्ञापन (MoU) का उद्देश्य उद्योग की मांगों और मानकों के अनुरूप उन्नत लॉजिस्टिक्स और आपूर्ति श्रृंखला प्रशिक्षण कार्यक्रमों की शुरुआत करना है। JITM ने समाज की सेवा करते हुए रोजगार और स्व-रोजगार के लिए युवाओं को सशक्त बनाकर 10,00,000 से अधिक छात्रों को सफलतापूर्वक प्रशिक्षित किया है।"
        },
        date: "20 Jan 2025",
        readTime: { en: "4 min read", hi: "4 मिनट पढ़ाई" },
        image: news6,
        icon: Award
    }
];


// press release data - 

// Path modified with high-fidelity .webp extensions
import news03102025 from '../assets/images/News/news-03-10-2025.webp';
import covidMask from '../assets/images/News/covid-mask.webp';
import motivationC from '../assets/images/News/motivation-c.webp';
import news370Placement from '../assets/images/News/news-370-palcement.webp';
import placementGujrat from '../assets/images/News/placement-gujrat.webp';
import hosiyarpurPlacement from '../assets/images/News/hosiyarpur-placement.webp';
import dduPlacement from '../assets/images/News/ddu-palacment.webp';
import governmentTraining from '../assets/images/News/goverment-trenning11.webp';
import uttrakhandCenter from '../assets/images/News/uttrakhand center.webp';
import nsdcPartnership from '../assets/images/News/jitm-skills-NSDC-PARTNERSHIP.webp';
import event1 from '../assets/images/News/event-1.webp';
import garmentSector from '../assets/images/News/Garment Sector.webp';
import freeTraining from '../assets/images/News/free-trenning.webp';

export const pressReleaseDatabase = [
    {
        id: 1,
        category: "Motivation",
        date: "03 Oct 2025",
        source: "DAINIK JAGRAN",
        image: news03102025,
        icon: Flame,
        readTime: { en: "2 min read", hi: "2 मिनट पढ़ाई" },
        title: {
            en: "Empowerment Loops: Core Structural Vision by Managing Director",
            hi: "सशक्तिकरण लूप: प्रबंध निदेशक द्वारा मूल संरचनात्मक दृष्टिकोण"
        },
        desc: {
            en: "Story by our Managing Director – published in Dainik Jagran (National Edition).",
            hi: "हमारे प्रबंध निदेशक द्वारा लिखित कहानी – दैनिक जागरण (राष्ट्रीय संस्करण) में प्रकाशित।"
        }
    },
    {
        id: 2,
        category: "Motivation",
        date: "27 Oct 2025",
        source: "DAINIK JAGRAN",
        image: motivationC,
        icon: Flame,
        readTime: { en: "3 min read", hi: "3 मिनट पढ़ाई" },
        title: {
            en: "Skill Development Pathways Open New Arenas of Youth Success",
            hi: "कौशल विकास से मिली सफलता की नई उड़ान"
        },
        desc: {
            en: "Comprehensive technical training and 100% baseline placement models ecosystem driven under PMKVY.",
            hi: "प्रधानमंत्री कौशल विकास योजना के तहत प्रशिक्षण और शत-प्रतिशत प्लेसमेंट इकोसिस्टम।"
        }
    },
    {
        id: 3,
        category: "Motivation",
        date: "16 Mar 2025",
        source: "THE ECONOMIC TIMES",
        image: covidMask,
        icon: ShieldCheck,
        readTime: { en: "2 min read", hi: "2 मिनट पढ़ाई" },
        title: {
            en: "Coronavirus Crisis Response: Delhi Production Units Fully Active",
            hi: "कोरोनावायरस संकट: दिल्ली में JITM स्किल्स सेंटर्स की बड़ी पहल"
        },
        desc: {
            en: "Delhi JITM Skills Centers scale operations seamlessly to manufacture and distribute over 500 safety masks daily.",
            hi: "दिल्ली में JITM Skills Centres रोज़ाना 500 Masks बनाकर सुरक्षा मांगों को पूरा कर रहे हैं।"
        }
    },

    // ================= EVENTS / CEREMONIES =================
    {
        id: 4,
        category: "Events",
        date: "15 Dec 2024",
        source: "HARI BHOOMI",
        image: event1,
        icon: Users,
        readTime: { en: "3 min read", hi: "3 मिनट पढ़ाई" },
        title: {
            en: "Skill Training Program Concluded with Robust Placement Support",
            hi: "प्रमाणपत्र वितरण के साथ कौशल प्रशिक्षण कार्यक्रम का समापन"
        },
        desc: {
            en: "Skill Training Program Concluded – Certificates Distributed & Employment Support Provided across sectors.",
            hi: "कौशल प्रशिक्षण कार्यक्रम का समापन – प्रमाणपत्र वितरित किए गए और रोजगार सहायता प्रदान की गई।"
        }
    },
    {
        id: 5,
        category: "Events",
        date: "16 Jun 2024",
        source: "JITM MEDIA DESK",
        image: freeTraining,
        icon: Users,
        readTime: { en: "2 min read", hi: "2 मिनट पढ़ाई" },
        title: {
            en: "Free Technical Training Track Initiated for Active 18-40 Batches",
            hi: "18-40 आयु वर्ग के लिए मुफ्त प्रशिक्षण कार्यक्रम शुरू"
        },
        desc: {
            en: "PM Kaushal Yojana free certified training courses launched specifically targeting strategic demographic clusters.",
            hi: "पीएम कौशल योजना के अंतर्गत 18–40 आयु वर्ग के युवाओं के लिए मुफ्त प्रशिक्षण कार्यक्रम की शुरुआत।"
        }
    },

    // ================= GOVERNMENT / POLICY NEWS =================
    {
        id: 6,
        category: "Government",
        date: "17 Dec 2023",
        source: "DAINIK JAGRAN",
        image: governmentTraining,
        icon: Award,
        readTime: { en: "3 min read", hi: "3 मिनट पढ़ाई" },
        title: {
            en: "PM Kaushal Yojana Architecture: From Training to Secured Jobs",
            hi: "पीएम कौशल योजना ट्रेनिंग से एम्प्लॉयमेंट तक की राह"
        },
        desc: {
            en: "Flagship central alignment model provides rural and urban youths with verified micro-certified industry options.",
            hi: "पीएम कौशल योजना ट्रेनिंग से एम्प्लॉयमेंट तक – युवाओं को मिलेगा सम्मानजनक आजीविका का बेहतरीन मौका।"
        }
    },
    {
        id: 7,
        category: "Government",
        date: "12 Oct 2022",
        source: "JITM PRESS RELEASE",
        image: dduPlacement,
        icon: Award,
        readTime: { en: "4 min read", hi: "4 मिनट पढ़ाई" },
        title: {
            en: "Elite Corporate Placement Phase Onboards Certified Trainees",
            hi: "प्लेसमेंट ड्राइव में 164 उम्मीदवारों ने लिया हिस्सा, टियर-1 कंपनियों में चयन"
        },
        desc: {
            en: "Over 164 candidates tested in the latest multi-sectoral evaluation drive; 96 exceptional talents successfully secured letters.",
            hi: "JITM Skills के हालिया प्लेसमेंट ड्राइव में 164 योग्य उम्मीदवारों ने हिस्सा लिया, जिनमें से 96 प्रतिभाशाली छात्रों को चुना गया।"
        }
    },
    {
        id: 8,
        category: "Placements",
        date: "12 Oct 2022",
        source: "PLACEMENT DRIVES",
        image: dduPlacement,
        icon: Users,
        readTime: { en: "3 min read", hi: "3 मिनट पढ़ाई" },
        title: {
            en: "Corporate Relations Operations Bridge Recruitment Gaps",
            hi: "प्रतिष्ठित कंपनियों में चयनित छात्रों के साथ नया माइलस्टोन दर्ज"
        },
        desc: {
            en: "Strategic talent screening loops maximize industrial absorption statistics for verified batch candidates.",
            hi: "प्रतिभाशाली छात्रों को उनकी काबिलियत के आधार पर प्रतिष्ठित कंपनियों में चुना गया। हम उज्ज्वल भविष्य की कामना करते हैं।"
        }
    },
    {
        id: 9,
        category: "Events",
        date: "03 Nov 2022",
        source: "JITM SKILLS MANAGEMENT",
        image: garmentSector,
        icon: Users,
        readTime: { en: "2 min read", hi: "2 मिनट पढ़ाई" },
        title: {
            en: "Garment Sector Technical Infrastructure Deployment Completed",
            hi: "गारमेंट सेक्टर में स्किल डेवलपमेंट: युवाओं को मिला व्यावहारिक प्रशिक्षण"
        },
        desc: {
            en: "Garment Sector Skill Development: Core batches undergo high-density industrial machine hands-on training.",
            hi: "गारमेंट सेक्टर में स्किल विकास: युवाओं को इंडस्ट्री मानकों के अनुरूप हैंड्स-ऑन ट्रेनिंग प्रदान की गई।"
        }
    },
    {
        id: 10,
        category: "Placements",
        date: "08 May 2022",
        source: "DAINIK JAGRAN",
        image: placementGujrat,
        icon: Users,
        readTime: { en: "4 min read", hi: "4 मिनट पढ़ाई" },
        title: {
            en: "Hundreds of Certified Youth Secure Placements in Gujarat Drives",
            hi: "गुजरात प्लेसमेंट ड्राइव में सैकड़ों युवाओं का हुआ बड़ा चयन"
        },
        desc: {
            en: "PM Kaushal Vikas Yojana trainees clear multi-tiered placement selection loops inside leading industrial clusters.",
            hi: "पीएम कौशल योजना के तहत ट्रेनिंग लेकर गुजरात प्लेसमेंट ड्राइव में सैकड़ों युवा बड़ी कंपनियों में सिलेक्ट हुए।"
        }
    },
    {
        id: 11,
        category: "Placements",
        date: "12 Apr 2021",
        source: "PRABHAT KHABAR",
        image: news370Placement,
        icon: Users,
        readTime: { en: "3 min read", hi: "3 मिनट पढ़ाई" },
        title: {
            en: "Massive Placement Milestone: 370 Trainees Placed in Jamshedpur",
            hi: "जमशेदपुर जॉब प्लेसमेंट ड्राइव में 370 छात्रों को मिला रोजगार"
        },
        desc: {
            en: "JITM Skills strategic industrial linkage drive successfully matches local corporate technical requirements seamlessly.",
            hi: "JITM Skills की बेहतरीन पहल: जमशेदपुर मेगा जॉब फेयर में 370 योग्य विद्यार्थियों को मिला डायरेक्ट प्लेसमेंट।"
        }
    },
    {
        id: 12,
        category: "Placements",
        date: "06 Nov 2019",
        source: "PUNJAB KESARI",
        image: hosiyarpurPlacement,
        icon: Users,
        readTime: { en: "3 min read", hi: "3 मिनट पढ़ाई" },
        title: {
            en: "Hoshiarpur Center Anchors Mega Recruitment Job Fair Drive",
            hi: "होशियारपुर केंद्र पर सफल रोजगार मेले का शानदार आयोजन"
        },
        desc: {
            en: "Out of 164 screened students, 96 certified candidates successfully secure institutional employment vectors.",
            hi: "होशियारपुर सेंटर पर सफल जॉब फेयर का आयोजन – 164 छात्रों ने भाग लिया, जिसमें से 96 का तत्काल चयन हुआ।"
        }
    },
    {
        id: 13,
        category: "Government",
        date: "14 May 2018",
        source: "REGIONAL PRESS",
        image: uttrakhandCenter,
        icon: Award,
        readTime: { en: "4 min read", hi: "4 मिनट पढ़ाई" },
        title: {
            en: "Pithoragarh Skill Development Infrastructure Hub Operationalized",
            hi: "पिथौरागढ़ के युवाओं के लिए सुनहरे भविष्य की नई राह"
        },
        desc: {
            en: "JITM Skills launches an advanced skill development center in Uttarakhand to boost regional livelihood maps.",
            hi: "पहाड़ी क्षेत्रों के सशक्तिकरण के लिए JITM Skills ने पिथौरागढ़ में अत्याधुनिक कौशल विकास केंद्र स्थापित किया।"
        }
    },
    {
        id: 14,
        category: "Government",
        date: "Authorized Partner",
        source: "NSDC TIMELINE",
        image: nsdcPartnership,
        icon: ShieldCheck,
        readTime: { en: "Continuous", hi: "सतत" },
        title: {
            en: "Strategic Institutional Framework: JITM Skills & NSDC Alignment",
            hi: "JITM Skills और NSDC की दीर्घकालिक रणनीतिक साझेदारी"
        },
        desc: {
            en: "National Skill Development Corporation partnership validates nationwide high-quality industrial workspace training frameworks.",
            hi: "NSDC के साथ रणनीतिक साझेदारी के अंतर्गत देश भर के केंद्रों में युवाओं को मिलेगा विश्वस्तरीय कौशल प्रशिक्षण।"
        }
    }
];