import React from 'react';

// Form Field Component
interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  required = false,
  value,
  onChange,
  className = ''
}) => {
  return (
    <div className={`form-group ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

// Select Field Component
interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  placeholder,
  required = false,
  value,
  onChange,
  className = ''
}) => {
  return (
    <div className={`form-group ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required={required}
        value={value}
        onChange={onChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Text Area Component
interface TextAreaFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  placeholder,
  required = false,
  rows = 4,
  value,
  onChange,
  className = ''
}) => {
  return (
    <div className={`form-group ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

// Contact Information Component
export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h5 className="text-lg font-semibold text-blue-900 mb-4">To register, contact:</h5>
      <div className="space-y-2 text-blue-800">
        <p><span className="font-semibold">Africa:</span> +254 759212577</p>
        <p><span className="font-semibold">America:</span> +1 519282-5171</p>
        <p><span className="font-semibold">Europe:</span> +44 7412 5255 22</p>
      </div>
    </div>
  );
};

// Submit Button Component
interface SubmitButtonProps {
  disabled?: boolean;
  className?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ 
  disabled = false, 
  className = '' 
}) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full px-6 py-3 text-white font-medium rounded-md transition-colors ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      } ${className}`}
    >
      Submit Registration
    </button>
  );
};

// Country Options Data
export const countryOptions: SelectOption[] = [
  { value: "1", label: "Afghanistan - 93" },
  { value: "2", label: "Albania - 355" },
  { value: "3", label: "Algeria - 213" },
  { value: "4", label: "American Samoa - 1684" },
  { value: "5", label: "Andorra - 376" },
  { value: "6", label: "Angola - 244" },
  { value: "7", label: "Anguilla - 1264" },
  { value: "8", label: "Antarctica - 0" },
  { value: "9", label: "Antigua and Barbuda - 1268" },
  { value: "10", label: "Argentina - 54" },
  { value: "11", label: "Armenia - 374" },
  { value: "12", label: "Aruba - 297" },
  { value: "13", label: "Australia - 61" },
  { value: "14", label: "Austria - 43" },
  { value: "15", label: "Azerbaijan - 994" },
  { value: "16", label: "Bahamas - 1242" },
  { value: "17", label: "Bahrain - 973" },
  { value: "18", label: "Bangladesh - 880" },
  { value: "19", label: "Barbados - 1246" },
  { value: "20", label: "Belarus - 375" },
  { value: "21", label: "Belgium - 32" },
  { value: "22", label: "Belize - 501" },
  { value: "23", label: "Benin - 229" },
  { value: "24", label: "Bermuda - 1441" },
  { value: "25", label: "Bhutan - 975" },
  { value: "26", label: "Bolivia - 591" },
  { value: "27", label: "Bosnia and Herzegovina - 387" },
  { value: "28", label: "Botswana - 267" },
  { value: "29", label: "Bouvet Island - 0" },
  { value: "30", label: "Brazil - 55" },
  { value: "31", label: "British Indian Ocean Territory - 246" },
  { value: "32", label: "Brunei Darussalam - 673" },
  { value: "33", label: "Bulgaria - 359" },
  { value: "34", label: "Burkina Faso - 226" },
  { value: "35", label: "Burundi - 257" },
  { value: "36", label: "Cambodia - 855" },
  { value: "37", label: "Cameroon - 237" },
  { value: "38", label: "Canada - 1" },
  { value: "39", label: "Cape Verde - 238" },
  { value: "40", label: "Cayman Islands - 1345" },
  { value: "41", label: "Central African Republic - 236" },
  { value: "42", label: "Chad - 235" },
  { value: "43", label: "Chile - 56" },
  { value: "44", label: "China - 86" },
  { value: "45", label: "Christmas Island - 61" },
  { value: "46", label: "Cocos (Keeling) Islands - 672" },
  { value: "47", label: "Colombia - 57" },
  { value: "48", label: "Comoros - 269" },
  { value: "49", label: "Congo - 242" },
  { value: "50", label: "Congo, the Democratic Republic of the - 242" },
  { value: "51", label: "Cook Islands - 682" },
  { value: "52", label: "Costa Rica - 506" },
  { value: "53", label: "Cote D'Ivoire - 225" },
  { value: "54", label: "Croatia - 385" },
  { value: "55", label: "Cuba - 53" },
  { value: "56", label: "Cyprus - 357" },
  { value: "57", label: "Czech Republic - 420" },
  { value: "58", label: "Denmark - 45" },
  { value: "59", label: "Djibouti - 253" },
  { value: "60", label: "Dominica - 1767" },
  { value: "61", label: "Dominican Republic - 1809" },
  { value: "62", label: "Ecuador - 593" },
  { value: "63", label: "Egypt - 20" },
  { value: "64", label: "El Salvador - 503" },
  { value: "65", label: "Equatorial Guinea - 240" },
  { value: "66", label: "Eritrea - 291" },
  { value: "67", label: "Estonia - 372" },
  { value: "68", label: "Ethiopia - 251" },
  { value: "69", label: "Falkland Islands (Malvinas) - 500" },
  { value: "70", label: "Faroe Islands - 298" },
  { value: "71", label: "Fiji - 679" },
  { value: "72", label: "Finland - 358" },
  { value: "73", label: "France - 33" },
  { value: "74", label: "French Guiana - 594" },
  { value: "75", label: "French Polynesia - 689" },
  { value: "76", label: "French Southern Territories - 0" },
  { value: "77", label: "Gabon - 241" },
  { value: "78", label: "Gambia - 220" },
  { value: "79", label: "Georgia - 995" },
  { value: "80", label: "Germany - 49" },
  { value: "81", label: "Ghana - 233" },
  { value: "82", label: "Gibraltar - 350" },
  { value: "83", label: "Greece - 30" },
  { value: "84", label: "Greenland - 299" },
  { value: "85", label: "Grenada - 1473" },
  { value: "86", label: "Guadeloupe - 590" },
  { value: "87", label: "Guam - 1671" },
  { value: "88", label: "Guatemala - 502" },
  { value: "89", label: "Guinea - 224" },
  { value: "90", label: "Guinea-Bissau - 245" },
  { value: "91", label: "Guyana - 592" },
  { value: "92", label: "Haiti - 509" },
  { value: "93", label: "Heard Island and Mcdonald Islands - 0" },
  { value: "94", label: "Holy See (Vatican City State) - 39" },
  { value: "95", label: "Honduras - 504" },
  { value: "96", label: "Hong Kong - 852" },
  { value: "97", label: "Hungary - 36" },
  { value: "98", label: "Iceland - 354" },
  { value: "99", label: "India - 91" },
  { value: "100", label: "Indonesia - 62" },
  { value: "101", label: "Iran, Islamic Republic of - 98" },
  { value: "102", label: "Iraq - 964" },
  { value: "103", label: "Ireland - 353" },
  { value: "104", label: "Israel - 972" },
  { value: "105", label: "Italy - 39" },
  { value: "106", label: "Jamaica - 1876" },
  { value: "107", label: "Japan - 81" },
  { value: "108", label: "Jordan - 962" },
  { value: "109", label: "Kazakhstan - 7" },
  { value: "110", label: "Kenya - 254" },
  { value: "111", label: "Kiribati - 686" },
  { value: "112", label: "Korea, Democratic People's Republic of - 850" },
  { value: "113", label: "Korea, Republic of - 82" },
  { value: "114", label: "Kuwait - 965" },
  { value: "115", label: "Kyrgyzstan - 996" },
  { value: "116", label: "Lao People's Democratic Republic - 856" },
  { value: "117", label: "Latvia - 371" },
  { value: "118", label: "Lebanon - 961" },
  { value: "119", label: "Lesotho - 266" },
  { value: "120", label: "Liberia - 231" },
  { value: "121", label: "Libyan Arab Jamahiriya - 218" },
  { value: "122", label: "Liechtenstein - 423" },
  { value: "123", label: "Lithuania - 370" },
  { value: "124", label: "Luxembourg - 352" },
  { value: "125", label: "Macao - 853" },
  { value: "126", label: "Macedonia, the Former Yugoslav Republic of - 389" },
  { value: "127", label: "Madagascar - 261" },
  { value: "128", label: "Malawi - 265" },
  { value: "129", label: "Malaysia - 60" },
  { value: "130", label: "Maldives - 960" },
  { value: "131", label: "Mali - 223" },
  { value: "132", label: "Malta - 356" },
  { value: "133", label: "Marshall Islands - 692" },
  { value: "134", label: "Martinique - 596" },
  { value: "135", label: "Mauritania - 222" },
  { value: "136", label: "Mauritius - 230" },
  { value: "137", label: "Mayotte - 269" },
  { value: "138", label: "Mexico - 52" },
  { value: "139", label: "Micronesia, Federated States of - 691" },
  { value: "140", label: "Moldova, Republic of - 373" },
  { value: "141", label: "Monaco - 377" },
  { value: "142", label: "Mongolia - 976" },
  { value: "143", label: "Montserrat - 1664" },
  { value: "144", label: "Morocco - 212" },
  { value: "145", label: "Mozambique - 258" },
  { value: "146", label: "Myanmar - 95" },
  { value: "147", label: "Namibia - 264" },
  { value: "148", label: "Nauru - 674" },
  { value: "149", label: "Nepal - 977" },
  { value: "150", label: "Netherlands - 31" },
  { value: "151", label: "Netherlands Antilles - 599" },
  { value: "152", label: "New Caledonia - 687" },
  { value: "153", label: "New Zealand - 64" },
  { value: "154", label: "Nicaragua - 505" },
  { value: "155", label: "Niger - 227" },
  { value: "156", label: "Nigeria - 234" },
  { value: "157", label: "Niue - 683" },
  { value: "158", label: "Norfolk Island - 672" },
  { value: "159", label: "Northern Mariana Islands - 1670" },
  { value: "160", label: "Norway - 47" },
  { value: "161", label: "Oman - 968" },
  { value: "162", label: "Pakistan - 92" },
  { value: "163", label: "Palau - 680" },
  { value: "164", label: "Palestinian Territory, Occupied - 970" },
  { value: "165", label: "Panama - 507" },
  { value: "166", label: "Papua New Guinea - 675" },
  { value: "167", label: "Paraguay - 595" },
  { value: "168", label: "Peru - 51" },
  { value: "169", label: "Philippines - 63" },
  { value: "170", label: "Pitcairn - 0" },
  { value: "171", label: "Poland - 48" },
  { value: "172", label: "Portugal - 351" },
  { value: "173", label: "Puerto Rico - 1787" },
  { value: "174", label: "Qatar - 974" },
  { value: "175", label: "Reunion - 262" },
  { value: "176", label: "Romania - 40" },
  { value: "177", label: "Russian Federation - 70" },
  { value: "178", label: "Rwanda - 250" },
  { value: "179", label: "Saint Helena - 290" },
  { value: "180", label: "Saint Kitts and Nevis - 1869" },
  { value: "181", label: "Saint Lucia - 1758" },
  { value: "182", label: "Saint Pierre and Miquelon - 508" },
  { value: "183", label: "Saint Vincent and the Grenadines - 1784" },
  { value: "184", label: "Samoa - 684" },
  { value: "185", label: "San Marino - 378" },
  { value: "186", label: "Sao Tome and Principe - 239" },
  { value: "187", label: "Saudi Arabia - 966" },
  { value: "188", label: "Senegal - 221" },
  { value: "189", label: "Serbia and Montenegro - 381" },
  { value: "190", label: "Seychelles - 248" },
  { value: "191", label: "Sierra Leone - 232" },
  { value: "192", label: "Singapore - 65" },
  { value: "193", label: "Slovakia - 421" },
  { value: "194", label: "Slovenia - 386" },
  { value: "195", label: "Solomon Islands - 677" },
  { value: "196", label: "Somalia - 252" },
  { value: "197", label: "South Africa - 27" },
  { value: "198", label: "South Georgia and the South Sandwich Islands - 0" },
  { value: "199", label: "Spain - 34" },
  { value: "200", label: "Sri Lanka - 94" },
  { value: "201", label: "Sudan - 249" },
  { value: "202", label: "Suriname - 597" },
  { value: "203", label: "Svalbard and Jan Mayen - 47" },
  { value: "204", label: "Swaziland - 268" },
  { value: "205", label: "Sweden - 46" },
  { value: "206", label: "Switzerland - 41" },
  { value: "207", label: "Syrian Arab Republic - 963" },
  { value: "208", label: "Taiwan, Province of China - 886" },
  { value: "209", label: "Tajikistan - 992" },
  { value: "210", label: "Tanzania, United Republic of - 255" },
  { value: "211", label: "Thailand - 66" },
  { value: "212", label: "Timor-Leste - 670" },
  { value: "213", label: "Togo - 228" },
  { value: "214", label: "Tokelau - 690" },
  { value: "215", label: "Tonga - 676" },
  { value: "216", label: "Trinidad and Tobago - 1868" },
  { value: "217", label: "Tunisia - 216" },
  { value: "218", label: "Turkey - 90" },
  { value: "219", label: "Turkmenistan - 7370" },
  { value: "220", label: "Turks and Caicos Islands - 1649" },
  { value: "221", label: "Tuvalu - 688" },
  { value: "222", label: "Uganda - 256" },
  { value: "223", label: "Ukraine - 380" },
  { value: "224", label: "United Arab Emirates - 971" },
  { value: "225", label: "United Kingdom - 44" },
  { value: "226", label: "United States - 1" },
  { value: "227", label: "United States Minor Outlying Islands - 1" },
  { value: "228", label: "Uruguay - 598" },
  { value: "229", label: "Uzbekistan - 998" },
  { value: "230", label: "Vanuatu - 678" },
  { value: "231", label: "Venezuela - 58" },
  { value: "232", label: "Viet Nam - 84" },
  { value: "233", label: "Virgin Islands, British - 1284" },
  { value: "234", label: "Virgin Islands, U.s. - 1340" },
  { value: "235", label: "Wallis and Futuna - 681" },
  { value: "236", label: "Western Sahara - 212" },
  { value: "237", label: "Yemen - 967" },
  { value: "238", label: "Zambia - 260" },
  { value: "239", label: "Zimbabwe - 263" }
];
