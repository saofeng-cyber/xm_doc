import { useData, withBase } from "vitepress";

export const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof document !== 'undefined';
export const normalize = (path: string) => {
    return decodeURI(path).replace(HASH_RE, '').replace(EXT_RE, '');
}

export const isActive = (currentPath: string, matchPath: string, asRegex = false) => {
    if (matchPath === undefined) {
        return false;
    }
    currentPath = normalize(`/${currentPath}`);
    if (asRegex) {
        return new RegExp(matchPath).test(currentPath);
    }
    if (normalize(matchPath) !== currentPath) {
        return false;
    }
    const hashMatch = matchPath.match(HASH_RE);
    if (hashMatch) {
        return (inBrowser ? location.hash : '') === hashMatch[0];
    }
    return true;
}

export function isExternal(path: string) {
    return EXTERNAL_URL_RE.test(path);
}

const KNOWN_EXTENSIONS = new Set(('3g2,3gp,7z,aac,abw,ai,aif,aifc,aiff,arc,asf,asr,asx,au,avi,avif,axs,' +
    'azw,bin,bmp,bz,bz2,c,cda,cer,class,crl,crt,csh,css,csv,dcr,der,dll,doc,' +
    'docx,eot,eps,epub,exe,gif,gtar,gz,gzip,ico,ics,ief,jar,jpe,jpeg,jpg,js,' +
    'json,jsonld,latex,m3u,man,mdb,mht,mhtml,mid,midi,mjs,mov,mp2,mp3,mp4,' +
    'mpa,mpe,mpeg,mpg,mpkg,mpp,odp,ods,odt,oga,ogv,ogx,opus,otf,p10,p12,p7b,' +
    'p7c,p7m,p7r,p7s,pbm,pdf,pfx,php,png,ppt,pptx,ps,pub,qt,rar,roff,rtf,' +
    'rtx,ser,sh,spc,svg,swf,t,tar,tcl,tex,texi,texinfo,tgz,tif,tiff,tr,ts,' +
    'tsv,ttf,txt,ua,viv,vivo,vsd,wav,weba,webm,webp,woff,woff2,xbm,xhtml,' +
    'xls,xlsx,xml,xul,zip').split(','));

export function treatAsHtml(filename: string) {
    const ext = filename.split('.').pop();
    return ext == null || !KNOWN_EXTENSIONS.has(ext.toLowerCase());
}

export function normalizeLink(url: string) {
    const { pathname, search, hash, protocol } = new URL(url, 'http://a.com');
    if (isExternal(url) ||
        url.startsWith('#') ||
        !protocol.startsWith('http') ||
        !treatAsHtml(pathname))
        return url;
    const { site } = useData();
    const normalizedPath = pathname.endsWith('/') || pathname.endsWith('.html')
        ? url
        : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? '' : '.html')}${search}${hash}`);
    return withBase(normalizedPath);
}

export const fomatTime = (time: string) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${year}-${month}-${day} ${hour}:${minute}`;
}