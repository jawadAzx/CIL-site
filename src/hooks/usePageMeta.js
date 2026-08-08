import { useEffect } from 'react';
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from '../seo/config';
import defaultOgImage from '../assets/productpage.jpg';

const DEFAULT_TITLE = SITE_NAME;
const JSONLD_ID = 'seo-jsonld';

const upsertMetaByAttr = (attr, key, content) => {
    let tag = document.querySelector(`meta[${attr}="${key}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
    return tag;
};

const upsertCanonical = (href) => {
    let tag = document.querySelector('link[rel="canonical"]');
    if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', 'canonical');
        document.head.appendChild(tag);
    }
    tag.setAttribute('href', href);
    return tag;
};

const upsertJsonLd = (data) => {
    let tag = document.getElementById(JSONLD_ID);
    if (!data) {
        if (tag) tag.remove();
        return;
    }
    if (!tag) {
        tag = document.createElement('script');
        tag.type = 'application/ld+json';
        tag.id = JSONLD_ID;
        document.head.appendChild(tag);
    }
    tag.textContent = JSON.stringify(data);
};

// title/description/canonical/Open Graph/Twitter Card/JSON-LD for the current route.
// path should be the route path (e.g. "/blogs/some-post") used to build the absolute URL.
const usePageMeta = ({ title, description, path = '/', image, jsonLd } = {}) => {
    useEffect(() => {
        const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
        const pageDescription = description || DEFAULT_DESCRIPTION;
        const pageUrl = `${SITE_URL}${path}`;
        const pageImage = image || defaultOgImage;
        const absoluteImage = pageImage.startsWith('http') ? pageImage : `${SITE_URL}${pageImage}`;

        document.title = pageTitle;
        upsertMetaByAttr('name', 'description', pageDescription);
        upsertCanonical(pageUrl);

        upsertMetaByAttr('property', 'og:site_name', SITE_NAME);
        upsertMetaByAttr('property', 'og:type', 'website');
        upsertMetaByAttr('property', 'og:title', pageTitle);
        upsertMetaByAttr('property', 'og:description', pageDescription);
        upsertMetaByAttr('property', 'og:url', pageUrl);
        upsertMetaByAttr('property', 'og:image', absoluteImage);

        upsertMetaByAttr('name', 'twitter:card', 'summary_large_image');
        upsertMetaByAttr('name', 'twitter:title', pageTitle);
        upsertMetaByAttr('name', 'twitter:description', pageDescription);
        upsertMetaByAttr('name', 'twitter:image', absoluteImage);

        if (jsonLd) upsertJsonLd(jsonLd);

        return () => {
            document.title = DEFAULT_TITLE;
            upsertMetaByAttr('name', 'description', DEFAULT_DESCRIPTION);
            if (jsonLd) upsertJsonLd(null);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, description, path, image, JSON.stringify(jsonLd)]);
};

export default usePageMeta;
