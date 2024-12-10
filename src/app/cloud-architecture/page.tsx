import Architecture from "@/components/CloudArchitecture/Architecture";

import Hero from "@/components/CloudArchitecture/Home/Hero";
import Migration from "@/components/CloudArchitecture/Migration";
import SecuritySection from "@/components/CloudArchitecture/Security";
import Services from "@/components/CloudArchitecture/Services/Services";
import Solutions from "@/components/CloudArchitecture/Solutions";

export default function CloudArchitecture() {
  return <div>
    <Hero />
    <Architecture />
    <SecuritySection />
    <div className="bg-primary/5">
      <Migration />
    </div>
    <Services />
    <Solutions />
  </div>;
}
