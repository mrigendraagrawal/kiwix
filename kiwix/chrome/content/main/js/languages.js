/* Global variables */
var _languagesHashOld       = Array();
var _languagesHash          = Array();
var _languagesRegexHash     = Array();

/* Initialize the languages arrays */
/* Order alphabetically by _languagesHash key */
/* Based in ISO 639-3 codes */
/* source: http://www-01.sil.org/iso639-3/iso-639-3.tab */
/* alt source: https://github.com/wikimedia/mediawiki/blob/7458dc32d99e6dd569b1629762443d074b6a3c52/languages/Names.php */
_languagesHash = {
		'aar'           : 'Afaraf',
		'arz'           : 'اللغة المصرية العامية',
		'abk'           : 'аҧсуа бызшәа, аҧсшәа',
		'abk'           : 'аҧсуа бызшәа, аҧсшәа',
   	        'ace'           : 'بهسا اچيه',
		'aeb'           : 'زَوُن',
		'afr'           : 'Afrikaans',
		'aka'           : 'Akan',
		'amh'           : 'አማርኛ',
		'ang'           : 'Old English',
		'ara'           : 'العربية',
		'arg'           : 'Aragonés',
		'asm'           : 'অসমীয়া',
		'ava'           : 'авар мацӀ, магӀарул мацӀ',
		'ave'           : 'avesta',
		'aym'           : 'aymar aru',
		'ary'           : 'الدارجة',
		'arc'           : 'Imperial Aramaic',
		'ast'           : 'Asturianu',
		'aze'           : 'azərbaycanca',
		'azb'           : 'South Azerbaijani',
		'bak'           : 'Bašqort',
		'bar'           : 'Boarisch',
		'bam'           : 'Bamanankan',
                'bpy'           : 'বিষ্ণুপ্রিয়া মণিপুরী',
		'bcl'           : 'Bikol Sentral',
		'bel'           : 'Беларуская',
		'ben'           : 'বাংলা',
    	        'bho'           : 'भोजपुरी',
		'bis'           : 'Bislama',
		'bod'           : 'བོད་ཡིག',
		'bos'           : 'bosanski jezik',
		'bre'           : 'Brezhoneg',
		'bul'           : 'Български',
		'bus'           : 'Bisã',
	        'bxr'           : 'буряад хэлэн',
		'bcc'           : 'balojî Balójí',
		'bel-tasrask'   : 'тарашкевіца, клясычны правапіс',
		'bjn'           : 'Bahasa Banjar',
		'cat'           : 'Català',
		'cdo'           : '平話',
		'ces'           : 'Česky',
		'ceb'           : 'Sinugboanon',
		'cha'           : 'Chamoru',
		'che'           : 'нохчийн мотт',
		'chy'           : 'Tsėhésenėstsestȯtse',
		'chu'           : 'ѩзыкъ словѣньскъ',
		'chv'           : 'Чӑвашла',
		'cbk-zam'       : 'Chavacano',
		'cor'           : 'Kernewek',
		'cos'           : 'corsu, lingua corsa',
		'cre'           : 'ᓀᐦᐃᔭᐍᐏᐣ',
		'cym'           : 'Cymraeg',
		'chr'           : 'ᏣᎳᎩ ᎦᏬᏂᎯᏍᏗ',
		'crh' 		: 'Къырымтатарджа',
		'ckb'           : 'کوردیی ناوەندی',
		'csb'           : 'Kaszëbsczi jãzëk',
		'dan'           : 'Dansk',
		'dsb'           : 'Dolnoserbski',
		'deu'           : 'Deutsch',
		'div'           : 'ދިވެހި',
		'dzo'           : ' རྫོང་ཁ',
		'ell'           : 'Ελληνικά',
		'eng'           : 'English',
		'epo'           : 'Esperanto',
		'est'           : 'Eesti',
		'eus'           : 'euskara',
		'ewe'           : 'Eʋegbe',
		'ext'		: 'estremeñu',
		'eml'  		: 'emiliân-rumagnōl',
		'ebn'           :'বাংলা',
		'fao'           : 'Føroyskt',
		'fas'           : 'فارسی',
		'fij'           : 'vosa Vakaviti',
		'fin'           : 'Suomi',
		'fra'           : 'Français',
		'fry'           : 'Frysk',
		'ful'           : 'Fulfulde',
		'fur'		: 'Furlan',
		'frp'           : 'Provençau',
		'frr'           : 'Nordfriisk',
		'gag'           : 'Gagauz dili',
		'gan'           : '贛語',
		'gla'           : 'Gàidhlig',
		'gle'           : 'Gaeilge',
		'glg'           : 'Galego',
		'glv'           : 'Gaelg',
		'glk'           : 'گیلکی',
		'got'           : 'Gothic',
		'grn'           : 'Avañe\'ẽ',
		'guj'           : 'ગુજરાતી',
		'gsw'           : 'Schwyzerdütsch',
		'hak'           : '客家語/Hak-kâ-ngî',
		'haw'           : 'ʻŌlelo Hawaiʻi',
		'hat'           : 'Kreyol ayisyen',
		'hau'           : 'Hausa',
		'heb'           : 'עברית',
		'her'           : 'Otjiherero',
		'hin'           : 'हिन्दी',
		'her'           : 'Otjiherero',
		'hmo'           : 'Hiri Motu',
		'hrv'           : 'Олык Марий',
		'hun'           : 'Magyar',
		'hye'           : 'Հայերեն',
		'hif-latn'      : 'Fiji Baat',
		'hif'           : 'फिजी बात',
		'hrx'           : 'Riograndenser Hunsrückisch',
		'hsb'           : 'Hornjoserbsce',
		'ibo'           : 'Asụsụ Igbo',
		'ido'           : 'Ido',
		'iii'           : 'ꆈꌠ꒿ Nuosuhxop',
		'iku'           : 'ᐃᓄᒃᑎᑐᑦ',
		'ile'           : 'Interlingue',
		'ina'           : 'Interlingua',
		'ind'           : 'Bahasa Indonesia',
		'ipk'           : 'Iñupiaq',
		'isl'           : 'Íslenska',
		'ita'           : 'Italiano',
		'ilo'           : 'Ilokano',
		'jav'           : 'Basa Jawa',
		'jpn'           : '日本語',
		'jbo'           : 'la .lojban.',
		'kaa'           : 'Қарақалпақ тили',
		'kal'           : 'Kalaallisut',
		'kan'           : 'ಕನ್ನಡ',
		'kas'           : 'कश्मीरी',
		'kat'           : 'ქართული',
		'kau'           : 'Kanuri',
		'kaz'           : 'Қазақша',
		'khm'           : 'ភាសាខ្មែរ',
		'kik'           : 'Gĩkũyũ',
		'kin'           : 'Ikinyarwanda',
		'kir'           : 'قىرعىز تىلى',
		'kom'           : 'коми кыв',
		'kon'           : 'Kikongo',
		'kor'           : '한국어',
		'kor-kp'        : '조선어',
		'kua'           : 'Kuanyama',
		'kur'           : 'kurdî',
		'ksh'           : 'Ripoarisch',
		'kab'           : 'Taqbaylit',
		'kbd'           : 'Адыгэбзэ',
		'koi'           : 'Перем коми кыв',
		'krc'           : 'Къарачай-Малкъар тил',
		'lad'           : 'Judeo-Español',
		'lbe'           : 'лакку маз',
		'lez'           : 'Лезги чӏал Lezgi č’al',
		'lij'           : 'Lìgure, Zenéize',
		'lmo'           : 'Lumbaart',
		'ltg'           : 'latgalīšu volūda',
		'lzh'           : '古文',
		'mai'           : 'मैथिली, মৈথিলী',
		'mdf'           : 'Мокшень кяль / mokšenj kälj',
		'mhr'           : 'Meadow Mari',
		'min'           : 'باسو مينڠكاباو',
		'mrj'           : 'Кырык мары йӹлмӹ Kyryk mary jÿlmÿ',
		'mwl'           : 'Mirandés',
		'myv'           : 'Morafa',
		'mzn'           : 'مازندرانی',
		'nah'           : 'Asteca',
		'nan'           : '閩南語 / 闽南语',
		'nap'           : 'Napulitano',
		'nds'           : 'Plattdüütsch',
		'nds-nl'        : 'Nederlaands Leegsaksies',
		'nov'           : 'Novial',
		'nrm'           : 'Narom',
		'nso'           : 'Pedi',
		'pag'           : 'Pangasinense',
		'pam'           : 'Amánung Sísuan',
		'pap'           : 'Papiamentu',
		'pfl'           : 'Pfälzisch',
		'pih'           : 'Pitkern-Norfolk',
		'lao'           : 'ພາສາລາວ',
		'lat'           : 'Lingua Latīna',
		'lav'           : 'Latviešu',
		'lim'           : 'Limburgs',
		'lin'           : 'Lingála',
		'lit'           : 'Lietuvių',
		'ltz'           : 'Lëtzebuergesch',
		'lub'           : 'Tshiluba',
		'lug'           : 'Luganda',
		'mah'           : 'Kajin M̧ajeļ',
		'mal'           : 'മലയാളം',
		'mar'           : 'मराठी',
		'map-bms'       : 'Basa Banyumasan',
		'mkd'           : 'Македонски',
		'mlg'           : 'Malagasy',
		'mlt'           : 'Malti',
		'mon'           : 'Монгол хэл',
		'mri'           : 'Te reo Māori',
		'msa'           : 'Bahasa Melayu',
		'mul'           : 'multilingual',
		'mya'           : 'မြန်မာဘာသာ',
		'nau'           : 'Ekakairũ Naoero',
		'nav'           : 'Diné bizaad',
		'nbl'           : 'isiNdebele',
		'nde'           : 'isiNdebele',
		'ndo'           : 'Owambo',
		'nep'           : 'नेपाली',
		'nld'           : 'Nederlands',
		'nno'           : 'Norsk (nynorsk)',
		'nob'           : 'Norsk (bokmål)',
		'nor'           : 'Norsk (bokmål)',
		'nya'           : 'ChiCheŵa',
		'new'           : 'नेपाल भाषा',
		'oci'           : 'Occitan',
		'oji'           : 'ᐊᓂᔑᓈᐯᒧᐎᓐ',
		'ori'           : 'ଓଡ଼ିଆ',
		'orm'           : 'Afaan Oromoo',
		'oss'           : 'ирон æвзаг',
		'pan'           : 'ਪੰਜਾਬੀ',
		'pcd'           : 'Picard',
		'pli'           : 'पाऴि',
		'pol'           : 'Język polski',
		'por'           : 'Português',
		'por-pt'        : 'Português do Brasil',
		'pus'           : 'پښتو',
		'pdc'           : 'Pennsilfaanisch Deitsch',
		'pms'           : 'Piemontèis',
		'que'           : 'Runa Simi',
		'roh'           : 'Rumantsch',
		'ron'           : 'Română',
		'run'           : 'Ikirundi',
		'rus'           : 'Русский',
		'rue'           : 'Русиньскый',
		'sag'           : 'yângâ tî sängö',
		'san'           : 'संस्कृतम्',
		'sin'           : 'සිංහල',
		'skr'           : 'सराइकी',
		'slk'           : 'Slovenčina',
		'slv'           : 'Slovenščina',
		'sme'           : 'Davvisámegiella',
		'smo'           : 'gagana fa\'a Samoa',
		'sna'           : 'chiShona',
		'snd'           : 'सिन्धी',
		'som'           : 'Soomaaliga',
		'sot'           : 'Sesotho',
		'spa'           : 'Español',
		'sqi'           : 'Mirësevini',
		'tha'           : 'ภาษาไทย',
		'srd'           :'sardu',
		'srp'           :'Српски',
		'srp-ec'        :'Српски (ћирилица)',
		'srp-el'        :'Srpski (latinica)',
		'ssw'           :'SiSwati',
		'sun'           :'Basa Sunda',
		'swa'           :'Kiswahili',
		'swe'           :'Svenska',
		'ses'           :'Koyraboro Senni',
		'sh'            :'Srpskohrvatski / Српскохрватски',
		'tah'           :'Reo Tahiti',
		'tam'           :'தமிழ்',
		'tat'           :'татар теле',
		'tel'           :'తెలుగు',
		'tgk'           :'тоҷикӣ',
		'tgl'           :'Wikang Tagalog',
		'tha'           :'ไทย',
		'tir'           :'ትግርኛ',
		'ton'           :'faka Tonga',
		'tsn'           :'Setswana',
		'tso'           :'Xitsonga',
		'tuk'           :'Türkmen dili',
		'tur'           :'Türkçe',
		'twi'           :'Twi',
		'tcy'           :'ತುಳು',
		'tly'           :'толышә зывон',
		'tt-cyrl'       :'Татарча',
		'uig'           :'ئۇيغۇرچە',
		'ug-arab'       :'ئۇيغۇرچە',
		'ukr'           :'Українська',
		'urd'           :'اردو',
		'uzb'           :'Oʻzbekcha',
		'ven'           :'Tshivenḓa',
		'vec'           :'Vèneto',
		'vie'           :'Tiếng Việt',
		'vol'           :'Volapük',
		'wln'           :'walon',
		'wol'           :'Wolof',
		'xho'           :'isiXhosa',
		'yid'           :'ייִדיש',
		'yor'           :'Yorùbá',
		'zha'           :'Saɯ cueŋƅ',
		'zho'           :'中文',
		'zho-hans'      :'中文(简体)',
		'zho-hant'      :'中文(繁體)',
		'zho-hk'        :'中文(香港)',
		'zul'           :'isiZulu',
		'zza'           :'Zāzākī'  

};

/* Based in ISO 639-1 and 639-2 codes */
_languagesHashOld = {
		'ay'          : _languagesHash['aym'],
		'aa'          : _languagesHash['aar'],
		'ab'          : _languagesHash['abk'],
		'af'          : _languagesHash['afr'],
		'ak'          : _languagesHash['aka'],
		'am'          : _languagesHash['amh'],
		'an'          : _languagesHash['arg'],
		'ar'          : _languagesHash['ara'],
		'as'          : _languagesHash['asm'],
		'az'          : _languagesHash['aze'],
		'ba'          : _languagesHash['bak'],
		'bh'          : _languagesHash['bho'],
		'bm'          : _languagesHash['bam'],
		'be'          : _languagesHash['bel'],
		'bi'          : _languagesHash['bis'],
		'bo'          : _languagesHash['bod'],
		'bn'          : _languagesHash['ben'],
		'br'          : _languagesHash['bre'],
                'bs'          : _languagesHash['bos'],
		'bg'          : _languagesHash['bul'],
		'be-tarask'   : _languagesHash['bel-tasrask'],
		'ca'          : _languagesHash['cat'],
		'ce'          : _languagesHash['che'],
		'co'          : _languagesHash['cos'],
		'cs'          : _languagesHash['ces'],
		'cv'          : _languagesHash['chv'],
		'cy'          : _languagesHash['cym'],
		'cu'          : _languagesHash['chu'],
		'cr'          : _languagesHash['cre'],
		'crh-latn'    : _languagesHash['crh'],
		'ch'          : _languagesHash['cha'],
		'da'          : _languagesHash['dan'],
		'de'          : _languagesHash['deu'],
                'dv'          : _languagesHash['div'],
                'dz'          : _languagesHash['dzo'],
                'ee'          : _languagesHash['ewe'],
		'el'          : _languagesHash['ell'],
		'en'          : _languagesHash['eng'],
		'eo'          : _languagesHash['epo'],
		'eu'          : _languagesHash['eus'],
		'et'          : _languagesHash['est'],
		'bn'          : _languagesHash['ebn'],
		'fo'          : _languagesHash['fao'],
		'fa'          : _languagesHash['fas'],
		'fi'          : _languagesHash['fin'],
                'fy'          : _languagesHash['fry'],
                'fj'          : _languagesHash['fij'],
		'fr'          : _languagesHash['fra'],
		'ff'          : _languagesHash['ful'],
		'gl'          : _languagesHash['glg'],
		'gd'          : _languagesHash['gla'],
	        'ga'          : _languagesHash['gle'],
		'gn'          : _languagesHash['grn'],
		'gu'          : _languagesHash['guj'],
                'gv'          : _languagesHash['glv'],
		'ht'          : _languagesHash['hat'],
		'ha'          : _languagesHash['hau'],
		'he'          : _languagesHash['heb'],
		'hi'          : _languagesHash['hin'],
		'hr'          : _languagesHash['hrv'],
		'hu'          : _languagesHash['hun'],
		'hy'          : _languagesHash['hye'],
		'ie'          : _languagesHash['ile'],
		'ig'          : _languagesHash['ibo'],
		'ia'          : _languagesHash['ina'],
		'id'          : _languagesHash['ind'],
		'it'          : _languagesHash['ita'],
		'ik'          : _languagesHash['ipk'],
		'io'          : _languagesHash['ido'],
		'iu'          : _languagesHash['iku'],
		'is'          : _languagesHash['isl'],
		'jv'          : _languagesHash['jav'],
		'ja'          : _languagesHash['jpn'],
		'kn'          : _languagesHash['kan'],
		'ki'          : _languagesHash['kik'],
		'kv'          : _languagesHash['kom'],
		'kw'          : _languagesHash['cor'],
		'lg'          : _languagesHash['lug'],
		'ln'          : _languagesHash['lin'],
		'lo'          : _languagesHash['lao'],
		'mi'          : _languagesHash['mri'],
		'na'          : _languagesHash['nau'],
		'nv'          : _languagesHash['nav'],
		'ny'          : _languagesHash['nya'],
		'om'          : _languagesHash['orm'],
		'os'          : _languagesHash['oss'],
		'pa'          : _languagesHash['pan'],
		'pi'          : _languagesHash['pli'],
		'ka'          : _languagesHash['kat'],
		'kk'          : _languagesHash['kaz'],
		'km'          : _languagesHash['khm'],
		'ky'          : _languagesHash['kir'],
		'ko-kp'       : _languagesHash['kor-kp'],
		'ku'          : _languagesHash['kur'],
		'kg'          : _languagesHash['kon'],
		'kl'          : _languagesHash['kal'],
		'ks'          : _languagesHash['kas'],
		'la'          : _languagesHash['lat'],
		'lv'          : _languagesHash['lav'],
		'li'          : _languagesHash['lim'],
		'lt'          : _languagesHash['lit'],
		'lb'          : _languagesHash['ltz'],
		'ml'          : _languagesHash['mal'],
		'mr'          : _languagesHash['mar'],
		'mk'          : _languagesHash['mkd'],
		'mg'          : _languagesHash['mlg'],
		'mt'          : _languagesHash['mlt'],
		'mn'          : _languagesHash['mon'],
		'ms'          : _languagesHash['msa'],
		'my'          : _languagesHash['mya'],
		'ne'          : _languagesHash['nep'],
		'nl'          : _languagesHash['nld'],
		'nn'          : _languagesHash['nno'],
		'nb'          : _languagesHash['nob'],
		'no'          : _languagesHash['nor'],
		'oc'          : _languagesHash['oci'],
		'or'          : _languagesHash['ori'],
		'pl'          : _languagesHash['pol'],
		'pt'          : _languagesHash['por'],
		'pt-br'       : _languagesHash['por-pt'],
		'ps'          : _languagesHash['pus'],
		'qu'          : _languagesHash['que'],
		'rm'          : _languagesHash['roh'],
		'ro'          : _languagesHash['ron'],
		'ru'          : _languagesHash['rus'],
		'sa'          : _languagesHash['san'],
		'si'          : _languagesHash['sin'],
		'sk'          : _languagesHash['slk'],
		'sl'          : _languagesHash['slv'],
		'es'          : _languagesHash['spa'],
		'sq'          : _languagesHash['sqi'],
		'sr'          : _languagesHash['srp'],
		'sr-ec'       : _languagesHash['srp-ec'],
		'sr-el'       : _languagesHash['srp-el'],
		'su'          : _languagesHash['sun'],
		'sw'          : _languagesHash['swa'],
		'sv'          : _languagesHash['swe'],
		'ta'          : _languagesHash['tam'],
		'te'          : _languagesHash['tel'],
		'tl'          : _languagesHash['tgl'],
		'th'          : _languagesHash['tha'],
		'tk'          : _languagesHash['tuk'],
		'tr'          : _languagesHash['tur'],
		'uk'          : _languagesHash['ukr'],
		'ur'          : _languagesHash['urd'],
		'uz'          : _languagesHash['uzb'],
		'vi'          : _languagesHash['vie'],
		'yo'          : _languagesHash['wol'],
		'yi'          : _languagesHash['yid'],
		'zh'          : _languagesHash['zho'],
		'zh-hans'     : _languagesHash['zho-hans'],
		'zh-hant'     : _languagesHash['zho-hant'],
		'zh-hk'       : _languagesHash['zho-hk'],
		'diq'         : _languagesHash['zza']   
};

function getLanguageNameFromISO(code) {
	var language = _languagesHash[code] || _languagesHashOld[code] || '';
	if (!language && code) {
	    
	    /* This js code might be used js runtime engine where
	     * the dump() method is not available */
            try {
		dump('"' + code + '" is not available in languages.js.\n');
	    } catch (error) {
	    }
	}
	return language;
}

function getLanguageNameFromISOCodes(codes) {
	var result = "";
	var codeArray = codes.split(',');
	for (var i in codeArray) {
		result += getLanguageNameFromISO(codeArray[i]);
		if (i < codeArray.length-1) {			
			result += ', ';
		}
	}
	return result;
}

/* Be careful, this function returns false, also if undefined - that
 * means nothing because the table _languagesHashOld is not complete */
function isOldLanguageCode(code) {
	return _languagesHashOld[iso] ? true : false;
}

function buildLanguagesRegexHash() {
	for (var code in _languagesHash) {
		_languagesRegexHash[_languagesHash[code]] = code;
	}

	for (var code in _languagesHashOld) {
		var regex = _languagesRegexHash[_languagesHashOld[code]];
		_languagesRegexHash[_languagesHashOld[code]] = '^(' + (regex ? regex + '|' : '') + code + ')$';
	}
}

function getLanguageRegex(language) {
	return _languagesRegexHash[language] || '';
}

