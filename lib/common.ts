import {
 FaTachometerAlt,
 FaChartBar,
 FaUser,
 FaDollarSign, FaTag, FaTruck, FaUsers
} from "react-icons/fa";

/**
 * Common Text Constants
 *
 * This file contains reusable text content for different sections of the website.
 */

export const ABOUT_US_TEXT = `
We are dedicated to providing secure and simplified authentication solutions that empower businesses of all sizes.
Our platform focuses on reliability, scalability, and ease of use, ensuring that developers can integrate authentication seamlessly into their applications.  
  
With **Simple Auth**, you can:  
- **Strengthen Security**: Protect your users with industry-leading encryption and robust access control mechanisms.  
- **Save Time**: Streamline your authentication setup with our easy-to-use API and detailed documentation.  
- **Scale Confidently**: Whether you're a startup or an enterprise, our platform grows with your needs.  
  
We believe in providing not just tools, but also the support and guidance to help you achieve your goals.  
Join the thousands of businesses who trust Simple Auth to simplify their authentication process.  
`;

export const SERVICES = [
 {
  icon: "📊",
  title: "Real-Time Analytics",
  description:
   "Get instant insights into your business performance with our live dashboards.",
 },
 {
  icon: "📄",
  title: "Custom Reports",
  description:
   "Generate detailed reports tailored to your business needs with ease.",
 },
 {
  icon: "☁️",
  title: "Cloud Integration",
  description:
   "Seamlessly connect your business to the cloud for enhanced scalability and performance.",
 },
 {
  icon: "🔒",
  title: "Advanced Security",
  description:
   "Protect your data and applications with cutting-edge security solutions.",
 },
 {
  icon: "🤝",
  title: "Collaborative Tools",
  description:
   "Empower your team with tools that improve communication and collaboration.",
 },
];

export const PARTNER_IMAGES = [
 "/p-logos/p-1.png",
 "/p-logos/p-2.png",
 "/p-logos/p-3.png",
 "/p-logos/p-4.png",
 "/p-logos/p-5.png",
];

export const VALID_CREDENTIALS = {
 email: "test@bulltechgroup.co.za",
 password: "tPA%G%5FZap^V&p$",
};

export const USER_DETAILS = {
 email: "test@bulltechgroup.co.za",
 username: "Johnni-Boi",
 firstname: "John",
 lastname: "Doe",
 contact: +27799332336,
};

export const SIDEBAR_NAV = [
 {
  name: "Dashboard",
  linkTo: "/dashboard",
  icon: FaTachometerAlt,
 },
 {
  name: "Reports",
  linkTo: "/dashboard/reports",
  icon: FaChartBar,
 },
 {
  name: "User Details",
  linkTo: "/dashboard/user_details",
  icon: FaUser,
 },
];

export const DASHBOARD_STATS = [
  {
    icon: FaDollarSign,
    title: "Revenue",
    value: "$201K",
    change: "+15%",
  },
  {
    icon: FaTag,
    title: "Orders",
    value: "719",
    change: "-10%",
  },
  {
    icon: FaTruck,
    title: "Deliveries",
    value: "240",
    change: "+19%",
  },
  {
    icon: FaUsers,
    title: "Audience",
    value: "1.5K",
    change: "+10%",
  },
];

export const DASHBOARD_WIDGETS = [
  {
    type: "bar",
    title: "Users Per Department",
    labels: ["Eng", "Sales", "Mkt", "HR", "Data"],
    data: [4, 25, 16, 2, 45],
  },
  {
    type: "line",
    title: "Daily Active Users",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [49, 105, 62, 71, 98, 12, 25],
  },
];
