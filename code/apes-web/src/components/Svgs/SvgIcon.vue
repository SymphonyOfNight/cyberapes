<template>
    <i class="anticon" >
        <svg aria-hidden="true" :width="size" :height="size" :class="svgClass" :style="styles">
            <use :xlink:href="iconName"/>
        </svg>
    </i>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    type: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    size: {
        type: String,
        default: '16px'
    },
    styles: {
        type: Object,
        default: null
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.type}`
    },
    svgClass () {
      if (this.className) {
        return this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style>
.svg-icon {
  overflow: hidden;
  fill: currentColor
}
</style>