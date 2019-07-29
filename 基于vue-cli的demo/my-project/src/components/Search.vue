<template>
  <div class="page__bd">
    <!--<a href="javascript:;" class="weui-btn weui-btn_primary">点击展现searchBar</a>-->
    <div class="weui-search-bar" :class="{'weui-search-bar_focusing':bool}" id="searchBar">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input
            ref="shuru"
            v-model="message"
            type="search"
            class="weui-search-bar__input"
            id="searchInput"
            placeholder="搜索"
            required
          />
          <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label
          @click="input"
          class="weui-search-bar__label"
          id="searchText"
          style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
        >
          <i class="weui-icon-search"></i>
          <span>搜索</span>
        </label>
      </form>
      <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" @click="input">取消</a>
    </div>
    <div class="weui-cells searchbar-result" id="searchResult" style="display: none;">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd weui-cell_primary">
          <p>实时搜索文本</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd weui-cell_primary">
          <p>实时搜索文本</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd weui-cell_primary">
          <p>实时搜索文本</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd weui-cell_primary">
          <p>实时搜索文本</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            message:'',
            bool:false
        }
    },
    methods:{
        input(){
            this.bool=!this.bool;
            this.$refs.shuru.focus()
        }
    }
}
</script>
