export const translations = {
  en: {
    nav: {
      about: "About",
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      admin: "Admin",
    },
    hero: {
      contactMe: "Contact Me",
      viewResume: "View Resume",
    },
    education: {
      title: "Education",
      subtitle: "My academic background",
      present: "Present",
    },
    experience: {
      title: "Work Experience",
      present: "Present",
    },
    skills: {
      title: "Skills & Expertise",
    },
    projects: {
      title: "Featured Projects",
      featured: "Featured",
      viewDetails: "View Details",
      close: "Close",
      previous: "Previous",
      next: "Next",
    },
    contact: {
      title: "Get In Touch",
      description: "Feel free to reach out for collaborations or just a friendly chat.",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      facebook: "Facebook",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  vi: {
    nav: {
      about: "Giới thiệu",
      education: "Học vấn",
      experience: "Kinh nghiệm",
      skills: "Kỹ năng",
      projects: "Dự án",
      contact: "Liên hệ",
      admin: "Quản trị",
    },
    hero: {
      contactMe: "Liên hệ",
      viewResume: "Xem CV",
    },
    education: {
      title: "Học vấn",
      subtitle: "Quá trình học tập của tôi",
      present: "Hiện tại",
    },
    experience: {
      title: "Kinh nghiệm làm việc",
      present: "Hiện tại",
    },
    skills: {
      title: "Kỹ năng & Chuyên môn",
    },
    projects: {
      title: "Dự án nổi bật",
      featured: "Nổi bật",
      viewDetails: "Xem chi tiết",
      close: "Đóng",
      previous: "Trước",
      next: "Tiếp",
    },
    contact: {
      title: "Liên hệ với tôi",
      description: "Hãy liên hệ để hợp tác hoặc chỉ để trò chuyện thân mật.",
      email: "Email",
      phone: "Điện thoại",
      linkedin: "LinkedIn",
      facebook: "Facebook",
    },
    footer: {
      rights: "Bảo lưu mọi quyền.",
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKey = typeof translations.en
