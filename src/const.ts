import { GAMES } from "./games";

export const AVG: Record<string, [number, number]> = {
	AFG: [33.0, 65.0],
	ALA: [60.116667, 19.9],
	ALB: [41.0, 20.0],
	DZA: [28.0, 3.0],
	ASM: [-14.3333, -170.0],
	AND: [42.5, 1.6],
	AGO: [-12.5, 18.5],
	AIA: [18.25, -63.1667],
	ATA: [-90.0, 0.0],
	ATG: [17.05, -61.8],
	ARG: [-34.0, -64.0],
	ARM: [40.0, 45.0],
	ABW: [12.5, -69.9667],
	AUS: [-27.0, 133.0],
	AUT: [47.3333, 13.3333],
	AZE: [40.5, 47.5],
	BHS: [24.25, -76.0],
	BHR: [26.0, 50.55],
	BGD: [24.0, 90.0],
	BRB: [13.1667, -59.5333],
	BLR: [53.0, 28.0],
	BEL: [50.8333, 4.0],
	BLZ: [17.25, -88.75],
	BEN: [9.5, 2.25],
	BMU: [32.3333, -64.75],
	BTN: [27.5, 90.5],
	BOL: [-17.0, -65.0],
	BES: [12.183333, -68.233333],
	BIH: [44.0, 18.0],
	BWA: [-22.0, 24.0],
	BVT: [-54.4333, 3.4],
	BRA: [-10.0, -55.0],
	IOT: [-6.0, 71.5],
	BRN: [4.5, 114.6667],
	BGR: [43.0, 25.0],
	BFA: [13.0, -2.0],
	MMR: [22.0, 98.0],
	BDI: [-3.5, 30.0],
	KHM: [13.0, 105.0],
	CMR: [6.0, 12.0],
	CAN: [60.0, -95.0],
	CPV: [16.0, -24.0],
	CYM: [19.5, -80.5],
	CAF: [7.0, 21.0],
	TCD: [15.0, 19.0],
	CHL: [-30.0, -71.0],
	CHN: [35.0, 105.0],
	CXR: [-10.5, 105.6667],
	CCK: [-12.5, 96.8333],
	COL: [4.0, -72.0],
	COM: [-12.1667, 44.25],
	COD: [0.0, 25.0],
	COG: [-1.0, 15.0],
	COK: [-21.2333, -159.7667],
	CRI: [10.0, -84.0],
	CIV: [8.0, -5.0],
	HRV: [45.1667, 15.5],
	CUB: [21.5, -80.0],
	CUW: [12.166667, -68.966667],
	CYP: [35.0, 33.0],
	CZE: [49.75, 15.5],
	DNK: [56.0, 10.0],
	DJI: [11.5, 43.0],
	DMA: [15.4167, -61.3333],
	DOM: [19.0, -70.6667],
	ECU: [-2.0, -77.5],
	EGY: [27.0, 30.0],
	SLV: [13.8333, -88.9167],
	GNQ: [2.0, 10.0],
	ERI: [15.0, 39.0],
	EST: [59.0, 26.0],
	ETH: [8.0, 38.0],
	FLK: [-51.75, -59.0],
	FRO: [62.0, -7.0],
	FJI: [-18.0, 175.0],
	FIN: [64.0, 26.0],
	FRA: [46.0, 2.0],
	GUF: [4.0, -53.0],
	PYF: [-15.0, -140.0],
	ATF: [-43.0, 67.0],
	GAB: [-1.0, 11.75],
	GMB: [13.4667, -16.5667],
	GEO: [42.0, 43.5],
	DEU: [51.0, 9.0],
	GHA: [8.0, -2.0],
	GIB: [36.1833, -5.3667],
	GRC: [39.0, 22.0],
	GRL: [72.0, -40.0],
	GRD: [12.1167, -61.6667],
	GLP: [16.25, -61.5833],
	GUM: [13.4667, 144.7833],
	GTM: [15.5, -90.25],
	GGY: [49.5, -2.56],
	GNB: [12.0, -15.0],
	GIN: [11.0, -10.0],
	GUY: [5.0, -59.0],
	HTI: [19.0, -72.4167],
	HMD: [-53.1, 72.5167],
	VAT: [41.9, 12.45],
	HND: [15.0, -86.5],
	HKG: [22.25, 114.1667],
	HUN: [47.0, 20.0],
	ISL: [65.0, -18.0],
	IND: [20.0, 77.0],
	IDN: [-5.0, 120.0],
	IRN: [32.0, 53.0],
	IRQ: [33.0, 44.0],
	IRL: [53.0, -8.0],
	IMN: [54.23, -4.55],
	ISR: [31.5, 34.75],
	ITA: [42.8333, 12.8333],
	JAM: [18.25, -77.5],
	JPN: [36.0, 138.0],
	JEY: [49.21, -2.13],
	JOR: [31.0, 36.0],
	KAZ: [48.0, 68.0],
	KEN: [1.0, 38.0],
	KIR: [1.4167, 173.0],
	PRK: [40.0, 127.0],
	KOR: [37.0, 127.5],
	XKX: [42.583333, 21.0],
	KWT: [29.3375, 47.6581],
	KGZ: [41.0, 75.0],
	LAO: [18.0, 105.0],
	LVA: [57.0, 25.0],
	LBN: [33.8333, 35.8333],
	LSO: [-29.5, 28.5],
	LBR: [6.5, -9.5],
	LBY: [25.0, 17.0],
	LIE: [47.1667, 9.5333],
	LTU: [56.0, 24.0],
	LUX: [49.75, 6.1667],
	MAC: [22.1667, 113.55],
	MKD: [41.8333, 22.0],
	MDG: [-20.0, 47.0],
	MWI: [-13.5, 34.0],
	MYS: [2.5, 112.5],
	MDV: [3.25, 73.0],
	MLI: [17.0, -4.0],
	MLT: [35.8333, 14.5833],
	MHL: [9.0, 168.0],
	MTQ: [14.6667, -61.0],
	MRT: [20.0, -12.0],
	MUS: [-20.2833, 57.55],
	MYT: [-12.8333, 45.1667],
	MEX: [23.0, -102.0],
	FSM: [6.9167, 158.25],
	MDA: [47.0, 29.0],
	MCO: [43.7333, 7.4],
	MNG: [46.0, 105.0],
	MNE: [42.0, 19.0],
	MSR: [16.75, -62.2],
	MAR: [32.0, -5.0],
	MOZ: [-18.25, 35.0],
	NAM: [-22.0, 17.0],
	NRU: [-0.5333, 166.9167],
	NPL: [28.0, 84.0],
	ANT: [12.25, -68.75],
	NLD: [52.5, 5.75],
	NCL: [-21.5, 165.5],
	NZL: [-41.0, 174.0],
	NIC: [13.0, -85.0],
	NER: [16.0, 8.0],
	NGA: [10.0, 8.0],
	NIU: [-19.0333, -169.8667],
	NFK: [-29.0333, 167.95],
	MNP: [15.2, 145.75],
	NOR: [62.0, 10.0],
	OMN: [21.0, 57.0],
	PAK: [30.0, 70.0],
	PLW: [7.5, 134.5],
	PSE: [32.0, 35.25],
	PAN: [9.0, -80.0],
	PNG: [-6.0, 147.0],
	PRY: [-23.0, -58.0],
	PER: [-10.0, -76.0],
	PHL: [13.0, 122.0],
	PCN: [-24.7, -127.4],
	POL: [52.0, 20.0],
	PRT: [39.5, -8.0],
	PRI: [18.25, -66.5],
	QAT: [25.5, 51.25],
	REU: [-21.1, 55.6],
	ROU: [46.0, 25.0],
	RUS: [60.0, 100.0],
	RWA: [-2.0, 30.0],
	BLM: [17.897728, -62.834244],
	SHN: [-15.9333, -5.7],
	KNA: [17.3333, -62.75],
	LCA: [13.8833, -61.1333],
	MAF: [18.075278, -63.06],
	SPM: [46.8333, -56.3333],
	VCT: [13.25, -61.2],
	WSM: [-13.5833, -172.3333],
	SMR: [43.7667, 12.4167],
	STP: [1.0, 7.0],
	SAU: [25.0, 45.0],
	SEN: [14.0, -14.0],
	SRB: [44.0, 21.0],
	SYC: [-4.5833, 55.6667],
	SLE: [8.5, -11.5],
	SGP: [1.3667, 103.8],
	SXM: [18.033333, -63.05],
	SVK: [48.6667, 19.5],
	SVN: [46.0, 15.0],
	SLB: [-8.0, 159.0],
	SOM: [10.0, 49.0],
	ZAF: [-29.0, 24.0],
	SGS: [-54.5, -37.0],
	SSD: [8.0, 30.0],
	ESP: [40.0, -4.0],
	LKA: [7.0, 81.0],
	SDN: [15.0, 30.0],
	SUR: [4.0, -56.0],
	SJM: [78.0, 20.0],
	SWZ: [-26.5, 31.5],
	SWE: [62.0, 15.0],
	CHE: [47.0, 8.0],
	SYR: [35.0, 38.0],
	TWN: [23.5, 121.0],
	TJK: [39.0, 71.0],
	TZA: [-6.0, 35.0],
	THA: [15.0, 100.0],
	TLS: [-8.55, 125.5167],
	TGO: [8.0, 1.1667],
	TKL: [-9.0, -172.0],
	TON: [-20.0, -175.0],
	TTO: [11.0, -61.0],
	TUN: [34.0, 9.0],
	TUR: [39.0, 35.0],
	TKM: [40.0, 60.0],
	TCA: [21.75, -71.5833],
	TUV: [-8.0, 178.0],
	UGA: [1.0, 32.0],
	UKR: [49.0, 32.0],
	ARE: [24.0, 54.0],
	GBR: [54.0, -2.0],
	UMI: [19.2833, 166.6],
	USA: [38.0, -97.0],
	URY: [-33.0, -56.0],
	UZB: [41.0, 64.0],
	VUT: [-16.0, 167.0],
	VEN: [8.0, -66.0],
	VNM: [16.0, 106.0],
	VGB: [18.5, -64.5],
	VIR: [18.3333, -64.8333],
	WLF: [-13.3, -176.2],
	ESH: [24.5, -13.0],
	YEM: [15.0, 48.0],
	ZMB: [-15.0, 30.0],
	ZWE: [-20.0, 30.0],
};

export const ISO3166: Record<string, { name: string; alpha2: string }> = {
	AFG: {
		name: "Afghanistan",
		alpha2: "AF",
	},
	ALB: {
		name: "Albania",
		alpha2: "AL",
	},
	DZA: {
		name: "Algeria",
		alpha2: "DZ",
	},
	ASM: {
		name: "American Samoa",
		alpha2: "AS",
	},
	AND: {
		name: "Andorra",
		alpha2: "AD",
	},
	AGO: {
		name: "Angola",
		alpha2: "AO",
	},
	AIA: {
		name: "Anguilla",
		alpha2: "AI",
	},
	ATA: {
		name: "Antarctica",
		alpha2: "AQ",
	},
	ATG: {
		name: "Antigua and Barbuda",
		alpha2: "AG",
	},
	ARG: {
		name: "Argentina",
		alpha2: "AR",
	},
	ARM: {
		name: "Armenia",
		alpha2: "AM",
	},
	ABW: {
		name: "Aruba",
		alpha2: "AW",
	},
	AUS: {
		name: "Australia",
		alpha2: "AU",
	},
	AUT: {
		name: "Austria",
		alpha2: "AT",
	},
	AZE: {
		name: "Azerbaijan",
		alpha2: "AZ",
	},
	BHS: {
		name: "Bahamas",
		alpha2: "BS",
	},
	BHR: {
		name: "Bahrain",
		alpha2: "BH",
	},
	BGD: {
		name: "Bangladesh",
		alpha2: "BD",
	},
	BRB: {
		name: "Barbados",
		alpha2: "BB",
	},
	BLR: {
		name: "Belarus",
		alpha2: "BY",
	},
	BEL: {
		name: "Belgium",
		alpha2: "BE",
	},
	BLZ: {
		name: "Belize",
		alpha2: "BZ",
	},
	BEN: {
		name: "Benin",
		alpha2: "BJ",
	},
	BMU: {
		name: "Bermuda",
		alpha2: "BM",
	},
	BTN: {
		name: "Bhutan",
		alpha2: "BT",
	},
	BOL: {
		name: "Bolivia (Plurinational State of)",
		alpha2: "BO",
	},
	BES: {
		name: "Bonaire, Sint Eustatius and Saba",
		alpha2: "BQ",
	},
	BIH: {
		name: "Bosnia and Herzegovina",
		alpha2: "BA",
	},
	BWA: {
		name: "Botswana",
		alpha2: "BW",
	},
	BVT: {
		name: "Bouvet Island",
		alpha2: "BV",
	},
	BRA: {
		name: "Brazil",
		alpha2: "BR",
	},
	IOT: {
		name: "British Indian Ocean Territory",
		alpha2: "IO",
	},
	BRN: {
		name: "Brunei Darussalam",
		alpha2: "BN",
	},
	BGR: {
		name: "Bulgaria",
		alpha2: "BG",
	},
	BFA: {
		name: "Burkina Faso",
		alpha2: "BF",
	},
	BDI: {
		name: "Burundi",
		alpha2: "BI",
	},
	CPV: {
		name: "Cabo Verde",
		alpha2: "CV",
	},
	KHM: {
		name: "Cambodia",
		alpha2: "KH",
	},
	CMR: {
		name: "Cameroon",
		alpha2: "CM",
	},
	CAN: {
		name: "Canada",
		alpha2: "CA",
	},
	CYM: {
		name: "Cayman Islands",
		alpha2: "KY",
	},
	CAF: {
		name: "Central African Republic",
		alpha2: "CF",
	},
	TCD: {
		name: "Chad",
		alpha2: "TD",
	},
	CHL: {
		name: "Chile",
		alpha2: "CL",
	},
	CHN: {
		name: "China",
		alpha2: "CN",
	},
	CXR: {
		name: "Christmas Island",
		alpha2: "CX",
	},
	CCK: {
		name: "Cocos (Keeling) Islands",
		alpha2: "CC",
	},
	COL: {
		name: "Colombia",
		alpha2: "CO",
	},
	COM: {
		name: "Comoros",
		alpha2: "KM",
	},
	COD: {
		name: "Congo",
		alpha2: "CD",
	},
	COG: {
		name: "Congo",
		alpha2: "CG",
	},
	COK: {
		name: "Cook Islands",
		alpha2: "CK",
	},
	CRI: {
		name: "Costa Rica",
		alpha2: "CR",
	},
	HRV: {
		name: "Croatia",
		alpha2: "HR",
	},
	CUB: {
		name: "Cuba",
		alpha2: "CU",
	},
	CUW: {
		name: "Curaçao",
		alpha2: "CW",
	},
	CYP: {
		name: "Cyprus",
		alpha2: "CY",
	},
	CZE: {
		name: "Czechia",
		alpha2: "CZ",
	},
	CIV: {
		name: "Côte d'Ivoire",
		alpha2: "CI",
	},
	DNK: {
		name: "Denmark",
		alpha2: "DK",
	},
	DJI: {
		name: "Djibouti",
		alpha2: "DJ",
	},
	DMA: {
		name: "Dominica",
		alpha2: "DM",
	},
	DOM: {
		name: "Dominican Republic",
		alpha2: "DO",
	},
	ECU: {
		name: "Ecuador",
		alpha2: "EC",
	},
	EGY: {
		name: "Egypt",
		alpha2: "EG",
	},
	SLV: {
		name: "El Salvador",
		alpha2: "SV",
	},
	GNQ: {
		name: "Equatorial Guinea",
		alpha2: "GQ",
	},
	ERI: {
		name: "Eritrea",
		alpha2: "ER",
	},
	EST: {
		name: "Estonia",
		alpha2: "EE",
	},
	SWZ: {
		name: "Eswatini",
		alpha2: "SZ",
	},
	ETH: {
		name: "Ethiopia",
		alpha2: "ET",
	},
	FLK: {
		name: "Falkland Islands  [Malvinas]",
		alpha2: "FK",
	},
	FRO: {
		name: "Faroe Islands",
		alpha2: "FO",
	},
	FJI: {
		name: "Fiji",
		alpha2: "FJ",
	},
	FIN: {
		name: "Finland",
		alpha2: "FI",
	},
	FRA: {
		name: "France",
		alpha2: "FR",
	},
	GUF: {
		name: "French Guiana",
		alpha2: "GF",
	},
	PYF: {
		name: "French Polynesia",
		alpha2: "PF",
	},
	ATF: {
		name: "French Southern Territories",
		alpha2: "TF",
	},
	GAB: {
		name: "Gabon",
		alpha2: "GA",
	},
	GMB: {
		name: "Gambia",
		alpha2: "GM",
	},
	GEO: {
		name: "Georgia",
		alpha2: "GE",
	},
	DEU: {
		name: "Germany",
		alpha2: "DE",
	},
	GHA: {
		name: "Ghana",
		alpha2: "GH",
	},
	GIB: {
		name: "Gibraltar",
		alpha2: "GI",
	},
	GRC: {
		name: "Greece",
		alpha2: "GR",
	},
	GRL: {
		name: "Greenland",
		alpha2: "GL",
	},
	GRD: {
		name: "Grenada",
		alpha2: "GD",
	},
	GLP: {
		name: "Guadeloupe",
		alpha2: "GP",
	},
	GUM: {
		name: "Guam",
		alpha2: "GU",
	},
	GTM: {
		name: "Guatemala",
		alpha2: "GT",
	},
	GGY: {
		name: "Guernsey",
		alpha2: "GG",
	},
	GIN: {
		name: "Guinea",
		alpha2: "GN",
	},
	GNB: {
		name: "Guinea-Bissau",
		alpha2: "GW",
	},
	GUY: {
		name: "Guyana",
		alpha2: "GY",
	},
	HTI: {
		name: "Haiti",
		alpha2: "HT",
	},
	HMD: {
		name: "Heard Island and McDonald Islands",
		alpha2: "HM",
	},
	VAT: {
		name: "Holy See",
		alpha2: "VA",
	},
	HND: {
		name: "Honduras",
		alpha2: "HN",
	},
	HKG: {
		name: "Hong Kong",
		alpha2: "HK",
	},
	HUN: {
		name: "Hungary",
		alpha2: "HU",
	},
	ISL: {
		name: "Iceland",
		alpha2: "IS",
	},
	IND: {
		name: "India",
		alpha2: "IN",
	},
	IDN: {
		name: "Indonesia",
		alpha2: "ID",
	},
	IRN: {
		name: "Iran (Islamic Republic of)",
		alpha2: "IR",
	},
	IRQ: {
		name: "Iraq",
		alpha2: "IQ",
	},
	IRL: {
		name: "Ireland",
		alpha2: "IE",
	},
	IMN: {
		name: "Isle of Man",
		alpha2: "IM",
	},
	ISR: {
		name: "Israel",
		alpha2: "IL",
	},
	ITA: {
		name: "Italy",
		alpha2: "IT",
	},
	JAM: {
		name: "Jamaica",
		alpha2: "JM",
	},
	JPN: {
		name: "Japan",
		alpha2: "JP",
	},
	JEY: {
		name: "Jersey",
		alpha2: "JE",
	},
	JOR: {
		name: "Jordan",
		alpha2: "JO",
	},
	KAZ: {
		name: "Kazakhstan",
		alpha2: "KZ",
	},
	KEN: {
		name: "Kenya",
		alpha2: "KE",
	},
	KIR: {
		name: "Kiribati",
		alpha2: "KI",
	},
	PRK: {
		name: "North Korea",
		alpha2: "KP",
	},
	KOR: {
		name: "South Korea",
		alpha2: "KR",
	},
	KWT: {
		name: "Kuwait",
		alpha2: "KW",
	},
	KGZ: {
		name: "Kyrgyzstan",
		alpha2: "KG",
	},
	LAO: {
		name: "Lao People's Democratic Republic",
		alpha2: "LA",
	},
	LVA: {
		name: "Latvia",
		alpha2: "LV",
	},
	LBN: {
		name: "Lebanon",
		alpha2: "LB",
	},
	LSO: {
		name: "Lesotho",
		alpha2: "LS",
	},
	LBR: {
		name: "Liberia",
		alpha2: "LR",
	},
	LBY: {
		name: "Libya",
		alpha2: "LY",
	},
	LIE: {
		name: "Liechtenstein",
		alpha2: "LI",
	},
	LTU: {
		name: "Lithuania",
		alpha2: "LT",
	},
	LUX: {
		name: "Luxembourg",
		alpha2: "LU",
	},
	MAC: {
		name: "Macao",
		alpha2: "MO",
	},
	MDG: {
		name: "Madagascar",
		alpha2: "MG",
	},
	MWI: {
		name: "Malawi",
		alpha2: "MW",
	},
	MYS: {
		name: "Malaysia",
		alpha2: "MY",
	},
	MDV: {
		name: "Maldives",
		alpha2: "MV",
	},
	MLI: {
		name: "Mali",
		alpha2: "ML",
	},
	MLT: {
		name: "Malta",
		alpha2: "MT",
	},
	MHL: {
		name: "Marshall Islands",
		alpha2: "MH",
	},
	MTQ: {
		name: "Martinique",
		alpha2: "MQ",
	},
	MRT: {
		name: "Mauritania",
		alpha2: "MR",
	},
	MUS: {
		name: "Mauritius",
		alpha2: "MU",
	},
	MYT: {
		name: "Mayotte",
		alpha2: "YT",
	},
	MEX: {
		name: "Mexico",
		alpha2: "MX",
	},
	FSM: {
		name: "Micronesia (Federated States of)",
		alpha2: "FM",
	},
	MDA: {
		name: "Moldova",
		alpha2: "MD",
	},
	MCO: {
		name: "Monaco",
		alpha2: "MC",
	},
	MNG: {
		name: "Mongolia",
		alpha2: "MN",
	},
	MNE: {
		name: "Montenegro",
		alpha2: "ME",
	},
	MSR: {
		name: "Montserrat",
		alpha2: "MS",
	},
	MAR: {
		name: "Morocco",
		alpha2: "MA",
	},
	MOZ: {
		name: "Mozambique",
		alpha2: "MZ",
	},
	MMR: {
		name: "Myanmar",
		alpha2: "MM",
	},
	NAM: {
		name: "Namibia",
		alpha2: "NA",
	},
	NRU: {
		name: "Nauru",
		alpha2: "NR",
	},
	NPL: {
		name: "Nepal",
		alpha2: "NP",
	},
	NLD: {
		name: "Netherlands",
		alpha2: "NL",
	},
	NCL: {
		name: "New Caledonia",
		alpha2: "NC",
	},
	NZL: {
		name: "New Zealand",
		alpha2: "NZ",
	},
	NIC: {
		name: "Nicaragua",
		alpha2: "NI",
	},
	NER: {
		name: "Niger",
		alpha2: "NE",
	},
	NGA: {
		name: "Nigeria",
		alpha2: "NG",
	},
	NIU: {
		name: "Niue",
		alpha2: "NU",
	},
	NFK: {
		name: "Norfolk Island",
		alpha2: "NF",
	},
	MNP: {
		name: "Northern Mariana Islands",
		alpha2: "MP",
	},
	NOR: {
		name: "Norway",
		alpha2: "NO",
	},
	OMN: {
		name: "Oman",
		alpha2: "OM",
	},
	PAK: {
		name: "Pakistan",
		alpha2: "PK",
	},
	PLW: {
		name: "Palau",
		alpha2: "PW",
	},
	PSE: {
		name: "Palestine, State of",
		alpha2: "PS",
	},
	PAN: {
		name: "Panama",
		alpha2: "PA",
	},
	PNG: {
		name: "Papua New Guinea",
		alpha2: "PG",
	},
	PRY: {
		name: "Paraguay",
		alpha2: "PY",
	},
	PER: {
		name: "Peru",
		alpha2: "PE",
	},
	PHL: {
		name: "Philippines",
		alpha2: "PH",
	},
	PCN: {
		name: "Pitcairn",
		alpha2: "PN",
	},
	POL: {
		name: "Poland",
		alpha2: "PL",
	},
	PRT: {
		name: "Portugal",
		alpha2: "PT",
	},
	PRI: {
		name: "Puerto Rico",
		alpha2: "PR",
	},
	QAT: {
		name: "Qatar",
		alpha2: "QA",
	},
	MKD: {
		name: "Republic of North Macedonia",
		alpha2: "MK",
	},
	ROU: {
		name: "Romania",
		alpha2: "RO",
	},
	RUS: {
		name: "Russian Federation",
		alpha2: "RU",
	},
	RWA: {
		name: "Rwanda",
		alpha2: "RW",
	},
	REU: {
		name: "Réunion",
		alpha2: "RE",
	},
	BLM: {
		name: "Saint Barthélemy",
		alpha2: "BL",
	},
	SHN: {
		name: "Saint Helena, Ascension and Tristan da Cunha",
		alpha2: "SH",
	},
	KNA: {
		name: "Saint Kitts and Nevis",
		alpha2: "KN",
	},
	LCA: {
		name: "Saint Lucia",
		alpha2: "LC",
	},
	MAF: {
		name: "Saint Martin (French part)",
		alpha2: "MF",
	},
	SPM: {
		name: "Saint Pierre and Miquelon",
		alpha2: "PM",
	},
	VCT: {
		name: "Saint Vincent and the Grenadines",
		alpha2: "VC",
	},
	WSM: {
		name: "Samoa",
		alpha2: "WS",
	},
	SMR: {
		name: "San Marino",
		alpha2: "SM",
	},
	STP: {
		name: "Sao Tome and Principe",
		alpha2: "ST",
	},
	SAU: {
		name: "Saudi Arabia",
		alpha2: "SA",
	},
	SEN: {
		name: "Senegal",
		alpha2: "SN",
	},
	SRB: {
		name: "Serbia",
		alpha2: "RS",
	},
	SYC: {
		name: "Seychelles",
		alpha2: "SC",
	},
	SLE: {
		name: "Sierra Leone",
		alpha2: "SL",
	},
	SGP: {
		name: "Singapore",
		alpha2: "SG",
	},
	SXM: {
		name: "Sint Maarten (Dutch part)",
		alpha2: "SX",
	},
	SVK: {
		name: "Slovakia",
		alpha2: "SK",
	},
	SVN: {
		name: "Slovenia",
		alpha2: "SI",
	},
	SLB: {
		name: "Solomon Islands",
		alpha2: "SB",
	},
	SOM: {
		name: "Somalia",
		alpha2: "SO",
	},
	ZAF: {
		name: "South Africa",
		alpha2: "ZA",
	},
	SGS: {
		name: "South Georgia and the South Sandwich Islands",
		alpha2: "GS",
	},
	SSD: {
		name: "South Sudan",
		alpha2: "SS",
	},
	ESP: {
		name: "Spain",
		alpha2: "ES",
	},
	LKA: {
		name: "Sri Lanka",
		alpha2: "LK",
	},
	SDN: {
		name: "Sudan",
		alpha2: "SD",
	},
	SUR: {
		name: "Suriname",
		alpha2: "SR",
	},
	SJM: {
		name: "Svalbard and Jan Mayen",
		alpha2: "SJ",
	},
	SWE: {
		name: "Sweden",
		alpha2: "SE",
	},
	CHE: {
		name: "Switzerland",
		alpha2: "CH",
	},
	SYR: {
		name: "Syrian Arab Republic",
		alpha2: "SY",
	},
	TWN: {
		name: "Taiwan (Province of China)",
		alpha2: "TW",
	},
	TJK: {
		name: "Tajikistan",
		alpha2: "TJ",
	},
	TZA: {
		name: "Tanzania, United Republic of",
		alpha2: "TZ",
	},
	THA: {
		name: "Thailand",
		alpha2: "TH",
	},
	TLS: {
		name: "Timor-Leste",
		alpha2: "TL",
	},
	TGO: {
		name: "Togo",
		alpha2: "TG",
	},
	TKL: {
		name: "Tokelau",
		alpha2: "TK",
	},
	TON: {
		name: "Tonga",
		alpha2: "TO",
	},
	TTO: {
		name: "Trinidad and Tobago",
		alpha2: "TT",
	},
	TUN: {
		name: "Tunisia",
		alpha2: "TN",
	},
	TUR: {
		name: "Turkey",
		alpha2: "TR",
	},
	TKM: {
		name: "Turkmenistan",
		alpha2: "TM",
	},
	TCA: {
		name: "Turks and Caicos Islands",
		alpha2: "TC",
	},
	TUV: {
		name: "Tuvalu",
		alpha2: "TV",
	},
	UGA: {
		name: "Uganda",
		alpha2: "UG",
	},
	UKR: {
		name: "Ukraine",
		alpha2: "UA",
	},
	ARE: {
		name: "United Arab Emirates",
		alpha2: "AE",
	},
	GBR: {
		name: "United Kingdom of Great Britain and Northern Ireland",
		alpha2: "GB",
	},
	UMI: {
		name: "United States Minor Outlying Islands",
		alpha2: "UM",
	},
	USA: {
		name: "United States of America",
		alpha2: "US",
	},
	URY: {
		name: "Uruguay",
		alpha2: "UY",
	},
	UZB: {
		name: "Uzbekistan",
		alpha2: "UZ",
	},
	VUT: {
		name: "Vanuatu",
		alpha2: "VU",
	},
	VEN: {
		name: "Venezuela (Bolivarian Republic of)",
		alpha2: "VE",
	},
	VNM: {
		name: "Viet Nam",
		alpha2: "VN",
	},
	VGB: {
		name: "Virgin Islands (British)",
		alpha2: "VG",
	},
	VIR: {
		name: "Virgin Islands (U.S.)",
		alpha2: "VI",
	},
	WLF: {
		name: "Wallis and Futuna",
		alpha2: "WF",
	},
	ESH: {
		name: "Western Sahara",
		alpha2: "EH",
	},
	YEM: {
		name: "Yemen",
		alpha2: "YE",
	},
	ZMB: {
		name: "Zambia",
		alpha2: "ZM",
	},
	ZWE: {
		name: "Zimbabwe",
		alpha2: "ZW",
	},
	ALA: {
		name: "Åland Islands",
		alpha2: "AX",
	},
};

export const CODES = Object.keys(AVG);

export const GAMES_SORTED = GAMES.sort(
	(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
