/**
 * vuetify-lazy-image v1.2.4
 * (c) 2019 Shravan Shandilya <s.shravan95@gmail.com>
 * @license MIT
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.VuetifyLazyImage = {})));
}(this, (function (exports) { 'use strict';

var VuetifyLazyImageComponent = {
  props: {
    src: {
      type: String,
      required: true
    },
    srcPlaceholder: {
      type: String,
      default: ""
    },
    aspectRatio: {
      type: Number,
      default: 1.777
    }
  },
  data: function () { return ({
    observer: null,
    intersected: false,
    loaded: false
  }); },
  computed: {
    srcImage: function srcImage() {
      return this.intersected ? this.src : this.srcPlaceholder;
    }
  },
  methods: {
    load: function load() {
      if (this.$el.getAttribute("src") !== this.srcPlaceholder) {
        this.loaded = true;
        this.$emit("load");
      }
    }
  },
  render: function render(h) {
    return h("v-img", {
      attrs: {
        src: this.srcImage,
        "aspect-ratio": this.aspectRatio
      },
      class: {
        "vuetify-lazy-image": true,
        "vuetify-lazy-image-loaded": this.loaded
      },
      on: { load: this.load }
    });
  },
  mounted: function mounted() {
    var this$1 = this;

    this.observer = new IntersectionObserver(function (entries) {
      var image = entries[0];
      if (image.isIntersecting) {
        this$1.intersected = true;
        this$1.observer.disconnect();
        this$1.$emit("intersect");
      }
    }, {});

    this.observer.observe(this.$el);
  },
  destroyed: function destroyed() {
    this.observer.disconnect();
  }
};

var VuetifyLazyImagePlugin = {
  install: function (Vue, opts) {
    Vue.component("VuetifyLazyImage", VuetifyLazyImageComponent);
  }
};

exports['default'] = VuetifyLazyImageComponent;
exports.VuetifyLazyImagePlugin = VuetifyLazyImagePlugin;

Object.defineProperty(exports, '__esModule', { value: true });

})));
