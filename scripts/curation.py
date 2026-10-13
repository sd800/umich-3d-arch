"""Curated names, modeled heights and landmark form references.

English labels follow U-M GIS. Chinese names are independent translations;
proper names retain their English forms in the viewer. GIS FloorCount is not
assumed to mean above-ground storeys: local exterior counts are estimates.
"""
import re

GIS='https://map.fo.umich.edu/'
CITY_HEIGHT='https://www.a2gov.org/media/aoxh1zdd/appendixb_10-10-13.pdf'
BURTON='https://record.umich.edu/articles/burton-memorial-tower/'
BURTON_HISTORY='https://bentley.umich.edu/discover/bentley-materials/campus-tour/building-index/burton-tower/'
LAW='https://michigan.law.umich.edu/about-michigan-law/michigan-law-architecture'
TOUR='https://tour.umich.edu/'
STADIUM='https://bentley.umich.edu/athdept/stadium/stadtext/stadbild.htm'
KAHN='https://www.hok.com/projects/view/michigan-medicine-kahn-health-care-pavilion/'

# Facility number: English display name | faithful Chinese display name.
NAMES={}
for line in '''
1000005|Nichols Arboretum Residence|尼科尔斯树木园住宅
1000006|Nichols Arboretum Storage Shed|尼科尔斯树木园储藏棚
1000007|Nichols Arboretum Garage & Workshop|尼科尔斯树木园车库与工坊
1000010|Burnham House|伯纳姆住宅
1000040|Goddard Hall · Oxford Housing|戈达德宿舍楼 · 牛津宿舍区
1000041|Vandenberg Hall · Oxford Housing|范登堡宿舍楼 · 牛津宿舍区
1000042|Cheever Residence · Oxford Housing|奇弗宿舍楼 · 牛津宿舍区
1000043|Geddes Residence · Oxford Housing|格迪斯宿舍楼 · 牛津宿舍区
1000044|Emanuel Residence · Oxford Housing|伊曼纽尔宿舍楼 · 牛津宿舍区
1000045|Noble Residence · Oxford Housing|诺布尔宿舍楼 · 牛津宿舍区
1000046|Seeley Hall · Oxford Housing|西利宿舍楼 · 牛津宿舍区
1000047|Oxford Housing Plant Service|牛津宿舍区设施服务楼
1000051|Betsy Barbour House|贝齐·巴伯宿舍楼
1000052|Martha Cook Building|玛莎·库克宿舍楼
1000053|Couzens Hall|库曾斯宿舍楼
1000054|East Quadrangle|东庭院宿舍区
1000055|Fletcher Hall|弗莱彻宿舍楼
1000057|Henderson House|亨德森宿舍楼
1000059|Alice Lloyd Hall|艾丽斯·劳埃德宿舍楼
1000060|Mary Markley Hall|玛丽·马克利宿舍楼
1000061|Mosher–Jordan Hall|莫舍—乔丹宿舍楼
1000062|Helen Newberry Residence|海伦·纽伯里宿舍楼
1000063|South Quadrangle|南庭院宿舍区
1000064|Stockwell Hall|斯托克韦尔宿舍楼
1000065|Victor Vaughan House|维克托·沃恩楼
1000066|West Quadrangle|西庭院宿舍区
1000105|Lipsey Student Publications Building|利普西学生出版楼
1000108|Lawyers Club and Charles T. Munger Residences|律师俱乐部与查尔斯·T·芒格宿舍
1000109|John P. Cook Building|约翰·P·库克宿舍楼
1000120|Michigan Union|密西根学生会馆
1000135|Wyly Hall|怀利楼
1000137|Kresge Hall|克雷斯吉楼
1000139|The Catalyst Hotel at Michigan Ross|密西根罗斯商学院 Catalyst 酒店
1000145|Institute for Social Research|社会研究所
1000150|Literature, Science & Arts Building|文理学院楼
1000151|University of Michigan Museum of Art|密西根大学艺术博物馆
1000152|Angell Hall and Tisch Hall|安杰尔楼与蒂施楼
1000154|Lorch Hall|洛尔奇楼
1000155|Burton Memorial Tower|伯顿纪念塔
1000158|Chemistry Building & Dow Laboratory|化学楼与陶氏实验楼
1000159|William L. Clements Library|威廉·L·克莱门茨图书馆
1000162|School of Dentistry Building|牙医学院楼
1000165|Weiser Hall|韦瑟楼
1000166|East Hall|东楼
1000167|West Hall|西楼
1000168|Medical Science Auxiliary Building|医学科学辅助楼
1000172|Rackham Graduate School|拉克姆研究生院
1000175|Haven Hall|黑文楼
1000176|University Health Service|大学健康服务中心
1000177|Hill Auditorium|希尔礼堂
1000178|Newberry Hall · Kelsey Museum|纽伯里楼 · 凯尔西考古博物馆
1000179|Hutchins Hall|哈钦斯楼
1000180|Power Center for the Performing Arts|鲍尔表演艺术中心
1000181|Hatcher Graduate Library · South|哈彻研究生图书馆 · 南馆
1000183|Lane Hall|莱恩楼
1000184|William W. Cook Legal Research Library|威廉·W·库克法律研究图书馆
1000185|Hatcher Graduate Library · North|哈彻研究生图书馆 · 北馆
1000188|1100 North University Building|北大学大道1100号楼
1000189|Dana Building|达纳楼
1000190|Medical Science Building I|医学科学楼Ⅰ
1000191|Michigan League|密西根联盟会馆
1000192|Alumni Center|校友中心
1000193|Alexander G. Ruthven Building|亚历山大·G·鲁思文楼
1000197|Mason Hall|梅森楼
1000198|Detroit Observatory|底特律天文台
1000200|Medical Science Building II|医学科学楼Ⅱ
1000201|Hartwig Administration Building|哈特维格行政楼
1000203|President's Residence|校长官邸
1000204|Vaughan Public Health Building · SPH I|沃恩公共卫生楼 · SPHⅠ
1000206|Angell Hall Auditoriums|安杰尔楼阶梯教室群
1000207|Modern Languages Building|现代语言楼
1000208|Randall Laboratory|兰德尔实验楼
1000209|Taubman Health Sciences Library|陶布曼健康科学图书馆
1000210|Buhl Research Center for Human Genetics|布尔人类遗传学研究中心
1000212|Simpson Memorial Institute|辛普森纪念研究所
1000211|School of Kinesiology Building|运动机能学学院楼
1000213|Medical Science Research Building II|医学科学研究楼Ⅱ
1000215|Student Activities Building|学生活动楼
1000216|Tappan Hall|塔潘楼
1000219|School of Social Work|社会工作学院楼
1000221|School of Education|教育学院楼
1000222|Michigan News Building|密西根大学新闻楼
1000223|Medical Science Research Building I|医学科学研究楼Ⅰ
1000227|Shapiro Library|夏皮罗图书馆
1000229|Medical Science Research Building III|医学科学研究楼Ⅲ
1000230|428 Church Building|丘奇街428号楼
1000234|Francis Public Health Building · SPH II|弗朗西斯公共卫生楼 · SPHⅡ
1000252|Forest Avenue Switching Station|福里斯特大道开关站
1000260|Central Power Plant|中央动力站
1000261|Utilities Service Building|公用设施服务楼
1000268|Salt Storage Building|除冰盐储藏楼
1000269|Equipment Maintenance Shop|设备维修车间
1000300|North Entrance Parking Structure|北入口停车楼
1000301|Rogel Cancer Center & Geriatrics Center|罗格尔癌症中心与老年医学中心
1000306|East Hospital Mechanical Building|医院东侧设备楼
1000308|Med-Inn Building|Med-Inn 医疗楼
1000309|University Hospital South Unit 1|大学医院南楼1号
1000312|University Hospital South Unit 2|大学医院南楼2号
1000313|Towsley Center for Continuing Medical Education|陶斯利医学继续教育中心
1000314|University Hospital South Unit 3|大学医院南楼3号
1000315|Medical Center Drive Parking Structure|医学中心路停车楼
1000316|University Hospital|大学医院
1000317|Taubman Health Care Center|陶布曼医疗中心
1000318|University Hospital South Unit 4|大学医院南楼4号
1000319|Medical Professional Building|医疗专业楼
1000320|Simpson Circle Parking Structure|辛普森环路停车楼
1000323|Medical Campus Southeast Switching Station|医学校区东南开关站
1000324|Kellogg Eye Center|凯洛格眼科中心
1000327|1018 Fuller Building|富勒街1018号楼
1000332|300 North Ingalls Building|北英格尔斯街300号楼
1000333|400 North Ingalls Building|北英格尔斯街400号楼
1000335|North Ingalls Boiler House|北英格尔斯街锅炉房
1000340|Ronald McDonald House|麦当劳叔叔之家
1000390|Child Care Center|儿童照护中心
1000394|Ann & Robert H. Lurie Tower|安·卢里与罗伯特·H·卢里纪念塔
1000395|François-Xavier Bagnoud Building|弗朗索瓦—泽维尔·巴尼奥楼
1000396|Duderstadt Center|杜德施塔特中心
1000397|Robert H. Lurie Engineering Center|罗伯特·H·卢里工程中心
1000399|North Campus Administrative Complex|北校区行政楼群
1000400|Walter E. Lay Automotive Laboratory|沃尔特·E·莱汽车实验楼
1000402|Bonisteel Interdisciplinary Research Building|博尼斯蒂尔跨学科研究楼
1000403|Cooley Laboratory|库利实验楼
1000404|Michigan Memorial Phoenix Laboratory|密西根纪念凤凰实验楼
1000405|Nuclear Engineering Laboratories|核工程实验楼群
1000406|Lurie Biomedical Engineering Building|卢里生物医学工程楼
1000407|G. G. Brown Building|G·G·布朗楼
1000408|North Campus Switching Station|北校区开关站
1000409|Fire Station|消防站
1000414|Environmental & Water Resources Engineering Building|环境与水资源工程楼
1000415|Naval Architecture & Marine Engineering Building|船舶与海洋工程楼
1000416|Radiation Sciences Laboratory 1|辐射科学实验楼1号
1000417|Radiation Sciences Laboratory 2|辐射科学实验楼2号
1000420|School of Information · North|信息学院北楼
1000421|Aerospace Wind Tunnel Laboratory|航空航天风洞实验楼
1000422|Aerospace Propulsion Laboratory|航空航天推进实验楼
1000423|Aerospace Pumping Station|航空航天泵站
1000424|Gorguze Family Laboratory|戈古兹家族实验楼
1000425|Aerospace Plasma Research Building|航空航天等离子体研究楼
1000426|Aerospace Power Plant|航空航天动力站
1000427|North Campus Recreation Building|北校区文体活动楼
1000429|Industrial & Operations Engineering Building|工业与运营工程楼
1000432|Art & Architecture Building|艺术与建筑楼
1000434|IST Storage Building|IST 储藏楼
1000435|Engineering Research Building 1|工程研究楼1号
1000436|Engineering Research Building 2|工程研究楼2号
1000437|Carl A. Gerstacker Building|卡尔·A·格斯塔克尔楼
1000439|Bentley Historical Library|本特利历史图书馆
1000440|Earl V. Moore Building|厄尔·V·穆尔楼
1000441|Climate & Space Research Building|气候与空间研究楼
1000442|Pierpont Commons|皮尔庞特公共活动中心
1000443|Chrysler Center|克莱斯勒中心
1000444|University of Michigan Transportation Research Institute|密西根大学交通研究所
1000445|Stearns Building|斯特恩斯楼
1000446|Gerald R. Ford Presidential Library|杰拉尔德·R·福特总统图书馆
1000447|H. H. Dow Building|H·H·陶氏楼
1000448|Electrical Engineering & Computer Science Building|电气工程与计算机科学楼
1000498|Cram Place Community Center|克拉姆社区中心
1000510|Eaton House · Baits Housing|伊顿楼 · 贝茨宿舍区
1000511|Lee House · Baits Housing|李楼 · 贝茨宿舍区
1000512|Parker House · Baits Housing|帕克楼 · 贝茨宿舍区
1000513|Smith House · Baits Housing|史密斯楼 · 贝茨宿舍区
1000514|Stanley House · Baits Housing|斯坦利楼 · 贝茨宿舍区
1000515|Coman House · Baits Housing|科曼楼 · 贝茨宿舍区
1000516|Conger House · Baits Housing|康格楼 · 贝茨宿舍区
1000517|Cross House · Baits Housing|克罗斯楼 · 贝茨宿舍区
1000518|Thieme House · Baits Housing|蒂姆楼 · 贝茨宿舍区
1000519|Ziwet House · Baits Housing|齐韦特楼 · 贝茨宿舍区
1000555|Bursley Hall|伯斯利宿舍楼
1000600|Family Housing Community Center|家庭宿舍社区中心
1000700|Crisler Center|克里斯勒中心
1000703|Indoor Training Center|室内训练中心
1000704|Oosterbaan Field House|奥斯特班室内体育馆
1000705|Schembechler Hall|舍姆贝克勒楼
1000706|Ferry Field Pump House|费里运动场泵房
1000709|Yost Ice Arena|约斯特冰球馆
1000710|Sports Coliseum|综合体育馆
1000711|Michigan Stadium|密西根体育场
1000718|Canham Natatorium|坎纳姆游泳馆
1000719|Intramural Sports Building|校内文体活动楼
1000731|Weidenbach Hall|魏登巴赫楼
1000732|Cliff Keen Arena|克利夫·基恩体育馆
1000733|Ray Fisher Baseball Stadium|雷·费舍尔棒球场
1000738|Tisch Tennis Center|蒂施网球中心
1000739|Golf Course Pump House I|高尔夫球场1号泵房
1000741|Athletic Campus Garage|体育区车库
1000742|Campus Safety Services Building|校园安全服务楼
1000747|Golf Course Comfort Station A|高尔夫球场公共卫生间A
1000748|Golf Course Comfort Station B|高尔夫球场公共卫生间B
1000749|Golf Practice Range Building|高尔夫练习场楼
1000799|Buhr Building|布尔楼
1000800|Facilities Services Building A|设施服务楼A
1000801|Facilities Services Building B|设施服务楼B
1000802|Facilities Services Building C|设施服务楼C
1000803|Athletic Campus Switching Station|体育区开关站
1000804|Hoover Annex|胡佛附楼
1000805|Hoover Heating Plant|胡佛供热站
1000807|Physical Properties Building|Physical Properties 楼
1000808|Transportation Services Building|交通服务楼
1000813|Revelli Hall|雷韦利楼
1000814|Institute of Continuing Legal Education|法律继续教育学院
1000815|Administrative Services Building|行政服务楼
1000816|1032 Greene Building|格林街1032号楼
1000819|Michigan Square|密西根广场楼
1000830|Argus Building I|阿格斯楼Ⅰ
1000831|Argus Building II|阿格斯楼Ⅱ
1000837|Huron Bank Building|休伦银行楼
1000851|Observatory Hall|天文台宿舍楼
1000854|Carver Building|卡弗楼
1000858|Madison Building|麦迪逊楼
1000879|555 South Forest Building|南福里斯特大道555号楼
1000880|Boyer Building|博耶楼
1000885|1736 Broadway House|百老汇街1736号住宅
1000891|1736 Broadway Garage|百老汇街1736号车库
1000886|1443 Washtenaw Avenue Building|沃什特诺大道1443号楼
1000887|540 East Liberty Building|东利伯蒂街540号楼
1000890|Perry Building|佩里楼
1002500|Mitchell Field Building|米切尔运动场楼
1002514|North Campus Ground Services|北校区场地服务楼
1002518|North Campus Beal Switching Station|北校区比尔开关站
1005011|Burlington Office Center|伯灵顿办公中心
1005012|University Hospital Helipad|大学医院直升机坪
1005018|North Campus Children's Center|北校区儿童中心
1005024|309 Maynard Building|梅纳德街309号楼
1005036|Mary Sue Coleman Hall|玛丽·苏·科尔曼楼
1005037|Taubman Biomedical Science Research Building|陶布曼生物医学科学研究楼
1005046|Undergraduate Science Building|本科科学楼
1005047|Palmer Commons|帕尔默公共活动中心
1005051|University Hospital Modular Building A|大学医院模块楼A
1005059|Walgreen Drama Center|沃尔格林戏剧中心
1005077|Shepherd Women's Gymnastics Facility|谢泼德女子体操训练馆
1005081|Ann Arbor Plaza|安娜堡广场楼
1005092|Bob & Betty Beyster Building|鲍勃与贝蒂·拜斯特楼
1005096|Hillside Towne Centre|Hillside Towne Centre 楼
1005100|Maintenance Building|维修楼
1005101|Weill Hall|韦尔楼
1005102|Brehm Tower|布雷姆塔楼
1005109|Frankel Cardiovascular Center|弗兰克尔心血管中心
1005120|Ross Academic Center|罗斯学业辅导中心
1005121|Al Glick Field House|阿尔·格利克室内体育馆
1005123|Alumni Field & Indoor Hitting Facility|校友垒球场与室内击球训练馆
1005126|Central Campus & Hospital Load Center|中央校区与大学医院负荷中心
1005139|North Campus Chiller Plant|北校区制冷站
1005140|North Campus Ground Services Annex|北校区场地服务附楼
1005160|Junge Family Champions Center|容格家族冠军中心
1005168|Automotive Lab Fuel Storage Building|汽车实验室燃料储藏楼
1005169|Biological Sciences Building|生物科学楼
1005173|C. S. Mott Children's Hospital & Von Voigtlander Women's Hospital|C·S·莫特儿童医院与冯·福格特兰德妇女医院
1005177|North Quadrangle Residential & Academic Complex|北庭院住宿与教学综合楼
1005179|202 South Thayer Building|南塞耶街202号楼
1005188|Ross School of Business|罗斯商学院
1005193|Wall Street East Parking Structure|沃尔街东停车楼
1005195|Athletics Maintenance Building|体育设施维修楼
1005223|North Campus Auxiliary Support Building|北校区辅助支持楼
1005224|Stamps Auditorium|斯坦普斯礼堂
1005231|Collegian Building|Collegian 楼
1005235|Jeffries Hall|杰弗里斯楼
1005236|Bahna Wrestling Center|巴纳摔跤中心
1005240|Towsley Children's House|陶斯利儿童之家
1005242|North Plaza Building A|北广场楼A
1005243|North Plaza Building B|北广场楼B
1005247|U-M Soccer Stadium|密西根大学足球场
1005287|523 South Division Building|南迪维申街523号楼
1005289|Davidson Player Development Center|戴维森球员发展中心
1005295|625 East Liberty Building|东利伯蒂街625号楼
1005297|North Campus Grounds Storage Shed|北校区场地储藏棚
1005319|Weisfeld Family Golf Center|魏斯费尔德家族高尔夫中心
1005324|305 West Liberty Building|西利伯蒂街305号楼
1005327|439 South Division Building|南迪维申街439号楼
1005334|North Campus Support Facility|北校区支持设施楼
1005335|NCRC Building 86|北校区研究综合体86号楼
1005347|426 North Ingalls Building|北英格尔斯街426号楼
1005348|Modular MRI Building|模块化磁共振成像楼
1005349|Donald R. Shepherd Softball Center|唐纳德·R·谢泼德垒球中心
1005351|214 South State Building|南斯泰特街214号楼
1005357|Field Hockey Team Center|曲棍球队中心
1005358|Field Hockey Stadium|曲棍球场
1005359|Field Hockey Ticket Office|曲棍球场售票处
1005367|Modular Accelerator Building|模块化加速器楼
1005369|Munger Graduate Residences|芒格研究生宿舍
1005370|Jeff T. Blau Hall|杰夫·T·布劳楼
1005371|Athletic Department Operations Center|体育部运营中心
1005380|Mitchell Field Recreation Building|米切尔运动场活动楼
1005381|Mcity|Mcity 智能网联汽车试验场
1005385|Postma Golf Clubhouse|波斯特马高尔夫会馆
1005387|Field Hockey West Ticket Office|曲棍球场西售票处
1005395|U-M Lacrosse Stadium|密西根大学长曲棍球场
1005396|Lacrosse Ticket Building|长曲棍球场售票楼
1005397|Track & Field Stadium|田径场
1005398|Indoor Track Building|室内田径馆
1005399|Sports Performance Center|运动表现中心
1005400|Outdoor Track Auxiliary Building|室外田径场辅助楼
1005401|Soccer Ticket Building|足球场售票楼
1005402|Athletic Facility Support Building|体育设施支持楼
1005413|William Monroe Trotter Multicultural Center|威廉·门罗·特罗特多元文化中心
1005418|Ford Robotics Building|福特机器人楼
1005419|M-Air|M-Air 无人机试验设施
1005421|Central Campus Switching Station|中央校区开关站
1005426|Revelli Temporary Storage Building|雷韦利临时储藏楼
1005430|Wall Street West Parking Structure|沃尔街西停车楼
1005432|NCRC Building 32|北校区研究综合体32号楼
1005439|Dance Building|舞蹈楼
1005440|D. Dan & Betty Kahn Health Care Pavilion|D·丹与贝蒂·卡恩医疗楼
1005445|Hadley Family Recreation Center|哈德利家族文体活动中心
1005450|Temporary Transportation Fleet Office|交通车队临时办公楼
1005451|Central Campus Classroom Building|中央校区教学楼
1005492|College of Pharmacy Building|药学院楼
1005497|210–212 South Fifth Avenue|南第五大道210—212号楼
1005503|Multi-Sport Storage Building|多项目体育储藏楼
1005504|Leinweber Computer Science & Information Building|莱因韦伯计算机科学与信息楼
1005507|Ginsberg Center Building|金斯伯格中心楼
1005516|317 Maynard Building|梅纳德街317号楼
1005517|Neal Laboratory|尼尔实验楼
1005518|W. K. Kellogg Foundation Institute|W·K·凯洛格基金会研究所
1005554|Wallenberg House|瓦伦贝里住宅
1005567|Carriage House|马车房
1005568|Recreational Sports Adventure Leadership Rental Center|休闲体育户外领导力装备租赁中心
1005569|Adventure Leadership Temporary Offices|户外领导力项目临时办公室
1005570|Michigan Marching Band Temporary Trailer|密西根大学行进乐队临时活动房
1005571|Temporary Restroom Facilities|临时卫生间设施
1005580|Zina Pitcher Parking Structure|齐纳·皮彻街停车楼
1005581|Storage Unit A|储藏单元A
1005582|Restroom Unit B|卫生间单元B
1005583|Restroom Unit C|卫生间单元C
1005584|Office Unit D|办公单元D
1005585|Support Unit E|支持单元E
1005586|Support Unit F|支持单元F
1005589|Elbel Field Audiovisual Booth|埃尔贝尔运动场视听控制室
1005613|New Child Care Center|新儿童照护中心
1005614|Building 1 · Central Campus Housing|中央校区宿舍1号楼
1005615|Building 2 · Central Campus Housing|中央校区宿舍2号楼
1005616|Building 3 · Central Campus Housing|中央校区宿舍3号楼
1005617|Building 4 · Central Campus Housing|中央校区宿舍4号楼
1005618|Harper Hall|哈珀楼
1005622|617 East Huron Building|东休伦街617号楼
1008050|Plant Storage Building 1|设施储藏楼1号
1008051|Plant Storage Building 2|设施储藏楼2号
1008052|Plant Storage Building 3|设施储藏楼3号
1008054|Hamilton Square|汉密尔顿广场楼
1008067|Wallace House|华莱士住宅
1008098|914 Hill Building|希尔街914号楼
1080010|Child Care Construction Trailer 1|儿童照护中心施工活动房1号
1080022|Central Campus Housing Construction Trailers|中央校区宿舍施工活动房
3010077|1100 Catherine Building|凯瑟琳街1100号楼
'''.strip().splitlines():
    ident,en,zh=line.split('|');NAMES[ident]=(en,zh)

STREETS={'Catherine St.':'凯瑟琳街','Hill St.':'希尔街','Fletcher St.':'弗莱彻街','Thompson St.':'汤普森街','Church St.':'丘奇街','Thayer St.':'塞耶街','Palmer Dr.':'帕尔默路','Forest Ave':'福里斯特大道','Glen Ave':'格伦大道','Ann St.':'安街'}
def names(ident,original):
    original=(original or '').strip()
    if ident in NAMES:return NAMES[ident]
    for pattern,group in [(r'NW([124])\s*(?:AP\s*)?(\d+)',''),(r'NWV\s*(\d+)','5')]:
        m=re.fullmatch(pattern,original)
        if m:
            section,number=(m.group(1),m.group(2)) if not group else (group,m.group(1))
            return f'Northwood {section} · Building {number}',f'诺斯伍德{section}区 · {number}号宿舍楼'
    m=re.fullmatch(r'Northwood (I{1,3}) Svc Building (\d+)',original)
    if m:return f'Northwood {m.group(1)} Service Building {m.group(2)}',f'诺斯伍德{len(m.group(1))}区服务楼{m.group(2)}号'
    m=re.fullmatch(r'NCRC\s+Bldg\s+(\d+)',original)
    if m:return f'North Campus Research Complex · Building {m.group(1)}',f'北校区研究综合体{m.group(1)}号楼'
    if original.endswith(' Parking Structure'):
        street=original.removesuffix(' Parking Structure')
        if street in STREETS:return original,STREETS[street]+'停车楼'
    if original=='NC Grounds Storage Shed':return 'North Campus Grounds Storage Shed','北校区场地储藏棚'
    # Unpublished names are explicitly identified; no invented dedication.
    if not original:return f'Campus ancillary building {ident}',f'校区辅助建筑{ident}'
    return original,original+'（校区建筑）'

NAMES['1005146']=('Cardiovascular Center Parking Structure','心血管中心停车楼')

ZONES={'Central Campus':'central','North Campus':'north','Medical Campus':'medical','Ross Athletic Campus':'athletic','South Ann Arbor Properties':'athletic'}
LANDMARKS=['1000155','1000152','1000177','1000172','1000120','1000191','1000185','1000151','1000184','1000179','1000108','1000159','1000198','1005188','1005177','1000394','1000396','1000446','1000432','1005092','1005418','1000711','1000700','1000709','1005173','1005109','1005440','1005037','1005504']
GOTHIC={'1000052','1000064','1000108','1000109','1000179','1000184','1005235','1000066','1000054'}
# Exterior heights: metres above a simplified local building pad, not sea level.
# City inventory numbers remain marked as historical municipal estimates.
HEIGHTS={'1000155':(212*.3048,'published',BURTON),'1000394':(165*.3048,'municipal',CITY_HEIGHT),'1000165':(142*.3048,'municipal',CITY_HEIGHT),'1000324':(170*.3048,'municipal',CITY_HEIGHT),'1005109':(118*.3048,'municipal',CITY_HEIGHT),'1005037':(100*.3048,'municipal',CITY_HEIGHT),'1005179':(106*.3048,'municipal',CITY_HEIGHT)}
HEIGHT_ESTIMATES={'1000120':32,'1000191':25,'1000177':23,'1000172':25,'1000152':23,'1000151':22,'1000185':28,'1000181':33,'1000179':23,'1000184':41,'1000108':26,'1000109':21,'1000159':19,'1000198':14,'1005188':33,'1005177':43,'1000396':20,'1000446':16,'1000432':17,'1005092':24,'1005418':24,'1000711':43,'1000700':25,'1000709':23,'1005173':64,'1000316':55,'1000301':49,'1005440':66,'1005504':27,'1000555':25,'1005369':30,'1005445':25,'1005614':30,'1005615':30,'1005616':30,'1005617':30,'1005618':30,'1005059':25,'1000440':20,'1005179':106*.3048}
EXTERIOR_LEVELS={'1000120':6,'1000191':4,'1000177':3,'1000172':5,'1000152':4,'1000151':3,'1000185':5,'1000181':8,'1000179':4,'1000184':8,'1000108':4,'1000109':4,'1000159':3,'1000198':2,'1005188':7,'1005177':10,'1000396':4,'1000446':3,'1000432':3,'1005092':4,'1005418':4,'1000711':4,'1000700':2,'1000709':2,'1005173':12,'1000316':11,'1000301':11,'1005440':12,'1005037':6,'1005109':6,'1005504':5,'1000555':7,'1005369':8,'1000440':4,'1005059':4}
REFS={'1000155':BURTON_HISTORY,'1000394':'https://tour.umich.edu/text-based/locations/lurie-tower/','1000179':LAW,'1000184':LAW,'1000108':LAW,'1000109':LAW,'1005235':LAW,'1000711':STADIUM,'1000396':'https://www.dc.umich.edu/about-the-dc/','1005440':KAHN,'1005418':'https://tour.umich.edu/text-based/tours/engineering/','1005504':'https://cse.engin.umich.edu/about/our-facilities/'}
