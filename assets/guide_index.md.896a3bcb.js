import{_ as s,o as n,b as a,e as t}from"./app.bb0da134.js";const g='{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Setup","slug":"setup"}],"relativePath":"guide/index.md"}',e={},p=t(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><p>You may add the usage of the library here.</p><blockquote><p>If you remove Component B and the <a href="https://www.primefaces.org/" target="_blank" rel="noopener noreferrer">PrimeFaces</a> (PrimeVue, PrimeIcons and PrimeFlex) dependencies from your library, the setup related to PrimeFaces won&#39;t be needed from the guide below.</p></blockquote><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><p>This setup assumes your client app is created with Vite and vue-ts template, and you use &#39;npm link&#39; to link to <code>mavis-ui</code> locally.</p><p>In your <code>package.json</code>, you shall have the dependencies compatible with the following:</p><div class="language-json"><pre><code><span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;primeflex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.1.2&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;primeicons&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;primevue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.11.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.25&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>In your <code>vite.config.ts</code>, you shall configure to dedupe <code>vue</code>:</p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
		dedupe<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>In your <code>main.ts</code>, you shall import the libraries and CSS:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;primevue/resources/themes/saga-blue/theme.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;primevue/resources/primevue.min.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;primeicons/primeicons.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;primeflex/primeflex.css&#39;</span>

<span class="token keyword">import</span> <span class="token string">&#39;mavis-ui/dist/style.css&#39;</span>
</code></pre></div><p>Import components from this library in your own component:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mavis-ui&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,13),o=[p];function c(r,i,u,l,d,k){return n(),a("div",null,o)}var h=s(e,[["render",c]]);export{g as __pageData,h as default};
