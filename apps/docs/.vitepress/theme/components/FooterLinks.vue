<script setup>
import { withBase } from 'vitepress';
</script>

<template>
  <footer class="footer-links">
    <div class="footer-links__container">
      <div class="footer-links__nav">
        <div class="footer-links__col">
          <div class="footer-links__col-header">
            <a
              href="https://localazy.com"
              target="_blank"
              class="logo-link"
            >
              <img
                :src="withBase('/theme/localazy-logo-white.svg')"
                alt="Localazy"
                width="150"
              />
            </a>
          </div>
          <ul>
            <li>
              <a
                href="https://localazy.com"
                target="_blank"
              >
                Why Localazy?
              </a>
            </li>
            <li>
              <a
                href="https://localazy.com/book-demo"
                target="_blank"
              >
                Book a demo
              </a>
            </li>
            <li>
              <a
                href="https://localazy.com/my/dashboard"
                target="_blank"
              >
                Go to your Dashboard
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-links__col">
          <div class="footer-links__col-header">
            <strong>Resources</strong>
          </div>
          <ul>
            <li>
              <a
                href="https://localazy.com/docs/cdn/cdn-introduction"
                target="_blank"
              >
                CDN documentation
              </a>
            </li>
            <li>
              <a
                href="https://localazy.com/tags/cdn"
                target="_blank"
              >
                CDN blog posts
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-links__col">
          <div class="footer-links__col-header">
            <strong>Support</strong>
          </div>
          <ul>
            <li>
              <a
                href="https://localazy.com"
                target="_blank"
              >
                Intercom chat
              </a>
            </li>
            <li>
              <a
                href="https://github.com/localazy/cdn-client/issues"
                target="_blank"
              >
                GitHub issues
              </a>
            </li>
            <li>
              <a
                href="https://discuss.localazy.com"
                target="_blank"
              >
                Discussion forum
              </a>
            </li>
            <li>
              <a
                href="mailto:team@localazy.com"
                target="_blank"
              >
                team@localazy.com
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-links__col">
          <div class="footer-links__col-header">
            <strong>NPM packages</strong>
          </div>
          <ul>
            <li>
              <a
                href="https://www.npmjs.com/package/@localazy/cli"
                target="_blank"
              >
                @localazy/cli
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@localazy/api-client"
                target="_blank"
              >
                @localazy/api-client
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@localazy/languages"
                target="_blank"
              >
                @localazy/languages
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@localazy/strapi-plugin"
                target="_blank"
              >
                @localazy/strapi-plugin
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@localazy/directus-extension-localazy"
                target="_blank"
              >
                @localazy/directus-extension-localazy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-links__social">
        <a
          href="https://localazy.com/feed.xml"
          target="_blank"
          class="social-link"
        >
          <span class="vpi-social-rss" />
        </a>
        <a
          href="https://www.facebook.com/localazy/"
          target="_blank"
          class="social-link"
        >
          <span class="vpi-social-facebook" />
        </a>
        <a
          href="https://github.com/localazy"
          target="_blank"
          class="social-link"
        >
          <span class="vpi-social-github" />
        </a>
        <a
          href="https://twitter.com/localazy"
          target="_blank"
          class="social-link"
        >
          <span class="vpi-social-twitter" />
        </a>
        <a
          href="https://www.linkedin.com/company/37836599/"
          target="_blank"
          class="social-link"
        >
          <span class="vpi-social-linkedin" />
        </a>
        <a
          href="https://discuss.localazy.com/"
          target="_blank"
          class="social-link"
        >
          <span class="vpi-social-discuss" />
        </a>
      </div>

      <div class="footer-links__licence">
        © {{ new Date().getFullYear() }} Localazy. Released under the
        <a
          href="https://github.com/localazy/cdn-client/blob/main/LICENSE"
          target="_blank"
        >
          MIT license
        </a>
        .
      </div>
    </div>
  </footer>
</template>

<style>
:root {
  --transition: 0.37s ease;
}

.footer-links {
  background: var(--vp-c-brand-2);
  z-index: 40;
  display: flex;
  justify-content: center;
  color: var(--vp-c-white);
  text-align: center;
}

.footer-links a {
  text-decoration: 1px underline transparent;
  transition: text-decoration var(--transition);
  display: inline-flex;
  align-items: center;
}

.footer-links a:hover {
  text-decoration: 1px underline var(--vp-c-white);
}

@media (min-width: 640px) {
  .footer-links {
    text-align: left;
  }
}

.footer-links__container {
  max-width: var(--vp-layout-max-width);
  width: 100%;
  padding: 20px 48px;
}

@media (min-width: 960px) {
  .footer-links__container {
    padding: 20px 30px;
  }
}

.footer-links__nav {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: 640px) {
  .footer-links__nav {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 960px) {
  .footer-links__nav {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.footer-links__nav strong {
  font-size: 14px;
  font-weight: 300;
}

.footer-links__nav li {
  padding: 8px 0;
}

.footer-links__nav .logo-link,
.footer-links__nav .logo-link img {
  display: inline-flex;
}

.footer-links__col {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

.footer-links__col-header {
  margin-bottom: 12px;
  display: flex;
  min-height: 28px;
  justify-content: center;
}

@media (min-width: 640px) {
  .footer-links__col-header {
    justify-content: start;
  }
}

.footer-links__social {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}

.footer-links__social img {
  height: 24px;
  width: 24px;
  color: var(--vp-c-gray-1);
}

.footer-links__licence {
  text-align: center;
  font-weight: 300;
  font-size: 14px;
}

.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  color: var(--vp-c-white);
  transition: color var(--transition);
}

.social-link:hover {
  transition: opacity var(--transition);
  opacity: 0.37;
}

.social-link > :deep([class^='vpi-social-']) {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.vpi-social-rss {
  --icon: url('data:image/svg+xml,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve"><path d="M19,0H5C2.2,0,0,2.2,0,5v14c0,2.8,2.2,5,5,5h14c2.8,0,5-2.2,5-5V5C24,2.2,21.8,0,19,0z M6.4,20c-1.2,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3S7.6,20,6.4,20z M11.8,20c0-4.3-3.4-7.7-7.7-7.7V9.1 C10.1,9.1,15,14,15,20H11.8z M17.3,20c0-7.3-5.9-13.1-13.1-13.1V3.6c9.1,0,16.4,7.3,16.4,16.4H17.3z" /></svg>');
}

.vpi-social-facebook {
  --icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>');
}

.vpi-social-github {
  --icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>');
}

.vpi-social-twitter {
  --icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>');
}

.vpi-social-linkedin {
  --icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>');
}

.vpi-social-discuss {
  --icon: url('data:image/svg+xml,<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9.077 0C4.149 0 0 3.96 0 8.843V18L9.075 17.99C14.003 17.99 18 13.88 18 8.997C18 4.113 14 0 9.077 0ZM12.997 12.859C12.1973 13.6172 11.1906 14.121 10.1043 14.3067C9.01806 14.4923 7.90115 14.3515 6.895 13.902L3.3 14.707L4.301 11.515C3.84431 10.6816 3.61413 9.74297 3.63344 8.79282C3.65274 7.84267 3.92084 6.91419 4.411 6.1C4.9056 5.28214 5.60303 4.60586 6.43574 4.13668C7.26845 3.66751 8.20821 3.42133 9.164 3.422V3.423H9.17C10.2701 3.42102 11.3459 3.74705 12.2599 4.35944C13.1738 4.97182 13.8844 5.84276 14.301 6.861C14.7124 7.8759 14.808 8.99129 14.5753 10.0614C14.3427 11.1315 13.7926 12.1065 12.997 12.859Z" /></svg>');
}

.footer-links__licence a[target='_blank']::after,
.footer-links__col ul a[target='_blank']::after {
  content: '';
  display: inline-flex;
  margin-left: var(--external-link-margin-left);
  margin-right: var(--external-link-margin-right);
  width: 12px;
  height: 12px;
  min-height: 12px;
  min-width: 12px;
  background: currentColor;
  -webkit-mask-image: var(--external-link-icon);
  mask-image: var(--external-link-icon);
  transition: opacity var(--transition);
}

.footer-links__licence a[target='_blank']::after {
  opacity: 0.37;
}
.footer-links__col ul a[target='_blank']::after {
  opacity: 0;
}

.footer-links__licence a[target='_blank']:hover::after,
.footer-links__col ul a[target='_blank']:hover::after {
  opacity: 1;
}
</style>
