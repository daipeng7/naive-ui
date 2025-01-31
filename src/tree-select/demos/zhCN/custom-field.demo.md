# 自定义 key 和 label 的字段

后端会传来各种各样的数据。

```html
<n-tree-select
  :options="options"
  default-value="Drive My Car"
  label-field="whateverLabel"
  key-field="whateverKey"
/>
```

```js
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {
      options: [
        {
          whateverLabel: 'Rubber Soul',
          whateverKey: 'Rubber Soul',
          children: [
            {
              whateverLabel:
                "Everybody's Got Something to Hide Except Me and My Monkey",
              whateverKey:
                "Everybody's Got Something to Hide Except Me and My Monkey"
            },
            {
              whateverLabel: 'Drive My Car',
              whateverKey: 'Drive My Car',
              disabled: true
            },
            {
              whateverLabel: 'Norwegian Wood',
              whateverKey: 'Norwegian Wood'
            },
            {
              whateverLabel: "You Won't See",
              whateverKey: "You Won't See",
              disabled: true
            },
            {
              whateverLabel: 'Nowhere Man',
              whateverKey: 'Nowhere Man'
            },
            {
              whateverLabel: 'Think For Yourself',
              whateverKey: 'Think For Yourself'
            },
            {
              whateverLabel: 'The Word',
              whateverKey: 'The Word'
            },
            {
              whateverLabel: 'Michelle',
              whateverKey: 'Michelle',
              disabled: true
            },
            {
              whateverLabel: 'What goes on',
              whateverKey: 'What goes on'
            },
            {
              whateverLabel: 'Girl',
              whateverKey: 'Girl'
            },
            {
              whateverLabel: "I'm looking through you",
              whateverKey: "I'm looking through you"
            },
            {
              whateverLabel: 'In My Life',
              whateverKey: 'In My Life'
            },
            {
              whateverLabel: 'Wait',
              whateverKey: 'Wait'
            }
          ]
        },
        {
          whateverLabel: 'Let It Be',
          whateverKey: 'Let It Be Album',
          children: [
            {
              whateverLabel: 'Two Of Us',
              whateverKey: 'Two Of Us'
            },
            {
              whateverLabel: 'Dig A Pony',
              whateverKey: 'Dig A Pony'
            },
            {
              whateverLabel: 'Across The Universe',
              whateverKey: 'Across The Universe'
            },
            {
              whateverLabel: 'I Me Mine',
              whateverKey: 'I Me Mine'
            },
            {
              whateverLabel: 'Dig It',
              whateverKey: 'Dig It'
            },
            {
              whateverLabel: 'Let It Be',
              whateverKey: 'Let It Be'
            },
            {
              whateverLabel: 'Maggie Mae',
              whateverKey: 'Maggie Mae'
            },
            {
              whateverLabel: "I've Got A Feeling",
              whateverKey: "I've Got A Feeling"
            },
            {
              whateverLabel: 'One After 909',
              whateverKey: 'One After 909'
            },
            {
              whateverLabel: 'The Long And Winding Road',
              whateverKey: 'The Long And Winding Road'
            },
            {
              whateverLabel: 'For You Blue',
              whateverKey: 'For You Blue'
            },
            {
              whateverLabel: 'Get Back',
              whateverKey: 'Get Back'
            }
          ]
        }
      ]
    }
  }
})
```
