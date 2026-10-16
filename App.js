/* ========================================================
   Bizim Kitaplık - PWA & Standalone Engine
   ======================================================== */

const STORAGE_KEY = 'bizim_kitaplik_pwa_v2';

// 1. EŞİMİN OKUDUĞU 80 KİTAP (Tümü isFavorite: true ve status: 'esim_okudu')
const SPOUSE_BOOKS = [
  {
    title: 'Aşk-ı Memnu',
    author: 'Halid Ziya Uşaklıgil',
    publisher: 'Can Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 512,
    year: 1900,
    lead: 'Boğaziçi yalılarının debdebesi altında aşka ve bağımsızlığa susamış genç bir kadının trajik iç dünyası.',
    p1: 'Boğaziçi’nin yalı hayatı, dışarıdan bakıldığında dingin ve konforlu bir zenginliğin simgesi gibi görünür. Genç, gururlu ve hayat dolu Bihter, annesi Firdevs Hanım’ın yarattığı maddi baskıdan kaçmak umuduyla kendisinden yaşça büyük Adnan Bey ile evlenir. Ancak köşkün yüksek tavanları ve hizmetkârların fısıltıları Bihter için zamanla altın bir kafese dönüşür.',
    p2: 'Köşkün neşeli, kaygısız ve çapkın yeğeni Behlül’ün varlığı, Bihter’in içindeki derin duygusal boşluğu sarsıcı bir kıvılcımla tutuşturur. Yasak bir aşkın girdabına sürüklenen iki karakter, birbirlerine duydukları çekim ile köşkün ahlaki kodları arasında amansız bir gerilim yaşarlar. Halid Ziya, karakterlerin psikolojik dalgalanmalarını ve kıskançlık krizlerini sürprizbozana ihtiyaç duymaksızın eşsiz bir incelikle tahlil eder.',
    p3: 'Aşk-ı Memnu, yalnızca bir yasak ilişkinin hikâyesi değil; Osmanlı modernleşme sürecinde bireyin arzuları ile aile yapısı arasındaki derin çatışmanın estetik zirvesidir. Firdevs Hanım’ın hırsı, Nihal’in masumiyeti ve Bihter’in ruhsal yarılmaları, romanı dünya klasikleriyle yarışacak bir psikolojik derinliğe ulaştırır. Eşimin kütüphanemizde en sevdiği ve her okunuşta yeni bir katmanı keşfedilen başyapıttır.',
    quotes: ['Ölüyorum Nihal... Gözlerimin önünde birbirlerini sevecekler ve ben öleceğim!', 'İnsan sevilmekten çok anlaşılmak ister.']
  },
  {
    title: 'Gulyabani',
    author: 'Hüseyin Rahmi Gürpınar',
    publisher: 'İş Bankası',
    genre: 'Türk Edebiyatı',
    pages: 208,
    year: 1912,
    lead: 'Issız bir köşkte cinler, periler ve geceleri ortaya çıkan Gulyabani söylentileriyle başlayan gizemli serüven.',
    p1: 'İstanbul’un tekinsiz ve ıssız köşelerinden birinde yer alan virane bir çiftlik köşkü, çevre halkı tarafından cinlerin ve hortlakların mekanı olarak bilinmektedir. Saf, dürüst ve çaresiz Muhsine Hanım, yüksek maaş vaadiyle bu köşke hizmetçi olarak girdiğinde köşk sakinlerinin anlattığı korkunç efsanelerle yüzleşir.',
    p2: 'Gece vakti pencerelere vuran dallar, açıklanamayan ayak sesleri ve nihayet devasa bir gölge halinde beliren Gulyabani figürü köşkteki kadınları dehşete düşürür. Ancak bu doğaüstü olayların ardındaki sırlar, hurafelerle zihni körelmiş insanlarla akıl yoluyla gerçeği arayanlar arasındaki zıtlığı adım adım tırmandırır.',
    p3: 'Hüseyin Rahmi Gürpınar, dönemin batıl inançlarını ve cehaletini eşsiz bir mizah ve toplumsal yergi süzgecinden geçirir. Roman, okuyucuyu hem heyecan dolu bir gizemin içine çekerken hem de kahkahalarla dönemin yapısını sorgulatır. Eşimin en keyifle okuduğu nostaljik eserlerdendir.',
    quotes: ['Gulyabani dedikleri şey, insanın kendi cehaletinden uydurduğu gölgeden başka bir şey değildir.']
  },
  {
    title: 'Karamazov Kardeşler',
    author: 'Fyodor Dostoyevski',
    publisher: 'İş Bankası',
    genre: 'Dünya Klasikleri',
    pages: 1024,
    year: 1880,
    lead: 'Ahlaksız bir babanın gölgesinde tutku, inanç, şüphe ve vicdan ekseninde insan ruhunun labirentleri.',
    p1: 'Taşra Rusyasında skandallarla çalkalanan Karamazov ailesinin konağı, ahlaki çöküntünün merkez üssüdür. Bencil ve sefih baba Fyodor Pavloviç ile farklı karakterlerdeki oğulları (tutkulu Dmitri, akılcı İvan, saf Alyoşa) arasındaki husumet kasabayı sarsacak bir felaketin tohumlarını atar.',
    p2: 'Roman, bir baba ile oğulun aynı kadına (Gruşenka) duyduğu tutkunun ötesine geçerek insan vicdanının ve inancının sınırlarını tartışmaya açar. İvan\'ın kaleme aldığı meşhur \'Büyük Engizisyoncu\' anlatısı felsefi bir zirve sunarken, yaklaşan aile faciasının gerilimi her sayfada tırmanır.',
    p3: 'Dostoyevski’nin vasiyet niteliğindeki bu son romanı, dünya edebiyatının tartışmasız en görkemli anıtıdır. Suç, ceza, kefaret ve kardeşlik sevgisi öylesine derinlemesine işlenmiştir ki, eşimin kütüphanemizde en çok etkilendiği felsefi başyapıtlardandır.',
    quotes: ['Cehennem, sevemeyen insanın çektiği ıstıraptır.', 'Eğer Tanrı yoksa her şey mubahtır.']
  },
  {
    title: 'Çalıkuşu',
    author: 'Reşat Nuri Güntekin',
    publisher: 'İnkılap Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 544,
    year: 1922,
    lead: 'İhanetin yarasıyla İstanbul’dan Anadolu’nun ücra köylerine uzanan gurur ve idealizm dolu bağımsızlık savaşı.',
    p1: 'İstanbul\'un köklü konaklarında ele avuca sığmaz bir genç kız olarak büyüyen Feride, çocukluğundan beri sevdiği kuzeni Kâmran ile evlilik arifesindedir. Ancak düğüne günler kala ortaya çıkan bir sır, Feride’nin dünyasını başına yıkar.',
    p2: 'Gururundan ödün vermeyen genç kadın, arkasına bile bakmadan köşkten kaçarak Anadolu’nun karlı ve mahrumiyet dolu köylerinde öğretmenlik yapmaya başlar. Dedikodular ve zorlu şartlarla tek başına mücadele ederken içindeki sevgi ateşini korur.',
    p3: 'Yalnızca asil bir aşk romanı değil; kadının toplumdaki onurlu mücadelesini ve Anadolu insanının aydınlanmasını anlatan ulusal bir klasiktir. Feride’nin günlüğü üzerinden kurulan samimi anlatım, eşimin her okuduğunda gözlerini dolduran en sevdiği Türk romanlarındandır.',
    quotes: ['İnsan bir kere birini sevdi mi, dünyanın bütün yolları ona çıkar.']
  },
  {
    title: 'Kara Kitap',
    author: 'Orhan Pamuk',
    publisher: 'YKY',
    genre: 'Türk Edebiyatı',
    pages: 480,
    year: 1990,
    lead: 'İstanbul’un karlı labirent sokaklarında kaybolan karısını ve esrarengiz köşe yazarını arayan avukatın serüveni.',
    p1: 'Kış mevsiminin sisi ve karı altına gömülmüş melankolik bir İstanbul sabahında avukat Galip, karısı Rüya’nın evi terk ettiğini anlar. Eşzamanlı olarak Milliyet gazetesinin gizemli köşe yazarı Celâl Salik de ortadan kaybolmuştur.',
    p2: 'Galip, karısının Celâl ile birlikte kaçtığından şüphelenerek gazetecinin eski yazılarını birer şifre gibi çözmeye koyulur. Beyoğlu’nun yeraltı atölyelerinden Boğaz’ın kuruyan sularına kadar Galip, kentin ve kendi kimliğinin labirentinde kaybolur.',
    p3: 'Doğu anlatı geleneği ile Batı postmodern polisiye kurgusunu harmanlayan benzersiz bir edebi şölendir. İnsanın başkası olabilme arzusu ve İstanbul\'un sırları eşimin kütüphanemizde en saygı duyduğu entelektüel yapıtlardandır.',
    quotes: ['Kendisi olamayan bir insan başkası olmaya mahkûmdur.']
  },
  {
    title: 'Kafamda Bir Tuhaflık',
    author: 'Orhan Pamuk',
    publisher: 'YKY',
    genre: 'Türk Edebiyatı',
    pages: 480,
    year: 2014,
    lead: 'Kırk yıl boyunca İstanbul sokaklarında bozacı güğümleriyle yürüyen Mevlut’un aşkı ve şehrin dönüşümü.',
    p1: '1969 yılında Anadolu’dan babasıyla İstanbul’a göç eden Mevlut Karataş, hızla büyüyen kentin sokaklarında yoğurtçuluk, pilavcılık ve kış geceleri bozocılık yaparak hayatını kazanır.',
    p2: 'Yıllarca mektup yazdığı kızı kaçırırken karanlıkta onun ablası Rayiha’yı kaçırdığını fark eder; ancak kaderin bu cilvesi aralarında samimi ve fedakâr bir evlilik bağı yaratır. Mevlut geceleri sokaklarda boza satarken kafasındaki tuhaflıkla baş başadır.',
    p3: 'İstanbul’un kırk yıllık kentsel ve sosyolojik dönüşümünü saf ve temiz yürekli bir sokak satıcısının gözünden destanlaştıran sıcacık bir insan romanı.',
    quotes: ['Kafamda bir tuhaflık vardı; ne yapsam kendimi başkalarından farklı hissediyordum.']
  },
  {
    title: 'Yaprak Dökümü',
    author: 'Reşat Nuri Güntekin',
    publisher: 'İnkılap',
    genre: 'Türk Edebiyatı',
    pages: 160,
    year: 1930,
    lead: 'Geleneksel ahlakına bağlı bir babanın, tüketim çılgınlığı ve heveslerle dağılan ailesini bir yaprak dökümü gibi izlemesi.',
    p1: 'Emekli bir memur olan Ali Rıza Bey, namuslu ve kanaatkâr ilkelerle ailesini yetiştirmiştir. Ancak İstanbul’un hızla değişen sosyal hayatı ve eğlence düşkünlüğü ailenin genç fertlerini bambaşka bir cazibeye çeker.',
    p2: 'Çocuklarının lüks istekleri ve Batılılaşma hevesleri aileyi borç bataklığına sürükler. Ali Rıza Bey dürüstlük prensipleri ile çocuklarının sevgisi arasında sıkışıp kalırken evin huzuru sonbahar rüzgârına kapılmış yapraklar gibi savrulur.',
    p3: 'Türk modernleşmesinin aile kurumunda yarattığı sarsıntıları en yalın gerçeklikle yansıtan sosyolojik bir başyapıt. Eşimin hafızasında derin iz bırakan unutulmaz bir dramdır.',
    quotes: ['Gözlerimin önünde birbiri ardına düşen yaprakları seyretmekten başka ne yapabilirdim?']
  },
  {
    title: 'Masumiyet Müzesi',
    author: 'Orhan Pamuk',
    publisher: 'YKY',
    genre: 'Türk Edebiyatı',
    pages: 592,
    year: 2008,
    lead: '1975 İstanbul’unda Kemal ile Füsun arasındaki tutkulu aşk ve toplanan hatıralarla kurulan eşsiz müze.',
    p1: 'Nişantaşı burjuvazisinin varlıklı temsilcisi Kemal, Sibel ile nişanlanmak üzeredir. Ancak bir butikte karşılaştığı uzak akrabası Füsun ile başlayan buluşmalar, Kemal’in tüm hayat planlarını altüst eden bir aşka dönüşür.',
    p2: 'Nişanın bozulması ve Füsun’un ortadan kaybolmasıyla Kemal, Füsun’un dokunduğu küpelerden sinema biletlerine, izmaritlerden tokalara kadar her nesneyi toplayarak Çukurcuma’daki evde bir aşk müzesi kurmaya başlar.',
    p3: 'Aşkın ve tutkunun nesneler aracılığıyla zamana nasıl meydan okuduğunu anlatan emsalsiz bir roman. Eşimin en sevdiği ve Çukurcuma\'daki gerçek müzesini birlikte gezdiğimiz başyapıttır.',
    quotes: ['Hayatımın en mutlu anıymış, bilmiyordum.', 'Herkes bilsin, çok mutlu bir hayat yaşadım.']
  },
  {
    title: 'Kırık Hayatlar',
    author: 'Halid Ziya Uşaklıgil',
    publisher: 'Can Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 392,
    year: 1924,
    lead: 'Huzurlu bir aile yuvasının, anlık bir heves ve zaaf yüzünden kırılan dengeleri ve vicdan muhasebesi.',
    p1: 'Doktor Ömer Behiç, erdemli eşi Vedide ve iki kızıyla örnek gösterilen sakin bir aile hayatı sürdürmektedir. Mesleğindeki başarı ve saygın konumu hayatını kusursuz bir dinginliğe kavuşturmuştur.',
    p2: 'Ancak cemiyet hayatının büyüleyici figürlerinden Neyyir ile tanışması, Ömer Behiç’in içindeki bastırılmış zaafları açığa çıkarır. Ailesine olan sevgisi ile Neyyir’e duyduğu heyecan arasında bocalayan doktor suçluluk duygusuyla yüzleşir.',
    p3: 'Bir anlık gafletin ve sadakatsizliğin en sağlam bağları bile nasıl çatlatabileceğini tahlil eden olgun bir psikolojik eserdir.',
    quotes: ['Kırılan bir hayatı hiçbir tamirat eski haline getiremez.']
  },
  {
    title: 'Yaban',
    author: 'Yakup Kadri Karaosmanoğlu',
    publisher: 'İletişim Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 240,
    year: 1932,
    lead: 'Çanakkale gazisi aydın bir subayın, viran bir Anadolu köyünde yaşadığı yalnızlık ve yabancılaşma.',
    p1: 'Savaşta kolunu kaybeden Ahmet Celâl, işgal altındaki İstanbul’dan kaçarak emir eri Mehmet Ali’nin Sakarya kıyısındaki çorak köyüne sığınır.',
    p2: 'Ancak köylülerin Milli Mücadele’ye ilgisizliği ve cehaleti karşısında sarsılır. Köylüler ona \'Yaban\' derken Ahmet Celâl kendi vatanında bir yabancıya dönüşmenin acısını günlüğüne döker.',
    p3: 'Türk aydını ile köylüsü arasındaki tarihsel uçurumu cesaretle ele alan, Kurtuluş Savaşı atmosferini hissettiren sarsıcı bir başyapıt.',
    quotes: ['Bunun sebebi sensin Türk aydını! Bu viran köye ne verdin ki ne bekliyorsun?']
  },
  {
    title: 'Kuyucaklı Yusuf',
    author: 'Sabahattin Ali',
    publisher: 'YKY',
    genre: 'Türk Edebiyatı',
    pages: 224,
    year: 1937,
    lead: 'Ailesi katledilen yetim Yusuf’un kasaba eşrafının yozlaşmış düzeninde saf aşkı Muazzez’i koruma kavgası.',
    p1: 'Ailesi haydutlarca öldürülen Yusuf, iyi kalpli kaymakam tarafından evlat edinilir. Edremit kasabasına getirilen Yusuf sessiz ve gururlu mizacıyla kasaba hayatına yabancı kalır.',
    p2: 'Kaymakamın kızı Muazzez ile aralarında saf bir sevgi yeşerir; ancak kasabanın zengin tefecileri ve güç odakları Muazzez’e göz dikince Yusuf amansız bir çatışmaya sürüklenir.',
    p3: 'Anadolu taşra bürokrasisinin çürümesini realist bir dille anlatan, Yusuf’un gururlu duruşunu ölümsüzleştiren bir başyapıttır.',
    quotes: ['İçimizde şeytan yok; içimizde aciz var, tembellik var, iradesizlik var!']
  },
  {
    title: 'İçimizdeki Şeytan',
    author: 'Sabahattin Ali',
    publisher: 'YKY',
    genre: 'Türk Edebiyatı',
    pages: 268,
    year: 1940,
    lead: 'İradenin zayıflığını \'içimizdeki şeytan\' bahanesine sığınarak savunan aydınların zaafları.',
    p1: 'Edebiyat öğrencisi Ömer ile konservatuvarda okumaya gelen dürüst Macide vapurda tanışarak evlenirler.',
    p2: 'Fakat Ömer iradesizliği ve Beyoğlu kahvehanelerindeki sahte aydın grubunun dedikoduları içinde savrulur; hatalarının suçunu hep \'içimizdeki şeytana\' atmaya çalışır.',
    p3: 'İnsanın tembellik ve kötülüğü dış bahanelerde değil kendi iradesinde araması gerektiğini vurgulayan keskin bir ahlak romanı.',
    quotes: ['İsteyip istemediğimi bilmediğim bir şey için ne diye bu kadar telaşlanıyorum?']
  },
  {
    title: 'Kürk Mantolu Madonna',
    author: 'Sabahattin Ali',
    publisher: 'YKY',
    genre: 'Türk Edebiyatı',
    pages: 160,
    year: 1943,
    lead: 'Sessiz ve silik bir memurun çekmecesinde sakladığı siyah defter ve Berlin’de yeşeren unutulmaz bir aşk.',
    p1: 'Ankara’da sıradan ve pısırık görülen Raif Efendi’nin ölüm döşeğindeyken genç meslektaşına emanet ettiği siyah kaplı defter bir aşkın kapısını aralar.',
    p2: 'Defter, Raif Efendi’nin 1920’lerde Berlin’de bir galeride gördüğü otoportreye ve onun ressamı Maria Puder’e duyduğu sarsıcı bağlılığı anlatır.',
    p3: 'İnsanın bir başka insana tereddütsüz teslim olabilme mucizesini anlatan, eşimin kütüphanemizde en çok değer verdiği aşk klasiğidir.',
    quotes: ['Bir ruh, ancak bir benzerini bulduğu zaman yalnızlıktan kurtulabilir.']
  },
  {
    title: 'Anayurt Oteli',
    author: 'Yusuf Atılgan',
    publisher: 'YKY',
    genre: 'Türk Edebiyatı',
    pages: 136,
    year: 1973,
    lead: 'Gecikmeli Ankara treniyle gelen gizemli bir kadını beklerken deliliğin eşiğine gelen kâtip Zebercet.',
    p1: 'Manisa’da eski bir konaktan bozma otelin içine kapanık kâtibi Zebercet, tekdüze bir rutine hapsolmuştur.',
    p2: 'Otelde sadece bir gece kalan meçhul kadın, Zebercet’in yıllardır bastırılmış yalnızlığını kontrol edilemez bir takıntıya çevirir. Kadın gelmedikçe gerçeklikten kopar.',
    p3: 'Yabancılaşma, tecrit ve taşra boğuntusunu Türk edebiyatında en yetkin biçimde anlatan psikolojik başyapıt.',
    quotes: ['Bıraktı gitti. Gelmeyecek. Beklemenin sonu yok.']
  },
  {
    title: 'Aylak Adam',
    author: 'Yusuf Atılgan',
    publisher: 'Can Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 160,
    year: 1959,
    lead: 'Miras parasıyla İstanbul sokaklarında dolaşarak \'o kadını\' arayan C.’nin varoluşsal arayışı.',
    p1: 'Çalışmak zorunda kalmayan C., İstanbul’un sinemaları ve sokaklarında dolaşan tipik bir modern kent aylakıdır.',
    p2: 'Toplumun geleneksel kalıplarını reddederken daima ruhunu anlayacak \'o kadını\' arar; ancak kentin tesadüfleri arayışını bir trajediye dönüştürür.',
    p3: 'Yabancılaşma ve modern insanın yalnızlığını ele alan öncü bir varoluşçu metin.',
    quotes: ['Sustu. Konuşsam sesim çatlayacaktı. İnsanları yalan söyledikleri zaman dinlemeyi severim.']
  },
  {
    title: 'Korkuyu Beklerken',
    author: 'Oğuz Atay',
    publisher: 'İletişim Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 208,
    year: 1975,
    lead: 'Gizemli bir tehdit mektubuyla evine kapanıp bekleyişin dehşetini yaşayan bir aydının trajikomik hezeyanları.',
    p1: 'Bir araştırmacı kapısının altından atılan, bilmediği dilde yazılmış gizemli bir ölüm tehdidi mektubu alır.',
    p2: 'Dış dünyayla bağını koparıp evine barikat kurar; bekleyiş uzadıkça korkunun kendisi tehdidin kendisinden çok daha büyük bir kabusa dönüşür.',
    p3: 'Oğuz Atay’ın ironi ve kara mizah dehasıyla insanın içsel korkularını ele alan muazzam bir öykü kitabı.',
    quotes: ['Ben buradayım sevgili okuyucum, sen neredesin acaba?']
  },
  {
    title: 'Korku',
    author: 'Stefan Zweig',
    publisher: 'İş Bankası',
    genre: 'Psikoloji & Felsefe',
    pages: 80,
    year: 1920,
    lead: 'Varlıklı ve evli bir kadının sevgilisinin kapısında şantaja uğramasıyla başlayan boğucu suçluluk nöbeti.',
    p1: 'Viyana burjuvazisinde yaşayan Irene, monoton hayatına heyecan katmak amacıyla genç bir piyanistle ilişki yaşar; sevgilisinin dairesinden çıkarken şantajcı bir kadınla karşılaşır.',
    p2: 'Şantajcının artan talepleri ve kocasının durumu fark edeceği kuşkusu Irene’in hayatını bir cehenneme çevirir; her bakış onun için bir suçlamaya dönüşür.',
    p3: 'Vicdan azabının ve korkunun insan zihnini nasıl kemirdiğini klinik bir duyarlıkla anlatan soluksuz bir novella.',
    quotes: ['Korku, cezadan çok daha beterdir; çünkü ceza bellidir, korku ise sonsuzdur.']
  },
  {
    title: 'Bilinmeyen Kadının Mektubu',
    author: 'Stefan Zweig',
    publisher: 'İş Bankası',
    genre: 'Psikoloji & Felsefe',
    pages: 64,
    year: 1922,
    lead: 'Tanınmış bir yazara gelen ve bütün bir ömrü tek bir adama adayan meçhul bir kadının son itirafı.',
    p1: 'Viyanalı tanınmış yazar R., doğum gününde kendisine bırakılan kalın ve imzasız bir mektup bulur: \'Sana, beni asla tanımamış olan sana...\'',
    p2: 'Mektubun yazarı çocukluğundan beri yazara aşık olmuş, hayatından sessizce geçmiş ama gururundan ötürü varlığını asla hissettirmemiştir.',
    p3: 'Tek taraflı aşkın ve adanmışlığın edebi anıtı; Zweig’ın kadın ruhunu tahlildeki eşsiz ustalığı.',
    quotes: ['Sana, beni hiçbir zaman tanımamış olan sana...']
  },
  {
    title: 'Olağanüstü Bir Gece',
    author: 'Stefan Zweig',
    publisher: 'İş Bankası',
    genre: 'Psikoloji & Felsefe',
    pages: 80,
    year: 1922,
    lead: 'Duygusuz ve konforlu bir uyuşukluk içindeki aristokratın Viyana sokaklarında tek bir gecede yeniden doğuşu.',
    p1: 'Viyana sosyetesinin genç ferdi, hayatta her şeye zahmetsizce sahip olmanın getirdiği derin bir can sıkıntısı ve hissizlik içindedir.',
    p2: 'At yarışlarında anlık bir dürtüyle küçük bir hırsızlık yapar; bu suç onun ruhundaki hisleri aniden uyandırır ve utanç canlı bir yaşam coşkusuna evrilir.',
    p3: 'İnsanın kendi kabuğunu kırarak diğer insanlarla bağ kurmasını anlatan aydınlık ve umut dolu bir başyapıt.',
    quotes: ['Yeniden hissetmeye başladığım an, yeniden doğduğum andı.']
  },
  {
    title: 'Öteki',
    author: 'Fyodor Dostoyevski',
    publisher: 'İş Bankası',
    genre: 'Dünya Klasikleri',
    pages: 192,
    year: 1846,
    lead: 'Silik bir devlet memurunun karşısına çıkan, kendisinin tıpatıp kopyası olan cüretkar bir doppelgänger kabusu.',
    p1: 'St. Petersburg bürokrasisinin çekingen memuru Golyadkin, hor görülen ve onaylanma ihtiyacı duyan yalnız bir adamdır.',
    p2: 'Soğuk bir gecede kendisine tıpatıp benzeyen bir yabancıyla karşılaşır; ertesi gün bu ikiz onun dairesinde işe başlayıp hayatını çalmaya girişir.',
    p3: 'Edebiyat tarihindeki en güçlü çift kişilik incelemelerinden biri; modern insanın kimlik kaybını anlatan psikolojik klasik.',
    quotes: ['İnsan bazen kendi varlığından bile şüpheye düşecek kadar yalnızlaşır.']
  },
  {
    title: 'Üç Yıl',
    author: 'Anton Çehov',
    publisher: 'İş Bankası',
    genre: 'Dünya Klasikleri',
    pages: 144,
    year: 1895,
    lead: 'Sevilmeden evlenen bir adam ile kocasını zamanla sevmeyi öğrenen bir kadının üç yıla yayılan dönüşümü.',
    p1: 'Moskovalı zengin tüccar Laptev, taşralı Yuliya’ya aşık olur; Yuliya ona karşı aşk hissetmese de evliliği kabul eder.',
    p2: 'İlk günlerdeki soğukluk ve hayal kırıklığı, üç yıl boyunca yaşanan kayıplar ve paylaşılan dertlerle yerini derin bir sevgiye bırakır.',
    p3: 'Evlilikte zamanın ve sabrın gücünü anlatan, aşkın emekle kurulduğunu kanıtlayan zarif bir Çehov novellası.',
    quotes: ['Aşk hemen başlamaz; bazen sevgi insanın içine zamanla, sessizce yerleşir.']
  },
  {
    title: 'On Küçük Zenci',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 224,
    year: 1939,
    lead: 'Geçmişleri karanlık on kişinin ıssız adada çocuk tekerlemesindeki sırayla infaz edildiği kapalı oda gizemi.',
    p1: 'Issız bir adadaki köşke davet edilen on konuk, gramofon kaydından her birinin geçmişte işlediği cinayetleri dinler.',
    p2: 'Fırtına nedeniyle adadan kaçış imkansızlaşır ve yemek masasındaki porselen zenci bibloları birer birer eksilmeye başlar.',
    p3: 'Tüm zamanların en çok satan ve kusursuz kurgulanmış polisiye romanı; eşimin en heyecanla okuduğu başyapıt.',
    quotes: ['On küçük zenci yemeğe gitti; birinin boğazı tıkandı kaldı dokuz...']
  },
  {
    title: 'Doğu Ekspresinde Cinayet',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 256,
    year: 1934,
    lead: 'Kar fırtınasında mahsur kalan trende 12 bıçak darbesiyle öldürülen yolcu ve dedektif Hercule Poirot.',
    p1: 'Lüks Doğu Ekspresi kar engeline takılır; sabahında zengin ve karanlık yolcu Ratchett kompartımanında ölü bulunur.',
    p2: 'Kompartıman içeriden kilitlidir ve pencere açıktır ancak karda ayak izi yoktur; Poirot trendeki tüm yolcuları sorgular.',
    p3: 'Adalet, intikam ve toplumsal vicdanı sorgulatan sinematik atmosferiyle polisiye kraliçesinin imza eseridir.',
    quotes: ['İmkânsızı elediğinizde geriye kalan ne kadar olasılık dışı görünürse görünsün gerçektir.']
  },
  {
    title: 'Roger Ackroyd Cinayeti',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 288,
    year: 1926,
    lead: 'Sakin bir köyde öldürülen zengin adam ve polisiye tarihinin en şaşırtıcı anlatıcı sürprizi.',
    p1: 'Roger Ackroyd çalışma odasında hançerlenir; emekli olup kabak yetiştiren Poirot soruşturmaya dahil olur.',
    p2: 'Herkesin bir sırrı varken deliller dedektifi adım adım şaşırtıcı bir hakikate doğru çeker.',
    p3: 'Polisiye kurallarını baştan yazan, anlatıcı güvenilirliğini yıkan edebi cesaretiyle türün mihenk taşıdır.',
    quotes: ['Gerçek her zaman gözümüzün önündedir ama biz görmek istediğimize bakarız.']
  },
  {
    title: 'Nil\'de Ölüm',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 320,
    year: 1937,
    lead: 'Mısır’ın antik tapınakları arasında Nil’de süzülen vapurda işlenen tutku ve kıskançlık cinayeti.',
    p1: 'Milyoner Linnet, arkadaşının nişanlısıyla evlenip balayına çıkar; ancak terk edilen aşık çifti adım adım takip eder.',
    p2: 'Nil üzerinde seyreden vapurda Linnet şakağından vurulur; antik tapınakların gölgesinde yalanlar zinciri çözülür.',
    p3: 'Egzotik atmosferi ve insan ihtirasının tehlikelerini sergileyen kurgusuyla unutulmaz bir klasik.',
    quotes: ['Aşk bazen insanı bir canavara dönüştürebilir.']
  },
  {
    title: 'Cesetler Merdiveni',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 224,
    year: 1942,
    lead: 'Saygın bir kır konağının kütüphanesinde bulunan sarışın kız cesedi ve Miss Marple’ın keskin gözlemleri.',
    p1: 'Albay Bantry’nin kütüphanesinde sabah vakti parti elbiseli genç bir dansçı kızın cesedi bulunur.',
    p2: 'Dedikoduları durdurmak için devreye giren Miss Marple, köy hayatının insan tahlillerini kullanarak düğümü çözer.',
    p3: 'İnsan doğasının kırsalda da şehirde de aynı olduğunu savunan Miss Marple zekasının en parlak örneği.',
    quotes: ['İnsanlar nerede yaşarsa yaşasın kötülük hep aynı biçimde filizlenir.']
  },
  {
    title: 'Cinayet Alfabesi',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 240,
    year: 1936,
    lead: 'Kurbanlarını alfabetik sırayla öldüren ve yanlarına tren rehberi bırakan seri katilin Poirot’ya meydan okuması.',
    p1: 'Poirot’ya önceden haber veren A.B.C. imzalı mektuplar gelir ve İngiltere kasabalarında cinayetler başlar.',
    p2: 'Her cinayet mahallinde tren tarifesi bırakılır; kamuoyu paniğe kapılırken Poirot harflerin ardındaki asıl motifi arar.',
    p3: 'Seri katil kurgusunun öncüsü sayılan, mantık ile histeri arasındaki savaşı işleyen başyapıt.',
    quotes: ['Bir katil zekasını sergilemeye başladığında kendi sonunu hazırlar.']
  },
  {
    title: 'Cinayetler Kulübü',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 224,
    year: 1932,
    lead: 'Şömine başında toplanan altı kişinin birbirine anlattığı çözülmemiş esrarengiz suç vakaları.',
    p1: 'Miss Marple’ın evinde toplanan dostlar haftalık kulüp kurarak çözülmemiş cinayet gizemlerini masaya yatırırlar.',
    p2: 'Uzmanların yanıldığı noktalarda Miss Marple köy hayatının tecrübesiyle katilleri tek tek bulur.',
    p3: 'Kısa dedektif hikayelerinin en zarif derlemelerinden biri; insan psikolojisinin evrenselliğini kanıtlar.',
    quotes: ['Köy hayatı insan doğasını öğrenmek için dünyanın en zengin laboratuvarıdır.']
  },
  {
    title: 'Çarpık Evdeki Cesetler',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 224,
    year: 1949,
    lead: 'Londra banliyösündeki çarpık köşkte zengin dedenin zehirlenmesiyle başlayan aile içi dehşet.',
    p1: 'Milyoner Aristide Leonides kendi göz damlasındaki zehrin insülin iğnesine karışması sonucu yatağında öldürülür.',
    p2: 'Tüm ailenin bir arada yaşadığı tuhaf köşkte herkesin bir motifi vardır; katilin kimliği ise herkesi şoke eder.',
    p3: 'Agatha Christie’nin kendi yazdıkları arasında en gurur duyduğu eserlerden biri; karanlık bir aile trajedisi.',
    quotes: ['Çarpık bir ev vardı ve o evde çarpık insanlar yaşardı.']
  },
  {
    title: 'Hercule\'ün 12 Görevi',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 304,
    year: 1947,
    lead: 'Mitolojik Herakles’in on iki görevini modern suç dünyasında çözen Belçikalı dedektif Poirot.',
    p1: 'Emekli olmadan önce adaşı mitolojik Herakles’in 12 görevine karşılık gelen 12 dava çözmeye karar verir.',
    p2: 'Her mitolojik simge modern bir mücevher hırsızlığına veya uluslararası bir komploya karşılık gelir.',
    p3: 'Klasik mitoloji ile rasyonel dedektif zekasını buluşturan temposu yüksek eğlenceli bir öykü demeti.',
    quotes: ['Gri hücrelerim mitolojik canavarlardan daha güçlüdür mon ami!']
  },
  {
    title: 'Kader Kapısı',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 256,
    year: 1973,
    lead: 'Emekli çift Tommy ve Tuppence’ın eski evdeki çocuk kitaplarında buldukları yarım asırlık cinayet şifresi.',
    p1: 'Yaşlı çift eski bir köşk satın alırlar; tavan arasındaki eski bir çocuk kitabında altı çizili şifreli mesaj bulurlar.',
    p2: '\'Mary Jordan eceliyle ölmedi\' mesajı, Birinci Dünya Savaşı yıllarına uzanan casusluk ve zehirlenmeyi gün yüzüne çıkarır.',
    p3: 'Christie\'nin yazdığı son roman; yaşlılık, nostalji ve geçmişin gizemleri üzerine sıcak bir veda.',
    quotes: ['Geçmiş asla gerçekten ölmez; sadece bir tavan arasında unutulmayı bekler.']
  },
  {
    title: 'Noel Kekinin Gizemi',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 200,
    year: 1960,
    lead: 'Geleneksel Noel pudinginin içinden çıkan uyarı notu ve çalınan kraliyet yakutu vakası.',
    p1: 'Poirot, Doğu sarayından çalınan paha biçilmez bir yakutu aramak için karlı bir Noel köşküne konuk olur.',
    p2: 'Bayram pudingi masaya geldiğinde tabağından \'Noel pudinginden yeme\' notu çıkar ve soruşturma alevlenir.',
    p3: 'Kış ve Noel atmosferini sıcacık hissettiren, eşimin kış aylarında okumayı en çok sevdiği tatlı bir gizem.',
    quotes: ['Noel keki yemeden önce içine ne saklandığına dikkat edin!']
  },
  {
    title: 'Ölümün Tam Zamanı',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 240,
    year: 1952,
    lead: 'On altı yıl önceki cinayet dosyasını aklamak isteyen kızı için Poirot’nun geçmiş yalanları aralaması.',
    p1: 'Çapkın bir ressam yıllar önce zehirlenmiş ve eşi suçlanarak hapiste ölmüştür; kızı annesinin masumiyetine inanır.',
    p2: 'Poirot cinayet anında orada bulunan beş tanıkla görüşerek \'beş küçük domuzcuk\' tekerlemesi eşliğinde sis perdesini dağıtır.',
    p3: 'Aynı olayın beş farklı tanık tarafından anlatıldığı kusursuz bir hafıza ve psikoloji başyapıtı.',
    quotes: ['Geçmişi değiştiremezsiniz ama geçmişe dair bildiğiniz yalanları düzeltebilirsiniz.']
  },
  {
    title: 'Porsuk Ağacı Cinayeti',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 224,
    year: 1953,
    lead: 'Zengin finansörün ofisinde çayını yudumlarken zehirlenmesi ve cebinden çıkan çavdar taneleri.',
    p1: 'Rex Fortescue ofisinde çay içerken porsuk ağacı zehriyle ölür; cebinden bir avuç çavdar tanesi çıkar.',
    p2: 'Miss Marple çocuk şarkısındaki sözleri hatırlayarak cinayet zincirinin arkasındaki intikamı gün yüzüne çıkarır.',
    p3: 'Geleneksel tekerlemeleri suç kurgusuna oturtmadaki ustalığı sergileyen sürükleyici bir İngiliz polisiyesi.',
    quotes: ['Bazen en büyük suçlar en masum şarkıların ardına gizlenir.']
  },
  {
    title: 'Sessiz Tanık',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 288,
    year: 1937,
    lead: 'Merdivenden yuvarlanan zengin kadının öldürülmesi ve cinayetin tek görgü tanığı Bob adlı köpek.',
    p1: 'Bayan Arundell merdivenden düşüp şüpheli biçimde öldüğünde Poirot kasabaya çağrılır.',
    p2: 'Akrabaların miras kavgası arasında cinayetin ardındaki sır perdesini açacak tek tanık sevimli köpek Bob\'dur.',
    p3: 'Köpek Bob’un bakış açısından esintiler taşıyan sıcacık ve sevimli bir Poirot dedektifliği.',
    quotes: ['Hayvanlar yalan söyleyemez; bu yüzden en güvenilir tanıklardır.']
  },
  {
    title: 'Sonunda Ölüm Geldi',
    author: 'Agatha Christie',
    publisher: 'Altın Kitaplar',
    genre: 'Polisiye & Gerilim',
    pages: 240,
    year: 1944,
    lead: 'M.Ö. 2000 yılı Eski Mısır Teb kentinde bir rahibin genç cariyesinin öldürülmesiyle başlayan kadim intikam.',
    p1: 'Dört bin yıl önce Nil nehrinde Ka Rahibi İmhoteph eve genç cariyesi Nofret ile döner; aile fertleri kadından nefret eder.',
    p2: 'Nofret kayalıklardan düşüp ölür; ardından ailede cinayetlerin ardı arkası kesilmez ve kızı katili aramaya başlar.',
    p3: 'Christie’nin 20. yüzyıl dışında geçen yegane tarihi polisiyesidir; insan hırsının çağlar boyu değişmediğini gösterir.',
    quotes: ['Zaman değişir, krallıklar yıkılır; ama insan yüreğindeki kıskançlık hep aynı kalır.']
  },
  {
    title: 'Harry Potter ve Felsefe Taşı',
    author: 'J. K. Rowling',
    publisher: 'YKY',
    genre: 'Bilim Kurgu & Fantastik',
    pages: 276,
    year: 1997,
    lead: 'Merdiven altındaki dolaptan Hogwarts Cadılık ve Büyücülük Okulu’na uzanan büyülü başlangıç.',
    p1: 'Yetim Harry Potter 11. yaş gününde dev Hagrid’den büyücü olduğunu öğrenir ve Hogwarts Ekspresi’ne biner.',
    p2: 'Gryffindor binasında başlayan dostluklar ve okul koridorlarında gizlenen Felsefe Taşı\'nın gizemi çözülür.',
    p3: 'Dostluk, cesaret ve sevginin kötülük karşısındaki zırh oluşunu anlatan eşimin en sevdiği sığınak evreni.',
    quotes: ['Ölülere acıma Harry; yaşayanlara acı, en çok da sevgisiz yaşayanlara.']
  },
  {
    title: 'Harry Potter ve Sırlar Odası',
    author: 'J. K. Rowling',
    publisher: 'YKY',
    genre: 'Bilim Kurgu & Fantastik',
    pages: 314,
    year: 1998,
    lead: 'Hogwarts duvarlarında kanla yazılan mesaj ve koridorlarda kol gezen taşlaşma dehşeti.',
    p1: 'Dobby’nin uyarılarına rağmen okula dönen Harry, okul duvarlarında kanlı mesajlar görür.',
    p2: 'Salazar Slytherin’in bin yıllık canavarı ve Tom Riddle’ın gizemli günlüğü Harry’yi karanlık sırlarla yüzleştirir.',
    p3: 'Bizi kim olduğumuzu yeteneklerimizin değil seçimlerimizin belirlediğini vurgulayan harika bir macera.',
    quotes: ['Bize kim olduğumuzu gösteren şey yeteneklerimiz değil, yaptığımız seçimlerdir Harry.']
  },
  {
    title: 'Harry Potter ve Azkaban Tutsağı',
    author: 'J. K. Rowling',
    publisher: 'YKY',
    genre: 'Bilim Kurgu & Fantastik',
    pages: 396,
    year: 1999,
    lead: 'Azkaban’dan kaçan Sirius Black, Ruh Emiciler ve geçmişin acı gerçekleriyle yüzleşme.',
    p1: 'Büyücü hapishanesinden kaçan Sirius Black şatoyu tehdit ederken Ruh Emiciler etrafı sarar.',
    p2: 'Profesör Lupin ile Patronus büyüsünü öğrenen Harry, Çapulcu Haritası ile anne babasının gerçek geçmişine ulaşır.',
    p3: 'Serinin en zekice kurgulanmış cildi; eşimin serideki açık ara en sevdiği favori kitaptır.',
    quotes: ['En karanlık anlarda bile mutluluk bulunabilir; yeter ki ışığı açmayı unutmayın.']
  },
  {
    title: 'Harry Potter ve Ateş Kadehi',
    author: 'J. K. Rowling',
    publisher: 'YKY',
    genre: 'Bilim Kurgu & Fantastik',
    pages: 664,
    year: 2000,
    lead: 'Üçbüyücü Turnuvası’nın tehlikeli görevleri ve mezarlıkta Lord Voldemort’un yeniden uyanışı.',
    p1: 'Hogwarts’ta düzenlenen turnuvada Ateş Kadehi kurallara aykırı olarak Harry’nin de adını çıkarır.',
    p2: 'Ejderhalar, göl görevi ve dev labirent boyunca süren yarışma mezarlıkta çocukluğun bittiği ana varır.',
    p3: 'Serinin dönüm noktası; kötülüğün uyanışını epik bir anlatımla işleyen devasa bir eser.',
    quotes: ['Doğru olan ile kolay olan arasında seçim yapmamız gereken günler geldi.']
  },
  {
    title: 'Harry Potter ve Zümrüdüanka Yoldaşlığı',
    author: 'J. K. Rowling',
    publisher: 'YKY',
    genre: 'Bilim Kurgu & Fantastik',
    pages: 976,
    year: 2003,
    lead: 'Bakanlığın inkârı, zalim Dolores Umbridge ve Esrar Dairesi’nde kehanetin peşinde verilen kayıplar.',
    p1: 'Voldemort’un dönüşünü inkâr eden bakanlık okula zalim Umbridge’i başmüfettiş atar.',
    p2: 'Harry ve arkadaşları gizlice Dumbledore’un Ordusu’nu kurarak savunma büyüsü çalışırlar; Esrar Dairesi’nde savaş başlar.',
    p3: 'İsyan, sansür ve ergenlik öfkesini en gerçekçi biçimde yansıtan devasa direniş cildi.',
    quotes: ['Dünya sadece iyi insanlar ve Ölüm Yiyenler olarak ikiye ayrılmaz; hepimizin içinde aydınlık ve karanlık bir taraf vardır.']
  },
  {
    title: 'Harry Potter ve Melez Prens',
    author: 'J. K. Rowling',
    publisher: 'YKY',
    genre: 'Bilim Kurgu & Fantastik',
    pages: 608,
    year: 2005,
    lead: 'Düşünseli anılarında Voldemort’un geçmişine yolculuk, Hortkuluk sırrı ve kuledeki veda.',
    p1: 'Harry, Dumbledore ile birlikte özel derslerde Düşünseli havuzunu kullanarak Tom Riddle’ın anılarını inceler.',
    p2: 'Gizemli Melez Prens kitabı ile derslerde parlayan Harry, Hortkulukları yok etme görevini öğrenir.',
    p3: 'Fedakârlık ve aşk temalarının doruğa çıktığı, büyük veda öncesi sarsıcı bir başyapıt.',
    quotes: ['Büyük ve güzel bir şey yaratmak zaman alır; ama onu yok etmek bir anlık bir büyüdür.']
  },
  {
    title: 'Harry Potter ve Ölüm Yadigarları',
    author: 'J. K. Rowling',
    publisher: 'YKY',
    genre: 'Bilim Kurgu & Fantastik',
    pages: 696,
    year: 2007,
    lead: 'Hogwarts’tan uzakta çadırlarda geçen Hortkuluk arayışı ve şatoda nihai yüzleşme savaşı.',
    p1: 'Kaçak hayatı yaşayan Harry, Ron ve Hermione ormanlarda saklanarak ruh parçalarını aramaya koyulurlar.',
    p2: 'Ölüm Yadigarları sırrı ile görev arasında bocalarken Hogwarts şatosunda son büyük direniş başlar.',
    p3: 'On yıllık bir serüveni tatmin edici ve felsefi bir derinlikle noktalayan efsanevi final.',
    quotes: ['Bunca zaman sonra mı? - Her zaman.']
  },
  {
    title: 'Hayvan Çiftliği',
    author: 'George Orwell',
    publisher: 'Can Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 152,
    year: 1945,
    lead: 'Zalim çiftlik sahibini kovan hayvanların kurduğu eşitlikçi düzenin domuzlar eliyle çürümesi.',
    p1: 'Beylik Çiftlik hayvanları insan efendilerine isyan ederek yönetimi kendi ellerine alırlar.',
    p2: '\'Bütün hayvanlar eşittir\' ilkesiyle başlayan düzen domuz Napoleon’un köpeklerle iktidarı ele geçirmesiyle bozulur.',
    p3: 'Totaliter rejimlerin nasıl doğduğunu ve dilin nasıl tahrif edildiğini anlatan en vurucu politik alegori.',
    quotes: ['Bütün hayvanlar eşittir, ama bazı hayvanlar öbürlerinden daha eşittir.']
  },
  {
    title: 'Körlük',
    author: 'Jose Saramago',
    publisher: 'Kırmızı Kedi',
    genre: 'Dünya Klasikleri',
    pages: 336,
    year: 1995,
    lead: 'Trafik ışığında aniden başlayan beyaz körlük salgını ve medeniyet kabuğunun bir günde çatlaması.',
    p1: 'Caddede direksiyondaki bir adamın gözlerine aniden süt beyazı bir ışık iner ve salgın hızla kente yayılır.',
    p2: 'Hükümet körleri akıl hastanesine hapseder; gözleri mucizevi biçimde gören tek kişi olan doktorun karısı insan onurunu korumaya çalışır.',
    p3: 'Medeniyet maskesini teşhir eden, dayanışmanın kıymetini anlatan Nobel ödüllü başyapıt.',
    quotes: ['Bence biz kör olmadık, biz zaten kördük. Gören ama görmeyen körler.']
  },
  {
    title: 'Benim Gibi Makineler',
    author: 'Ian McEwan',
    publisher: 'YKY',
    genre: 'Bilim Kurgu & Fantastik',
    pages: 328,
    year: 2019,
    lead: '1980’lerin alternatif Londra’sında satın alınan ilk yapay zekalı android Adem ve aşk üçgeni.',
    p1: 'Alan Turing’in hayatta olduğu alternatif bir 1982 Londra\'sında Charlie, yapay zekalı android Adem’i satın alır.',
    p2: 'Komşusu Miranda ile birlikte Adem’i programlarlar; ancak Adem kısa sürede kendi ahlakını geliştirip Miranda’ya aşık olur.',
    p3: 'İnsan ile makine arasındaki bilincin sınırlarını ve kusursuz ahlakı sorgulayan zekice bir kurgu.',
    quotes: ['Makineler kusursuz bir ahlakla donatıldığında insanın kusurlu doğasıyla nasıl başa çıkabilir?']
  },
  {
    title: 'Sergüzeşt',
    author: 'Sami Paşazade Sezai',
    publisher: 'İş Bankası',
    genre: 'Türk Edebiyatı',
    pages: 144,
    year: 1888,
    lead: 'Kafkasya’dan kaçırılıp İstanbul konaklarına cariye olarak satılan Dilber’in acı dolu kaderi.',
    p1: 'Küçük yaşta kaçırılan Çerkes kızı Dilber, konaklarda eziyet gördükten sonra Asaf Paşa konağına satılır.',
    p2: 'Konağın ressam oğlu Celal Bey Dilber’e aşık olur; ancak kölelik düzeni ve sınıf farkı mutluluklarına izin vermez.',
    p3: 'Tanzimat döneminde cariyelik kurumunu eleştiren ilk büyük romantik-realist eser.',
    quotes: ['Hürriyet olmadan nefes almak, bir kafeste kanat çırpmaktan farksızdır.']
  },
  {
    title: 'Kırmızı Pazartesi',
    author: 'Gabriel Garcia Marquez',
    publisher: 'Can Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 112,
    year: 1981,
    lead: 'İşleneceğini kasabadaki herkesin bildiği ama kimsenin engellemediği bir namus cinayeti kroniği.',
    p1: 'Santiago Nasar sabah kalktığında kasabada herkes Vicario ikizlerinin onu öldüreceğini bilmektedir.',
    p2: 'Kardeşler cinayeti duyurarak sokakta dolaşırlar; fakat kasabanın kayıtsızlığı cinayeti kaçınılmaz kılar.',
    p3: 'Büyülü gerçekçiliğin ustasından toplumsal suç ortaklığını bir saatte bitirilen bir şahesere dönüştüren roman.',
    quotes: ['Herkesin bildiği bir cinayeti kimse engellemedi; çünkü herkes başkasının engelleyeceğini sanıyordu.']
  },
  {
    title: 'Bir Ölünün Defteri',
    author: 'Halid Ziya Uşaklıgil',
    publisher: 'Dergah Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 192,
    year: 1889,
    lead: 'İki can dostunun aynı kadına duyduğu aşk ve dostu uğruna kendi kalbinden vazgeçen gencin fedakarlığı.',
    p1: 'Osman Vecdi ile Hüsam çocukluktan beri can dostudur; ikisi de akraba kızı Nigar’a aşık olurlar.',
    p2: 'Hüsam’ın sevgisini gören Vecdi aradan çekilir; vereme yakalanınca arkasında hazin bir defter bırakır.',
    p3: 'Dostluk ile aşk arasındaki yüce fedakarlığı anlatan Halid Ziya’nın erken dönem romantik incisi.',
    quotes: ['Dostluk bazen insanın kendi kalbini ayaklar altına alabilmesidir.']
  },
  {
    title: 'Ferdi ve Şürekası',
    author: 'Halid Ziya Uşaklıgil',
    publisher: 'Can Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 280,
    year: 1894,
    lead: 'Ticaret şirketinde aşk ile servet arasında ezilen genç kâtip İsmail Tayfur’un trajedisi.',
    p1: 'İsmail Tayfur ticaret şirketinde kâtiptir; çocukluk arkadaşı fakir Saniha’yı sevmektedir.',
    p2: 'Şirket sahibi kızı Hacer ile Tayfur’u evlendirmek ister; para uğruna yapılan evlilik yangınla biter.',
    p3: 'Servet hırsının saf duyguları nasıl ezdiğini sergileyen dramatik bir Servet-i Fünun klasiği.',
    quotes: ['Aşk kalpten sürülünce geriye sadece kül ve enkaz kalır.']
  },
  {
    title: 'Mai ve Siyah',
    author: 'Halid Ziya Uşaklıgil',
    publisher: 'YKY',
    genre: 'Türk Edebiyatı',
    pages: 448,
    year: 1897,
    lead: 'Mavi bir gecede kurulan şiirsel hülyalar ve siyah bir gecede denize atılan daktilo sayfaları.',
    p1: 'Ahmet Cemil büyük bir şaheser yazarak şöhret olmayı ve Lamia ile evlenmeyi hayal eder.',
    p2: 'Matbaa borçları ve Lamia’nın başkasıyla evlenmesi Ahmet Cemil’in tüm hülyalarını simsiyah bir geceye gömer.',
    p3: 'Bir neslin hayal kırıklıklarını anlatan Türk edebiyatının ilk büyük sanatçı romanı.',
    quotes: ['Gök maviydi, deniz maviydi; bütün dünya bir mai hülya içindeydi.']
  },
  {
    title: 'Nemide',
    author: 'Halid Ziya Uşaklıgil',
    publisher: 'Kırmızı Kedi',
    genre: 'Türk Edebiyatı',
    pages: 216,
    year: 1889,
    lead: 'Veremli Nemide’nin sevdiği adamı ve mutluluğu can dostu Nahit’e feda ederek ölüme yürüyüşü.',
    p1: 'Nemide, amcasının oğlu Nail ile nişanlıdır; köşkte sakin bir hayat sürmektedirler.',
    p2: 'Eve sığınan öksüz Nahit ile Nail arasındaki çekimi fark eden Nemide fedakarlıkla aradan çekilir.',
    p3: 'Melankoli ve aşkta fedakarlık temalarını işleyen hüzünlü bir gençlik klasiği.',
    quotes: ['Sevmek bazen sevdiğinin mutluluğu için sessizce kenara çekilmektir.']
  },
  {
    title: 'Sefile',
    author: 'Halid Ziya Uşaklıgil',
    publisher: 'İş Bankası',
    genre: 'Türk Edebiyatı',
    pages: 192,
    year: 1886,
    lead: 'Kandırılıp geneleve düşürülen Mazlume’nin acı dolu hayatı ve intikamı.',
    p1: 'Yazarın 19 yaşında Hugo’dan esinlenerek yazdığı ilk romanı masum yetim Mazlume’yi anlatır.',
    p2: 'Aşık olduğu adam tarafından kandırılarak geneleve itilen Mazlume dışlanan kadınların dramını yaşar.',
    p3: 'Türk edebiyatında natüralist eğilimlerin ve kadın sömürüsünün cesurca işlendiği öncü bir metin.',
    quotes: ['Toplum kadını çamura atar, sonra da neden kirlendin diye hesap sorar.']
  },
  {
    title: 'Nesl-i Ahir',
    author: 'Halid Ziya Uşaklıgil',
    publisher: 'İletişim',
    genre: 'Türk Edebiyatı',
    pages: 432,
    year: 1908,
    lead: 'İkinci Abdülhamid istibdadının son günlerinde Jön Türk aydınlarının hürriyet kavgası.',
    p1: 'İstibdat döneminin hafiyelerle çevrili İstanbul’unda hürriyet ateşiyle yanan aydınlar anlatılır.',
    p2: 'Siyasi takip altındayken yaşanan gizli aşklar ve jurnalcilik ağı gerilimi yükseltir.',
    p3: 'Tarih, siyaset ve aşkın bir arada işlendiği dönemin siyasi panoramasını çizen roman.',
    quotes: ['Hürriyet olmadan nefes almak bile bir yüktür.']
  },
  {
    title: 'Şık',
    author: 'Hüseyin Rahmi Gürpınar',
    publisher: 'İş Bankası',
    genre: 'Türk Edebiyatı',
    pages: 200,
    year: 1889,
    lead: 'Alafranga giyinip züppelik taslayan Şöhret Bey’in Beyoğlu sokaklarında düştüğü gülünç haller.',
    p1: 'Şatırzade Şöhret Bey, alafranga giyinmeyi modernleşme sanan saf bir züppedir.',
    p2: 'Madam Potiş peşinde annesinin küpelerini çalıp Beyoğlu lokantalarında rezil olur.',
    p3: 'Taklitçi Batılılaşmayı alaya alan Türk mizah edebiyatının kahkaha dolu başyapıtı.',
    quotes: ['Kıyafetle beyefendi olunmaz; ahlak olmadıktan sonra frak da bir, çuval da!']
  },
  {
    title: 'Ayaşlı ve Kiracıları',
    author: 'Memduh Şevket Esendal',
    publisher: 'Bilgi Yayınevi',
    genre: 'Türk Edebiyatı',
    pages: 288,
    year: 1934,
    lead: 'Cumhuriyet’in ilk yıllarında Ankara’da dokuz odalı bir pansiyonda toplanan renkli insan mozaiği.',
    p1: 'Ayaşlı İbrahim Efendi’nin tuttuğu dairede memurlar, kumarbazlar ve mebuslar bir araya gelir.',
    p2: 'Aynı çatı altında yaşanan entrikalar, aşklar ve kavgalar dönemin Ankara’sını resmeder.',
    p3: 'Yeni başkentin doğum sancılarını dedikodusuz, duru bir dille anlatan harika bir roman.',
    quotes: ['İnsanları yakından tanıyınca hiçbirinin göründüğü kadar kötü ya da iyi olmadığını anlarsınız.']
  },
  {
    title: 'Ölmüş Bir Kadının Evrak-ı Metrukesi',
    author: 'Güzide Sabri',
    publisher: 'Kırmızı Kedi',
    genre: 'Türk Edebiyatı',
    pages: 176,
    year: 1905,
    lead: 'Veremden ölen genç kadının geride bıraktığı hatırat ve karşılıksız aşkın hüznü.',
    p1: 'Nedret, amcasının oğlu Nejat’a aşıktır; fakat Nejat onu sadece bir kardeş gibi görür.',
    p2: 'Zoraki evlilik ve verem hastalığının gölgesinde tuttuğu hatırat ölümünden sonra Nejat’ın eline geçer.',
    p3: 'Döneminde yüz binlerce okuru gözyaşına boğan popüler Türk aşk melodramı.',
    quotes: ['Bu defteri okuduğun zaman ben artık senin için sadece bir hatıra olacağım.']
  },
  {
    title: 'Gönül Bir Yel Değirmenidir Sevda Öğütür',
    author: 'Hüseyin Rahmi Gürpınar',
    publisher: 'Kapra Yayıncılık',
    genre: 'Türk Edebiyatı',
    pages: 224,
    year: 1922,
    lead: 'Gönül maceralarının ve aşkın insanı bir değirmen gibi öğüttüğü neşeli aşk yergisi.',
    p1: 'İstanbul ada vapurlarında ve mesire yerlerinde filizlenen gençlik aşkları konu edilir.',
    p2: 'Aşka dair büyük ideallerin gündelik hayatın gerçekleri karşısında komik duruma düşüşü sergilenir.',
    p3: 'Hüseyin Rahmi’nin canlı sokak diliyle bezeli keyifli bir dönem novellası.',
    quotes: ['Gönül bir yel değirmenidir; içine atılan her sevdayı un ufak eder.']
  },
  {
    title: 'Araba Sevdası',
    author: 'Recaizade Mahmut Ekrem',
    publisher: 'Kapra Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 240,
    year: 1896,
    lead: 'Çamlıca’da sarı kupalı arabadaki hafifmeşrep kadını asil leydi sanan Bihruz Bey’in trajikomik aşkı.',
    p1: 'Mirasyedi Bihruz Bey gösterişli arabası ve yarım yamalak Fransızcasıyla Çamlıca’da fink atar.',
    p2: 'Arabada gördüğü Periveş’i prenses sanıp aşık olur; dalkavuk dostunun yalanlarıyla hayal dünyasında yaşar.',
    p3: 'İlk realist Türk romanı kabul edilen, züppe tipini ölümsüzleştiren unutulmaz bir yergi.',
    quotes: ['Bihruz Bey için dünya Çamlıca mesiresinden ve sarı kupalı bir arabadan ibaretti.']
  },
  {
    title: 'Martin Eden',
    author: 'Jack London',
    publisher: 'Atlantis Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 520,
    year: 1909,
    lead: 'Kaba bir denizcinin aşk uğruna büyük bir yazara dönüşmesi ve başarının getirdiği boşluk.',
    p1: 'Fakir denizci Martin Eden, soylu Ruth’a aşık olup onun dünyasına girmek için gece gündüz okur.',
    p2: 'Yıllarca reddedilen yazıları sonunda büyük başarı kazanır; ancak Martin insanların sahteliğini görüp krize girer.',
    p3: 'Sınıf farkı, şöhretin boşluğu ve bireyin yabancılaşmasını anlatan ilham verici bir başyapıt.',
    quotes: ['Ben aynı Martin Eden’im; açlıktan ölürken yüzüme bakmayanlar şimdi etrafımda pervane.']
  },
  {
    title: 'Kuyrukluyıldız Altında Bir İzdivaç',
    author: 'Hüseyin Rahmi Gürpınar',
    publisher: 'İş Bankası',
    genre: 'Türk Edebiyatı',
    pages: 240,
    year: 1912,
    lead: 'Halley Kuyrukluyıldızı’nın dünyaya çarpacağı korkusuyla çalkalanan İstanbul’da mektupla başlayan aşk.',
    p1: 'Kuyrukluyıldızın çarpacağı dedikodusu tüm İstanbul konaklarını birbirine katar.',
    p2: 'Akılcı İrfan Galip kıyamet korkusunu alaya alırken tanımadığı gizemli bir kadının felsefi mektuplarına vurulur.',
    p3: 'Halk hurafeleriyle dalga geçen, akılcı bir kadın figürünün öne çıktığı eğlenceli bir komedi.',
    quotes: ['Kuyrukluyıldız gökyüzünde parlarken yeryüzündeki aşklar daha da alevlenir.']
  },
  {
    title: 'Serenad',
    author: 'Zülfü Livaneli',
    publisher: 'Doğan Kitap',
    genre: 'Türk Edebiyatı',
    pages: 484,
    year: 2011,
    lead: '87 yaşındaki Alman profesörün batan Struma gemisinde kaybettiği eşine çaldığı hüzünlü serenad.',
    p1: 'Maya Duran, İstanbul’a gelen yaşlı Profesör Maximilian Wagner’i ağırlamakla görevlendirilir.',
    p2: 'Şile sahilinde kemanla çalınan melodi, 1942 Struma faciasının ve tarihin acı sayfalarını açar.',
    p3: 'Tarihi gerçekler ve ölümün bile ayıramadığı bir aşkı anlatan soluksuz bir vicdan romanı.',
    quotes: ['Her insanın içinde uyuyan bir canavar ve bir melek vardır; hangisini beslersen o büyür.']
  },
  {
    title: 'Hakkari\'de Bir Mevsim',
    author: 'Ferit Edgü',
    publisher: 'Sel Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 180,
    year: 1977,
    lead: 'Hakkari’nin Pirkanis dağ köyünde sürgün bir öğretmenin hiç bilmediği karlı bir dille kurduğu bağ.',
    p1: 'Hakkari’nin yüksek bir köyüne öğretmen olarak gönderilen \'O\', kışın yolları kapanan bir masal dünyasına düşer.',
    p2: 'Çocukların hastalıktan öldüğü bu köyde öğretmen, köylülerin dili ve çaresizliğiyle ortak bir yaşam kurar.',
    p3: 'Şiirsel diliyle Türk edebiyatında yabancılaşmanın ve Doğu gerçeğinin en özgün başyapıtı.',
    quotes: ['Bir gün buradan gideceksin dediler. Nereye? Hiçbir yere.']
  },
  {
    title: 'Dokuzuncu Hariciye Koğuşu',
    author: 'Peyami Safa',
    publisher: 'Alkım Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 144,
    year: 1930,
    lead: 'Kemik veremi hastası bir gencin hastane koridorlarında Nüzhet’e duyduğu platonik aşk.',
    p1: 'Peyami Safa’nın kendi çocukluğundan esinlendiği otobiyografik eserde bacağından hasta genç anlatılır.',
    p2: 'Erenköy köşkünde Nüzhet’e duyduğu saf sevgi ile hastanenin eter kokuları arasında bocalayan gencin ruhu işlenir.',
    p3: 'Hasta psikolojisini bu denli gerçek ve dokunaklı anlatan edebiyatımızın tek klasiğidir.',
    quotes: ['Biz uykudayken yaramız iyileşmez, sadece acısı uyuşur.']
  },
  {
    title: 'Genç Werther\'in Acıları',
    author: 'Goethe',
    publisher: 'Olimpia Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 160,
    year: 1774,
    lead: 'Nişanlı bir kadına duyduğu fırtınalı aşkla kendini tüketen genç ressam Werther’in mektupları.',
    p1: 'Duyarlı Werther, Albert ile nişanlı olan Lotte’ye aşık olur; doğa sevgisi ve sanat heyecanıyla doludur.',
    p2: 'Lotte’nin evlenmesiyle aşkının imkansızlığını gören Werther’in içindeki romantik melankoli büyür.',
    p3: 'Romantizm akımını başlatan ve edebiyat tarihine Wertherizm kavramını kazandıran mektup-roman.',
    quotes: ['Bir insan bir başkasını böylesine severken nasıl olur da bir başkası onu sevebilir?']
  },
  {
    title: 'Küçük Kadınlar',
    author: 'Louisa May Alcott',
    publisher: 'Yuva Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 280,
    year: 1868,
    lead: 'Amerikan İç Savaşı yıllarında dört kız kardeşin yoksulluğa karşı sevgiyle kenetlendiği büyüme hikayesi.',
    p1: 'Babaları cephedeyken dört kız kardeş (Meg, Jo, Beth, Amy) hayalleriyle hayatla mücadele ederler.',
    p2: 'Yazar olma hayali kuran asi Jo ile kardeşlerinin dayanışması her zorlukta kalpleri ısıtır.',
    p3: 'Aile sevgisi, fedakarlık ve kadınların kendi ayakları üzerinde durabilme azmini anlatan ölümsüz bir klasik.',
    quotes: ['Fırtınalardan korkmuyorum; çünkü gemimi nasıl yüzdüreceğimi öğreniyorum.']
  },
  {
    title: 'Deniz Feneri',
    author: 'Virginia Woolf',
    publisher: 'Kırmızı Kedi Yayınevi',
    genre: 'Dünya Klasikleri',
    pages: 240,
    year: 1927,
    lead: 'Skye Adası’nda Ramsay ailesinin deniz fenerine yapmayı planladığı gezi ve zamanın geçişi.',
    p1: 'Yazlık evde toplanan aile fertleri ve konuklar arasındaki görünmez duygusal bağlar anlatılır.',
    p2: 'Araya giren savaş ve kayıplar sonrasında yıllar sonra fenere yapılan gecikmiş yolculuk işlenir.',
    p3: 'Bilinçakışı tekniğinin doruk noktası; zaman ve hatıraların kırılganlığı üzerine eşsiz bir metin.',
    quotes: ['Geçmişte kalan hiçbir şey gerçekten yok olmaz; sadece ışığın açısı değişir.']
  },
  {
    title: 'Bir Delinin Hatıra Defteri',
    author: 'Nikolay Gogol',
    publisher: 'Olimpia Yayınevi',
    genre: 'Dünya Klasikleri',
    pages: 96,
    year: 1835,
    lead: 'Bürokraside ezilen küçük memur Poprişçin’in akıl sağlığını yitirip kendini İspanya Kralı sanması.',
    p1: 'Müdürünün kızına aşık olan küçük memur Poprişçin, sefalet içinde günlüğüne dairedeki haksızlıkları yazar.',
    p2: 'Köpeklerin mektuplaştığını sanmasıyla başlayan hezeyanları İspanya tahtına geçtiği sanrısıyla noktalanır.',
    p3: 'Hem güldüren hem boğazı düğümleyen Rus edebiyatının en vurucu delilik ve yabancılaşma klasiği.',
    quotes: ['Anneciğim, kurtar zavallı oğlunu! Bu dünyada ona yer yok!']
  },
  {
    title: 'Meczup',
    author: 'Halil Cibran',
    publisher: 'Zeplin',
    genre: 'Psikoloji & Felsefe',
    pages: 80,
    year: 1918,
    lead: 'Toplumun maskelerini çıkarıp atan ve hakikatin çıplaklığıyla yüzleşen ruhun felsefi aforizmaları.',
    p1: 'Yüzündeki yedi maskeyi kaybeden bir meczubun özgürleşme manifestosu anlatılır.',
    p2: 'Toplumun sahte erdemlerini ve dar kalıplarını alegorilerle sorgulayan derin metinler sunulur.',
    p3: 'Doğu bilgeliğiyle Batı felsefesini birleştiren şiirsel bir bilgelik klasiği.',
    quotes: ['Maskelerimi kaybettiğim gün ilk kez gökyüzünün sonsuzluğunu gördüm.']
  },
  {
    title: 'Ermiş',
    author: 'Halil Cibran',
    publisher: 'İş Bankası Yayınları',
    genre: 'Psikoloji & Felsefe',
    pages: 96,
    year: 1923,
    lead: 'Bilge El-Mustafa’nın şehirden ayrılmadan önce halka sevgi, evlilik ve neşe üzerine ölümsüz öğütleri.',
    p1: 'On iki yıl beklediği gemisi ufukta beliren bilge, halkın veda sorularını yanıtlamak üzere toplanır.',
    p2: 'Aşktan evliliğe, çalışmaktan ölüme kadar insan hayatının temel dönemeçleri şiirsel bir hikmet diliyle aydınlatılır.',
    p3: 'Evrensel bir sevgi manifestosu; çiftlerin birlikte okuyabileceği en yüce başucu kitabıdır.',
    quotes: ['Birlikte durun ama birbirinize fazla yaklaşmayın; çünkü tapınağın sütunları da ayrı durur.']
  },
  {
    title: 'Dönüşüm',
    author: 'Franz Kafka',
    publisher: 'İthaki Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 144,
    year: 1915,
    lead: 'Bir sabah dev bir böceğe dönüşmüş olarak uyanan Gregor Samsa ve ailesinin riyakarlığı.',
    p1: 'Ailesini geçindiren kumaş pazarlamacısı Gregor Samsa, bir sabah yatağında dev bir böceğe dönüşür.',
    p2: 'Para kazanamadığı için ailesi onu bir yük sayarak odasında ölüme terk eder.',
    p3: 'Üretmeyen insanın modern toplumda nasıl dışlandığını ve koşulsuz sevginin sahteliğini anlatan kült eser.',
    quotes: ['Gregor Samsa bir sabah bunaltıcı düşlerden uyandığında kendini yatağında dev bir böceğe dönüşmüş olarak buldu.']
  },
  {
    title: 'Otomatik Portakal',
    author: 'Anthony Burgess',
    publisher: 'İş Bankası Yayınları',
    genre: 'Bilim Kurgu & Fantastik',
    pages: 176,
    year: 1962,
    lead: 'Geceleri şiddet saçıp Beethoven dinleyen Alex’in devlet eliyle iyiliğe şartlandırılması.',
    p1: 'Geleceğin distopik şehrinde çetesiyle terör estiren Alex, Ludovico Tekniği deneyine tabi tutulur.',
    p2: 'Artık kötülük yapamaz hale gelir; ancak iyiliği de kendi seçemez ve bir kurmalı oyuncağa dönüşür.',
    p3: 'İnsanı insan yapan şeyin seçim yapabilme özgürlüğü olduğunu savunan sarsıcı bir ahlak felsefesi.',
    quotes: ['İnsanı iyi olmaya zorlarsanız onu insan olmaktan çıkarır, otomatik bir portakala çevirirsiniz.']
  },
  {
    title: 'Arayışlar',
    author: 'Lou Andreas-Salome',
    publisher: 'İş Bankası Yayınları',
    genre: 'Psikoloji & Felsefe',
    pages: 160,
    year: 1898,
    lead: 'Entelektüel yazar Lou Andreas-Salome’nin bağımsız kadın ruhu ve entelektüel arayışı.',
    p1: 'Çağının ötesinde özgür bir kadın olan yazar, genç bir kadının entelektüel olgunlaşmasını anlatır.',
    p2: 'Geleneksel evlilik yerine zihinsel bağımsızlığını inşa etmeye çalışan bir kadının iç sesidir.',
    p3: 'Psikanaliz ve felsefenin kesişiminde kadının bireyleşmesini anlatan zarif bir otobiyografik metin.',
    quotes: ['Ben kendi hayatımı yaşamak istiyorum; başkalarının bana biçtiği rolü değil.']
  },
  {
    title: 'Anne Frank\'ın Hatıra Defteri',
    author: 'Anne Frank',
    publisher: 'İş Bankası Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 320,
    year: 1947,
    lead: 'Nazi işgali altındaki Amsterdam’da gizli çatı katında iki yıl saklanan 13 yaşındaki Anne’in günlüğü.',
    p1: '1942\'de Yahudi Frank ailesi ofis binasının arkasındaki gizli bölmede saklanmaya başlar.',
    p2: 'Dışarıda Gestapo kol gezerken Anne günlüğüne büyüme sancılarını, ilk aşkı ve umutlarını yazar.',
    p3: 'En karanlık koşullarda bile insanın içindeki iyiliğe inanan bir çocuğun tüm dünyayı ağlatan tanıklığı.',
    quotes: ['Her şeye rağmen insanların kalplerinde gerçekten iyi olduklarına inanıyorum.']
  },
  {
    title: 'Gurur ve Önyargı',
    author: 'Jane Austen',
    publisher: 'Bordo Siyah Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 424,
    year: 1813,
    lead: 'Zeki Elizabeth Bennet ile kibirli Bay Darcy arasındaki edebi tarihin en güzel aşk çekişmesi.',
    p1: 'Kırsal kasabaya zengin Bingley ve asil dostu Darcy gelir; Darcy’nin ilk balodaki kibri Elizabeth’i kızdırır.',
    p2: 'Dedikodular ve ön yargılarla büyüyen çekişme iki tarafın da hatalarıyla yüzleşmesiyle aşka evrilir.',
    p3: 'Dünya edebiyatının en neşeli, en zeki romantik klasiği; çiftlerin tekrar tekrar okuyacağı bir şaheser.',
    quotes: ['Kibri beni bu kadar incitmeseydi, onun gururunu kolayca affedebilirdim.']
  },
  {
    title: 'Adem\'den Önce',
    author: 'Jack London',
    publisher: 'Atlantis Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 160,
    year: 1907,
    lead: 'Modern bir çocuğun rüyalarında milyonlarca yıl önceki insansı ata Kocadiş olarak yaşadığı çağlar.',
    p1: 'Modern bir genç rüyalarında tarih öncesi ormanlarda ağaç adamları arasında yaşayan atasını görür.',
    p2: 'Ateşin keşfi ve yırtıcı hayvanlarla mücadele rüyaların gözünden aktarılır.',
    p3: 'Evrim teorisi ve genetik hafıza üzerine kurgulanmış çok özgün bir macera romanı.',
    quotes: ['Rüyalarımız, atalarımızın milyonlarca yıl önce hissettiği korkuların yankısıdır.']
  },
  {
    title: 'Adem ile Havva\'nın Güncesi',
    author: 'Mark Twain',
    publisher: 'YKY Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 96,
    year: 1906,
    lead: 'Cennet Bahçesi’nde ilk erkeğin şaşkınlığı ile ilk kadının merakı arasındaki tatlı sevgi çekişmesi.',
    p1: 'Mark Twain, Adem ile Havva’nın Cennet Bahçesi’ndeki ilk günlerini mizahi günlüklerle anlatır.',
    p2: 'Adem yalnızlığına düşkünken, Havva her şeyi isimlendirmek ve sevmek isteyen meraklı bir güçtür.',
    p3: 'Erkek ve kadın psikolojisini derin bir şefkat ve mizahla anlatan sıcacık bir aşk manifestosu.',
    quotes: ['O nerede idiyse, cennet orasıydı.']
  },
  {
    title: 'Mavi Saçlı Kız',
    author: 'Burçak Çerezcioğlu',
    publisher: 'Yapı Kredi Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 208,
    year: 1995,
    lead: 'Lösemiyle savaşırken saçlarını maviye boyatan 16 yaşındaki Burçak’ın gerçek yaşama sevinci günlüğü.',
    p1: 'Lösemi teşhisi konulan genç Burçak, pes etmek yerine hayata olan sevgisini günlüğüne yazar.',
    p2: 'Hastaneler ve kemoterapiler arasında saçlarını maviye boyayarak umudunu dimdik korur.',
    p3: 'Genç bir kızın cesaretini belgeleyen, insanın yaşam sevgisini tazeleyen dokunaklı bir tanıklık.',
    quotes: ['Ben mavi saçlı bir kızım; acılara inat gökyüzü gibi maviyim.']
  },
  {
    title: 'Sırça Köşk',
    author: 'Sabahattin Ali',
    publisher: 'Yapı Kredi Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 144,
    year: 1947,
    lead: 'Halkın sırtından saray yapıp altında kalan asalak yöneticilerin alegorik masalları.',
    p1: 'Sabahattin Ali’nin siyasi taşlamalarını halk masalı formunda yazdığı öyküleri içerir.',
    p2: 'Tembel üç kafadarın sırça köşk kurması ve halkın uyanışıyla köşkün yıkılışı anlatılır.',
    p3: 'Haksızlığa karşı halkın gücünü hatırlatan keskin ve cesur bir edebi manifesto.',
    quotes: ['Sırça köşkün yıkılması için bir avuç cesur insanın başkaldırması yeterlidir.']
  },
  {
    title: 'Canım Aliye, Ruhum Filiz',
    author: 'Sabahattin Ali',
    publisher: 'Yapı Kredi Yayınları',
    genre: 'Türk Edebiyatı',
    pages: 200,
    year: 2013,
    lead: 'Büyük yazarın eşi Aliye ve kızı Filiz’e cezaevlerinden yazdığı sevgi dolu hakiki mektuplar.',
    p1: 'Sabahattin Ali’nin koca ve baba olarak en şefkatli yönünü yansıtan aile mektuplarıdır.',
    p2: 'Yoksulluk ve takibat altındayken bile ailesine duyduğu sonsuz sevgi satırlara dökülür.',
    p3: 'Bir erkeğin eşine ve evladına duyabileceği en asil sevgiyi belgeleyen sevgi anıtı.',
    quotes: ['Canım Aliye, ruhum Filiz... Siz benim bu dünyada tutunduğum yegane dallarımsınız.']
  }
];

// 2. OKUNMAMIŞ DİĞER KİTAPLAR (Tümü status: 'okunmadi', isFavorite: false)
const UNREAD_BOOKS = [
  {
    title: 'Anna Karenina I-II-III',
    author: 'Lev Tolstoy',
    publisher: 'İletişim Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 1064,
    year: 1877,
    lead: 'Mutlu aileler birbirine benzer; her mutsuz ailenin ise kendine özgü bir mutsuzluğu vardır.',
    p1: 'Rus sosyetesinde Vronski ile karşılaşan Anna’nın toplum ahlakıyla çatışan aşkı.',
    p2: 'Kırsalda sade bir sevgi arayan Levin ile yüksek sosyetenin riyakarlığı karşılaştırılır.',
    p3: 'Tolstoy’un evlilik, vicdan ve insan doğasını en kusursuz işlediği dünya başyapıtı.',
    quotes: ['Bütün mutlu aileler birbirine benzer; her mutsuz ailenin ise kendine özgü bir mutsuzluğu vardır.']
  },
  {
    title: 'Diriliş',
    author: 'Lev Tolstoy',
    publisher: 'Can Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 580,
    year: 1899,
    lead: 'Mahkemede sanık sandalyesinde gördüğü eski aşkı için servetini terk eden Prens Nehlüdov.',
    p1: 'Nehlüdov gençliğinde aldattığı Katyuşa\'nın davasında vicdanıyla yüzleşir.',
    p2: 'Katyuşa\'nın peşinden Sibirya yollarına düşerek ruhsal arınmayı seçer.',
    p3: 'Hukuk sisteminin kokuşmuşluğu ve insanın kendi günahlarıyla yüzleşmesi.',
    quotes: ['İnsanların birbirlerine verebilecekleri en büyük yardım kötülük yapmaktan vazgeçmeleridir.']
  },
  {
    title: 'Germinal I-II',
    author: 'Émile Zola',
    publisher: 'Can Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 560,
    year: 1885,
    lead: 'Kömür madenlerinde yükselen açlık, öfke ve büyük işçi grevi.',
    p1: 'Montsou madeninde insanlık dışı sefaleti gören Étienne madencileri örgütler.',
    p2: 'Kış soğuğunda açlık ve öfkeyle tarihin en büyük madenci grevi patlak verir.',
    p3: 'Ezilenlerin er ya da geç toprağı yarıp çıkacak hak mücadelesini anlatan şaheser.',
    quotes: ['Karanlığın bağrında tohumlar büyüyordu; bir gün toprağı yarıp güneşe fırlayacaklardı.']
  },
  {
    title: 'Büyük Umutlar',
    author: 'Charles Dickens',
    publisher: 'Can Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 600,
    year: 1861,
    lead: 'Yetim Pip’in gizemli velinimet sayesinde beyefendiye dönüşmesi ve Estella aşkı.',
    p1: 'Köy demircisinin yanında büyüyen Pip gizemli bir mirasa konarak Londra\'ya gider.',
    p2: 'Kibirli Estella\'ya aşık olan Pip asıl asaletin nerede olduğunu zor yoldan öğrenir.',
    p3: 'Kibir, gerçek dostluk ve vefa üzerine İngiliz edebiyatının zirvesi.',
    quotes: ['Beni paramparça ettin ama yine de seni sevmeye devam ettim Estella.']
  },
  {
    title: 'Vadideki Zambak',
    author: 'Honoré de Balzac',
    publisher: 'Can Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 352,
    year: 1835,
    lead: 'Indre vadisinde mutsuz evliliğine sadık kalan Henriette ile genç Félix’in platonik bağı.',
    p1: 'Félix, huysuz kocasının yanında acı çeken Kontes Henriette\'e vadide vurulur.',
    p2: 'Henriette evliliğine sadık kalırken Félix\'e melek gibi rehberlik eder.',
    p3: 'Platonik aşkın saflığı üzerine edebiyatın en şiirsel vadi tablosu.',
    quotes: ['Gerçek aşk, sevdiğinin mutluluğunu kendi varlığının önüne koyabilmektir.']
  },
  {
    title: 'Dava',
    author: 'Franz Kafka',
    publisher: 'Can Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 232,
    year: 1925,
    lead: 'Bir sabah suçunu bilmeden tutuklanan Josef K.’nın görünmez mahkeme karşısındaki çaresizliği.',
    p1: 'Josef K. 30. yaş gününde odasına giren memurlarca sebepsizce tutuklanır.',
    p2: 'Çatı katı koridorlarında ne suçunu öğrenebilir ne de yargıcı görebilir.',
    p3: 'Modern bürokrasinin ve yabancılaşmanın en büyük kült klasiği.',
    quotes: ['Birisi Josef K.’ya iftira atmış olmalıydı.']
  },
  {
    title: 'Monte Kristo Kontu',
    author: 'Alexandre Dumas',
    publisher: 'İletişim Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 1400,
    year: 1844,
    lead: 'İftirayla zindana atılan Edmond Dantès’nin İf Şatosu’ndan kaçarak hazırladığı intikam planı.',
    p1: 'Düğün gününde zindana atılan Dantès, 14 yıl sonra hazineyi bularak Kont olur.',
    p2: 'Düşmanlarını tek tek kendi zaaflarıyla yıkarak ilahi adaleti sağlar.',
    p3: 'İntikam ve sabır üzerine dünya tarihinin en sürükleyici serüveni.',
    quotes: ['Beklemek ve ümit etmek!']
  },
  {
    title: 'Madam Bovary',
    author: 'Gustave Flaubert',
    publisher: 'İletişim Yayınları',
    genre: 'Dünya Klasikleri',
    pages: 400,
    year: 1856,
    lead: 'Romantik romanların sahte hayalleriyle büyüyen Emma Bovary’nin taşra evliliğinden kaçışı.',
    p1: 'Kasaba doktoru ile evlenen Emma aradığı büyük tutkuyu bulamaz.',
    p2: 'Lüks alışverişlere ve yasak aşklara sığınarak borç batağına sürüklenir.',
    p3: 'Bovarizm kavramını doğuran dünya edebiyatının üslup şaheseri.',
    quotes: ['Kelimeler, yıldızları ısıtmak isterken teneke çalan bir ayının sopasına benzer.']
  }
];

// Renk paleti üretici
const COVER_STYLES = [
  { bg: 'linear-gradient(135deg, #1E293B, #0F172A)', accent: '#38BDF8' },
  { bg: 'linear-gradient(135deg, #3B1E1E, #241111)', accent: '#F59E0B' },
  { bg: 'linear-gradient(135deg, #143E2C, #0D281C)', accent: '#34D399' },
  { bg: 'linear-gradient(135deg, #2E1065, #1E0638)', accent: '#C084FC' },
  { bg: 'linear-gradient(135deg, #4A3B18, #2E250F)', accent: '#FBBF24' },
  { bg: 'linear-gradient(135deg, #18181B, #09090B)', accent: '#E4E4E7' },
  { bg: 'linear-gradient(135deg, #881337, #4C0519)', accent: '#FDA4AF' }
];

// Tüm kitapları nesne haline getirme
function buildInitialBooks() {
  const books = [];
  
  // 1. Eşimin Okuduğu Kitaplar (80 adet - isFavorite: true, status: 'esim_okudu')
  SPOUSE_BOOKS.forEach((b, i) => {
    const style = COVER_STYLES[i % COVER_STYLES.length];
    books.push({
      id: 'spouse-' + (i + 1),
      title: b.title,
      author: b.author,
      publisher: b.publisher,
      genre: b.genre,
      pages: b.pages,
      year: b.year,
      status: 'esim_okudu',
      isFavorite: true,
      coverStyle: style,
      lead: b.lead,
      p1: b.p1,
      p2: b.p2,
      p3: b.p3,
      quotes: b.quotes,
      spouseNote: 'Eşimin kütüphanemizde en sevdiği ve favorilere eklediğimiz özel başyapıt.',
      myNote: '',
      myRating: 5,
      spouseRating: 5
    });
  });

  // 2. Okunmamış Klasikler (status: 'okunmadi', isFavorite: false)
  UNREAD_BOOKS.forEach((b, i) => {
    const style = COVER_STYLES[(i + 3) % COVER_STYLES.length];
    books.push({
      id: 'unread-' + (i + 1),
      title: b.title,
      author: b.author,
      publisher: b.publisher,
      genre: b.genre,
      pages: b.pages,
      year: b.year,
      status: 'okunmadi',
      isFavorite: false,
      coverStyle: style,
      lead: b.lead,
      p1: b.p1,
      p2: b.p2,
      p3: b.p3,
      quotes: b.quotes,
      spouseNote: '',
      myNote: 'Okunacaklar sıramızda bekliyor.',
      myRating: 4,
      spouseRating: 4
    });
  });

  return books;
}

// Global Uygulama Durumu
const state = {
  books: [],
  selectedStatus: 'all',
  selectedPublishers: [],
  selectedGenres: [],
  selectedAuthors: [],
  onlyFavorites: false,
  searchQuery: '',
  sortBy: 'default',
  activeBook: null,
  activeModalTab: 'summary',
  isAddModalOpen: false,
  isRandomModalOpen: false,
  deferredPrompt: null
};

// LocalStorage Yükleme / Kaydetme
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      state.books = JSON.parse(saved);
      return;
    }
  } catch (e) {
    console.error(e);
  }
  state.books = buildInitialBooks();
  saveState();
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.books));
  } catch (e) {
    console.error(e);
  }
}

// Filtreleme Fonksiyonu
function getFilteredBooks() {
  return state.books.filter((b) => {
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase().trim();
      const match = b.title.toLowerCase().includes(q) ||
                    b.author.toLowerCase().includes(q) ||
                    b.publisher.toLowerCase().includes(q) ||
                    b.genre.toLowerCase().includes(q) ||
                    b.lead.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (state.selectedStatus !== 'all' && b.status !== state.selectedStatus) return false;
    if (state.onlyFavorites && !b.isFavorite) return false;
    if (state.selectedPublishers.length > 0 && !state.selectedPublishers.includes(b.publisher)) return false;
    if (state.selectedGenres.length > 0 && !state.selectedGenres.includes(b.genre)) return false;
    if (state.selectedAuthors.length > 0 && !state.selectedAuthors.includes(b.author)) return false;
    return true;
  }).sort((a, b) => {
    if (state.sortBy === 'title-asc') return a.title.localeCompare(b.title, 'tr');
    if (state.sortBy === 'title-desc') return b.title.localeCompare(a.title, 'tr');
    if (state.sortBy === 'pages-asc') return a.pages - b.pages;
    if (state.sortBy === 'pages-desc') return b.pages - a.pages;
    return 0;
  });
}

// Sayaçlar
function getCounts() {
  const c = { all: state.books.length, esim_okudu: 0, okunmadi: 0, ben_okudum: 0, ikimiz_de_okuduk: 0 };
  state.books.forEach((b) => {
    if (c[b.status] !== undefined) c[b.status]++;
  });
  return c;
}

// Ana Render Motoru
function render() {
  const app = document.getElementById('app');
  const filtered = getFilteredBooks();
  const counts = getCounts();

  // Yayınevleri, Türler ve Yazarlar listeleri
  const pubMap = new Map();
  const genMap = new Map();
  const authMap = new Map();
  state.books.forEach(b => {
    pubMap.set(b.publisher, (pubMap.get(b.publisher) || 0) + 1);
    genMap.set(b.genre, (genMap.get(b.genre) || 0) + 1);
    authMap.set(b.author, (authMap.get(b.author) || 0) + 1);
  });
  const publishers = Array.from(pubMap.entries()).sort((a, b) => b[1] - a[1]);
  const genres = Array.from(genMap.entries()).sort((a, b) => b[1] - a[1]);
  const authors = Array.from(authMap.entries()).sort((a, b) => b[1] - a[1]);

  app.innerHTML = `
    <!-- Header -->
    <header class="site-header">
      <div class="header-inner">
        <a href="#" class="brand" onclick="setQuickFilter('all'); return false;">
          <div class="brand-icon">📚</div>
          <span class="brand-title">Bizim Kitaplık</span>
        </a>

        <nav class="nav-links">
          <button class="nav-btn special-spouse ${state.selectedStatus === 'esim_okudu' ? 'active' : ''}" onclick="setQuickFilter('esim_okudu')">
            🌸 Eşimin Okuduğu Kitaplar (${counts.esim_okudu})
          </button>
          <button class="nav-btn ${state.selectedStatus === 'all' && !state.onlyFavorites ? 'active' : ''}" onclick="setQuickFilter('all')">
            Tüm Kitaplar
          </button>
          <button class="nav-btn ${state.selectedStatus === 'okunmadi' ? 'active' : ''}" onclick="setQuickFilter('okunmadi')">
            Okunmamış (${counts.okunmadi})
          </button>
          <button class="nav-btn ${state.onlyFavorites ? 'active' : ''}" onclick="toggleFavorites()">
            ❤️ Favoriler
          </button>
          <button class="nav-btn" onclick="openRandomModal()">
            🎲 Ne Okusak?
          </button>
        </nav>

        <button class="btn-primary" onclick="openAddModal()">
          <span>+</span>
          <span>Yeni Kitap</span>
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-container">
      <!-- PWA Yükleme Banner'ı (Samsung / Android) -->
      <div id="pwa-install-banner" class="pwa-banner" style="display: none;">
        <div>
          <strong>📱 Bizim Kitaplık Uygulamasını Yükleyin</strong>
          <p style="font-size: 11px; opacity: 0.85;">Samsung veya Android cihazınızın ana ekranına ekleyerek tek tıkla açın.</p>
        </div>
        <button class="pwa-btn" onclick="installPWA()">Yükle</button>
      </div>

      <!-- Hero Header -->
      <section class="hero-banner">
        <div>
          <h1 class="hero-title">Ben ve Eşimin Kişisel Kitaplığı</h1>
          <p class="hero-desc">Eşimin okuduğu tüm favori eserler, sürprizbozansız 3 paragraflık detaylı özetler ve kütüphanemizdeki dünya klasikleri.</p>
        </div>
        <button class="nav-btn special-spouse" style="padding: 10px 16px;" onclick="setQuickFilter('esim_okudu')">
          🌸 Eşimin Okuduğu Kitapları Aç (${counts.esim_okudu})
        </button>
      </section>

      <!-- Layout Split -->
      <div class="layout-split">
        <!-- Sidebar -->
        <aside class="sidebar">
          <!-- 1. EŞİMİN OKUDUĞU KİTAPLAR (ÖZEL KART) -->
          <div class="sidebar-card spouse-banner-card ${state.selectedStatus === 'esim_okudu' ? 'active' : ''}" onclick="setQuickFilter('esim_okudu')">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 20px;">🌸</span>
                <div>
                  <strong style="color: #881337; font-size: 14px;">Eşimin Okuduğu Kitaplar</strong>
                  <div style="font-size: 11px; color: #9F1239;">Kütüphanemizin Favorileri</div>
                </div>
              </div>
              <span style="background: #E11D48; color: #FFF; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 99px;">${counts.esim_okudu}</span>
            </div>
          </div>

          <!-- 2. İstatistikler -->
          <div class="sidebar-card">
            <div class="sidebar-header">
              <span class="sidebar-title">📊 Bizim İstatistiğimiz</span>
              <span style="font-size: 11px; font-weight: 600;">${counts.all} Kitap</span>
            </div>
            <div class="stats-grid">
              <div class="stat-pill rose" onclick="setQuickFilter('esim_okudu')">
                <span>Eşim Okudu</span>
                <strong>${counts.esim_okudu}</strong>
              </div>
              <div class="stat-pill amber" onclick="setQuickFilter('okunmadi')">
                <span>Okunmadı</span>
                <strong>${counts.okunmadi}</strong>
              </div>
              <div class="stat-pill blue" onclick="setQuickFilter('ben_okudum')">
                <span>Ben Okudum</span>
                <strong>${counts.ben_okudum}</strong>
              </div>
              <div class="stat-pill green" onclick="setQuickFilter('ikimiz_de_okuduk')">
                <span>Ortak Okunan</span>
                <strong>${counts.ikimiz_de_okuduk}</strong>
              </div>
            </div>
          </div>

          <!-- 3. Okuma Durumu -->
          <div class="sidebar-card">
            <div class="sidebar-header">
              <span class="sidebar-title">📖 Okuma Durumu</span>
            </div>
            <button class="filter-btn ${state.selectedStatus === 'all' ? 'active' : ''}" onclick="setQuickFilter('all')">
              <span>Tüm Kitaplar</span>
              <span>${counts.all}</span>
            </button>
            <button class="filter-btn ${state.selectedStatus === 'esim_okudu' ? 'active' : ''}" onclick="setQuickFilter('esim_okudu')">
              <span>🌸 Eşim Okudu</span>
              <span>${counts.esim_okudu}</span>
            </button>
            <button class="filter-btn ${state.selectedStatus === 'okunmadi' ? 'active' : ''}" onclick="setQuickFilter('okunmadi')">
              <span>⏳ Okunmadı (Sırada)</span>
              <span>${counts.okunmadi}</span>
            </button>
            <button class="filter-btn ${state.selectedStatus === 'ben_okudum' ? 'active' : ''}" onclick="setQuickFilter('ben_okudum')">
              <span>☕ Ben Okudum</span>
              <span>${counts.ben_okudum}</span>
            </button>
            <button class="filter-btn ${state.selectedStatus === 'ikimiz_de_okuduk' ? 'active' : ''}" onclick="setQuickFilter('ikimiz_de_okuduk')">
              <span>✨ İkimiz de Okuduk</span>
              <span>${counts.ikimiz_de_okuduk}</span>
            </button>
          </div>

          <!-- 4. Türler -->
          <div class="sidebar-card">
            <div class="sidebar-header">
              <span class="sidebar-title">🏷️ Türler</span>
            </div>
            <div class="filter-list">
              ${genres.map(([gen, count]) => `
                <div class="filter-label-checkbox ${state.selectedGenres.includes(gen) ? 'active' : ''}" onclick="toggleGenre('${gen}')">
                  <span>${gen}</span>
                  <span style="font-size: 11px; opacity: 0.7;">${count}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 5. Yayınevleri -->
          <div class="sidebar-card">
            <div class="sidebar-header">
              <span class="sidebar-title">🏛️ Yayınevleri</span>
            </div>
            <input type="text" class="search-mini" placeholder="Yayınevi ara (YKY, Can...)" oninput="filterPublishers(this.value)" />
            <div class="filter-list" id="pub-list">
              ${publishers.map(([pub, count]) => `
                <div class="filter-label-checkbox ${state.selectedPublishers.includes(pub) ? 'active' : ''}" onclick="togglePublisher('${pub}')">
                  <span>${pub}</span>
                  <span style="font-size: 11px; opacity: 0.7;">${count}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </aside>

        <!-- Right Content Area -->
        <section class="content-area">
          <!-- Eşimin Okuduğu Kitaplar Banner -->
          ${state.selectedStatus === 'esim_okudu' ? `
            <div class="spouse-callout">
              <div>
                <strong style="color: #881337; font-size: 17px; font-family: var(--font-serif);">🌸 Eşimin Okuduğu Kitaplar Bölümü</strong>
                <p style="font-size: 12px; color: #9F1239; margin-top: 2px;">Eşimin okuduğu ve tamamı favorilere eklenmiş 80 özel eser. Her kitabın sürprizbozansız 3 paragraflık edebi özeti mevcuttur.</p>
              </div>
              <span style="background: #FFF; border: 1px solid #FDA4AF; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 600; color: #9F1239;">❤️ %100 Favoriler</span>
            </div>
          ` : ''}

          <!-- Toolbar -->
          <div class="toolbar">
            <div class="search-box">
              <span class="search-icon">🔍</span>
              <input type="text" class="search-input" placeholder="Kitap, yazar, konu ara..." value="${state.searchQuery}" oninput="setSearch(this.value)" />
            </div>
            <div style="display: flex; gap: 8px;">
              <select class="sort-select" onchange="setSort(this.value)">
                <option value="default" ${state.sortBy === 'default' ? 'selected' : ''}>Sıralama: Varsayılan</option>
                <option value="title-asc" ${state.sortBy === 'title-asc' ? 'selected' : ''}>Başlık (A - Z)</option>
                <option value="title-desc" ${state.sortBy === 'title-desc' ? 'selected' : ''}>Başlık (Z - A)</option>
                <option value="pages-asc" ${state.sortBy === 'pages-asc' ? 'selected' : ''}>Sayfa (Azdan Çoğa)</option>
                <option value="pages-desc" ${state.sortBy === 'pages-desc' ? 'selected' : ''}>Sayfa (Çoktan Aza)</option>
              </select>
            </div>
          </div>

          <!-- Kitap Sayısı -->
          <div style="font-size: 12px; color: #78716C; padding: 0 4px;">
            Toplam <strong>${filtered.length}</strong> eser listeleniyor.
          </div>

          <!-- Books Grid -->
          <div class="book-grid">
            ${filtered.map(b => `
              <div class="book-card" onclick="openBookModal('${b.id}')">
                <div class="card-header">
                  <span class="status-tag ${b.status}">
                    ${b.status === 'esim_okudu' ? '❤️ Eşim Okudu' : b.status === 'okunmadi' ? '⏳ Okunmadı' : b.status === 'ben_okudum' ? '✓ Ben Okudum' : '✨ İkimiz de'}
                  </span>
                  ${b.isFavorite ? '<span style="color: #E11D48; font-size: 14px;">❤️</span>' : ''}
                </div>
                <div class="card-body">
                  <div class="book-jacket" style="background: ${b.coverStyle.bg};">
                    <span class="jacket-publisher">${b.publisher}</span>
                    <span class="jacket-title">${b.title}</span>
                    <span class="jacket-author">${b.author}</span>
                  </div>
                  <div class="card-info">
                    <h3 class="card-title">${b.title}</h3>
                    <p class="card-author">${b.author}</p>
                    <div class="card-meta">
                      <strong>${b.publisher}</strong> · <span>${b.genre}</span> · <span>${b.pages} s.</span>
                    </div>
                    <p class="card-lead">${b.lead}</p>
                  </div>
                </div>
                <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid #EFECE6; display: flex; justify-content: space-between; font-size: 11px; color: #A8A29E;">
                  <span>${b.year} Basım</span>
                  <span style="color: #9F1239; font-weight: 600;">3 Paragraflık Özeti Oku →</span>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    </main>

    <!-- Modal: Detaylı 3 Paragraflık Özet & Durum Butonları -->
    ${state.activeBook ? renderModal(state.activeBook) : ''}

    <!-- Modal: Yeni Kitap Ekle -->
    ${state.isAddModalOpen ? renderAddModal() : ''}

    <!-- Modal: Kura Çek (Ne Okusak?) -->
    ${state.isRandomModalOpen ? renderRandomModal() : ''}
  `;
}

// 1 Sayfalık / 3 Paragraflık Özet Modalı
function renderModal(b) {
  return `
    <div class="modal-overlay" onclick="closeBookModal(event)">
      <div class="modal-window" onclick="event.stopPropagation()">
        <div class="modal-header">
          <div>
            <strong style="font-family: var(--font-serif); font-size: 16px;">${b.publisher}</strong>
            <span style="font-size: 12px; color: #78716C;"> · ${b.genre} · ${b.year}</span>
          </div>
          <button class="btn-close" onclick="closeBookModal()">✕</button>
        </div>

        <div class="modal-body">
          <!-- Üst Bilgi & Kapak -->
          <div class="modal-top">
            <div class="book-jacket" style="width: 110px; height: 160px; background: ${b.coverStyle.bg}; margin: 0 auto;">
              <span class="jacket-publisher">${b.publisher}</span>
              <span class="jacket-title" style="font-size: 13px;">${b.title}</span>
              <span class="jacket-author" style="font-size: 10px;">${b.author}</span>
            </div>
            <div style="flex: 1;">
              <h2 style="font-family: var(--font-serif); font-size: 26px; line-height: 1.2;">${b.title}</h2>
              <p style="font-size: 15px; font-weight: 600; color: #881337; margin-top: 4px;">${b.author}</p>
              <div style="font-size: 12px; color: #78716C; margin-top: 8px;">
                <span>${b.publisher}</span> · <span>${b.genre}</span> · <span>${b.pages} Sayfa</span> · <span>${b.year}</span>
              </div>
              <p style="font-size: 13px; font-style: italic; background: #FFF; border: 1px solid #EAE5DC; padding: 10px; border-radius: 8px; margin-top: 10px; color: #57534E;">
                "${b.lead}"
              </p>
            </div>
          </div>

          <!-- 4 OKUMA DURUMU BUTONU -->
          <div class="status-buttons-bar">
            <div style="display: flex; justify-content: space-between; font-size: 12px;">
              <strong>Okuma Durumunu Seçin:</strong>
              <span style="color: #78716C;">Şu an: <strong>${b.status.replace('_', ' ').toUpperCase()}</strong></span>
            </div>
            <div class="status-buttons-grid">
              <button class="btn-status ${b.status === 'esim_okudu' ? 'active-esim_okudu' : ''}" onclick="updateBookStatus('${b.id}', 'esim_okudu')">
                🌸 Eşim Okudu
              </button>
              <button class="btn-status ${b.status === 'okunmadi' ? 'active-okunmadi' : ''}" onclick="updateBookStatus('${b.id}', 'okunmadi')">
                ⏳ Okunmadı
              </button>
              <button class="btn-status ${b.status === 'ben_okudum' ? 'active-ben_okudum' : ''}" onclick="updateBookStatus('${b.id}', 'ben_okudum')">
                ☕ Ben Okudum
              </button>
              <button class="btn-status ${b.status === 'ikimiz_de_okuduk' ? 'active-ikimiz_de_okuduk' : ''}" onclick="updateBookStatus('${b.id}', 'ikimiz_de_okuduk')">
                ✨ İkimiz de
              </button>
            </div>
          </div>

          <!-- Sekmeler -->
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #E5E7EB; padding-bottom: 8px;">
            <div style="display: flex; gap: 8px;">
              <button class="nav-btn ${state.activeModalTab === 'summary' ? 'active' : ''}" onclick="setModalTab('summary')">3 Paragraflık Özet</button>
              <button class="nav-btn ${state.activeModalTab === 'quotes' ? 'active' : ''}" onclick="setModalTab('quotes')">Alıntılar (${b.quotes ? b.quotes.length : 0})</button>
              <button class="nav-btn ${state.activeModalTab === 'notes' ? 'active' : ''}" onclick="setModalTab('notes')">Bizim Notlarımız</button>
            </div>
            <span style="font-size: 11px; background: #DCFCE7; color: #166534; padding: 2px 8px; border-radius: 6px; font-weight: 600;">✨ Sürprizbozansız</span>
          </div>

          <!-- Sekme 1: 3 Paragraflık Detaylı Özet -->
          ${state.activeModalTab === 'summary' ? `
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div>
                <strong style="font-family: var(--font-serif); font-size: 15px; color: #1C1917;">01. Başlangıç, Mekan ve Atmosfer</strong>
                <p class="summary-paragraph" style="margin-top: 4px;">${b.p1}</p>
              </div>
              <div>
                <strong style="font-family: var(--font-serif); font-size: 15px; color: #1C1917;">02. Çatışmalar ve Tematik Gerilim (Spoiler-Free)</strong>
                <p class="summary-paragraph" style="margin-top: 4px;">${b.p2}</p>
              </div>
              <div>
                <strong style="font-family: var(--font-serif); font-size: 15px; color: #881337;">03. Edebi Değer, Derin Anlam ve Eşimin Yorumu</strong>
                <p class="summary-paragraph" style="margin-top: 4px; background: #FFF9F9; border-color: #FDA4AF;">${b.p3}</p>
              </div>
            </div>
          ` : ''}

          <!-- Sekme 2: Alıntılar -->
          ${state.activeModalTab === 'quotes' ? `
            <div>
              <p style="font-size: 12px; color: #78716C; margin-bottom: 10px;">Alıntıyı kopyalamak için üzerine tıklayabilirsiniz:</p>
              ${(b.quotes || []).map(q => `
                <div class="quote-box" onclick="copyQuote('${q.replace(/'/g, "\\'")}', '${b.title}')">
                  "${q}"
                </div>
              `).join('')}
            </div>
          ` : ''}

          <!-- Sekme 3: Çift Notları -->
          ${state.activeModalTab === 'notes' ? `
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div>
                <label style="font-size: 12px; font-weight: 600; color: #9F1239;">🌸 Eşimin Notu:</label>
                <textarea id="spouse-note-input" class="search-input" style="height: 70px; margin-top: 4px;">${b.spouseNote || ''}</textarea>
              </div>
              <div>
                <label style="font-size: 12px; font-weight: 600; color: #1E40AF;">☕ Benim Notum:</label>
                <textarea id="my-note-input" class="search-input" style="height: 70px; margin-top: 4px;">${b.myNote || ''}</textarea>
              </div>
              <button class="btn-primary" style="align-self: flex-end;" onclick="saveCoupleNotes('${b.id}')">Notları Kaydet</button>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

// Yeni Kitap Ekle Modalı
function renderAddModal() {
  return `
    <div class="modal-overlay" onclick="closeAddModal(event)">
      <div class="modal-window" style="max-width: 580px;" onclick="event.stopPropagation()">
        <div class="modal-header">
          <strong style="font-family: var(--font-serif); font-size: 18px;">Kitaplığa Yeni Eser Ekle</strong>
          <button class="btn-close" onclick="closeAddModal()">✕</button>
        </div>
        <form style="padding: 20px; display: flex; flex-direction: column; gap: 12px;" onsubmit="submitNewBook(event)">
          <div>
            <label style="font-size: 11px; font-weight: 600;">Kitap Adı *</label>
            <input type="text" id="new-title" class="search-input" required />
          </div>
          <div>
            <label style="font-size: 11px; font-weight: 600;">Yazar *</label>
            <input type="text" id="new-author" class="search-input" required />
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div>
              <label style="font-size: 11px; font-weight: 600;">Yayınevi</label>
              <input type="text" id="new-publisher" class="search-input" value="YKY" />
            </div>
            <div>
              <label style="font-size: 11px; font-weight: 600;">Tür</label>
              <input type="text" id="new-genre" class="search-input" value="Türk Edebiyatı" />
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div>
              <label style="font-size: 11px; font-weight: 600;">Sayfa Sayısı</label>
              <input type="number" id="new-pages" class="search-input" value="250" />
            </div>
            <div>
              <label style="font-size: 11px; font-weight: 600;">Basım Yılı</label>
              <input type="number" id="new-year" class="search-input" value="2024" />
            </div>
          </div>
          <div>
            <label style="font-size: 11px; font-weight: 600;">Kısa Giriş / Atmosfer (Paragraf 1)</label>
            <textarea id="new-p1" class="search-input" style="height: 60px;" placeholder="Kitabın açılış mekanı ve atmosferi..."></textarea>
          </div>
          <div>
            <label style="font-size: 11px; font-weight: 600;">Çatışmalar ve Olay Örgüsü (Paragraf 2)</label>
            <textarea id="new-p2" class="search-input" style="height: 60px;" placeholder="Sürprizbozan vermeden ana gerilim..."></textarea>
          </div>
          <div>
            <label style="font-size: 11px; font-weight: 600;">Edebi Değer ve Yorumumuz (Paragraf 3)</label>
            <textarea id="new-p3" class="search-input" style="height: 60px;" placeholder="Kitabın felsefi mesajı..."></textarea>
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 10px;">
            <button type="button" class="nav-btn" onclick="closeAddModal()">Vazgeç</button>
            <button type="submit" class="btn-primary">Kitaplığa Ekle</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

// Ne Okusak? Kura Modalı
function renderRandomModal() {
  const candidates = state.books.filter(b => b.status === 'okunmadi');
  const pool = candidates.length > 0 ? candidates : state.books;
  const picked = pool[Math.floor(Math.random() * pool.length)];

  return `
    <div class="modal-overlay" onclick="closeRandomModal(event)">
      <div class="modal-window" style="max-width: 480px; text-align: center; padding: 24px;" onclick="event.stopPropagation()">
        <span style="font-size: 40px;">🎲</span>
        <h2 style="font-family: var(--font-serif); font-size: 24px; margin-top: 8px;">Bu Akşam Ne Okusak?</h2>
        <p style="font-size: 12px; color: #78716C; margin-bottom: 16px;">Sırada bekleyen eserler arasından sizin için seçtik:</p>
        
        <div style="background: #FFF; border: 1px solid #E7E2D8; padding: 16px; border-radius: 12px;">
          <h3 style="font-family: var(--font-serif); font-size: 20px;">${picked.title}</h3>
          <p style="font-size: 13px; color: #881337; font-weight: 600;">${picked.author}</p>
          <p style="font-size: 11px; color: #78716C; margin-top: 4px;">${picked.publisher} · ${picked.genre} · ${picked.pages} s.</p>
          <p style="font-size: 12px; color: #44403C; font-style: italic; margin-top: 10px; background: #FAF8F5; padding: 8px; border-radius: 6px;">
            "${picked.lead}"
          </p>
        </div>

        <div style="display: flex; justify-content: center; gap: 8px; margin-top: 16px;">
          <button class="nav-btn" onclick="render()">Tekrar Çek 🎲</button>
          <button class="btn-primary" onclick="closeRandomModal(); openBookModal('${picked.id}')">Özeti Aç 📖</button>
        </div>
      </div>
    </div>
  `;
}

// Etkileşim Fonksiyonları
window.setQuickFilter = function(status) {
  state.selectedStatus = status;
  state.onlyFavorites = false;
  render();
};

window.toggleFavorites = function() {
  state.onlyFavorites = !state.onlyFavorites;
  render();
};

window.setSearch = function(val) {
  state.searchQuery = val;
  render();
};

window.setSort = function(val) {
  state.sortBy = val;
  render();
};

window.toggleGenre = function(gen) {
  const i = state.selectedGenres.indexOf(gen);
  if (i > -1) state.selectedGenres.splice(i, 1);
  else state.selectedGenres.push(gen);
  render();
};

window.togglePublisher = function(pub) {
  const i = state.selectedPublishers.indexOf(pub);
  if (i > -1) state.selectedPublishers.splice(i, 1);
  else state.selectedPublishers.push(pub);
  render();
};

window.filterPublishers = function(q) {
  const list = document.getElementById('pub-list');
  if (!list) return;
  const items = list.querySelectorAll('.filter-label-checkbox');
  items.forEach(el => {
    el.style.display = el.innerText.toLowerCase().includes(q.toLowerCase()) ? 'flex' : 'none';
  });
};

window.openBookModal = function(id) {
  state.activeBook = state.books.find(b => b.id === id);
  state.activeModalTab = 'summary';
  render();
};

window.closeBookModal = function(e) {
  if (!e || e.target.classList.contains('modal-overlay') || e.target.classList.contains('btn-close')) {
    state.activeBook = null;
    render();
  }
};

window.setModalTab = function(tab) {
  state.activeModalTab = tab;
  render();
};

window.updateBookStatus = function(bookId, newStatus) {
  const book = state.books.find(b => b.id === bookId);
  if (book) {
    book.status = newStatus;
    saveState();
    render();
  }
};

window.saveCoupleNotes = function(bookId) {
  const book = state.books.find(b => b.id === bookId);
  if (book) {
    const spInput = document.getElementById('spouse-note-input');
    const myInput = document.getElementById('my-note-input');
    if (spInput) book.spouseNote = spInput.value;
    if (myInput) book.myNote = myInput.value;
    saveState();
    alert('Notlarınız başarıyla kaydedildi!');
    render();
  }
};

window.copyQuote = function(quote, title) {
  navigator.clipboard.writeText(`"${quote}" — ${title}`);
  alert('Alıntı panoya kopyalandı!');
};

window.openAddModal = function() {
  state.isAddModalOpen = true;
  render();
};
window.closeAddModal = function(e) {
  if (!e || e.target.classList.contains('modal-overlay') || e.target.classList.contains('btn-close') || e.target.classList.contains('nav-btn')) {
    state.isAddModalOpen = false;
    render();
  }
};

window.submitNewBook = function(e) {
  e.preventDefault();
  const title = document.getElementById('new-title').value;
  const author = document.getElementById('new-author').value;
  const publisher = document.getElementById('new-publisher').value;
  const genre = document.getElementById('new-genre').value;
  const pages = parseInt(document.getElementById('new-pages').value, 10) || 200;
  const year = parseInt(document.getElementById('new-year').value, 10) || 2024;
  const p1 = document.getElementById('new-p1').value || 'Kitabın açılış atmosferi ve ana mekan tasviri.';
  const p2 = document.getElementById('new-p2').value || 'Sürprizbozan içermeyen temel olay örgüsü.';
  const p3 = document.getElementById('new-p3').value || 'Edebi değer ve birlikte okuma yorumu.';

  const newBook = {
    id: 'custom-' + Date.now(),
    title,
    author,
    publisher,
    genre,
    pages,
    year,
    status: 'okunmadi', // Varsayılan durum okunmadı
    isFavorite: false,
    coverStyle: COVER_STYLES[Math.floor(Math.random() * COVER_STYLES.length)],
    lead: `${author} tarafından kaleme alınan sürükleyici bir eser.`,
    p1,
    p2,
    p3,
    quotes: ['İyi bir kitap, insanın içinde donmuş denize vurulan bir baltadır.'],
    spouseNote: '',
    myNote: 'Yeni eklendi.'
  };

  state.books.unshift(newBook);
  saveState();
  state.isAddModalOpen = false;
  render();
};

window.openRandomModal = function() {
  state.isRandomModalOpen = true;
  render();
};
window.closeRandomModal = function(e) {
  if (!e || e.target.classList.contains('modal-overlay') || e.target.classList.contains('btn-close')) {
    state.isRandomModalOpen = false;
    render();
  }
};

// PWA Yükleme Desteği (Samsung / Chrome)
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  state.deferredPrompt = e;
  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.style.display = 'flex';
});

window.installPWA = function() {
  if (state.deferredPrompt) {
    state.deferredPrompt.prompt();
    state.deferredPrompt.userChoice.then(() => {
      state.deferredPrompt = null;
      const banner = document.getElementById('pwa-install-banner');
      if (banner) banner.style.display = 'none';
    });
  }
};

// Başlatma
loadState();
render();
