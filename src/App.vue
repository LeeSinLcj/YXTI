<template>
  <div class="site-shell">
    <!-- 16Personalities-style Header -->
    <header class="site-header">
      <RouterLink class="brand-lockup" to="/">
        <div class="brand-logo" aria-hidden="true">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-3"></span>
          <span class="dot dot-4"></span>
        </div>
        <span class="brand-name">ACGTI</span>
      </RouterLink>

      <nav class="site-nav">
        <a href="https://github.com/tianxingleo/ACGTI" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 4px; color: #333e49; font-weight: 600; text-decoration: none;" title="去 GitHub 给本仓库点亮 Star ✨">
          <svg style="width: 18px; height: 18px; color: #3ba17c;" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span class="nav-star-text" style="font-size: 15px;">Star 🌟</span>
        </a>
        <RouterLink to="/quiz">开始测试</RouterLink>
        <RouterLink to="/intro">人格类型</RouterLink>
        <RouterLink to="/characters">所有角色</RouterLink>
        <RouterLink to="/about">项目说明</RouterLink>
        <RouterLink to="/result" v-if="$route.path !== '/result'">最近结果</RouterLink>
        <RouterLink to="/quiz" class="button button-primary nav-cta">立即测评</RouterLink>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="site-main">
      <RouterView />
    </main>

    <!-- 16Personalities-style Footer (only show on non-quiz pages) -->
    <footer v-if="$route.path !== '/quiz'" class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">测试入口</h3>
          <RouterLink to="/quiz" class="footer-link">开始 ACGTI 测试</RouterLink>
          <RouterLink to="/result" class="footer-link">查看最近结果</RouterLink>
          <RouterLink to="/intro" class="footer-link">16 型人格说明</RouterLink>
          <RouterLink to="/characters" class="footer-link">所有结果角色</RouterLink>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">项目内容</h3>
          <RouterLink to="/intro" class="footer-link">结果结构说明</RouterLink>
          <RouterLink to="/about" class="footer-link">项目边界</RouterLink>
          <RouterLink to="/about" class="footer-link">更新方向</RouterLink>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">使用提醒</h3>
          <p class="footer-note">结果会直接命中唯一角色，并展示该角色对应的自定义角色代码。</p>
          <p class="footer-note">测试结果仅保存在当前浏览器，不会上传到后端。</p>
          <p class="footer-note">本项目用于娱乐表达，不替代专业评估。</p>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">当前状态</h3>
          <p class="footer-note">纯前端静态站点</p>
          <p class="footer-note">37 道题 / 4 维 MBTI</p>
          <p class="footer-note">8 个原型 / 22 位角色</p>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">开源社区</h3>
          <p class="footer-note">喜欢这个测试？</p>
          <a href="https://github.com/tianxingleo/ACGTI" target="_blank" rel="noopener noreferrer" class="footer-link cta-star" style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600; color: #3ba17c; margin-top: 4px;">
            <svg style="width: 16px; height: 16px;" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            去 GitHub Star ✨
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copyright">© 2026 ACGTI Project</p>
        <div class="footer-social">
          <RouterLink to="/" title="首页">首页</RouterLink>
          <RouterLink to="/quiz" title="测试">测试</RouterLink>
          <RouterLink to="/intro" title="类型">类型</RouterLink>
          <RouterLink to="/characters" title="角色">角色</RouterLink>
          <RouterLink to="/about" title="说明">说明</RouterLink>
        </div>
      </div>
    </footer>
  </div>
</template>
