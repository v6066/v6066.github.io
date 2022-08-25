import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as r,a as e,b as s,e as t,d as l,r as a}from"./app.b5f5ac91.js";const c={},d=e("p",null,"LearnData \u4F7F\u7528\u7684\u662F Waline \u8BC4\u8BBA\u63D2\u4EF6\uFF0C\u90E8\u7F72\u7B80\u5355\uFF0C\u6709\u540E\u7AEF\u7BA1\u7406\u3002\u8BC4\u8BBA\u63D2\u4EF6\u63A8\u8350\u6B21\u5E8F\u4E3A Waline > Valine > giscus > Gitalk > Gitter\u3002",-1),h=e("h2",{id:"\u8BC4\u8BBA\u63D2\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8BC4\u8BBA\u63D2\u4EF6","aria-hidden":"true"},"#"),t(" \u8BC4\u8BBA\u63D2\u4EF6")],-1),_={href:"https://waline.js.org/guide/get-started.html",target:"_blank",rel:"noopener noreferrer"},u=t("Waline"),p=t("\uFF1A\u57FA\u4E8E Valine \u884D\u751F\u7684\u7B80\u6D01\u3001\u5B89\u5168\u7684\u8BC4\u8BBA\u7CFB\u7EDF\uFF0C\u90E8\u7F72\u5230 Vercel\uFF0C\u53EF\u533F\u540D\u4E92\u52A8\uFF0C\u5BFC\u51FA\u8BC4\u8BBA\u5185\u5BB9\u3002"),g={href:"https://github.com/xCss/Valine",target:"_blank",rel:"noopener noreferrer"},f=t("Valine"),b=t("\uFF1A\u5FEB\u901F\u3001\u7B80\u6D01\u4E14\u9AD8\u6548\u7684\u65E0\u540E\u7AEF\u8BC4\u8BBA\u7CFB\u7EDF\uFF0C\u53EF\u533F\u540D\u4E92\u52A8\u3002"),m={href:"https://github.com/giscus/giscus",target:"_blank",rel:"noopener noreferrer"},v=t("giscus"),k=t("\uFF1A\u57FA\u4E8E github discussion\uFF0C\u8FD1\u4F3C\u4E8E\u8BBA\u575B\u3002\u67E5\u770B "),x={href:"https://blog.csdn.net/duninet/article/details/125280107",target:"_blank",rel:"noopener noreferrer"},G=t("\u914D\u7F6E\u65B9\u6CD5"),q=t("\u3002"),y={href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"},V=t("Gitalk"),L=t("\uFF1A\u57FA\u4E8E github commit\uFF0C\u9700\u914D\u7F6E\u72EC\u7ACB\u5E93\u7528\u4E8E\u5B58\u50A8\u8BC4\u8BBA\u3002"),C={href:"https://gitter.im/",target:"_blank",rel:"noopener noreferrer"},H=t("Gitter"),N=t("\uFF1A\u516C\u5171\u804A\u5929\u5BA4\uFF0C\u6837\u4F8B\u5982\uFF1A"),w={href:"https://boardgame.io/documentation/#/",target:"_blank",rel:"noopener noreferrer"},E=t("boardgame"),I=t("\uFF0C"),M={href:"https://itchef.github.io/regauge/#/",target:"_blank",rel:"noopener noreferrer"},T=t("regauge"),j=t("\u3002"),B=l(`<h2 id="gitalk" tabindex="-1"><a class="header-anchor" href="#gitalk" aria-hidden="true">#</a> Gitalk</h2><p>Gitalk \u662F\u8F7B\u91CF\u5316\u7684\u8BC4\u8BBA\u7EC4\u4EF6\uFF0C\u7528\u6237\u5FC5\u987B\u767B\u5F55 github \u624D\u80FD\u8BC4\u8BBA\uFF0C\u9002\u5408\u9879\u76EE\u7C7B\u4F7F\u7528\u3002</p><p><code>https://github.com/settings/developers</code> \u9875\u9762\u7BA1\u7406\u5DF2\u5EFA\u7684\u5E94\u7528\uFF0C\u83B7\u53D6 Client ID \u548C Client secrets\uFF0C\u4FEE\u6539\u5E94\u7528\u94FE\u63A5\u3002<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>\u5C06\u4EE5\u4E0B\u4EE3\u7801\u653E\u5165 docsify \u9875\u9762\u4E2D\uFF0C\u5373\u53EF\u542F\u52A8 Gitalk\uFF1A</p><div class="language-HTML ext-HTML line-numbers-mode"><pre class="language-HTML"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.css&quot;&gt;

&lt;script src=&quot;https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/docsify/4.12.2/plugins/gitalk.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    /* \u4F7F\u7528\u4E0B\u9762\u7684 Javascript \u4EE3\u7801\u751F\u6210 gitalk \u63D2\u4EF6 */
    const gitalk = new Gitalk({
        clientID: &#39;2f3da234d27ed9a7c290&#39;,
        clientSecret: &#39;d64c45594858477fff0c234c3ed3947a53b0a9ac&#39;,
        repo: &#39;docsifytalk&#39;,        //\u4ED3\u5E93\u540D\u79F0 (GitHub repo)
        owner: &#39;rockbenben&#39;,        //\u4ED3\u5E93\u62E5\u6709\u8005 (GitHub repo owner)
        admin: [&#39;rockbenben&#39;],      //\u4ED3\u5E93\u6240\u6709\u8005\u548C\u534F\u4F5C\u8005\u3002\uFF08\u5BF9\u6B64\u5B58\u50A8\u5E93\u5177\u6709\u5199\u8BBF\u95EE\u6743\u7684\u7528\u6237\uFF09
        // id: location.pathname,   // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gitalk \u7F3A\u70B9\uFF1A</p><ul><li>\u6BCF\u6B21\u6709\u65B0\u9875\u9762\u65F6\uFF0C\u90FD\u9700\u8981\u767B\u5F55 github \u521D\u59CB\u5316\u8BC4\u8BBA\u533A\u3002</li><li>\u57DF\u540D\u4E0D\u80FD\u6539\u53D8\uFF0CHomepage URL \u548C Authorization callback URL \u9700\u4E0E\u4F60\u7684 Gitalk \u9875\u9762\u4E00\u81F4\uFF0C\u5426\u5219\u9875\u9762\u4F1A\u62A5\u9519\uFF0C\u63D0\u793A\u521D\u59CB\u5316\uFF0C\u65E0\u6CD5\u767B\u5F55 github\u3002</li></ul><hr class="footnotes-sep">`,8),D={class:"footnotes"},W={class:"footnotes-list"},F={id:"footnote1",class:"footnote-item"},R={href:"https://blog.csdn.net/qq_39052513/article/details/108291272",target:"_blank",rel:"noopener noreferrer"},S=t("\u8D85 Nice \u7684\u8BC4\u8BBA\u7EC4\u4EF6 \u2014\u2014 Gitalk"),U=t(),z=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1);function A(J,K){const n=a("ExternalLinkIcon");return o(),r("div",null,[d,h,e("ul",null,[e("li",null,[e("a",_,[u,s(n)]),p]),e("li",null,[e("a",g,[f,s(n)]),b]),e("li",null,[e("a",m,[v,s(n)]),k,e("a",x,[G,s(n)]),q]),e("li",null,[e("a",y,[V,s(n)]),L]),e("li",null,[e("a",C,[H,s(n)]),N,e("a",w,[E,s(n)]),I,e("a",M,[T,s(n)]),j])]),B,e("section",D,[e("ol",W,[e("li",F,[e("p",null,[e("a",R,[S,s(n)]),U,z])])])])])}var Q=i(c,[["render",A],["__file","Comments.html.vue"]]);export{Q as default};
