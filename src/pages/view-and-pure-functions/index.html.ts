// metadata
export const version = "0.8.20"
export const title = "View and Pure Functions"
export const description = "An example of view and pure functions in Solidity"

export const keywords = ["view", "pure", "function", "functions"]

export const codes = [
  {
    fileName: "ViewAndPureFunctions.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IFZpZXdBbmRQdXJlIHsKICAgIHVpbnQgcHVibGljIHggPSAxOwoKICAgIC8vIFByb21pc2Ugbm90IHRvIG1vZGlmeSB0aGUgc3RhdGUuCiAgICBmdW5jdGlvbiBhZGRUb1godWludCB5KSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIHggKyB5OwogICAgfQoKICAgIC8vIFByb21pc2Ugbm90IHRvIG1vZGlmeSBvciByZWFkIGZyb20gdGhlIHN0YXRlLgogICAgZnVuY3Rpb24gYWRkKHVpbnQgaSwgdWludCBqKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIGkgKyBqOwogICAgfQp9Cg==",
  },
]

const html = `<p>Getter functions can be declared <code>view</code> or <code>pure</code>.</p>
<p><code>View</code> function declares that no state will be changed.</p>
<p><code>Pure</code> function declares that no state variable will be changed or read.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ViewAndPure</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> x <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;

    <span class="hljs-comment">// Promise not to modify the state.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addToX</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">+</span> y;
    }

    <span class="hljs-comment">// Promise not to modify or read from the state.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> i, <span class="hljs-keyword">uint</span> j</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> i <span class="hljs-operator">+</span> j;
    }
}
</code></pre>`

export default html
