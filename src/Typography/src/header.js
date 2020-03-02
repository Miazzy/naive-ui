import withapp from '../../_mixins/withapp'
import themeable from '../../_mixins/themeable'

export default level => ({
  name: 'NH' + level,
  props: {
    type: {
      type: String,
      default: 'default'
    },
    prefix: {
      type: String,
      default: null
    },
    alignText: {
      type: Boolean,
      default: false
    }
  },
  mixins: [withapp, themeable],
  render (h) {
    const props = this.$props
    const defaultSlot = this.$slots.default
    return h(`h${level}`, {
      class: {
        [`n-h${level}`]: true,
        [`n-${this.syntheticTheme}-theme`]: this.syntheticTheme,
        [`n-h${level}--${props.type}-type`]: props.type,
        [`n-h${level}--prefix-bar`]: props.prefix,
        [`n-h${level}--align-text`]: props.alignText
      }
    }, defaultSlot)
  }
})