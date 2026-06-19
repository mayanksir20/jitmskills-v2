// Step 1: Saare dynamic physical files ko top par custom assets paths se import karo
import IndustrialCatalogPDF from "../assets/Brochures/shipping-details.pdf";
import PlacementReportPDF from "../assets/Brochures/shipping-details.pdf";
import CorporateProfilePDF from "../assets/Brochures/shipping-details.pdf";
import InfrastructureManualPDF from "../assets/Brochures/shipping-details.pdf";
import HospitalityBrochurePDF from "../assets/Brochures/shipping-details.pdf";
import TechnicalCurriculumPDF from "../assets/Brochures/shipping-details.pdf";

// Step 2: Apne documentsData array mein 'fileUrl' field ke sath load kar do
export const documentsData = [
    {
        id: 1,
        title: "Advanced Industrial Training Catalog",
        category: "Course Brochures",
        size: "4.2 MB",
        format: "PDF",
        date: "May 2026",
        fileUrl: IndustrialCatalogPDF, // Local source pointer link mapped here
        description: "Complete list of technical domain modules, practical lab parameters, and certification structures."
    },
    {
        id: 2,
        title: "Annual Placement Success Report",
        category: "Placement Reports",
        size: "5.8 MB",
        format: "PDF",
        date: "April 2026",
        fileUrl: PlacementReportPDF,
        description: "Statistical summary of recent batch hiring numbers, core corporate partners, and average package insights."
    },
    {
        id: 3,
        title: "Official Corporate Capability Profile",
        category: "Corporate Profiles",
        size: "8.1 MB",
        format: "PDF",
        date: "Jan 2026",
        fileUrl: CorporateProfilePDF,
        description: "Overview of company infrastructure scalability, technical framework compliance, and multi-state operational footprint."
    },
    {
        id: 4,
        title: "Vocational Center Infrastructure Manual",
        category: "Center Manuals",
        size: "3.5 MB",
        format: "PDF",
        date: "March 2026",
        fileUrl: InfrastructureManualPDF,
        description: "Guidelines and minimum quality benchmarks for smart classrooms, lab setups, and hardware logistics."
    },
    {
        id: 5,
        title: "Hospitality & Retail Management Brochure",
        category: "Course Brochures",
        size: "2.9 MB",
        format: "PDF",
        date: "Feb 2026",
        fileUrl: HospitalityBrochurePDF,
        description: "Syllabus and practical simulation framework details for service management and retail operation tracks."
    },
    {
        id: 6,
        title: "Technical Trade Curriculum Overview",
        category: "Course Brochures",
        size: "3.8 MB",
        format: "PDF",
        date: "May 2026",
        fileUrl: TechnicalCurriculumPDF,
        description: "Detailed breakdown of electrical, mechanical, and core hands-on workshop training courses."
    }
];