import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tamil' | 'english';

interface LanguageContextType {
  language: Language | null;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  english: {
    // Navigation
    'nav.home': 'Home',
    'nav.schemes': 'Schemes',
    'nav.applications': 'My Applications',
    'nav.help': 'Help',
    'nav.profile': 'Profile',
    
    // Common
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.next': 'Next',
    'common.back': 'Back',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.search': 'Search',
    'common.filter': 'Filter',
    
    // Auth
    'auth.phone': 'Mobile Number',
    'auth.otp': 'OTP',
    'auth.sendOtp': 'Send OTP',
    'auth.verifyOtp': 'Verify OTP',
    'auth.login': 'Login',
    'auth.register': 'Register',
    
    // Forms
    'form.name': 'Full Name',
    'form.age': 'Age',
    'form.gender': 'Gender',
    'form.address': 'Address',
    'form.district': 'District',
    'form.income': 'Annual Income',
    'form.caste': 'Caste Category',
    'form.education': 'Education Level',
    
    // Schemes
    'schemes.eligible': 'Eligible Schemes',
    'schemes.apply': 'Apply Now',
    'schemes.details': 'View Details',
    'schemes.benefits': 'Benefits',
    'schemes.eligibility': 'Eligibility Criteria',
    'schemes.documents': 'Required Documents',
  },
  tamil: {
    // Navigation
    'nav.home': 'முகப்பு',
    'nav.schemes': 'திட்டங்கள்',
    'nav.applications': 'எனது விண்ணப்பங்கள்',
    'nav.help': 'உதவி',
    'nav.profile': 'சுயவிவரம்',
    
    // Common
    'common.submit': 'சமர்ப்பிக்கவும்',
    'common.cancel': 'ரத்து செய்யவும்',
    'common.next': 'அடுத்து',
    'common.back': 'பின்செல்',
    'common.save': 'சேமிக்கவும்',
    'common.edit': 'திருத்தவும்',
    'common.delete': 'நீக்கவும்',
    'common.search': 'தேடவும்',
    'common.filter': 'வடிகட்டவும்',
    
    // Auth
    'auth.phone': 'கைபேசி எண்',
    'auth.otp': 'ஒருமுறை கடவுச்சொல்',
    'auth.sendOtp': 'OTP அனுப்பவும்',
    'auth.verifyOtp': 'OTP சரிபார்க்கவும்',
    'auth.login': 'உள்நுழைக',
    'auth.register': 'பதிவு செய்யவும்',
    
    // Forms
    'form.name': 'முழு பெயர்',
    'form.age': 'வயது',
    'form.gender': 'பாலினம்',
    'form.address': 'முகவரி',
    'form.district': 'மாவட்டம்',
    'form.income': 'ஆண்டு வருமானம்',
    'form.caste': 'சாதி வகை',
    'form.education': 'கல்வி நிலை',
    
    // Schemes
    'schemes.eligible': 'தகுதியான திட்டங்கள்',
    'schemes.apply': 'இப்போது விண்ணப்பிக்கவும்',
    'schemes.details': 'விவரங்களைப் பார்க்கவும்',
    'schemes.benefits': 'நன்மைகள்',
    'schemes.eligibility': 'தகுதி நிபந்தனைகள்',
    'schemes.documents': 'தேவையான ஆவணங்கள்',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language | null>(null);

  const t = (key: string): string => {
    if (!language) return key;
    return translations[language][key as keyof typeof translations.english] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};