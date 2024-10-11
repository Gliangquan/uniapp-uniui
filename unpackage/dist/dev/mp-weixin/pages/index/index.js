"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello uniapp",
      pictures: [
        { id: "1", url: "../../static/logo.png" },
        { id: "2", url: "../../static/logo.png" },
        { id: "3", url: "../../static/logo.png" }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    onPreViewImg(url) {
      common_vendor.index.previewImage({
        urls: this.pictures.map((v) => v.url),
        current: url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.pictures, (item, k0, i0) => {
      return {
        a: common_vendor.o(($event) => $options.onPreViewImg(item.url), item.id),
        b: item.url,
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
