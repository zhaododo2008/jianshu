<template>
  <div>
    <section id="layout-default">
      <div class="header-wrap">
        <header id="jianshu-header" class="header-normal">
          <div class="logo-wrap">
            <img src="../../static/img/nav-logo.faf216af.png" alt="logo" class="logo">
            <span class="slogan">创作你的创作</span>
          </div>
          <div class="download">
            免费下载<i class="iconfont ic-link"></i>
          </div>
        </header>
        <div class="header-shim"></div>
      </div>
      <div id="user-show" class="main-view">
        <div id="user-info">
          <div class="background"><img
            src="//cdn2.jianshu.io/asimov/src/assets/image/img-user-background-image-default.a89eb3a3.jpg"></div>
          <div class="avatar">
            <img src="https://upload.jianshu.io/users/upload_avatars/6126137/e83c6b36-be36-4308-8ff4-41c32fc26705?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180">
          </div>
          <div class="author-info">
            <div class="name">槽值</div>
            <div class="follow-meta"><span>3</span>
              关注
              <span class="last">8.4万</span>
              粉丝
              <span class="last">4244.813</span>
              简书钻
            </div>
          </div>
          <a href="http://www.jianshu.com/p/d1d89ed69098" class="badge-icon">
            <img src="//upload.jianshu.io/user_badge/94d76265-aab1-4559-8d12-1da9f6be21ce" width="20" height="20">
            观察优秀作者
          </a>
          <a href="http://www.jianshu.com/p/ec82d7d9a7e3" class="badge-icon">
            <img src="//cdn2.jianshu.io/asimov/src/assets/image/badges/verified_account.b34d8d3f.png" width="20" height="20">
            认证机构
          </a>
          <div class="intro">
            网易原创栏目《槽值》，微信公众号槽值（id：caozhi163），微博@槽值。情感八卦，槽值爆表，暖
            <i class="iconfont ic-show"></i>
          </div>
          <div class="author-meta">
            写了126.1万字，获得了13.4万个喜欢
          </div>
          <div class="btn-group">
            <button class="follow-btn user-follow-button follow"><i class="iconfont ic-follow"></i>
              关注
            </button>
            <a href="/mobile/users/ad73e614982f/rewards/new" class="btn reward-btn">赞赏作者</a>
          </div>
        </div>
        <hr>
        <ul class="flow-list-sort">
          <li class="active">
            最新发布
          </li>
          <li>
            最新评论
          </li>
          <li>
            热门
          </li>
        </ul>
        <div class="flow-list-container">
          <div class="split-line"></div>
          <ul class="flow-list-ul">
            <li class="note-flow have-img">
              <a href="/p/2b6ca8c42ce1" class="content">
        <span class="wrap-img inline-3MDdF_0" style="width: 80px; height: 80px;">
          <img
            src="https://upload-images.jianshu.io/upload_images/6126137-629b406384269a43?imageMogr2/auto-orient/strip|imageView2/1/w/160/h/160/format/webp">
        </span>
                <div class="summary">
                  <h6 class="title">一个人没出息的九大表现，现在知道还不算晚</h6>
                  <p class="abstract">十岁，别人竞选班长，积极热心，和同学打成一片；而你坐在角落里，默默从不发言。 二十岁，别人开始认真规划将来；而你读...</p>
                </div>
              </a>
              <div class="meta oneline">
                <i class="iconfont ic-icon_jewel"></i>
                <span>2.481</span>
                <span>
          <i class="iconfont ic-list-comments"></i>530
        </span>
                <span>
          <i class="iconfont ic-list-like"></i>7.4k
        </span>
                <span>
          <i class="iconfont ic-list-money"></i>27
        </span>
              </div>
            </li>
          </ul>
          <div>
            <div class="flow-list-placeholder-load-more">
              加载更多
              <i class="iconfont ic-show"></i>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div class="footer-wrap">
          <hr>
          <div class="panel">
            <button class="item">登录</button>
            <span class="line">|</span>
            <button class="item border">打开App</button>
            <span class="line">|</span>
            <a href="/" class="item router-link-active">热门文章</a>
          </div>
          <a href="/app?utm_medium=app-download-bottom&amp;utm_source=mobile" class="download">
            <i class="iconfont ic-appdownload"></i>
            下载简书，创作你的创作
          </a>
        </div>
      </footer>

    </section>
  </div>
</template>

<script>
  export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped src="../../static/css/main.css">
</style>
