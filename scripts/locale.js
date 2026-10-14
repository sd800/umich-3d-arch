// Device locale never overrides the English default or a manual choice.
export function initialLanguage(languages, saved) {
 return saved === 'en' || saved === 'zh' ? saved : 'en';
}
