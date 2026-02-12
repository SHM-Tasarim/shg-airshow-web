import React from 'react';
import { Language } from '../App';

interface AboutShowProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const AboutShow: React.FC<AboutShowProps> = ({ lang, onNavigate }) => {
  const pastYears = [
    { year: "2025", url: "https://www.shgairshow2025.com/" },
    { year: "2024", url: "https://www.shgairshow2024.com/" },
    { year: "2023", url: "https://www.shgairshow2023.com/" },
    { year: "2022", url: "https://shmaero.wixsite.com/shg2022" },
    { year: "2021", url: "https://shmaero.wixsite.com/shgairshow2021" },
    { year: "2020", url: "https://www.shgairshow2020.com/" },
    { year: "2019", url: "https://shmaero.wixsite.com/shg2019" },
    { year: "2018", url: "https://shmaero.wixsite.com/shg2018" },
    { year: "2017", url: "https://shmaero.wixsite.com/shg-airshow-2017" },
    { year: "2015", url: "https://shmaero.wixsite.com/shg2015" },
  ];

  const content = {
    TR: {
      title: "SHG Airshow",
      tagline: "Sivrihisar Hava Gösterileri",
      archiveTitle: "SHG Airshow'un Geçmiş Yıllara Ait Web Siteleri",
      mainText: [
        "Sivrihisar Havacılık Kulübü Derneği tarafından, her yıl Sivrihisar Havacılık Merkezi Necati Artan Tesisleri'nde uluslararası boyutta düzenlenen, \"Sivrihisar Hava Gösterileri\" / \"SHG Airshow\", her yaştan havacılık sevdalısına hitap eden bir organizasyon. \"Sivrihisar Hava Gösterileri\", havacılığın önemini vurgularken, özellikle gençlere ve çocuklara havacılık hakkında bilgi edinmek için birçok fırsat sunuyor. İlk kez 2015 yılında düzenlenen ve çok ilgi çeken organizasyon, her yıl daha da büyüyerek uluslararası alanda adını duyuruyor. Bugün Uluslararası Hava Gösterileri'nin bulunduğu beynelmilel takvimlerde de \"SHG Airshows\" adıyla yer alıyor.",
        "Sivrihisar Hava Gösterileri, ülkemizde sportif ve genel havacılığın gelişmesine katkı sağlamak, M.S.Ö. Hava ve Uzay Müzesi'ne ait tarihi değeri olan hava araçlarını, havacılık tutkunlarıyla buluşturmak ve havacılık kültürünü artırmak adına her yıl on binlerce kişiyi bir araya getirerek, seyircilerine heyecan dolu, keyifli anlar yaşatıyor.",
        "İki gün boyunca devam eden Sivrihisar Hava Gösterileri'nde yer alan dünyaca ünlü gösteri pilotları, birbirinden heyecanlı uçuş gösterileri gerçekleştirerek izleyicileri büyülüyor. Tarihi uçaklar, akrobasi uçakları, helikopterler, jet uçakları ve ilgi çekici daha birçok hava taşıtı hayranları ile buluşuyor. Bunun yanında planör, paramotor, model uçak gösterileri ve paraşüt atlayışları da gösterilere renk katıyor.",
        "Gösteri pilotlarının yanı sıra birçok firma, uçuş okulu, üniversite ve havacılık ile ilgili kurumlar da bu organizasyona kendilerini tanıtmak için katılıyor.",
        "Yabancı ülkelerden katılım sağlayan firmalar, imal ettikleri sportif uçakları ve ürünlerini pazarlamak maksadıyla bu organizasyonda bulunuyor. Böylelikle, Sivrihisar Hava Gösterileri Organizasyonu \"Havacılık Fuarı\" kimliğine de sahip oluyor.",
        "Sivrihisar Hava Gösterileri'nde, show günleri boyunca çalışan yaklaşık 100 kişilik gönüllü bir ekip yer alıyor ve bu sayede organizasyon, havacılığın gelişmesi için katkıda bulunmak isteyen birçok kişiyi bir araya getirmiş oluyor. Ayrıca, Airshow'a katılan misafirler/katılımcılar çevredeki birçok yerel işletmeye fayda sağlıyor."
      ],
      back: "ANA SAYFAYA DÖN",
      explore: "WEB SİTESİ"
    },
    EN: {
      title: "About",
      tagline: "SHG AIRSHOW",
      archiveTitle: "PAST YEARS",
      mainText: [
        "Organized annually by the Sivrihisar Aviation Club Association at the Sivrihisar Aviation Center Necati Artan Facilities on an international scale, \"Sivrihisar Airshow\" / \"SHG Airshow\" is an organization that appeals to aviation enthusiasts of all ages. \"Sivrihisar Airshow\" emphasizes the importance of aviation while offering numerous opportunities for young people and children to learn about aviation. First held in 2015, the organization attracted great interest and has grown each year, making a name for itself internationally. Today, it is listed as \"SHG Airshows\" in international airshow calendars worldwide.",
        "Sivrihisar Airshow brings together tens of thousands of people every year to contribute to the development of sport and general aviation in our country, to unite aviation enthusiasts with historic aircraft belonging to the MSÖ Air and Space Museum, and to enhance aviation culture, providing audiences with enjoyable and exciting moments.",
        "World-renowned display pilots participating in the two-day Sivrihisar Airshow perform thrilling flight demonstrations that leave spectators in awe. Historic aircraft, aerobatic planes, jet aircraft, helicopters, and many other fascinating aerial vehicles meet their admirers. Additionally, glider, paramotor, model aircraft displays, and parachute jumps add color to the shows. Historic aircraft belonging to the MSÖ Air and Space Museum provide information about aviation history through both static and dynamic displays. Besides display pilots, many companies, flight schools, universities, and aviation-related institutions also participate in this organization to promote themselves.",
        "Foreign companies attend this organization to market the sport aircraft and products they manufacture. Thus, Sivrihisar Airshow also takes on the identity of an \"Aviation Fair.\"",
        "Sivrihisar Airshow also features a volunteer team of approximately 100 people working throughout the show days, bringing together many individuals who want to contribute to the development of aviation. Furthermore, the accommodation of guests and participants at nearby hotels and the presence of food and beverage stands at the event also benefit many local businesses."
      ],
      back: "BACK TO HOME",
      explore: "WEB SITE"
    }
  }[lang];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden relative">
        <img
          src="/images/shg-seyirci.jpg"
          className="w-full h-full object-cover"
          alt="Aviation Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark to-transparent"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-16">
          <p className="text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4">
            {content.tagline}
          </p>
          <h1 className="text-2xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8">
            {content.title}<span className="text-primary">.</span>
          </h1>
          <div className="w-16 h-1 bg-primary"></div>
        </header>

        {/* Narrative Text */}
        <div className="space-y-8 mb-32">
          {content.mainText.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-medium"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Past Years Archive Area */}
        <div className="border-t border-gray-100 dark:border-white/5 pt-24 mb-32">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-secondary dark:text-white mb-2 tracking-tight">
              {content.archiveTitle}
            </h2>
            <p className="text-gray-400 font-medium text-sm tracking-wide">
              {content.archiveSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {pastYears.map((item) => (
              <a
                key={item.year}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-10 bg-gray-50 dark:bg-white/5 rounded-2xl hover:bg-primary transition-all duration-500 text-center overflow-hidden border border-transparent hover:border-primary shadow-sm hover:shadow-xl"
              >
                <span className="block text-4xl font-black text-secondary dark:text-white group-hover:text-white transition-colors duration-300">
                  {item.year}
                </span>

                {/* Subtle Hover Action Label */}
                <div className="absolute bottom-4 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-[9px] font-black text-white tracking-[0.3em] uppercase">{content.explore}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-16 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        </div>
      </div>
    </div>
  );
};

export default AboutShow;
