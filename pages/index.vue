<template>
  <div class="index">
    <div ref="webgl" class="webgl"></div>
  </div>
</template>

<script>
import Stage from '../components/canvas/stage'
import Mesh from '../components/canvas/mesh'

export default {
  name: 'IndexPage',

  mounted() {
    const stage = new Stage(this.$refs.webgl)
    stage.init()

    const sphere = new Mesh(stage)
    sphere.init()

    window.addEventListener('resize', () => {
      sphere.onResize()
      stage.onResize()
    })

    const raf = () => {
      sphere.onRaf()
      stage.onRaf()
    }

    this.$gsap.ticker.add(raf)
  },
}
</script>

<style lang="scss" scoped>
.webgl {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
