<script setup lang="ts">
const rectangles = ref([
  {
    color: 'red',
    isVisible: true,
    position: {
      // random position on full screen
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`
    }
  },
  {
    color: 'orange',
    isVisible: false,
    position: {
      // random position on full screen
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`
    }
  },
  {
    color: 'yellow',
    isVisible: false,
    position: {
      // random position on full screen
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`
    }
  },
  {
    color: 'green',
    isVisible: false,
    position: {
      // random position on full screen
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`
    }
  },
  {
    color: 'blue',
    isVisible: false,
    position: {
      // random position on full screen
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`
    }
  },
  {
    color: 'purple',
    isVisible: false,
    position: {
      // random position on full screen
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`
    }
  }
])

</script>
<template>
  <div  v-show="rect.isVisible" @click="() => {
    rect.isVisible = false;
    const nextRect = rectangles[index + 1];
    if (nextRect) {
      nextRect.isVisible = true;
    }
  }" v-for="(rect, index) in rectangles" :style="{backgroundColor: rect.color, position: 'absolute', top: rect.position.top, left: rect.position.left}" class="rectangle gelatine" />

  <div class="gachi" v-if="rectangles.every(item => !item.isVisible)">
    <img src="/mine.webp" alt="">
    <span>Привет)</span>
  </div>
</template>

<style>
.rectangle {
  width: 100px;
  height: 100px;
  cursor: pointer;
}
.green {
  background-color: green;
}
.blue {
  background-color: blue;
}
.red {
  background-color: red;
}
.orange {
  background-color: orange;
}
.yellow {
  background-color: yellow;
}
.purple {
  background-color: purple;
}
.gachi {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.gelatine {
  animation: gelatine 0.5s infinite;
}
@keyframes gelatine {
  from, to { transform: scale(1, 1); }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05); }
}
</style>
