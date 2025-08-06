import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface LanguageSelectorProps {
  onLanguageSelect: (language: 'tamil' | 'english') => void;
}

const LanguageSelector = ({ onLanguageSelect }: LanguageSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tn-orange/10 via-background to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-tn-orange to-primary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">TN</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-tn-green to-primary bg-clip-text text-transparent">
            Tamil Nadu E-Governance
          </h1>
          <p className="text-xl text-muted-foreground">
            Select your preferred language / உங்கள் விருப்ப மொழியைத் தேர்ந்தெடுக்கவும்
          </p>
        </div>

        {/* Language Selection Cards */}
        <div className="grid gap-4">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/50" 
                onClick={() => onLanguageSelect('english')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-tn-green rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">EN</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">English</h3>
                  <p className="text-muted-foreground">Continue in English</p>
                </div>
              </div>
              <Button variant="outline" size="lg">
                Select
              </Button>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/50" 
                onClick={() => onLanguageSelect('tamil')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-tn-orange to-tn-gold rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">த</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">தமிழ்</h3>
                  <p className="text-muted-foreground">தமிழில் தொடரவும்</p>
                </div>
              </div>
              <Button variant="outline" size="lg">
                தேர்ந்தெடு
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Government of Tamil Nadu | தமிழ்நாடு அரசு</p>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;