import removeAccents from 'remove-accents';
import unidecode from 'unidecode';
import latinize from 'latinize';
import unorm from 'unorm';


function sanitize<T = string>(content: string, fallback?: T): string | T {
  return unidecode(unorm.nfkc(latinize(removeAccents(content)))).replace(/\[\?\]/g, '') || fallback || '';
}

export default sanitize;