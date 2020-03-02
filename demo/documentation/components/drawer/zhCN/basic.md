# 基础用法
```html
<n-button-group>
  <n-button @click="activate('top')">上</n-button>
  <n-button @click="activate('right')">右</n-button>
  <n-button @click="activate('bottom')">下</n-button>
  <n-button @click="activate('left')">左</n-button>
</n-button-group>
<n-drawer v-model="active" :width="502" :placement="placement" :z-index="3002">
  <n-h1>斯通纳</n-h1>
  <n-p>《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。</n-p>
</n-drawer>
```
```js
export default {
  data () {
    return {
      active: false,
      placement: 'right'
    }
  },
  methods: {
    activate (placement) {
      this.active = true
      this.placement = placement
    }
  }
}
```