// Device language preference applies only until the visitor chooses a language.
export function initialLanguage(languages, saved) {
 if (saved === 'en' || saved === 'zh') return saved;
 return languages.some(code => /^zh(?:-|_|$)/i.test(code)) ? 'zh' : 'en';
}
