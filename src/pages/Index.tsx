import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  const { language, setLanguage } = useLanguage();

  if (!language) {
    return <LanguageSelector onLanguageSelect={setLanguage} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-tn-orange/5 via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-tn-green to-primary bg-clip-text text-transparent">
            {language === 'tamil' ? 'தமிழ்நாடு அரசு திட்டங்கள்' : 'Tamil Nadu Government Schemes'}
          </h1>
          <p className="text-xl text-muted-foreground">
            {language === 'tamil' 
              ? 'உங்களுக்கு ஏற்ற அரசு திட்டங்களைக் கண்டறிந்து விண்ணப்பிக்கவும்' 
              : 'Discover and apply for government schemes you are eligible for'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
